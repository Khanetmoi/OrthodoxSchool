// Lesson player. Delegates the sandbox rendering to the correct engine.
// Reached from home.js (curriculum) or dashboard.js (continue button).

import { state, markLessonCompleted, getCompleted } from '../core/state.js';
import { ALL_LESSONS } from '../content/lessons-index.js';
import { SandboxRegistry } from '../core/sandbox.js';
import { setView, setCrumb } from '../core/router.js';
import { $, addXP, showToast, fireConfetti } from '../core/ui.js';
import { Sound } from '../core/sound.js';
import { Storage } from '../core/storage.js';
import { isSignedIn } from '../core/session.js';
import { updateProgress } from './home.js';
import { renderCompletion } from './completion.js';

let activeEngine = null;

// ---------- Public entry point ----------
export function openLesson(track, lessonId) {
  const lesson = ALL_LESSONS[track]?.[lessonId];
  if (!lesson) {
    showToast('Lesson coming soon', true);
    return;
  }

  state.currentLessonId = lessonId;
  state.currentStepIndex = 0;
  state.activeTrack = track;

  document.documentElement.dataset.track = track;
  setView('lesson');
  setCrumb(`<b>${lesson.module}</b>`);
  renderStep();
}

// ---------- Step rendering ----------
function renderStep() {
  const lesson = ALL_LESSONS[state.activeTrack][state.currentLessonId];
  const step = lesson.steps[state.currentStepIndex];
  const total = lesson.steps.length;

  // Header
  $('#lessonKicker').textContent = lesson.module;
  $('#lessonTitle').textContent = lesson.title;
  $('#lessonStep').textContent = `Step ${state.currentStepIndex + 1} of ${total}`;

  // Step dots
  const dots = $('#stepDots');
  dots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'step-dot' +
      (i < state.currentStepIndex ? ' done' :
       i === state.currentStepIndex ? ' current' : '');
    dots.appendChild(d);
  }

  // Destroy previous engine (if any)
  if (activeEngine && activeEngine.destroy) {
    try { activeEngine.destroy(); } catch (e) { /* noop */ }
    activeEngine = null;
  }

  // Render lesson shell
  $('#lessonBody').innerHTML = `
    <p class="lede">${step.lede}</p>
    <div id="sandboxMount"></div>
    <div class="instruction" id="instruction">
      <div class="instruction-icon">${step.instruction.icon}</div>
      <div class="instruction-text">${step.instruction.text}</div>
    </div>
    <div class="actions">
      <button class="btn btn-ghost" id="hintBtn" type="button">Need a hint?</button>
      <button class="btn btn-primary" id="continueBtn" type="button" disabled>Continue →</button>
    </div>
  `;

  // Mount sandbox
  const mount = $('#sandboxMount');
  const Engine = SandboxRegistry.get(state.activeTrack);
  if (!Engine) {
    showToast('Sandbox engine missing', true);
    return;
  }
  activeEngine = Engine.mount(mount, {
    step,
    onSuccess: (payload) => handleSuccess(step, payload)
  });

  // Hint button
  const hintBtn = $('#hintBtn');
  hintBtn.addEventListener('click', () => {
    hintBtn.style.display = 'none';
    if (activeEngine && activeEngine.hint) activeEngine.hint(step);
    showToast('Look for the highlighted element');
  });

  // Continue button
  const continueBtn = $('#continueBtn');
  continueBtn.addEventListener('click', () => {
    if (continueBtn.disabled) return;
    advanceStep();
  });
}

// ---------- Success handling ----------
function handleSuccess(step, payload) {
  // Apply the visual effect in the sandbox (bold, table, chart, etc.)
  if (activeEngine && activeEngine.applySuccess) {
    try {
      activeEngine.applySuccess(payload || step.success || {});
    } catch (e) {
      console.warn('Engine applySuccess failed', e);
    }
  }

  // XP + sound
  const success = step.success || {};
  if (success.xp) addXP(success.xp, success.toast);
  Sound.success();

  // Update instruction to the success message
  const inst = $('#instruction');
  if (inst) {
    inst.className = 'instruction success';
    inst.innerHTML = success.instruction || inst.innerHTML;
  }

  // Enable Continue
  const continueBtn = $('#continueBtn');
  if (continueBtn) continueBtn.disabled = false;

  // Clean up pulse animation
  document.querySelectorAll('.hint-pulse').forEach(el => el.classList.remove('hint-pulse'));

  // Persist
  Storage.save(state);
}

// ---------- Step advancement ----------
export function advanceStep() {
  const lesson = ALL_LESSONS[state.activeTrack][state.currentLessonId];

  if (state.currentStepIndex < lesson.steps.length - 1) {
    state.currentStepIndex++;
    renderStep();
    return;
  }

  // Lesson complete
  const wasNew = !getCompleted(state.activeTrack).has(state.currentLessonId);
  if (wasNew) {
    markLessonCompleted(state.activeTrack, state.currentLessonId);
    updateProgress();
    Sound.complete();
    fireConfetti();
  }

  Storage.save(state);
  renderCompletion(lesson);
}

// ---------- Nav back button ----------
// This is a top-level binding because the back button lives in the DOM shell.
document.getElementById('backBtn')?.addEventListener('click', () => {
  if (isSignedIn()) {
    import('./dashboard.js').then(m => {
      m.renderDashboard();
      setView('dashboard');
      setCrumb('');
    });
  } else {
    import('./landing.js').then(m => {
      m.renderLanding();
      setView('landing');
      setCrumb('');
    });
  }
});
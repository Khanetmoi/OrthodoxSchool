// Lesson player. Delegates the sandbox to the correct engine.

import { state, markLessonCompleted, getCompleted } from '../core/state.js';
import { ALL_LESSONS } from '../content/lessons-index.js';
import { CURRICULUM } from '../content/curriculum.js';
import { SandboxRegistry } from '../core/sandbox.js';
import { setView, setCrumb } from '../core/router.js';
import { $, addXP, showToast, fireConfetti } from '../core/ui.js';
import { Sound } from '../core/sound.js';
import { Storage } from '../core/storage.js';
import { updateProgress } from './home.js';
import { renderCompletion } from './completion.js';

let activeEngine = null;

export function openLesson(track, lessonId) {
  const lesson = ALL_LESSONS[track][lessonId];
  if (!lesson) { showToast('Lesson coming soon', true); return; }

  state.currentLessonId = lessonId;
  state.currentStepIndex = 0;
  state.activeTrack = track;

  document.documentElement.dataset.track = track;
  setView('lesson');
  setCrumb(`Curriculum · <b>${lesson.module}</b>`);
  renderStep();
}

export function renderStep() {
  const lesson = ALL_LESSONS[state.activeTrack][state.currentLessonId];
  const step = lesson.steps[state.currentStepIndex];
  const total = lesson.steps.length;

  $('#lessonKicker').textContent = lesson.module;
  $('#lessonTitle').textContent = lesson.title;
  $('#lessonStep').textContent = `Step ${state.currentStepIndex + 1} of ${total}`;

  // Step dots
  const dots = $('#stepDots');
  dots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'step-dot' +
      (i < state.currentStepIndex ? ' done' : i === state.currentStepIndex ? ' current' : '');
    dots.appendChild(d);
  }

  // Destroy previous engine
  if (activeEngine && activeEngine.destroy) activeEngine.destroy();

  // Render shell
  $('#lessonBody').innerHTML = `
    <p class="lede">${step.lede}</p>
    <div id="sandboxMount"></div>
    <div class="instruction" id="instruction">
      <div class="instruction-icon">${step.instruction.icon}</div>
      <div class="instruction-text">${step.instruction.text}</div>
    </div>
    <div class="actions">
      <button class="btn btn-ghost" id="hintBtn">Need a hint?</button>
      <button class="btn btn-primary" id="continueBtn" disabled>Continue →</button>
    </div>
  `;

  // Mount sandbox
  const mount = $('#sandboxMount');
  const Engine = SandboxRegistry.get(state.activeTrack);
  activeEngine = Engine.mount(mount, {
    step,
    onSuccess: (successPayload) => handleSuccess(step, successPayload)
  });

  // Hint
  $('#hintBtn').addEventListener('click', () => {
    $('#hintBtn').style.display = 'none';
    activeEngine.hint?.(step);
    showToast('Look for the highlighted element');
  });

  // Continue
  $('#continueBtn').addEventListener('click', () => {
    if ($('#continueBtn').disabled) return;
    advanceStep();
  });
}

function handleSuccess(step, payload) {
  // Apply the visual effect in the sandbox
  if (activeEngine && activeEngine.applySuccess) {
    activeEngine.applySuccess(payload || step.success || {});
  }

  if (step.success.xp) addXP(step.success.xp, step.success.toast);
  Sound.success();

  const inst = $('#instruction');
  inst.className = 'instruction success';
  inst.innerHTML = step.success.instruction || inst.innerHTML;

  $('#continueBtn').disabled = false;
  document.querySelectorAll('.hint-pulse').forEach(el => el.classList.remove('hint-pulse'));
  Storage.save(state);
}

export function advanceStep() {
  const lesson = ALL_LESSONS[state.activeTrack][state.currentLessonId];
  if (state.currentStepIndex < lesson.steps.length - 1) {
    state.currentStepIndex++;
    renderStep();
  } else {
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
}
// Curriculum map renderer. Reads from curriculum.js and state.js.
// This is the "browse the curriculum" view — reached from the dashboard
// or from the landing page's "Browse the curriculum" button.

import { CURRICULUM, TRACKS } from '../content/curriculum.js';
import { state, getCompleted } from '../core/state.js';
import { openLesson } from './lesson.js';
import { showToast } from '../core/ui.js';

export function renderHome() {
  const container = document.getElementById('mapContainer');
  if (!container) return;

  const track = state.activeTrack || 'word';
  const curriculum = CURRICULUM[track];
  const completed = getCompleted(track);

  // ----- Stats row -----
  const totalLessons = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce((s, m) => s + m.lessons.length, 0), 0);
  const doneLessons = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce(
      (s, m) => s + m.lessons.filter(id => completed.has(id)).length, 0), 0);
  const portfolioCount = curriculum.reduce(
    (sum, phase) => sum + phase.modules.filter(m =>
      m.lessons.length > 0 && m.lessons.every(id => completed.has(id))
    ).length, 0);

  const statRow = document.getElementById('statRow');
  if (statRow) {
    statRow.innerHTML = `
      <div class="stat"><span class="stat-num">${doneLessons}</span> / ${totalLessons} lessons</div>
      <div class="stat"><span class="stat-num">${portfolioCount}</span> portfolio pieces</div>
      <div class="stat"><span class="stat-num">${state.xp}</span> XP earned</div>
    `;
  }

  // ----- Hero title + lede per track -----
  const heroTitle = document.getElementById('homeHeroTitle');
  const heroLede = document.getElementById('homeHeroLede');
  if (heroTitle && TRACKS[track]) {
    heroTitle.innerHTML = TRACKS[track].heroTitle;
  }
  if (heroLede && TRACKS[track]) {
    heroLede.textContent = TRACKS[track].heroLede;
  }

  // ----- Track tabs active state -----
  document.querySelectorAll('.track-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.track === track);
  });

  // ----- Phase + module grid -----
  container.innerHTML = '';

  curriculum.forEach(phase => {
    const phaseEl = document.createElement('div');
    phaseEl.className = 'phase';

    const head = document.createElement('div');
    head.className = 'phase-head';
    head.innerHTML = `
      <div class="phase-num">${phase.phase}</div>
      <h2>${phase.goal}</h2>
    `;
    phaseEl.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'modules';

    phase.modules.forEach(mod => {
      const lessonsDone = mod.lessons.filter(id => completed.has(id)).length;
      const allDone = mod.lessons.length > 0 && lessonsDone === mod.lessons.length;

      const card = document.createElement('button');
      card.className = 'module-card' + (allDone ? ' completed' : '');
      card.type = 'button';
      card.setAttribute('aria-label', `Open ${mod.title}, ${lessonsDone} of ${mod.lessons.length} lessons completed`);
      card.innerHTML = `
        <div class="module-num">${mod.num}</div>
        <h3>${mod.title}</h3>
        <p>${mod.desc}</p>
        <div class="module-meta">
          <span><b>${lessonsDone}</b> / ${mod.lessons.length} lessons</span>
          <span>${mod.lessons.length === 0 ? '🔒 Soon' : '📁 Portfolio'}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        if (mod.lessons.length === 0) {
          showToast('This module is coming soon', true);
          return;
        }
        // Open the first incomplete lesson; if all done, open the first lesson
        const nextLesson = mod.lessons.find(id => !completed.has(id)) || mod.lessons[0];
        openLesson(track, nextLesson);
      });

      grid.appendChild(card);
    });

    phaseEl.appendChild(grid);
    container.appendChild(phaseEl);
  });
}

// Called after a lesson is completed to refresh the progress bar in the topbar.
export function updateProgress() {
  const track = state.activeTrack || 'word';
  const curriculum = CURRICULUM[track];
  const completed = getCompleted(track);

  const total = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce((s, m) => s + m.lessons.length, 0), 0);
  const done = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce(
      (s, m) => s + m.lessons.filter(id => completed.has(id)).length, 0), 0);

  const pct = total ? (done / total) * 100 : 0;
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = pct + '%';

  const xpChip = document.getElementById('xpChip');
  if (xpChip) xpChip.textContent = state.xp + ' XP';
}
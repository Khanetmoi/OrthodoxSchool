// Curriculum map renderer. Reads from curriculum.js and state.js.

import { CURRICULUM, TRACKS } from '../content/curriculum.js';
import { state, getCompleted } from '../core/state.js';
import { openLesson } from './lesson.js';
import { showToast } from '../core/ui.js';

export function renderHome() {
  const container = document.getElementById('mapContainer');
  const track = state.activeTrack;
  const curriculum = CURRICULUM[track];
  const completed = getCompleted(track);

  // Stats
  const totalLessons = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce((s, m) => s + m.lessons.length, 0), 0);
  const doneLessons = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce(
      (s, m) => s + m.lessons.filter(id => completed.has(id)).length, 0), 0);
  document.getElementById('statRow').innerHTML = `
    <div class="stat"><span class="stat-num">${doneLessons}</span> / ${totalLessons} lessons</div>
    <div class="stat"><span class="stat-num">${state.xp}</span> XP earned</div>
  `;

  // Phases
  container.innerHTML = '';
  curriculum.forEach(phase => {
    const phaseEl = document.createElement('div');
    phaseEl.className = 'phase';
    phaseEl.innerHTML = `
      <div class="phase-head">
        <div class="phase-num">${phase.phase}</div>
        <h2>${phase.goal}</h2>
      </div>
    `;

    const grid = document.createElement('div');
    grid.className = 'modules';

    phase.modules.forEach(mod => {
      const lessonsDone = mod.lessons.filter(id => completed.has(id)).length;
      const allDone = lessonsDone === mod.lessons.length && mod.lessons.length > 0;
      const card = document.createElement('button');
      card.className = 'module-card' + (allDone ? ' completed' : '');
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
        const next = mod.lessons.find(id => !completed.has(id)) || mod.lessons[0];
        openLesson(track, next);
      });
      grid.appendChild(card);
    });

    phaseEl.appendChild(grid);
    container.appendChild(phaseEl);
  });
}

// Progress bar updater — called after each lesson completion.
export function updateProgress() {
  const curriculum = CURRICULUM[state.activeTrack];
  const completed = getCompleted(state.activeTrack);
  const total = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce((s, m) => s + m.lessons.length, 0), 0);
  const done = curriculum.reduce(
    (sum, phase) => sum + phase.modules.reduce(
      (s, m) => s + m.lessons.filter(id => completed.has(id)).length, 0), 0);
  document.getElementById('progressFill').style.width = (total ? (done / total) * 100 : 0) + '%';
}
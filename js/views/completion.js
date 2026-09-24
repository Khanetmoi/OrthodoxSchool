// Final "Lesson complete" screen.

import { state } from '../core/state.js';
import { ALL_LESSONS } from '../content/lessons-index.js';
import { CURRICULUM } from '../content/curriculum.js';
import { $ } from '../core/ui.js';
import { setView } from '../core/router.js';
import { openLesson } from './lesson.js';
import { renderHome } from './home.js';
import { showToast } from '../core/ui.js';

export function renderCompletion(lesson) {
  $('#lessonStep').textContent = 'Complete';
  $('#stepDots').innerHTML = '';
  $('#lessonBody').innerHTML = `
    <div class="completion">
      <div class="trophy">🏆</div>
      <h2>Lesson complete!</h2>
      <p>${lesson.summary || 'You finished this lesson.'}</p>
      ${lesson.portfolio ? `<div class="portfolio-badge">📁 Portfolio piece: ${lesson.portfolio}</div>` : ''}
      <div class="recap">
        ${(lesson.recap || []).map(r => `<div class="recap-item">${r}</div>`).join('')}
      </div>
      <div class="actions" style="justify-content:center;">
        <button class="btn btn-ghost" id="backToMap">Back to curriculum</button>
        <button class="btn btn-primary" id="nextLesson">Next lesson →</button>
      </div>
    </div>
  `;

  $('#backToMap').addEventListener('click', () => {
    renderHome();
    setView('home');
    $('#crumb').textContent = 'Curriculum';
  });

  $('#nextLesson').addEventListener('click', () => {
    const track = state.activeTrack;
    const allLessons = [];
    CURRICULUM[track].forEach(p => p.modules.forEach(m =>
      m.lessons.forEach(id => allLessons.push(id))));
    const i = allLessons.indexOf(state.currentLessonId);
    const nextId = allLessons[i + 1];
    if (nextId) openLesson(track, nextId);
    else {
      renderHome();
      setView('home');
      showToast('🎉 Curriculum complete!');
    }
  });
}
import './engines/index.js';  // ← register sandbox engines

import { state } from './core/state.js';
import { Storage } from './core/storage.js';
import { $ } from './core/ui.js';
import { setView, currentTrack } from './core/router.js';
import { renderHome } from './views/home.js';
import { TRACKS } from './content/curriculum.js';

function boot() {
  const saved = Storage.load();
  if (saved) {
    state.xp = saved.xp || 0;
    state.completedByTrack = saved.completedByTrack || { word: [], excel: [], ppt: [] };
    state.activeTrack = saved.activeTrack || 'word';
    $('#xpChip').textContent = state.xp + ' XP';
  }

  applyTrack(currentTrack());
  renderHome();

  $('#logoHome').addEventListener('click', goHome);
  $('#homeBtn').addEventListener('click', goHome);
  $('#backBtn').addEventListener('click', goHome);

  document.querySelectorAll('.track-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTrack = btn.dataset.track;
      Storage.save(state);
      applyTrack(state.activeTrack);
      renderHome();
    });
  });

  setView('home');
}

function goHome() {
  renderHome();
  setView('home');
  $('#crumb').textContent = 'Curriculum';
}

function applyTrack(track) {
  const t = TRACKS[track];
  document.documentElement.dataset.track = track;
  $('#logoMark').textContent = t.mark;
  $('#logoText').textContent = t.name;
  $('#homeHeroTitle').innerHTML = t.heroTitle;
  $('#homeHeroLede').textContent = t.heroLede;
  document.querySelectorAll('.track-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.track === track);
  });
}

boot();
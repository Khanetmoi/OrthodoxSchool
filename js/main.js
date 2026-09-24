import './engines/index.js';

import { state } from './core/state.js';
import { Storage } from './core/storage.js';
import { $ } from './core/ui.js';
import { setView } from './core/router.js';
import { isSignedIn } from './core/session.js';
import { renderLanding } from './views/landing.js';
import { renderHome } from './views/home.js';
import { renderDashboard } from './views/dashboard.js';
import { TRACKS } from './content/curriculum.js';

function boot() {
  // Restore progress
  const saved = Storage.load();
  if (saved) {
    state.xp = saved.xp || 0;
    state.completedByTrack = saved.completedByTrack || { word: [], excel: [], ppt: [] };
    state.activeTrack = saved.activeTrack || 'word';
    $('#xpChip').textContent = state.xp + ' XP';
  }

  applyTrack(state.activeTrack);
  renderLanding();
  renderHome();      // curriculum view stays ready in the background

  // Global nav handlers
  $('#logoHome').addEventListener('click', goHome);
  $('#homeBtn').addEventListener('click', goHome);
  $('#backBtn').addEventListener('click', goHome);

  // Track switcher (curriculum)
  document.querySelectorAll('.track-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTrack = btn.dataset.track;
      Storage.save(state);
      applyTrack(state.activeTrack);
      renderHome();
    });
  });

  // Determine starting view
  if (isSignedIn()) {
    renderDashboard();
    setView('dashboard');
    document.getElementById('homeBtn').style.display = 'inline-flex';
  } else {
    setView('landing');
    document.getElementById('homeBtn').style.display = 'none';
  }
}

function goHome() {
  if (isSignedIn()) {
    renderDashboard();
    setView('dashboard');
  } else {
    setView('landing');
  }
  $('#crumb').textContent = '';
}

function applyTrack(track) {
  const t = TRACKS[track];
  document.documentElement.dataset.track = track;
  $('#logoMark').textContent = t.mark;
  $('#logoText').textContent = t.name;
  document.querySelectorAll('.track-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.track === track);
  });
}

boot();
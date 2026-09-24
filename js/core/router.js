import { state } from './state.js';

export function currentTrack() { return state.activeTrack; }

export function setView(name) {
  state.view = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const map = {
    landing:    'viewLanding',
    auth:       'viewAuth',
    dashboard:  'viewDashboard',
    curriculum: 'viewHome',
    lesson:     'viewLesson'
  };
  const id = map[name] || 'viewHome';
  const el = document.getElementById(id);
  if (el) el.classList.add('active');

  // Home button visibility
  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) {
    homeBtn.style.display = ['curriculum','lesson'].includes(name) ? 'inline-flex' : 'none';
  }
}

export function setCrumb(html) {
  const c = document.getElementById('crumb');
  if (c) c.innerHTML = html;
}
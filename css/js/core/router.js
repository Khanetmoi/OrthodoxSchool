// View switching + active-track helpers.

import { state } from './state.js';

export function currentTrack() { return state.activeTrack; }

export function setView(name) {
  state.view = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(name === 'home' ? 'viewHome' : 'viewLesson');
  if (el) el.classList.add('active');
  document.getElementById('homeBtn').style.display = name === 'lesson' ? 'inline-flex' : 'none';
}

export function setCrumb(html) {
  document.getElementById('crumb').innerHTML = html;
}
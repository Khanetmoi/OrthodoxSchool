// Small DOM + UI helpers used everywhere.

import { state } from './state.js';
import { Storage } from './storage.js';
import { Sound } from './sound.js';

export const $ = (sel) => document.querySelector(sel);
export const $$ = (sel) => document.querySelectorAll(sel);

export function showToast(msg, isError) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (isError ? ' error' : '');
  if (isError) Sound.wrong(); else Sound.click();
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2200);
}

export function addXP(amount, message) {
  state.xp += amount;
  const chip = $('#xpChip');
  chip.textContent = state.xp + ' XP';
  chip.classList.add('pop');
  setTimeout(() => chip.classList.remove('pop'), 250);

  const rect = chip.getBoundingClientRect();
  const float = document.createElement('div');
  float.className = 'xp-float';
  float.textContent = '+' + amount + ' XP';
  float.style.left = (rect.left + rect.width / 2 - 30) + 'px';
  float.style.top = (rect.top - 10) + 'px';
  document.body.appendChild(float);
  setTimeout(() => float.remove(), 1200);

  if (message) showToast(message);
  Storage.save(state);
}

export function fireConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#4fc98a', '#1e6b3e', '#f0c419', '#2b579a', '#e85a5a'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    p.style.animationDelay = Math.random() * 0.4 + 's';
    p.style.animationDuration = (2.2 + Math.random() * 1.4) + 's';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }
}

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
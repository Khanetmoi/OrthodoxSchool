// Web Audio tones — no asset files.

let ctx = null;
function init() {
  if (!ctx) {
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
}
function tone(freq, dur, type='sine', vol=0.08) {
  init(); if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + dur);
}

export const Sound = {
  success() { tone(587.33, 0.12); setTimeout(() => tone(880, 0.18), 100); },
  wrong() { tone(180, 0.15, 'square', 0.05); setTimeout(() => tone(140, 0.18, 'square', 0.05), 80); },
  click() { tone(1200, 0.04, 'sine', 0.03); },
  complete() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      setTimeout(() => tone(f, 0.3), i * 110));
  }
};
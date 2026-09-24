// localStorage wrapper with a single key. Safe against private mode failures.

const KEY = 'learnByDoing.v1';

export const Storage = {
  save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        xp: state.xp,
        completedByTrack: state.completedByTrack,
        activeTrack: state.activeTrack,
        savedAt: Date.now()
      }));
    } catch (e) { /* private mode, ignore */ }
  },
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  },
  clear() {
    try { localStorage.removeItem(KEY); } catch (e) {}
  }
};
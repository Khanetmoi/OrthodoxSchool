// Central state object. Everything reads from here.

export const state = {
  view: 'home',           // 'home' | 'lesson'
  activeTrack: 'word',    // 'word' | 'excel' | 'ppt'
  currentLessonId: null,
  currentStepIndex: 0,
  xp: 0,
  completedByTrack: {
    word: [],
    excel: [],
    ppt: []
  }
};

export function saveState() {
  // Called by main.js's Storage. Kept here as a semantic alias.
}

export function isLessonCompleted(track, lessonId) {
  return state.completedByTrack[track]?.includes(lessonId);
}

export function markLessonCompleted(track, lessonId) {
  const arr = state.completedByTrack[track];
  if (arr && !arr.includes(lessonId)) arr.push(lessonId);
}

export function getCompleted(track) {
  return new Set(state.completedByTrack[track] || []);
}
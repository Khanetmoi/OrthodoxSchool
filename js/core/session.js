// Simple client-side session. No passwords — this is a demo auth layer.
// Stores the learner's profile + their progress in localStorage.

import { state } from './state.js';

const KEY = 'learnByDoing.session.v1';
const ROSTER_KEY = 'learnByDoing.roster.v1';

// ---------- Session ----------

export function getSession() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

export function isSignedIn() {
  const s = getSession();
  return !!(s && s.user && s.user.name);
}

export function signIn({ name, email }) {
  const session = {
    user: {
      name: name.trim(),
      email: (email || '').trim().toLowerCase(),
      joinedAt: Date.now()
    },
    track: state.activeTrack || 'word'
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(session));
  } catch (e) {}
  addToRoster(session.user);
  return session;
}

export function signOut() {
  try { localStorage.removeItem(KEY); } catch (e) {}
}

// ---------- Roster (for the demo "leaderboard") ----------

function getRoster() {
  try {
    const raw = localStorage.getItem(ROSTER_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveRoster(list) {
  try {
    localStorage.setItem(ROSTER_KEY, JSON.stringify(list));
  } catch (e) {}
}

function addToRoster(user) {
  const list = getRoster();
  const existing = list.find(u => u.email === user.email);
  if (existing) {
    existing.name = user.name;
    existing.lastSeen = Date.now();
  } else {
    list.push({ ...user, lastSeen: Date.now() });
  }
  saveRoster(list);
}

/**
 * Returns a leaderboard: everyone in the roster plus the current user,
 * with their XP from the current browser's state. In a real app this
 * would come from a backend — here it's a friendly local demo.
 */
export function getLeaderboard() {
  const list = getRoster();
  const me = getSession()?.user;
  const myXP = state.xp || 0;

  // Assign some plausible XP to other roster entries so the board
  // doesn't look empty. In production, remove this.
  const rows = list.map(u => {
    if (u.email === me?.email) {
      return { ...u, xp: myXP, isMe: true };
    }
    // Deterministic pseudo-random XP based on email
    const seed = [...u.email].reduce((a, c) => a + c.charCodeAt(0), 0);
    return { ...u, xp: 120 + (seed % 640), isMe: false };
  });

  // Add a few "classmates" so the board feels alive
  if (rows.length < 6) {
    const fakes = [
      { name: 'Maya R.', email: 'maya@class.edu', xp: 640 },
      { name: 'Idris A.', email: 'idris@class.edu', xp: 580 },
      { name: 'Lena K.', email: 'lena@class.edu', xp: 470 },
      { name: 'Tomas B.', email: 'tomas@class.edu', xp: 410 },
      { name: 'Priya S.', email: 'priya@class.edu', xp: 355 }
    ];
    const have = new Set(rows.map(r => r.email));
    fakes.forEach(f => {
      if (!have.has(f.email)) rows.push({ ...f, isMe: false });
    });
  }

  return rows.sort((a, b) => b.xp - a.xp);
}
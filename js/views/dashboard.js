import { state, getCompleted } from '../core/state.js';
import { CURRICULUM, TRACKS } from '../content/curriculum.js';
import { ALL_LESSONS } from '../content/lessons-index.js';
import { setView } from '../core/router.js';
import { openLesson } from './lesson.js';
import { signOut, getSession, getLeaderboard } from '../core/session.js';
import { $ } from '../core/ui.js';

export function renderDashboard() {
  const el = document.getElementById('viewDashboard');
  if (!el) return;

  const session = getSession();
  const name = session?.user?.name?.split(' ')[0] || 'there';
  const firstTime = state.completedByTrack.word.length === 0
                 && state.completedByTrack.excel.length === 0
                 && state.completedByTrack.ppt.length === 0;

  // Compute stats
  let totalLessons = 0;
  let totalCompleted = 0;
  let totalPortfolio = 0;
  const trackStats = {};

  Object.entries(CURRICULUM).forEach(([track, phases]) => {
    const completed = getCompleted(track);
    const lessons = phases.reduce((sum, p) => sum + p.modules.reduce((s, m) => s + m.lessons.length, 0), 0);
    const done = phases.reduce((sum, p) => sum + p.modules.reduce(
      (s, m) => s + m.lessons.filter(id => completed.has(id)).length, 0), 0);
    const portfolio = phases.reduce((sum, p) => sum + p.modules.filter(m =>
      m.lessons.length > 0 && m.lessons.every(id => completed.has(id))).length, 0);

    totalLessons += lessons;
    totalCompleted += done;
    totalPortfolio += portfolio;

    trackStats[track] = { lessons, done, portfolio, completed };
  });

  // Find continue target (first uncompleted lesson in current track)
  let continueLesson = null;
  const activeTrack = state.activeTrack || 'word';
  CURRICULUM[activeTrack].some(phase =>
    phase.modules.some(mod =>
      mod.lessons.some(id => {
        if (!getCompleted(activeTrack).has(id)) {
          continueLesson = { track: activeTrack, id };
          return true;
        }
        return false;
      })
    )
  );

  el.innerHTML = `
    <div class="dashboard">
      <div class="dash-greeting">
        <div class="kicker">${firstTime ? 'Welcome' : 'Welcome back'}</div>
        <h1>Hi ${escapeHtml(name)}, ${firstTime ? 'let\'s get started.' : 'ready to continue?'}</h1>
        <p>${firstTime
          ? 'Pick a track below. Each lesson takes about five minutes and ends with something you can use.'
          : `You've completed ${totalCompleted} of ${totalLessons} lessons so far.`
        }</p>
      </div>

      <div class="dash-stats">
        <div class="dash-stat">
          <div class="dash-stat-accent"></div>
          <div class="dash-stat-label">Lessons completed</div>
          <div class="dash-stat-value">${totalCompleted}<small> / ${totalLessons}</small></div>
        </div>
        <div class="dash-stat">
          <div class="dash-stat-accent"></div>
          <div class="dash-stat-label">XP earned</div>
          <div class="dash-stat-value">${state.xp}<small> XP</small></div>
        </div>
        <div class="dash-stat">
          <div class="dash-stat-accent"></div>
          <div class="dash-stat-label">Portfolio pieces</div>
          <div class="dash-stat-value">${totalPortfolio}<small> modules</small></div>
        </div>
      </div>

      ${continueLesson && !firstTime ? `
        <div class="dash-continue">
          <div class="dash-continue-info">
            <div class="kicker">Pick up where you left off</div>
            <h3>${escapeHtml(getLessonTitle(continueLesson.track, continueLesson.id))}</h3>
            <p>${TRACKS[continueLesson.track].name} · ${escapeHtml(getLessonModule(continueLesson.track, continueLesson.id))}</p>
          </div>
          <button class="dash-continue-btn" id="dashContinue">
            Continue lesson →
          </button>
        </div>
      ` : ''}

      <div class="dash-section-title">Your tracks</div>
      <div class="dash-tracks">
        ${renderTrackCard('word', trackStats.word, '#2b579a')}
        ${renderTrackCard('excel', trackStats.excel, '#217346')}
        ${renderTrackCard('ppt', trackStats.ppt, '#b7472a')}
      </div>

      <div class="dash-section-title">Cohort leaderboard</div>
      <div class="dash-leaderboard">
        ${getLeaderboard().slice(0, 8).map((row, i) => `
          <div class="leader-row ${row.isMe ? 'me' : ''}">
            <div class="leader-rank">${i + 1}</div>
            <div class="leader-name">${escapeHtml(row.name)}${row.isMe ? ' (you)' : ''}</div>
            <div class="leader-xp">${row.xp} XP</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Wire continue
  const continueBtn = el.querySelector('#dashContinue');
  if (continueBtn && continueLesson) {
    continueBtn.addEventListener('click', () => {
      state.activeTrack = continueLesson.track;
      openLesson(continueLesson.track, continueLesson.id);
    });
  }

  // Wire track cards
  el.querySelectorAll('.dash-track').forEach(card => {
    card.addEventListener('click', () => {
      const track = card.dataset.track;
      state.activeTrack = track;
      setView('curriculum');
    });
  });

  // Sign out in header
  updateTopbarSignout(name, session);
}

function renderTrackCard(track, stats, accent) {
  const pct = stats.lessons ? Math.round((stats.done / stats.lessons) * 100) : 0;
  const label = {
    word: 'Word',
    excel: 'Excel',
    ppt: 'PowerPoint'
  }[track];
  const mark = { word: 'W', excel: 'X', ppt: 'P' }[track];

  return `
    <button class="dash-track" data-track="${track}" style="--track-accent:${accent};">
      <div class="dash-track-head">
        <div class="dash-track-mark">${mark}</div>
        <div>
          <h3>${label}</h3>
          <p>${stats.done} of ${stats.lessons} lessons · ${stats.portfolio} portfolio</p>
        </div>
      </div>
      <div class="dash-track-progress">
        <div class="dash-track-bar"><div style="width:${pct}%;"></div></div>
        <span class="dash-track-pct">${pct}%</span>
      </div>
    </button>
  `;
}

function getLessonTitle(track, id) {
  return ALL_LESSONS[track]?.[id]?.title || 'Continue';
}
function getLessonModule(track, id) {
  return ALL_LESSONS[track]?.[id]?.module || '';
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function updateTopbarSignout(name, session) {
  // Inject a small "signed in as" chip + sign out next to Home
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  // Remove any existing chip
  topbar.querySelector('.user-chip')?.remove();

  if (!session) return;

  const chip = document.createElement('button');
  chip.className = 'user-chip';
  chip.style.cssText = `
    background: transparent;
    border: 1px solid var(--line);
    color: var(--ink-soft);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.15s;
  `;
  chip.innerHTML = `
    <span style="width:22px;height:22px;border-radius:50%;background:var(--green);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:800;">
      ${escapeHtml(name[0] || '?').toUpperCase()}
    </span>
    ${escapeHtml(name)}
  `;
  chip.title = 'Click to sign out';
  chip.addEventListener('click', () => {
    if (confirm('Sign out of your profile? Your progress stays saved in this browser.')) {
      signOut();
      location.reload();
    }
  });
  topbar.appendChild(chip);
}
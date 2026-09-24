import { setView } from '../core/router.js';
import { showAuth } from './auth.js';
import { openLesson } from './lesson.js';

export function renderLanding() {
  const el = document.getElementById('viewLanding');
  if (!el) return;

  el.innerHTML = `
    <div class="landing">
      <section class="landing-hero">
        <div class="landing-visual" aria-hidden="true">
          <div class="mock-window word">
            <div class="mock-titlebar" style="background:#2b579a;">
              <div class="m-dot"></div><div class="m-dot"></div><div class="m-dot"></div>
            </div>
            <div class="mock-body">
              <div class="m-line bold"></div>
              <div class="m-line"></div>
              <div class="m-line short"></div>
              <div class="m-line"></div>
            </div>
          </div>
          <div class="mock-window excel">
            <div class="mock-titlebar" style="background:#217346;">
              <div class="m-dot"></div><div class="m-dot"></div><div class="m-dot"></div>
            </div>
            <div class="mock-grid">
              ${Array.from({ length: 24 }).map((_, i) =>
                `<div class="m-cell ${[4, 9, 14, 19].includes(i) ? 'hl' : ''}"></div>`
              ).join('')}
            </div>
          </div>
          <div class="mock-window ppt">
            <div class="mock-titlebar" style="background:#b7472a;">
              <div class="m-dot"></div><div class="m-dot"></div><div class="m-dot"></div>
            </div>
            <div class="mock-body">
              <div class="m-line bold"></div>
              <div class="m-line short"></div>
            </div>
          </div>
        </div>

        <span class="landing-badge">
          <span class="dot-live"></span>
          Now enrolling · Fall cohort
        </span>

        <h1>Master Office <em>by doing</em>, not by watching.</h1>

        <p class="lede">
          An interactive classroom for Word, Excel, and PowerPoint. You don't
          watch videos — you use a live sandbox of each app, complete real
          tasks, and get instant feedback. Every lesson ends with a portfolio
          piece you'd actually send.
        </p>

        <div class="landing-cta-row">
          <button class="btn btn-hero btn-hero-primary" id="landingStart">
            Start learning — free
            <span aria-hidden="true">→</span>
          </button>
          <button class="btn btn-hero btn-hero-secondary" id="landingBrowse">
            Browse the curriculum
          </button>
        </div>

        <div class="landing-trust">
          <span class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            30 modules · 79 lessons
          </span>
          <span class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Real sandboxes, not videos
          </span>
          <span class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Works on any device
          </span>
        </div>
      </section>

      <section class="landing-features">
        <div class="section-head">
          <div class="kicker">Why it works</div>
          <h2>Built for how adults actually learn software</h2>
          <p>No passive watching. No memorizing menus. You use the tool, make mistakes safely, and build muscle memory.</p>
        </div>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Learn by doing</h3>
            <p>A live sandbox of Word, Excel, and PowerPoint runs inside your browser. Every task is a real interaction, not a multiple-choice quiz.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Instant feedback</h3>
            <p>Click the wrong tool and it shakes. Get it right and the page changes. You learn the interface by feel, not by memorization.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📁</div>
            <h3>Real portfolio pieces</h3>
            <p>Every lesson ends with a document, spreadsheet, or deck you'd actually send — a CV, a budget, a pitch deck.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>Progress you can see</h3>
            <p>XP, completion tracking, and streaks. Ten modules per app, from your first click to professional workflow.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🖥</div>
            <h3>Works everywhere</h3>
            <p>Desktop, tablet, phone. Your progress follows you. No downloads, no installs.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎓</div>
            <h3>Curriculum, not a playlist</h3>
            <p>Each module builds on the last. Nothing skipped, nothing assumed — you finish able to work, not just to answer.</p>
          </div>
        </div>
      </section>

      <section class="landing-tracks">
        <div class="section-head">
          <div class="kicker">The curriculum</div>
          <h2>Three tracks. Thirty modules. One path.</h2>
          <p>Start with any track. Each runs from absolute beginner to confident, professional user.</p>
        </div>

        <div class="track-showcase">
          <button class="track-showcase-card" data-track="word" style="--track-accent:#2b579a;">
            <div class="track-mark">W</div>
            <h3>Microsoft Word</h3>
            <p>From your first click on the Ribbon to publication-ready reports, CVs, and letters.</p>
            <div class="track-showcase-meta">
              <span><b>10</b> modules</span>
              <span><b>30</b> lessons</span>
              <span>📄 8 portfolio pieces</span>
            </div>
          </button>

          <button class="track-showcase-card" data-track="excel" style="--track-accent:#217346;">
            <div class="track-mark">X</div>
            <h3>Microsoft Excel</h3>
            <p>From your first cell to VLOOKUP, charts, and pivot tables that tell a story.</p>
            <div class="track-showcase-meta">
              <span><b>10</b> modules</span>
              <span><b>24</b> lessons</span>
              <span>📊 8 portfolio pieces</span>
            </div>
          </button>

          <button class="track-showcase-card" data-track="ppt" style="--track-accent:#b7472a;">
            <div class="track-mark">P</div>
            <h3>Microsoft PowerPoint</h3>
            <p>From your first slide to transitions, animations, and pitching like a pro.</p>
            <div class="track-showcase-meta">
              <span><b>10</b> modules</span>
              <span><b>25</b> lessons</span>
              <span>📽 8 portfolio pieces</span>
            </div>
          </button>
        </div>
      </section>

      <section class="landing-final">
        <h2>Ready when you are.</h2>
        <p>Free. No downloads. Start in under a minute.</p>
        <button class="btn btn-hero btn-hero-primary" id="landingStart2">
          Create your free account →
        </button>
      </section>
    </div>
  `;

  // Wire CTAs
  el.querySelector('#landingStart').addEventListener('click', () => showAuth('signup'));
  el.querySelector('#landingStart2').addEventListener('click', () => showAuth('signup'));
  el.querySelector('#landingBrowse').addEventListener('click', () => {
    // Guest mode — go straight to curriculum
    setView('curriculum');
  });

  // Track cards — clicking opens signup with that track preselected
  el.querySelectorAll('.track-showcase-card').forEach(card => {
    card.addEventListener('click', () => {
      const track = card.dataset.track;
      showAuth('signup', track);
    });
  });
}
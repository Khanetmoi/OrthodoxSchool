import { setView } from '../core/router.js';
import { signIn } from '../core/session.js';
import { state, saveState } from '../core/state.js';
import { showToast, $ } from '../core/ui.js';
import { renderDashboard } from './dashboard.js';

let currentMode = 'signin';   // 'signin' | 'signup'
let preselectedTrack = null;

export function showAuth(mode = 'signin', track = null) {
  currentMode = mode;
  preselectedTrack = track;
  setView('auth');
  renderAuth();
}

function renderAuth() {
  const el = document.getElementById('viewAuth');
  if (!el) return;

  const isSignup = currentMode === 'signup';

  el.innerHTML = `
    <div class="auth-screen">
      <div class="auth-card">
        <div class="auth-logo">Learn by doing</div>

        <h2>${isSignup ? 'Create your account' : 'Welcome back'}</h2>
        <p>${isSignup
          ? 'Set up your profile to save progress across all three tracks.'
          : 'Sign in to continue where you left off.'
        }</p>

        <div class="auth-tabs">
          <button class="auth-tab ${!isSignup ? 'active' : ''}" data-mode="signin">Sign in</button>
          <button class="auth-tab ${isSignup ? 'active' : ''}" data-mode="signup">Sign up</button>
        </div>

        <form id="authForm">
          <div class="auth-field">
            <label for="authName">Full name</label>
            <input type="text" id="authName" placeholder="e.g. Amara Owusu" required autocomplete="name">
          </div>
          <div class="auth-field">
            <label for="authEmail">Email</label>
            <input type="email" id="authEmail" placeholder="you@example.com" required autocomplete="email">
          </div>

          <button type="submit" class="auth-submit" id="authSubmit">
            ${isSignup ? 'Create account →' : 'Sign in →'}
          </button>
        </form>

        <div class="auth-divider">or</div>

        <button class="auth-guest" id="authGuest">
          Continue as guest
        </button>

        <p class="auth-legal">
          ${isSignup
            ? 'By creating an account you agree to our terms. We store your progress in your browser.'
            : 'Your progress is stored locally in this browser.'
          }
        </p>
      </div>
    </div>
  `;

  // Tabs
  el.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentMode = tab.dataset.mode;
      renderAuth();
    });
  });

  // Form
  el.querySelector('#authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = el.querySelector('#authName').value.trim();
    const email = el.querySelector('#authEmail').value.trim();
    if (!name || !email) return;

    // Basic email shape check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please check your email address', true);
      return;
    }

    signIn({ name, email });

    // If a track was preselected, switch to it
    if (preselectedTrack) {
      state.activeTrack = preselectedTrack;
      saveState();
    }

    showToast(`Welcome, ${name.split(' ')[0]}!`);
    renderDashboard();
    setView('dashboard');
    preselectedTrack = null;
  });

  // Guest
  el.querySelector('#authGuest').addEventListener('click', () => {
    showToast('Browsing as guest — progress won\'t be saved to a profile');
    setView('curriculum');
  });
}
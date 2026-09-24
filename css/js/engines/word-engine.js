// Word sandbox engine. Mounts a Word window and returns { destroy, hint }.
// Consumes the `applyFormat` / `applyStyleSheet` payloads from lesson success blocks.

import { RIBBONS } from '../content/ribbons.js';
import { $ } from '../core/ui.js';

export const wordEngine = {
  mount(container, { step, onSuccess }) {
    const sb = step.sandbox;

    container.innerHTML = `
      <div class="sandbox-window word-window" id="wordWindow">
        <div class="sandbox-titlebar">
          <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
          <div class="filename">Document.docx — Word</div>
        </div>
        <div class="sandbox-tabs" id="wordTabs">
          ${sb.tabs.map(t => `
            <button class="sandbox-tab ${t === sb.activeTab ? 'active' : ''}" data-tab="${t}">${t}</button>
          `).join('')}
        </div>
        <div class="sandbox-ribbon" id="wordRibbon">
          ${RIBBONS.word[sb.ribbon] || ''}
        </div>
        <div class="word-canvas">
          <div class="word-page" id="wordPage" tabindex="0">${sb.page}</div>
        </div>
      </div>
    `;

    const handlers = [];
    const page = container.querySelector('#wordPage');

    // ---- Wire tabs ----
    container.querySelectorAll('.sandbox-tab').forEach(tab => {
      const h = () => {
        if (step.task === 'clickTab' && step.taskTarget === tab.dataset.tab) {
          onSuccess(buildSuccessPayload(step));
        }
        // Visual switch regardless
        container.querySelectorAll('.sandbox-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      };
      tab.addEventListener('click', h);
      handlers.push([tab, 'click', h]);
    });

    // ---- Wire ribbon buttons ----
    container.querySelectorAll('#wordRibbon [data-action]').forEach(btn => {
      const h = () => {
        const action = btn.dataset.action;
        // If it's the target, run the success payload
        if (step.task === 'clickButton' && step.taskTarget === action) {
          onSuccess(buildSuccessPayload(step));
          return;
        }
        // If it's a color
        if (step.task === 'clickColor' && btn.dataset.color === step.taskTarget) {
          onSuccess(buildSuccessPayload(step));
          return;
        }
        // If it's not the target but is a valid format button, still perform it visually
        if (step.task === 'clickButton' || step.task === 'clickColor') {
          // Wrong button - flash it
          btn.classList.add('hint-pulse');
          setTimeout(() => btn.classList.remove('hint-pulse'), 900);
        }
      };
      btn.addEventListener('click', h);
      handlers.push([btn, 'click', h]);
    });

    // ---- Wire dropdown selects (font family, size) ----
    const fontFamilyEl = container.querySelector('#font-family');
    if (fontFamilyEl) {
      const h = () => {
        if (step.task === 'changeFont' && fontFamilyEl.value === step.taskTarget) {
          onSuccess(buildSuccessPayload(step));
        }
      };
      fontFamilyEl.addEventListener('change', h);
      handlers.push([fontFamilyEl, 'change', h]);
    }
    const fontSizeEl = container.querySelector('#font-size');
    if (fontSizeEl) {
      const h = () => {
        if (step.task === 'changeSize' && fontSizeEl.value === step.taskTarget) {
          onSuccess(buildSuccessPayload(step));
        }
      };
      fontSizeEl.addEventListener('change', h);
      handlers.push([fontSizeEl, 'change', h]);
    }

    // ---- Keyboard shortcuts inside the page ----
    if (page) {
      const kh = (e) => {
        if (!(e.ctrlKey || e.metaKey)) return;
        const key = e.key.toLowerCase();
        const map = { b: 'bold', i: 'italic', u: 'underline' };
        if (key === 's') {
          e.preventDefault();
          flashSaved();
          return;
        }
        if (map[key]) {
          e.preventDefault();
          const btn = container.querySelector(`[data-action="${map[key]}"]`);
          if (btn) btn.click();
        }
      };
      page.addEventListener('keydown', kh);
      handlers.push([page, 'keydown', kh]);
    }

    function flashSaved() {
      const titlebar = container.querySelector('.sandbox-titlebar');
      if (titlebar) {
        const saved = document.createElement('div');
        saved.textContent = '💾';
        saved.style.marginLeft = 'auto';
        titlebar.appendChild(saved);
        setTimeout(() => saved.remove(), 900);
      }
    }

    // ---- Apply a success payload (called by lesson.js after onSuccess) ----
    function applySuccessPayload(payload) {
      if (!payload) return;
      if (payload.ribbon) {
        const ribbonEl = container.querySelector('#wordRibbon');
        if (ribbonEl) {
          ribbonEl.innerHTML = RIBBONS.word[payload.ribbon] || '';
          // Re-wire any new buttons so they respond to clicks
          rewireRibbon();
        }
      }
      if (payload.applyFormat) {
        applyToPage(payload.applyFormat);
      }
      if (payload.applyStyleSheet) {
        Object.entries(payload.applyStyleSheet).forEach(([sel, css]) => {
          page.querySelectorAll(sel).forEach(el => {
            el.setAttribute('style', (el.getAttribute('style') || '') + ';' + css);
          });
        });
      }
    }

    function rewireRibbon() {
      container.querySelectorAll('#wordRibbon [data-action]').forEach(btn => {
        // Remove old listeners by cloning (simplest safe reset)
        const fresh = btn.cloneNode(true);
        btn.parentNode.replaceChild(fresh, btn);
      });
      // Re-wire to the same handlers we set up initially
      container.querySelectorAll('#wordRibbon [data-action]').forEach(btn => {
        const h = () => {
          const action = btn.dataset.action;
          if (step.task === 'clickButton' && step.taskTarget === action) {
            onSuccess(buildSuccessPayload(step));
            return;
          }
          if (step.task === 'clickColor' && btn.dataset.color === step.taskTarget) {
            onSuccess(buildSuccessPayload(step));
          }
        };
        btn.addEventListener('click', h);
      });
    }

    function applyToPage({ target, style, value }) {
      // Special composite targets
      if (target === 'page-header') {
        const header = document.createElement('div');
        header.style.cssText = 'border-bottom:2px solid #2b579a; padding-bottom:6px; margin-bottom:14px; font-size:12px; color:#2b579a; display:flex; justify-content:space-between;';
        header.innerHTML = `<span>${value}</span><span>Page 1</span>`;
        page.insertBefore(header, page.firstChild);
        return;
      }
      if (target === 'page-footer') {
        const footer = document.createElement('div');
        footer.style.cssText = 'border-top:1px solid #ccc; padding-top:6px; margin-top:24px; font-size:12px; color:#666; text-align:center;';
        footer.textContent = value;
        page.appendChild(footer);
        return;
      }
      if (target === 'none') return;

      const el = page.querySelector(`[data-selectable="${target}"]`);
      if (!el) return;

      switch (style) {
        case 'fontWeight':   el.style.fontWeight = value; break;
        case 'fontStyle':    el.style.fontStyle = value; break;
        case 'textDecoration': el.style.textDecoration = value; break;
        case 'textAlign':    el.style.textAlign = value; break;
        case 'color':        el.style.color = value; break;
        case 'lineHeight':   el.style.lineHeight = value; break;
        case 'marginBottom': el.style.marginBottom = value; break;

        case 'style':
          if (value === 'h1') {
            el.style.fontSize = '26px';
            el.style.fontWeight = '700';
            el.style.color = '#1e6b3e';
            el.style.marginBottom = '12px';
          } else if (value === 'h2') {
            el.style.fontSize = '20px';
            el.style.fontWeight = '700';
            el.style.color = '#2b579a';
            el.style.marginBottom = '8px';
          } else if (value === 'normal') {
            el.style.fontSize = '';
            el.style.fontWeight = '';
            el.style.color = '';
            el.style.fontFamily = '';
            el.style.textDecoration = '';
          }
          break;

        case 'text':
          el.textContent = value;
          el.style.fontStyle = 'normal';
          el.style.color = '#222';
          break;

        case 'list': {
          const items = el.innerHTML.split('<br>').map(s => s.trim()).filter(Boolean);
          if (value === 'bullet') {
            el.innerHTML = '<ul style="margin-left:20px;">' +
              items.map(i => `<li>${i}</li>`).join('') + '</ul>';
          } else if (value === 'number') {
            el.innerHTML = '<ol style="margin-left:20px;">' +
              items.map(i => `<li>${i}</li>`).join('') + '</ol>';
          } else if (value === 'multilevel') {
            el.innerHTML = '<ol style="margin-left:20px;">' +
              items.map(i => `<li>${i}<ol style="margin-left:16px; font-size:0.92em;"><li>Sub-step A</li><li>Sub-step B</li></ol></li>`).join('') +
              '</ol>';
          }
          break;
        }

        case 'image':
          el.style.display = 'inline-block';
          el.style.padding = '24px 40px';
          el.style.background = '#e8f4ff';
          el.style.border = '2px dashed #2b579a';
          el.style.borderRadius = '8px';
          el.style.fontSize = '28px';
          el.textContent = '📷 Team Photo';
          break;

        case 'table':
          el.innerHTML = `<table style="border-collapse:collapse;width:100%;font-size:13px;">
            <tr>
              <th style="border:1px solid #2b579a;padding:6px;background:#2b579a;color:#fff;">Item</th>
              <th style="border:1px solid #2b579a;padding:6px;background:#2b579a;color:#fff;">Qty</th>
              <th style="border:1px solid #2b579a;padding:6px;background:#2b579a;color:#fff;">Price</th>
            </tr>
            <tr>
              <td style="border:1px solid #ccc;padding:6px;">Apples</td>
              <td style="border:1px solid #ccc;padding:6px;">3</td>
              <td style="border:1px solid #ccc;padding:6px;">$2</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc;padding:6px;">Bread</td>
              <td style="border:1px solid #ccc;padding:6px;">1</td>
              <td style="border:1px solid #ccc;padding:6px;">$4</td>
            </tr>
          </table>`;
          el.style.background = 'transparent';
          break;

        case 'smartart':
          el.innerHTML = `<div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
            <span style="background:#2b579a; color:#fff; padding:10px 16px; border-radius:8px; font-size:13px;">Research</span>
            <span style="color:#2b579a; font-weight:700;">→</span>
            <span style="background:#2b579a; color:#fff; padding:10px 16px; border-radius:8px; font-size:13px;">Design</span>
            <span style="color:#2b579a; font-weight:700;">→</span>
            <span style="background:#2b579a; color:#fff; padding:10px 16px; border-radius:8px; font-size:13px;">Build</span>
            <span style="color:#2b579a; font-weight:700;">→</span>
            <span style="background:#2b579a; color:#fff; padding:10px 16px; border-radius:8px; font-size:13px;">Launch</span>
          </div>`;
          el.style.background = 'transparent';
          break;

        case 'link':
          el.style.color = '#2b579a';
          el.style.textDecoration = 'underline';
          el.style.cursor = 'pointer';
          break;

        case 'toc':
          el.outerHTML = `<div style="background:#f0f6fa; padding:14px 18px; border-left:3px solid #2b579a; margin:12px 0; font-size:13px;">
            <div style="font-weight:700; color:#2b579a; margin-bottom:8px;">Table of Contents</div>
            <div style="display:flex; justify-content:space-between;"><span>Introduction</span><span>1</span></div>
            <div style="display:flex; justify-content:space-between;"><span>Methods</span><span>2</span></div>
            <div style="display:flex; justify-content:space-between;"><span>Results</span><span>3</span></div>
          </div>`;
          break;

        case 'footnote': {
          el.textContent = '[1]';
          el.style.verticalAlign = 'super';
          el.style.fontSize = '0.75em';
          el.style.color = '#2b579a';
          const fn = document.createElement('div');
          fn.style.cssText = 'border-top:1px solid #ccc; margin-top:20px; padding-top:8px; font-size:12px; color:#555;';
          fn.innerHTML = '<sup>1</sup> Smith, J. (2024). The productivity effect. <em>Journal of Work</em>.';
          page.appendChild(fn);
          break;
        }

        case 'citation':
          el.textContent = '(Smith, 2024)';
          el.style.color = '#222';
          break;

        case 'caption':
          el.textContent = value;
          el.style.fontSize = '12px';
          el.style.color = '#555';
          el.style.fontStyle = 'italic';
          el.style.textAlign = 'center';
          el.style.marginTop = '6px';
          break;

        case 'comment': {
          el.style.background = '#fff8e1';
          el.style.borderBottom = '1px dashed #f0c419';
          const note = document.createElement('div');
          note.style.cssText = 'background:#fffbe6; border-left:3px solid #f0c419; padding:8px 12px; margin-top:14px; font-size:12px; color:#7a5c00;';
          note.innerHTML = '<strong>Comment:</strong> ' + value;
          page.appendChild(note);
          break;
        }

        case 'pagebreak':
          el.innerHTML = '<div style="border-top:2px dashed #2b579a; margin:20px 0; text-align:center; font-size:11px; color:#2b579a; padding-top:4px;">— page break —</div>' + el.innerHTML;
          break;

        case 'replaceAll':
          el.innerHTML = el.innerHTML.replace(/old\.com/g, 'new.com');
          break;
      }
    }

    return {
      destroy() {
        handlers.forEach(([el, type, h]) => el.removeEventListener(type, h));
      },
      hint(step) {
        if (!step.taskTarget) return;
        const el =
          container.querySelector(`[data-tab="${step.taskTarget}"]`) ||
          container.querySelector(`[data-action="${step.taskTarget}"]`) ||
          container.querySelector(`#${step.taskTarget}`) ||
          container.querySelector(`#${step.taskTarget.replace(/^btn-/, 'btn-')}`);
        if (el) el.classList.add('hint-pulse');
      },
      // Exposed so lesson.js can apply the success payload
      applySuccess(payload) {
        applySuccessPayload(payload);
      }
    };
  }
};

function buildSuccessPayload(step) {
  return step.success || {};
}
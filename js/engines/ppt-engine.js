// PowerPoint sandbox engine. Thumbnails + slide stage + ribbon.

import { RIBBONS } from '../content/ribbons.js';
import { escapeHtml } from '../core/ui.js';

export const pptEngine = {
  mount(container, { step, onSuccess }) {
    const sb = step.sandbox;
    const deck = {
      slides: JSON.parse(JSON.stringify(sb.slides || [])),
      activeSlide: sb.activeSlide || 0,
      ribbon: sb.ribbon || 'home',
      theme: sb.slides[0]?.theme || 'default',
      showNotes: false,
      showAnimPane: false
    };

    container.innerHTML = `
      <div class="sandbox-window ppt-window">
        <div class="sandbox-titlebar">
          <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
          <div class="filename">Presentation1.pptx — PowerPoint</div>
        </div>
        <div class="sandbox-tabs">
          ${['Home','Insert','Design','Transitions','Animations','Slide Show','View','File'].map(t => {
            const key = t.toLowerCase().replace(' ', '-');
            return `<button class="sandbox-tab ${key === deck.ribbon ? 'active' : ''}" data-tab="${t}">${t}</button>`;
          }).join('')}
        </div>
        <div class="sandbox-ribbon" id="pptRibbon">${RIBBONS.ppt[deck.ribbon] || ''}</div>
        <div class="ppt-editor">
          <div class="slide-list" id="slideList"></div>
          <div class="slide-main">
            <div id="slideStageContainer"></div>
            <div class="slide-props" id="slideProps"></div>
            <div id="extraPanes"></div>
          </div>
        </div>
      </div>
    `;

    const handlers = [];
    const ribbonEl = container.querySelector('#pptRibbon');
    const listEl = container.querySelector('#slideList');
    const stageHolder = container.querySelector('#slideStageContainer');
    const propsEl = container.querySelector('#slideProps');
    const extraPanes = container.querySelector('#extraPanes');

    // ---------- Rendering ----------
    function renderList() {
      listEl.innerHTML = '';
      deck.slides.forEach((slide, i) => {
        const thumb = document.createElement('div');
        thumb.className = 'slide-thumb' + (i === deck.activeSlide ? ' active' : '');
        thumb.dataset.index = i;
        const titlePreview = escapeHtml((slide.title || 'Title').slice(0, 40));
        const bodyPreview = escapeHtml((slide.body || slide.subtitle || '').replace(/\n/g, ' ').slice(0, 60));
        thumb.innerHTML = `
          <div class="slide-thumb-num">${i + 1}</div>
          <div class="slide-thumb-preview">
            <div class="t">${titlePreview}</div>
            <div class="s">${bodyPreview}</div>
          </div>
        `;
        const h = () => {
          deck.activeSlide = i;
          renderList(); renderStage(); renderProps(); renderPanes();
          if (step.task === 'clickThumbnail' && step.taskTarget === i) {
            onSuccess(step.success || {});
          }
        };
        thumb.addEventListener('click', h);
        handlers.push([thumb, 'click', h]);
        listEl.appendChild(thumb);
      });
    }

    function renderStage() {
      const slide = deck.slides[deck.activeSlide];
      if (!slide) { stageHolder.innerHTML = ''; return; }
      const layoutClass = 'layout-' + (slide.layout || 'title');
      const themeClass = 'theme-' + (slide.theme || deck.theme || 'default');

      let bodyHtml = '';

      if (slide.layout === 'comparison') {
        const parts = (slide.body || '').split('\n---\n');
        bodyHtml = `<div>${escapeHtml(parts[0] || '').replace(/\n/g, '<br>')}</div>
                    <div>${escapeHtml(parts[1] || '').replace(/\n/g, '<br>')}</div>`;
      } else if (slide.smartart === 'process') {
        const items = (slide.body || '').split('\n').filter(Boolean);
        bodyHtml = `<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; justify-content:center; padding:20px 0;">
          ${items.map((it, i) =>
            `<div style="background:#b7472a; color:#fff; padding:14px 22px; border-radius:6px; font-weight:600; font-size:0.9rem;">${escapeHtml(it)}</div>` +
            (i < items.length - 1 ? '<span style="color:#b7472a; font-size:1.4rem;">→</span>' : '')
          ).join('')}
        </div>`;
      } else if (slide.smartart === 'cycle') {
        const items = (slide.body || '').split('\n').filter(Boolean);
        bodyHtml = `<div style="display:flex; gap:10px; align-items:center; justify-content:center; padding:20px 0; flex-wrap:wrap;">
          ${items.map(it =>
            `<div style="background:#fff; border:2px solid #b7472a; color:#b7472a; padding:16px 20px; border-radius:50%; min-width:80px; min-height:80px; display:flex; align-items:center; justify-content:center; font-weight:600; font-size:0.8rem; text-align:center;">${escapeHtml(it)}</div>`
          ).join('')}
        </div>`;
      } else if (slide.chart) {
        bodyHtml = renderChartSvg(slide.chart);
      } else if (slide.image) {
        bodyHtml = `<div style="display:flex; justify-content:center; padding:16px;">
          <div style="background:#e8f0f8; padding:40px 60px; border-radius:8px; font-size:2rem;">📷</div>
        </div>`;
      } else if (slide.shapes && slide.shapes.length) {
        bodyHtml = `<div style="display:flex; gap:12px; justify-content:center; padding:20px 0; flex-wrap:wrap;">
          ${slide.shapes.map((_, i) =>
            `<div style="background:#f8f8f8; border:1px solid #ddd; border-radius:8px; width:110px; height:90px; padding:12px; font-size:0.75rem; display:flex; align-items:center; justify-content:center;">Feature ${i + 1}</div>`
          ).join('')}
        </div>`;
      } else if (slide.animations && slide.animations.length && slide.body) {
        const items = slide.body.split('\n');
        bodyHtml = items.map((it, i) =>
          `<div style="opacity:0; animation: fadeIn 0.5s ${i * 0.5}s forwards;">${escapeHtml(it)}</div>`
        ).join('');
      } else {
        bodyHtml = escapeHtml(slide.body || slide.subtitle || '').replace(/\n/g, '<br>');
      }

      stageHolder.innerHTML = `
        <style>
          @keyframes fadeIn { to { opacity: 1; } }
        </style>
        <div class="slide-stage ${layoutClass} ${themeClass}" data-index="${deck.activeSlide}">
          <div class="slide-title" contenteditable="true" data-field="title">${escapeHtml(slide.title || (slide.layout === 'title' ? 'Click to add title' : 'Title'))}</div>
          <div class="slide-body" contenteditable="true" data-field="body">${bodyHtml}</div>
          <div class="slide-footer">${deck.activeSlide + 1}</div>
        </div>
      `;

      // Wire contenteditable fields
      stageHolder.querySelectorAll('[contenteditable]').forEach(el => {
        const bh = () => {
          const field = el.dataset.field;
          slide[field] = el.textContent;
          renderList();
          // Check task match
          if (step.task === 'editTitle' && field === 'title' && el.textContent === step.taskTarget) {
            onSuccess(step.success || {});
          }
          if (step.task === 'editBody' && field === 'body' && el.textContent === step.taskTarget) {
            onSuccess(step.success || {});
          }
        };
        el.addEventListener('blur', bh);
        handlers.push([el, 'blur', bh]);
      });

      // If there are animations, re-trigger them by forcing reflow
      if (slide.animations && slide.animations.length) {
        // Already animated via CSS
      }
    }

    function renderProps() {
      const slide = deck.slides[deck.activeSlide];
      if (!slide) { propsEl.innerHTML = ''; return; }
      propsEl.innerHTML = `
        <div class="slide-prop"><label>Layout:</label> <span>${slide.layout || 'title'}</span></div>
        <div class="slide-prop"><label>Theme:</label> <span>${slide.theme || deck.theme || 'default'}</span></div>
        <div class="slide-prop"><label>Slide:</label> <span>${deck.activeSlide + 1} of ${deck.slides.length}</span></div>
      `;
    }

    function renderPanes() {
      extraPanes.innerHTML = '';
      const slide = deck.slides[deck.activeSlide];
      if (!slide) return;
      if (deck.showNotes) {
        const notes = document.createElement('div');
        notes.style.cssText = 'background:#fffbe6; border:1px solid #f0d98a; border-radius:8px; padding:12px 16px; margin-top:12px; font-size:0.85rem;';
        notes.innerHTML = `
          <div style="font-weight:700; color:#7a5c00; margin-bottom:6px; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em;">Speaker Notes</div>
          <div contenteditable="true" id="notesField" style="color:#4a3a00; line-height:1.6; outline:none; min-height:40px;">${escapeHtml(slide.notes || 'Click to add speaker notes…')}</div>
        `;
        extraPanes.appendChild(notes);
        const nf = notes.querySelector('#notesField');
        const nh = () => {
          slide.notes = nf.textContent;
          if (step.task === 'editNotes' && nf.textContent === step.taskTarget) {
            onSuccess(step.success || {});
          }
        };
        nf.addEventListener('blur', nh);
        handlers.push([nf, 'blur', nh]);
      }
      if (deck.showAnimPane) {
        const pane = document.createElement('div');
        pane.style.cssText = 'background:#f0f6fa; border:1px solid #b8d4ea; border-radius:8px; padding:12px 16px; margin-top:12px; font-size:0.85rem;';
        pane.innerHTML = `
          <div style="font-weight:700; color:#2b579a; margin-bottom:8px; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em;">Animation Pane</div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div style="padding:6px 10px; background:#fff; border-left:3px solid #f0c419;">1. Fade — Title</div>
            <div style="padding:6px 10px; background:#fff; border-left:3px solid #4fc98a;">2. Fade — Body (bullet 1)</div>
            <div style="padding:6px 10px; background:#fff; border-left:3px solid #4fc98a;">3. Fade — Body (bullet 2)</div>
          </div>
        `;
        extraPanes.appendChild(pane);
      }
    }

    function renderChartSvg(type) {
      const data = [120, 145, 132, 168];
      const labels = ['Q1','Q2','Q3','Q4'];
      const max = Math.max(...data);
      const w = 460, h = 180, pad = 30;
      let svg = `<svg viewBox="0 0 ${w} ${h}" style="width:100%; height:auto;">`;
      if (type === 'bar') {
        const barW = (w - 2 * pad) / data.length;
        data.forEach((v, i) => {
          const bh = (v / max) * (h - 60);
          const x = pad + i * barW + 10;
          const y = h - 30 - bh;
          svg += `<rect x="${x}" y="${y}" width="${barW - 20}" height="${bh}" fill="#b7472a" rx="4"/>`;
          svg += `<text x="${x + (barW - 20) / 2}" y="${h - 10}" text-anchor="middle" font-size="12" fill="#555">${labels[i]}</text>`;
          svg += `<text x="${x + (barW - 20) / 2}" y="${y - 6}" text-anchor="middle" font-size="12" fill="#8a3520" font-weight="600">${v}</text>`;
        });
      } else if (type === 'line') {
        const pts = data.map((v, i) => ({
          x: pad + (i / (data.length - 1)) * (w - 2 * pad),
          y: h - 30 - (v / max) * (h - 60)
        }));
        svg += `<path d="${pts.map((p, i) => (i === 0 ? 'M' : 'L') + p.x + ',' + p.y).join(' ')}" stroke="#b7472a" stroke-width="3" fill="none"/>`;
        pts.forEach((p, i) => {
          svg += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#b7472a"/>`;
          svg += `<text x="${p.x}" y="${h - 10}" text-anchor="middle" font-size="12" fill="#555">${labels[i]}</text>`;
        });
      } else if (type === 'pie') {
        const total = data.reduce((a, b) => a + b, 0);
        const cx = w / 2 - 60, cy = h / 2, rad = 60;
        let angle = -Math.PI / 2;
        const colors = ['#b7472a', '#d9704e', '#f0c419', '#8a3520'];
        data.forEach((v, i) => {
          const slice = (v / total) * Math.PI * 2;
          const x1 = cx + rad * Math.cos(angle);
          const y1 = cy + rad * Math.sin(angle);
          angle += slice;
          const x2 = cx + rad * Math.cos(angle);
          const y2 = cy + rad * Math.sin(angle);
          const large = slice > Math.PI ? 1 : 0;
          svg += `<path d="M${cx},${cy} L${x1},${y1} A${rad},${rad} 0 ${large} 1 ${x2},${y2} Z" fill="${colors[i]}"/>`;
        });
        labels.forEach((lbl, i) => {
          const y = 30 + i * 22;
          svg += `<rect x="${w - 120}" y="${y - 10}" width="12" height="12" fill="${colors[i]}"/>`;
          svg += `<text x="${w - 102}" y="${y}" font-size="12" fill="#333">${lbl} (${data[i]})</text>`;
        });
      }
      svg += '</svg>';
      return svg;
    }

    // ---------- Wiring tabs ----------
    container.querySelectorAll('.sandbox-tab').forEach(tab => {
      const h = () => {
        container.querySelectorAll('.sandbox-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const key = tab.dataset.tab.toLowerCase().replace(' ', '-');
        ribbonEl.innerHTML = RIBBONS.ppt[key] || RIBBONS.ppt.home;
        wireRibbon();
      };
      tab.addEventListener('click', h);
      handlers.push([tab, 'click', h]);
    });

    // ---------- Wiring ribbon ----------
    function wireRibbon() {
      ribbonEl.querySelectorAll('[data-action]').forEach(btn => {
        const h = () => {
          const action = btn.dataset.action;
          // If it's the target, run success
          if (step.task === 'clickButton' && step.taskTarget === action) {
            onSuccess(step.success || {});
            return;
          }
          // Otherwise, perform the visual action so exploration works
          performAction(action, btn);
        };
        btn.addEventListener('click', h);
        handlers.push([btn, 'click', h]);
      });
    }

    function performAction(action, btn) {
      const slide = deck.slides[deck.activeSlide];
      switch (action) {
        case 'newSlide':
          deck.slides.push({ layout: 'title-content', title: '', body: '', notes: '' });
          deck.activeSlide = deck.slides.length - 1;
          break;
        case 'duplicate':
          if (slide) {
            deck.slides.splice(deck.activeSlide + 1, 0, JSON.parse(JSON.stringify(slide)));
            deck.activeSlide++;
          }
          break;
        case 'delete':
          if (deck.slides.length > 1) {
            deck.slides.splice(deck.activeSlide, 1);
            deck.activeSlide = Math.max(0, deck.activeSlide - 1);
          }
          break;
        case 'moveUp':
          if (deck.activeSlide > 0) {
            const a = deck.activeSlide;
            [deck.slides[a - 1], deck.slides[a]] = [deck.slides[a], deck.slides[a - 1]];
            deck.activeSlide--;
          }
          break;
        case 'layout-title':
          if (slide) slide.layout = 'title';
          break;
        case 'layout-content':
          if (slide) slide.layout = 'title-content';
          break;
        case 'layout-section':
          if (slide) slide.layout = 'section';
          break;
        case 'layout-comparison':
          if (slide) {
            slide.layout = 'comparison';
            if (!slide.body.includes('---')) slide.body = slide.body + '\n---\nRight column';
          }
          break;
        case 'theme-green':
          deck.theme = 'green'; deck.slides.forEach(s => s.theme = 'green'); break;
        case 'theme-blue':
          deck.theme = 'blue'; deck.slides.forEach(s => s.theme = 'blue'); break;
        case 'theme-serif':
          deck.theme = 'serif'; deck.slides.forEach(s => s.theme = 'serif'); break;
        case 'custom-teal':
          deck.theme = 'teal'; deck.slides.forEach(s => s.theme = 'teal'); break;
        case 'font-georgia':
          deck.theme = 'font-georgia'; deck.slides.forEach(s => s.theme = 'font-georgia'); break;
        case 'insertPicture':
        case 'crop':
          if (slide) slide.image = 'photo';
          break;
        case 'addRect':
          if (slide) { slide.shapes = slide.shapes || []; slide.shapes.push('rect'); }
          break;
        case 'distribute':
          if (slide) slide.grouped = false;
          break;
        case 'group':
          if (slide) slide.grouped = true;
          break;
        case 'insertChart':
        case 'insertPie':
        case 'insertLine':
          if (slide) slide.chart = action === 'insertPie' ? 'pie' : action === 'insertLine' ? 'line' : 'bar';
          break;
        case 'smartart':
        case 'smartartCycle':
          if (slide) slide.smartart = action === 'smartartCycle' ? 'cycle' : 'process';
          break;
        case 'transition-fade':
        case 'transition-morph':
          if (slide) slide.transition = action === 'transition-morph' ? 'morph' : 'fade';
          break;
        case 'applyAll': {
          const t = slide?.transition || 'fade';
          deck.slides.forEach(s => s.transition = t);
          break;
        }
        case 'anim-fade':
        case 'anim-fly':
          if (slide) slide.animation = action === 'anim-fly' ? 'flyin' : 'fade';
          break;
        case 'animPane':
          deck.showAnimPane = !deck.showAnimPane;
          break;
        case 'notes':
          deck.showNotes = !deck.showNotes;
          break;
        case 'slideshow':
        case 'runShow':
          startSlideshow();
          return;
        // Toast-only actions
        case 'sorter':
        case 'outline':
        case 'presenterView':
        case 'rehearse':
        case 'preview':
        case 'onClick':
        case 'withPrev':
        case 'exportPDF':
        case 'exportVideo':
        case 'exportPNG':
          flashMessage(action);
          return;
      }
      renderList(); renderStage(); renderProps(); renderPanes();
    }

    function flashMessage(action) {
      const map = {
        sorter: 'Slide Sorter view',
        outline: 'Outline view',
        presenterView: 'Presenter View — current + next + notes + timer',
        rehearse: '⏱ Rehearsal started',
        preview: '▶ Previewing transition',
        onClick: 'Timing: On Click',
        withPrev: 'Timing: With Previous',
        exportPDF: '✓ Exported as PDF',
        exportVideo: '✓ Export video settings opened',
        exportPNG: '✓ Export as images ready'
      };
      const toast = document.createElement('div');
      toast.textContent = map[action] || action;
      toast.style.cssText = 'position:absolute; bottom:12px; left:50%; transform:translateX(-50%); background:#b7472a; color:#fff; padding:8px 16px; border-radius:20px; font-size:0.8rem; font-weight:600; z-index:50;';
      container.querySelector('.ppt-window').appendChild(toast);
      setTimeout(() => toast.remove(), 1600);
    }

    // ---------- Slideshow overlay ----------
    function startSlideshow() {
      const overlay = document.getElementById('slideshow');
      const slideEl = document.getElementById('slideshowSlide');
      if (!overlay || !slideEl) return;

      let idx = 0;
      overlay.classList.add('active');

      const render = () => {
        const s = deck.slides[idx];
        if (!s) return;
        slideEl.innerHTML = `
          <div class="slide-title">${escapeHtml(s.title || '')}</div>
          <div class="slide-body">${escapeHtml(s.body || s.subtitle || '').replace(/\n/g, '<br>')}</div>
        `;
      };
      render();

      const onKey = (e) => {
        if (e.key === 'Escape') { stop(); }
        else if (e.key === ' ' || e.key === 'ArrowRight') {
          idx = Math.min(deck.slides.length - 1, idx + 1); render();
        } else if (e.key === 'ArrowLeft') {
          idx = Math.max(0, idx - 1); render();
        }
      };
      const onClick = () => {
        idx = Math.min(deck.slides.length - 1, idx + 1); render();
      };
      const stop = () => {
        overlay.classList.remove('active');
        overlay.removeEventListener('click', onClick);
        document.removeEventListener('keydown', onKey);
      };
      document.addEventListener('keydown', onKey);
      overlay.addEventListener('click', onClick);

      // Register cleanup with the engine's destroy
      handlers.push([document, 'keydown', onKey]);
    }

    // ---------- Initial render ----------
    renderList();
    renderStage();
    renderProps();
    wireRibbon();

    return {
      destroy() {
        handlers.forEach(([el, type, h]) => el.removeEventListener(type, h));
      },
      hint(step) {
        const target = step.taskTarget;
        if (typeof target === 'number') {
          const thumb = container.querySelector(`.slide-thumb[data-index="${target}"]`);
          if (thumb) thumb.classList.add('hint-pulse');
        } else if (typeof target === 'string') {
          const el =
            container.querySelector(`[data-action="${target}"]`) ||
            container.querySelector(`#btn-${target}`);
          if (el) el.classList.add('hint-pulse');
        }
      },
      applySuccess(payload) {
        const s = payload || {};
        const slide = deck.slides[deck.activeSlide];

        if (s.addSlide) {
          deck.slides.push(JSON.parse(JSON.stringify(s.addSlide)));
          deck.activeSlide = deck.slides.length - 1;
        }
        if (s.duplicateSlide && slide) {
          deck.slides.splice(deck.activeSlide + 1, 0, JSON.parse(JSON.stringify(slide)));
          deck.activeSlide++;
        }
        if (s.deleteSlide) {
          deck.slides.splice(deck.activeSlide, 1);
          deck.activeSlide = Math.max(0, deck.activeSlide - 1);
        }
        if (s.moveUp && deck.activeSlide > 0) {
          const a = deck.activeSlide;
          [deck.slides[a - 1], deck.slides[a]] = [deck.slides[a], deck.slides[a - 1]];
          deck.activeSlide--;
        }
        if (s.changeLayout && slide) slide.layout = s.changeLayout;
        if (s.applyTheme) {
          deck.theme = s.applyTheme;
          deck.slides.forEach(sl => sl.theme = s.applyTheme);
        }
        if (s.addImage && slide) slide.image = 'photo';
        if (s.cropImage && slide) slide.image = 'photo';
        if (s.addShape && slide) { slide.shapes = slide.shapes || []; slide.shapes.push('rect'); }
        if (s.distributeShapes && slide) slide.grouped = false;
        if (s.groupShapes && slide) slide.grouped = true;
        if (s.addChart && slide) slide.chart = s.addChart;
        if (s.addSmartArt && slide) slide.smartart = s.addSmartArt;
        if (s.applyTransition) deck.slides.forEach(sl => sl.transition = s.applyTransition);
        if (s.applyTransitionAll) deck.slides.forEach(sl => sl.transition = s.applyTransitionAll);
        if (s.applyAnimation && slide) slide.animation = s.applyAnimation;
        if (s.showAnimPane) deck.showAnimPane = true;
        if (s.showNotes) deck.showNotes = true;
        if (s.startSlideshow) {
          startSlideshow();
          return;
        }

        renderList(); renderStage(); renderProps(); renderPanes();
      }
    };
  }
};
// Excel sandbox engine. Grid + formula bar + keyboard nav.
// Depends on excel-formulas.js for evaluation.

import { RIBBONS } from '../content/ribbons.js';
import { evalFormula } from './excel-formulas.js';
import { $ } from '../core/ui.js';

function colLetterToIdx(s) {
  let idx = 0;
  for (let i = 0; i < s.length; i++) idx = idx * 26 + (s.charCodeAt(i) - 64);
  return idx - 1;
}
function colIdxToLetter(i) {
  let s = ''; i = i + 1;
  while (i > 0) {
    const r = (i - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    i = Math.floor((i - 1) / 26);
  }
  return s;
}
function cellRef(c, r) { return colIdxToLetter(c) + r; }

export const excelEngine = {
  mount(container, { step, onSuccess }) {
    const sb = step.sandbox;

    // Local grid state
    const grid = {
      rows: sb.rows || 10,
      cols: sb.cols || 6,
      activeCell: sb.activeCell || 'A1',
      data: JSON.parse(JSON.stringify(sb.data || {})),
      rangeStart: null,
      range: [],
      clipboard: null
    };

    container.innerHTML = `
      <div class="sandbox-window excel-window" id="excelWindow">
        <div class="sandbox-titlebar">
          <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
          <div class="filename">Book1.xlsx — Excel</div>
        </div>
        <div class="sandbox-tabs">
          ${['Home','Insert','Formulas','Data','Review','View'].map(t => `
            <button class="sandbox-tab ${t.toLowerCase() === sb.ribbon ? 'active' : ''}" data-tab="${t}">${t}</button>
          `).join('')}
        </div>
        <div class="sandbox-ribbon" id="excelRibbon">${RIBBONS.excel[sb.ribbon] || ''}</div>
        <div class="excel-formulabar">
          <div class="name-box" id="nameBox">${grid.activeCell}</div>
          <div class="fx-label">fx</div>
          <input class="formula-input" id="formulaInput" type="text" readonly value="">
        </div>
        <div class="excel-canvas" id="excelCanvas"></div>
        <div class="excel-sheettabs">
          <div class="sheet-tab active">Sheet1</div>
          <div class="sheet-tab" style="opacity:0.5;">+</div>
        </div>
      </div>
    `;

    const canvas = container.querySelector('#excelCanvas');

    function renderGrid() {
      let html = '<table class="excel-grid"><thead><tr><th class="corner"></th>';
      const activeCol = grid.activeCell.replace(/[0-9]/g, '');
      for (let c = 0; c < grid.cols; c++) {
        const letter = colIdxToLetter(c);
        html += `<th class="col-head ${activeCol === letter ? 'active' : ''}">${letter}</th>`;
      }
      html += '</tr></thead><tbody>';

      for (let r = 1; r <= grid.rows; r++) {
        const activeRow = parseInt(grid.activeCell.replace(/[^0-9]/g, '')) === r;
        html += `<tr><td class="row-head ${activeRow ? 'active' : ''}">${r}</td>`;
        for (let c = 0; c < grid.cols; c++) {
          const ref = cellRef(c, r);
          const cell = grid.data[ref] || {};
          const isSelected = ref === grid.activeCell;
          const inRange = grid.range.includes(ref);
          let classes = 'cell';
          if (isSelected) classes += ' selected';
          if (inRange && !isSelected) classes += ' in-range';
          if (cell.type === 'number' || cell.type === 'formula') classes += ' numeric';
          if (cell.bold) classes += ' bold';

          let display = '';
          if (cell.type === 'formula') {
            const result = evalFormula(cell.value, grid.data);
            display = result;
            if (typeof result === 'string' && result.startsWith('#')) classes += ' error';
          } else if (cell.value !== undefined) {
            display = cell.value;
            if (cell.numberFormat === 'currency' && typeof display === 'number') {
              display = '$' + display.toFixed(2);
            } else if (cell.numberFormat === 'percent' && typeof display === 'number') {
              display = (display * 100).toFixed(0) + '%';
            }
          }
          html += `<td class="${classes}" data-cell="${ref}">${display}</td>`;
        }
        html += '</tr>';
      }
      html += '</tbody></table>';
      canvas.innerHTML = html;

      const cell = grid.data[grid.activeCell] || {};
      container.querySelector('#nameBox').textContent = grid.activeCell;
      container.querySelector('#formulaInput').value = cell.value !== undefined ? cell.value : '';

      // Wire cell clicks
      canvas.querySelectorAll('td.cell').forEach(td => {
        td.addEventListener('click', (e) => {
          const ref = td.dataset.cell;
          if (e.shiftKey && grid.rangeStart) {
            grid.range = computeRange(grid.rangeStart, ref);
            grid.activeCell = ref;
            renderGrid();
          } else {
            grid.rangeStart = ref;
            grid.range = [ref];
            grid.activeCell = ref;
            renderGrid();
            if (step.task === 'clickCell' && step.taskTarget === ref) onSuccess();
          }
        });
      });
    }

    function computeRange(a, b) {
      const m1 = a.match(/^([A-Z]+)(\d+)$/);
      const m2 = b.match(/^([A-Z]+)(\d+)$/);
      const c1 = colLetterToIdx(m1[1]), c2 = colLetterToIdx(m2[1]);
      const r1 = parseInt(m1[2]), r2 = parseInt(m2[2]);
      const refs = [];
      for (let r = Math.min(r1,r2); r <= Math.max(r1,r2); r++)
        for (let c = Math.min(c1,c2); c <= Math.max(c1,c2); c++)
          refs.push(cellRef(c, r));
      return refs;
    }

    renderGrid();

    return {
      destroy() {},
      hint(step) {
        const cell = container.querySelector(`td.cell[data-cell="${step.taskTarget}"]`);
        if (cell) cell.classList.add('hint-pulse');
      }
    };
  }
};
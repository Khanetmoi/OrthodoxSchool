// Formula evaluator. Pure functions. No DOM.
// Named export: evalFormula(formula, data)

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

function getCellValue(ref, data) {
  const cell = data[ref];
  if (!cell) return 0;
  if (cell.type === 'formula') return evalFormula(cell.value, data);
  return cell.value;
}

export function evalFormula(formula, data) {
  if (!formula || formula[0] !== '=') return formula;
  let expr = formula.slice(1).trim();

  // Aggregates with range
  expr = expr.replace(/(SUM|AVERAGE|MIN|MAX|COUNT)\(([A-Z]+\d+):([A-Z]+\d+)\)/gi,
    (m, fn, start, end) => {
      const nums = rangeValues(start, end, data).filter(v => typeof v === 'number');
      switch (fn.toUpperCase()) {
        case 'SUM':     return '(' + nums.reduce((a, b) => a + b, 0) + ')';
        case 'AVERAGE': return '(' + (nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0) + ')';
        case 'MIN':     return '(' + (nums.length ? Math.min(...nums) : 0) + ')';
        case 'MAX':     return '(' + (nums.length ? Math.max(...nums) : 0) + ')';
        case 'COUNT':   return '(' + nums.length + ')';
      }
    });

  // Aggregates with list of args
  expr = expr.replace(/(SUM|AVERAGE|MIN|MAX|COUNT)\(([^()]+)\)/gi, (m, fn, args) => {
    const parts = args.split(',').map(s => s.trim());
    const nums = parts.map(p => resolveRef(p, data))
                      .filter(v => typeof v === 'number');
    switch (fn.toUpperCase()) {
      case 'SUM':     return '(' + nums.reduce((a, b) => a + b, 0) + ')';
      case 'AVERAGE': return '(' + (nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0) + ')';
      case 'MIN':     return '(' + (nums.length ? Math.min(...nums) : 0) + ')';
      case 'MAX':     return '(' + (nums.length ? Math.max(...nums) : 0) + ')';
      case 'COUNT':   return '(' + nums.length + ')';
    }
  });

  // IF(cond, a, b)
  expr = expr.replace(/IF\s*\(([^,]+),([^,]+),([^)]+)\)/gi, (m, cond, a, b) => {
    const c = evalCondition(cond.trim(), data);
    const pick = (c ? a.trim() : b.trim()).replace(/^"|"$/g, '');
    return '("' + pick.replace(/"/g, '\\"') + '")';
  });

  // VLOOKUP
  expr = expr.replace(
    /VLOOKUP\s*\(([^,]+),\s*([A-Z]+\d+):([A-Z]+\d+),\s*(\d+)(?:,\s*(?:FALSE|TRUE|0|1))?\s*\)/gi,
    (m, lookup, start, end, col) => {
      const val = resolveRef(lookup.trim(), data);
      const result = vlookup(val, start, end, parseInt(col, 10), data);
      return '(' + JSON.stringify(result) + ')';
    }
  );

  // XLOOKUP
  expr = expr.replace(
    /XLOOKUP\s*\(([^,]+),\s*([A-Z]+\d+):([A-Z]+\d+),\s*([A-Z]+\d+):([A-Z]+\d+)\)/gi,
    (m, lookup, lkStart, lkEnd, rtStart, rtEnd) => {
      const val = resolveRef(lookup.trim(), data);
      const result = xlookup(val, lkStart, lkEnd, rtStart, rtEnd, data);
      return '(' + JSON.stringify(result) + ')';
    }
  );

  // TODAY()
  expr = expr.replace(/TODAY\(\)/gi,
    () => '(' + JSON.stringify(new Date().toLocaleDateString()) + ')');

  // Cell refs
  expr = expr.replace(/\b([A-Z]+)(\d+)\b/g, (m, col, row) => {
    const v = getCellValue(col + row, data);
    if (typeof v === 'number') return '(' + v + ')';
    return '(' + JSON.stringify(v) + ')';
  });

  try {
    const result = Function('"use strict"; return (' + expr + ');')();
    if (typeof result === 'number' && !isFinite(result)) return '#DIV/0!';
    if (typeof result === 'undefined') return '#VALUE!';
    return result;
  } catch (e) {
    return '#ERROR!';
  }
}

function resolveRef(token, data) {
  token = token.trim();
  if (/^-?\d+(\.\d+)?$/.test(token)) return parseFloat(token);
  if (/^".*"$/.test(token)) return token.slice(1, -1);
  const m = token.match(/^([A-Z]+)(\d+)$/i);
  if (m) return getCellValue(m[1].toUpperCase() + m[2], data);
  return token;
}

function evalCondition(cond, data) {
  const m = cond.match(/^([A-Z]+\d+)\s*(>=|<=|<>|>|<|=)\s*(.+)$/i);
  if (!m) return false;
  const left = getCellValue(m[1].toUpperCase(), data);
  const op = m[2];
  const right = resolveRef(m[3], data);
  switch (op) {
    case '>':  return left > right;
    case '<':  return left < right;
    case '>=': return left >= right;
    case '<=': return left <= right;
    case '=':  return left == right;
    case '<>': return left != right;
  }
  return false;
}

function rangeValues(start, end, data) {
  const m1 = start.match(/^([A-Z]+)(\d+)$/);
  const m2 = end.match(/^([A-Z]+)(\d+)$/);
  if (!m1 || !m2) return [];
  const c1 = colLetterToIdx(m1[1]), c2 = colLetterToIdx(m2[1]);
  const r1 = parseInt(m1[2], 10), r2 = parseInt(m2[2], 10);
  const vals = [];
  for (let r = Math.min(r1, r2); r <= Math.max(r1, r2); r++) {
    for (let c = Math.min(c1, c2); c <= Math.max(c1, c2); c++) {
      vals.push(getCellValue(cellRef(c, r), data));
    }
  }
  return vals;
}

function vlookup(val, start, end, col, data) {
  const m1 = start.match(/^([A-Z]+)(\d+)$/);
  const m2 = end.match(/^([A-Z]+)(\d+)$/);
  if (!m1 || !m2) return '#N/A';
  const c1 = colLetterToIdx(m1[1]);
  const r1 = parseInt(m1[2], 10), r2 = parseInt(m2[2], 10);
  for (let r = r1; r <= r2; r++) {
    const key = getCellValue(cellRef(c1, r), data);
    if (String(key).toLowerCase() === String(val).toLowerCase()) {
      return getCellValue(cellRef(c1 + col - 1, r), data);
    }
  }
  return '#N/A';
}

function xlookup(val, lkStart, lkEnd, rtStart, rtEnd, data) {
  const l1 = lkStart.match(/^([A-Z]+)(\d+)$/);
  const l2 = lkEnd.match(/^([A-Z]+)(\d+)$/);
  const r1 = rtStart.match(/^([A-Z]+)(\d+)$/);
  if (!l1 || !l2 || !r1) return '#N/A';
  const lc = colLetterToIdx(l1[1]);
  const lr1 = parseInt(l1[2], 10), lr2 = parseInt(l2[2], 10);
  const rc = colLetterToIdx(r1[1]);
  for (let r = lr1; r <= lr2; r++) {
    const key = getCellValue(cellRef(lc, r), data);
    if (String(key).toLowerCase() === String(val).toLowerCase()) {
      return getCellValue(cellRef(rc, r), data);
    }
  }
  return '#N/A';
}
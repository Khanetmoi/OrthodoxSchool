// All Excel lessons. Keyed by lesson ID.

export const LESSONS_EXCEL = {

'grid-basics': {
  id: 'grid-basics', module: 'Module 1 · Meet the Grid',
  title: 'Cells, rows, columns — the grid',
  steps: [
    { lede: 'Every spreadsheet is a grid. <strong>Columns</strong> run across (A, B, C…). <strong>Rows</strong> run down (1, 2, 3…). The intersection is a <strong>cell</strong> — like <code>B3</code>. That\'s it. That\'s Excel.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {} },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click cell <strong>B3</strong> to select it. Watch the Name Box above the grid change.' },
      task: 'clickCell', taskTarget: 'B3',
      success: { toast: '✓ B3 selected', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>That\'s the Name Box.</strong> It always shows the address of the selected cell. You can also type an address there to jump to it.</div>' }
    },
    { lede: 'You can also <strong>navigate with the keyboard</strong>. Arrow keys move one cell at a time. <code>Tab</code> moves right. <code>Enter</code> moves down.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {} },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click cell <strong>D4</strong>.' },
      task: 'clickCell', taskTarget: 'D4',
      success: { toast: '✓ D4 ready', xp: 15,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">From here, press an arrow key — or just start typing.</div>' }
    },
    { lede: 'Time to type. Click a cell and start typing — Excel shows your text in the cell <em>and</em> in the formula bar. Press <code>Enter</code> to commit.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: { A1: { value: 'Name', type: 'text' } } },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click cell <strong>A2</strong>, type <code>Alice</code>, and press Enter.' },
      task: 'typeInCell', taskTarget: 'A2', taskValue: 'Alice',
      success: { toast: '✓ First cell typed!', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>You just entered your first value.</strong> Notice it appears in both the cell and the formula bar.</div>' }
    },
    { lede: 'Almost done. Let\'s add a header and a second row so this looks like a real list.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: { A1: { value: 'Name', type: 'text' }, A2: { value: 'Alice', type: 'text' } } },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B1</strong> and type <code>Email</code>. Then press Enter.' },
      task: 'typeInCell', taskTarget: 'B1', taskValue: 'Email',
      success: { toast: '✓ Header added', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You now have a two-column list.</div>' }
    }
  ],
  summary: 'You understand cells, columns, rows, and how to enter data into a specific cell.',
  recap: ['📍 Cell address = Column + Row', '⌨️ Tab right, Enter down', '✏️ Type to enter, Enter to commit'],
  portfolio: 'A two-column Name/Email list started.'
},

'cell-types': {
  id: 'cell-types', module: 'Module 1 · Meet the Grid',
  title: 'Text, numbers, and dates',
  steps: [
    { lede: 'Excel has three main types of data: <strong>text</strong> (left-aligned), <strong>numbers</strong> (right-aligned), and <strong>dates</strong> (right-aligned, stored as numbers).',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text' }, B1: { value: 'Cost', type: 'text' },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click cell <strong>B3</strong> and type the number <code>12</code>.' },
      task: 'typeInCell', taskTarget: 'B3', taskValue: 12,
      success: { toast: '✓ Number entered', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>Notice it right-aligned automatically.</strong> Excel knows it\'s a number.</div>' }
    },
    { lede: 'Text goes left, numbers go right. This is your instant visual check for data-type mistakes.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text' }, B1: { value: 'Cost', type: 'text' },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number' },
        A3: { value: 'Tea', type: 'text' }, B3: { value: 12, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B4</strong> and type <code>7.25</code>.' },
      task: 'typeInCell', taskTarget: 'B4', taskValue: 7.25,
      success: { toast: '✓ Number added', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Labels on the left, values on the right — the shape of a real list.</div>' }
    },
    { lede: 'Dates are sneaky. Excel stores them as numbers. Type <code>1/15/2025</code> and Excel recognizes it as a date.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text' }, B1: { value: 'Cost', type: 'text' }, C1: { value: 'Date', type: 'text' },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C2</strong> and type <code>1/15/2025</code>.' },
      task: 'typeInCell', taskTarget: 'C2', taskValue: '1/15/2025',
      success: { toast: '✓ Date entered', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Excel recognized the date and right-aligned it.</div>' }
    }
  ],
  summary: 'You can enter text, numbers, and dates, and check Excel\'s interpretation by alignment.',
  recap: ['📝 Text = left', '🔢 Numbers = right', '📅 Dates = right, stored as numbers'],
  portfolio: 'A three-column expense list with dates.'
},

'formula-bar': {
  id: 'formula-bar', module: 'Module 1 · Meet the Grid',
  title: 'The formula bar — peek behind any cell',
  steps: [
    { lede: 'The <strong>formula bar</strong> shows the <em>raw</em> contents of the selected cell. If a cell shows <code>$4.50</code> but the formula bar shows <code>4.5</code>, you know it\'s formatted as currency.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Widget', type: 'text' },
        B1: { value: 4.5, type: 'number', numberFormat: 'currency' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click cell <strong>B1</strong> and look at the formula bar.' },
      task: 'clickCell', taskTarget: 'B1',
      success: { toast: '✓ Raw value revealed', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>This is huge.</strong> Whenever a cell looks wrong, click it and read the formula bar.</div>' }
    },
    { lede: 'A cell can hold a <strong>formula</strong> instead of a value. Formulas start with <code>=</code>. The cell shows the result; the formula bar shows the formula.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, B1: { value: 20, type: 'number' },
        C1: { value: '=A1+B1', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click cell <strong>C1</strong>.' },
      task: 'clickCell', taskTarget: 'C1',
      success: { toast: '✓ You found a formula!', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The cell displays the <em>result</em>. The formula bar displays the <em>instruction</em>.</div>' }
    },
    { lede: 'Formatting is a layer on top of data. The data never changes — only how Excel paints it.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Widget', type: 'text' },
        B1: { value: 4.5, type: 'number', numberFormat: 'currency' },
        A2: { value: 'Gadget', type: 'text' },
        B2: { value: 12, type: 'number', numberFormat: 'currency' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong> and check its raw value in the formula bar.' },
      task: 'clickCell', taskTarget: 'B2',
      success: { toast: '✓ Raw value 12', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Raw value <code>12</code>, displayed as <code>$12.00</code>.</div>' }
    }
  ],
  summary: 'The formula bar shows raw contents. Formatting is separate from data.',
  recap: ['🔍 Formula bar shows raw values', '🎭 Display ≠ data', '✏️ Click any cell to inspect'],
  portfolio: 'A product list with inspected raw values.'
},

'editing-data': {
  id: 'editing-data', module: 'Module 2 · Entering & Editing Data',
  title: 'Editing, deleting, and overwriting',
  steps: [
    { lede: 'To <strong>edit</strong> a cell, click it and start typing — the old value is replaced. To <strong>edit in place</strong> without replacing, press <code>F2</code> or double-click.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Task', type: 'text' }, B1: { value: 'Done', type: 'text' },
        A2: { value: 'Email boss', type: 'text' }, B2: { value: 'No', type: 'text' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong> and type <code>Yes</code> to overwrite "No".' },
      task: 'typeInCell', taskTarget: 'B2', taskValue: 'Yes',
      success: { toast: '✓ Overwritten', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Typing over a cell replaces it entirely.</div>' }
    },
    { lede: 'Press <code>Delete</code> to clear a cell\'s contents. The formatting stays.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Task', type: 'text' }, B1: { value: 'Done', type: 'text' },
        A2: { value: 'Email boss', type: 'text' }, B2: { value: 'Yes', type: 'text' },
        A3: { value: 'Old entry', type: 'text' }, B3: { value: '???', type: 'text' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B3</strong> and clear it.' },
      task: 'typeInCell', taskTarget: 'B3', taskValue: ' ',
      success: { toast: '✓ Cleared', xp: 15,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">In real Excel you\'d press Delete.</div>' }
    },
    { lede: '<strong>Copy and paste</strong> is the fastest way to duplicate data. Select a cell, <code>Ctrl+C</code>, select the target, <code>Ctrl+V</code>.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Product', type: 'text' }, B1: { value: 'Price', type: 'text' },
        A2: { value: 'Notebook', type: 'text' }, B2: { value: 3.5, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A3</strong> and type <code>Product</code>.' },
      task: 'typeInCell', taskTarget: 'A3', taskValue: 'Product',
      success: { toast: '✓ Duplicated', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">In real Excel you\'d use Ctrl+C / Ctrl+V.</div>' }
    },
    { lede: 'You can also paste <strong>without formatting</strong> — great for copying from the web.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Product', type: 'text' }, B1: { value: 'Price', type: 'text' },
        A2: { value: 'Notebook', type: 'text' }, B2: { value: 3.5, type: 'number' },
        A3: { value: 'Product', type: 'text' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B3</strong> and type <code>3.5</code>.' },
      task: 'typeInCell', taskTarget: 'B3', taskValue: 3.5,
      success: { toast: '✓ Row duplicated', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Notice the formatting also duplicated in real Excel.</div>' }
    }
  ],
  summary: 'You can overwrite, clear, and duplicate cells — the three fundamental editing operations.',
  recap: ['⌨️ Type to replace, F2 to edit', '🗑 Delete clears contents', '📋 Ctrl+C / Ctrl+V to duplicate'],
  portfolio: 'A task list with cleared and duplicated entries.'
},

'autofill': {
  id: 'autofill', module: 'Module 2 · Entering & Editing Data',
  title: 'Autofill — Excel does the typing for you',
  steps: [
    { lede: '<strong>Autofill</strong> copies or extends data down a column. Type a value, grab the <strong>fill handle</strong> (bottom-right corner of the cell) and drag.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: { A1: { value: 'Day 1', type: 'text' } } },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A2</strong> and type <code>Day 2</code>.' },
      task: 'typeInCell', taskTarget: 'A2', taskValue: 'Day 2',
      success: { toast: '✓ Pattern recognized', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">In real Excel, select A1:A2, grab the fill handle, and drag down — Excel continues with Day 3, Day 4…</div>' }
    },
    { lede: 'Number sequences are the same. Type <code>10</code>, then <code>20</code>. Excel detects the step and continues: 30, 40, 50.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, A2: { value: 20, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A3</strong> and type <code>30</code>.' },
      task: 'typeInCell', taskTarget: 'A3', taskValue: 30,
      success: { toast: '✓ Sequence continued', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Excel would have filled 30, 40, 50, 60 automatically.</div>' }
    },
    { lede: 'Autofill also handles <strong>dates</strong>. Type <code>1/1/2025</code>, drag down — Excel fills 1/2/2025, 1/3/2025…',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: { A1: { value: '1/1/2025', type: 'date' } } },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A2</strong> and type <code>1/2/2025</code>.' },
      task: 'typeInCell', taskTarget: 'A2', taskValue: '1/2/2025',
      success: { toast: '✓ Date pattern', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Two dates → drag → a full calendar.</div>' }
    },
    { lede: 'Autofill works on <strong>formulas</strong> too. Type <code>=A1*2</code> in B1, drag down — Excel adjusts the reference to A2, A3, A4 automatically.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, A2: { value: 20, type: 'number' }, A3: { value: 30, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B1</strong> and type <code>=A1*2</code>. Then click B2 and type <code>=A2*2</code>.' },
      task: 'typeInCell', taskTarget: 'B2', taskValue: '=A2*2',
      success: { toast: '✓ Formula copied', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You did manually what autofill does instantly.</div>' }
    }
  ],
  summary: 'Autofill extends patterns — numbers, dates, and formulas — down a column with one drag.',
  recap: ['✋ Fill handle = bottom-right corner', '🔢 Numbers, dates, and text patterns', '🧮 Formula autofill = relative references'],
  portfolio: 'A date sequence and formula column built with autofill.'
},

'number-formats': {
  id: 'number-formats', module: 'Module 3 · Basic Formatting',
  title: 'Currency, percentages, and decimals',
  steps: [
    { lede: 'Numbers look messy without formatting. <code>4.5</code> should be <code>$4.50</code>. <code>0.15</code> should be <code>15%</code>.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text' }, B1: { value: 'Price', type: 'text' },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong> then click the <strong>$</strong> button.' },
      task: 'clickButton', taskTarget: 'currency',
      success: { toast: '✓ Formatted as currency', xp: 25,
        applyFormat: { target: 'B2', numberFormat: 'currency' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>Notice:</strong> the value didn\'t change — only its display.</div>' }
    },
    { lede: 'Percentages are stored as decimals (0.15 = 15%). Click a cell and hit the <strong>%</strong> button.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Tax rate', type: 'text' }, B1: { value: 0.15, type: 'number' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B1</strong>, then click the <strong>%</strong> button.' },
      task: 'clickButton', taskTarget: 'percent',
      success: { toast: '✓ Now shows 15%', xp: 25,
        applyFormat: { target: 'B1', numberFormat: 'percent' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Stored as <code>0.15</code>, displayed as <code>15%</code>.</div>' }
    },
    { lede: 'The <strong>decimal buttons</strong> add or remove decimal places.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text' }, B1: { value: 'Price', type: 'text' },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number', numberFormat: 'currency' },
        A3: { value: 'Tea', type: 'text' }, B3: { value: 3, type: 'number', numberFormat: 'currency' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B3</strong>, then click <strong>Increase Decimal</strong>.' },
      task: 'clickButton', taskTarget: 'incdec',
      success: { toast: '✓ Decimals normalized', xp: 20,
        applyFormat: { target: 'B3', numberFormat: 'currency2' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now <code>$3.00</code> and <code>$4.50</code> line up.</div>' }
    }
  ],
  summary: 'Formatting changes display, not data.',
  recap: ['💵 $ button = currency', '💯 % button = percent', '🔢 .00 → = more decimals'],
  portfolio: 'A price column formatted consistently.'
},

'cell-styling': {
  id: 'cell-styling', module: 'Module 3 · Basic Formatting',
  title: 'Bold, color, borders — make it readable',
  steps: [
    { lede: 'Headers should be <strong>bold</strong>. Key numbers can be colored. A light fill color for a header row makes tables 10x more readable.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text' }, B1: { value: 'Price', type: 'text' },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number', numberFormat: 'currency' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A1</strong>, then click <strong>B</strong> (Bold).' },
      task: 'clickButton', taskTarget: 'bold',
      success: { toast: '✓ Bold applied', xp: 20,
        applyFormat: { target: 'A1', bold: true },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Headers should always be bold.</div>' }
    },
    { lede: 'A <strong>background fill</strong> makes a header row stand out.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text', bold: true }, B1: { value: 'Price', type: 'text', bold: true },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number', numberFormat: 'currency' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A1</strong>, then click <strong>Fill</strong> to shade the header.' },
      task: 'clickButton', taskTarget: 'fill',
      success: { toast: '✓ Header shaded', xp: 20,
        applyFormat: { target: 'A1', fill: true },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">In real Excel this opens a color palette.</div>' }
    },
    { lede: '<strong>Borders</strong> outline cells so the table looks intentional.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Item', type: 'text', bold: true, fill: true }, B1: { value: 'Price', type: 'text', bold: true, fill: true },
        A2: { value: 'Coffee', type: 'text' }, B2: { value: 4.5, type: 'number', numberFormat: 'currency' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B1</strong>, then click <strong>Borders</strong>.' },
      task: 'clickButton', taskTarget: 'borders',
      success: { toast: '✓ Header underlined', xp: 20,
        applyFormat: { target: 'A1', border: true },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now the header separates visually from the data.</div>' }
    }
  ],
  summary: 'Bold + fill + borders = a table that looks intentional.',
  recap: ['🅱 Bold headers', '🎨 Light fill for header rows', '▁ Bottom borders separate header from data'],
  portfolio: 'A formatted budget with styled headers.'
},

'formulas-basics': {
  id: 'formulas-basics', module: 'Module 4 · Formulas 101',
  title: 'Formulas — Excel does the math',
  steps: [
    { lede: 'A formula starts with <code>=</code>. Everything after is what Excel calculates. <code>=5+3</code> shows 8. <code>=10*2</code> shows 20.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {} },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A1</strong> and type <code>=2+3</code>.' },
      task: 'typeInCell', taskTarget: 'A1', taskValue: '=2+3',
      success: { toast: '✓ 2+3 = 5!', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The cell shows <code>5</code>, the formula bar shows <code>=2+3</code>.</div>' }
    },
    { lede: 'You can use cell references in formulas. <code>=A1+B1</code> adds the values in A1 and B1. Change either cell, and the result updates instantly.',
      sandbox: { rows: 8, cols: 5, activeCell: 'C1', data: {
        A1: { value: 10, type: 'number' }, B1: { value: 20, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C1</strong> and type <code>=A1+B1</code>.' },
      task: 'typeInCell', taskTarget: 'C1', taskValue: '=A1+B1',
      success: { toast: '✓ 30 — and now it\'s live', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">If you change A1 to 15, C1 becomes 35 — automatically.</div>' }
    },
    { lede: 'All four operators work: <code>+</code> <code>-</code> <code>*</code> <code>/</code>. Use parentheses for grouping.',
      sandbox: { rows: 8, cols: 5, activeCell: 'C1', data: {
        A1: { value: 10, type: 'number' }, B1: { value: 20, type: 'number' },
        C1: { value: '=A1+B1', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>D1</strong> and type <code>=(A1+B1)*2</code>.' },
      task: 'typeInCell', taskTarget: 'D1', taskValue: '=(A1+B1)*2',
      success: { toast: '✓ 60 — parentheses first', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Without parentheses, <code>=A1+B1*2</code> would give 50, not 60.</div>' }
    },
    { lede: 'Operators can be mixed freely. Let\'s build the classic tax calculation: subtotal * tax rate.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Subtotal', type: 'text' }, B1: { value: 100, type: 'number', numberFormat: 'currency' },
        A2: { value: 'Tax (10%)', type: 'text' }, B2: { value: 0.1, type: 'number', numberFormat: 'percent' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B3</strong> and type <code>=B1*B2</code>.' },
      task: 'typeInCell', taskTarget: 'B3', taskValue: '=B1*B2',
      success: { toast: '✓ $10 — tax calculated', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now you have a live total. Change the subtotal and the tax updates.</div>' }
    }
  ],
  summary: 'Formulas start with =. They can use numbers, cell references, operators, and parentheses.',
  recap: ['= starts a formula', '+ - * / are the operators', '() group operations'],
  portfolio: 'A tax calculator with live totals.'
},

'cell-references': {
  id: 'cell-references', module: 'Module 4 · Formulas 101',
  title: 'Relative, absolute, and mixed references',
  steps: [
    { lede: 'By default, references are <strong>relative</strong>. When you copy <code>=A1+B1</code> down one row, it becomes <code>=A2+B2</code>.',
      sandbox: { rows: 8, cols: 5, activeCell: 'C1', data: {
        A1: { value: 10, type: 'number' }, B1: { value: 20, type: 'number' }, C1: { value: '=A1+B1', type: 'formula' },
        A2: { value: 15, type: 'number' }, B2: { value: 25, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C2</strong> and type <code>=A2+B2</code>.' },
      task: 'typeInCell', taskTarget: 'C2', taskValue: '=A2+B2',
      success: { toast: '✓ Relative in action', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Row 2 uses row-2 references. Autofill would do this automatically.</div>' }
    },
    { lede: 'Sometimes you <em>don\'t</em> want the reference to move. Add <code>$</code> to lock it. <code>$B$1</code> is absolute — always points to B1.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Price', type: 'text' }, B1: { value: 'Qty', type: 'text' }, C1: { value: 'Total', type: 'text' },
        A2: { value: 10, type: 'number', numberFormat: 'currency' }, B2: { value: 3, type: 'number' },
        A3: { value: 20, type: 'number', numberFormat: 'currency' }, B3: { value: 5, type: 'number' },
        A4: { value: 'Tax rate', type: 'text' }, B4: { value: 0.1, type: 'number', numberFormat: 'percent' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C2</strong> and type <code>=A2*B2*(1+$B$4)</code>.' },
      task: 'typeInCell', taskTarget: 'C2', taskValue: '=A2*B2*(1+$B$4)',
      success: { toast: '✓ $33 — price × qty × 1.10', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The <code>$B$4</code> is locked.</div>' }
    },
    { lede: '<strong>Mixed references</strong> lock only the row <em>or</em> the column. <code>$B1</code> locks column B but lets the row move.',
      sandbox: { rows: 8, cols: 5, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, B1: { value: 2, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C1</strong> and type <code>=$A1*B$1</code>.' },
      task: 'typeInCell', taskTarget: 'C1', taskValue: '=$A1*B$1',
      success: { toast: '✓ 20 — mixed refs', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Mixed refs are the trick behind multiplication tables.</div>' }
    }
  ],
  summary: 'Relative refs move when you copy. Absolute refs ($) stay locked.',
  recap: ['↘ A1 = relative', '🔒 $A$1 = absolute', '⚡ $A1 / A$1 = mixed'],
  portfolio: 'An invoice with a locked tax rate cell.'
},

'sum-avg': {
  id: 'sum-avg', module: 'Module 5 · Core Functions',
  title: 'SUM, AVERAGE, MIN, MAX, COUNT',
  steps: [
    { lede: '<strong>SUM</strong> adds a range. <code>=SUM(A1:A10)</code> totals everything in A1 through A10.',
      sandbox: { rows: 10, cols: 4, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, A2: { value: 20, type: 'number' }, A3: { value: 30, type: 'number' },
        A4: { value: 15, type: 'number' }, A5: { value: 25, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A7</strong> and type <code>=SUM(A1:A5)</code>.' },
      task: 'typeInCell', taskTarget: 'A7', taskValue: '=SUM(A1:A5)',
      success: { toast: '✓ 100 — the total', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">100 = 10+20+30+15+25.</div>' }
    },
    { lede: '<strong>AVERAGE</strong>, <strong>MIN</strong>, and <strong>MAX</strong> work the same way — pass them a range and they compute.',
      sandbox: { rows: 10, cols: 4, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, A2: { value: 20, type: 'number' }, A3: { value: 30, type: 'number' },
        A4: { value: 15, type: 'number' }, A5: { value: 25, type: 'number' },
        A7: { value: '=SUM(A1:A5)', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A8</strong> and type <code>=AVERAGE(A1:A5)</code>.' },
      task: 'typeInCell', taskTarget: 'A8', taskValue: '=AVERAGE(A1:A5)',
      success: { toast: '✓ 20 — the average', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">100 ÷ 5 = 20.</div>' }
    },
    { lede: '<strong>COUNT</strong> counts numeric cells. Great for checking "how many entries do I have?"',
      sandbox: { rows: 10, cols: 4, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, A2: { value: 20, type: 'number' }, A3: { value: 30, type: 'number' },
        A4: { value: 15, type: 'number' }, A5: { value: 25, type: 'number' },
        A7: { value: '=SUM(A1:A5)', type: 'formula' },
        A8: { value: '=AVERAGE(A1:A5)', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A9</strong> and type <code>=COUNT(A1:A5)</code>.' },
      task: 'typeInCell', taskTarget: 'A9', taskValue: '=COUNT(A1:A5)',
      success: { toast: '✓ 5 entries', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">COUNT is your sanity check.</div>' }
    },
    { lede: 'You can also use <strong>MIN</strong> and <strong>MAX</strong> for ranges.',
      sandbox: { rows: 10, cols: 4, activeCell: 'A1', data: {
        A1: { value: 10, type: 'number' }, A2: { value: 20, type: 'number' }, A3: { value: 30, type: 'number' },
        A4: { value: 15, type: 'number' }, A5: { value: 25, type: 'number' },
        A7: { value: '=SUM(A1:A5)', type: 'formula' },
        A8: { value: '=AVERAGE(A1:A5)', type: 'formula' },
        A9: { value: '=COUNT(A1:A5)', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A10</strong> and type <code>=MAX(A1:A5)</code>.' },
      task: 'typeInCell', taskTarget: 'A10', taskValue: '=MAX(A1:A5)',
      success: { toast: '✓ 30 — the highest', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You now have a mini dashboard.</div>' }
    }
  ],
  summary: 'SUM, AVERAGE, MIN, MAX, COUNT — five functions that handle most number-crunching.',
  recap: ['➕ SUM adds', '📊 AVERAGE divides by count', '📈 MIN/MAX extremes', '# COUNT entries'],
  portfolio: 'A sales tracker with totals, average, and count.'
},

'if-basics': {
  id: 'if-basics', module: 'Module 5 · Core Functions',
  title: 'IF — make Excel decide',
  steps: [
    { lede: '<strong>IF</strong> tests a condition and returns one of two values. <code>=IF(A1>10, "High", "Low")</code> shows "High" if A1 > 10, otherwise "Low".',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Score', type: 'text' }, B1: { value: 'Result', type: 'text' },
        A2: { value: 85, type: 'number' }, A3: { value: 45, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong> and type <code>=IF(A2>=60,"Pass","Fail")</code>.' },
      task: 'typeInCell', taskTarget: 'B2', taskValue: '=IF(A2>=60,"Pass","Fail")',
      success: { toast: '✓ "Pass" for 85', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">85 ≥ 60, so B2 shows "Pass".</div>' }
    },
    { lede: 'Test the same formula against a failing score.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Score', type: 'text' }, B1: { value: 'Result', type: 'text' },
        A2: { value: 85, type: 'number' }, B2: { value: '=IF(A2>=60,"Pass","Fail")', type: 'formula' },
        A3: { value: 45, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B3</strong> and type <code>=IF(A3>=60,"Pass","Fail")</code>.' },
      task: 'typeInCell', taskTarget: 'B3', taskValue: '=IF(A3>=60,"Pass","Fail")',
      success: { toast: '✓ "Fail" for 45', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">One formula, two outcomes.</div>' }
    },
    { lede: 'You can <strong>nest</strong> IFs for multiple conditions.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Score', type: 'text' }, B1: { value: 'Grade', type: 'text' },
        A2: { value: 92, type: 'number' }, A3: { value: 75, type: 'number' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong> and type <code>=IF(A2>=90,"A",IF(A2>=80,"B",IF(A2>=70,"C","F")))</code>.' },
      task: 'typeInCell', taskTarget: 'B2', taskValue: '=IF(A2>=90,"A",IF(A2>=80,"B",IF(A2>=70,"C","F")))',
      success: { toast: '✓ A grade!', xp: 35,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Nested IFs cascade.</div>' }
    }
  ],
  summary: 'IF adds decision-making to your spreadsheet.',
  recap: ['🤔 IF(condition, ifTrue, ifFalse)', '📚 Nest IFs for grades', '✅ Strings need quotes'],
  portfolio: 'A student score tracker with automatic pass/fail.'
},

'charts-intro': {
  id: 'charts-intro', module: 'Module 6 · Charts & Visualization',
  title: 'Your first chart — bar chart basics',
  steps: [
    { lede: 'Charts turn numbers into pictures. A <strong>bar chart</strong> compares values across categories.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Month', type: 'text' }, B1: { value: 'Sales', type: 'text' },
        A2: { value: 'Jan', type: 'text' }, B2: { value: 120, type: 'number' },
        A3: { value: 'Feb', type: 'text' }, B3: { value: 145, type: 'number' },
        A4: { value: 'Mar', type: 'text' }, B4: { value: 132, type: 'number' }
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong>, then click the <strong>Column</strong> chart button.' },
      task: 'clickButton', taskTarget: 'insertColumn',
      success: { toast: '✓ Bar chart inserted!', xp: 30,
        addChart: { type: 'bar', labels: ['Jan','Feb','Mar'], values: [120, 145, 132] },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Jan < Feb > Mar — pattern visible in a glance.</div>' }
    },
    { lede: 'A good chart has a <strong>title</strong>. "Sales by Month" tells the reader what they\'re looking at.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Month', type: 'text' }, B1: { value: 'Sales', type: 'text' },
        A2: { value: 'Jan', type: 'text' }, B2: { value: 120, type: 'number' },
        A3: { value: 'Feb', type: 'text' }, B3: { value: 145, type: 'number' },
        A4: { value: 'Mar', type: 'text' }, B4: { value: 132, type: 'number' }
      }, ribbon: 'insert', chart: { type: 'bar', labels: ['Jan','Feb','Mar'], values: [120, 145, 132] } },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Insert → Column</strong> again — we\'ll auto-title it.' },
      task: 'clickButton', taskTarget: 'insertColumn',
      success: { toast: '✓ Chart updated with title', xp: 15,
        addChart: { type: 'bar', labels: ['Jan','Feb','Mar'], values: [120, 145, 132], title: 'Sales by Month' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Every chart needs a title.</div>' }
    }
  ],
  summary: 'Bar charts compare values across categories. Always include a title.',
  recap: ['📊 Bar chart = comparison', '📝 Always title your charts'],
  portfolio: 'A sales bar chart with proper title.'
},

'chart-types': {
  id: 'chart-types', module: 'Module 6 · Charts & Visualization',
  title: 'When to use line, pie, and bar',
  steps: [
    { lede: '<strong>Line charts</strong> show trends over time. If your x-axis is dates or months, use a line.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Month', type: 'text' }, B1: { value: 'Users', type: 'text' },
        A2: { value: 'Jan', type: 'text' }, B2: { value: 1000, type: 'number' },
        A3: { value: 'Feb', type: 'text' }, B3: { value: 1200, type: 'number' },
        A4: { value: 'Mar', type: 'text' }, B4: { value: 1100, type: 'number' },
        A5: { value: 'Apr', type: 'text' }, B5: { value: 1450, type: 'number' }
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong>, then click the <strong>Line</strong> chart button.' },
      task: 'clickButton', taskTarget: 'insertLine',
      success: { toast: '✓ Line chart — trend visible', xp: 30,
        addChart: { type: 'line', labels: ['Jan','Feb','Mar','Apr'], values: [1000, 1200, 1100, 1450], title: 'User Growth' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Line = trend.</div>' }
    },
    { lede: '<strong>Pie charts</strong> show parts of a whole. Only use them if the numbers add up to 100% and you have 5 or fewer slices.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Browser', type: 'text' }, B1: { value: 'Share', type: 'text' },
        A2: { value: 'Chrome', type: 'text' }, B2: { value: 65, type: 'number' },
        A3: { value: 'Safari', type: 'text' }, B3: { value: 20, type: 'number' },
        A4: { value: 'Edge', type: 'text' }, B4: { value: 10, type: 'number' },
        A5: { value: 'Other', type: 'text' }, B5: { value: 5, type: 'number' }
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B2</strong>, then click the <strong>Pie</strong> chart button.' },
      task: 'clickButton', taskTarget: 'insertPie',
      success: { toast: '✓ Pie chart — shares visible', xp: 30,
        addChart: { type: 'pie', labels: ['Chrome','Safari','Edge','Other'], values: [65, 20, 10, 5], title: 'Browser Market Share' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Parts of a whole. Use sparingly.</div>' }
    },
    { lede: 'The rule: <strong>bar</strong> for comparison, <strong>line</strong> for time, <strong>pie</strong> for parts of a whole.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Month', type: 'text' }, B1: { value: 'Sales', type: 'text' },
        A2: { value: 'Jan', type: 'text' }, B2: { value: 120, type: 'number' },
        A3: { value: 'Feb', type: 'text' }, B3: { value: 145, type: 'number' }
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Insert a <strong>Column</strong> chart to complete the dashboard.' },
      task: 'clickButton', taskTarget: 'insertColumn',
      success: { toast: '✓ Dashboard complete!', xp: 25,
        addChart: { type: 'bar', labels: ['Jan','Feb'], values: [120, 145], title: 'Monthly Sales' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You now know all three chart types.</div>' }
    }
  ],
  summary: 'Bar for comparison, line for time, pie for parts of a whole.',
  recap: ['📊 Bar = compare', '📈 Line = trend', '🥧 Pie = parts of a whole'],
  portfolio: 'A multi-chart dashboard with the right chart type for each question.'
},

'tables-intro': {
  id: 'tables-intro', module: 'Module 7 · Tables & Sorting',
  title: 'Convert a range into a Table',
  steps: [
    { lede: 'A <strong>Table</strong> is a range with superpowers: auto-expanding, structured references, built-in filters, and banded rows.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Name', type: 'text' }, B1: { value: 'Dept', type: 'text' }, C1: { value: 'Salary', type: 'text' },
        A2: { value: 'Alice', type: 'text' }, B2: { value: 'Eng', type: 'text' }, C2: { value: 95000, type: 'number' },
        A3: { value: 'Bob', type: 'text' }, B3: { value: 'Sales', type: 'text' }, C3: { value: 75000, type: 'number' }
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A1</strong>, then click the <strong>Table</strong> button.' },
      task: 'clickButton', taskTarget: 'insertTable',
      success: { toast: '✓ Range is now a Table', xp: 30,
        applyTable: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Notice the filter arrows and banded rows.</div>' }
    },
    { lede: 'Tables have a <strong>Totals Row</strong>. Turn it on from the Table Design tab and Excel adds a SUM row at the bottom.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Name', type: 'text' }, B1: { value: 'Dept', type: 'text' }, C1: { value: 'Salary', type: 'text' },
        A2: { value: 'Alice', type: 'text' }, B2: { value: 'Eng', type: 'text' }, C2: { value: 95000, type: 'number' },
        A3: { value: 'Bob', type: 'text' }, B3: { value: 'Sales', type: 'text' }, C3: { value: 75000, type: 'number' },
        table: true
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C2</strong> and add a new row by typing <code>Carol</code> in A4.' },
      task: 'typeInCell', taskTarget: 'A4', taskValue: 'Carol',
      success: { toast: '✓ New row accepted', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Typing in the row below a table automatically extends it.</div>' }
    },
    { lede: 'Tables also unlock <strong>structured references</strong> — you refer to columns by name.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Name', type: 'text' }, B1: { value: 'Dept', type: 'text' }, C1: { value: 'Salary', type: 'text' },
        A2: { value: 'Alice', type: 'text' }, B2: { value: 'Eng', type: 'text' }, C2: { value: 95000, type: 'number' },
        A3: { value: 'Bob', type: 'text' }, B3: { value: 'Sales', type: 'text' }, C3: { value: 75000, type: 'number' },
        A4: { value: 'Carol', type: 'text' }, B4: { value: 'Eng', type: 'text' }, C4: { value: 88000, type: 'number' },
        table: true
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C6</strong> and type <code>=SUM(C2:C4)</code>.' },
      task: 'typeInCell', taskTarget: 'C6', taskValue: '=SUM(C2:C4)',
      success: { toast: '✓ $258,000 total', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">In a real Table you\'d type <code>=SUM(Salaries[Salary])</code>.</div>' }
    }
  ],
  summary: 'Tables add auto-expansion, filters, banded rows, and structured references.',
  recap: ['📋 Ctrl+T makes a Table', '🔽 Filter arrows auto-added', '📊 Structured refs = table[column]'],
  portfolio: 'An employee table with filters and totals.'
},

'sorting-filtering': {
  id: 'sorting-filtering', module: 'Module 7 · Tables & Sorting',
  title: 'Sort and filter — find what you need',
  steps: [
    { lede: '<strong>Sorting</strong> reorders rows by a column. Sort A→Z for text, smallest-to-largest for numbers.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Name', type: 'text' }, B1: { value: 'Score', type: 'text' },
        A2: { value: 'Alice', type: 'text' }, B2: { value: 92, type: 'number' },
        A3: { value: 'Bob', type: 'text' }, B3: { value: 78, type: 'number' },
        A4: { value: 'Carol', type: 'text' }, B4: { value: 85, type: 'number' },
        A5: { value: 'Dan', type: 'text' }, B5: { value: 68, type: 'number' }
      }, ribbon: 'data' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B1</strong>, then click <strong>Sort A→Z</strong>.' },
      task: 'clickButton', taskTarget: 'sortAsc',
      success: { toast: '✓ Sorted by score', xp: 25,
        applySort: { column: 'B', ascending: true },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The rows reordered together.</div>' }
    },
    { lede: 'Filters show a dropdown on each header.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Name', type: 'text' }, B1: { value: 'Score', type: 'text' },
        A2: { value: 'Dan', type: 'text' }, B2: { value: 68, type: 'number' },
        A3: { value: 'Bob', type: 'text' }, B3: { value: 78, type: 'number' },
        A4: { value: 'Carol', type: 'text' }, B4: { value: 85, type: 'number' },
        A5: { value: 'Alice', type: 'text' }, B5: { value: 92, type: 'number' }
      }, ribbon: 'data' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B1</strong>, then click <strong>Filter</strong>.' },
      task: 'clickButton', taskTarget: 'filterToggle',
      success: { toast: '✓ Filters enabled', xp: 20,
        applyFilter: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now every header has a dropdown.</div>' }
    }
  ],
  summary: 'Sorting reorders rows. Filtering hides non-matching rows.',
  recap: ['⬆ A→Z sorts ascending', '⬇ Z→A sorts descending', '🔽 Filter dropdowns on each header'],
  portfolio: 'A sorted and filtered client list.'
},

'vlookup': {
  id: 'vlookup', module: 'Module 8 · Lookup Functions',
  title: 'VLOOKUP — connect two lists',
  steps: [
    { lede: '<strong>VLOOKUP</strong> searches a table for a value and returns a value from the same row.',
      sandbox: { rows: 10, cols: 6, activeCell: 'A1', data: {
        A1: { value: 'ID', type: 'text' }, B1: { value: 'Product', type: 'text' },
        A2: { value: 'P001', type: 'text' }, B2: { value: 'Widget', type: 'text' },
        A3: { value: 'P002', type: 'text' }, B3: { value: 'Gadget', type: 'text' },
        A4: { value: 'P003', type: 'text' }, B4: { value: 'Sprocket', type: 'text' },
        D1: { value: 'ID', type: 'text' }, E1: { value: 'Price', type: 'text' },
        D2: { value: 'P001', type: 'text' }, E2: { value: 9.99, type: 'number', numberFormat: 'currency' },
        D3: { value: 'P002', type: 'text' }, E3: { value: 14.5, type: 'number', numberFormat: 'currency' },
        D4: { value: 'P003', type: 'text' }, E4: { value: 3.25, type: 'number', numberFormat: 'currency' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C2</strong> and type <code>=VLOOKUP(A2,D2:E4,2,FALSE)</code>.' },
      task: 'typeInCell', taskTarget: 'C2', taskValue: '=VLOOKUP(A2,D2:E4,2,FALSE)',
      success: { toast: '✓ $9.99 — price pulled in!', xp: 35,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Excel found "P001" and returned the price. <code>FALSE</code> means exact match.</div>' }
    },
    { lede: 'The 4th argument is critical. <strong>FALSE</strong> = exact match. Always use FALSE unless you know what you\'re doing.',
      sandbox: { rows: 10, cols: 6, activeCell: 'A1', data: {
        A1: { value: 'ID', type: 'text' }, B1: { value: 'Product', type: 'text' },
        A2: { value: 'P001', type: 'text' }, B2: { value: 'Widget', type: 'text' },
        A3: { value: 'P002', type: 'text' }, B3: { value: 'Gadget', type: 'text' },
        D1: { value: 'ID', type: 'text' }, E1: { value: 'Price', type: 'text' },
        D2: { value: 'P001', type: 'text' }, E2: { value: 9.99, type: 'number', numberFormat: 'currency' },
        D3: { value: 'P002', type: 'text' }, E3: { value: 14.5, type: 'number', numberFormat: 'currency' },
        C2: { value: '=VLOOKUP(A2,D2:E3,2,FALSE)', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C3</strong> and type <code>=VLOOKUP(A3,D2:E3,2,FALSE)</code>.' },
      task: 'typeInCell', taskTarget: 'C3', taskValue: '=VLOOKUP(A3,D2:E3,2,FALSE)',
      success: { toast: '✓ $14.50 for P002', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Same formula, different row.</div>' }
    },
    { lede: 'If VLOOKUP can\'t find the value, it returns <code>#N/A</code>. Wrap it in <strong>IFERROR</strong>.',
      sandbox: { rows: 10, cols: 6, activeCell: 'A1', data: {
        A1: { value: 'ID', type: 'text' }, B1: { value: 'Product', type: 'text' },
        A2: { value: 'P001', type: 'text' }, B2: { value: 'Widget', type: 'text' },
        A3: { value: 'P002', type: 'text' }, B3: { value: 'Gadget', type: 'text' },
        A4: { value: 'P999', type: 'text' }, B4: { value: 'Unknown', type: 'text' },
        D1: { value: 'ID', type: 'text' }, E1: { value: 'Price', type: 'text' },
        D2: { value: 'P001', type: 'text' }, E2: { value: 9.99, type: 'number', numberFormat: 'currency' },
        D3: { value: 'P002', type: 'text' }, E3: { value: 14.5, type: 'number', numberFormat: 'currency' },
        C2: { value: '=VLOOKUP(A2,D2:E3,2,FALSE)', type: 'formula' },
        C3: { value: '=VLOOKUP(A3,D2:E3,2,FALSE)', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C4</strong> and type <code>=IFERROR(VLOOKUP(A4,D2:E3,2,FALSE),"Not found")</code>.' },
      task: 'typeInCell', taskTarget: 'C4', taskValue: '=IFERROR(VLOOKUP(A4,D2:E3,2,FALSE),"Not found")',
      success: { toast: '✓ Graceful error', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Always wrap lookups in IFERROR in production.</div>' }
    }
  ],
  summary: 'VLOOKUP searches a table and returns a value from a matched row.',
  recap: ['🔍 VLOOKUP(value, range, col, FALSE)', '🎯 FALSE = exact match', '🛡 IFERROR handles missing data'],
  portfolio: 'A sales report that looks up product prices automatically.'
},

'xlookup-index-match': {
  id: 'xlookup-index-match', module: 'Module 8 · Lookup Functions',
  title: 'XLOOKUP and INDEX/MATCH — the modern way',
  steps: [
    { lede: '<strong>XLOOKUP</strong> is VLOOKUP\'s successor. It can look left, handles errors natively, and doesn\'t need column numbers.',
      sandbox: { rows: 10, cols: 6, activeCell: 'A1', data: {
        A1: { value: 'ID', type: 'text' }, B1: { value: 'Product', type: 'text' },
        A2: { value: 'P001', type: 'text' }, B2: { value: 'Widget', type: 'text' },
        A3: { value: 'P002', type: 'text' }, B3: { value: 'Gadget', type: 'text' },
        D1: { value: 'ID', type: 'text' }, E1: { value: 'Price', type: 'text' },
        D2: { value: 'P001', type: 'text' }, E2: { value: 9.99, type: 'number', numberFormat: 'currency' },
        D3: { value: 'P002', type: 'text' }, E3: { value: 14.5, type: 'number', numberFormat: 'currency' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C2</strong> and type <code>=XLOOKUP(A2,D2:D3,E2:E3)</code>.' },
      task: 'typeInCell', taskTarget: 'C2', taskValue: '=XLOOKUP(A2,D2:D3,E2:E3)',
      success: { toast: '✓ $9.99 — XLOOKUP works', xp: 35,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">No column number. No FALSE flag.</div>' }
    },
    { lede: '<strong>INDEX/MATCH</strong> is the older alternative, still widely used because it works in every Excel version.',
      sandbox: { rows: 10, cols: 6, activeCell: 'A1', data: {
        A1: { value: 'ID', type: 'text' }, B1: { value: 'Product', type: 'text' },
        A2: { value: 'P001', type: 'text' }, B2: { value: 'Widget', type: 'text' },
        A3: { value: 'P002', type: 'text' }, B3: { value: 'Gadget', type: 'text' },
        D1: { value: 'ID', type: 'text' }, E1: { value: 'Price', type: 'text' },
        D2: { value: 'P001', type: 'text' }, E2: { value: 9.99, type: 'number', numberFormat: 'currency' },
        D3: { value: 'P002', type: 'text' }, E3: { value: 14.5, type: 'number', numberFormat: 'currency' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C3</strong> and type <code>=XLOOKUP(A3,D2:D3,E2:E3)</code>.' },
      task: 'typeInCell', taskTarget: 'C3', taskValue: '=XLOOKUP(A3,D2:D3,E2:E3)',
      success: { toast: '✓ $14.50', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">XLOOKUP handles the same job as INDEX/MATCH with fewer arguments.</div>' }
    },
    { lede: 'XLOOKUP can also return a whole row.',
      sandbox: { rows: 10, cols: 6, activeCell: 'A1', data: {
        A1: { value: 'ID', type: 'text' }, B1: { value: 'Product', type: 'text' },
        A2: { value: 'P001', type: 'text' }, B2: { value: 'Widget', type: 'text' },
        A3: { value: 'P002', type: 'text' }, B3: { value: 'Gadget', type: 'text' },
        D1: { value: 'ID', type: 'text' }, E1: { value: 'Price', type: 'text' },
        D2: { value: 'P001', type: 'text' }, E2: { value: 9.99, type: 'number', numberFormat: 'currency' },
        D3: { value: 'P002', type: 'text' }, E3: { value: 14.5, type: 'number', numberFormat: 'currency' },
        C2: { value: '=XLOOKUP(A2,D2:D3,E2:E3)', type: 'formula' },
        C3: { value: '=XLOOKUP(A3,D2:D3,E2:E3)', type: 'formula' }
      }},
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C6</strong> and type <code>=SUM(C2:C3)</code> to total the looked-up prices.' },
      task: 'typeInCell', taskTarget: 'C6', taskValue: '=SUM(C2:C3)',
      success: { toast: '✓ $24.49 total', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Lookups feed into other functions.</div>' }
    }
  ],
  summary: 'XLOOKUP is the modern lookup. INDEX/MATCH is the classic.',
  recap: ['🔍 XLOOKUP(value, lookup_col, return_col)', '🧩 INDEX/MATCH = older alternative', '🔗 Lookups feed other functions'],
  portfolio: 'A modern lookup report using XLOOKUP.'
},

'pivot-intro': {
  id: 'pivot-intro', module: 'Module 9 · Pivot Tables',
  title: 'Pivot tables — instant summaries',
  steps: [
    { lede: 'A <strong>pivot table</strong> summarizes thousands of rows into a clean report — in seconds.',
      sandbox: { rows: 10, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Region', type: 'text' }, B1: { value: 'Product', type: 'text' }, C1: { value: 'Sales', type: 'text' },
        A2: { value: 'North', type: 'text' }, B2: { value: 'Widget', type: 'text' }, C2: { value: 1200, type: 'number' },
        A3: { value: 'North', type: 'text' }, B3: { value: 'Gadget', type: 'text' }, C3: { value: 800, type: 'number' },
        A4: { value: 'South', type: 'text' }, B4: { value: 'Widget', type: 'text' }, C4: { value: 1500, type: 'number' },
        A5: { value: 'South', type: 'text' }, B5: { value: 'Gadget', type: 'text' }, C5: { value: 950, type: 'number' },
        A6: { value: 'East', type: 'text' }, B6: { value: 'Widget', type: 'text' }, C6: { value: 1100, type: 'number' }
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C1</strong>, then click the <strong>PivotTable</strong> button.' },
      task: 'clickButton', taskTarget: 'insertPivot',
      success: { toast: '✓ Pivot table inserted!', xp: 35,
        addPivot: { rows: ['North','South','East'], columns: ['Widget','Gadget'], values: [[1200,800],[1500,950],[1100,null]] },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Excel aggregated 6 rows into a 3×2 summary.</div>' }
    },
    { lede: 'Pivot tables are <strong>interactive</strong>. Drag a different field to Rows and the whole table reconfigures.',
      sandbox: { rows: 10, cols: 5, activeCell: 'A1', data: {
        A1: { value: 'Region', type: 'text' }, B1: { value: 'Product', type: 'text' }, C1: { value: 'Sales', type: 'text' },
        A2: { value: 'North', type: 'text' }, B2: { value: 'Widget', type: 'text' }, C2: { value: 1200, type: 'number' },
        A3: { value: 'North', type: 'text' }, B3: { value: 'Gadget', type: 'text' }, C3: { value: 800, type: 'number' },
        A4: { value: 'South', type: 'text' }, B4: { value: 'Widget', type: 'text' }, C4: { value: 1500, type: 'number' },
        A5: { value: 'South', type: 'text' }, B5: { value: 'Gadget', type: 'text' }, C5: { value: 950, type: 'number' },
        A6: { value: 'East', type: 'text' }, B6: { value: 'Widget', type: 'text' }, C6: { value: 1100, type: 'number' }
      }, ribbon: 'insert' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>C6</strong> and type <code>=SUM(C2:C6)</code> to see the grand total.' },
      task: 'typeInCell', taskTarget: 'C6', taskValue: '=SUM(C2:C6)',
      success: { toast: '✓ $5,550 total', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">A pivot table would show this same total in the bottom-right corner.</div>' }
    }
  ],
  summary: 'Pivot tables summarize thousands of rows into a clean report in seconds.',
  recap: ['📊 Drag fields to Rows / Columns / Values', '🔄 Reconfigure instantly', '⚡ No formulas needed'],
  portfolio: 'A pivot summary of regional sales.'
},

'conditional-format': {
  id: 'conditional-format', module: 'Module 10 · Automation & Polish',
  title: 'Conditional formatting — color with rules',
  steps: [
    { lede: '<strong>Conditional formatting</strong> changes a cell\'s appearance based on its value.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Score', type: 'text' },
        A2: { value: 45, type: 'number' },
        A3: { value: 82, type: 'number' },
        A4: { value: 91, type: 'number' },
        A5: { value: 67, type: 'number' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A3</strong>, then click <strong>Conditional</strong> to apply a green highlight to high scores.' },
      task: 'clickButton', taskTarget: 'condformat',
      success: { toast: '✓ Highlight applied', xp: 30,
        applyConditional: { range: 'A2:A5', rule: 'value>=80', style: 'green' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now 82 and 91 are green.</div>' }
    },
    { lede: 'Rules are <strong>dynamic</strong>. If you change 67 to 85, the cell turns green instantly.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Score', type: 'text' },
        A2: { value: 45, type: 'number' },
        A3: { value: 82, type: 'number' },
        A4: { value: 91, type: 'number' },
        A5: { value: 67, type: 'number' }
      }, ribbon: 'home' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A5</strong> and type <code>85</code>.' },
      task: 'typeInCell', taskTarget: 'A5', taskValue: 85,
      success: { toast: '✓ Now green!', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The rule follows the value.</div>' }
    }
  ],
  summary: 'Conditional formatting applies colors based on rules.',
  recap: ['🎨 Rules like >80 get green', '⚡ Colors update live', '📊 Color scales and data bars for visuals'],
  portfolio: 'A scored list with automatic color coding.'
},

'data-validation': {
  id: 'data-validation', module: 'Module 10 · Automation & Polish',
  title: 'Data validation — prevent bad input',
  steps: [
    { lede: '<strong>Data validation</strong> restricts what can be typed into a cell.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Status', type: 'text' },
        A2: { value: 'Open', type: 'text' },
        A3: { value: 'Closed', type: 'text' },
        A4: { value: '', type: 'text' }
      }, ribbon: 'data' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A4</strong> and type <code>Pending</code>.' },
      task: 'typeInCell', taskTarget: 'A4', taskValue: 'Pending',
      success: { toast: '✓ Valid value', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">With validation set up, Excel would only accept "Open", "Closed", or "Pending".</div>' }
    },
    { lede: 'Validation with a <strong>dropdown list</strong> is the most common setup.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Priority', type: 'text' },
        A2: { value: 'High', type: 'text' },
        A3: { value: 'Medium', type: 'text' }
      }, ribbon: 'data' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A4</strong> and type <code>Low</code>.' },
      task: 'typeInCell', taskTarget: 'A4', taskValue: 'Low',
      success: { toast: '✓ Dropdown list complete', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">In real Excel, this cell would have a dropdown arrow.</div>' }
    },
    { lede: 'You can validate more than just lists: <strong>whole numbers</strong> within a range, <strong>dates</strong> after a certain point, <strong>text length</strong> under 50 characters.',
      sandbox: { rows: 8, cols: 4, activeCell: 'A1', data: {
        A1: { value: 'Age', type: 'text' },
        A2: { value: 25, type: 'number' },
        A3: { value: 42, type: 'number' }
      }, ribbon: 'data' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>A4</strong> and type <code>38</code>.' },
      task: 'typeInCell', taskTarget: 'A4', taskValue: 38,
      success: { toast: '✓ Valid number', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">If validation were set to 18–120, this would pass.</div>' }
    }
  ],
  summary: 'Data validation prevents bad input by restricting what can be typed.',
  recap: ['📋 Dropdown lists = no typos', '🔢 Number ranges for ages/quantities', '📅 Date limits for bookings'],
  portfolio: 'A protected expense tracker with dropdown categories.'
}

};
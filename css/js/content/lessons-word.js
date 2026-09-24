// All Word lessons. Keyed by lesson ID.

export const LESSONS_WORD = {

'ribbon': {
  id: 'ribbon',
  module: 'Module 1 · Meet the Interface',
  title: 'The Ribbon: tabs, groups, buttons',
  steps: [
    {
      lede: 'At the top of every Word document is the <strong>Ribbon</strong> — Word\'s main toolbox. It\'s organized into <strong>tabs</strong> (Home, Insert, Design…). Click a tab to reveal its tools.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home',
        ribbon: 'home',
        page: '<p>Annual Report 2025</p><p>This is a sample document. Explore the tabs above.</p>',
        hintTarget: 'tab-Insert'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>Insert</strong> tab in the Word window above.' },
      task: 'clickTab', taskTarget: 'Insert',
      success: {
        toast: '✓ You found the Insert tab!', xp: 20, ribbon: 'insert',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>Nice!</strong> Notice the ribbon changed — tabs swap out the whole tool set. Click <strong>Continue</strong>.</div>'
      }
    },
    {
      lede: 'Every tab contains <strong>groups</strong> — labeled clusters of related tools. On the Home tab, the <strong>Font group</strong> holds Bold, Italic, and Underline.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>Annual Report 2025</p><p>This is a sample document.</p>',
        hintTarget: 'tab-Home'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>Home</strong> tab to see Word\'s most-used tools.' },
      task: 'clickTab', taskTarget: 'Home',
      success: {
        toast: '✓ Home tab — where the magic happens', xp: 20, ribbon: 'home',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>Great.</strong> The Home tab holds formatting tools — bold, italic, font, alignment.</div>'
      }
    },
    {
      lede: 'You don\'t have to click tabs manually — you can <strong>use the keyboard</strong>. But first, let\'s apply a tool. On the Home tab, find the <strong>B</strong> button. It makes selected text bold.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-active',
        page: '<p><span class="sel-target selected" data-selectable="title">Annual Report 2025</span></p><p>This is a sample document.</p>',
        hintTarget: 'btn-bold'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> The title is already selected. Click the <strong>B</strong> (Bold) button.' },
      task: 'clickButton', taskTarget: 'bold',
      success: {
        toast: '✓ Bold applied!', xp: 25,
        applyFormat: { target: 'title', style: 'fontWeight', value: 'bold' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>That\'s the pattern!</strong> Select text → click a tool.</div>'
      }
    },
    {
      lede: 'Now try <strong>Italic</strong> (<em>I</em>), right next to Bold. Same idea — select first, then click the tool. We\'ve selected the word "sample" for you.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-active',
        page: '<p><strong>Annual Report 2025</strong></p><p>This is a <span class="sel-target selected" data-selectable="word">sample</span> document.</p>',
        hintTarget: 'btn-italic'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>I</strong> (Italic) button.' },
      task: 'clickButton', taskTarget: 'italic',
      success: {
        toast: '✓ Italic applied!', xp: 25,
        applyFormat: { target: 'word', style: 'fontStyle', value: 'italic' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>Perfect.</strong> Select → click. That\'s Word.</div>'
      }
    }
  ],
  summary: 'You now know the Ribbon — tabs, groups, and how to apply a tool.',
  recap: ['📑 Tabs switch tool sets', '🔤 Bold & Italic live on Home', '🖱️ Select first, then format'],
  portfolio: 'A formatted title and emphasized word.'
},

'saving': {
  id: 'saving',
  module: 'Module 1 · Meet the Interface',
  title: 'Saving your document',
  steps: [
    {
      lede: 'A document that isn\'t saved isn\'t real yet. Word saves to your <strong>computer</strong>, <strong>OneDrive</strong>, or <strong>SharePoint</strong>. The keyboard shortcut is <code>Ctrl+S</code> — use it every few minutes, out of habit.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'File', ribbon: 'file',
        page: '<p class="placeholder">This document is unsaved.</p>'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Save as Template</strong> to practice the save habit.' },
      task: 'clickButton', taskTarget: 'savetemplate',
      success: {
        toast: '✓ Save habit noted', xp: 15,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text"><strong>Good.</strong> In real Word, <code>Ctrl+S</code> saves silently. If it\'s a brand-new file, Word asks for a name and location.</div>'
      }
    },
    {
      lede: 'Every file needs a <strong>name</strong>. Good names are descriptive: <code>2025-Q3-Report.docx</code>, not <code>Untitled-2.docx</code>.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'File', ribbon: 'file',
        page: '<p><span class="sel-target selected" data-selectable="name">Untitled-2</span>.docx</p>'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Save as Template</strong> once more — then we\'ll talk about naming.' },
      task: 'clickButton', taskTarget: 'savetemplate',
      success: {
        toast: '✓ Naming matters', xp: 15,
        applyFormat: { target: 'name', style: 'text', value: '2025-Q3-Report' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Naming convention: <code>YYYY-Qn-Topic.ext</code>. Your future self will thank you.</div>'
      }
    }
  ],
  summary: 'You now know: <code>Ctrl+S</code> saves, name files descriptively, and .docx is the standard format.',
  recap: ['💾 Ctrl+S = save', '📛 Name files descriptively', '📁 .docx is the format'],
  portfolio: 'A saved file with a professional name.'
},

'selecting': {
  id: 'selecting',
  module: 'Module 1 · Meet the Interface',
  title: 'Selecting text like a pro',
  steps: [
    {
      lede: 'Everything in Word starts with <strong>selection</strong>. Select first, then act. <code>Ctrl+A</code> selects the whole document.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-active',
        page: '<p><span class="sel-target selected" data-selectable="s1">The quick brown fox</span> jumps over the lazy dog.</p>'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Bold the selected phrase with the <strong>B</strong> button.' },
      task: 'clickButton', taskTarget: 'bold',
      success: {
        toast: '✓ Selected + formatted', xp: 20,
        applyFormat: { target: 's1', style: 'fontWeight', value: 'bold' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The pattern is universal: <strong>select → act</strong>.</div>'
      }
    },
    {
      lede: 'Double-click a word to select it. Triple-click a paragraph.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-active',
        page: '<p><strong>The quick brown fox</strong></p><p><span class="sel-target selected" data-selectable="s2">This is a full paragraph. It has multiple sentences. The whole paragraph is selected, and you can now format it as a unit.</span></p>'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Italicize the selected paragraph with the <strong>I</strong> button.' },
      task: 'clickButton', taskTarget: 'italic',
      success: {
        toast: '✓ Paragraph italicized', xp: 20,
        applyFormat: { target: 's2', style: 'fontStyle', value: 'italic' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Triple-click = select paragraph.</div>'
      }
    }
  ],
  summary: 'You can select words, lines, paragraphs, and the whole document.',
  recap: ['🖱️ Double-click = word', '🖱️ Triple-click = paragraph', '⌨️ Ctrl+A = all'],
  portfolio: 'A paragraph formatted as a unit.'
},

'formatting': {
  id: 'formatting',
  module: 'Module 2 · Basic Text Formatting',
  title: 'Bold, Italic, Underline — three core tools',
  steps: [
    {
      lede: 'Formatting is how you tell your reader what matters. <strong>Bold</strong> shouts, <em>Italic</em> whispers, <u>Underline</u> points.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-active',
        page: '<p>Meet our team. We are <span class="sel-target selected" data-selectable="w1">hiring</span> now.</p>',
        hintTarget: 'btn-bold'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>B</strong> to make "hiring" bold.' },
      task: 'clickButton', taskTarget: 'bold',
      success: { toast: '✓ Bold!', xp: 15, applyFormat: { target: 'w1', style: 'fontWeight', value: 'bold' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Good. Bold works.</div>' }
    },
    {
      lede: 'Bold is strong, but sometimes you want a softer emphasis. <strong>Italic</strong> is often used for titles and gentle stress.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-active',
        page: '<p>Meet our team. We are <strong>hiring</strong> <span class="sel-target selected" data-selectable="w2">now</span>.</p>',
        hintTarget: 'btn-italic'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>I</strong> to make "now" italic.' },
      task: 'clickButton', taskTarget: 'italic',
      success: { toast: '✓ Italic!', xp: 15, applyFormat: { target: 'w2', style: 'fontStyle', value: 'italic' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Nice — two formats in a row.</div>' }
    },
    {
      lede: 'Some documents use <strong>underline</strong> for emphasis — though in modern writing it\'s less common (reserved mostly for links).',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-active',
        page: '<p>We are <strong>hiring</strong> <em>now</em> for <span class="sel-target selected" data-selectable="w3">three</span> roles.</p>',
        hintTarget: 'btn-underline'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>U</strong> to underline "three".' },
      task: 'clickButton', taskTarget: 'underline',
      success: { toast: '✓ Underline!', xp: 15, applyFormat: { target: 'w3', style: 'textDecoration', value: 'underline' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You can now emphasize text three ways.</div>' }
    },
    {
      lede: 'One more tool: the <strong>Format Painter</strong>. Select formatted text, click the brush, then click other text to copy the formatting.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-clip',
        page: '<p><strong>Annual Report</strong> is ready.</p><p>Please <span class="sel-target" data-selectable="src">review</span> it and <span class="sel-target" data-selectable="dst">sign</span> the last page.</p>',
        hintTarget: 'btn-painter'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Format Painter</strong>.' },
      task: 'clickButton', taskTarget: 'painter',
      success: { toast: '✓ Format Painter ready!', xp: 20,
        applyFormat: { target: 'src', style: 'fontWeight', value: 'bold' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Imagine using it on 20 headings. That\'s the power.</div>' }
    }
  ],
  summary: 'You can now emphasize text three ways and copy formatting instantly.',
  recap: ['🅱 Bold = strong', '🇮 Italic = subtle', '🖌 Format Painter = copy style'],
  portfolio: 'An event flyer with proper emphasis.'
},

'fontsize': {
  id: 'fontsize',
  module: 'Module 2 · Basic Text Formatting',
  title: 'Font family, size, and color',
  steps: [
    {
      lede: 'Different fonts carry different feelings. <strong>Calibri</strong> is friendly and modern, <strong>Times New Roman</strong> formal, <strong>Arial</strong> neutral.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-font',
        page: '<p><span class="sel-target selected" data-selectable="h">The quick brown fox</span></p>',
        hintTarget: 'font-family'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Change the font to <strong>Georgia</strong> using the dropdown.' },
      task: 'changeFont', taskTarget: 'Georgia',
      success: { toast: '✓ Font changed to Georgia', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Fonts set the tone before a single word is read.</div>' }
    },
    {
      lede: 'Size matters. Body text is usually <strong>11–12pt</strong>. Headings go <strong>18–28pt</strong>. Below 10pt becomes hard to read.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-font',
        page: '<p><span class="sel-target selected" data-selectable="h2" style="font-family:Georgia;">The quick brown fox</span></p>',
        hintTarget: 'font-size'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Change the size to <strong>24</strong>.' },
      task: 'changeSize', taskTarget: '24',
      success: { toast: '✓ Now it\'s a headline!', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">24pt is a solid headline size.</div>' }
    },
    {
      lede: 'Color is powerful but easy to overuse. Red for <strong>warnings</strong>, blue for <strong>links</strong>, brand colors for accents.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-font',
        page: '<p><span class="sel-target selected" data-selectable="warn">Deadline: Friday, 5 PM</span></p>',
        hintTarget: 'font-color-red'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>red</strong> color swatch.' },
      task: 'clickColor', taskTarget: 'red',
      success: { toast: '✓ Urgent!', xp: 15, applyFormat: { target: 'warn', style: 'color', value: '#c0392b' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Red = attention. Use sparingly.</div>' }
    }
  ],
  summary: 'You can pick a font, size, and color that fits the document\'s purpose.',
  recap: ['🔤 Calibri / Georgia / Times', '📏 11–12pt body, 18–28pt headings', '🎨 Red for warnings'],
  portfolio: 'A styled headline with proper font, size, and color.'
},

'copyformat': {
  id: 'copyformat',
  module: 'Module 2 · Basic Text Formatting',
  title: 'Copy, paste, and Format Painter',
  steps: [
    {
      lede: 'You can <strong>copy</strong> with <code>Ctrl+C</code>, <strong>cut</strong> with <code>Ctrl+X</code>, and <strong>paste</strong> with <code>Ctrl+V</code>.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-clip',
        page: '<p>Source: <span class="sel-target selected" data-selectable="src">Contact us at hello@acme.co</span></p><p>Destination: <span class="sel-target" data-selectable="dst">[paste here]</span></p>',
        hintTarget: 'btn-paste'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>Paste</strong> button.' },
      task: 'clickButton', taskTarget: 'paste',
      success: { toast: '✓ Pasted!', xp: 20,
        applyFormat: { target: 'dst', style: 'text', value: 'Contact us at hello@acme.co' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The Paste button has a dropdown too — try "Keep Text Only".</div>' }
    },
    {
      lede: 'The <strong>Format Painter</strong> copies formatting (not text). Select formatted text, click the brush, then click other text.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-clip',
        page: '<p><strong style="color:#1e6b3e;">Heading: Q3 Results</strong></p><p>Body text here.</p><p><span class="sel-target" data-selectable="d">Q4 Results</span></p>',
        hintTarget: 'btn-painter'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Format Painter</strong>.' },
      task: 'clickButton', taskTarget: 'painter',
      success: { toast: '✓ Formatting copied!', xp: 25,
        applyFormat: { target: 'd', style: 'fontWeight', value: 'bold' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">20 headings, one click. Always use the brush.</div>' }
    }
  ],
  summary: 'You can move text and copy formatting quickly.',
  recap: ['📋 Ctrl+C / Ctrl+V', '🖌 Format Painter copies style', '⚡ Saves hours on large docs'],
  portfolio: 'A consistent document with matching headings.'
},

'undoredo': {
  id: 'undoredo',
  module: 'Module 2 · Basic Text Formatting',
  title: 'Undo and Redo — the safety net',
  steps: [
    {
      lede: '<code>Ctrl+Z</code> undoes your last action. <code>Ctrl+Y</code> redoes it. Word remembers dozens of steps back. There is no mistake you can\'t take back.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-clip',
        page: '<p><span class="sel-target" data-selectable="u1">Original text here.</span></p>'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Format Painter</strong> to trigger an action — then imagine undoing it with Ctrl+Z.' },
      task: 'clickButton', taskTarget: 'painter',
      success: { toast: '✓ Action triggered', xp: 15,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">If that was a mistake, <code>Ctrl+Z</code> undoes it instantly.</div>' }
    }
  ],
  summary: 'You never have to fear a mistake in Word.',
  recap: ['↩️ Ctrl+Z = undo', '↪️ Ctrl+Y = redo', '🧠 Word remembers 100+ steps'],
  portfolio: 'Confidence to experiment freely.'
},

'alignment': {
  id: 'alignment',
  module: 'Module 3 · Paragraphs & Alignment',
  title: 'Alignment: left, center, right, justify',
  steps: [
    {
      lede: 'Body text should almost always be <strong>left-aligned</strong> (ragged right). It\'s easier to read than justified.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p class="sel-target selected" data-selectable="p1" style="text-align:center;">This paragraph is currently centered. It should be left-aligned for comfortable reading. A long line of centered text is hard to scan.</p>',
        hintTarget: 'btn-align-left'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Align Left</strong>.' },
      task: 'clickButton', taskTarget: 'align-left',
      success: { toast: '✓ Left-aligned!', xp: 20,
        applyFormat: { target: 'p1', style: 'textAlign', value: 'left' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Left-align is your default for body text.</div>' }
    },
    {
      lede: '<strong>Centered</strong> text is for titles, invitations, and short lines.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p class="sel-target selected" data-selectable="title2">Annual Gala Dinner</p>',
        hintTarget: 'btn-align-center'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Center the title.' },
      task: 'clickButton', taskTarget: 'align-center',
      success: { toast: '✓ Centered!', xp: 15,
        applyFormat: { target: 'title2', style: 'textAlign', value: 'center' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Centered titles + left-aligned body = classic combo.</div>' }
    },
    {
      lede: '<strong>Right-aligned</strong> text is for dates in letters and signature blocks.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p class="sel-target selected" data-selectable="date">21 May 2025</p><p>Dear Ms. Rivera,</p>',
        hintTarget: 'btn-align-right'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Right-align the date.' },
      task: 'clickButton', taskTarget: 'align-right',
      success: { toast: '✓ Right-aligned date', xp: 15,
        applyFormat: { target: 'date', style: 'textAlign', value: 'right' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Your letter starts looking professional.</div>' }
    }
  ],
  summary: 'You know when to left-, center-, and right-align text.',
  recap: ['⬅ Left for body', '⏺ Center for titles', '➡ Right for dates'],
  portfolio: 'A properly aligned formal letter.'
},

'spacing': {
  id: 'spacing',
  module: 'Module 3 · Paragraphs & Alignment',
  title: 'Line spacing and paragraph spacing',
  steps: [
    {
      lede: 'By default Word single-spaces lines. For readability, body text often uses <strong>1.15 or 1.5 line spacing</strong>.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p class="sel-target selected" data-selectable="body">A single-spaced block of text can feel cramped. Increasing line spacing gives readers breathing room and dramatically improves readability for long documents.</p>',
        hintTarget: 'line-spacing'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Change line spacing to <strong>1.5</strong>.' },
      task: 'clickButton', taskTarget: 'line15',
      success: { toast: '✓ 1.5 line spacing', xp: 20,
        applyFormat: { target: 'body', style: 'lineHeight', value: '1.5' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Notice how much easier that is to read.</div>' }
    },
    {
      lede: 'You can also add space <strong>before and after</strong> paragraphs without pressing Enter twice.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p><strong>Section 1</strong></p><p class="sel-target selected" data-selectable="p2">This paragraph has a bit of space above it. Add more space after it and see the effect.</p><p>Next paragraph.</p>',
        hintTarget: 'space-after'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Add space after paragraph</strong>.' },
      task: 'clickButton', taskTarget: 'space-after',
      success: { toast: '✓ Space added', xp: 15,
        applyFormat: { target: 'p2', style: 'marginBottom', value: '24px' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Space after paragraphs is how pros separate ideas.</div>' }
    }
  ],
  summary: 'You can control line and paragraph spacing for readability.',
  recap: ['📏 1.5 line spacing for readability', '↧ Space after paragraphs, not double-Enter'],
  portfolio: 'A well-spaced report paragraph.'
},

'bullets': {
  id: 'bullets',
  module: 'Module 3 · Paragraphs & Alignment',
  title: 'Bullets, numbering, and multi-level lists',
  steps: [
    {
      lede: 'Bullets organize ideas without implying order. Numbered lists imply sequence.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p class="sel-target selected" data-selectable="list">Apples<br>Bananas<br>Cherries</p>',
        hintTarget: 'btn-bullet'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>Bullets</strong> button.' },
      task: 'clickButton', taskTarget: 'bullet',
      success: { toast: '✓ Bulleted!', xp: 20,
        applyFormat: { target: 'list', style: 'list', value: 'bullet' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Instant structure.</div>' }
    },
    {
      lede: 'When order matters, use <strong>numbering</strong>. Steps, rankings, top-10 lists.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p>How to save a file:</p><p class="sel-target selected" data-selectable="steps">Press Ctrl+S<br>Choose a location<br>Click Save</p>',
        hintTarget: 'btn-number'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>Numbering</strong> button.' },
      task: 'clickButton', taskTarget: 'number',
      success: { toast: '✓ Numbered!', xp: 20,
        applyFormat: { target: 'steps', style: 'list', value: 'number' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Order implied. Perfect for tutorials.</div>' }
    },
    {
      lede: 'For complex documents you\'ll want <strong>multi-level lists</strong> — 1, then 1.1, then 1.1.1.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-para',
        page: '<p>Project Plan:</p><p class="sel-target selected" data-selectable="plan">Phase 1: Research<br>Phase 2: Design<br>Phase 3: Build</p>',
        hintTarget: 'btn-multilevel'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Multi-level list</strong>.' },
      task: 'clickButton', taskTarget: 'multilevel',
      success: { toast: '✓ Multi-level!', xp: 25,
        applyFormat: { target: 'plan', style: 'list', value: 'multilevel' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Press Tab to indent into a sub-level.</div>' }
    }
  ],
  summary: 'You can use bullets, numbering, and multi-level lists to structure ideas.',
  recap: ['• Bullets for unordered lists', '1. Numbers for sequences', '1.1 Nested for outlines'],
  portfolio: 'A cover letter with a bulleted skills section.'
},

'margins': {
  id: 'margins',
  module: 'Module 4 · Layout & Page Setup',
  title: 'Margins and page size',
  steps: [
    {
      lede: 'Margins control the white space around your text. Word defaults to <strong>1 inch all around</strong>.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Layout', ribbon: 'layout',
        page: '<p>This page currently uses default margins. Change to <strong>Narrow</strong> to fit more content.</p>',
        hintTarget: 'btn-margin-narrow'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Narrow</strong>.' },
      task: 'clickButton', taskTarget: 'margin-narrow',
      success: { toast: '✓ Narrow margins applied', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Narrow fits more; wider feels more elegant.</div>' }
    },
    {
      lede: 'Orientation flips the page. <strong>Portrait</strong> for letters. <strong>Landscape</strong> for wide tables.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Layout', ribbon: 'layout',
        page: '<p>A wide table would be easier to read on a landscape page.</p>',
        hintTarget: 'btn-landscape'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Landscape</strong>.' },
      task: 'clickButton', taskTarget: 'landscape',
      success: { toast: '✓ Landscape orientation', xp: 15,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You can mix orientations using Section Breaks.</div>' }
    }
  ],
  summary: 'You can set margins and orientation for any document.',
  recap: ['📄 Portrait for letters', '🖼 Landscape for tables', '📏 Narrow for density'],
  portfolio: 'A letter or report with proper page setup.'
},

'headers': {
  id: 'headers',
  module: 'Module 4 · Layout & Page Setup',
  title: 'Headers, footers, page numbers',
  steps: [
    {
      lede: 'A <strong>header</strong> is the strip at the top of every page. A <strong>footer</strong> is at the bottom. They repeat automatically.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>Body of your report…</p>',
        hintTarget: 'btn-header'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Header</strong>.' },
      task: 'clickButton', taskTarget: 'header',
      success: { toast: '✓ Header added', xp: 20,
        applyFormat: { target: 'page-header', style: 'header', value: 'Quarterly Report · Confidential' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The header now appears on every page automatically.</div>' }
    },
    {
      lede: 'Page numbers live in the footer. Use <strong>Insert → Page Number</strong> to add them.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>Body of your report…</p>',
        hintTarget: 'btn-pagenum'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Page Number</strong>.' },
      task: 'clickButton', taskTarget: 'pagenum',
      success: { toast: '✓ Page numbers added', xp: 20,
        applyFormat: { target: 'page-footer', style: 'footer', value: 'Page 1 of 3' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Any document over 2 pages should have page numbers.</div>' }
    }
  ],
  summary: 'You can add headers, footers, and page numbers.',
  recap: ['📎 Header = top of page', '📎 Footer = bottom', '#️⃣ "X of Y" for reports'],
  portfolio: 'A report with header, footer, and page numbers.'
},

'breaks': {
  id: 'breaks',
  module: 'Module 4 · Layout & Page Setup',
  title: 'Page breaks and section breaks',
  steps: [
    {
      lede: 'A <strong>page break</strong> forces text onto the next page. Never press Enter 20 times.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>End of Chapter 1.</p><p class="sel-target selected" data-selectable="pb">Chapter 2 begins here…</p>',
        hintTarget: 'btn-pagebreak'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Page Break</strong>.' },
      task: 'clickButton', taskTarget: 'pagebreak',
      success: { toast: '✓ Page break inserted', xp: 20,
        applyFormat: { target: 'pb', style: 'pagebreak', value: true },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The break is invisible — you\'ll see it in formatting marks view.</div>' }
    },
    {
      lede: 'A <strong>section break</strong> lets different parts of a document have different layouts.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Layout', ribbon: 'layout',
        page: '<p>Section 1: Portrait pages</p><p class="sel-target selected" data-selectable="sb">Section 2: Landscape below</p>',
        hintTarget: 'btn-sectionbreak'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Section Break</strong>.' },
      task: 'clickButton', taskTarget: 'sectionbreak',
      success: { toast: '✓ Section break inserted', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now each section can have its own layout.</div>' }
    }
  ],
  summary: 'You can break pages and sections to control layout.',
  recap: ['↪️ Page break = new page', '🔲 Section break = new layout zone'],
  portfolio: 'A multi-page report with mixed orientations.'
},

'pictures': {
  id: 'pictures',
  module: 'Module 5 · Inserting Objects',
  title: 'Pictures and text wrapping',
  steps: [
    {
      lede: 'Word isn\'t just text. Insert images, and control how text flows around them.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>Team photo below:</p><p class="sel-target selected" data-selectable="pic">[image placeholder]</p>',
        hintTarget: 'btn-pictures'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Pictures</strong>.' },
      task: 'clickButton', taskTarget: 'pictures',
      success: { toast: '✓ Image inserted', xp: 20,
        applyFormat: { target: 'pic', style: 'image', value: '📷 Team Photo' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Click the image to resize. Layout Options control wrapping.</div>' }
    },
    {
      lede: '<strong>Text wrapping</strong> decides how text flows around your image. Square, Tight, Behind, In Front.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>A paragraph of text that will wrap around the image once you set wrapping to Square. Watch how it flows.</p><p class="sel-target selected" data-selectable="img2">📷 [selected image]</p>',
        hintTarget: 'btn-wrap'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Wrap Text → Square</strong>.' },
      task: 'clickButton', taskTarget: 'wrap-square',
      success: { toast: '✓ Text wrapping: Square', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Square wrap is great for reports. Tight for logos.</div>' }
    }
  ],
  summary: 'You can insert images and control how text wraps around them.',
  recap: ['📷 Insert pictures from Insert tab', '🔄 Wrap Text controls flow'],
  portfolio: 'A report page with a wrapped image.'
},

'tables': {
  id: 'tables',
  module: 'Module 5 · Inserting Objects',
  title: 'Tables: create, edit, style',
  steps: [
    {
      lede: 'Tables align content into rows and columns. Perfect for schedules, pricing, comparisons.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>Before:</p><p class="sel-target selected" data-selectable="tbl">Item | Qty | Price<br>Apples | 3 | $2<br>Bread | 1 | $4</p>',
        hintTarget: 'btn-table'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Table</strong>.' },
      task: 'clickButton', taskTarget: 'table',
      success: { toast: '✓ Table created', xp: 25,
        applyFormat: { target: 'tbl', style: 'table', value: true },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Use Table Design to style — banded rows, borders, shading.</div>' }
    },
    {
      lede: 'Merge cells to make headers span multiple columns.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Layout', ribbon: 'layout-table',
        page: '<table style="border-collapse:collapse;width:100%;font-size:14px;"><tr><td style="border:1px solid #ccc;padding:6px;" class="sel-target selected" data-selectable="m1">Name</td><td style="border:1px solid #ccc;padding:6px;">Score</td></tr><tr><td style="border:1px solid #ccc;padding:6px;">Alice</td><td style="border:1px solid #ccc;padding:6px;">92</td></tr></table>',
        hintTarget: 'btn-merge'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Merge Cells</strong>.' },
      task: 'clickButton', taskTarget: 'merge',
      success: { toast: '✓ Cells merged', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Merged header rows are a classic pro touch.</div>' }
    }
  ],
  summary: 'You can build and style tables for schedules and data.',
  recap: ['▦ Insert → Table', '🔗 Merge cells for headers'],
  portfolio: 'A pricing table with merged headers.'
},

'shapes': {
  id: 'shapes',
  module: 'Module 5 · Inserting Objects',
  title: 'Shapes, icons, and SmartArt',
  steps: [
    {
      lede: 'SmartArt turns plain bullets into a diagram.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>Our process:</p><p class="sel-target selected" data-selectable="smart">Research → Design → Build → Launch</p>',
        hintTarget: 'btn-smartart'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>SmartArt</strong>.' },
      task: 'clickButton', taskTarget: 'smartart',
      success: { toast: '✓ SmartArt inserted', xp: 25,
        applyFormat: { target: 'smart', style: 'smartart', value: 'Process' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Pick from List, Process, Cycle, Hierarchy.</div>' }
    },
    {
      lede: 'Hyperlinks turn text into clickable jumps.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p>Email us: <span class="sel-target selected" data-selectable="link">hello@acme.co</span></p>',
        hintTarget: 'btn-link'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Link</strong>.' },
      task: 'clickButton', taskTarget: 'link',
      success: { toast: '✓ Hyperlink created', xp: 20,
        applyFormat: { target: 'link', style: 'link', value: 'mailto:hello@acme.co' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Ctrl+K opens the link dialog.</div>' }
    }
  ],
  summary: 'You can add diagrams and hyperlinks to documents.',
  recap: ['🖼 SmartArt = instant diagram', '🔗 Hyperlinks for email/web'],
  portfolio: 'A CV with a skills diagram and email link.'
},

'styles-intro': {
  id: 'styles-intro',
  module: 'Module 6 · Styles & Structure',
  title: 'Why styles beat manual formatting',
  steps: [
    {
      lede: 'A <strong>style</strong> is a saved bundle of formatting. Apply once, Word formats consistently.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-styles',
        page: '<p class="sel-target selected" data-selectable="h1">My Report Title</p><p>Body paragraph.</p>',
        hintTarget: 'style-heading1'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Heading 1</strong>.' },
      task: 'clickButton', taskTarget: 'heading1',
      success: { toast: '✓ Heading 1 applied', xp: 25,
        applyFormat: { target: 'h1', style: 'style', value: 'h1' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You didn\'t touch font, size, or color. The style did all of it.</div>' }
    },
    {
      lede: 'Headings come in levels: <strong>Heading 1</strong> is the biggest section, <strong>Heading 2</strong> is a subsection.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-styles',
        page: '<p><strong>My Report Title</strong></p><p class="sel-target selected" data-selectable="h2">Introduction</p><p>Some intro text.</p>',
        hintTarget: 'style-heading2'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Apply <strong>Heading 2</strong>.' },
      task: 'clickButton', taskTarget: 'heading2',
      success: { toast: '✓ Heading 2 applied', xp: 20,
        applyFormat: { target: 'h2', style: 'style', value: 'h2' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Hierarchy: H1 = chapter, H2 = section.</div>' }
    },
    {
      lede: 'Body text also has a style — <strong>Normal</strong>. Apply it to reset messy formatting.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-styles',
        page: '<p><strong>My Report Title</strong></p><p><span style="font-size:11px;">Introduction</span></p><p class="sel-target selected" data-selectable="body3" style="font-family:Times; font-size:18px; color:red;">Some messy body text that needs a reset.</p>',
        hintTarget: 'style-normal'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Normal</strong>.' },
      task: 'clickButton', taskTarget: 'normal',
      success: { toast: '✓ Reset to Normal', xp: 20,
        applyFormat: { target: 'body3', style: 'style', value: 'normal' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">This is your "reset" button.</div>' }
    }
  ],
  summary: 'Styles keep your document consistent and easy to restyle.',
  recap: ['📝 Styles = saved formatting bundles', '1️⃣ Heading 1 = chapter', '2️⃣ Heading 2 = section'],
  portfolio: 'A report with proper heading hierarchy.'
},

'modify-style': {
  id: 'modify-style',
  module: 'Module 6 · Styles & Structure',
  title: 'Modify a style once, change the whole document',
  steps: [
    {
      lede: 'Right-click a style → <strong>Modify</strong> → change one property → every instance updates instantly.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-styles',
        page: '<p class="styled-h1" style="font-size:24px; font-weight:700; color:#0f2b3d;">Chapter One</p><p>Body text.</p><p class="styled-h1" style="font-size:24px; font-weight:700; color:#0f2b3d;">Chapter Two</p><p>Body text.</p><p class="styled-h1" style="font-size:24px; font-weight:700; color:#0f2b3d;">Chapter Three</p>',
        hintTarget: 'style-modify'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Modify Style</strong> to make all headings green.' },
      task: 'clickButton', taskTarget: 'modify',
      success: { toast: '✓ All 3 headings updated at once!', xp: 35,
        applyStyleSheet: { '.styled-h1': 'color:#1e6b3e;' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Three headings, one action. Imagine 300.</div>' }
    }
  ],
  summary: 'You can restyle an entire document by modifying one style.',
  recap: ['✎ Right-click style → Modify', '⚡ Updates every instance'],
  portfolio: 'A restyled multi-section report.'
},

'custom-style': {
  id: 'custom-style',
  module: 'Module 6 · Styles & Structure',
  title: 'Create your own custom style',
  steps: [
    {
      lede: 'Built-in styles cover 90% of cases. The last 10% is where you <strong>create your own</strong>. For example, a "Callout" style — a distinctive block for important notes.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-styles',
        page: '<p class="sel-target selected" data-selectable="cs">⚠ Important: submit by Friday 5 PM.</p><p>Normal paragraph.</p>'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Modify Style</strong> to create a Callout style.' },
      task: 'clickButton', taskTarget: 'modify',
      success: { toast: '✓ Custom style created!', xp: 35,
        applyStyleSheet: { '[data-selectable="cs"]': 'background:#fff8e1; border-left:4px solid #f0c419; padding:10px 16px; border-radius:0 8px 8px 0; font-weight:500; color:#7a5c00;' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now you can apply this "Callout" style anywhere.</div>' }
    }
  ],
  summary: 'You can create custom styles tailored to your brand.',
  recap: ['🎨 Custom styles = reusable blocks', '⚡ Apply with one click'],
  portfolio: 'A branded Callout style for your reports.'
},

'navigation': {
  id: 'navigation',
  module: 'Module 6 · Styles & Structure',
  title: 'Navigation pane & outline view',
  steps: [
    {
      lede: 'With headings set, Word\'s <strong>Navigation Pane</strong> shows an outline you can click to jump around.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'View', ribbon: 'view-nav',
        page: '<p><strong>My Report</strong></p><p><strong>Introduction</strong></p><p>…</p><p><strong>Methods</strong></p><p>…</p><p><strong>Results</strong></p><p>…</p>',
        hintTarget: 'btn-navpane'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Navigation Pane</strong>.' },
      task: 'clickButton', taskTarget: 'navpane',
      success: { toast: '✓ Navigation Pane on', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Click any heading in the left panel to jump there.</div>' }
    }
  ],
  summary: 'You can navigate long documents using the Navigation Pane.',
  recap: ['🧭 Navigation Pane shows outline', '🖱 Click heading to jump'],
  portfolio: 'A navigable long document.'
},

'toc': {
  id: 'toc',
  module: 'Module 7 · References & Long Documents',
  title: 'Automatic Table of Contents',
  steps: [
    {
      lede: 'If your headings use Heading 1/2/3, Word builds a <strong>Table of Contents</strong> automatically.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'References', ribbon: 'references',
        page: '<p><strong>My Report</strong></p><p class="sel-target selected" data-selectable="toc-area"><em>[TOC will appear here]</em></p><p><strong>Introduction</strong></p><p>…</p><p><strong>Methods</strong></p><p>…</p>',
        hintTarget: 'btn-toc'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Table of Contents</strong>.' },
      task: 'clickButton', taskTarget: 'toc',
      success: { toast: '✓ TOC generated', xp: 30,
        applyFormat: { target: 'toc-area', style: 'toc', value: '' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Update it with F9. The difference between a document and a publication.</div>' }
    },
    {
      lede: 'Footnotes add small numbers in the text linking to notes at the bottom.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'References', ribbon: 'references',
        page: '<p>The study showed a 40% increase<sup class="sel-target selected" data-selectable="fn">[1]</sup> in productivity.</p>',
        hintTarget: 'btn-footnote'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Insert Footnote</strong>.' },
      task: 'clickButton', taskTarget: 'footnote',
      success: { toast: '✓ Footnote inserted', xp: 20,
        applyFormat: { target: 'fn', style: 'footnote', value: '' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Word renumbers footnotes automatically.</div>' }
    }
  ],
  summary: 'You can build a Table of Contents and add footnotes.',
  recap: ['📖 TOC from headings', '1️⃣ Footnotes auto-numbered'],
  portfolio: 'A research brief with TOC and footnotes.'
},

'footnotes': {
  id: 'footnotes',
  module: 'Module 7 · References & Long Documents',
  title: 'Citations and bibliography',
  steps: [
    {
      lede: 'Add a source once, cite it many times, and generate a formatted <strong>bibliography</strong>.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'References', ribbon: 'references',
        page: '<p>Prior research confirms this finding<span class="sel-target selected" data-selectable="cite">[?]</span>.</p>',
        hintTarget: 'btn-citation'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Insert Citation</strong>.' },
      task: 'clickButton', taskTarget: 'citation',
      success: { toast: '✓ Citation inserted', xp: 25,
        applyFormat: { target: 'cite', style: 'citation', value: '(Smith, 2024)' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Add sources via Manage Sources.</div>' }
    }
  ],
  summary: 'You can manage citations and generate a bibliography.',
  recap: ['📚 Insert → Citation', '📖 Bibliography in one click'],
  portfolio: 'A cited academic report.'
},

'captions': {
  id: 'captions',
  module: 'Module 7 · References & Long Documents',
  title: 'Captions for figures and tables',
  steps: [
    {
      lede: 'A <strong>caption</strong> is the label under an image or table.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'References', ribbon: 'references',
        page: '<p>📷 [chart image]</p><p class="sel-target selected" data-selectable="cap">[caption here]</p>',
        hintTarget: 'btn-caption'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Insert Caption</strong>.' },
      task: 'clickButton', taskTarget: 'caption',
      success: { toast: '✓ Caption added', xp: 20,
        applyFormat: { target: 'cap', style: 'caption', value: 'Figure 1: Revenue growth 2020-2025' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Every chart in a report should have a caption.</div>' }
    }
  ],
  summary: 'You can caption figures and tables for professional reports.',
  recap: ['🖼 Captions auto-number', '📊 Required for academic reports'],
  portfolio: 'A report with captioned figures.'
},

'trackchanges': {
  id: 'trackchanges',
  module: 'Module 8 · Review & Collaboration',
  title: 'Track Changes — edit without erasing',
  steps: [
    {
      lede: 'When you edit someone else\'s document, turn on <strong>Track Changes</strong>.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Review', ribbon: 'review',
        page: '<p>The quarterly <span class="sel-target selected" data-selectable="tc">report is ready for review</span>.</p>',
        hintTarget: 'btn-track'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Track Changes</strong>.' },
      task: 'clickButton', taskTarget: 'track',
      success: { toast: '✓ Track Changes ON', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Every change is recorded in color.</div>' }
    },
    {
      lede: 'You can <strong>Accept</strong> or <strong>Reject</strong> each change, or all at once.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Review', ribbon: 'review',
        page: '<p>The quarterly <span style="background:#d6f5d6;color:#1e6b3e;text-decoration:line-through;">report is ready for review</span> <span style="background:#d6f5d6;color:#1e6b3e;font-weight:600;">report is ready for final sign-off</span>.</p>',
        hintTarget: 'btn-accept'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Accept All Changes</strong>.' },
      task: 'clickButton', taskTarget: 'accept',
      success: { toast: '✓ All changes accepted', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now the document is clean.</div>' }
    }
  ],
  summary: 'You can edit and accept tracked changes professionally.',
  recap: ['✎ Track Changes for reviews', '✓ Accept or reject changes'],
  portfolio: 'A reviewed contract with tracked edits.'
},

'comments': {
  id: 'comments',
  module: 'Module 8 · Review & Collaboration',
  title: 'Comments — questions and suggestions',
  steps: [
    {
      lede: 'A <strong>comment</strong> is a sticky note attached to text.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Review', ribbon: 'review',
        page: '<p>The project will <span class="sel-target selected" data-selectable="cm">launch in March</span>.</p>',
        hintTarget: 'btn-comment'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>New Comment</strong>.' },
      task: 'clickButton', taskTarget: 'comment',
      success: { toast: '✓ Comment added', xp: 20,
        applyFormat: { target: 'cm', style: 'comment', value: 'Can we confirm March? The client asked about April.' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Comments show in the margin.</div>' }
    }
  ],
  summary: 'You can leave comments to suggest or ask without editing.',
  recap: ['💬 Comments = sticky notes', '↩ Can be replied to and resolved'],
  portfolio: 'A document with collaborative comments.'
},

'compare': {
  id: 'compare',
  module: 'Module 8 · Review & Collaboration',
  title: 'Compare and combine documents',
  steps: [
    {
      lede: 'Someone edited your file but with Track Changes off. Use <strong>Compare</strong>.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Review', ribbon: 'review',
        page: '<p>Original: "Please submit the report by Friday."</p><p class="sel-target selected" data-selectable="cmp">Revised version: "Please submit the report by Monday."</p>',
        hintTarget: 'btn-compare'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Compare</strong>.' },
      task: 'clickButton', taskTarget: 'compare',
      success: { toast: '✓ Differences highlighted', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">3-pane view: original, revised, comparison.</div>' }
    }
  ],
  summary: 'You can compare versions to see what changed.',
  recap: ['⇄ Compare shows differences', '📑 3-pane view'],
  portfolio: 'A comparison report between two versions.'
},

'templates': {
  id: 'templates',
  module: 'Module 9 · Templates, Forms & Mail Merge',
  title: 'Save your own template',
  steps: [
    {
      lede: 'A <strong>template</strong> is a pre-formatted starting point. Save once, reuse forever.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'File', ribbon: 'file',
        page: '<p><strong>ACME Corp Letterhead</strong></p><p>123 Main Street, Springfield</p><p>hello@acme.co | acme.co</p><hr><p>Dear [Name],</p>',
        hintTarget: 'btn-savetemplate'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Save as Template</strong>.' },
      task: 'clickButton', taskTarget: 'savetemplate',
      success: { toast: '✓ Template saved (.dotx)', xp: 30,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Next time you open a letter, everything is ready.</div>' }
    },
    {
      lede: 'For documents people fill in, make a <strong>fillable form</strong> with content controls.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Insert', ribbon: 'insert',
        page: '<p><strong>Client Intake</strong></p><p>Name: <span class="sel-target selected" data-selectable="ff">[text field]</span></p><p>Plan: [dropdown]</p>',
        hintTarget: 'btn-contentcontrol'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Text Field</strong>.' },
      task: 'clickButton', taskTarget: 'contentcontrol',
      success: { toast: '✓ Form field inserted', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Enable Developer tab for all controls.</div>' }
    }
  ],
  summary: 'You can save templates and build fillable forms.',
  recap: ['💾 Templates as .dotx', '📝 Form fields for intake'],
  portfolio: 'A branded letterhead template.'
},

'forms': {
  id: 'forms',
  module: 'Module 9 · Templates, Forms & Mail Merge',
  title: 'Protect a form so only fields are editable',
  steps: [
    {
      lede: 'Protect a form so the rest of the document is locked.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Review', ribbon: 'review',
        page: '<p><strong>Client Intake Form</strong></p><p>Name: [editable field]</p><p>Signature: [editable field]</p><p>All other text: locked.</p>',
        hintTarget: 'btn-restrict'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Restrict Editing</strong>.' },
      task: 'clickButton', taskTarget: 'restrict',
      success: { toast: '✓ Form protected', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Users can only type in the intended fields.</div>' }
    }
  ],
  summary: 'You can protect forms so only fields are editable.',
  recap: ['🔒 Restrict Editing locks everything', '📝 Only fields remain editable'],
  portfolio: 'A protected client intake form.'
},

'mailmerge': {
  id: 'mailmerge',
  module: 'Module 9 · Templates, Forms & Mail Merge',
  title: 'Mail Merge — one letter, many names',
  steps: [
    {
      lede: '<strong>Mail Merge</strong> combines a template letter with a list of names to produce personalized letters.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Mailings', ribbon: 'mailings',
        page: '<p>Dear <span class="sel-target selected" data-selectable="merge">«Name»</span>,</p><p>You are invited to our annual gala on May 21st.</p>',
        hintTarget: 'btn-mergefield'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Insert Merge Field</strong>.' },
      task: 'clickButton', taskTarget: 'mergefield',
      success: { toast: '✓ Merge field inserted', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Connect your recipient list, click Finish & Merge — you get personalized letters.</div>' }
    }
  ],
  summary: 'You can generate personalized letters from one template.',
  recap: ['✉️ Mail Merge = template + list', '📋 Finish & Merge for the batch'],
  portfolio: 'A merged set of 5 invitation letters.'
},

'outline': {
  id: 'outline',
  module: 'Module 10 · Writing Workflow & Mastery',
  title: 'Outline view — plan before you write',
  steps: [
    {
      lede: 'Writers plan before they type. <strong>Outline View</strong> lets you build a structure and rearrange whole sections.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'View', ribbon: 'view-outline',
        page: '<p><strong>My Article</strong></p><p><strong>1. Introduction</strong></p><p><strong>2. Main Argument</strong></p><p><strong>3. Counterpoint</strong></p><p><strong>4. Conclusion</strong></p>',
        hintTarget: 'btn-outline'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Outline View</strong>.' },
      task: 'clickButton', taskTarget: 'outline',
      success: { toast: '✓ Outline view active', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Drag the + to reorder sections. This is how you plan a book.</div>' }
    }
  ],
  summary: 'You can plan documents before writing.',
  recap: ['📋 Outline View for planning', '🔄 Drag to reorder sections'],
  portfolio: 'An article outline ready to write.'
},

'findreplace': {
  id: 'findreplace',
  module: 'Module 10 · Writing Workflow & Mastery',
  title: 'Find & Replace — with wildcards',
  steps: [
    {
      lede: 'Find & Replace (<code>Ctrl+H</code>) does more than swap words. With <strong>wildcards</strong>, you can find patterns.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'Home', ribbon: 'home-edit',
        page: '<p>Contact: john@old.com | mary@old.com | sue@old.com</p>',
        hintTarget: 'btn-replace'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Replace</strong>.' },
      task: 'clickButton', taskTarget: 'replace',
      success: { toast: '✓ 3 replacements made', xp: 25,
        applyFormat: { target: 'none', style: 'replaceAll', value: '' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Enable "Use wildcards" for pattern matching.</div>' }
    }
  ],
  summary: 'You can find and replace text patterns across a document.',
  recap: ['⇄ Ctrl+H for Find & Replace', '🎯 Wildcards for patterns'],
  portfolio: 'A document cleaned with Find & Replace.'
},

'exporting': {
  id: 'exporting',
  module: 'Module 10 · Writing Workflow & Mastery',
  title: 'Export as PDF, accessibility, and web',
  steps: [
    {
      lede: 'When you\'re done writing, you <strong>export</strong>. PDF for sharing. Accessible PDF for compliance. HTML for the web.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'File', ribbon: 'file',
        page: '<p><strong>Final Report</strong></p><p>Ready to share with stakeholders.</p>',
        hintTarget: 'btn-exportpdf'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Export as PDF</strong>.' },
      task: 'clickButton', taskTarget: 'exportpdf',
      success: { toast: '✓ PDF exported', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Word offers PDF/A for long-term archival.</div>' }
    },
    {
      lede: 'For the web, export as <strong>HTML</strong>. Styles become CSS. Headings become semantic tags.',
      sandbox: {
        tabs: ['File','Home','Insert','Design','Layout','References','Review','View'],
        activeTab: 'File', ribbon: 'file',
        page: '<p>Ready to publish online?</p>',
        hintTarget: 'btn-exporthtml'
      },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Export as HTML</strong>.' },
      task: 'clickButton', taskTarget: 'exporthtml',
      success: { toast: '✓ HTML exported', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Your headings become &lt;h1&gt;–&lt;h3&gt;.</div>' }
    }
  ],
  summary: 'You can export your work in the right format for any audience.',
  recap: ['📄 PDF for sharing', '🌐 HTML for web', '♿ Accessible PDF for compliance'],
  portfolio: 'A publication-ready document in multiple formats.'
}

};
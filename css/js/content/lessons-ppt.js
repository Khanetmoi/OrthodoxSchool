// All PowerPoint lessons. Keyed by lesson ID.

export const LESSONS_PPT = {

'slides-basics': {
  id: 'slides-basics', module: 'Module 1 · Meet PowerPoint',
  title: 'Slides, thumbnails, and the workspace',
  steps: [
    { lede: 'PowerPoint is a stack of <strong>slides</strong>. On the left you see <strong>thumbnails</strong>. In the middle is the <strong>slide you\'re editing</strong>.',
      sandbox: { slides: [{ layout: 'title', title: 'Annual Report 2025', body: 'Prepared for the board', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the <strong>thumbnail</strong> on the left to select the slide.' },
      task: 'clickThumbnail', taskTarget: 0,
      success: { toast: '✓ Slide selected', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">When a slide is selected, the ribbon tools apply to it.</div>' }
    },
    { lede: 'Click the slide itself to place your cursor. You can edit the <strong>title</strong> and <strong>body</strong> directly.',
      sandbox: { slides: [{ layout: 'title', title: 'Annual Report 2025', body: 'Prepared for the board', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the title and change it to <code>Q3 Board Update</code>.' },
      task: 'editTitle', taskTarget: 'Q3 Board Update',
      success: { toast: '✓ Title updated', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Titles are just text boxes. Edit them in place.</div>' }
    },
    { lede: 'The <strong>status bar</strong> at the bottom shows the current slide number and total.',
      sandbox: { slides: [{ layout: 'title', title: 'Q3 Board Update', body: 'Prepared for the board', notes: '' }], activeSlide: 0, ribbon: 'view', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Slide Sorter</strong> to see all slides as thumbnails.' },
      task: 'clickButton', taskTarget: 'sorter',
      success: { toast: '✓ Slide Sorter view', xp: 20,
        viewChange: 'sorter',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Slide Sorter is where you reorder and organize.</div>' }
    },
    { lede: 'Slide Show view takes over the whole screen and plays your deck full size.',
      sandbox: { slides: [{ layout: 'title', title: 'Q3 Board Update', body: 'Prepared for the board', notes: '' }], activeSlide: 0, ribbon: 'view', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Slide Show</strong> to see the deck fullscreen.' },
      task: 'clickButton', taskTarget: 'slideshow',
      success: { toast: '✓ Presenting!', xp: 20, startSlideshow: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">In Slide Show: space or → for next, ← for previous, Esc to exit.</div>' }
    }
  ],
  summary: 'You understand the workspace: thumbnails on the left, edit the slide in the middle, use the ribbon, and switch between Normal, Sorter, and Show views.',
  recap: ['🖼 Thumbnails = slide list', '✏️ Edit in the middle stage', '▶️ Slide Show for presenting'],
  portfolio: 'A saved 3-slide "About Me" deck.'
},

'layouts': {
  id: 'layouts', module: 'Module 1 · Meet PowerPoint',
  title: 'Layouts — title, content, section, comparison',
  steps: [
    { lede: 'A <strong>layout</strong> decides where the title, body, and other placeholders go.',
      sandbox: { slides: [{ layout: 'title', title: 'Welcome', body: 'A short subtitle', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Change the layout to <strong>Title & Content</strong>.' },
      task: 'clickButton', taskTarget: 'layout-content',
      success: { toast: '✓ Layout changed', xp: 25, changeLayout: 'title-content',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The title stays at the top, and now there\'s a body area for bullets.</div>' }
    },
    { lede: '<strong>Title Slide</strong> is for the opening — big title, subtitle underneath.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Welcome', body: 'Body content goes here', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Switch back to <strong>Title Slide</strong> layout.' },
      task: 'clickButton', taskTarget: 'layout-title',
      success: { toast: '✓ Title Slide layout', xp: 20, changeLayout: 'title',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Same content, different placeholders.</div>' }
    },
    { lede: '<strong>Section Header</strong> is a divider slide.',
      sandbox: { slides: [{ layout: 'title', title: 'Welcome', body: 'A short subtitle', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Switch to <strong>Section Header</strong> layout.' },
      task: 'clickButton', taskTarget: 'layout-section',
      success: { toast: '✓ Section Header', xp: 20, changeLayout: 'section',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Section headers pace a longer talk.</div>' }
    },
    { lede: '<strong>Comparison</strong> shows two columns — great for before/after, pros/cons.',
      sandbox: { slides: [{ layout: 'title', title: 'Welcome', body: 'A short subtitle', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Switch to <strong>Comparison</strong> layout.' },
      task: 'clickButton', taskTarget: 'layout-comparison',
      success: { toast: '✓ Comparison layout', xp: 25, changeLayout: 'comparison',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Two columns side-by-side.</div>' }
    }
  ],
  summary: 'Layouts decide slide structure.',
  recap: ['🅰 Title Slide = opening', '📄 Title & Content = standard', '🔀 Section = divider', '⚖️ Comparison = two columns'],
  portfolio: 'A 4-slide deck using 4 different layouts.'
},

'editing-text': {
  id: 'editing-text', module: 'Module 1 · Meet PowerPoint',
  title: 'Editing text in placeholders',
  steps: [
    { lede: 'Every slide has <strong>placeholders</strong> — text boxes that prompt "Click to add title".',
      sandbox: { slides: [{ layout: 'title-content', title: 'Click to add title', body: '', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the title and type <code>Project Kickoff</code>.' },
      task: 'editTitle', taskTarget: 'Project Kickoff',
      success: { toast: '✓ Title typed', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The placeholder text disappears the moment you type.</div>' }
    },
    { lede: 'The body placeholder takes <strong>multiple lines</strong>. Press Enter to add a line. Press Tab to indent.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Project Kickoff', body: '', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click the body placeholder and add a line: <code>Goals and timeline</code>.' },
      task: 'editBody', taskTarget: 'Goals and timeline',
      success: { toast: '✓ Body added', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Each Enter creates a new bullet. Tab indents.</div>' }
    },
    { lede: 'You can move between placeholders with <code>Ctrl+Enter</code>.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Project Kickoff', body: 'Goals and timeline', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add a second bullet to the body: <code>Roles and owners</code>.' },
      task: 'editBody', taskTarget: 'Goals and timeline\nRoles and owners',
      success: { toast: '✓ Multi-bullet body', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Notice the spacing between bullets — that\'s the layout doing the work.</div>' }
    }
  ],
  summary: 'Placeholders are click-to-edit.',
  recap: ['✏️ Click a placeholder to edit', '↩️ Enter = new bullet', '⇥ Tab = indent'],
  portfolio: 'A Title & Content slide with a proper bullet hierarchy.'
},

'add-slides': {
  id: 'add-slides', module: 'Module 2 · Working with Slides',
  title: 'Add, duplicate, and delete slides',
  steps: [
    { lede: 'Add a new slide with <code>Ctrl+M</code> or the <strong>New Slide</strong> button.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'A presentation', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>New Slide</strong> to add a second slide.' },
      task: 'clickButton', taskTarget: 'newSlide',
      success: { toast: '✓ Slide added', xp: 25,
        addSlide: { layout: 'title-content', title: '', body: '', notes: '' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The new slide is selected and ready.</div>' }
    },
    { lede: '<strong>Duplicating</strong> a slide is faster than building one from scratch.',
      sandbox: { slides: [
        { layout: 'title', title: 'My Deck', body: 'A presentation', notes: '' },
        { layout: 'title-content', title: 'Agenda', body: 'Overview\nTimeline\nNext steps', notes: '' }
      ], activeSlide: 1, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Duplicate Slide</strong>.' },
      task: 'clickButton', taskTarget: 'duplicate',
      success: { toast: '✓ Slide duplicated', xp: 20, duplicateSlide: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Same layout, same content.</div>' }
    },
    { lede: 'Delete a slide by selecting its thumbnail and pressing <strong>Delete</strong>.',
      sandbox: { slides: [
        { layout: 'title', title: 'My Deck', body: 'A presentation', notes: '' },
        { layout: 'title-content', title: 'Agenda', body: 'Overview\nTimeline\nNext steps', notes: '' },
        { layout: 'title-content', title: 'Agenda', body: 'Overview\nTimeline\nNext steps', notes: '' }
      ], activeSlide: 2, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Delete Slide</strong> to remove the duplicate.' },
      task: 'clickButton', taskTarget: 'delete',
      success: { toast: '✓ Slide deleted', xp: 20, deleteSlide: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Clean. Now your deck has two slides.</div>' }
    }
  ],
  summary: 'Ctrl+M adds a slide. Duplicate to reuse structure. Delete to clean up.',
  recap: ['➕ Ctrl+M = new slide', '📋 Duplicate = reuse structure', '🗑 Delete removes'],
  portfolio: 'A 4-slide deck with a title, agenda, content, and closing.'
},

'reorder-views': {
  id: 'reorder-views', module: 'Module 2 · Working with Slides',
  title: 'Reordering and using views',
  steps: [
    { lede: 'Reorder slides by dragging their thumbnails. Order matters — most decks build a narrative.',
      sandbox: { slides: [
        { layout: 'title', title: 'My Deck', body: 'A presentation', notes: '' },
        { layout: 'title-content', title: 'Conclusion', body: 'What we learned', notes: '' },
        { layout: 'title-content', title: 'Introduction', body: 'Why this matters', notes: '' },
        { layout: 'title-content', title: 'Method', body: 'How we did it', notes: '' }
      ], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Move the "Introduction" slide to position 2 using <strong>Move Up</strong>.' },
      task: 'clickButton', taskTarget: 'moveUp',
      success: { toast: '✓ Reordered', xp: 25, moveUp: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Introduction now comes before Conclusion.</div>' }
    },
    { lede: '<strong>Normal view</strong> is for editing one slide. <strong>Outline view</strong> shows only text.',
      sandbox: { slides: [
        { layout: 'title', title: 'My Deck', body: 'A presentation', notes: '' },
        { layout: 'title-content', title: 'Introduction', body: 'Why this matters', notes: '' }
      ], activeSlide: 0, ribbon: 'view', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Outline View</strong> to see your deck as an outline.' },
      task: 'clickButton', taskTarget: 'outline',
      success: { toast: '✓ Outline view', xp: 20, viewChange: 'outline',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Outline view is where you write the talk, not the slides.</div>' }
    }
  ],
  summary: 'Reorder in Slide Sorter. Use Outline view to plan the talk.',
  recap: ['🔀 Drag to reorder', '📋 Sorter = arrange', '📝 Outline = plan'],
  portfolio: 'A 5-slide deck reordered by narrative flow.'
},

'text-formatting': {
  id: 'text-formatting', module: 'Module 3 · Text & Formatting',
  title: 'Font, size, bold, and italic',
  steps: [
    { lede: 'Select text, then apply formatting — bold, italic, underline, font, size, color.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Quarterly Results', body: 'Revenue up 20%\nCosts flat', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal', selectedText: 'Revenue up 20%' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Select the title, then click <strong>B</strong> (Bold).' },
      task: 'clickButton', taskTarget: 'bold',
      success: { toast: '✓ Bold applied', xp: 20,
        applyFormat: { target: 'title', bold: true },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Titles should always be bold.</div>' }
    },
    { lede: 'Font size matters more on a slide than on a document. A good rule: <strong>body text ≥ 24pt</strong>.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Quarterly Results', body: 'Revenue up 20%\nCosts flat', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Increase the title size by clicking the <strong>A+</strong> button.' },
      task: 'clickButton', taskTarget: 'increaseSize',
      success: { toast: '✓ Title enlarged', xp: 20,
        applyFormat: { target: 'title', size: 40 },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">If you can\'t read it from 3 meters away, it\'s too small.</div>' }
    },
    { lede: 'Use <strong>emphasis</strong> sparingly. Bold for the one number that matters.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Quarterly Results', body: 'Revenue up 20%\nCosts flat', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add a new body line: <code>Next review: May 15</code>.' },
      task: 'editBody', taskTarget: 'Revenue up 20%\nCosts flat\nNext review: May 15',
      success: { toast: '✓ Third bullet added', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Three bullets is the sweet spot.</div>' }
    }
  ],
  summary: 'Slides need bigger text than documents.',
  recap: ['🅱 Bold titles', '📏 Body ≥ 24pt', '🎯 Max 5 bullets per slide'],
  portfolio: 'A title slide and content slide with proper hierarchy.'
},

'bullets-indent': {
  id: 'bullets-indent', module: 'Module 3 · Text & Formatting',
  title: 'Bullet levels and indentation',
  steps: [
    { lede: 'Bullets can have <strong>levels</strong>. Level 1 for main points. Level 2 (indented) for supporting details.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Plan', body: 'Phase 1\n  Research\n  Interviews\nPhase 2\n  Build', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add a sub-bullet under "Build": type <code>  Testing</code> (with two spaces).' },
      task: 'editBody', taskTarget: 'Phase 1\n  Research\n  Interviews\nPhase 2\n  Build\n  Testing',
      success: { toast: '✓ Sub-bullet added', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Two levels is usually enough.</div>' }
    },
    { lede: 'You can change the <strong>bullet character</strong> — dot, dash, checkmark, arrow.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Checklist', body: 'Draft the agenda\nBook the room\nSend invites', notes: '' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Convert the bullets to a numbered list by clicking <strong>Numbering</strong>.' },
      task: 'clickButton', taskTarget: 'numbering',
      success: { toast: '✓ Numbered list', xp: 20,
        applyFormat: { target: 'body', bulletStyle: 'numbered' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Numbers imply order. Bullets imply a set.</div>' }
    }
  ],
  summary: 'Bullets have levels. Match bullet style to meaning.',
  recap: ['⇥ Tab indents', '• Bullets for sets', '1. Numbers for steps'],
  portfolio: 'A two-level bulleted agenda slide.'
},

'themes': {
  id: 'themes', module: 'Module 4 · Themes & Design',
  title: 'Themes — one click, whole new look',
  steps: [
    { lede: 'A <strong>theme</strong> bundles fonts, colors, and layout styles.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'A presentation', notes: '', theme: 'default' }], activeSlide: 0, ribbon: 'design', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Apply the <strong>Green Theme</strong>.' },
      task: 'clickButton', taskTarget: 'theme-green',
      success: { toast: '✓ Theme applied', xp: 25, applyTheme: 'green',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Every slide now uses green accents.</div>' }
    },
    { lede: '<strong>Variants</strong> are color/font variations of the same theme.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'A presentation', notes: '', theme: 'green' }], activeSlide: 0, ribbon: 'design', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Try the <strong>Blue Variant</strong>.' },
      task: 'clickButton', taskTarget: 'theme-blue',
      success: { toast: '✓ Variant applied', xp: 20, applyTheme: 'blue',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Same layout, different accent.</div>' }
    },
    { lede: 'Every theme defines a <strong>title font</strong> and a <strong>body font</strong>.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'A presentation', notes: '', theme: 'blue' }], activeSlide: 0, ribbon: 'design', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Switch to the <strong>Serif Theme</strong> for a formal feel.' },
      task: 'clickButton', taskTarget: 'theme-serif',
      success: { toast: '✓ Formal serif theme', xp: 20, applyTheme: 'serif',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Serif fonts feel traditional. Sans-serif feel modern.</div>' }
    }
  ],
  summary: 'Themes and variants change the whole deck in one click.',
  recap: ['🎨 Theme = fonts + colors', '🔄 Variants = same theme, tweaked', '🎭 Pick one and stay consistent'],
  portfolio: 'A branded 5-slide deck using a custom theme.'
},

'colors-fonts': {
  id: 'colors-fonts', module: 'Module 4 · Themes & Design',
  title: 'Custom colors and fonts',
  steps: [
    { lede: 'You can customize a theme\'s <strong>color palette</strong> — this is where you inject your brand colors.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'A presentation', notes: '' }], activeSlide: 0, ribbon: 'design', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Apply a <strong>custom accent color</strong> — let\'s use teal.' },
      task: 'clickButton', taskTarget: 'custom-teal',
      success: { toast: '✓ Teal accent applied', xp: 25, applyTheme: 'teal',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Accent 1 is the color used for bullet markers, chart series, and highlights.</div>' }
    },
    { lede: 'Fonts can be customized too. Pick a <strong>title font</strong> and a <strong>body font</strong>.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'A presentation', notes: '' }], activeSlide: 0, ribbon: 'design', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Apply the <strong>Georgia & Segoe</strong> font pairing.' },
      task: 'clickButton', taskTarget: 'font-georgia',
      success: { toast: '✓ Fonts paired', xp: 20, applyTheme: 'font-georgia',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">A distinctive title font + a neutral body font = professional.</div>' }
    }
  ],
  summary: 'Customize your theme colors and fonts to match your brand.',
  recap: ['🎨 Accent color drives highlights', '🔤 Pair a title font with a body font', '🏷 Save custom themes for reuse'],
  portfolio: 'A branded deck with custom colors and font pairing.'
},

'images': {
  id: 'images', module: 'Module 5 · Images & Shapes',
  title: 'Insert and size images',
  steps: [
    { lede: 'Insert a picture with <strong>Insert → Pictures</strong>. Drag a corner handle to resize. Hold <strong>Shift</strong> to keep the aspect ratio.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Our Team', body: 'Meet the people behind the work', notes: '', image: null }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Pictures</strong> to insert a placeholder image.' },
      task: 'clickButton', taskTarget: 'insertPicture',
      success: { toast: '✓ Image inserted', xp: 25, addImage: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Notice the image sits on top of the slide.</div>' }
    },
    { lede: '<strong>Crop</strong> cuts away parts of an image without resizing it.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Our Team', body: 'Meet the people behind the work', notes: '', image: 'photo' }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Crop</strong> to crop the image.' },
      task: 'clickButton', taskTarget: 'crop',
      success: { toast: '✓ Crop applied', xp: 20, cropImage: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Cropping is non-destructive.</div>' }
    }
  ],
  summary: 'Pictures resize with corner handles. Hold Shift for aspect ratio.',
  recap: ['🖼 Insert → Pictures', '⇧ Shift = keep aspect ratio', '✂️ Crop = non-destructive'],
  portfolio: 'A product slide with a hero image.'
},

'shapes-align': {
  id: 'shapes-align', module: 'Module 5 · Images & Shapes',
  title: 'Shapes, alignment, and cards',
  steps: [
    { lede: '<strong>Shapes</strong> — rectangles, circles, arrows — are the building blocks of every professional slide.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Features', body: '', notes: '', shapes: [] }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Rectangle</strong> to add a shape.' },
      task: 'clickButton', taskTarget: 'addRect',
      success: { toast: '✓ Rectangle added', xp: 20, addShape: 'rect',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Shapes carry text — click into one and type.</div>' }
    },
    { lede: '<strong>Align</strong> commands line up multiple shapes neatly.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Features', body: '', notes: '', shapes: ['rect', 'rect', 'rect'] }], activeSlide: 0, ribbon: 'format', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Distribute Horizontally</strong> to space the three cards evenly.' },
      task: 'clickButton', taskTarget: 'distribute',
      success: { toast: '✓ Evenly spaced', xp: 25, distributeShapes: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Equal spacing = professional.</div>' }
    },
    { lede: 'A grouped shape is one object. Select multiple shapes with Shift+click, then <code>Ctrl+G</code>.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Features', body: '', notes: '', shapes: ['rect', 'rect', 'rect'], grouped: false }], activeSlide: 0, ribbon: 'format', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Group</strong> to bind the three shapes together.' },
      task: 'clickButton', taskTarget: 'group',
      success: { toast: '✓ Shapes grouped', xp: 20, groupShapes: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now they move together.</div>' }
    }
  ],
  summary: 'Shapes + alignment + grouping = pixel-perfect slides.',
  recap: ['▭ Shapes hold text', '📐 Align > manual dragging', '🔗 Ctrl+G groups'],
  portfolio: 'A product slide with three aligned feature cards.'
},

'charts': {
  id: 'charts', module: 'Module 6 · Charts & Diagrams',
  title: 'Charts from data',
  steps: [
    { lede: 'Insert a chart from a data table. Bar charts compare categories, line charts show trends, pie charts show parts of a whole.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Sales by Quarter', body: '', notes: '', chart: null }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Insert Chart</strong> to add a bar chart.' },
      task: 'clickButton', taskTarget: 'insertChart',
      success: { toast: '✓ Chart inserted', xp: 30, addChart: 'bar',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">The chart appears with sample data.</div>' }
    },
    { lede: 'Charts are <strong>live-linked</strong> to their data.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Sales by Quarter', body: '', notes: '', chart: 'bar' }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Pie Chart</strong> to switch to a pie chart instead.' },
      task: 'clickButton', taskTarget: 'insertPie',
      success: { toast: '✓ Pie chart', xp: 25, addChart: 'pie',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Bar for comparison. Pie for proportions. Line for time.</div>' }
    },
    { lede: 'Every chart needs a <strong>title</strong> and <strong>axis labels</strong>.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Sales by Quarter', body: '', notes: '', chart: 'bar', chartTitle: 'Sales by Quarter' }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Line Chart</strong> to see a trend instead.' },
      task: 'clickButton', taskTarget: 'insertLine',
      success: { toast: '✓ Line chart', xp: 20, addChart: 'line',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Same data, different story.</div>' }
    }
  ],
  summary: 'Charts visualize data. Bar for comparison, line for time, pie for proportions.',
  recap: ['📊 Bar = compare', '📈 Line = trend', '🥧 Pie = parts'],
  portfolio: 'A data slide with a bar chart.'
},

'smartart': {
  id: 'smartart', module: 'Module 6 · Charts & Diagrams',
  title: 'SmartArt — instant diagrams',
  steps: [
    { lede: '<strong>SmartArt</strong> turns plain text into a diagram.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Our Process', body: 'Research\nDesign\nBuild\nLaunch', notes: '', smartart: null }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>SmartArt</strong> to convert the bullets into a process diagram.' },
      task: 'clickButton', taskTarget: 'smartart',
      success: { toast: '✓ SmartArt inserted', xp: 30, addSmartArt: 'process',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Four steps, one flow.</div>' }
    },
    { lede: 'Change the SmartArt type to match the meaning: <strong>Process</strong> for steps, <strong>Cycle</strong> for recurring, <strong>Hierarchy</strong> for org charts.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Our Process', body: 'Research\nDesign\nBuild\nLaunch', notes: '', smartart: 'process' }], activeSlide: 0, ribbon: 'insert', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Switch to a <strong>Cycle</strong> diagram.' },
      task: 'clickButton', taskTarget: 'smartartCycle',
      success: { toast: '✓ Cycle diagram', xp: 20, addSmartArt: 'cycle',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">A cycle implies repetition.</div>' }
    }
  ],
  summary: 'SmartArt converts text into diagrams.',
  recap: ['🧩 Insert → SmartArt', '🔄 Match shape to meaning', '✏️ Type directly into shapes'],
  portfolio: 'A process diagram slide.'
},

'transitions-basics': {
  id: 'transitions-basics', module: 'Module 7 · Transitions',
  title: 'Slide transitions',
  steps: [
    { lede: 'A <strong>transition</strong> is the motion between slides. Fade, Push, Wipe, Morph.',
      sandbox: { slides: [{ layout: 'title', title: 'Welcome', body: 'A presentation', notes: '', transition: null }], activeSlide: 0, ribbon: 'transitions', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Apply a <strong>Fade</strong> transition.' },
      task: 'clickButton', taskTarget: 'transition-fade',
      success: { toast: '✓ Fade applied', xp: 25, applyTransition: 'fade',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Fade is the safest transition.</div>' }
    },
    { lede: 'Use <strong>one transition</strong> throughout the deck.',
      sandbox: { slides: [{ layout: 'title', title: 'Welcome', body: 'A presentation', notes: '', transition: 'fade' }], activeSlide: 0, ribbon: 'transitions', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Apply to All</strong> so the whole deck uses Fade.' },
      task: 'clickButton', taskTarget: 'applyAll',
      success: { toast: '✓ Applied to all slides', xp: 20, applyTransitionAll: 'fade',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Consistency.</div>' }
    }
  ],
  summary: 'One transition, applied consistently. Fade is safest.',
  recap: ['🎬 Transitions = between slides', '🕊 Fade is safest', '✅ Apply to All'],
  portfolio: 'A deck with a consistent Fade transition.'
},

'morph': {
  id: 'morph', module: 'Module 7 · Transitions',
  title: 'Morph — smooth object animation',
  steps: [
    { lede: '<strong>Morph</strong> is a special transition that animates objects smoothly between two slides.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Before', body: 'A circle here', notes: '', transition: null }], activeSlide: 0, ribbon: 'transitions', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Apply <strong>Morph</strong> to this slide.' },
      task: 'clickButton', taskTarget: 'transition-morph',
      success: { toast: '✓ Morph ready', xp: 25, applyTransition: 'morph',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Morph will smoothly animate any object that appears on both this slide and the next.</div>' }
    },
    { lede: 'Morph is powerful for <strong>storytelling</strong> — a chart that grows, a region that highlights.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Before', body: 'A circle here', notes: '', transition: 'morph' }], activeSlide: 0, ribbon: 'transitions', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Preview</strong> to see Morph in action.' },
      task: 'clickButton', taskTarget: 'preview',
      success: { toast: '✓ Morph preview', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Morph is the modern PowerPoint transition.</div>' }
    }
  ],
  summary: 'Morph animates objects between slides when they share identity across both.',
  recap: ['🔄 Same object → smooth morph', '🎬 Great for storytelling', '▶️ Preview to test'],
  portfolio: 'A deck with Morph transitions between two visually connected slides.'
},

'animations-basics': {
  id: 'animations-basics', module: 'Module 8 · Animations',
  title: 'Entrance, emphasis, exit',
  steps: [
    { lede: 'An <strong>animation</strong> is motion within a slide — an object appearing, moving, or disappearing.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%', notes: '', animation: null }], activeSlide: 0, ribbon: 'animations', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Apply a <strong>Fade</strong> entrance animation to the body text.' },
      task: 'clickButton', taskTarget: 'anim-fade',
      success: { toast: '✓ Entrance animation', xp: 25, applyAnimation: 'fade',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Fade is the safest entrance.</div>' }
    },
    { lede: '<strong>Entrance</strong> brings something in. <strong>Emphasis</strong> pulses or highlights. <strong>Exit</strong> removes it.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%', notes: '', animation: 'fade' }], activeSlide: 0, ribbon: 'animations', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Change to a <strong>Fly In</strong> animation.' },
      task: 'clickButton', taskTarget: 'anim-fly',
      success: { toast: '✓ Fly In applied', xp: 20, applyAnimation: 'flyin',
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Fly In is more dramatic.</div>' }
    }
  ],
  summary: 'Animations are within-slide motion.',
  recap: ['✨ Animations = within slide', '➡️ Entrance brings in', '🎯 Prefer Fade'],
  portfolio: 'A slide with a Fade entrance on the body text.'
},

'animation-pane': {
  id: 'animation-pane', module: 'Module 8 · Animations',
  title: 'Animation Pane — order and timing',
  steps: [
    { lede: 'The <strong>Animation Pane</strong> lists every animation on the slide, in order.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%\nCosts flat\nNew markets', notes: '', animations: ['fade', 'fade', 'fade'] }], activeSlide: 0, ribbon: 'animations', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Animation Pane</strong> to see the list.' },
      task: 'clickButton', taskTarget: 'animPane',
      success: { toast: '✓ Animation Pane open', xp: 20, showAnimPane: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Three animations, top to bottom.</div>' }
    },
    { lede: 'By default, animations trigger <strong>On Click</strong>. Change to <strong>With Previous</strong> to fire together.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%\nCosts flat\nNew markets', notes: '', animations: ['fade', 'fade', 'fade'] }], activeSlide: 0, ribbon: 'animations', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Change the second animation to trigger <strong>With Previous</strong>.' },
      task: 'clickButton', taskTarget: 'withPrev',
      success: { toast: '✓ Timing updated', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now bullets 1 and 2 appear together.</div>' }
    },
    { lede: 'Animating one bullet at a time is the classic presentation technique.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%\nCosts flat\nNew markets', notes: '', animations: ['fade', 'fade', 'fade'] }], activeSlide: 0, ribbon: 'animations', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>On Click</strong> to make each bullet appear as you click.' },
      task: 'clickButton', taskTarget: 'onClick',
      success: { toast: '✓ On Click set', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Now you control the pace.</div>' }
    }
  ],
  summary: 'Animation Pane manages order and timing.',
  recap: ['📋 Pane lists all animations', '🕐 On Click / With Previous / After Previous', '🎯 Animate one at a time'],
  portfolio: 'A slide where each bullet appears one by one on click.'
},

'speaker-notes': {
  id: 'speaker-notes', module: 'Module 9 · Speaker Notes',
  title: 'Speaker notes — your talk behind the slides',
  steps: [
    { lede: '<strong>Speaker notes</strong> are text only you see, in Presenter View. The slide shows the bullet; your notes tell you what to <em>say</em>.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%\nCosts flat\nNew markets', notes: 'Revenue grew from $1.2M to $1.44M. Costs held steady despite 30% more traffic.' }], activeSlide: 0, ribbon: 'view', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Open the <strong>Notes</strong> pane.' },
      task: 'clickButton', taskTarget: 'notes',
      success: { toast: '✓ Notes pane open', xp: 20, showNotes: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Notes live below the slide. Your audience never sees them.</div>' }
    },
    { lede: 'Notes should be <strong>sentences you\'d actually say</strong>, not bullet fragments.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%\nCosts flat\nNew markets', notes: '' }], activeSlide: 0, ribbon: 'view', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add a note: <code>Revenue grew 20% to $1.44M, our best quarter yet.</code>' },
      task: 'editNotes', taskTarget: 'Revenue grew 20% to $1.44M, our best quarter yet.',
      success: { toast: '✓ Note added', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Full sentences. If you can read your note out loud, you\'ll never freeze.</div>' }
    }
  ],
  summary: 'Speaker notes carry your talk.',
  recap: ['📝 Notes are private to you', '💬 Write as sentences you\'d say', '🎤 View in Presenter View'],
  portfolio: 'A pitch slide with a full-sentence speaker note.'
},

'storytelling': {
  id: 'storytelling', module: 'Module 9 · Speaker Notes',
  title: 'Deck structure — the 5-slide pitch',
  steps: [
    { lede: 'Every great presentation follows the same arc: <strong>Hook → Context → Argument → Evidence → Ask</strong>.',
      sandbox: { slides: [{ layout: 'title', title: 'My Pitch', body: 'The one-line hook', notes: 'Open with a striking number or question.' }], activeSlide: 0, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add slide 2 — the Context slide — with the <strong>New Slide</strong> button.' },
      task: 'clickButton', taskTarget: 'newSlide',
      success: { toast: '✓ Context slide added', xp: 25,
        addSlide: { layout: 'title-content', title: 'The Problem', body: 'Who is affected and how', notes: 'Establish why this matters.' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Slide 1 hooks. Slide 2 sets context.</div>' }
    },
    { lede: 'Slide 3 is the <strong>Argument</strong>. Slide 4 is <strong>Evidence</strong>. Slide 5 is <strong>The Ask</strong>.',
      sandbox: { slides: [
        { layout: 'title', title: 'My Pitch', body: 'The one-line hook', notes: '' },
        { layout: 'title-content', title: 'The Problem', body: 'Who is affected and how', notes: '' }
      ], activeSlide: 1, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add slide 3 — the Argument — via <strong>New Slide</strong>.' },
      task: 'clickButton', taskTarget: 'newSlide',
      success: { toast: '✓ Argument slide added', xp: 20,
        addSlide: { layout: 'title-content', title: 'My Idea', body: 'The single core proposition', notes: 'State it plainly.' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">One slide, one idea.</div>' }
    },
    { lede: 'The full arc: <strong>Hook → Problem → Idea → Evidence → Ask</strong>.',
      sandbox: { slides: [
        { layout: 'title', title: 'My Pitch', body: 'The one-line hook', notes: '' },
        { layout: 'title-content', title: 'The Problem', body: 'Who is affected and how', notes: '' },
        { layout: 'title-content', title: 'My Idea', body: 'The single core proposition', notes: '' }
      ], activeSlide: 2, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add slide 4 — the Evidence — via <strong>New Slide</strong>.' },
      task: 'clickButton', taskTarget: 'newSlide',
      success: { toast: '✓ Evidence slide added', xp: 20,
        addSlide: { layout: 'title-content', title: 'The Evidence', body: 'Numbers, quotes, charts', notes: 'Prove it.' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Evidence is where you make them believe.</div>' }
    },
    { lede: 'Finish with <strong>The Ask</strong>. It should be concrete: "Try the beta", "Book a call".',
      sandbox: { slides: [
        { layout: 'title', title: 'My Pitch', body: 'The one-line hook', notes: '' },
        { layout: 'title-content', title: 'The Problem', body: 'Who is affected and how', notes: '' },
        { layout: 'title-content', title: 'My Idea', body: 'The single core proposition', notes: '' },
        { layout: 'title-content', title: 'The Evidence', body: 'Numbers, quotes, charts', notes: '' }
      ], activeSlide: 3, ribbon: 'home', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Add the final slide — The Ask — via <strong>New Slide</strong>.' },
      task: 'clickButton', taskTarget: 'newSlide',
      success: { toast: '✓ Pitch complete!', xp: 30,
        addSlide: { layout: 'title-content', title: 'The Ask', body: 'One concrete next step', notes: 'Make it actionable.' },
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">You now have the 5-slide pitch arc.</div>' }
    }
  ],
  summary: 'The 5-slide pitch: Hook → Problem → Idea → Evidence → Ask.',
  recap: ['🪝 Hook grabs attention', '🎯 Problem + Idea = core', '📊 Evidence proves it', '📣 Ask = concrete next step'],
  portfolio: 'A 5-slide pitch deck with speaker notes.'
},

'presenting': {
  id: 'presenting', module: 'Module 10 · Presenting',
  title: 'Presenter View and rehearsing',
  steps: [
    { lede: '<strong>Presenter View</strong> shows the current slide, the next slide, your notes, and a timer — all on your laptop screen.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%', notes: 'Open with the number.' }], activeSlide: 0, ribbon: 'slide-show', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Presenter View</strong> to see what you\'d see on stage.' },
      task: 'clickButton', taskTarget: 'presenterView',
      success: { toast: '✓ Presenter View', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Current slide, next slide, notes, timer — all at a glance.</div>' }
    },
    { lede: '<strong>Rehearse Timings</strong> records how long you spend on each slide.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%', notes: 'Open with the number.' }], activeSlide: 0, ribbon: 'slide-show', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Rehearse Timings</strong> to simulate a practice run.' },
      task: 'clickButton', taskTarget: 'rehearse',
      success: { toast: '✓ Rehearsal started', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Aim for 1–2 minutes per slide for a typical business talk.</div>' }
    },
    { lede: 'Click the <strong>Slide Show</strong> button to present fullscreen. <code>B</code> blacks out the screen. <code>Esc</code> exits.',
      sandbox: { slides: [{ layout: 'title-content', title: 'Q3 Highlights', body: 'Revenue up 20%', notes: 'Open with the number.' }], activeSlide: 0, ribbon: 'slide-show', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Slide Show</strong> to run it for real.' },
      task: 'clickButton', taskTarget: 'runShow',
      success: { toast: '✓ Presenting!', xp: 25, startSlideshow: true,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Space or → advances. B for blackout.</div>' }
    }
  ],
  summary: 'Presenter View + Rehearse Timings + Slide Show = professional delivery.',
  recap: ['👀 Presenter View shows notes + next slide', '⏱ Rehearse to check pace', '⌨️ Space/→ next, Esc exit'],
  portfolio: 'A rehearsed pitch with a timing target.'
},

'exporting': {
  id: 'exporting', module: 'Module 10 · Presenting',
  title: 'Export as PDF, video, or images',
  steps: [
    { lede: 'Send your deck as <strong>PDF</strong> so the layout never shifts. Send as <strong>PPTX</strong> if people need to edit. Send as <strong>video</strong> if you want auto-play.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'Ready to share', notes: '' }], activeSlide: 0, ribbon: 'file', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Export as PDF</strong>.' },
      task: 'clickButton', taskTarget: 'exportPDF',
      success: { toast: '✓ PDF exported', xp: 25,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">PDF is the universal format.</div>' }
    },
    { lede: 'Choose <strong>Export as Video</strong> for a self-playing deck.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'Ready to share', notes: '' }], activeSlide: 0, ribbon: 'file', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Export as Video</strong>.' },
      task: 'clickButton', taskTarget: 'exportVideo',
      success: { toast: '✓ Video settings opened', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Video export is great for onboarding and async communication.</div>' }
    },
    { lede: '<strong>Export as PNG</strong> gives you one image per slide.',
      sandbox: { slides: [{ layout: 'title', title: 'My Deck', body: 'Ready to share', notes: '' }], activeSlide: 0, ribbon: 'file', view: 'normal' },
      instruction: { icon: '🎯', text: '<strong>Your turn:</strong> Click <strong>Export as Images</strong>.' },
      task: 'clickButton', taskTarget: 'exportPNG',
      success: { toast: '✓ PNG export ready', xp: 20,
        instruction: '<div class="instruction-icon">✅</div><div class="instruction-text">Three export formats: PDF for sharing, Video for auto-play, PNG for embedding.</div>' }
    }
  ],
  summary: 'PDF for sharing. Video for auto-play. PNG for embedding.',
  recap: ['📄 PDF = universal', '🎬 Video = async', '🖼 PNG = embed'],
  portfolio: 'A polished pitch deck exported to PDF.'
}

};
// Top-level curriculum. Three tracks. Each track has phases → modules → lessons.

export const TRACKS = {
  word: {
    name: 'Word',
    mark: 'W',
    heroTitle: 'Learn Microsoft Word <em>by writing real documents.</em>',
    heroLede: 'Ten modules. From your first click on the Ribbon to publication-ready reports, CVs, and letters. Every lesson ends with something you\'d actually send to a real person.'
  },
  excel: {
    name: 'Excel',
    mark: 'X',
    heroTitle: 'Learn Microsoft Excel <em>by building real spreadsheets.</em>',
    heroLede: 'Ten modules. From your first cell to VLOOKUP and pivot tables. Every lesson ends with a real spreadsheet you\'d actually use — budgets, trackers, invoices, reports.'
  },
  ppt: {
    name: 'PowerPoint',
    mark: 'P',
    heroTitle: 'Learn PowerPoint <em>by building real decks.</em>',
    heroLede: 'Ten modules. From your first slide to transitions, animations, and presenting. Every lesson ends with a real slide — pitch decks, portfolios, class presentations.'
  }
};

export const CURRICULUM = {

  word: [
    {
      phase: 'Phase 1 · Survival Skills',
      goal: 'Get a clean document on the page without panic.',
      modules: [
        {
          id: 'm1',
          num: 'Module 1',
          title: 'Meet the Interface',
          desc: 'Ribbon, tabs, saving files, selecting text. The foundation everything else sits on.',
          lessons: ['ribbon', 'saving', 'selecting'],
          portfolio: 'A saved "About Me" paragraph, correctly named and located.'
        },
        {
          id: 'm2',
          num: 'Module 2',
          title: 'Basic Text Formatting',
          desc: 'Bold, italic, font, size, color, copy/paste, format painter. Make text look intentional.',
          lessons: ['formatting', 'fontsize', 'copyformat', 'undoredo'],
          portfolio: 'A one-page event flyer with headline, body, and highlighted details.'
        },
        {
          id: 'm3',
          num: 'Module 3',
          title: 'Paragraphs & Alignment',
          desc: 'Alignment, spacing, indents, bullets, multi-level lists. Control the shape of a paragraph.',
          lessons: ['alignment', 'spacing', 'bullets'],
          portfolio: 'A formal cover letter with proper alignment and a bulleted skills section.'
        }
      ]
    },
    {
      phase: 'Phase 2 · Professional Polish',
      goal: 'Format any short document cleanly, and add structure.',
      modules: [
        {
          id: 'm4',
          num: 'Module 4',
          title: 'Layout & Page Setup',
          desc: 'Margins, headers, footers, page numbers, breaks, columns. Own the page itself.',
          lessons: ['margins', 'headers', 'breaks'],
          portfolio: 'A 2-page newsletter with headers, footers, and a 2-column layout.'
        },
        {
          id: 'm5',
          num: 'Module 5',
          title: 'Inserting Objects',
          desc: 'Pictures, text wrap, tables, SmartArt, links. Word is not just text.',
          lessons: ['pictures', 'tables', 'shapes'],
          portfolio: 'A one-page CV with a photo, skills table, and hyperlinked email.'
        },
        {
          id: 'm6',
          num: 'Module 6',
          title: 'Styles & Structure',
          desc: 'Stop formatting manually. Apply Heading 1/2/3 and restyle an entire report in one click.',
          lessons: ['styles-intro', 'modify-style', 'custom-style', 'navigation'],
          portfolio: 'A 3-page report with proper heading hierarchy — restyleable in seconds.'
        }
      ]
    },
    {
      phase: 'Phase 3 · Long-Form & Automation',
      goal: 'Produce cited, collaborative, template-driven documents.',
      modules: [
        {
          id: 'm7',
          num: 'Module 7',
          title: 'References & Long Documents',
          desc: 'Automatic Table of Contents, footnotes, citations, captions, cross-references.',
          lessons: ['toc', 'footnotes', 'captions'],
          portfolio: 'A 5-page research brief with TOC, citations, and a bibliography.'
        },
        {
          id: 'm8',
          num: 'Module 8',
          title: 'Review & Collaboration',
          desc: 'Track Changes, comments, compare versions, protect documents. Work with others.',
          lessons: ['trackchanges', 'comments', 'compare'],
          portfolio: 'A reviewed 2-page contract with tracked edits and a clean final version.'
        },
        {
          id: 'm9',
          num: 'Module 9',
          title: 'Templates, Forms & Mail Merge',
          desc: 'Stop reinventing the wheel. Build templates, fillable forms, and merged letters.',
          lessons: ['templates', 'forms', 'mailmerge'],
          portfolio: 'A branded letterhead template plus a merged 5-letter invitation batch.'
        }
      ]
    },
    {
      phase: 'Phase 4 · Writer Level',
      goal: 'Think and produce like a professional writer.',
      modules: [
        {
          id: 'm10',
          num: 'Module 10',
          title: 'Writing Workflow & Mastery',
          desc: 'Outline view, focus mode, find & replace, macros, exporting, publishing.',
          lessons: ['outline', 'findreplace', 'exporting'],
          portfolio: 'One polished, publication-ready document of your choice.'
        }
      ]
    }
  ],

  excel: [
    {
      phase: 'Phase 1 · Survival Skills',
      goal: 'Read a spreadsheet, enter data, save a file.',
      modules: [
        {
          id: 'm1',
          num: 'Module 1',
          title: 'Meet the Grid',
          desc: 'Cells, rows, columns, the Name Box, and the formula bar. The foundation everything sits on.',
          lessons: ['grid-basics', 'cell-types', 'formula-bar'],
          portfolio: 'A saved Contact List with names, emails, and phone numbers.'
        },
        {
          id: 'm2',
          num: 'Module 2',
          title: 'Entering & Editing Data',
          desc: 'Typing, editing, copying, autofill, and paste special. Get data in fast and accurately.',
          lessons: ['editing-data', 'autofill'],
          portfolio: 'A grocery list built with autofill and copy/paste.'
        },
        {
          id: 'm3',
          num: 'Module 3',
          title: 'Basic Formatting',
          desc: 'Bold, currency, dates, decimals, cell color, borders. Make numbers readable.',
          lessons: ['number-formats', 'cell-styling'],
          portfolio: 'A monthly budget formatted like a pro.'
        }
      ]
    },
    {
      phase: 'Phase 2 · Formulas & Functions',
      goal: 'Do math, not manual counting.',
      modules: [
        {
          id: 'm4',
          num: 'Module 4',
          title: 'Formulas 101',
          desc: 'The = sign, arithmetic, cell references, and the order of operations.',
          lessons: ['formulas-basics', 'cell-references'],
          portfolio: 'An invoice that totals itself.'
        },
        {
          id: 'm5',
          num: 'Module 5',
          title: 'Core Functions',
          desc: 'SUM, AVERAGE, MIN, MAX, COUNT, and IF. The five functions that handle 80% of real work.',
          lessons: ['sum-avg', 'if-basics'],
          portfolio: 'A sales tracker with totals, averages, and a pass/fail column.'
        },
        {
          id: 'm6',
          num: 'Module 6',
          title: 'Charts & Visualization',
          desc: 'Turn numbers into bar charts, line charts, and pie charts that tell a story.',
          lessons: ['charts-intro', 'chart-types'],
          portfolio: 'A dashboard with 3 charts.'
        }
      ]
    },
    {
      phase: 'Phase 3 · Real-World Spreadsheets',
      goal: 'Build the spreadsheets professionals use daily.',
      modules: [
        {
          id: 'm7',
          num: 'Module 7',
          title: 'Tables & Sorting',
          desc: 'Convert ranges to tables, sort, filter, and use structured references.',
          lessons: ['tables-intro', 'sorting-filtering'],
          portfolio: 'A client list with sorting and filtering.'
        },
        {
          id: 'm8',
          num: 'Module 8',
          title: 'Lookup Functions',
          desc: 'VLOOKUP, XLOOKUP, and INDEX/MATCH. Connect two lists together.',
          lessons: ['vlookup', 'xlookup-index-match'],
          portfolio: 'A sales report that looks up product prices automatically.'
        },
        {
          id: 'm9',
          num: 'Module 9',
          title: 'Pivot Tables',
          desc: 'Summarize thousands of rows into a clean report in 3 clicks.',
          lessons: ['pivot-intro'],
          portfolio: 'A pivot summary of a year of transactions.'
        }
      ]
    },
    {
      phase: 'Phase 4 · Advanced & Polish',
      goal: 'Think and build like an analyst.',
      modules: [
        {
          id: 'm10',
          num: 'Module 10',
          title: 'Automation & Polish',
          desc: 'Conditional formatting, data validation, and print setup. Make it beautiful and foolproof.',
          lessons: ['conditional-format', 'data-validation'],
          portfolio: 'A polished, protected expense tracker.'
        }
      ]
    }
  ],

  ppt: [
    {
      phase: 'Phase 1 · Survival Skills',
      goal: 'Create, save, and present a basic deck.',
      modules: [
        {
          id: 'm1',
          num: 'Module 1',
          title: 'Meet PowerPoint',
          desc: 'Slides, layouts, the ribbon, and the difference between editing and presenting.',
          lessons: ['slides-basics', 'layouts', 'editing-text'],
          portfolio: 'A saved 3-slide "About Me" deck.'
        },
        {
          id: 'm2',
          num: 'Module 2',
          title: 'Working with Slides',
          desc: 'Add, duplicate, reorder, and delete slides. Switch between Normal, Outline, and Slide Sorter views.',
          lessons: ['add-slides', 'reorder-views'],
          portfolio: 'A 5-slide outline of a talk, ordered correctly.'
        },
        {
          id: 'm3',
          num: 'Module 3',
          title: 'Text & Formatting',
          desc: 'Fonts, sizes, bold/italic, bullet levels, and the text box. Make your message clear.',
          lessons: ['text-formatting', 'bullets-indent'],
          portfolio: 'A title slide and a content slide with proper hierarchy.'
        }
      ]
    },
    {
      phase: 'Phase 2 · Visual Design',
      goal: 'Make slides look intentional, not accidental.',
      modules: [
        {
          id: 'm4',
          num: 'Module 4',
          title: 'Themes & Design',
          desc: 'Themes, variants, colors, and fonts. Change the entire look in one click.',
          lessons: ['themes', 'colors-fonts'],
          portfolio: 'A branded 5-slide deck using a custom theme.'
        },
        {
          id: 'm5',
          num: 'Module 5',
          title: 'Images & Shapes',
          desc: 'Insert pictures, crop, resize, add shapes, icons, and align everything neatly.',
          lessons: ['images', 'shapes-align'],
          portfolio: 'A product slide with a hero image and three feature cards.'
        },
        {
          id: 'm6',
          num: 'Module 6',
          title: 'Charts & Diagrams',
          desc: 'Insert charts from data, build SmartArt, and turn numbers into visuals.',
          lessons: ['charts', 'smartart'],
          portfolio: 'A data slide with a bar chart and a process diagram.'
        }
      ]
    },
    {
      phase: 'Phase 3 · Motion & Story',
      goal: 'Make the deck feel alive and tell a story.',
      modules: [
        {
          id: 'm7',
          num: 'Module 7',
          title: 'Transitions',
          desc: 'Slide-to-slide motion. Fade, Push, Morph. When to use what.',
          lessons: ['transitions-basics', 'morph'],
          portfolio: 'A deck with a consistent, subtle transition style.'
        },
        {
          id: 'm8',
          num: 'Module 8',
          title: 'Animations',
          desc: 'Entrance, emphasis, and exit effects. Animate text and objects one at a time.',
          lessons: ['animations-basics', 'animation-pane'],
          portfolio: 'A slide where bullets appear one by one as you present.'
        },
        {
          id: 'm9',
          num: 'Module 9',
          title: 'Speaker Notes & Story',
          desc: 'Add notes, use the Presenter View, and structure your talk as a story.',
          lessons: ['speaker-notes', 'storytelling'],
          portfolio: 'A 5-slide pitch with speaker notes for each slide.'
        }
      ]
    },
    {
      phase: 'Phase 4 · Presenting',
      goal: 'Deliver the deck like a pro.',
      modules: [
        {
          id: 'm10',
          num: 'Module 10',
          title: 'Presenting & Sharing',
          desc: 'Presenter view, timing, exporting to PDF/video, and rehearsal tools.',
          lessons: ['presenting', 'exporting'],
          portfolio: 'A polished pitch deck exported to PDF.'
        }
      ]
    }
  ]
};
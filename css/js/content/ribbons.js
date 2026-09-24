// Ribbon templates per track, keyed by tab name.

export const RIBBONS = {

  word: {
    home: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn rbtn-format" data-action="bold" disabled>B</button>
        <button class="rbtn rbtn-format italic" data-action="italic" disabled>I</button>
        <button class="rbtn rbtn-format underline" data-action="underline" disabled>U</button>
      </div><div class="ribbon-group-label">Bold · Italic · Underline</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <select class="rbtn-select" disabled><option>Calibri</option></select>
        <select class="rbtn-select" disabled><option>11</option></select>
      </div><div class="ribbon-group-label">Font</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" disabled>¶</button><button class="rbtn" disabled>≡</button>
      </div><div class="ribbon-group-label">Paragraph</div></div>`,

    'home-active': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn rbtn-format" data-action="bold" id="btn-bold">B</button>
        <button class="rbtn rbtn-format italic" data-action="italic" id="btn-italic">I</button>
        <button class="rbtn rbtn-format underline" data-action="underline" id="btn-underline">U</button>
      </div><div class="ribbon-group-label">Bold · Italic · Underline</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <select class="rbtn-select" disabled><option>Calibri</option></select>
        <select class="rbtn-select" disabled><option>11</option></select>
      </div><div class="ribbon-group-label">Font</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" disabled>¶</button><button class="rbtn" disabled>≡</button>
      </div><div class="ribbon-group-label">Paragraph</div></div>`,

    'home-font': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn rbtn-format" data-action="bold" disabled>B</button>
        <button class="rbtn rbtn-format italic" data-action="italic" disabled>I</button>
        <button class="rbtn rbtn-format underline" data-action="underline" disabled>U</button>
      </div><div class="ribbon-group-label">Bold · Italic · Underline</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <select class="rbtn-select" data-action="font-family" id="font-family">
          <option>Calibri</option><option>Georgia</option><option>Times New Roman</option><option>Arial</option>
        </select>
        <select class="rbtn-select" data-action="font-size" id="font-size">
          <option>11</option><option>12</option><option>14</option><option>18</option><option>24</option><option>36</option>
        </select>
      </div><div class="ribbon-group-label">Font</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn-color" style="background:#c0392b;" data-action="color" data-color="red" id="font-color-red"></button>
        <button class="rbtn-color" style="background:#2b579a;" data-action="color" data-color="blue"></button>
        <button class="rbtn-color" style="background:#1e6b3e;" data-action="color" data-color="green"></button>
      </div><div class="ribbon-group-label">Color</div></div>`,

    'home-clip': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="cut" disabled>✂ Cut</button>
        <button class="rbtn" data-action="copy" disabled>⧉ Copy</button>
        <button class="rbtn" data-action="paste" id="btn-paste">📋 Paste</button>
      </div><div class="ribbon-group-label">Clipboard</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn rbtn-format" data-action="bold" disabled>B</button>
        <button class="rbtn rbtn-format italic" data-action="italic" disabled>I</button>
        <button class="rbtn rbtn-format underline" data-action="underline" disabled>U</button>
      </div><div class="ribbon-group-label">Font</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="painter" id="btn-painter">🖌 Format Painter</button>
      </div><div class="ribbon-group-label">Clipboard</div></div>`,

    'home-para': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="bullet" id="btn-bullet">• Bullets</button>
        <button class="rbtn" data-action="number" id="btn-number">1. Numbering</button>
        <button class="rbtn" data-action="multilevel" id="btn-multilevel">1.1 Multi-level</button>
      </div><div class="ribbon-group-label">Lists</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="align-left" id="btn-align-left">⯇ Left</button>
        <button class="rbtn" data-action="align-center" id="btn-align-center">≡ Center</button>
        <button class="rbtn" data-action="align-right" id="btn-align-right">⯈ Right</button>
      </div><div class="ribbon-group-label">Alignment</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="line15" id="line-spacing">↕ 1.5</button>
        <button class="rbtn" data-action="space-after" id="space-after">↧ Space After</button>
      </div><div class="ribbon-group-label">Spacing</div></div>`,

    'home-styles': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="normal" id="style-normal">Normal</button>
        <button class="rbtn" data-action="heading1" id="style-heading1">Heading 1</button>
        <button class="rbtn" data-action="heading2" id="style-heading2">Heading 2</button>
        <button class="rbtn" data-action="heading3" id="style-heading3">Heading 3</button>
      </div><div class="ribbon-group-label">Styles</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="modify" id="style-modify">✎ Modify Style</button>
      </div><div class="ribbon-group-label">Edit</div></div>`,

    'home-edit': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="find" disabled>🔍 Find</button>
        <button class="rbtn" data-action="replace" id="btn-replace">⇄ Replace</button>
      </div><div class="ribbon-group-label">Editing</div></div>`,

    insert: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="header" id="btn-header">Header</button>
        <button class="rbtn" data-action="pagenum" id="btn-pagenum">Page Number</button>
      </div><div class="ribbon-group-label">Header & Footer</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="table" id="btn-table">Table</button>
        <button class="rbtn" data-action="pictures" id="btn-pictures">Pictures</button>
      </div><div class="ribbon-group-label">Tables & Images</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="smartart" id="btn-smartart">SmartArt</button>
        <button class="rbtn" data-action="wrap-square" id="btn-wrap">Wrap Text</button>
      </div><div class="ribbon-group-label">Illustrations</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="link" id="btn-link">🔗 Link</button>
        <button class="rbtn" data-action="pagebreak" id="btn-pagebreak">Page Break</button>
      </div><div class="ribbon-group-label">Links & Breaks</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="contentcontrol" id="btn-contentcontrol">Text Field</button>
      </div><div class="ribbon-group-label">Form Fields</div></div>`,

    layout: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="margin-narrow" id="btn-margin-narrow">Narrow</button>
        <button class="rbtn" data-action="margin-normal" disabled>Normal</button>
        <button class="rbtn" data-action="margin-wide" disabled>Wide</button>
      </div><div class="ribbon-group-label">Margins</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="portrait" disabled>Portrait</button>
        <button class="rbtn" data-action="landscape" id="btn-landscape">Landscape</button>
      </div><div class="ribbon-group-label">Orientation</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="sectionbreak" id="btn-sectionbreak">Section Break</button>
      </div><div class="ribbon-group-label">Breaks</div></div>`,

    'layout-table': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="merge" id="btn-merge">Merge Cells</button>
        <button class="rbtn" data-action="split" disabled>Split Cells</button>
      </div><div class="ribbon-group-label">Merge</div></div>`,

    references: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="toc" id="btn-toc">📖 Table of Contents</button>
      </div><div class="ribbon-group-label">TOC</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="footnote" id="btn-footnote">Insert Footnote</button>
      </div><div class="ribbon-group-label">Footnotes</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="citation" id="btn-citation">Insert Citation</button>
      </div><div class="ribbon-group-label">Citations</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="caption" id="btn-caption">Insert Caption</button>
      </div><div class="ribbon-group-label">Captions</div></div>`,

    review: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="track" id="btn-track">✎ Track Changes</button>
        <button class="rbtn" data-action="accept" id="btn-accept">✓ Accept All</button>
      </div><div class="ribbon-group-label">Tracking</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="comment" id="btn-comment">💬 New Comment</button>
      </div><div class="ribbon-group-label">Comments</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="compare" id="btn-compare">⇄ Compare</button>
        <button class="rbtn" data-action="restrict" id="btn-restrict">🔒 Restrict</button>
      </div><div class="ribbon-group-label">Protect</div></div>`,

    view: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="navpane" id="btn-navpane">Navigation Pane</button>
      </div><div class="ribbon-group-label">Show</div></div>`,

    'view-nav': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="navpane" id="btn-navpane">Navigation Pane</button>
      </div><div class="ribbon-group-label">Show</div></div>`,

    'view-outline': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="outline" id="btn-outline">Outline View</button>
      </div><div class="ribbon-group-label">Views</div></div>`,

    file: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="savetemplate" id="btn-savetemplate">💾 Save as Template</button>
      </div><div class="ribbon-group-label">Save</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="exportpdf" id="btn-exportpdf">📄 Export as PDF</button>
        <button class="rbtn" data-action="exporthtml" id="btn-exporthtml">🌐 Export as HTML</button>
      </div><div class="ribbon-group-label">Export</div></div>`,

    mailings: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="mergefield" id="btn-mergefield">« » Merge Field</button>
      </div><div class="ribbon-group-label">Write & Insert</div></div>`
  },

  excel: {
    home: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="bold" id="btn-bold">B</button>
        <button class="rbtn" data-action="italic" id="btn-italic">I</button>
        <button class="rbtn" data-action="underline" id="btn-underline">U</button>
      </div><div class="ribbon-group-label">Font</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="percent" id="btn-percent">%</button>
        <button class="rbtn" data-action="currency" id="btn-currency">$</button>
        <button class="rbtn" data-action="incdec" id="btn-incdec">.00→</button>
      </div><div class="ribbon-group-label">Number</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="borders" id="btn-borders">Borders</button>
        <button class="rbtn" data-action="fill" id="btn-fill">Fill</button>
      </div><div class="ribbon-group-label">Cells</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="condformat" id="btn-condformat">Conditional</button>
      </div><div class="ribbon-group-label">Styles</div></div>`,

    insert: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="insertPivot" id="btn-insertPivot">PivotTable</button>
        <button class="rbtn" data-action="insertTable" id="btn-insertTable">Table</button>
      </div><div class="ribbon-group-label">Tables</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="insertColumn" id="btn-insertColumn">Column</button>
        <button class="rbtn" data-action="insertLine" id="btn-insertLine">Line</button>
        <button class="rbtn" data-action="insertPie" id="btn-insertPie">Pie</button>
      </div><div class="ribbon-group-label">Charts</div></div>`,

    formulas: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="autosum" id="btn-autosum">AutoSum</button>
      </div><div class="ribbon-group-label">Function Library</div></div>`,

    data: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="sortAsc" id="btn-sortAsc">A→Z</button>
        <button class="rbtn" data-action="sortDesc" id="btn-sortDesc">Z→A</button>
      </div><div class="ribbon-group-label">Sort</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="filterToggle" id="btn-filterToggle">Filter</button>
      </div><div class="ribbon-group-label">Filter</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="validation" id="btn-validation">Data Validation</button>
      </div><div class="ribbon-group-label">Validation</div></div>`,

    review: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" disabled>New Comment</button>
        <button class="rbtn" disabled>Protect Sheet</button>
      </div><div class="ribbon-group-label">Protect</div></div>`,

    view: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" disabled>Gridlines</button>
        <button class="rbtn" disabled>Formula Bar</button>
      </div><div class="ribbon-group-label">Show</div></div>`
  },

  ppt: {
    home: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="newSlide" id="btn-newSlide">+ New Slide</button>
      </div><div class="ribbon-group-label">Slides</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="layout-title" id="btn-layout-title">Title</button>
        <button class="rbtn" data-action="layout-content" id="btn-layout-content">Content</button>
        <button class="rbtn" data-action="layout-section" id="btn-layout-section">Section</button>
        <button class="rbtn" data-action="layout-comparison" id="btn-layout-comparison">Comparison</button>
      </div><div class="ribbon-group-label">Layout</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="bold" id="btn-bold">B</button>
        <button class="rbtn" data-action="italic" id="btn-italic">I</button>
        <button class="rbtn" data-action="underline" id="btn-underline">U</button>
        <button class="rbtn" data-action="increaseSize" id="btn-increaseSize">A+</button>
      </div><div class="ribbon-group-label">Font</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="numbering" id="btn-numbering">1. Bullets</button>
      </div><div class="ribbon-group-label">Paragraph</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="duplicate" id="btn-duplicate">Duplicate</button>
        <button class="rbtn" data-action="delete" id="btn-delete">Delete</button>
        <button class="rbtn" data-action="moveUp" id="btn-moveUp">▲ Move Up</button>
      </div><div class="ribbon-group-label">Slide</div></div>`,

    insert: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="insertPicture" id="btn-insertPicture">Pictures</button>
        <button class="rbtn" data-action="crop" id="btn-crop">Crop</button>
      </div><div class="ribbon-group-label">Images</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="addRect" id="btn-addRect">Rectangle</button>
      </div><div class="ribbon-group-label">Shapes</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="insertChart" id="btn-insertChart">Chart</button>
        <button class="rbtn" data-action="insertPie" id="btn-insertPie">Pie</button>
        <button class="rbtn" data-action="insertLine" id="btn-insertLine">Line</button>
      </div><div class="ribbon-group-label">Charts</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="smartart" id="btn-smartart">SmartArt</button>
        <button class="rbtn" data-action="smartartCycle" id="btn-smartartCycle">Cycle</button>
      </div><div class="ribbon-group-label">SmartArt</div></div>`,

    design: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="theme-green" id="btn-theme-green">Green</button>
        <button class="rbtn" data-action="theme-blue" id="btn-theme-blue">Blue</button>
        <button class="rbtn" data-action="theme-serif" id="btn-theme-serif">Serif</button>
        <button class="rbtn" data-action="custom-teal" id="btn-custom-teal">Teal</button>
      </div><div class="ribbon-group-label">Themes</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="font-georgia" id="btn-font-georgia">Georgia</button>
      </div><div class="ribbon-group-label">Fonts</div></div>`,

    format: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="distribute" id="btn-distribute">Distribute</button>
        <button class="rbtn" data-action="group" id="btn-group">Group</button>
      </div><div class="ribbon-group-label">Arrange</div></div>`,

    transitions: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="transition-fade" id="btn-transition-fade">Fade</button>
        <button class="rbtn" data-action="transition-morph" id="btn-transition-morph">Morph</button>
        <button class="rbtn" data-action="preview" id="btn-preview">Preview</button>
      </div><div class="ribbon-group-label">Transition</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="applyAll" id="btn-applyAll">Apply to All</button>
      </div><div class="ribbon-group-label">All</div></div>`,

    animations: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="anim-fade" id="btn-anim-fade">Fade</button>
        <button class="rbtn" data-action="anim-fly" id="btn-anim-fly">Fly In</button>
      </div><div class="ribbon-group-label">Entrance</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="animPane" id="btn-animPane">Animation Pane</button>
      </div><div class="ribbon-group-label">Advanced</div></div>
      <div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="onClick" id="btn-onClick">On Click</button>
        <button class="rbtn" data-action="withPrev" id="btn-withPrev">With Previous</button>
      </div><div class="ribbon-group-label">Timing</div></div>`,

    view: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="sorter" id="btn-sorter">Slide Sorter</button>
        <button class="rbtn" data-action="outline" id="btn-outline">Outline</button>
        <button class="rbtn" data-action="slideshow" id="btn-slideshow">Slide Show</button>
        <button class="rbtn" data-action="notes" id="btn-notes">Notes</button>
      </div><div class="ribbon-group-label">Views</div></div>`,

    'slide-show': `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="presenterView" id="btn-presenterView">Presenter View</button>
        <button class="rbtn" data-action="rehearse" id="btn-rehearse">Rehearse Timings</button>
        <button class="rbtn" data-action="runShow" id="btn-runShow">Slide Show</button>
      </div><div class="ribbon-group-label">Present</div></div>`,

    file: `<div class="ribbon-group"><div class="ribbon-buttons">
        <button class="rbtn" data-action="exportPDF" id="btn-exportPDF">Export as PDF</button>
        <button class="rbtn" data-action="exportVideo" id="btn-exportVideo">Export as Video</button>
        <button class="rbtn" data-action="exportPNG" id="btn-exportPNG">Export as Images</button>
      </div><div class="ribbon-group-label">Export</div></div>`
  }
};
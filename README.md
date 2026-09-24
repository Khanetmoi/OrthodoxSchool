# Learn by Doing — Word · Excel · PowerPoint

An interactive, Brilliant-style learning platform for Microsoft Office. Learners don't just read about Word, Excel, or PowerPoint — they use a **live sandbox** of each application inside the browser, complete real tasks, and get instant feedback.

## What's inside

| Track | Modules | Lessons | Interactivity |
|---|---|---|---|
| 📄 **Word** | 10 | 30 | Ribbon, formatting, styles, TOC, track changes |
| 📊 **Excel** | 10 | 24 | Live grid, real formulas, in-cell editing, drag-to-fill, charts |
| 📽 **PowerPoint** | 10 | 25 | Slide editor, layouts, charts, SmartArt, slideshow mode |

**Total:** ~79 lessons across 30 modules.

## Try it

👉 **Live demo:** https://YOUR-USERNAME.github.io/REPO-NAME/

## Why this exists

Adults learning Office software don't want a video. They want to *do the thing* and see it work. This platform teaches the way Brilliant teaches math: short explanations, real interactions, immediate feedback, XP for progress.

Every lesson ends with a **portfolio piece** — a document, spreadsheet, or deck the learner would actually send to someone.

## Features

- **Real sandbox engines** — Word page, Excel grid (with formula parser), PowerPoint slide editor
- **Instant feedback** — wrong answers shake, right answers celebrate
- **Progressive learning** — each lesson builds on the last, ending in a portfolio artifact
- **Gamification** — XP, completion tracking, streaks (persisted in localStorage)
- **Keyboard support** — `Ctrl+B/I/U` in Word, arrows + `Enter` + drag-fill in Excel
- **Mobile-friendly** — works on phones and tablets
- **No backend** — pure static HTML/CSS/JS, deployed on GitHub Pages

## Tech

- Vanilla JavaScript (ES modules)
- No build step, no framework, no dependencies
- Multi-file architecture — every lesson is a data object, every sandbox is an engine
- Sound via Web Audio API (no audio files)

## Project structure
├── index.html
├── css/
│ ├── base.css # variables, reset
│ ├── app.css # topbar, views, buttons
│ ├── sandbox.css # shared window chrome
│ ├── word.css # Word-specific
│ ├── excel.css # Excel grid + formula bar
│ └── ppt.css # PPT slide editor
└── js/
├── main.js # entry point
├── core/ # state, storage, sound, UI, router
├── views/ # home, lesson, completion
├── engines/ # word, excel, ppt sandbox engines
└── content/ # curriculum + all lessons + ribbons
text


## Author

Built by [YOUR NAME] as a teaching tool for adult learners.

Replace YOUR-USERNAME, REPO-NAME, and YOUR NAME.
Step 2 — Test locally one more time

From your project folder:
bash

python3 -m http.server 8000

Open http://localhost:8000 and click through:

    Home → all three track tabs

    Word → Module 1 → complete 1 lesson

    Excel → Module 1 → complete 1 lesson + test drag-fill

    PPT → Module 1 → complete 1 lesson

    Refresh — XP should persist

If anything breaks, fix it now. It's much easier than after deploying.
Step 3 — Create the GitHub repo
Option A — GitHub web UI (easiest)

    Go to https://github.com/new

    Repository name: learn-by-doing (or office-tutor — anything you like)

    Description: "Interactive Word/Excel/PowerPoint tutor — Brilliant-style"

    Visibility: Public (required for free GitHub Pages) or Private (Pages still works on private repos with a Pro account — but public is fine here)

    Do NOT initialize with README, .gitignore, or license — you already have files

    Click Create repository

GitHub will show you a page with setup commands. Keep that tab open.
Option B — GitHub CLI (if you have gh installed)
bash

gh repo create learn-by-doing --public --source=. --push

Skips steps 4 and 5 below.
Step 4 — Push your code

Open a terminal in your project folder (where index.html lives).
bash

git init
git add .
git commit -m "Initial commit: interactive Word/Excel/PowerPoint tutor"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/learn-by-doing.git
git push -u origin main

Replace YOUR-USERNAME with your GitHub username. When prompted for a password, use a Personal Access Token (GitHub no longer accepts account passwords over HTTPS).

If you don't have a token yet:

    https://github.com/settings/tokens → Generate new token (classic)

    Scopes: check repo

    Copy the token

    Use it as the password in the git push prompt

Step 5 — Turn on GitHub Pages

    Open your repo on GitHub

    Click Settings (top tab)

    In the left sidebar, click Pages

    Under Source, select:

        Branch: main

        Folder: / (root)

    Click Save

Wait 30–90 seconds. Refresh the page. A green box will appear at the top:

    ✅ Your site is live at https://YOUR-USERNAME.github.io/learn-by-doing/

Step 6 — Verify the live site

Open the URL. Check:

    □

    The homepage loads
    □

    Track tabs switch (Word / Excel / PPT)
    □

    A lesson opens and the sandbox works
    □

    The console has no errors (F12 → Console)
    □

    It works on your phone too

If the site loads but lessons 404, it's usually because a filename has a capital letter in one place and lowercase in another. GitHub Pages servers are case-sensitive; your local machine probably isn't.

To find case mismatches, run this in your project root:
bash

# macOS / Linux
find . -name "*.js" -o -name "*.html" -o -name "*.css" | while read f; do
  grep -Hn "from ['\"]" "$f"
done | sort

Or just eyeball them. Common culprits: Index.js vs index.js, Main.js vs main.js.
Step 7 — Share the URL with your prospective employer

You can now send:

    Hi [name], I built a prototype of the interactive Office tutor we discussed.

    Live demo: https://YOUR-USERNAME.github.io/learn-by-doing/
    Source: https://github.com/YOUR-USERNAME/learn-by-doing

    It's a Brilliant-style platform — learners use a live sandbox of Word, Excel, and PowerPoint in the browser, complete real tasks, and get instant feedback. Currently ~79 lessons across 30 modules. All static, no backend, deploys in a single push.

    Would love your thoughts on the direction, especially which track to expand first.

That message plus a live link is genuinely impressive for a teaching role proposal.
Step 8 — Future updates

Once it's live, updating is one command:
bash

git add .
git commit -m "Add achievements system"
git push

GitHub Pages picks up the change in ~30 seconds. Refresh the live site and you're done.

No redeploy step. No drag-and-drop. No CI. It just works.
Optional polish for the demo

Since you're showing this to someone who might hire you, a few touches that punch above their weight:
A custom domain (5 min, free)

If you own a domain (or want one — Namecheap does .dev for ~$12/year), you can point it at GitHub Pages:

    In your repo, create a file called CNAME with one line: yourdomain.com

    In your domain registrar's DNS settings, add a CNAME record for www → YOUR-USERNAME.github.io

    In GitHub Pages settings, check Enforce HTTPS

A favicon

Create a 32×32 .png and drop it at the root as favicon.png, then add to <head> in index.html:
html

<link rel="icon" type="image/png" href="favicon.png">

A screenshot at the top of the README

Take a screenshot of the home page, save it as screenshot.png, and add to README:
markdown

![Screenshot](screenshot.png)

Nobody reads a README without a screenshot, but everybody reads one with.
Quick checklist

Before you push:

    □

    .nojekyll file exists (empty)
    □

    README.md written with your name and the live URL placeholder
    □

    Tested locally one last time (python3 -m http.server 8000)
    □

    No console errors
    □

    Works on mobile
    □

    All filenames match case-sensitively across imports

After you push:

    □

    Repo created on GitHub
    □

    git push succeeded
    □

    Pages enabled in Settings → Pages
    □

    Live URL loads
    □

    Lesson click-through works on the live URL
    □

    README link updated with the real URL
# Project Context: tiborh.github.io

This is a personal GitHub Pages site at https://tiborh.github.io/ showcasing JavaScript experiments.

## Structure

- `index.html` — main page with categorised list of experiments
- `style.css` — external stylesheet (extracted from inline styles)
- `javascript/` — individual experiment HTML files
- `dyngraph/` — force-directed graph simulation sub-project
- `html/` — additional HTML experiments (e.g., sine3.html)
- `TODO.md` — remaining improvement ideas

## Recent Changes (2026-07-19)

1. Narrowed header (4vh) and sidebar (4vw) as slim decorative elements
2. Added viewport meta tag for mobile
3. Title changed to "Javascript Experiments"
4. Dynamic font sizing: binary-search script fills available vertical space, capped at 10-item equivalent
5. `overflow: hidden` on body — no scrolling
6. CSS extracted to `style.css`
7. Responsive breakpoint at 600px hides sidebar/aside, collapses to single column
8. Experiments grouped into 5 categories: Canvas & Drawing, Colour & Visual, Graphs & Algorithms, Maths & Geometry, Interactions & DOM
9. One-line descriptions added to each item
10. Footer colour table labelled as "text encoded as colours"
11. Created `.gitignore` with `*~`, removed backup files from git tracking
12. Footer colour table cells enlarged to 2.5vh squares

## Design Principles

- Page should fill the viewport without scrolling; font auto-scales to fit
- Decorative header/sidebar kept slim
- The footer colour table is a playful cypher — text encoded as RGB colour cells (from the text-to-colour converter)
- Font size cap: never larger than what 10 items would need (prevents absurdly large text with few items)

## Remaining TODOs

See `TODO.md` for outstanding improvements (about section, dates, source links, back-to-index links, accessibility lang attr, dyngraph symlink).

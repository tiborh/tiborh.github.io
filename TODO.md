# Remaining Improvement Ideas for tiborh.github.io

## Content / Portfolio Improvements

- **Add an "About" section** — A short paragraph about who you are and why these experiments exist. Gives visitors context and makes the page more of a portfolio.

- **Add dates or ordering context** — State whether items are chronological, by complexity, or by topic. Helps visitors gauge progression.

- **Link to source code per demo** — A small "source" link next to each item so visitors can see the code without browser devtools.

- **Add a "back to index" link on sub-pages** — Currently only the browser back button works to return to the main page.

## Technical Debt

- ~~**Accessibility: add `lang="en"` to `<html>`** — Done. Also added skip-to-content link, ARIA landmarks (`<main>`, `aria-label` on nav/aside, `role="presentation"` on decorative sidenav).~~

- ~~**The `dyngraph/index.html` symlink** — Replaced with a git submodule pointing to `https://github.com/tiborh/dyngraph`. Update with `git submodule update --remote dyngraph`.~~

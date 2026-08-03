# tiborh.github.io

Personal GitHub Pages site — a collection of JavaScript experiments.

Live at: https://tiborh.github.io/

## Structure

- `index.html` — main page with categorised list of experiments
- `style.css` — site stylesheet
- `javascript/` — individual experiment HTML files
- `dyngraph/` — force-directed graph simulation (git submodule)
- `html/` — additional HTML experiments

## Submodules

The `dyngraph/` directory is a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) pointing to https://github.com/tiborh/dyngraph.

After cloning this repo:

```bash
git submodule init
git submodule update
```

Or clone with submodules in one step:

```bash
git clone --recurse-submodules https://github.com/tiborh/tiborh.github.io
```

To pull the latest version from the dyngraph repo:

```bash
git submodule update --remote dyngraph
git add dyngraph
git commit -m "Update dyngraph submodule"
```

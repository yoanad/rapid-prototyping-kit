---
name: screenshot-iterations
description: Use when asked to screenshot a feature's UI iterations (the HTML mockups under features/<slug>/iterations/) for review or sharing.
---

# Screenshot Iterations

Renders each `v*.html` mockup in a feature's `iterations/` folder to a full-page
PNG via headless Chromium — no dev server, files load straight from `file://`.

## Command

```bash
cd features/<slug>/iterations && mkdir -p screenshots
for f in v*.html; do
  node ../../../scripts/screenshot.js "file://$PWD/$f" "screenshots/${f%.html}.png" 1
done
```

`1280,900` is desktop viewport, default (set in `scripts/screenshot.js`). Narrow
it only if a brief is explicitly mobile-only — pass a different scale/viewport
by editing that call.

Skips `index.html` on purpose (`v*.html` glob) — it's just a links page, not a
mockup.

## First-run setup

Prerequisite: `cd scripts && npm install` once, to install Playwright.

If the command errors with `Executable doesn't exist at .../chrome-headless-shell`,
the cached browser binary is missing. Fix once:

```bash
npx --yes playwright install chromium
```

## Read the result

Screenshots aren't proof by themselves — `Read` the PNG after generating it to
confirm it rendered real content (cards, copy, colors) and not a blank page
(dead `<img>` src, JS error, wrong path).

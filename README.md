# Bolt · Visual Design prototype

A clickable prototype of the bolt.new workspace with a new **Visual Design** mode for direct, Figma-style editing of a live site: Alfred Chang's personal site in [`personal-site/`](personal-site/). Chat and AI are simulated; there is no backend.

```bash
npm install
npm run dev      # http://localhost:5173
```

- **Visual Design** (cursor + spark icon, left of Preview, or press `D`): click to select, double-click to edit text, use the floating toolbar, Inspector (right), and Layers (left). Selecting a stat tile, a "More about this role" panel, a problem-lens question, or "Explore the thinking" opens it so you can edit what's inside.
- **AI box in the toolbar**: wired for buttons. Any prompt animates the button; keywords like "pill", "sky blue", "orange", "secondary", "no shadow", "bigger" adjust the result.
- **Live sync**: every edit saves to localStorage automatically. Opening **Code** plays the "visual edits → code" animation and highlights the changed JSX lines.
- **Reset**: gear icon → "Reset prototype to original".

## How the site gets into the canvas

It's a look-and-feel copy of the real site, not the site itself:

- **Copy** comes straight from `personal-site/src/content.ts`, and the photo from `personal-site/public/alfred-chang.jpg`. Edit those and the prototype follows.
- **Styles** come straight from `personal-site/src/styles.css`. [`scope-site-css.ts`](scope-site-css.ts) (a PostCSS plugin in `vite.config.ts`) scopes it to `.site` at build time and turns its breakpoints into container queries, so it doesn't clash with the Bolt shell and the Desktop / Tablet / Mobile toggle drives the layout.
- **Markup** lives in [`src/site/sections/`](src/site/sections/), one file per real component, with the same elements and class names wrapped in `<E>` so each one can be selected. A markup change in `personal-site/src/components/` has to be mirrored here by hand.
- **Not included:** the `#bolt` page, the mobile menu panel, and the nav's active-section underline.

## Updating the copy on the personal site

The personal site links to a bundled copy at `personal-site/public/prototype/`. Rebuild it after changing the prototype:

```bash
cd personal-site && npm run bundle-prototype
```

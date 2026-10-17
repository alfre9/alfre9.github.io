# Bolt · Visual Design prototype

A clickable prototype of the bolt.new workspace with a new **Visual Design** mode for direct, Figma-style editing of a live site: Alfred Chang's personal site, which lives at the [repo root](../README.md). Chat and AI are simulated; there is no backend.

Run from the repo root (it shares the site's `node_modules`):

```bash
npm install
npm run dev:prototype   # http://localhost:5173
```

- **Visual Design** (cursor + spark icon, left of Preview, or press `D`): click to select, double-click to edit text, use the floating toolbar, Inspector (right), and Layers (left). Selecting a stat tile, a "More about this role" panel, a problem-lens question, or "Explore the thinking" opens it so you can edit what's inside.
- **AI box in the toolbar**: wired for buttons. Any prompt animates the button; keywords like "pill", "sky blue", "orange", "secondary", "no shadow", "bigger" adjust the result.
- **Apply on exit** (phase 1 in the PRD's Prioritization section): Visual Design is a strict mode. Edits there are a draft, counted in the strip as "N changes · not in code yet". Leaving it (**Apply**, `D`, or any other tab) plays a simulated AI pass that applies them all at once, then adds a chat reply and a version. Opening **Code** never syncs: it shows what's already applied and highlights the changed JSX lines. Drafts survive a reload (localStorage) and reopen Visual Design.
- **Reset**: gear icon → "Reset prototype to original".

## How the site gets into the canvas

It's a look-and-feel copy of the real site, not the site itself:

- **Copy** comes straight from the site's `src/content.ts`, and the photo from its `public/alfred-chang.jpg`. Edit those and the prototype follows.
- **Styles** come straight from the site's `src/styles.css`. [`scope-site-css.ts`](scope-site-css.ts) (a PostCSS plugin in `vite.config.ts`) scopes it to `.site` at build time and turns its breakpoints into container queries, so it doesn't clash with the Bolt shell and the Desktop / Tablet / Mobile toggle drives the layout.
- **Markup** lives in [`src/site/sections/`](src/site/sections/), one file per real component, with the same elements and class names wrapped in `<E>` so each one can be selected. A markup change in the site's `src/components/` has to be mirrored here by hand.
- **Not included:** the `#bolt` page, the mobile menu panel, and the nav's active-section underline.

## Updating the copy on the personal site

The personal site links to a bundled copy at `public/prototype/` (repo root). Rebuild it from the repo root after changing the prototype:

```bash
npm run bundle-prototype
```

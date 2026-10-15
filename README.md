# Alfred Chang · personal site

React + TypeScript + Vite. Static. No backend, database, auth, or API calls.

```bash
npm install
npm run dev       # http://localhost:5174
npm run build     # type-check + production build → dist/
npm run preview   # serve dist/ at http://localhost:4174
```

The Bolt Visual Design prototype lives in [`prototype/`](prototype/) and shares this folder's `node_modules`: `npm run dev:prototype` (http://localhost:5173). See [`prototype/README.md`](prototype/README.md).

## Editing content

Everything the site says lives in **`src/content.ts`**: identity, links, hero, career history, the problem lens, work stories, the reach figure, interests, contact copy, and the Bolt.new page. The PRD lives in **`src/prd.ts`**. Components only render it.

- Optional links (`linkedinUrl`, `resumeUrl`, `prototypeUrl`, project URLs) are `null`-able. A `null` link is **left off the page**, never rendered as a dead `#`.
- `reach.approvedForPublic = false` hides the 40M figure and keeps only the one-billion ambition.
- `hero.photo` points to `/public/alfred-chang.jpg`, a 640×800 head-and-shoulders crop of `profile picture.jpeg`. Replace that file to change the photo.
- `work.featured.screenshot` swaps the built-in illustration for an image in `/public`.
- See **`CONTENT_NOTES.md`** for which lines are résumé-backed, self-reported, draft, or hypothesis, and what still needs approval.

## The Bolt.new page (`/#bolt`)

A separate view for the Bolt.new team, linked only from the footer ("For the Bolt.new team"). It isn't part of the main scroll, and you can send the link directly: `https://<your-domain>/#bolt`. Copy lives in `forBolt` in `content.ts`.

The page is built to walk through in an interview: the hero, then three "slides" (**01 The problem**, **02 The proposal**, **03 Building on Bolt**), then the first 90 days and contact. Each slide has its own deep link: `#bolt-problem`, `#bolt-proposal`, `#bolt-prototype`.

## The PRD page (`/#bolt-prd`)

The full Visual Design PRD, with a sticky contents list. Copy lives in **`src/prd.ts`**. It's linked from the Bolt page ("Read the full PRD" next to "Open the prototype", plus a link under the proposal) and from the main site's prototype case study ("Read the PRD"). Every PRD section has a deep link such as `#prd-requirements` or `#prd-risks`. Tables turn into one card per row below 700px.

### How the hash routing works

- `#bolt-prd` and any `#prd-…` anchor show the PRD.
- `#bolt` and any `#bolt-…` anchor show the Bolt page.
- Any other anchor, such as a nav link, "Back to the main site", or "Read the case study", switches back to the main site and scrolls to that section.
- The `#main` skip link keeps the current view.

## The Bolt prototype link

`prototypeUrl` defaults to `/prototype/index.html`, a copy of the Visual Design prototype ([`prototype/`](prototype/)) built into `public/prototype/`:

```bash
npm run bundle-prototype   # builds prototype/ into public/prototype with base /prototype/
```

Re-run it whenever the prototype changes. To host the prototype elsewhere instead, set `site.prototypeUrl` to that URL and delete `public/prototype/`.

## Deploying

`dist/` is a plain static site and works on Vercel, Netlify, Cloudflare Pages, or GitHub Pages. On Vercel or Netlify, the defaults work from the repo root: build command `npm run build`, output directory `dist`.

## Structure

```
prototype/              the Bolt Visual Design prototype (its own Vite app; see prototype/README.md)
public/prototype/       built copy of the prototype, served at /prototype/
src/
  content.ts            all copy, dates, links, flags
  prd.ts                the Visual Design PRD (/#bolt-prd) + its table of contents
  styles.css            design tokens + all styles (neo-brutalist)
  App.tsx               section order + main / #bolt / #bolt-prd view switch
  components/
    Header.tsx          sticky nav, LinkedIn, mobile menu, active-section highlight
    Hero.tsx            hello, photo (/public/alfred-chang.jpg), and intro
    Journey.tsx         date chart with role titles + timeline (perspective, accomplishments)
    HowIThink.tsx       problem lens (interactive) + SVG diagram
    Work.tsx            case studies, builder card, featured prototype
    Reach.tsx           40M / 1B proportional figure
    Beyond.tsx          badminton / strategy board / pickleball SVGs
    Contact.tsx         contact + footer (footer links to #bolt)
    ForBolt.tsx         Bolt.new page: stats, problem, proposal, prototype, first 90 days
    Prd.tsx             PRD page: contents list, problem cards, tables that stack on phones
    ui.tsx              section heading helpers
```

## Accessibility notes

- Semantic landmarks, a skip link, one `h1`, and section headings in order.
- Visible 4px focus ring on every interactive element; keyboard order follows the page.
- The problem lens uses `aria-expanded` buttons. All four questions and their one-line summaries are always visible, and selecting one opens the longer explanation.
- Journey details use native `<details>`. Role, dates, perspective, and main accomplishment are visible without opening them.
- Switching to the Bolt page or the PRD moves focus to its heading and updates the document title.
- PRD tables have a screen-reader caption and row headers. On phones the column headers are visually hidden and repeated as a label on each cell.
- `prefers-reduced-motion` disables smooth scrolling and all transitions/animations; the illustrations then change state instantly.
- No horizontal scrolling from 320px up.

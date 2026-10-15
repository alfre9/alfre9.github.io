import siteCss from '../../personal-site/src/styles.css?raw';
import type { Doc } from '../editor/store';

export interface GenFile {
  path: string;
  content: string;
  changedLines: Set<number>;
  lang: 'tsx' | 'css' | 'json' | 'html';
}

const SKIP_ATTRS = new Set(['class', 'style', 'contenteditable', 'spellcheck']);
const SVG_ATTR: Record<string, string> = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  viewbox: 'viewBox',
};

const pascal = (s: string) =>
  s
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');

const jsxText = (t: string) => t.replace(/[{}<>]/g, (c) => `{"${c}"}`);

function styleLiteral(style: Record<string, string> | undefined): string | null {
  if (!style) return null;
  const entries = Object.entries(style).filter(([k]) => k !== 'transition');
  if (!entries.length) return null;
  const body = entries.map(([k, v]) => `${k.startsWith('--') ? JSON.stringify(k) : k}: ${JSON.stringify(v)}`).join(', ');
  return `{{ ${body} }}`;
}

interface Ctx {
  doc: Doc;
  changed: Set<string>;
  icons: Set<string>;
  lines: string[];
  marks: Set<number>;
}

function attrsOf(el: Element, ctx: Ctx): string[] {
  const out: string[] = [];
  const vid = (el as HTMLElement).dataset?.vid;
  const cls = Array.from(el.classList).join(' ');
  if (cls) out.push(`className="${cls}"`);
  for (const a of Array.from(el.attributes)) {
    if (SKIP_ATTRS.has(a.name) || a.name.startsWith('data-')) continue;
    const name = el instanceof SVGElement ? SVG_ATTR[a.name] ?? a.name : a.name;
    out.push(`${name}="${a.value.replace(/"/g, '&quot;')}"`);
  }
  const style = styleLiteral(vid ? ctx.doc[vid]?.style : undefined);
  if (style) out.push(`style=${style}`);
  return out;
}

function lucideName(el: Element): string | null {
  if (el.tagName.toLowerCase() !== 'svg') return null;
  const c = Array.from(el.classList).find((x) => x.startsWith('lucide-'));
  return c ? pascal(c.replace(/^lucide-/, '').replace(/-icon$/, '')) : null;
}

function serialize(el: Element, depth: number, ctx: Ctx) {
  const pad = '  '.repeat(depth);
  const vid = (el as HTMLElement).dataset?.vid;
  if (vid && ctx.doc[vid]?.hidden) {
    ctx.lines.push(`${pad}{/* “${(el as HTMLElement).dataset.label ?? vid}” hidden in Visual Design */}`);
    if (ctx.changed.has(vid)) ctx.marks.add(ctx.lines.length);
    return;
  }
  const mark = () => vid && ctx.changed.has(vid) && ctx.marks.add(ctx.lines.length);

  const icon = lucideName(el);
  if (icon) {
    ctx.icons.add(icon);
    const size = el.getAttribute('width');
    const sw = el.getAttribute('stroke-width');
    ctx.lines.push(`${pad}<${icon} size={${size}}${sw && sw !== '2' ? ` strokeWidth={${sw}}` : ''} />`);
    return;
  }

  const tag = el.tagName.toLowerCase();
  const attrs = attrsOf(el, ctx);
  const kids = Array.from(el.childNodes).filter((n) => n.nodeType === 1 || (n.nodeType === 3 && n.textContent!.trim()));
  const onlyText = kids.length === 1 && kids[0].nodeType === 3;
  const oneLineAttrs = attrs.length ? ` ${attrs.join(' ')}` : '';
  const multiline = oneLineAttrs.length + pad.length + tag.length > 96;

  const open = (close: string) => {
    if (!multiline) {
      ctx.lines.push(`${pad}<${tag}${oneLineAttrs}${close}`);
      mark();
      return;
    }
    ctx.lines.push(`${pad}<${tag}`);
    mark();
    for (const a of attrs) {
      ctx.lines.push(`${pad}  ${a}`);
      mark();
    }
    ctx.lines.push(`${pad}${close.trim() === '/>' ? '/>' : '>'}`);
  };

  if (!kids.length) {
    open(' />');
    return;
  }
  if (onlyText) {
    const text = jsxText(kids[0].textContent!.replace(/\s+/g, ' ').trim());
    if (!multiline && pad.length + tag.length * 2 + oneLineAttrs.length + text.length < 110 && !text.includes('\n')) {
      ctx.lines.push(`${pad}<${tag}${oneLineAttrs}>${text}</${tag}>`);
      mark();
      return;
    }
  }
  open('>');
  for (const k of kids) {
    if (k.nodeType === 3) {
      const raw = k.textContent!;
      const lines = raw.includes('\n') && tag === 'code' ? raw.split('\n') : [raw.replace(/\s+/g, ' ').trim()];
      for (const l of lines) {
        ctx.lines.push(tag === 'code' ? `${pad}  {${JSON.stringify(l)}}` : `${pad}  ${jsxText(l)}`);
        if (vid && ctx.changed.has(vid) && ctx.doc[vid]?.text !== undefined) ctx.marks.add(ctx.lines.length);
      }
    } else {
      serialize(k as Element, depth + 1, ctx);
    }
  }
  ctx.lines.push(`${pad}</${tag}>`);
}

/** Opening tag on a single line — used for the compile animation. */
export function openingTag(el: Element, doc: Doc): string {
  const ctx: Ctx = { doc, changed: new Set(), icons: new Set(), lines: [], marks: new Set() };
  const attrs = attrsOf(el, ctx);
  const tag = el.tagName.toLowerCase();
  return `<${tag}${attrs.length ? ` ${attrs.join(' ')}` : ''}>`;
}

const PKG = `{
  "name": "alfred-chang-site",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.453.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "^5.6.3",
    "vite": "^5.4.10"
  }
}`;

const INDEX_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alfred Chang · Staff Product Manager</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

const MAIN = `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`;

/** Header and Footer sit outside <main>, as in the real App.tsx. */
const CHROME = new Set(['Header', 'Footer']);

export function generateFiles(root: HTMLElement, doc: Doc, changed: Set<string>): GenFile[] {
  const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-file]'));
  const files: GenFile[] = [];
  for (const s of sections) {
    const name = s.dataset.file!;
    const ctx: Ctx = { doc, changed, icons: new Set(), lines: [], marks: new Set() };
    serialize(s, 2, ctx);
    const header: string[] = [];
    if (ctx.icons.size) header.push(`import { ${[...ctx.icons].sort().join(', ')} } from "lucide-react";`, '');
    header.push(`export function ${name}() {`, '  return (');
    const offset = header.length;
    const content = [...header, ...ctx.lines, '  );', '}', ''].join('\n');
    files.push({
      path: `src/components/${name}.tsx`,
      content,
      changedLines: new Set([...ctx.marks].map((n) => n + offset)),
      lang: 'tsx',
    });
  }
  const names = sections.map((s) => s.dataset.file!);
  const app = [
    ...names.map((n) => `import { ${n} } from "./components/${n}";`),
    '',
    'export default function App() {',
    '  return (',
    '    <>',
    ...names.filter((n) => n === 'Header').map((n) => `      <${n} />`),
    '      <main id="main" tabIndex={-1}>',
    ...names.filter((n) => !CHROME.has(n)).map((n) => `        <${n} />`),
    '      </main>',
    ...names.filter((n) => n === 'Footer').map((n) => `      <${n} />`),
    '    </>',
    '  );',
    '}',
    '',
  ].join('\n');
  return [
    { path: 'index.html', content: INDEX_HTML, changedLines: new Set(), lang: 'html' },
    { path: 'package.json', content: PKG, changedLines: new Set(), lang: 'json' },
    { path: 'src/main.tsx', content: MAIN, changedLines: new Set(), lang: 'tsx' },
    { path: 'src/App.tsx', content: app, changedLines: new Set(), lang: 'tsx' },
    { path: 'src/styles.css', content: siteCss, changedLines: new Set(), lang: 'css' },
    ...files,
  ];
}

import { useLayoutEffect, useState } from 'react';
import type { Kind } from './E';
import { useDoc, useEditor } from './store';

/** The personal site's palette (personal-site/src/styles.css). */
export const TOKENS = [
  { name: 'Sky', hex: '#87CEEB' },
  { name: 'Lime', hex: '#D7FF28' },
  { name: 'Coral', hex: '#FF6E6C' },
  { name: 'Blue', hex: '#0EA5E9' },
  { name: 'Orange', hex: '#F16122' },
  { name: 'Purple', hex: '#B79CFF' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Yellow', hex: '#FFD23F' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
];

export const FONTS = [
  { label: 'Archivo Black', value: "'Archivo Black', sans-serif" },
  { label: 'Space Grotesk', value: "'Space Grotesk', sans-serif" },
  { label: 'JetBrains Mono', value: "'JetBrains Mono', monospace" },
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'Courier Prime', value: "'Courier Prime', monospace" },
  { label: 'DM Serif Display', value: "'DM Serif Display', serif" },
];

export function toHex(color: string): { hex: string; alpha: number } {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) {
    if (color.startsWith('#')) return { hex: color.toUpperCase(), alpha: 1 };
    return { hex: '#000000', alpha: color === 'transparent' ? 0 : 1 };
  }
  const parts = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  const [r, g, b] = parts;
  const alpha = parts.length > 3 ? parts[3] : 1;
  const h = (n: number) => Math.round(n).toString(16).padStart(2, '0');
  return { hex: `#${h(r)}${h(g)}${h(b)}`.toUpperCase(), alpha };
}

export function normalizeHex(input: string): string | null {
  let v = input.trim().replace(/^#/, '');
  if (/^[0-9a-f]{3}$/i.test(v)) v = v.split('').map((c) => c + c).join('');
  if (/^[0-9a-f]{6}$/i.test(v)) return `#${v.toUpperCase()}`;
  return null;
}

/** Relative luminance → pick readable text color for a fill. */
export function readableOn(hex: string): string {
  const n = normalizeHex(hex);
  if (!n) return '#000000';
  const c = [1, 3, 5].map((i) => {
    const x = parseInt(n.slice(i, i + 2), 16) / 255;
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  });
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.4 ? '#000000' : '#FFFFFF';
}

export interface Shadow {
  on: boolean;
  x: number;
  y: number;
  blur: number;
  color: string;
}
export function parseShadow(v: string): Shadow {
  if (!v || v === 'none') return { on: false, x: 6, y: 6, blur: 0, color: '#000000' };
  const color = v.match(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/i)?.[0] ?? '#000';
  const nums = v
    .replace(color, '')
    .match(/-?\d+(\.\d+)?px/g)
    ?.map((n) => parseFloat(n)) ?? [0, 0, 0];
  return { on: true, x: nums[0] ?? 0, y: nums[1] ?? 0, blur: nums[2] ?? 0, color: toHex(color).hex };
}
export function shadowCss(s: Shadow) {
  return s.on ? `${s.x}px ${s.y}px ${s.blur}px ${s.color}` : 'none';
}

export interface Snapshot {
  kind: Kind;
  label: string;
  tag: string;
  width: number;
  height: number;
  display: string;
  flexDirection: string;
  gap: number;
  alignItems: string;
  justifyContent: string;
  padX: number;
  padY: number;
  rotate: number;
  opacity: number;
  radius: number;
  fill: { hex: string; alpha: number };
  color: string;
  strokeWidth: number;
  strokeColor: string;
  shadow: Shadow;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: number;
  textAlign: string;
  textTransform: string;
  href: string | null;
  target: string | null;
  text: string;
  isLeafText: boolean;
}

export function readSnapshot(el: HTMLElement): Snapshot {
  const cs = getComputedStyle(el);
  const r = el.getBoundingClientRect();
  const fontSize = parseFloat(cs.fontSize) || 16;
  const lh = cs.lineHeight === 'normal' ? 'Auto' : (parseFloat(cs.lineHeight) / fontSize).toFixed(2).replace(/\.?0+$/, '');
  const fam = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
  return {
    kind: (el.dataset.kind as Kind) ?? 'container',
    label: el.dataset.label ?? '',
    tag: el.tagName.toLowerCase(),
    width: Math.round(r.width),
    height: Math.round(r.height),
    display: cs.display,
    flexDirection: cs.flexDirection,
    gap: parseFloat(cs.columnGap) || 0,
    alignItems: cs.alignItems,
    justifyContent: cs.justifyContent,
    padX: parseFloat(cs.paddingLeft) || 0,
    padY: parseFloat(cs.paddingTop) || 0,
    rotate: cs.rotate && cs.rotate !== 'none' ? parseFloat(cs.rotate) : 0,
    opacity: Math.round(parseFloat(cs.opacity) * 100),
    radius: parseFloat(cs.borderTopLeftRadius) || 0,
    fill: toHex(cs.backgroundColor),
    color: toHex(cs.color).hex,
    strokeWidth: cs.borderTopStyle === 'none' ? 0 : parseFloat(cs.borderTopWidth) || 0,
    strokeColor: toHex(cs.borderTopColor).hex,
    shadow: parseShadow(cs.boxShadow),
    fontFamily: fam,
    fontSize: Math.round(fontSize),
    fontWeight: parseInt(cs.fontWeight, 10) || 400,
    lineHeight: lh,
    letterSpacing: Math.round(((parseFloat(cs.letterSpacing) || 0) / fontSize) * 1000) / 10,
    textAlign: cs.textAlign === 'start' ? 'left' : cs.textAlign,
    textTransform: cs.textTransform,
    href: el.getAttribute('href'),
    target: el.getAttribute('target'),
    text: el.textContent ?? "",
    isLeafText: isLeafText(el),
  };
}

export function isLeafText(el: HTMLElement) {
  const k = el.dataset.kind;
  return (k === 'text' || k === 'heading' || k === 'link' || k === 'button') && el.children.length === 0;
}

/** Live computed snapshot of an element, refreshed after each document change. */
export function useSnapshot(id: string | null): Snapshot | null {
  const { getEl, device } = useEditor();
  const { doc } = useDoc();
  const [snap, setSnap] = useState<Snapshot | null>(null);
  useLayoutEffect(() => {
    const el = getEl(id);
    if (!el) {
      setSnap(null);
      return;
    }
    const refresh = () => setSnap(readSnapshot(el));
    refresh();
    // AI edits animate; re-read once the transition settles.
    const t = setTimeout(refresh, 700);
    const ro = new ResizeObserver(refresh);
    ro.observe(el);
    el.addEventListener('transitionend', refresh);
    return () => {
      clearTimeout(t);
      ro.disconnect();
      el.removeEventListener('transitionend', refresh);
    };
  }, [id, doc, device, getEl]);
  return snap;
}

export function friendlyName(el: HTMLElement): string {
  const k = el.dataset.kind;
  if ((k === 'text' || k === 'heading') && el.children.length === 0) {
    const t = el.innerText.replace(/\s+/g, ' ').trim();
    if (t) return t.length > 28 ? `${t.slice(0, 28)}…` : t;
  }
  return el.dataset.label ?? k ?? 'Layer';
}

export interface LayerNode {
  id: string;
  kind: Kind;
  name: string;
  hidden: boolean;
  children: LayerNode[];
}

export function buildLayerTree(root: Element): LayerNode[] {
  const out: LayerNode[] = [];
  for (const child of Array.from(root.children)) {
    const el = child as HTMLElement;
    if (el.dataset?.vid) {
      out.push({
        id: el.dataset.vid,
        kind: el.dataset.kind as Kind,
        name: friendlyName(el),
        hidden: el.style.display === 'none',
        children: buildLayerTree(el),
      });
    } else if (!(el instanceof SVGElement)) {
      out.push(...buildLayerTree(el));
    }
  }
  return out;
}

export function ancestorsOf(el: HTMLElement | null): HTMLElement[] {
  const chain: HTMLElement[] = [];
  let cur = el;
  while (cur) {
    if (cur.dataset?.vid) chain.unshift(cur);
    cur = cur.parentElement;
    if (cur?.classList.contains('site')) break;
  }
  return chain;
}

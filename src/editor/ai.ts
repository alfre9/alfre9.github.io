import { useCallback } from 'react';
import { useChat } from '../shell/chatStore';
import { friendlyName, normalizeHex, readableOn, toHex } from './dom';
import { useDocApi, useEditor } from './store';

/*
 * Prototype "AI" for the contextual toolbar. No model is called: the prompt is
 * matched against a few intents and the result is animated onto the button.
 * Default (nothing recognised) = the demo edit: rounded corners + non-CTA style.
 */

interface Step {
  label: string;
  style: Record<string, string>;
}

const COLOR_WORDS: [RegExp, string, string][] = [
  [/sky|light blue|baby blue/, '#87CEEB', 'sky blue'],
  [/lime|neon|green/, '#D7FF28', 'lime'],
  [/yellow|gold/, '#FFD23F', 'yellow'],
  [/orange/, '#F16122', 'orange'],
  [/coral|salmon|red|pink/, '#FF6E6C', 'coral'],
  [/purple|violet|lavender/, '#B79CFF', 'purple'],
  [/turquoise|teal|aqua|cyan/, '#40E0D0', 'turquoise'],
  [/\bblue\b/, '#0EA5E9', 'blue'],
  [/black|ink/, '#000000', 'black'],
  [/white/, '#FFFFFF', 'white'],
];

export function planButtonEdit(prompt: string, el: HTMLElement): Step[] {
  const p = prompt.toLowerCase();
  const cs = getComputedStyle(el);
  const fill = toHex(cs.backgroundColor).hex;
  const radiusNow = parseFloat(cs.borderTopLeftRadius) || 0;
  const steps: Step[] = [];

  let radius: string | null = null;
  if (/pill|capsule|fully round|super round/.test(p)) radius = '999px';
  else if (/sharp|square|hard corner|no radius|brutal/.test(p)) radius = '0px';
  else if (/round|soft|curv|corner|radius/.test(p)) radius = '14px';

  const secondary = /secondary|non[- ]?cta|ghost|outline|subtle|less (prominent|loud)|tone (it )?down|quiet|neutral/.test(p);
  const primary = !secondary && /\bprimary\b|\bcta\b|prominent|stand out|main action/.test(p);

  let color: { hex: string; name: string } | null = null;
  for (const [re, hex, name] of COLOR_WORDS) {
    if (re.test(p)) {
      color = { hex, name };
      break;
    }
  }
  const custom = p.match(/#?\b([0-9a-f]{6}|[0-9a-f]{3})\b/i);
  if (custom && normalizeHex(custom[1])) color = { hex: normalizeHex(custom[1])!, name: normalizeHex(custom[1])! };

  let shadow: string | null = null;
  if (/no shadow|flat|remove (the )?shadow/.test(p)) shadow = 'none';
  else if (/(big|bigg|more|deep)\w* shadow|pop/.test(p)) shadow = '10px 10px 0px #000000';

  let size: 'up' | 'down' | null = null;
  if (/bigger|larger|increase|grow/.test(p) && !/shadow/.test(p)) size = 'up';
  if (/smaller|compact|shrink|decrease/.test(p)) size = 'down';

  const nothing = !radius && !secondary && !primary && !color && !shadow && !size;
  if (nothing) radius = radiusNow > 0 ? '999px' : '14px';

  if (radius) steps.push({ label: `Corners ${Math.round(radiusNow)}px → ${radius === '999px' ? 'pill' : radius}`, style: { borderRadius: radius } });

  if (secondary || nothing) {
    const alreadyLight = readableOn(fill) === '#000000';
    const bg = alreadyLight && fill !== '#87CEEB' ? '#87CEEB' : '#FFFFFF';
    steps.push({
      label: `Fill ${fill} → ${bg} (secondary)`,
      style: { backgroundColor: bg, color: '#000000', borderColor: '#000000' },
    });
    steps.push({ label: 'Shadow softened to 4px', style: { boxShadow: '4px 4px 0px #000000' } });
  } else if (primary) {
    steps.push({ label: `Fill ${fill} → #000000 (primary CTA)`, style: { backgroundColor: '#000000', color: '#FFFFFF' } });
  }
  if (color) {
    steps.push({
      label: `Fill → ${color.name}`,
      style: { backgroundColor: color.hex, color: readableOn(color.hex) },
    });
  }
  if (shadow) steps.push({ label: shadow === 'none' ? 'Shadow removed' : 'Shadow deepened to 10px', style: { boxShadow: shadow } });
  if (size) {
    const fs = parseFloat(cs.fontSize);
    const px = parseFloat(cs.paddingLeft);
    const py = parseFloat(cs.paddingTop);
    const k = size === 'up' ? 1.18 : 0.85;
    steps.push({
      label: size === 'up' ? 'Scaled up 18%' : 'Made more compact',
      style: {
        fontSize: `${Math.round(fs * k)}px`,
        paddingLeft: `${Math.round(px * k)}px`,
        paddingRight: `${Math.round(px * k)}px`,
        paddingTop: `${Math.round(py * k)}px`,
        paddingBottom: `${Math.round(py * k)}px`,
      },
    });
  }
  return steps;
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function useAiRunner() {
  const api = useDocApi();
  const chat = useChat();
  const { getEl, setAi, setAnimating, select } = useEditor();

  return useCallback(
    async (targetId: string, prompt: string) => {
      // A selected label/icon inside a button edits the button itself.
      const el = getEl(targetId)?.closest<HTMLElement>('[data-kind="button"]') ?? getEl(targetId);
      if (!el) return;
      const id = el.dataset.vid!;
      if (id !== targetId) select(id);
      if (el.dataset.kind !== 'button') {
        setAi({ id, prompt, phase: 'unsupported', steps: [] });
        return;
      }
      const name = friendlyName(el);
      const steps = planButtonEdit(prompt, el);
      setAi({ id, prompt, phase: 'thinking', steps: steps.map((s) => ({ label: s.label, done: false })) });
      await wait(1100);
      setAnimating(id);
      setAi((a) => (a ? { ...a, phase: 'applying' } : a));
      const key = `ai:${id}:${Date.now()}`;
      for (let i = 0; i < steps.length; i++) {
        await wait(i === 0 ? 150 : 520);
        api.setStyle(id, steps[i].style, key);
        setAi((a) => (a ? { ...a, steps: a.steps.map((s, j) => (j === i ? { ...s, done: true } : s)) } : a));
      }
      await wait(700);
      setAnimating(null);
      setAi((a) => (a ? { ...a, phase: 'done' } : a));
      chat.add({
        role: 'assistant',
        badge: 'Visual Design · AI edit',
        text: `Updated the “${name}” button from your prompt “${prompt.trim() || 'make it rounded & secondary'}”:\n${steps
          .map((s) => `• ${s.label}`)
          .join('\n')}\nChanges are live and saved — they'll be written to code next time you open Code.`,
      });
    },
    [api, chat, getEl, setAi, setAnimating, select],
  );
}

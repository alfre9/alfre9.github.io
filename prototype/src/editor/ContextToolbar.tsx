import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowUp,
  Bold,
  CaseUpper,
  Check,
  CornerUpLeft,
  EyeOff,
  GripVertical,
  Link2,
  Loader2,
  Minus,
  PaintBucket,
  Plus,
  Square,
  SquareDashed,
  Sparkles,
  Undo2,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useToast } from '../shell/toast';
import { SECTION_LINKS } from '../site/anchors';
import { useAiRunner } from './ai';
import { ColorPanel, ScrubInput, Toggle, useOutside } from './controls';
import { useSnapshot, type Snapshot } from './dom';
import { TEXT_KINDS } from './E';
import { useDocApi, useEditor } from './store';

type Pop = 'text' | 'fill' | 'radius' | 'link' | 'stroke' | null;

const SUGGESTIONS = ['Round the corners & make it secondary', 'Make it a pill', 'Make it sky blue', 'Back to a sharp primary CTA'];

function TbBtn({
  title,
  active,
  onClick,
  children,
  disabled,
}: {
  title: string;
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className={`ctb__btn ${active ? 'is-active' : ''}`}
      data-tip={title}
      aria-label={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function ContextToolbar({ id, onGrip }: { id: string; onGrip: (e: React.PointerEvent) => void }) {
  const snap = useSnapshot(id);
  const api = useDocApi();
  const toast = useToast();
  const { select, ai, setAi } = useEditor();
  const runAi = useAiRunner();
  const [pop, setPop] = useState<Pop>(null);
  const [prompt, setPrompt] = useState('');
  const [aiFocus, setAiFocus] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutside(ref, () => setPop(null), pop !== null);

  useEffect(() => {
    setPop(null);
    setPrompt('');
  }, [id]);

  if (!snap) return null;
  const k = snap.kind;
  const texty = TEXT_KINDS.includes(k) || k === 'container' || k === 'section';
  const isIcon = k === 'icon' || k === 'graphic';
  const linky = k === 'button' || k === 'link';
  const run = ai && ai.id === id ? ai : null;
  const busy = run?.phase === 'thinking' || run?.phase === 'applying';
  const set = (patch: Record<string, string | undefined>, key: string) => api.setStyle(id, patch, `${id}:${key}`);
  const toggle = (p: Exclude<Pop, null>) => setPop((cur) => (cur === p ? null : p));

  const submit = (text = prompt) => {
    if (busy) return;
    setAiFocus(false);
    setPrompt('');
    runAi(id, text);
  };

  const iconSize = isIcon ? iconPx(id) : 0;
  const AlignIcon = snap.textAlign === 'center' ? AlignCenter : snap.textAlign === 'right' ? AlignRight : AlignLeft;

  return (
    <div className="ctb" ref={ref}>
      <div className="ctb__bar">
        <span className="ctb__grip" onPointerDown={onGrip} title="Drag toolbar">
          <GripVertical size={16} />
        </span>

        {texty && (
          <>
            <div className="ctb__stepper">
              <button type="button" aria-label="Decrease font size" onClick={() => set({ fontSize: `${Math.max(8, snap.fontSize - 1)}px` }, 'fs')}>
                <Minus size={14} />
              </button>
              <input
                aria-label="Font size"
                value={snap.fontSize}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  if (v > 0) set({ fontSize: `${v}px` }, 'fs');
                }}
              />
              <button type="button" aria-label="Increase font size" onClick={() => set({ fontSize: `${snap.fontSize + 1}px` }, 'fs')}>
                <Plus size={14} />
              </button>
            </div>
            <TbBtn
              title="Bold"
              active={snap.fontWeight >= 600}
              onClick={() => set({ fontWeight: snap.fontWeight >= 600 ? '400' : '700' }, 'fw')}
            >
              <Bold size={16} />
            </TbBtn>
            <TbBtn
              title={`Align ${snap.textAlign}`}
              onClick={() => {
                const order = ['left', 'center', 'right'];
                const next = order[(order.indexOf(snap.textAlign) + 1) % 3] ?? 'left';
                set({ textAlign: next }, 'ta');
              }}
            >
              <AlignIcon size={16} />
            </TbBtn>
            <TbBtn
              title={snap.textTransform === 'uppercase' ? 'Sentence case' : 'Uppercase'}
              active={snap.textTransform === 'uppercase'}
              onClick={() => set({ textTransform: snap.textTransform === 'uppercase' ? 'none' : 'uppercase' }, 'tt')}
            >
              <CaseUpper size={17} />
            </TbBtn>
          </>
        )}

        {isIcon && (
          <div className="ctb__stepper">
            <button type="button" aria-label="Smaller icon" onClick={() => set({ '--icon-size': `${Math.max(8, iconSize - 2)}px` }, 'is')}>
              <Minus size={14} />
            </button>
            <input aria-label="Icon size" value={iconSize} readOnly />
            <button type="button" aria-label="Larger icon" onClick={() => set({ '--icon-size': `${iconSize + 2}px` }, 'is')}>
              <Plus size={14} />
            </button>
          </div>
        )}

        {linky && (
          <TbBtn title="Link" active={pop === 'link'} onClick={() => toggle('link')}>
            <Link2 size={16} />
          </TbBtn>
        )}

        <span className="ctb__sep" />

        {!isIcon && (
          <TbBtn title="Corner radius" active={pop === 'radius'} onClick={() => toggle('radius')}>
            <CornerIcon />
          </TbBtn>
        )}
        <TbBtn title={isIcon ? 'Icon color' : 'Text color'} active={pop === 'text'} onClick={() => toggle('text')}>
          <span className="ctb__aa">
            Aa
            <i style={{ background: snap.color }} />
          </span>
        </TbBtn>
        {!isIcon && (
          <>
            <TbBtn title="Fill" active={pop === 'fill'} onClick={() => toggle('fill')}>
              <span className="ctb__aa">
                <PaintBucket size={16} />
                <i
                  className={snap.fill.alpha === 0 ? 'is-none' : ''}
                  style={{ background: snap.fill.alpha === 0 ? undefined : snap.fill.hex }}
                />
              </span>
            </TbBtn>
            <TbBtn title="Stroke" active={pop === 'stroke'} onClick={() => toggle('stroke')}>
              {snap.strokeWidth ? <Square size={16} strokeWidth={2.6} /> : <SquareDashed size={16} />}
            </TbBtn>
          </>
        )}

        <span className="ctb__sep" />
        <TbBtn
          title="Hide element"
          onClick={() => {
            api.setHidden(id, true);
            select(null);
            toast(`Hidden “${snap.label || k}”`, { label: 'Undo', run: () => api.setHidden(id, false) });
          }}
        >
          <EyeOff size={16} />
        </TbBtn>

        <form
          className={`ctb__ai ${aiFocus ? 'is-focus' : ''} ${busy ? 'is-busy' : ''}`}
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <Sparkles size={15} className="ctb__ai-icon" />
          <input
            value={prompt}
            disabled={busy}
            placeholder={busy ? 'Bolt is editing…' : k === 'button' ? 'Ask AI to edit this button…' : 'Ask AI to edit…'}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setAiFocus(true)}
            onBlur={() => setTimeout(() => setAiFocus(false), 150)}
            onKeyDown={(e) => e.stopPropagation()}
          />
          <button type="submit" className="ctb__send" aria-label="Send to AI" disabled={busy}>
            {busy ? <Loader2 size={14} className="spin" /> : <ArrowUp size={14} strokeWidth={2.5} />}
          </button>
        </form>
      </div>

      {aiFocus && !prompt && !run && k === 'button' && (
        <div className="ctb__panel ctb__suggest">
          <span className="ctb__panel-title">
            <Sparkles size={12} /> Try
          </span>
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => submit(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      {run && <AiPanel run={run} onUndo={() => { api.undo(); setAi(null); }} onClose={() => setAi(null)} />}

      {pop && (
        <div className="ctb__pop">
          {pop === 'text' && (
            <ColorPanel title={isIcon ? 'Icon color' : 'Text color'} value={snap.color} onChange={(hex) => set({ color: hex ?? undefined }, 'color')} />
          )}
          {pop === 'fill' && (
            <ColorPanel
              title="Fill"
              allowNone
              value={snap.fill.alpha === 0 ? null : snap.fill.hex}
              onChange={(hex) => set({ backgroundColor: hex ?? 'transparent' }, 'bg')}
            />
          )}
          {pop === 'radius' && <RadiusPanel snap={snap} onChange={(r) => set({ borderRadius: `${r}px` }, 'radius')} />}
          {pop === 'stroke' && <StrokePanel snap={snap} set={set} />}
          {pop === 'link' && <LinkPanel id={id} snap={snap} />}
        </div>
      )}
    </div>
  );
}

function iconPx(id: string) {
  const svg = document.querySelector(`[data-vid="${CSS.escape(id)}"] svg`);
  return svg ? Math.round(svg.getBoundingClientRect().width) : 24;
}

function CornerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 20V11a7 7 0 0 1 7-7h9" />
      <path d="M4 20h2M20 4v2" opacity=".5" />
    </svg>
  );
}

function AiPanel({ run, onUndo, onClose }: { run: NonNullable<ReturnType<typeof useEditor>['ai']>; onUndo: () => void; onClose: () => void }) {
  if (run.phase === 'unsupported') {
    return (
      <div className="ctb__panel ctb__ai-panel">
        <div className="ctb__ai-head">
          <Sparkles size={14} />
          <span>AI edits are wired to buttons in this prototype.</span>
          <button className="icon-btn" onClick={onClose} aria-label="Dismiss">
            <X size={14} />
          </button>
        </div>
        <p className="ctb__ai-note">Select a button such as “See my work” and ask again — or use the controls above.</p>
      </div>
    );
  }
  return (
    <div className={`ctb__panel ctb__ai-panel is-${run.phase}`}>
      <div className="ctb__ai-head">
        {run.phase === 'done' ? <Check size={14} className="ok" /> : <Sparkles size={14} className="pulse" />}
        <span>
          {run.phase === 'thinking' && 'Reading the button styles…'}
          {run.phase === 'applying' && 'Applying edits live…'}
          {run.phase === 'done' && 'Done · not in code yet'}
        </span>
        {run.phase === 'done' && (
          <span className="ctb__ai-actions">
            <button onClick={onUndo}>
              <Undo2 size={13} /> Undo
            </button>
            <button className="is-primary" onClick={onClose}>
              Keep
            </button>
          </span>
        )}
      </div>
      <div className="ctb__ai-prompt">
        <CornerUpLeft size={12} /> “{run.prompt || 'Round the corners & make it secondary'}”
      </div>
      <ul className="ctb__steps">
        {run.steps.map((s, i) => (
          <li key={i} className={s.done ? 'is-done' : ''} style={{ animationDelay: `${i * 90}ms` }}>
            <span className="ctb__step-dot">{s.done ? <Check size={11} strokeWidth={3} /> : <Loader2 size={11} className={run.phase === 'thinking' ? '' : 'spin'} />}</span>
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RadiusPanel({ snap, onChange }: { snap: Snapshot; onChange: (r: number) => void }) {
  const presets: [string, number][] = [
    ['Sharp', 0],
    ['Soft', 6],
    ['Round', 14],
    ['Pill', 999],
  ];
  const r = Math.min(snap.radius, 999);
  return (
    <div className="minipanel">
      <div className="minipanel__head">Corner radius</div>
      <div className="minipanel__chips">
        {presets.map(([label, v]) => (
          <button key={label} className={r === v ? 'is-active' : ''} onClick={() => onChange(v)}>
            <span className="radius-demo" style={{ borderRadius: Math.min(v, 9) }} />
            {label}
          </button>
        ))}
      </div>
      <div className="minipanel__row">
        <input type="range" min={0} max={48} value={Math.min(r, 48)} onChange={(e) => onChange(+e.target.value)} />
        <ScrubInput prefix={<CornerIcon />} value={r} min={0} max={999} onChange={onChange} />
      </div>
    </div>
  );
}

function StrokePanel({ snap, set }: { snap: Snapshot; set: (p: Record<string, string | undefined>, k: string) => void }) {
  return (
    <div className="minipanel minipanel--wide">
      <div className="minipanel__row">
        <span className="minipanel__head">Stroke</span>
        <ScrubInput
          prefix="W"
          value={snap.strokeWidth}
          min={0}
          max={12}
          onChange={(v) => set({ borderWidth: `${v}px`, borderStyle: v ? 'solid' : 'none' }, 'bw')}
        />
      </div>
      <ColorPanel title="Stroke color" value={snap.strokeColor} onChange={(hex) => set({ borderColor: hex ?? undefined, borderStyle: 'solid' }, 'bc')} />
    </div>
  );
}

function LinkPanel({ id, snap }: { id: string; snap: Snapshot }) {
  const api = useDocApi();
  const [href, setHref] = useState(snap.href ?? '');
  useEffect(() => setHref(snap.href ?? ''), [snap.href]);
  const newTab = snap.target === '_blank';
  return (
    <div className="minipanel minipanel--wide">
      <div className="minipanel__head">Link</div>
      <input
        className="field"
        value={href}
        placeholder="https:// or #section"
        spellCheck={false}
        onChange={(e) => {
          setHref(e.target.value);
          api.setLink(id, { href: e.target.value }, `${id}:href`);
        }}
        onKeyDown={(e) => e.stopPropagation()}
      />
      <div className="minipanel__chips">
        {SECTION_LINKS.map(([h, label]) => (
          <button
            key={h}
            className={snap.href === h ? 'is-active' : ''}
            onClick={() => api.setLink(id, { href: h, target: '_self' }, `${id}:href`)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="minipanel__row">
        <Toggle on={newTab} onChange={(v) => api.setLink(id, { target: v ? '_blank' : '_self' })} label="Open in new tab" />
        {snap.href && /^https?:/.test(snap.href) && (
          <a className="minipanel__test" href={snap.href} target="_blank" rel="noreferrer">
            Test ↗
          </a>
        )}
      </div>
    </div>
  );
}

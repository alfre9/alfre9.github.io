import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowDown,
  ArrowRight,
  Eye,
  EyeOff,
  Keyboard,
  Link2,
  Minus,
  MousePointer2,
  MoveHorizontal,
  MoveVertical,
  Plus,
  RotateCcw,
  RotateCw,
  Type,
} from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { ColorField, ScrubInput, Segmented, Toggle } from './controls';
import { FONTS, shadowCss, TOKENS, useSnapshot, type Shadow } from './dom';
import { KIND_LABEL, TEXT_KINDS } from './E';
import { SECTION_LINKS } from '../site/anchors';
import { KindIcon } from './Layers';
import { useDoc, useDocApi, useEditor } from './store';

function Section({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <section className="insp__sec">
      <header>
        <h4>{title}</h4>
        {action}
      </header>
      {children}
    </section>
  );
}

export function Inspector() {
  const { selectedId, getEl, select } = useEditor();
  const { doc } = useDoc();
  const api = useDocApi();
  const snap = useSnapshot(selectedId);
  const [text, setText] = useState('');

  useEffect(() => {
    if (snap?.isLeafText) setText(snap.text);
  }, [snap?.text, snap?.isLeafText, selectedId]);

  if (!selectedId || !snap) return <EmptyInspector />;

  const id = selectedId;
  const ov = doc[id];
  const k = snap.kind;
  const textual = TEXT_KINDS.includes(k) || k === 'container' || k === 'section';
  const linky = k === 'button' || k === 'link';
  const isFlex = snap.display.includes('flex');
  const set = (patch: Record<string, string | undefined>, key: string) => api.setStyle(id, patch, `${id}:${key}`);
  const setShadow = (s: Partial<Shadow>) => set({ boxShadow: shadowCss({ ...snap.shadow, ...s }) }, 'shadow');
  const sizeMode = (dim: 'width' | 'height') => {
    const v = ov?.style?.[dim];
    if (!v) return 'auto';
    if (v === 'fit-content') return 'hug';
    if (v === '100%') return 'fill';
    return 'fixed';
  };
  const parentEl = getEl(id)?.parentElement?.closest('[data-vid]') as HTMLElement | null;

  return (
    <aside className="insp">
      <div className="insp__head">
        <span className="insp__kind">
          <KindIcon kind={k} />
        </span>
        <div className="insp__title">
          <strong>{snap.label || KIND_LABEL[k]}</strong>
          <span>
            {KIND_LABEL[k]} · &lt;{snap.tag}&gt;
          </span>
        </div>
        <div className="insp__head-actions">
          {parentEl && (
            <button className="icon-btn" data-tip="Select parent (Esc)" onClick={() => select(parentEl.dataset.vid!)}>
              <ArrowUpLeftIcon />
            </button>
          )}
          <button className="icon-btn" data-tip={ov?.hidden ? 'Show' : 'Hide'} onClick={() => api.setHidden(id, !ov?.hidden)}>
            {ov?.hidden ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
          <button className="icon-btn" data-tip="Reset to original" disabled={!ov} onClick={() => api.resetNode(id)}>
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      <div className="insp__body">
        {snap.isLeafText && (
          <Section title="Content">
            <textarea
              className="field field--area"
              value={text}
              rows={Math.min(5, Math.max(2, Math.ceil(text.length / 30)))}
              onChange={(e) => {
                setText(e.target.value);
                api.setText(id, e.target.value, `text:${id}`);
              }}
            />
          </Section>
        )}

        {linky && (
          <Section title="Link">
            <div className="field-icon">
              <Link2 size={14} />
              <input
                className="field"
                value={ov?.href ?? snap.href ?? ''}
                placeholder="https:// or #section"
                spellCheck={false}
                onChange={(e) => api.setLink(id, { href: e.target.value }, `${id}:href`)}
              />
            </div>
            <div className="insp__row">
              <select
                className="field field--select"
                value={snap.href?.startsWith('#') ? snap.href : ''}
                onChange={(e) => e.target.value && api.setLink(id, { href: e.target.value, target: '_self' })}
              >
                <option value="">Jump to section…</option>
                {SECTION_LINKS.map(([h, label]) => (
                  <option key={h} value={h}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <Toggle on={snap.target === '_blank'} onChange={(v) => api.setLink(id, { target: v ? '_blank' : '_self' })} label="Open in new tab" />
          </Section>
        )}

        <Section title="Layout">
          <div className="insp__grid2">
            <ScrubInput prefix="W" value={snap.width} min={0} onChange={(v) => set({ width: `${v}px`, maxWidth: 'none' }, 'w')} />
            <ScrubInput prefix="H" value={snap.height} min={0} onChange={(v) => set({ height: `${v}px` }, 'h')} />
            <select
              className="field field--select field--sm"
              value={sizeMode('width')}
              onChange={(e) => {
                const m = e.target.value;
                set({ width: m === 'hug' ? 'fit-content' : m === 'fill' ? '100%' : m === 'fixed' ? `${snap.width}px` : undefined }, 'wm');
              }}
            >
              <option value="auto">Auto width</option>
              <option value="hug">Hug contents</option>
              <option value="fill">Fill container</option>
              <option value="fixed">Fixed</option>
            </select>
            <select
              className="field field--select field--sm"
              value={sizeMode('height')}
              onChange={(e) => {
                const m = e.target.value;
                set({ height: m === 'hug' ? 'fit-content' : m === 'fill' ? '100%' : m === 'fixed' ? `${snap.height}px` : undefined }, 'hm');
              }}
            >
              <option value="auto">Auto height</option>
              <option value="hug">Hug contents</option>
              <option value="fill">Fill container</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
          <div className="insp__grid2">
            <ScrubInput
              prefix={<MoveHorizontal size={13} />}
              title="Horizontal padding"
              value={snap.padX}
              min={0}
              onChange={(v) => set({ paddingLeft: `${v}px`, paddingRight: `${v}px` }, 'px')}
            />
            <ScrubInput
              prefix={<MoveVertical size={13} />}
              title="Vertical padding"
              value={snap.padY}
              min={0}
              onChange={(v) => set({ paddingTop: `${v}px`, paddingBottom: `${v}px` }, 'py')}
            />
          </div>
          {isFlex && (
            <>
              <div className="insp__row">
                <Segmented
                  size="sm"
                  value={snap.flexDirection.startsWith('column') ? 'column' : 'row'}
                  onChange={(v) => set({ flexDirection: v }, 'dir')}
                  options={[
                    { value: 'row', icon: <ArrowRight size={13} />, title: 'Horizontal' },
                    { value: 'column', icon: <ArrowDown size={13} />, title: 'Vertical' },
                  ]}
                />
                <ScrubInput prefix="Gap" value={snap.gap} min={0} onChange={(v) => set({ gap: `${v}px` }, 'gap')} />
              </div>
              <div className="insp__row">
                <Segmented
                  size="sm"
                  value={(['flex-start', 'center', 'flex-end'].includes(snap.alignItems) ? snap.alignItems : 'normal') as string}
                  onChange={(v) => set({ alignItems: v }, 'ai')}
                  options={[
                    { value: 'flex-start', label: 'Start', title: 'Align start' },
                    { value: 'center', label: 'Center', title: 'Align center' },
                    { value: 'flex-end', label: 'End', title: 'Align end' },
                  ]}
                />
              </div>
            </>
          )}
        </Section>

        <Section title="Appearance">
          <div className="insp__grid2">
            <ScrubInput prefix={<OpacityIcon />} title="Opacity" value={snap.opacity} min={0} max={100} suffix="%" onChange={(v) => set({ opacity: String(v / 100) }, 'op')} />
            <ScrubInput prefix={<CornerIcon />} title="Corner radius" value={Math.min(snap.radius, 999)} min={0} max={999} onChange={(v) => set({ borderRadius: `${v}px` }, 'radius')} />
            <ScrubInput prefix={<RotateCw size={13} />} title="Rotation" value={snap.rotate} step={0.5} suffix="°" onChange={(v) => set({ rotate: `${v}deg` }, 'rot')} />
          </div>
        </Section>

        <Section
          title="Fill"
          action={
            snap.fill.alpha === 0 ? (
              <button className="icon-btn" data-tip="Add fill" onClick={() => set({ backgroundColor: TOKENS[0].hex }, 'bg')}>
                <Plus size={14} />
              </button>
            ) : (
              <button className="icon-btn" data-tip="Remove fill" onClick={() => set({ backgroundColor: 'transparent' }, 'bg')}>
                <Minus size={14} />
              </button>
            )
          }
        >
          {snap.fill.alpha > 0 ? (
            <ColorField title="Fill" allowNone value={snap.fill.hex} onChange={(hex) => set({ backgroundColor: hex ?? 'transparent' }, 'bg')} />
          ) : (
            <p className="insp__muted">No fill</p>
          )}
        </Section>

        <Section
          title="Stroke"
          action={
            snap.strokeWidth ? (
              <button className="icon-btn" data-tip="Remove stroke" onClick={() => set({ borderWidth: '0px', borderStyle: 'none' }, 'bw')}>
                <Minus size={14} />
              </button>
            ) : (
              <button className="icon-btn" data-tip="Add stroke" onClick={() => set({ borderWidth: '3px', borderStyle: 'solid', borderColor: '#000000' }, 'bw')}>
                <Plus size={14} />
              </button>
            )
          }
        >
          {snap.strokeWidth ? (
            <div className="insp__grid2">
              <ColorField title="Stroke" value={snap.strokeColor} onChange={(hex) => set({ borderColor: hex ?? undefined, borderStyle: 'solid' }, 'bc')} />
              <ScrubInput prefix={<StrokeIcon />} title="Stroke width" value={snap.strokeWidth} min={0} max={16} onChange={(v) => set({ borderWidth: `${v}px`, borderStyle: v ? 'solid' : 'none' }, 'bw')} />
            </div>
          ) : (
            <p className="insp__muted">No stroke</p>
          )}
        </Section>

        <Section
          title="Effects"
          action={<Toggle on={snap.shadow.on} onChange={(on) => setShadow({ on, x: snap.shadow.x || 6, y: snap.shadow.y || 6 })} />}
        >
          {snap.shadow.on ? (
            <>
              <div className="insp__grid3">
                <ScrubInput prefix="X" value={snap.shadow.x} onChange={(x) => setShadow({ x })} />
                <ScrubInput prefix="Y" value={snap.shadow.y} onChange={(y) => setShadow({ y })} />
                <ScrubInput prefix="B" title="Blur" value={snap.shadow.blur} min={0} onChange={(blur) => setShadow({ blur })} />
              </div>
              <ColorField title="Shadow" value={snap.shadow.color} onChange={(hex) => hex && setShadow({ color: hex })} />
            </>
          ) : (
            <p className="insp__muted">Drop shadow off</p>
          )}
        </Section>

        {textual && (
          <Section title="Typography">
            <select
              className="field field--select"
              value={FONTS.find((f) => f.label === snap.fontFamily)?.value ?? ''}
              onChange={(e) => set({ fontFamily: e.target.value || undefined }, 'ff')}
            >
              {!FONTS.some((f) => f.label === snap.fontFamily) && <option value="">{snap.fontFamily}</option>}
              {FONTS.map((f) => (
                <option key={f.label} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
            <div className="insp__grid2">
              <select className="field field--select" value={String(Math.round(snap.fontWeight / 100) * 100)} onChange={(e) => set({ fontWeight: e.target.value }, 'fw')}>
                {[400, 500, 600, 700, 800, 900].map((w) => (
                  <option key={w} value={w}>
                    {{ 400: 'Regular', 500: 'Medium', 600: 'Semibold', 700: 'Bold', 800: 'Extra bold', 900: 'Black' }[w]}
                  </option>
                ))}
              </select>
              <ScrubInput prefix={<Type size={13} />} title="Font size" value={snap.fontSize} min={6} max={400} onChange={(v) => set({ fontSize: `${v}px` }, 'fs')} />
              <ScrubInput
                prefix={<LineHeightIcon />}
                title="Line height"
                value={snap.lineHeight === 'Auto' ? 1.2 : parseFloat(snap.lineHeight)}
                display={snap.lineHeight}
                step={0.05}
                min={0.5}
                max={4}
                onChange={(v) => set({ lineHeight: String(v) }, 'lh')}
              />
              <ScrubInput prefix={<LetterIcon />} title="Letter spacing" value={snap.letterSpacing} step={0.5} suffix="%" onChange={(v) => set({ letterSpacing: `${v / 100}em` }, 'ls')} />
            </div>
            <div className="insp__row">
              <Segmented
                size="sm"
                value={snap.textAlign}
                onChange={(v) => set({ textAlign: v }, 'ta')}
                options={[
                  { value: 'left', icon: <AlignLeft size={14} />, title: 'Align left' },
                  { value: 'center', icon: <AlignCenter size={14} />, title: 'Align center' },
                  { value: 'right', icon: <AlignRight size={14} />, title: 'Align right' },
                ]}
              />
              <Segmented
                size="sm"
                value={snap.textTransform === 'uppercase' ? 'uppercase' : snap.textTransform === 'lowercase' ? 'lowercase' : 'none'}
                onChange={(v) => set({ textTransform: v }, 'tt')}
                options={[
                  { value: 'none', label: 'Aa', title: 'As typed' },
                  { value: 'uppercase', label: 'AA', title: 'Uppercase' },
                  { value: 'lowercase', label: 'aa', title: 'Lowercase' },
                ]}
              />
            </div>
            <ColorField title="Text color" value={snap.color} onChange={(hex) => set({ color: hex ?? undefined }, 'color')} />
          </Section>
        )}

        {k === 'icon' && (
          <Section title="Icon">
            <ColorField title="Icon color" value={snap.color} onChange={(hex) => set({ color: hex ?? undefined }, 'color')} />
          </Section>
        )}
      </div>
    </aside>
  );
}

function EmptyInspector() {
  return (
    <aside className="insp insp--empty">
      <div className="insp__empty-hero">
        <span className="insp__empty-icon">
          <MousePointer2 size={20} />
        </span>
        <strong>Select anything on the page</strong>
        <p>Click to select, double-click to edit text. Every change is live and saved automatically.</p>
      </div>
      <Section title="Palette">
        <div className="insp__palette">
          {TOKENS.map((t) => (
            <span key={t.hex} title={t.hex}>
              <i style={{ background: t.hex }} />
              {t.name}
            </span>
          ))}
        </div>
      </Section>
      <Section title="Shortcuts" action={<Keyboard size={14} className="insp__muted-icon" />}>
        <dl className="insp__keys">
          {[
            ['Click', 'Select'],
            ['Click again', 'Select inside a button'],
            ['Double-click / ↵', 'Edit text'],
            ['Esc', 'Select parent'],
            ['⌫', 'Hide element'],
            ['⌘ Z / ⇧⌘ Z', 'Undo / Redo'],
            ['Drag W/H labels', 'Scrub values'],
          ].map(([key, v]) => (
            <div key={key}>
              <dt>{key}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </aside>
  );
}

const Svg = ({ children }: { children: ReactNode }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {children}
  </svg>
);
const CornerIcon = () => (
  <Svg>
    <path d="M4 20V11a7 7 0 0 1 7-7h9" />
  </Svg>
);
const OpacityIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
  </Svg>
);
const StrokeIcon = () => (
  <Svg>
    <path d="M4 6h16" strokeWidth="1.5" />
    <path d="M4 12h16" strokeWidth="2.5" />
    <path d="M4 18h16" strokeWidth="4" />
  </Svg>
);
const LineHeightIcon = () => (
  <Svg>
    <path d="M4 4h16M4 20h16M9 16l3-8 3 8M10 13.5h4" />
  </Svg>
);
const LetterIcon = () => (
  <Svg>
    <path d="M3 4v16M21 4v16M8 16l4-9 4 9M9.5 13h5" />
  </Svg>
);
const ArrowUpLeftIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 14 4 9l5-5" />
    <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
  </svg>
);

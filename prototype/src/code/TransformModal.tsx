import { Check, FileCode2, Loader2, Zap } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { friendlyName } from '../editor/dom';
import { KIND_LABEL, type Kind } from '../editor/E';
import { KindIcon } from '../editor/Layers';
import type { Doc } from '../editor/store';
import { highlightLine } from './highlight';
import { openingTag } from './serialize';

export interface ChangeItem {
  id: string;
  name: string;
  kind: Kind;
  file: string;
  props: { key: string; from?: string; to: string }[];
  code: string;
}

const short = (v: string | undefined, n = 22) => (v === undefined ? undefined : v.length > n ? `${v.slice(0, n)}…` : v);

export function computeChanges(prev: Doc, next: Doc, getEl: (id: string) => HTMLElement | null): ChangeItem[] {
  const ids = [...new Set([...Object.keys(prev), ...Object.keys(next)])];
  const out: ChangeItem[] = [];
  for (const id of ids) {
    const a = prev[id] ?? {};
    const b = next[id] ?? {};
    if (JSON.stringify(a) === JSON.stringify(b)) continue;
    const el = getEl(id);
    if (!el) continue;
    const props: ChangeItem['props'] = [];
    const keys = new Set([...Object.keys(a.style ?? {}), ...Object.keys(b.style ?? {})]);
    for (const k of keys) {
      const f = a.style?.[k];
      const t = b.style?.[k];
      if (f !== t) props.push({ key: k, from: f, to: t ?? 'default' });
    }
    if (a.text !== b.text) props.push({ key: 'text', from: short(a.text), to: `“${short(b.text ?? 'original') ?? ''}”` });
    if (a.href !== b.href) props.push({ key: 'href', from: a.href, to: b.href ?? 'original' });
    if (a.target !== b.target) props.push({ key: 'target', from: a.target, to: b.target ?? 'original' });
    if (!!a.hidden !== !!b.hidden) props.push({ key: 'visible', to: b.hidden ? 'false' : 'true' });
    const fileEl = el.closest('[data-file]') as HTMLElement | null;
    out.push({
      id,
      name: friendlyName(el),
      kind: (el.dataset.kind ?? 'container') as Kind,
      file: `src/components/${fileEl?.dataset.file ?? 'App'}.tsx`,
      props,
      code: b.hidden ? `{/* “${el.dataset.label ?? id}” hidden */}` : openingTag(el, next),
    });
  }
  return out;
}

export function TransformModal({ changes, onDone }: { changes: ChangeItem[]; onDone: () => void }) {
  const reduce = useMemo(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches, []);
  const speed = reduce ? 0.35 : 1;
  const n = changes.length;
  const per = Math.max(420, Math.min(760, 3000 / n)) * speed;
  const T_MAP = 900 * speed;
  const T_WRITE = 1700 * speed;
  const T_FORMAT = T_WRITE + n * per;
  const T_DONE = T_FORMAT + 650 * speed;
  const TOTAL = T_DONE + 750 * speed;

  const [t, setT] = useState(0);
  const doneRef = useRef(false);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const el = now - start;
      setT(el);
      if (el >= TOTAL) {
        if (!doneRef.current) {
          doneRef.current = true;
          onDone();
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [TOTAL, onDone]);

  useEffect(() => {
    const ed = codeRef.current;
    if (ed) ed.scrollTop = ed.scrollHeight;
  });

  const files = [...new Set(changes.map((c) => c.file))];
  const writingIdx = t < T_WRITE ? -1 : Math.min(n - 1, Math.floor((t - T_WRITE) / per));
  const currentFile = writingIdx >= 0 ? changes[writingIdx].file : files[0];
  const progress = Math.min(1, t / T_DONE);

  const steps = [
    { label: `Collecting ${n} design ${n === 1 ? 'change' : 'changes'}`, at: 0, end: T_MAP },
    { label: `Mapping to ${files.length} ${files.length === 1 ? 'component' : 'components'}`, at: T_MAP, end: T_WRITE },
    { label: 'AI writing JSX & styles', at: T_WRITE, end: T_FORMAT },
    { label: 'Checking the build', at: T_FORMAT, end: T_DONE },
  ];

  return (
    <div className="xf" role="dialog" aria-modal="true" aria-label="Applying design changes with AI">
      <div className="xf__backdrop" />
      <div className={`xf__card ${t >= T_DONE ? 'is-done' : ''}`}>
        <div className="xf__glow" />
        <header className="xf__head">
          <span className="xf__bolt">
            <Zap size={18} fill="currentColor" />
          </span>
          <div>
            <h3>{t >= T_DONE ? 'Saved to code' : 'Applying your design with AI'}</h3>
            <p>You left Visual Design, so Bolt’s AI is writing every change to your React components in one pass. Uses tokens.</p>
          </div>
          <button className="xf__skip" onClick={onDone}>
            Skip
          </button>
        </header>

        <div className="xf__body">
          <div className="xf__edits">
            <div className="xf__col-title">Design changes</div>
            {changes.slice(0, 7).map((c, i) => {
              const shown = t > i * 90 * speed;
              const mapped = t > T_MAP + i * 60 * speed;
              const written = writingIdx > i || t >= T_FORMAT;
              const writing = writingIdx === i && t < T_FORMAT;
              return (
                <div
                  key={c.id}
                  className={`xf__chip ${shown ? 'is-in' : ''} ${writing ? 'is-writing' : ''} ${written ? 'is-written' : ''}`}
                >
                  <span className="xf__chip-icon">
                    <KindIcon kind={c.kind} size={13} />
                  </span>
                  <div className="xf__chip-body">
                    <strong>
                      {c.name}
                      <em>{KIND_LABEL[c.kind]}</em>
                    </strong>
                    <span className="xf__props">
                      {c.props.slice(0, 3).map((p) => (
                        <span key={p.key}>
                          {p.key}: {p.from && <s>{short(p.from, 10)}</s>} {short(p.to, 16)}
                        </span>
                      ))}
                      {c.props.length > 3 && <span>+{c.props.length - 3} more</span>}
                    </span>
                    <span className={`xf__file ${mapped ? 'is-in' : ''}`}>
                      <FileCode2 size={11} /> {c.file.split('/').pop()}
                    </span>
                  </div>
                  <span className="xf__chip-state">{written ? <Check size={13} strokeWidth={3} /> : writing ? <Loader2 size={13} className="spin" /> : null}</span>
                </div>
              );
            })}
            {n > 7 && <div className="xf__more">+{n - 7} more changes</div>}
          </div>

          <div className="xf__beam" data-active={t > T_MAP && t < T_FORMAT}>
            <span />
            <span />
            <span />
          </div>

          <div className="xf__code">
            <div className="xf__code-tab">
              <FileCode2 size={12} />
              {currentFile}
            </div>
            <div className="xf__code-body" ref={codeRef}>
              {changes.map((c, i) => {
                if (writingIdx < i) return null;
                const isLast = i === writingIdx && t < T_FORMAT;
                const frac = isLast ? Math.min(1, (t - T_WRITE - i * per) / (per * 0.85)) : 1;
                const text = c.code.slice(0, Math.ceil(c.code.length * frac));
                return (
                  <div key={c.id} className="xf__block">
                    <div className="xf__cm">{`// ${c.name} · ${c.file.split('/').pop()}`}</div>
                    <div className="xf__ln">
                      {highlightLine(text, 'tsx').map((tk, j) => (
                        <span key={j} className={tk.c ? `tk-${tk.c}` : undefined}>
                          {tk.t}
                        </span>
                      ))}
                      {isLast && <i className="xf__caret" />}
                    </div>
                  </div>
                );
              })}
              {writingIdx < 0 && <div className="xf__cm xf__wait">{t < T_MAP ? '// reading canvas…' : '// resolving components…'}</div>}
            </div>
          </div>
        </div>

        <footer className="xf__foot">
          <ol className="xf__steps">
            {steps.map((s) => {
              const state = t >= s.end ? 'done' : t >= s.at ? 'run' : 'wait';
              return (
                <li key={s.label} className={`is-${state}`}>
                  <span>{state === 'done' ? <Check size={11} strokeWidth={3} /> : state === 'run' ? <Loader2 size={11} className="spin" /> : null}</span>
                  {s.label}
                </li>
              );
            })}
          </ol>
          <div className="xf__bar">
            <i style={{ transform: `scaleX(${progress})` }} />
          </div>
        </footer>
      </div>
    </div>
  );
}

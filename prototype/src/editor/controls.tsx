import { Ban, Check, Pipette } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { normalizeHex, TOKENS } from './dom';

export function useOutside(ref: React.RefObject<HTMLElement>, onOut: () => void, active = true) {
  useEffect(() => {
    if (!active) return;
    const h = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOut();
    };
    document.addEventListener('pointerdown', h, true);
    return () => document.removeEventListener('pointerdown', h, true);
  }, [ref, onOut, active]);
}

/* Figma-style numeric field: drag the prefix to scrub, arrows to nudge. */
export function ScrubInput({
  prefix,
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  suffix,
  title,
  disabled,
  display,
}: {
  prefix: ReactNode;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  title?: string;
  disabled?: boolean;
  display?: string;
}) {
  const [draft, setDraft] = useState<string | null>(null);
  const clamp = (v: number) => Math.min(max, Math.max(min, Math.round(v / step) * step));
  const round = (v: number) => Math.round(v * 100) / 100;

  const onPointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    e.preventDefault();
    const startX = e.clientX;
    const start = value;
    const move = (ev: PointerEvent) => {
      const mult = ev.shiftKey ? 10 : 1;
      onChange(round(clamp(start + Math.round((ev.clientX - startX) / 2) * step * mult)));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      document.body.classList.remove('is-scrubbing');
    };
    document.body.classList.add('is-scrubbing');
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const commit = () => {
    if (draft === null) return;
    const n = parseFloat(draft);
    if (!Number.isNaN(n)) onChange(round(clamp(n)));
    setDraft(null);
  };

  return (
    <label className={`scrub ${disabled ? 'is-disabled' : ''}`} title={title}>
      <span className="scrub__prefix" onPointerDown={onPointerDown}>
        {prefix}
      </span>
      <input
        value={draft ?? display ?? String(round(value))}
        disabled={disabled}
        onFocus={(e) => e.currentTarget.select()}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            commit();
            e.currentTarget.blur();
          }
          if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            const d = (e.key === 'ArrowUp' ? 1 : -1) * step * (e.shiftKey ? 10 : 1);
            setDraft(null);
            onChange(round(clamp(value + d)));
          }
        }}
      />
      {suffix && <span className="scrub__suffix">{suffix}</span>}
    </label>
  );
}

export function Segmented<T extends string>({
  value,
  options,
  onChange,
  size = 'md',
}: {
  value: T;
  options: { value: T; icon?: ReactNode; label?: string; title?: string }[];
  onChange: (v: T) => void;
  size?: 'sm' | 'md';
}) {
  return (
    <div className={`seg seg--${size}`}>
      {options.map((o) => (
        <button
          key={o.value}
          className={`seg__btn ${value === o.value ? 'is-active' : ''}`}
          title={o.title ?? o.label}
          onClick={() => onChange(o.value)}
          type="button"
        >
          {o.icon}
          {o.label && <span>{o.label}</span>}
        </button>
      ))}
    </div>
  );
}

export function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label?: string }) {
  return (
    <button type="button" className={`toggle ${on ? 'is-on' : ''}`} onClick={() => onChange(!on)} aria-pressed={on}>
      <span className="toggle__track">
        <span className="toggle__thumb" />
      </span>
      {label && <span>{label}</span>}
    </button>
  );
}

/* ---------------- Color picker ---------------- */

export function ColorPanel({
  title,
  value,
  onChange,
  allowNone,
}: {
  title: string;
  value: string | null;
  onChange: (hex: string | null) => void;
  allowNone?: boolean;
}) {
  const [hex, setHex] = useState(value ?? '');
  useEffect(() => setHex(value ?? ''), [value]);
  const current = value?.toUpperCase() ?? null;

  const eyedropper = async () => {
    const ED = (window as unknown as { EyeDropper?: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper;
    if (!ED) return;
    try {
      const r = await new ED().open();
      const n = normalizeHex(r.sRGBHex);
      if (n) onChange(n);
    } catch {
      /* cancelled */
    }
  };

  return (
    <div className="colorpanel" onPointerDown={(e) => e.stopPropagation()}>
      <div className="colorpanel__head">
        <span>{title}</span>
        <span className="colorpanel__sub">Theme colors</span>
      </div>
      <div className="colorpanel__grid">
        {allowNone && (
          <button
            className={`swatch swatch--none ${current === null ? 'is-active' : ''}`}
            title="None"
            onClick={() => onChange(null)}
          >
            <Ban size={14} />
          </button>
        )}
        {TOKENS.map((t) => (
          <button
            key={t.hex}
            className={`swatch ${current === t.hex ? 'is-active' : ''}`}
            style={{ background: t.hex }}
            title={`${t.name} ${t.hex}`}
            onClick={() => onChange(t.hex)}
          >
            {current === t.hex && <Check size={12} strokeWidth={3} color={t.hex === '#000000' || t.hex === '#1E1E1E' ? '#fff' : '#000'} />}
          </button>
        ))}
      </div>
      <div className="colorpanel__custom">
        <label className="colorpanel__native" style={{ background: current ?? 'transparent' }} title="Custom color">
          <input type="color" value={current ?? '#000000'} onChange={(e) => onChange(e.target.value.toUpperCase())} />
        </label>
        <input
          className="colorpanel__hex"
          value={hex}
          placeholder="None"
          spellCheck={false}
          onChange={(e) => {
            setHex(e.target.value);
            const n = normalizeHex(e.target.value);
            if (n) onChange(n);
          }}
          onBlur={() => setHex(value ?? '')}
        />
        {'EyeDropper' in window && (
          <button className="icon-btn" title="Pick from screen" onClick={eyedropper}>
            <Pipette size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

/** Swatch + hex field used in the inspector; opens the ColorPanel. */
export function ColorField({
  value,
  onChange,
  title,
  allowNone,
}: {
  value: string | null;
  onChange: (hex: string | null) => void;
  title: string;
  allowNone?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutside(ref, () => setOpen(false), open);
  return (
    <div className="colorfield" ref={ref}>
      <button className="colorfield__btn" onClick={() => setOpen((o) => !o)}>
        <span className={`colorfield__chip ${value ? '' : 'is-none'}`} style={{ background: value ?? undefined }} />
        <span className="colorfield__hex">{value ? value.replace('#', '') : 'None'}</span>
      </button>
      {open && (
        <div className="colorfield__pop">
          <ColorPanel title={title} value={value} onChange={onChange} allowNone={allowNone} />
        </div>
      )}
    </div>
  );
}

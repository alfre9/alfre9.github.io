import { ArrowDown, ArrowUpRight, Blocks, ChevronDown, Plug, WandSparkles } from 'lucide-react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { hero } from '../content';

const WIN_ICONS = { wand: WandSparkles, blocks: Blocks, api: Plug };

/** Highlights dollar amounts ("$14", "$1.5M", "$2B") inside a tile's detail. */
function Money({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\$\d+(?:[.,]\d+)*[KMB]?)/).map((part, i) =>
        i % 2 ? (
          <mark key={i} className="hero__win-money">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/**
 * Stat tiles whose detail opens on mouse hover, or toggles on tap / Enter.
 * Mouse clicks are ignored so a click doesn't close what hover just opened.
 */
function Wins() {
  const [open, setOpen] = useState<number | null>(null);
  const mouseDown = useRef(false);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    const onDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest('.hero__win')) setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const close = (i: number) => setOpen((o) => (o === i ? null : o));

  return (
    <ul className="hero__wins" aria-label="Top results">
      {hero.wins.map((w, i) => {
        const Icon = WIN_ICONS[w.icon];
        const isOpen = open === i;
        return (
          <li
            key={w.label}
            className={`hero__win surface-${w.accent}`}
            data-open={isOpen || undefined}
            onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(i)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && close(i)}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node | null) && close(i)}
          >
            <button
              type="button"
              className="hero__win-trigger"
              aria-expanded={isOpen}
              aria-controls={`win-detail-${i}`}
              onPointerDown={(e) => (mouseDown.current = e.pointerType === 'mouse')}
              onFocus={(e) => e.currentTarget.matches(':focus-visible') && setOpen(i)}
              onClick={() => {
                if (mouseDown.current) mouseDown.current = false;
                else setOpen(isOpen ? null : i);
              }}
            >
              <span className="hero__win-icon">
                <Icon size={20} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="hero__win-value">
                {w.value} <span className="hero__win-unit">{w.unit}</span>
              </span>
              <span className="hero__win-label">{w.label}</span>
              <ChevronDown className="hero__win-chevron" size={18} strokeWidth={3} aria-hidden="true" />
            </button>
            <p id={`win-detail-${i}`} className="hero__win-detail" hidden={!isOpen}>
              <Money text={w.detail} />
            </p>
          </li>
        );
      })}
    </ul>
  );
}

function Hello() {
  return (
    <h1 id="hero-title" className="display hero__title">
      {hero.hello.map((line, i) => {
        const sep = i < hero.hello.length - 1 ? ' ' : '';
        return (
          <span key={line} className="line">
            {line === hero.highlight ? <mark className="hero__mark">{line}</mark> : line}
            {sep}
          </span>
        );
      })}
    </h1>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero grid-paper" aria-labelledby="hero-title">
      <div className="wrap hero__layout">
        <div className="hero__copy">
          <Hello />
          <p className="hero__lead">{hero.lead}</p>
          <Wins />
          <p className="hero__tagline mono">{hero.tagline}</p>
          <div className="btn-row">
            <a className="btn btn--ink" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowDown size={18} strokeWidth={2.75} aria-hidden="true" />
            </a>
            <a className="btn" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <ArrowUpRight size={18} strokeWidth={2.75} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="hero__photo">
          <img src={hero.photo.src} alt={hero.photo.alt} width={hero.photo.width} height={hero.photo.height} />
          <figcaption className="sticker surface-orange hero__current">
            <span className="status-dot" aria-hidden="true" />
            {hero.current}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

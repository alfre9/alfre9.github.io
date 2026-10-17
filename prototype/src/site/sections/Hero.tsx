import { ArrowDown, ArrowUpRight, Blocks, ChevronDown, Plug, WandSparkles } from 'lucide-react';
import { Fragment, useRef, useState } from 'react';
import photo from '../../../../public/alfred-chang.jpg';
import { hero } from '../../../../src/content';
import { E } from '../../editor/E';
import { useEditState } from '../../editor/store';
import { useDesignSelection, within } from '../ui';

const WIN_ICONS = { wand: WandSparkles, blocks: Blocks, api: Plug };

/** Stat tiles. In Preview the detail opens on hover or tap; in Visual Design it opens while the tile is selected. */
function Wins() {
  const { mode } = useEditState();
  const sel = useDesignSelection();
  const [open, setOpen] = useState<number | null>(null);
  const mouseDown = useRef(false);
  const preview = mode !== 'design';

  return (
    <E id="hero.wins" kind="container" as="ul" className="hero__wins" aria-label="Top results" label="Stat tiles">
      {hero.wins.map((w, i) => {
        const Icon = WIN_ICONS[w.icon];
        const id = `hero.win.${i}`;
        const isOpen = preview ? open === i : within(sel, id);
        return (
          <E
            key={w.label}
            id={id}
            kind="container"
            as="li"
            className={`hero__win surface-${w.accent}`}
            data-open={isOpen || undefined}
            onPointerEnter={(e: React.PointerEvent) => preview && e.pointerType === 'mouse' && setOpen(i)}
            onPointerLeave={(e: React.PointerEvent) => preview && e.pointerType === 'mouse' && setOpen((o) => (o === i ? null : o))}
            label={`${w.label} tile`}
          >
            <button
              type="button"
              className="hero__win-trigger"
              aria-expanded={isOpen}
              onPointerDown={(e) => (mouseDown.current = e.pointerType === 'mouse')}
              onClick={() => {
                if (mouseDown.current) mouseDown.current = false;
                else setOpen(isOpen ? null : i);
              }}
            >
              <E id={`${id}.icon`} kind="icon" as="span" className="hero__win-icon" label="Icon">
                <Icon size={20} strokeWidth={2.5} aria-hidden="true" />
              </E>
              <E id={`${id}.value`} kind="heading" as="span" className="hero__win-value" label="Value">
                <E id={`${id}.amount`} kind="text" as="span" label="Amount">
                  {w.value}
                </E>{' '}
                <E id={`${id}.unit`} kind="text" as="span" className="hero__win-unit" label="Unit">
                  {w.unit}
                </E>
              </E>
              <E id={`${id}.label`} kind="text" as="span" className="hero__win-label" label="Label">
                {w.label}
              </E>
              <ChevronDown className="hero__win-chevron" size={18} strokeWidth={3} aria-hidden="true" />
            </button>
            <E id={`${id}.detail`} kind="text" as="p" className="hero__win-detail" hidden={!isOpen} label="Detail">
              {w.detail}
            </E>
          </E>
        );
      })}
    </E>
  );
}

export function Hero() {
  return (
    <E id="hero" htmlId="top" kind="section" as="section" className="hero grid-paper" aria-labelledby="hero-title" file="Hero" label="Hero">
      <E id="hero.layout" kind="container" className="wrap hero__layout" label="Hero layout">
        <E id="hero.copy" kind="container" className="hero__copy" label="Hero copy">
          <E id="hero.title" htmlId="hero-title" kind="heading" as="h1" className="display hero__title" label="Hello">
            {hero.hello.map((line, i) => (
              <Fragment key={line}>
                {line === hero.highlight ? (
                  <span className="line">
                    <E id="hero.title.mark" kind="text" as="mark" className="hero__mark" label="Highlight">
                      {line}
                    </E>
                  </span>
                ) : (
                  <E id={`hero.title.${i}`} kind="text" as="span" className="line" label={`Line ${i + 1}`}>
                    {line}
                  </E>
                )}
                {i < hero.hello.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </E>
          <E id="hero.lead" kind="text" as="p" className="hero__lead" label="Intro">
            {hero.lead}
          </E>
          <Wins />
          <E id="hero.tagline" kind="text" as="p" className="hero__tagline mono" label="Tagline">
            {hero.tagline}
          </E>
          <E id="hero.ctas" kind="container" className="btn-row" label="Buttons">
            <E id="hero.cta.primary" kind="button" as="a" className="btn btn--ink" href={hero.primaryCta.href} label={hero.primaryCta.label}>
              <E id="hero.cta.primary.label" kind="text" as="span" label="Label">
                {hero.primaryCta.label}
              </E>
              <ArrowDown size={18} strokeWidth={2.75} aria-hidden="true" />
            </E>
            <E id="hero.cta.secondary" kind="button" as="a" className="btn" href={hero.secondaryCta.href} label={hero.secondaryCta.label}>
              <E id="hero.cta.secondary.label" kind="text" as="span" label="Label">
                {hero.secondaryCta.label}
              </E>
              <ArrowUpRight size={18} strokeWidth={2.75} aria-hidden="true" />
            </E>
          </E>
        </E>

        <E id="hero.photo" kind="container" as="figure" className="hero__photo" label="Photo">
          <E id="hero.photo.img" kind="graphic" as="img" src={photo} alt={hero.photo.alt} width={hero.photo.width} height={hero.photo.height} label="Portrait" />
          <E id="hero.current" kind="container" as="figcaption" className="sticker surface-orange hero__current" label="Status sticker">
            <span className="status-dot" aria-hidden="true" />
            <E id="hero.current.text" kind="text" as="span" label="Status">
              {hero.current}
            </E>
          </E>
        </E>
      </E>
    </E>
  );
}

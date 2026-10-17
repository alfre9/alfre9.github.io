import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Zap } from 'lucide-react';
import type { CSSProperties } from 'react';
import { forBolt, site, work } from '../content';
import { prd } from '../prd';
import { Contact } from './Contact';
import { TokensTable } from './Prd';
import { SectionHead } from './ui';
import { VisualEditIllustration } from './Work';

function Headline() {
  return (
    <h1 id="bolt-title" className="display bolt-hero__title" tabIndex={-1}>
      {forBolt.headline.map((line, i) => {
        const sep = i < forBolt.headline.length - 1 ? ' ' : '';
        return (
          <span key={line} className="line">
            {line === forBolt.highlight ? <mark className="hero__mark">{line}</mark> : line}
            {sep}
          </span>
        );
      })}
    </h1>
  );
}

function Builds() {
  const b = forBolt.builds;
  return (
    <aside className="bolt-builds" aria-labelledby="bolt-builds-title">
      <p id="bolt-builds-title" className="mono-label bolt-builds__label">
        {b.label}
      </p>
      <ul className="bolt-builds__list">
        {b.projects.map((p) => (
          <li key={p.name} className="bolt-builds__item">
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener" className="bolt-builds__name">
                {p.name}
                <ArrowUpRight size={18} strokeWidth={2.75} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <span className="bolt-builds__name">{p.name}</span>
            )}
            <span className="bolt-builds__text">{p.text}</span>
            {p.url && <span className="bolt-builds__host mono">{new URL(p.url).hostname.replace(/^www\./, '')}</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Problem() {
  const p = forBolt.problem;
  return (
    <section id="bolt-problem" className="section section--ink" aria-labelledby="bolt-problem-title">
      <div className="wrap">
        <SectionHead num="01" label={p.label} titleId="bolt-problem-title" title={p.heading} />
        <p className="section-intro">{p.intro}</p>

        <figure className="flow">
          <figcaption className="mono-label flow__label">{p.today.label}</figcaption>
          <ol className="flow__steps">
            {p.today.steps.map((s, i) => (
              <li key={s.text} className={`flow__step${s.tag ? ' flow__step--cost' : ''}`}>
                <span className="flow__num mono" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="flow__text">{s.text}</span>
                {s.tag && <span className="flow__tag mono">{s.tag}</span>}
              </li>
            ))}
          </ol>
          <a className="flow__source mono" href={p.today.source.url} target="_blank" rel="noopener">
            {p.today.source.label}
            <ArrowUpRight size={14} strokeWidth={2.75} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </figure>

        <ol className="problems">
          {p.core.map((c, i) => (
            <li key={c.title} className="problem" style={{ '--accent': `var(--${c.accent})` } as CSSProperties}>
              <div className={`problem__band surface-${c.accent}`}>
                <span className="problem__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="problem__ask">{c.ask}</h3>
              </div>
              <div className="problem__body">
                <p className="mono-label">{c.title}</p>
                <p className="problem__text">{c.text}</p>
                <p className="problem__note">
                  <span className="mono">{c.note.label}</span> {c.note.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="also">
          <p className="mono-label also__label">{p.more.label}</p>
          <ul className="also__list">
            {p.more.items.map((m) => (
              <li key={m.title} className="also__item">
                <h3 className="also__title">{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="featured__disclosure mono">{p.note}</p>
      </div>
    </section>
  );
}

function Proposal() {
  const p = forBolt.proposal;
  return (
    <section id="bolt-proposal" className="section section--sky grid-paper" aria-labelledby="bolt-proposal-title">
      <div className="wrap">
        <SectionHead num="02" label={p.label} titleId="bolt-proposal-title" title={p.heading} />
        <p className="section-intro">{p.intro}</p>

        <figure className="paths" aria-labelledby="bolt-paths-caption">
          <figcaption id="bolt-paths-caption" className="sr-only">
            Every edit starts by selecting an element. If Bolt can map and patch it safely, it is a supported edit that uses no tokens. If not, the user
            chooses whether to ask AI.
          </figcaption>
          <div className="paths__start">
            <span className="paths__node mono">{p.start}</span>
            <ArrowDown className="paths__down" size={22} strokeWidth={3} aria-hidden="true" />
            <span className="paths__decision">{p.decision}</span>
          </div>
          <div className="paths__lanes">
            {p.paths.map((lane) => (
              <div key={lane.when} className="lane">
                <div className={`lane__head surface-${lane.accent}`}>
                  <span className="lane__when">{lane.when}</span>
                  <span className="lane__tag mono">{lane.tag}</span>
                </div>
                <ol className="lane__steps">
                  {lane.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p className="paths__note mono">{p.pathsNote}</p>
        </figure>

        <div className="proposal__grid">
          <div className="proposal__card">
            <h3 className="mono-label">{p.principlesLabel}</h3>
            <ul className="tenets">
              {p.principles.map((t) => (
                <li key={t.title}>
                  <strong>{t.title}.</strong> {t.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="proposal__card">
            <h3 className="mono-label">{p.measureLabel}</h3>
            <div className="north-star">
              <span className="mono north-star__label">{p.northStar.label}</span>
              <p className="north-star__name">{p.northStar.name}</p>
              <p className="north-star__text">{p.northStar.text}</p>
            </div>
            <p className="mono-label gates__label">{p.gatesLabel}</p>
            <ul className="gates">
              {p.gates.map((g) => (
                <li key={g}>
                  <Check size={16} strokeWidth={3.25} aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a className="prd-link mono" href={`#${prd.hash}`}>
          {p.prdLink}
          <ArrowRight size={16} strokeWidth={2.75} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function Priority() {
  const p = forBolt.priority;
  return (
    <section id="bolt-priority" className="section section--ink" aria-labelledby="bolt-priority-title">
      <div className="wrap">
        <SectionHead num="03" label={p.label} titleId="bolt-priority-title" title={p.heading} />
        <p className="section-intro">{p.intro}</p>

        <div className="options">
          {p.options.map((o) => (
            <div key={o.title} className="option" style={{ '--accent': `var(--${o.accent})` } as CSSProperties}>
              <div className={`option__head surface-${o.accent}`}>
                <p className="option__tag mono">{o.tag}</p>
                <h3 className="option__title">{o.title}</h3>
              </div>
              <dl className="option__body option__points">
                {o.points.map((pt) => (
                  <div key={pt.label}>
                    <dt className="mono">{pt.label}</dt>
                    <dd>{pt.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <h3 className="mono-label phases__label">{p.phasesLabel}</h3>
        <ol className="phases">
          {p.phases.map((ph) => (
            <li key={ph.when} className="lane">
              <div className={`lane__head surface-${ph.accent}`}>
                <span className="lane__when">{ph.when}</span>
                <span className="lane__tag mono">{ph.tag}</span>
              </div>
              <ol className="lane__steps">
                {ph.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
        <p className="phases__note mono">{p.phasesNote}</p>

        <h3 className="mono-label phases__label">{p.tokensLabel}</h3>
        <TokensTable />
        <p className="phases__note mono">{p.tokensNote}</p>

        <div className="change-mind">
          <p className="mono-label">{p.changeMind.label}</p>
          <p>{p.changeMind.text}</p>
        </div>

        <a className="prd-link mono" href="#prd-priority">
          {p.prdLink}
          <ArrowRight size={16} strokeWidth={2.75} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function Prototype() {
  const p = forBolt.prototype;
  return (
    <section id="bolt-prototype" className="section section--paper" aria-labelledby="bolt-proto-title">
      <div className="wrap">
        <SectionHead num="04" label={p.label} titleId="bolt-proto-title" title={p.title} />
        <div className="featured bolt-proto">
          <div className="featured__grid">
            <div className="featured__copy">
              <p className="featured__desc">{p.text}</p>
              <p className="mono-label try__label">{p.tryLabel}</p>
              <ol className="try">
                {p.tryIt.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </div>
            <div className="featured__visual">
              <VisualEditIllustration />
            </div>
          </div>
          <div className="featured__actions">
            {site.prototypeUrl && (
              <a className="btn btn--ink" href={site.prototypeUrl} target="_blank" rel="noopener">
                {p.cta} <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            <a className="btn" href={`#${prd.hash}`}>
              {p.prdCta}
              <ArrowRight size={18} strokeWidth={2.75} aria-hidden="true" />
            </a>
          </div>
          <div className="thinking">
            <div className="thinking__col">
              <h3 className="mono-label">{p.coversLabel}</h3>
              <ul className="covers">
                {p.covers.map((c) => (
                  <li key={c.id}>
                    <span className="covers__id mono">{c.id}</span>
                    {c.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="thinking__col">
              <h3 className="mono-label">{p.simulatedLabel}</h3>
              <ul className="arrow-list">
                {p.simulated.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="featured__disclosure mono">{work.featured.disclosure}</p>
        </div>
      </div>
    </section>
  );
}

function Start() {
  const s = forBolt.start;
  return (
    <section className="section section--paper grid-paper" aria-labelledby="bolt-start-title">
      <div className="wrap">
        <SectionHead num="05" label="First 90 days" titleId="bolt-start-title" title={s.heading} />
        <p className="section-intro">{s.note}</p>
        <ol className="plan">
          {s.steps.map((step, i) => (
            <li key={step.when} className="plan__step">
              <span className={`plan__when mono surface-${(['lime', 'sky', 'coral'] as const)[i % 3]}`}>{step.when}</span>
              <h3 className="plan__title">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="featured__disclosure mono">{forBolt.disclosure}</p>
      </div>
    </section>
  );
}

export function ForBolt() {
  const b = forBolt;
  return (
    <>
      <section id={b.hash} className="bolt-hero grid-paper" aria-labelledby="bolt-title">
        <div className="wrap">
          <div className="bolt-hero__top">
            <a className="bolt-back mono" href="#top">
              <ArrowLeft size={16} strokeWidth={2.75} aria-hidden="true" />
              {b.back}
            </a>
            <p className="sticker surface-bolt bolt-hero__sticker">
              <Zap size={16} strokeWidth={2.75} aria-hidden="true" />
              {b.sticker}
            </p>
          </div>
          <div className="bolt-hero__intro">
            <div>
              <Headline />
              <p className="bolt-hero__lede">{b.lede}</p>
              <a className="btn btn--ink bolt-hero__cta" href="#bolt-problem">
                {b.proposalCta}
                <ArrowDown size={18} strokeWidth={2.75} aria-hidden="true" />
              </a>
            </div>
            {b.builds.projects.length > 0 && <Builds />}
          </div>
          <ul className="bolt-stats">
            {b.stats.map((s) => (
              <li key={s.value} className={`bolt-stat surface-${s.accent}`}>
                <span className="bolt-stat__value">{s.value}</span>
                <span className="bolt-stat__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Problem />
      <Proposal />
      <Priority />
      <Prototype />
      <Start />
      <Contact num="06" />
    </>
  );
}

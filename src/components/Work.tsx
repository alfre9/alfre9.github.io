import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { site, work, type CaseStudy } from '../content';
import { prd } from '../prd';
import { SectionHead } from './ui';

function Case({ c }: { c: CaseStudy }) {
  return (
    <article className="case" aria-labelledby={`case-${c.id}`}>
      <div className={`case__band surface-${c.accent}`}>
        <span className="case__letter" aria-hidden="true">
          {c.letter}
        </span>
        <span className="mono">{c.kicker}</span>
      </div>
      <div className="case__body">
        <div className="case__intro">
          <h3 id={`case-${c.id}`} className="case__title">
            {c.title}
          </h3>
          <p className="case__summary">{c.summary}</p>
          <ul className="chips" aria-label="Themes">
            {c.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <dl className="case__fields">
          <div>
            <dt>Customer problem</dt>
            <dd>{c.problem}</dd>
          </div>
          <div>
            <dt>My role</dt>
            <dd>{c.role}</dd>
          </div>
          <div>
            <dt>Complexity</dt>
            <dd>{c.complexity}</dd>
          </div>
          <div>
            <dt>What changed</dt>
            <dd>
              <ul className="arrow-list">
                {c.changed.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="case__shows">
            <dt>What it shows about how I work</dt>
            <dd>{c.shows}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function Builder() {
  const b = work.builder;
  return (
    <article className="case builder" aria-labelledby="case-builder">
      <div className="case__band surface-coral">
        <span className="case__letter" aria-hidden="true">
          {b.letter}
        </span>
        <span className="mono">{b.kicker}</span>
      </div>
      <div className="builder__body">
        <h3 id="case-builder" className="case__title builder__title">
          {b.title}
        </h3>
        <div className="builder__cols">
          <section className="builder__col" aria-labelledby="builder-then">
            <p className="mono-label">{b.then.label}</p>
            <h4 id="builder-then">{b.then.title}</h4>
            <p>{b.then.text}</p>
          </section>
          <section className="builder__col" aria-labelledby="builder-work">
            <p className="mono-label">{b.atWork.label}</p>
            <h4 id="builder-work">{b.atWork.title}</h4>
            <p>{b.atWork.text}</p>
          </section>
          <section className="builder__col builder__col--now" aria-labelledby="builder-now">
            <p className="mono-label">{b.now.label}</p>
            <h4 id="builder-now">{b.now.title}</h4>
            <p>{b.now.text}</p>
            {b.now.projects.length > 0 && (
              <ul className="projects">
                {b.now.projects.map((p) => (
                  <li key={p.name}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener" className="projects__name">
                        {p.name}
                        <ArrowUpRight size={16} strokeWidth={2.75} aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <span className="projects__name">{p.name}</span>
                    )}
                    <span className="projects__text">{p.text}</span>
                  </li>
                ))}
              </ul>
            )}
            {b.now.tools.length > 0 && (
              <div className="toolkit">
                <span className="mono-label">Toolkit for personal builds</span>
                <ul className="chips chips--small">
                  {b.now.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
        <p className="builder__shows">
          <span className="mono-label">What it shows</span> {b.shows}
        </p>
      </div>
    </article>
  );
}

/** Original illustration of the Visual Design idea: a selected element, a floating toolbar, and an inspector. */
export function VisualEditIllustration() {
  return (
    <svg className="vd-illo" viewBox="0 0 520 360" role="img" aria-label="Illustration: a web page with one button selected for direct editing, a floating toolbar, and an inspector panel.">
      <rect x="18" y="18" width="494" height="334" fill="#000" />
      <rect x="10" y="10" width="494" height="334" fill="#fff" stroke="#000" strokeWidth="3" />
      <rect x="10" y="10" width="494" height="28" fill="#000" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={22 + i * 16} y="19" width="10" height="10" fill={['#ff6e6c', '#d7ff28', '#87ceeb'][i]} />
      ))}
      {/* page */}
      <rect x="34" y="62" width="220" height="18" fill="#000" />
      <rect x="34" y="88" width="168" height="18" fill="#000" />
      <rect x="34" y="122" width="250" height="6" fill="#9aa3ab" />
      <rect x="34" y="136" width="226" height="6" fill="#9aa3ab" />
      <rect x="34" y="150" width="196" height="6" fill="#9aa3ab" />
      <rect className="vd-illo__btn" x="34" y="184" width="124" height="34" fill="#d7ff28" stroke="#000" strokeWidth="3" />
      <rect x="54" y="198" width="60" height="6" fill="#000" />
      <rect x="168" y="184" width="96" height="34" fill="#fff" stroke="#000" strokeWidth="3" />
      {/* selection */}
      <rect x="27" y="177" width="138" height="48" fill="none" stroke="#0369a1" strokeWidth="2.5" strokeDasharray="6 4" />
      {[
        [27, 177],
        [165, 177],
        [27, 225],
        [165, 225],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 5} y={y - 5} width="10" height="10" fill="#fff" stroke="#0369a1" strokeWidth="2.5" />
      ))}
      <rect x="27" y="157" width="58" height="16" fill="#0369a1" />
      <text x="56" y="169" fill="#fff" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" textAnchor="middle">
        BUTTON
      </text>
      {/* floating toolbar */}
      <rect x="40" y="250" width="250" height="42" fill="#000" />
      <rect x="34" y="244" width="250" height="42" fill="#fff" stroke="#000" strokeWidth="3" />
      <text x="56" y="271" fontFamily="Archivo Black, sans-serif" fontSize="15">
        Aa
      </text>
      <rect x="92" y="256" width="18" height="18" fill="#d7ff28" stroke="#000" strokeWidth="2.5" />
      <path d="M126 274 V264 Q126 256 134 256 H142" fill="none" stroke="#000" strokeWidth="2.5" />
      <rect x="156" y="256" width="18" height="18" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <rect x="160" y="260" width="18" height="18" fill="none" stroke="#000" strokeWidth="2.5" />
      <line x1="190" y1="254" x2="190" y2="276" stroke="#000" strokeWidth="2" />
      <rect x="200" y="256" width="72" height="18" fill="#eef9fd" stroke="#000" strokeWidth="2" />
      <rect x="207" y="263" width="44" height="4" fill="#9aa3ab" />
      {/* inspector */}
      <rect x="372" y="38" width="132" height="306" fill="#87ceeb" stroke="#000" strokeWidth="3" />
      {['FILL', 'RADIUS', 'SHADOW', 'TEXT'].map((t, i) => (
        <g key={t}>
          <text x="386" y={70 + i * 66} fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700">
            {t}
          </text>
          <rect x="386" y={78 + i * 66} width="104" height="24" fill="#fff" stroke="#000" strokeWidth="2.5" />
          {i === 0 && <rect x="392" y="84" width="12" height="12" fill="#d7ff28" stroke="#000" strokeWidth="2" />}
          <rect x={i === 0 ? 410 : 394} y={88 + i * 66} width={i === 0 ? 50 : 40 + i * 8} height="4" fill="#000" />
        </g>
      ))}
    </svg>
  );
}

function Featured() {
  const f = work.featured;
  const [open, setOpen] = useState(false);
  const hasThinking = f.implemented.length > 0 || f.simulated.length > 0;

  return (
    <article id="prototype-case" className="featured grid-paper" aria-labelledby="featured-title">
      <div className="featured__top">
        <p className="sticker surface-coral featured__label">{f.label}</p>
        <span className="case__letter featured__letter" aria-hidden="true">
          D
        </span>
      </div>
      <div className="featured__grid">
        <div className="featured__copy">
          <h3 id="featured-title" className="display featured__title">
            {f.title}
          </h3>
          <p className="featured__desc">{f.description}</p>
          <blockquote className="featured__insight">
            <p>{f.insight}</p>
          </blockquote>
        </div>
        <div className="featured__visual">
          {f.screenshot ? (
            <img src={f.screenshot} alt="Screenshot of the Visual Design prototype" width="1600" height="1000" loading="lazy" />
          ) : (
            <VisualEditIllustration />
          )}
        </div>
      </div>

      <ol className="steps">
        {f.steps.map((s, i) => (
          <li key={s.label} className="step">
            <span className="step__num" aria-hidden="true">
              {i + 1}
            </span>
            <h4 className="step__label">{s.label}</h4>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="featured__actions">
        {site.prototypeUrl && (
          <a className="btn btn--ink" href={site.prototypeUrl} target="_blank" rel="noopener">
            Open the prototype <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        <a className="btn" href={`#${prd.hash}`}>
          Read the PRD
          <ArrowRight size={18} strokeWidth={2.75} aria-hidden="true" />
        </a>
        {hasThinking && (
          <button className="btn" aria-expanded={open} aria-controls="featured-thinking" onClick={() => setOpen((o) => !o)}>
            Explore the thinking
            <ChevronDown className="btn__chev" size={18} strokeWidth={2.75} aria-hidden="true" />
          </button>
        )}
      </div>

      {hasThinking && (
        <div id="featured-thinking" className="thinking" hidden={!open}>
          <div className="thinking__col">
            <h4 className="mono-label">Working in the prototype</h4>
            <ul className="arrow-list">
              {f.implemented.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="thinking__col">
            <h4 className="mono-label">Simulated</h4>
            <ul className="arrow-list">
              {f.simulated.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <p className="featured__disclosure mono">{f.disclosure}</p>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="section section--paper" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead num="05" label="Selected work" titleId="work-title" title={work.heading} />
        <div className="cases">
          {work.cases.map((c) => (
            <Case key={c.id} c={c} />
          ))}
          <Builder />
          <Featured />
        </div>
      </div>
    </section>
  );
}

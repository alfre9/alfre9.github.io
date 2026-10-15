import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { site, work, type CaseStudy } from '../../../personal-site/src/content';
import { E } from '../../editor/E';
import { useEditState } from '../../editor/store';
import { SectionHead, useDesignSelection, within } from '../ui';

function Band({ id, accent, letter, kicker }: { id: string; accent: string; letter: string; kicker: string }) {
  return (
    <E id={`${id}.band`} kind="container" className={`case__band surface-${accent}`} label="Band">
      <E id={`${id}.letter`} kind="text" as="span" className="case__letter" aria-hidden="true" label="Letter">
        {letter}
      </E>
      <E id={`${id}.kicker`} kind="text" as="span" className="mono" label="Kicker">
        {kicker}
      </E>
    </E>
  );
}

function Field({ id, term, children }: { id: string; term: string; children: React.ReactNode }) {
  return (
    <>
      <E id={`${id}.label`} kind="text" as="dt" label="Label">
        {term}
      </E>
      <E id={id} kind="text" as="dd" label={term}>
        {children}
      </E>
    </>
  );
}

function Case({ c }: { c: CaseStudy }) {
  const p = `work.${c.id}`;
  return (
    <E id={p} kind="container" as="article" className="case" aria-labelledby={`case-${c.id}`} label={c.title}>
      <Band id={p} accent={c.accent} letter={c.letter} kicker={c.kicker} />
      <div className="case__body">
        <div className="case__intro">
          <E id={`${p}.title`} htmlId={`case-${c.id}`} kind="heading" as="h3" className="case__title" label="Title">
            {c.title}
          </E>
          <E id={`${p}.summary`} kind="text" as="p" className="case__summary" label="Summary">
            {c.summary}
          </E>
          <E id={`${p}.tags`} kind="container" as="ul" className="chips" aria-label="Themes" label="Tags">
            {c.tags.map((t, i) => (
              <E key={t} id={`${p}.tag.${i}`} kind="text" as="li" label="Tag">
                {t}
              </E>
            ))}
          </E>
        </div>
        <dl className="case__fields">
          <div>
            <Field id={`${p}.problem`} term="Customer problem">
              {c.problem}
            </Field>
          </div>
          <div>
            <Field id={`${p}.role`} term="My role">
              {c.role}
            </Field>
          </div>
          <div>
            <Field id={`${p}.complexity`} term="Complexity">
              {c.complexity}
            </Field>
          </div>
          <div>
            <E id={`${p}.changed.label`} kind="text" as="dt" label="Label">
              What changed
            </E>
            <dd>
              <ul className="arrow-list">
                {c.changed.map((x, i) => (
                  <E key={x} id={`${p}.changed.${i}`} kind="text" as="li" label={`Result ${i + 1}`}>
                    {x}
                  </E>
                ))}
              </ul>
            </dd>
          </div>
          <div className="case__shows">
            <Field id={`${p}.shows`} term="What it shows about how I work">
              {c.shows}
            </Field>
          </div>
        </dl>
      </div>
    </E>
  );
}

function Col({ id, label, title, text, className = 'builder__col', children }: { id: string; label: string; title: string; text: string; className?: string; children?: React.ReactNode }) {
  return (
    <E id={`work.builder.${id}`} kind="container" as="section" className={className} aria-labelledby={`builder-${id}`} label={title}>
      <E id={`work.builder.${id}.label`} kind="text" as="p" className="mono-label" label="Label">
        {label}
      </E>
      <E id={`work.builder.${id}.title`} htmlId={`builder-${id}`} kind="heading" as="h4" label="Title">
        {title}
      </E>
      <E id={`work.builder.${id}.text`} kind="text" as="p" label="Text">
        {text}
      </E>
      {children}
    </E>
  );
}

function Builder() {
  const b = work.builder;
  return (
    <E id="work.builder" kind="container" as="article" className="case builder" aria-labelledby="case-builder" label="Builder card">
      <Band id="work.builder" accent="coral" letter={b.letter} kicker={b.kicker} />
      <div className="builder__body">
        <E id="work.builder.title" htmlId="case-builder" kind="heading" as="h3" className="case__title builder__title" label="Title">
          {b.title}
        </E>
        <div className="builder__cols">
          <Col id="then" {...b.then} />
          <Col id="work" {...b.atWork} />
          <Col id="now" {...b.now} className="builder__col builder__col--now">
            {b.now.projects.length > 0 && (
              <E id="work.builder.projects" kind="container" as="ul" className="projects" label="Projects">
                {b.now.projects.map((p, i) => (
                  <li key={p.name}>
                    {p.url ? (
                      <E id={`work.builder.project.${i}`} kind="link" as="a" href={p.url} target="_blank" className="projects__name" label={`${p.name} link`}>
                        <E id={`work.builder.project.${i}.name`} kind="text" as="span" label="Name">
                          {p.name}
                        </E>
                        <ArrowUpRight size={16} strokeWidth={2.75} aria-hidden="true" />
                      </E>
                    ) : (
                      <E id={`work.builder.project.${i}.name`} kind="text" as="span" className="projects__name" label="Name">
                        {p.name}
                      </E>
                    )}
                    <E id={`work.builder.project.${i}.text`} kind="text" as="span" className="projects__text" label="Description">
                      {p.text}
                    </E>
                  </li>
                ))}
              </E>
            )}
            {b.now.tools.length > 0 && (
              <E id="work.builder.toolkit" kind="container" className="toolkit" label="Toolkit">
                <E id="work.builder.toolkit.label" kind="text" as="span" className="mono-label" label="Label">
                  Toolkit for personal builds
                </E>
                <ul className="chips chips--small">
                  {b.now.tools.map((t, i) => (
                    <E key={t} id={`work.builder.tool.${i}`} kind="text" as="li" label="Tool">
                      {t}
                    </E>
                  ))}
                </ul>
              </E>
            )}
          </Col>
        </div>
        <E id="work.builder.shows" kind="text" as="p" className="builder__shows" label="What it shows">
          <E id="work.builder.shows.label" kind="text" as="span" className="mono-label" label="Label">
            What it shows
          </E>{' '}
          <E id="work.builder.shows.text" kind="text" as="span" label="Text">
            {b.shows}
          </E>
        </E>
      </div>
    </E>
  );
}

/** Copied from personal-site/src/components/Work.tsx: a selected element, a floating toolbar, and an inspector. */
function VisualEditIllustration() {
  return (
    <svg className="vd-illo" viewBox="0 0 520 360" role="img" aria-label="Illustration: a web page with one button selected for direct editing, a floating toolbar, and an inspector panel.">
      <rect x="18" y="18" width="494" height="334" fill="#000" />
      <rect x="10" y="10" width="494" height="334" fill="#fff" stroke="#000" strokeWidth="3" />
      <rect x="10" y="10" width="494" height="28" fill="#000" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={22 + i * 16} y="19" width="10" height="10" fill={['#ff6e6c', '#d7ff28', '#87ceeb'][i]} />
      ))}
      <rect x="34" y="62" width="220" height="18" fill="#000" />
      <rect x="34" y="88" width="168" height="18" fill="#000" />
      <rect x="34" y="122" width="250" height="6" fill="#9aa3ab" />
      <rect x="34" y="136" width="226" height="6" fill="#9aa3ab" />
      <rect x="34" y="150" width="196" height="6" fill="#9aa3ab" />
      <rect className="vd-illo__btn" x="34" y="184" width="124" height="34" fill="#d7ff28" stroke="#000" strokeWidth="3" />
      <rect x="54" y="198" width="60" height="6" fill="#000" />
      <rect x="168" y="184" width="96" height="34" fill="#fff" stroke="#000" strokeWidth="3" />
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

/** "Explore the thinking" toggles in Preview, and opens in Visual Design while the button or the panel is selected. */
function Featured() {
  const f = work.featured;
  const { mode } = useEditState();
  const sel = useDesignSelection();
  const [toggled, setToggled] = useState(false);
  const open = mode === 'design' ? within(sel, 'work.featured.thinking') || within(sel, 'work.featured.notes') : toggled;
  const hasThinking = f.implemented.length > 0 || f.simulated.length > 0;

  return (
    <E id="work.featured" htmlId="prototype-case" kind="container" as="article" className="featured grid-paper" aria-labelledby="featured-title" label="Featured prototype">
      <div className="featured__top">
        <E id="work.featured.label" kind="text" as="p" className="sticker surface-coral featured__label" label="Sticker">
          {f.label}
        </E>
        <E id="work.featured.letter" kind="text" as="span" className="case__letter featured__letter" aria-hidden="true" label="Letter">
          D
        </E>
      </div>
      <div className="featured__grid">
        <div className="featured__copy">
          <E id="work.featured.title" htmlId="featured-title" kind="heading" as="h3" className="display featured__title" label="Title">
            {f.title}
          </E>
          <E id="work.featured.desc" kind="text" as="p" className="featured__desc" label="Description">
            {f.description}
          </E>
          <E id="work.featured.insight" kind="container" as="blockquote" className="featured__insight" label="Insight">
            <E id="work.featured.insight.text" kind="text" as="p" label="Quote">
              {f.insight}
            </E>
          </E>
        </div>
        <E id="work.featured.visual" kind="graphic" className="featured__visual" label="Illustration">
          <VisualEditIllustration />
        </E>
      </div>

      <E id="work.featured.steps" kind="container" as="ol" className="steps" label="Steps">
        {f.steps.map((s, i) => (
          <E key={s.label} id={`work.featured.step.${i}`} kind="container" as="li" className="step" label={`Step ${i + 1}`}>
            <E id={`work.featured.step.${i}.num`} kind="text" as="span" className="step__num" aria-hidden="true" label="Number">
              {String(i + 1)}
            </E>
            <E id={`work.featured.step.${i}.label`} kind="heading" as="h4" className="step__label" label="Label">
              {s.label}
            </E>
            <E id={`work.featured.step.${i}.text`} kind="text" as="p" label="Text">
              {s.text}
            </E>
          </E>
        ))}
      </E>

      <E id="work.featured.actions" kind="container" className="featured__actions" label="Buttons">
        {site.prototypeUrl && (
          <E id="work.featured.open" kind="button" as="a" className="btn btn--ink" href={site.prototypeUrl} target="_blank" label="Open the prototype">
            <E id="work.featured.open.label" kind="text" as="span" label="Label">
              Open the prototype
            </E>
            <span aria-hidden="true">↗</span>
          </E>
        )}
        {hasThinking && (
          <E id="work.featured.thinking" kind="button" as="button" type="button" className="btn" aria-expanded={open} onClick={() => setToggled((o) => !o)} label="Explore the thinking">
            <E id="work.featured.thinking.label" kind="text" as="span" label="Label">
              Explore the thinking
            </E>
            <ChevronDown className="btn__chev" size={18} strokeWidth={2.75} aria-hidden="true" />
          </E>
        )}
      </E>

      {hasThinking && (
        <E id="work.featured.notes" kind="container" className="thinking" hidden={!open} label="Thinking">
          <div className="thinking__col">
            <E id="work.featured.notes.implemented.label" kind="text" as="h4" className="mono-label" label="Label">
              Working in the prototype
            </E>
            <ul className="arrow-list">
              {f.implemented.map((x, i) => (
                <E key={x} id={`work.featured.notes.implemented.${i}`} kind="text" as="li" label={`Item ${i + 1}`}>
                  {x}
                </E>
              ))}
            </ul>
          </div>
          <div className="thinking__col">
            <E id="work.featured.notes.simulated.label" kind="text" as="h4" className="mono-label" label="Label">
              Simulated
            </E>
            <ul className="arrow-list">
              {f.simulated.map((x, i) => (
                <E key={x} id={`work.featured.notes.simulated.${i}`} kind="text" as="li" label={`Item ${i + 1}`}>
                  {x}
                </E>
              ))}
            </ul>
          </div>
        </E>
      )}

      <E id="work.featured.disclosure" kind="text" as="p" className="featured__disclosure mono" label="Disclosure">
        {f.disclosure}
      </E>
    </E>
  );
}

export function Work() {
  return (
    <E id="work" htmlId="work" kind="section" as="section" className="section section--paper" aria-labelledby="work-title" file="Work" label="Selected work">
      <div className="wrap">
        <SectionHead id="work" num="05" label="Selected work" titleId="work-title" title={work.heading} />
        <div className="cases">
          {work.cases.map((c) => (
            <Case key={c.id} c={c} />
          ))}
          <Builder />
          <Featured />
        </div>
      </div>
    </E>
  );
}

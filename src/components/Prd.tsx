import { ArrowLeft, ArrowUpRight, Check, FileText, Sparkles, X } from 'lucide-react';
import { Fragment, type ReactNode } from 'react';
import { forBolt, site } from '../content';
import { phaseIds, prd, prdSections } from '../prd';
import { useActiveSection } from './Header';

/** Renders `code` and **bold** inside PRD strings. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`|\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith('`') ? (
          <code key={i}>{part.slice(1, -1)}</code>
        ) : part.startsWith('**') ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

const SECTION = Object.fromEntries(prdSections.map((s, i) => [s.id, { ...s, num: String(i + 1).padStart(2, '0') }]));

function Part({ id, children }: { id: (typeof prdSections)[number]['id']; children: ReactNode }) {
  const s = SECTION[id];
  return (
    <section id={id} className="prd-part" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="prd-part__title">
        <span className="prd-part__num">{s.num}</span>
        {s.label}
      </h2>
      {children}
    </section>
  );
}

interface Col {
  key: string;
  label: string;
}

/** A real table on wide screens; each row stacks into a labelled card on phones (see `.prd-table` in styles.css). */
function Table({ caption, cols, rowHeader, rows }: { caption: string; cols: Col[]; rowHeader: string; rows: Record<string, ReactNode>[] }) {
  return (
    <table className="prd-table">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>
          {cols.map((c) => (
            <th key={c.key} scope="col">
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {cols.map((c) =>
              c.key === rowHeader ? (
                <th key={c.key} scope="row" data-label={c.label}>
                  {r[c.key]}
                </th>
              ) : (
                <td key={c.key} data-label={c.label}>
                  {r[c.key]}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Where tokens are spent, today and in each phase. Used in the PRD and on the Bolt page's slide 03. */
export function TokensTable() {
  return (
    <div className="tokens">
      <Table
        caption="Where tokens are spent today, in phase 1, and in phase 2"
        rowHeader="action"
        cols={[
          { key: 'action', label: 'What the user does' },
          { key: 'today', label: 'Today' },
          { key: 'phase1', label: 'Phase 1' },
          { key: 'phase2', label: 'Phase 2' },
        ]}
        rows={prd.priority.tokens.map((r) => ({
          action: r.action,
          today: r.today,
          phase1: r.phase1,
          phase2: <Rich text={r.phase2} />,
        }))}
      />
    </div>
  );
}

const MARKS = { check: Check, x: X, ai: Sparkles };

function Checks({ items, mark = 'check' }: { items: string[]; mark?: keyof typeof MARKS }) {
  const Icon = MARKS[mark];
  return (
    <ul className={`prd-checks prd-checks--${mark}`}>
      {items.map((x) => (
        <li key={x}>
          <Icon size={16} strokeWidth={mark === 'ai' ? 2.5 : 3.25} aria-hidden="true" />
          <span>
            <Rich text={x} />
          </span>
        </li>
      ))}
    </ul>
  );
}

const TOC_IDS = prdSections.map((s) => s.id);

function Toc() {
  const active = useActiveSection(TOC_IDS, 'prd');
  return (
    <nav className="prd-toc" aria-label="PRD contents">
      <p className="mono-label prd-toc__label">Contents</p>
      <ol className="prd-toc__list">
        {prdSections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined}>
              <span className="mono">{SECTION[s.id].num}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function PrototypeButton() {
  if (!site.prototypeUrl) return null;
  return (
    <a className="btn btn--ink" href={site.prototypeUrl} target="_blank" rel="noopener">
      Open the prototype <span aria-hidden="true">↗</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function Prd() {
  const { metrics, audience, scope, technical: t, priority: pr, validation: v } = prd;
  return (
    <>
      <section id={prd.hash} className="prd-hero grid-paper" aria-labelledby="prd-title">
        <div className="wrap">
          <div className="bolt-hero__top">
            <a className="bolt-back mono" href={`#${forBolt.hash}`}>
              <ArrowLeft size={16} strokeWidth={2.75} aria-hidden="true" />
              {prd.back}
            </a>
            <p className="sticker surface-lime bolt-hero__sticker">
              <FileText size={16} strokeWidth={2.75} aria-hidden="true" />
              {prd.sticker}
            </p>
          </div>
          <p className="mono-label prd-hero__kicker">{prd.kicker}</p>
          <h1 id="prd-title" className="display prd-hero__title" tabIndex={-1}>
            {prd.title}
          </h1>
          <dl className="prd-meta">
            {prd.meta.map((m) => (
              <div key={m.label}>
                <dt className="mono">{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          <div className="featured__actions">
            <PrototypeButton />
          </div>
          <p className="featured__disclosure mono">{prd.disclosure}</p>
        </div>
      </section>

      <div className="prd-body">
        <div className="wrap prd-layout">
          <Toc />
          <article className="prd-doc" aria-labelledby="prd-title">
            <Part id="prd-objective">
              {prd.objective.map((p, i) => (
                <p key={p} className={i === 0 ? 'prd-lead' : undefined}>
                  {p}
                </p>
              ))}
            </Part>

            <Part id="prd-problem">
              {prd.problem.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <a className="prd-source mono" href={prd.problem.source.url} target="_blank" rel="noopener">
                {prd.problem.source.label}
                <ArrowUpRight size={14} strokeWidth={2.75} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <ol className="prd-problems">
                {prd.problem.items.map((item, i) => (
                  <li key={item.title} className="prd-problem">
                    <p className="mono-label prd-problem__num">Problem {i + 1}</p>
                    <h3 className="prd-problem__title">{item.title}</h3>
                    {item.text.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <dl className="prd-notes">
                      {item.notes.map((n) => (
                        <div key={n.label} className={`prd-note prd-note--${n.label.split(' ')[0].toLowerCase()}`}>
                          <dt className="mono">{n.label}</dt>
                          <dd>{n.text}</dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                ))}
              </ol>
            </Part>

            <Part id="prd-metrics">
              <div className="prd-callout surface-lime">
                <p className="mono-label">Primary outcome</p>
                <p className="prd-callout__title">{metrics.primary.name}</p>
                <p>{metrics.primary.text}</p>
                <p className="prd-callout__note">{metrics.primary.note}</p>
              </div>
              <h3 className="prd-h3">Supporting metrics</h3>
              <Table
                caption="Supporting metrics"
                rowHeader="metric"
                cols={[
                  { key: 'metric', label: 'Metric' },
                  { key: 'definition', label: 'Definition' },
                  { key: 'purpose', label: 'Purpose' },
                ]}
                rows={metrics.table}
              />
            </Part>

            <Part id="prd-audience">
              <div className="prd-audience">
                {(
                  [
                    ['Primary audience', audience.primary],
                    ['Secondary audience', audience.secondary],
                  ] as const
                ).map(([label, a]) => (
                  <div key={label} className="prd-audience__card">
                    <h3 className="mono-label">{label}</h3>
                    <p>{a.who}</p>
                    <p className="mono prd-audience__job-label">Their job</p>
                    <blockquote className="prd-quote">
                      <p>“{a.job}”</p>
                    </blockquote>
                  </div>
                ))}
              </div>
              <h3 className="prd-h3">{audience.segmentsLabel}</h3>
              <table className="prd-segments">
                <caption className="sr-only">Customer segments, checked where this feature has an impact</caption>
                <thead>
                  <tr>
                    <th scope="col">Segment</th>
                    <th scope="col">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {audience.segments.map((s) => (
                    <tr key={s.segment}>
                      <th scope="row">{s.segment}</th>
                      <td>
                        <span className={`prd-box${s.benefits ? ' prd-box--yes' : ''}`} aria-hidden="true">
                          {s.benefits && <Check size={16} strokeWidth={3.25} />}
                        </span>
                        <span className="sr-only">{s.benefits ? 'Yes' : 'No'}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="prd-h3">Initial eligibility</h3>
              {audience.eligibility.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Part>

            <Part id="prd-scope">
              <div className="prd-scope">
                <div className="prd-scope__col">
                  <h3 className="prd-scope__head surface-lime">In scope</h3>
                  <Checks items={scope.in} />
                </div>
                <div className="prd-scope__col">
                  <h3 className="prd-scope__head surface-coral">Out of scope</h3>
                  <Checks items={scope.out} mark="x" />
                </div>
              </div>
            </Part>

            <Part id="prd-requirements">
              <p>{prd.requirementsNote}</p>
              <Table
                caption="Requirements, with priority, phase, and acceptance criteria"
                rowHeader="title"
                cols={[
                  { key: 'id', label: 'ID' },
                  { key: 'title', label: 'Requirement' },
                  { key: 'priority', label: 'Priority' },
                  { key: 'phase', label: 'Phase' },
                  { key: 'criteria', label: 'Acceptance criteria' },
                ]}
                rows={prd.requirements.map((r) => ({
                  id: <span className="mono prd-id">{r.id}</span>,
                  title: r.title,
                  priority: <span className={`prd-priority prd-priority--${r.priority.toLowerCase()} mono`}>{r.priority}</span>,
                  phase: <span className={`prd-priority prd-phase--${r.phase} mono`}>{r.phase}</span>,
                  criteria: r.criteria,
                }))}
              />
            </Part>

            <Part id="prd-technical">
              <p>{t.intro}</p>

              <h3 className="prd-h3">{t.todayLabel}</h3>
              <p className="mono-label prd-assume__label">Assumptions · to confirm with engineering</p>
              <ol className="prd-assume">
                {t.today.map((a, i) => (
                  <li key={a.title}>
                    <span className="prd-assume__id mono" aria-hidden="true">
                      A{i + 1}
                    </span>
                    <div>
                      <h4 className="prd-assume__title">{a.title}</h4>
                      <p>{a.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="prd-aside">{t.todayTakeaway}</p>

              <h3 className="prd-h3">{t.approachLabel}</h3>
              <ul className="prd-principles">
                {t.approach.map((a) => (
                  <li key={a.title}>
                    <h4 className="prd-principles__title">{a.title}</h4>
                    <p>{a.text}</p>
                  </li>
                ))}
              </ul>

              <h3 className="prd-h3">{t.splitLabel}</h3>
              <div className="prd-scope">
                <div className="prd-scope__col">
                  <h4 className="prd-scope__head surface-lime">{t.split.direct.label}</h4>
                  <Checks items={t.split.direct.items} />
                </div>
                <div className="prd-scope__col">
                  <h4 className="prd-scope__head surface-sky">{t.split.ai.label}</h4>
                  <Checks items={t.split.ai.items} mark="ai" />
                </div>
              </div>
              <p className="prd-aside">{t.splitNote}</p>

              <h3 className="prd-h3">{t.compareLabel}</h3>
              <Table
                caption="Today’s batch-and-save flow compared with the proposal"
                rowHeader="dimension"
                cols={[
                  { key: 'dimension', label: 'Area' },
                  { key: 'today', label: 'Today: batch and save' },
                  { key: 'proposed', label: 'Proposed' },
                ]}
                rows={t.compare}
              />
            </Part>

            <Part id="prd-priority">
              {pr.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="options">
                {pr.options.map((o) => (
                  <div key={o.title} className="option">
                    <div className={`option__head ${o.recommended ? 'surface-lime' : 'surface-paper'}`}>
                      <p className="option__tag mono">{o.tag}</p>
                      <h3 className="option__title">{o.title}</h3>
                    </div>
                    <div className="option__body">
                      <p className="option__text">{o.text}</p>
                      <dl className="option__points">
                        {o.points.map((pt) => (
                          <div key={pt.label}>
                            <dt className="mono">{pt.label}</dt>
                            <dd>{pt.text}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="prd-h3">{pr.phasesLabel}</h3>
              <ol className="phases">
                {pr.phases.map((ph) => (
                  <li key={ph.name} className="lane">
                    <div className={`lane__head surface-${ph.phase === 1 ? 'sky' : 'lime'}`}>
                      <h4 className="lane__when">{ph.name}</h4>
                      <span className="lane__tag mono">{ph.when}</span>
                    </div>
                    <ol className="lane__steps">
                      {ph.steps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                    <dl className="lane__meta">
                      <div>
                        <dt className="mono">Tokens</dt>
                        <dd>{ph.tokens}</dd>
                      </div>
                      <div>
                        <dt className="mono">Requirements</dt>
                        <dd>{phaseIds(ph.phase)}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ol>
              <h3 className="prd-h3">{pr.tokensLabel}</h3>
              <TokensTable />
              <p className="prd-aside">{pr.tokensNote}</p>
              <p className="prd-aside">
                <Rich text={pr.phaseNote} />
              </p>
              <p className="prd-aside prd-aside--mind">
                <Rich text={pr.changeMind} />
              </p>
            </Part>

            <Part id="prd-risks">
              <Table
                caption="Risks, impact, and mitigation"
                rowHeader="risk"
                cols={[
                  { key: 'risk', label: 'Risk' },
                  { key: 'impact', label: 'Impact' },
                  { key: 'mitigation', label: 'Mitigation' },
                ]}
                rows={prd.risks}
              />
            </Part>

            <Part id="prd-dependencies">
              <ul className="arrow-list prd-cols">
                {prd.dependencies.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Part>

            <Part id="prd-questions">
              <ol className="prd-questions">
                {prd.openQuestions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ol>
            </Part>

            <Part id="prd-validation">
              <h3 className="prd-h3 prd-h3--first">Discovery</h3>
              <p>{v.discovery.intro}</p>
              <p className="mono-label">{v.discovery.tasksLabel}</p>
              <ol className="prd-tasks">
                {v.discovery.tasks.map((x) => (
                  <li key={x}>{x.replace(/\.$/, '')}</li>
                ))}
              </ol>
              <p>{v.discovery.capture}</p>
              <blockquote className="prd-quote prd-quote--big">
                <p>“{v.discovery.question}”</p>
              </blockquote>

              <h3 className="prd-h3">Technical spike</h3>
              {v.spike.map((p) => (
                <p key={p}>
                  <Rich text={p} />
                </p>
              ))}

              <h3 className="prd-h3">Rollout</h3>
              <ol className="prd-rollout">
                {v.rollout.map((x) => (
                  <li key={x}>{x.replace(/\.$/, '')}</li>
                ))}
              </ol>
              <p className="prd-aside">{v.rolloutNote}</p>
            </Part>

            <div className="prd-end">
              <p className="prd-end__title">See the proposal in the prototype.</p>
              <div className="featured__actions">
                <PrototypeButton />
                <a className="btn" href={`#${forBolt.hash}`}>
                  <ArrowLeft size={18} strokeWidth={2.75} aria-hidden="true" />
                  {prd.back}
                </a>
              </div>
              <p className="featured__disclosure mono">{prd.disclosure}</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

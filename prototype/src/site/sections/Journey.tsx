import { Plus } from 'lucide-react';
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { journey, type Milestone, type Role } from '../../../../src/content';
import { E } from '../../editor/E';
import { SectionHead, useDesignSelection, within } from '../ui';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const NOW = new Date();
const NOW_IDX = NOW.getFullYear() * 12 + NOW.getMonth();

const toIdx = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
};
const fmt = (ym: string | null) => {
  if (!ym) return 'Present';
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};
const range = (r: Role) => `${fmt(r.start)} – ${fmt(r.end)}`;

const allRoles = journey.milestones.flatMap((m) => m.roles);
const START_YEAR = Math.min(...allRoles.map((r) => Number(r.start.slice(0, 4))));
const END_YEAR = Math.max(NOW.getFullYear(), ...allRoles.map((r) => Number((r.end ?? r.start).slice(0, 4)))) + 1;
const START = START_YEAR * 12;
const TOTAL = END_YEAR * 12 - START;
const pct = (idx: number) => `${((idx - START) / TOTAL) * 100}%`;
const YEARS = Array.from({ length: END_YEAR - START_YEAR }, (_, i) => START_YEAR + i);

/** Which rows can show every role title inside its bar at the current width (same rule as the site). */
function useTitlesFit() {
  const ref = useRef<HTMLUListElement>(null);
  const [fits, setFits] = useState<Record<string, boolean>>({});
  useLayoutEffect(() => {
    const list = ref.current;
    if (!list) return;
    const measure = () => {
      const next: Record<string, boolean> = {};
      list.querySelectorAll<HTMLElement>('[data-row]').forEach((row) => {
        const bars = [...row.querySelectorAll<HTMLElement>('.spans__bar')];
        next[row.dataset.row!] = bars.every((bar) => {
          const label = bar.querySelector<HTMLElement>('.spans__bar-label');
          return !!label && label.offsetWidth <= bar.clientWidth;
        });
      });
      setFits((prev) => (Object.keys(next).every((k) => prev[k] === next[k]) ? prev : next));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);
  return [ref, fits] as const;
}

function SpanChart() {
  const [listRef, fits] = useTitlesFit();
  return (
    <E id="journey.chart" kind="container" as="figure" className="spans" aria-labelledby="spans-caption" label="Career chart">
      <E id="journey.chart.caption" htmlId="spans-caption" kind="container" as="figcaption" className="spans__caption" label="Chart caption">
        <E id="journey.chart.caption.label" kind="text" as="span" className="mono-label" label="Label">
          At a glance
        </E>
        <E id="journey.chart.caption.text" kind="text" as="span" label="Caption">
          Title by title, month by month. Some roles overlap.
        </E>
      </E>
      <div className="spans__chart">
        <div className="spans__grid" aria-hidden="true">
          {YEARS.map((y) => (
            <span key={y} className="spans__year" style={{ left: pct(y * 12) }}>
              <span className="spans__year-full">{y}</span>
              <span className="spans__year-short">’{String(y).slice(2)}</span>
            </span>
          ))}
          <span className="spans__now" style={{ left: pct(NOW_IDX + 1) }}>
            <span>Now</span>
          </span>
        </div>
        <ul ref={listRef} className="spans__rows">
          {journey.milestones.map((m) => {
            const roles = [...m.roles].reverse(); // oldest first
            const first = toIdx(roles[0].start);
            const last = Math.max(...roles.map((r) => (r.end ? toIdx(r.end) : NOW_IDX))) + 1;
            const after = (last - START) / TOTAL < 0.62;
            const inside = fits[m.id] ?? true;
            const id = `journey.chart.${m.id}`;
            return (
              <li key={m.id}>
                <E id={id} kind="link" as="a" className="spans__row" href={`#role-${m.id}`} data-row={m.id} data-inside={inside} label={`${m.short} row`}>
                  <E id={`${id}.label`} kind="text" as="span" className="spans__label" label="Company">
                    {m.short}
                  </E>
                  <span className="spans__track" aria-hidden="true">
                    {roles.map((r, j) => {
                      const s = toIdx(r.start);
                      const e = r.end ? toIdx(r.end) : NOW_IDX;
                      return (
                        <E
                          key={r.title}
                          id={`${id}.bar.${j}`}
                          kind="container"
                          as="span"
                          className={`spans__bar surface-${m.accent}`}
                          style={{ left: pct(s), width: `${((e + 1 - s) / TOTAL) * 100}%` }}
                          label="Bar"
                        >
                          <E id={`${id}.bar.${j}.label`} kind="text" as="span" className="spans__bar-label" label="Title">
                            {r.short ?? r.title}
                          </E>
                        </E>
                      );
                    })}
                    {!inside && (
                      <span
                        className={`spans__title spans__title--${after ? 'after' : 'before'}`}
                        style={after ? { left: pct(last) } : { right: `${100 - ((first - START) / TOTAL) * 100}%` }}
                      >
                        {roles.map((r) => r.short ?? r.title).join(' → ')}
                      </span>
                    )}
                  </span>
                </E>
              </li>
            );
          })}
        </ul>
      </div>
    </E>
  );
}

/** Opens natively in Preview, and while anything inside is selected in Visual Design. */
function MoreDetails({ id, children }: { id: string; children: ReactNode }) {
  const sel = useDesignSelection();
  return (
    <E id={id} kind="container" as="details" className="milestone__more" open={within(sel, id) || undefined} label="More about this role">
      {children}
    </E>
  );
}

function MilestoneCard({ m, i }: { m: Milestone; i: number }) {
  const p = `journey.${m.id}`;
  const highlights = m.roles.filter((r) => r.highlights.length > 0);
  return (
    <E id={p} htmlId={`role-${m.id}`} kind="container" as="li" className="milestone" label={m.company}>
      <E id={`${p}.marker`} kind="text" as="span" className={`milestone__marker surface-${m.accent}`} aria-hidden="true" label="Marker">
        {String(i + 1).padStart(2, '0')}
      </E>
      <E id={`${p}.card`} kind="container" as="article" className="milestone__card" aria-labelledby={`role-${m.id}-name`} label="Card">
        <E id={`${p}.head`} kind="container" as="header" className="milestone__head" label="Card header">
          <E id={`${p}.theme`} kind="text" as="p" className="milestone__theme mono" label="Theme">
            {m.theme}
          </E>
          <E id={`${p}.company`} htmlId={`role-${m.id}-name`} kind="heading" as="h3" className="milestone__company" label="Company">
            {m.company}
          </E>
          <ul className="milestone__roles">
            {m.roles.map((r, j) => (
              <li key={r.title}>
                <E id={`${p}.role.${j}`} kind="text" as="span" className="milestone__role" label="Role">
                  {r.title}
                </E>
                <E id={`${p}.role.${j}.dates`} kind="text" as="span" className="milestone__dates mono" label="Dates">
                  {range(r)}
                </E>
              </li>
            ))}
          </ul>
        </E>
        <div className="milestone__body">
          <E id={`${p}.perspective`} kind="container" className="milestone__perspective" label="Perspective">
            <E id={`${p}.perspective.label`} kind="text" as="h4" className="mono-label" label="Label">
              Perspective I gained
            </E>
            <E id={`${p}.perspective.text`} kind="text" as="p" label="Perspective">
              {m.perspective}
            </E>
          </E>
          <E id={`${p}.win`} kind="container" className="milestone__win" label="Accomplishment">
            <E id={`${p}.win.label`} kind="text" as="h4" className="mono-label" label="Label">
              {m.accomplishments.length > 1 ? 'Main accomplishments' : 'Main accomplishment'}
            </E>
            <ul className="arrow-list">
              {m.accomplishments.map((a, j) => (
                <E key={a.slice(0, 32)} id={`${p}.win.${j}`} kind="text" as="li" label={`Accomplishment ${j + 1}`}>
                  {a}
                </E>
              ))}
            </ul>
          </E>
        </div>
        <MoreDetails id={`${p}.more`}>
          <summary>
            <E id={`${p}.more.label`} kind="text" as="span" label="Label">
              More about this role
            </E>
            <Plus className="milestone__plus" size={18} strokeWidth={3} aria-hidden="true" />
          </summary>
          <div className="milestone__highlights">
            <E id={`${p}.more.context`} kind="text" as="p" className="milestone__context" label="Context">
              {m.context}
            </E>
            <E id={`${p}.more.workedOnLabel`} kind="text" as="p" className="mono-label" label="Label">
              What I worked on
            </E>
            <E id={`${p}.more.workedOn`} kind="text" as="p" label="What I worked on">
              {m.workedOn}
            </E>
          </div>
          {highlights.map((r, j) => (
            <div key={r.title} className="milestone__highlights">
              <E id={`${p}.more.highlights.${j}.label`} kind="text" as="p" className="mono-label" label="Label">
                {m.roles.length > 1 ? `Résumé highlights · ${r.title}` : 'Résumé highlights'}
              </E>
              <ul>
                {r.highlights.map((h, k) => (
                  <E key={h.slice(0, 32)} id={`${p}.more.highlights.${j}.${k}`} kind="text" as="li" label={`Highlight ${k + 1}`}>
                    {h}
                  </E>
                ))}
              </ul>
            </div>
          ))}
        </MoreDetails>
      </E>
    </E>
  );
}

export function Journey() {
  return (
    <E id="journey" htmlId="journey" kind="section" as="section" className="section section--sky grid-paper" aria-labelledby="journey-title" file="Journey" label="My journey">
      <div className="wrap">
        <SectionHead id="journey" num="01" label="My journey" titleId="journey-title" title={journey.heading} />
        <E id="journey.intro" kind="text" as="p" className="section-intro" label="Intro">
          {journey.intro}
        </E>

        <SpanChart />

        <E id="journey.timeline" kind="container" as="ol" className="timeline" label="Timeline">
          {journey.milestones.map((m, i) => (
            <MilestoneCard key={m.id} m={m} i={i} />
          ))}
        </E>
      </div>
    </E>
  );
}

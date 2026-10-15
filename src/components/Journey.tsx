import { Plus } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import { journey, type Role } from '../content';
import { SectionHead } from './ui';

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

/**
 * Which rows can show every role title inside its bar at the current width.
 * Rows that can't (short bars, narrow screens) put one title line beside the bars instead.
 */
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
    <figure className="spans" aria-labelledby="spans-caption">
      <figcaption id="spans-caption" className="spans__caption">
        <span className="mono-label">At a glance</span>
        <span>Title by title, month by month. Some roles overlap.</span>
      </figcaption>
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
            // Title sits after the bars, or before them when the bars run close to "Now".
            const after = (last - START) / TOTAL < 0.62;
            const inside = fits[m.id] ?? true;
            return (
              <li key={m.id}>
                <a className="spans__row" href={`#role-${m.id}`} data-row={m.id} data-inside={inside}>
                  <span className="spans__label">{m.short}</span>
                  <span className="spans__track" aria-hidden="true">
                    {roles.map((r) => {
                      const s = toIdx(r.start);
                      const e = r.end ? toIdx(r.end) : NOW_IDX;
                      return (
                        <span
                          key={r.title}
                          className={`spans__bar surface-${m.accent}`}
                          style={{ left: pct(s), width: `${((e + 1 - s) / TOTAL) * 100}%` }}
                        >
                          <span className="spans__bar-label">{r.short ?? r.title}</span>
                        </span>
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
                  <span className="sr-only">
                    {': '}
                    {roles.map((r) => `${r.title}, ${range(r)}`).join('; ')}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </figure>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section section--sky grid-paper" aria-labelledby="journey-title">
      <div className="wrap">
        <SectionHead num="01" label="My journey" titleId="journey-title" title={journey.heading} />
        <p className="section-intro">{journey.intro}</p>

        <SpanChart />

        <ol className="timeline">
          {journey.milestones.map((m, i) => (
            <li key={m.id} id={`role-${m.id}`} className="milestone">
              <span className={`milestone__marker surface-${m.accent}`} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <article className="milestone__card" aria-labelledby={`role-${m.id}-name`}>
                <header className="milestone__head">
                  <p className="milestone__theme mono">{m.theme}</p>
                  <h3 id={`role-${m.id}-name`} className="milestone__company">
                    {m.company}
                  </h3>
                  <ul className="milestone__roles">
                    {m.roles.map((r) => (
                      <li key={r.title}>
                        <span className="milestone__role">{r.title}</span>
                        <span className="milestone__dates mono">{range(r)}</span>
                      </li>
                    ))}
                  </ul>
                </header>
                <div className="milestone__body">
                  <div className="milestone__perspective">
                    <h4 className="mono-label">Perspective I gained</h4>
                    <p>{m.perspective}</p>
                  </div>
                  <div className="milestone__win">
                    <h4 className="mono-label">{m.accomplishments.length > 1 ? 'Main accomplishments' : 'Main accomplishment'}</h4>
                    <ul className="arrow-list">
                      {m.accomplishments.map((a) => (
                        <li key={a.slice(0, 32)}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <details className="milestone__more">
                  <summary>
                    <span>More about this role</span>
                    <Plus className="milestone__plus" size={18} strokeWidth={3} aria-hidden="true" />
                  </summary>
                  <div className="milestone__highlights">
                    <p className="milestone__context">{m.context}</p>
                    <p className="mono-label">What I worked on</p>
                    <p>{m.workedOn}</p>
                  </div>
                  {m.roles
                    .filter((r) => r.highlights.length > 0)
                    .map((r) => (
                      <div key={r.title} className="milestone__highlights">
                        <p className="mono-label">{m.roles.length > 1 ? `Résumé highlights · ${r.title}` : 'Résumé highlights'}</p>
                        <ul>
                          {r.highlights.map((h) => (
                            <li key={h.slice(0, 32)}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </details>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

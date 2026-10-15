import { useState } from 'react';
import { thinking, type LensRegion } from '../content';
import { SectionHead } from './ui';

function Badge({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g className="lz-badge">
      <rect x={x - 11} y={y - 11} width="22" height="22" />
      <text x={x} y={y + 5} textAnchor="middle">
        {n}
      </text>
    </g>
  );
}

/** Original diagram: a person, a broken path to their goal, the system underneath, and a small test bridging the gap. */
function LensDiagram({ on }: { on: LensRegion }) {
  const cls = (r: LensRegion) => `lz-region${on === r ? ' is-on' : ''}`;
  return (
    <svg className="lens-svg" viewBox="0 0 480 372" role="img" aria-labelledby="lens-svg-title">
      <title id="lens-svg-title">
        Diagram: a person on a path toward their goal, a break in that path, the system underneath that causes it, and a small test that bridges the
        gap. Currently highlighted: {on}.
      </title>

      {/* 3 — system (drawn first so it sits behind) */}
      <g className={cls('system')} data-region="system">
        <rect className="lz-system-box" x="20" y="206" width="440" height="152" />
        <text className="lz-label" x="38" y="234">
          SYSTEM
        </text>
        {['PLATFORM', 'DATA', 'TEAMS', 'POLICY'].map((t, i) => (
          <g key={t}>
            <rect className="lz-node" x={36 + i * 104} y="272" width="88" height="40" />
            <text className="lz-node-text" x={80 + i * 104} y="297" textAnchor="middle">
              {t}
            </text>
          </g>
        ))}
        <path className="lz-wire" d="M124 292 H140 M228 292 H244 M332 292 H348" />
        <path className="lz-cause" d="M184 272 V250 H288 V272 M260 250 V166" />
        <Badge x={444} y={232} n={3} />
      </g>

      {/* 1 — person and goal */}
      <g className={cls('person')} data-region="person">
        <circle className="lz-fill" cx="52" cy="80" r="14" />
        <path className="lz-fill" d="M30 132 Q30 100 52 100 Q74 100 74 132 Z" />
        <line className="lz-stroke" x1="436" y1="66" x2="436" y2="132" />
        <path className="lz-fill" d="M436 68 L468 79 L436 92 Z" />
        <text className="lz-label" x="52" y="160" textAnchor="middle">
          PERSON
        </text>
        <text className="lz-label" x="436" y="160" textAnchor="middle">
          GOAL
        </text>
        <Badge x={22} y={44} n={1} />
      </g>

      {/* 2 — the experience, with a break */}
      <g className={cls('experience')} data-region="experience">
        <polygon className="lz-road" points="84,108 236,108 228,112 238,116 230,120 236,124 84,124" />
        <polygon className="lz-road" points="410,108 284,108 292,112 282,116 290,120 284,124 410,124" />
        {[110, 150, 190, 320, 362].map((x) => (
          <rect key={x} className="lz-step" x={x} y="113" width="6" height="6" />
        ))}
        <rect className="lz-tag lz-tag--break" x="190" y="140" width="140" height="26" />
        <text className="lz-label" x="260" y="158" textAnchor="middle">
          IT BREAKS HERE
        </text>
        <Badge x={176} y={153} n={2} />
      </g>

      {/* 4 — the smallest useful test */}
      <g className={cls('test')} data-region="test">
        <rect className="lz-bridge" x="220" y="100" width="80" height="10" />
        <line className="lz-pointer" x1="260" y1="72" x2="260" y2="96" />
        <rect className="lz-tag lz-tag--test" x="196" y="44" width="128" height="26" />
        <text className="lz-label" x="260" y="62" textAnchor="middle">
          SMALLEST TEST
        </text>
        <Badge x={340} y={57} n={4} />
      </g>
    </svg>
  );
}

function ProblemLens() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const shown = thinking.lens[hover ?? active].region;

  return (
    <div className="lens">
      <div className="lens__intro">
        <p className="mono-label">The problem lens</p>
        <p className="lens__hint">Four questions I ask before deciding what to build. Pick one to see where it points.</p>
      </div>
      <div className="lens__body">
        <ol className="lens__list" onPointerLeave={() => setHover(null)}>
          {thinking.lens.map((item, i) => (
            <li key={item.region} className={`lens__item${active === i ? ' is-active' : ''}`} onPointerEnter={() => setHover(i)}>
              <button className="lens__btn" aria-expanded={active === i} aria-controls={`lens-detail-${i}`} onClick={() => setActive(i)}>
                <span className="lens__num" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="lens__q">{item.question}</span>
              </button>
              <p className="lens__gist">{item.gist}</p>
              <p id={`lens-detail-${i}`} className="lens__detail" hidden={active !== i}>
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
        <div className="lens__figure">
          <LensDiagram on={shown} />
        </div>
      </div>
    </div>
  );
}

export function HowIThink() {
  return (
    <section id="how-i-think" className="section section--paper" aria-labelledby="how-title">
      <div className="wrap">
        <SectionHead num="04" label="How I think" titleId="how-title" title={thinking.heading} />
        <div className="think__intro">
          <div className="prose">
            {thinking.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <ul className="principles" aria-label="How evidence, judgment, and building fit together">
            {thinking.principles.map((p) => (
              <li key={p.label} className={`principle surface-${p.accent}`}>
                <span className="principle__label mono">{p.label}</span>
                <span className="principle__text">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <ProblemLens />
      </div>
    </section>
  );
}

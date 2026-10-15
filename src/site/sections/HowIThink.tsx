import { useState } from 'react';
import { thinking, type LensRegion } from '../../../personal-site/src/content';
import { E } from '../../editor/E';
import { useEditState } from '../../editor/store';
import { SectionHead, useDesignSelection, within } from '../ui';

/* Diagram copied from personal-site/src/components/HowIThink.tsx. */

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

function LensDiagram({ on }: { on: LensRegion }) {
  const cls = (r: LensRegion) => `lz-region${on === r ? ' is-on' : ''}`;
  return (
    <svg className="lens-svg" viewBox="0 0 480 372" role="img" aria-label={`Diagram: a person, a break in their path, the system underneath, and a small test. Highlighted: ${on}.`}>
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

/** In Preview, hover previews a question and a click opens it. In Visual Design, the selected question is the open one. */
function ProblemLens() {
  const { mode } = useEditState();
  const sel = useDesignSelection();
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const preview = mode !== 'design';
  const picked = thinking.lens.findIndex((_, i) => within(sel, `think.lens.${i}`));
  const open = preview || picked < 0 ? active : picked;
  const shown = thinking.lens[(preview ? hover : null) ?? open].region;

  return (
    <E id="think.lens" kind="container" className="lens" label="Problem lens">
      <div className="lens__intro">
        <E id="think.lens.label" kind="text" as="p" className="mono-label" label="Label">
          The problem lens
        </E>
        <E id="think.lens.hint" kind="text" as="p" className="lens__hint" label="Hint">
          Four questions I ask before deciding what to build. Pick one to see where it points.
        </E>
      </div>
      <div className="lens__body">
        <ol className="lens__list" onPointerLeave={() => setHover(null)}>
          {thinking.lens.map((item, i) => (
            <E key={item.region} id={`think.lens.${i}`} kind="container" as="li" className={`lens__item${open === i ? ' is-active' : ''}`} onPointerEnter={() => preview && setHover(i)} label={`Question ${i + 1}`}>
              <button type="button" className="lens__btn" aria-expanded={open === i} onClick={() => setActive(i)}>
                <span className="lens__num" aria-hidden="true">
                  {i + 1}
                </span>
                <E id={`think.lens.${i}.q`} kind="text" as="span" className="lens__q" label="Question">
                  {item.question}
                </E>
              </button>
              <E id={`think.lens.${i}.gist`} kind="text" as="p" className="lens__gist" label="Gist">
                {item.gist}
              </E>
              <E id={`think.lens.${i}.detail`} kind="text" as="p" className="lens__detail" hidden={open !== i} label="Detail">
                {item.detail}
              </E>
            </E>
          ))}
        </ol>
        <E id="think.lens.figure" kind="graphic" className="lens__figure" label="Diagram">
          <LensDiagram on={shown} />
        </E>
      </div>
    </E>
  );
}

export function HowIThink() {
  return (
    <E id="think" htmlId="how-i-think" kind="section" as="section" className="section section--paper" aria-labelledby="how-title" file="HowIThink" label="How I think">
      <div className="wrap">
        <SectionHead id="think" num="04" label="How I think" titleId="how-title" title={thinking.heading} />
        <E id="think.intro" kind="container" className="think__intro" label="Intro">
          <E id="think.prose" kind="container" className="prose" label="Prose">
            {thinking.body.map((p, i) => (
              <E key={p.slice(0, 20)} id={`think.prose.${i}`} kind="text" as="p" label={`Paragraph ${i + 1}`}>
                {p}
              </E>
            ))}
          </E>
          <E id="think.principles" kind="container" as="ul" className="principles" aria-label="How evidence, judgment, and building fit together" label="Principles">
            {thinking.principles.map((p, i) => (
              <E key={p.label} id={`think.principle.${i}`} kind="container" as="li" className={`principle surface-${p.accent}`} label={`${p.label} card`}>
                <E id={`think.principle.${i}.label`} kind="text" as="span" className="principle__label mono" label="Label">
                  {p.label}
                </E>
                <E id={`think.principle.${i}.text`} kind="text" as="span" className="principle__text" label="Text">
                  {p.text}
                </E>
              </E>
            ))}
          </E>
        </E>
        <ProblemLens />
      </div>
    </E>
  );
}

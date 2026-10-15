import { reach } from '../../../../src/content';
import { E } from '../../editor/E';
import { Eyebrow } from '../ui';

const CELLS = 100;

function ReachFigure() {
  const share = reach.reached / reach.goal;
  const perCell = reach.goal / CELLS;
  const filled = share * CELLS;
  const percent = Math.round(share * 1000) / 10;

  return (
    <E id="reach.figure" kind="container" as="figure" className="reach__figure" aria-labelledby="reach-fig-caption" label="Reach figure">
      <E id="reach.sticker" kind="text" as="p" className="sticker surface-coral reach__sticker" label="Sticker">
        {reach.figureLabel}
      </E>

      <E id="reach.stats" kind="container" className="reach__stats" label="Stats">
        <E id="reach.stat.reached" kind="container" label="Reached">
          <E id="reach.stat.reached.num" kind="heading" as="span" className="reach__num" label="Number">
            {reach.reachedLabel}
          </E>
          <E id="reach.stat.reached.label" kind="text" as="span" className="mono-label" label="Label">
            Reached, approx.
          </E>
        </E>
        <E id="reach.stat.goal" kind="container" label="Goal">
          <E id="reach.stat.goal.num" kind="heading" as="span" className="reach__num reach__num--goal" label="Number">
            {reach.goalLabel}
          </E>
          <E id="reach.stat.goal.label" kind="text" as="span" className="mono-label" label="Label">
            Long-term goal
          </E>
        </E>
      </E>

      <E
        id="reach.grid"
        kind="graphic"
        className="reach__grid"
        role="img"
        aria-label={`About ${reach.reachedLabel.replace('~', '')} of a ${reach.goalLabel} goal, roughly ${percent} percent.`}
        label="Square grid"
      >
        {Array.from({ length: CELLS }, (_, i) => {
          const fill = Math.max(0, Math.min(1, filled - i));
          return (
            <span key={i} className={`reach__cell${fill >= 1 ? ' is-filled' : ''}`}>
              {fill > 0 && fill < 1 && <span className="reach__partial" style={{ width: `${fill * 100}%` }} />}
            </span>
          );
        })}
      </E>

      <E id="reach.bar" kind="graphic" className="reach__bar" aria-hidden="true" label="Progress bar">
        <span className="reach__bar-fill" style={{ width: `${share * 100}%` }} />
      </E>
      <div className="reach__scale mono" aria-hidden="true">
        <E id="reach.marker" kind="text" as="span" className="reach__marker" style={{ left: `${share * 100}%` }} label="Marker">
          {`▲ ${reach.reachedLabel} ≈ ${percent}%`}
        </E>
        <E id="reach.scaleGoal" kind="text" as="span" className="reach__scale-goal" label="Goal">
          {reach.goalLabel}
        </E>
      </div>

      <E id="reach.caption" htmlId="reach-fig-caption" kind="container" as="figcaption" className="reach__caption" label="Caption">
        <E id="reach.caption.unit" kind="text" as="span" className="mono-label" label="Unit">
          {`1 square = ${perCell / 1_000_000}M users`}
        </E>
        {reach.definition && (
          <E id="reach.caption.definition" kind="text" as="span" className="reach__definition" label="Definition">
            {reach.definition}
          </E>
        )}
      </E>
    </E>
  );
}

export function Reach() {
  const show = reach.approvedForPublic;
  return (
    <E id="reach" htmlId="ambition" kind="section" as="section" className="section section--ink" aria-labelledby="reach-title" file="Reach" label="Reach">
      <div className="wrap reach">
        <E id="reach.copy" kind="container" className="reach__copy" label="Copy">
          <Eyebrow id="reach" num="02">
            The billion-user journey
          </Eyebrow>
          <E id="reach.title" htmlId="reach-title" kind="heading" as="h2" className="display h2" label="Heading">
            {show && (
              <E id="reach.title.reached" kind="text" as="span" className="line" label="Line 1">
                {reach.headingReached}
              </E>
            )}{' '}
            <E id="reach.title.goal" kind="text" as="span" className="line reach__goal-line" label="Line 2">
              {reach.headingGoal}
            </E>
          </E>
          <E id="reach.body" kind="text" as="p" className="reach__body" label="Body">
            {show ? reach.body : reach.ambitionOnly}
          </E>
          <E id="reach.standard" kind="text" as="p" className="reach__standard" label="Standard">
            {reach.standard}
          </E>
        </E>
        {show && <ReachFigure />}
      </div>
    </E>
  );
}

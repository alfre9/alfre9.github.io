import { reach } from '../content';

const CELLS = 100;

function ReachFigure() {
  const share = reach.reached / reach.goal; // 0.04
  const perCell = reach.goal / CELLS;
  const filled = share * CELLS; // 4 — may be fractional
  const percent = Math.round(share * 1000) / 10;

  return (
    <figure className="reach__figure" aria-labelledby="reach-fig-caption">
      <p className="sticker surface-coral reach__sticker">{reach.figureLabel}</p>

      <div className="reach__stats">
        <div>
          <span className="reach__num">{reach.reachedLabel}</span>
          <span className="mono-label">Reached, approx.</span>
        </div>
        <div>
          <span className="reach__num reach__num--goal">{reach.goalLabel}</span>
          <span className="mono-label">Long-term goal</span>
        </div>
      </div>

      <div
        className="reach__grid"
        role="img"
        aria-label={`About ${reach.reachedLabel.replace('~', '')} of a ${reach.goalLabel} goal, roughly ${percent} percent. Each square represents ${perCell / 1_000_000} million users.`}
      >
        {Array.from({ length: CELLS }, (_, i) => {
          const fill = Math.max(0, Math.min(1, filled - i));
          return (
            <span key={i} className={`reach__cell${fill >= 1 ? ' is-filled' : ''}`}>
              {fill > 0 && fill < 1 && <span className="reach__partial" style={{ width: `${fill * 100}%` }} />}
            </span>
          );
        })}
      </div>

      <div className="reach__bar" aria-hidden="true">
        <span className="reach__bar-fill" style={{ width: `${share * 100}%` }} />
      </div>
      <div className="reach__scale mono" aria-hidden="true">
        <span className="reach__marker" style={{ left: `${share * 100}%` }}>
          ▲ {reach.reachedLabel} ≈ {percent}%
        </span>
        <span className="reach__scale-goal">{reach.goalLabel}</span>
      </div>

      <figcaption id="reach-fig-caption" className="reach__caption">
        <span className="mono-label">1 square = {perCell / 1_000_000}M users</span>
        {reach.definition && <span className="reach__definition">{reach.definition}</span>}
      </figcaption>
    </figure>
  );
}

export function Reach() {
  const show = reach.approvedForPublic;
  return (
    <section id="ambition" className="section section--ink" aria-labelledby="reach-title">
      <div className="wrap reach">
        <div className="reach__copy">
          <p className="section-label">
            <span className="section-label__num">02</span>The billion-user journey
          </p>
          <h2 id="reach-title" className="display h2">
            {show && <span className="line">{reach.headingReached} </span>}
            <span className="line reach__goal-line">{reach.headingGoal}</span>
          </h2>
          <p className="reach__body">{show ? reach.body : reach.ambitionOnly}</p>
          <p className="reach__standard">{reach.standard}</p>
        </div>
        {show && <ReachFigure />}
      </div>
    </section>
  );
}

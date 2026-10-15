import { useState } from 'react';
import { beyond } from '../../../../src/content';
import { E } from '../../editor/E';
import { Lines, SectionHead } from '../ui';

/* Illustrations copied from the site's src/components/Beyond.tsx. Taps animate them in Preview. */

function Shuttle({ facing }: { facing: 1 | -1 }) {
  return (
    <g className="shuttle-flip" style={{ transform: `scaleX(${facing})` }}>
      <path d="M-4 -6 L-34 -17 L-34 17 L-4 6 Z" fill="#fff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
      <path d="M-34 -8 L-6 -2 M-34 8 L-6 2 M-34 0 H-6" stroke="#000" strokeWidth="2" />
      <circle cx="2" cy="0" r="8" fill="#ff6e6c" stroke="#000" strokeWidth="3" />
    </g>
  );
}

function BadmintonArt({ hits }: { hits: number }) {
  const right = hits % 2 === 1;
  const facing: 1 | -1 = hits === 0 || right ? 1 : -1;
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className="art-svg">
      <rect x="18" y="34" width="284" height="136" fill="#fff" stroke="#000" strokeWidth="3" />
      <path
        d="M18 46 H302 M18 158 H302 M34 34 V170 M286 34 V170 M118 34 V170 M202 34 V170 M18 102 H118 M202 102 H302"
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />
      <rect x="157" y="22" width="6" height="160" fill="#000" />
      <path d="M154 34 V170 M166 34 V170" stroke="#000" strokeWidth="1" strokeDasharray="3 3" />
      <g transform="translate(84 96)">
        <g className="fly-x" style={{ transform: `translateX(${right ? 152 : 0}px)` }}>
          <g key={hits} className={hits ? 'fly-hop fly-hop--high' : undefined}>
            <g className="shuttle-wobble">
              <Shuttle facing={facing} />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const HEX_R = 17;
const HEX_W = Math.sqrt(3) * HEX_R;
const ROWS = 4;
const COLS = 7;
const BOARD_X = (320 - (COLS * HEX_W + HEX_W / 2)) / 2 + HEX_W / 2;
const BOARD_Y = (200 - ((ROWS - 1) * HEX_R * 1.5 + HEX_R * 2)) / 2 + HEX_R;
const hexCenter = (r: number, c: number) => ({ x: BOARD_X + c * HEX_W + (r % 2 ? HEX_W / 2 : 0), y: BOARD_Y + r * HEX_R * 1.5 });
const hexPoints = (cx: number, cy: number, rad: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

const FORMATIONS: [number, number][][] = [
  [
    [0, 2],
    [0, 3],
    [0, 4],
    [2, 1],
    [3, 5],
  ],
  [
    [3, 0],
    [3, 1],
    [2, 0],
    [2, 1],
    [3, 2],
  ],
  [
    [0, 0],
    [1, 3],
    [3, 6],
    [2, 4],
    [0, 6],
  ],
];
const PIECES = ['circle', 'square', 'diamond', 'triangle', 'ring'] as const;
const PIECE_FILL = ['#d7ff28', '#ff6e6c', '#87ceeb', '#0ea5e9', '#fff'];

function Piece({ kind, fill }: { kind: (typeof PIECES)[number]; fill: string }) {
  const s = { fill, stroke: '#000', strokeWidth: 3 };
  switch (kind) {
    case 'circle':
      return <circle r="9" {...s} />;
    case 'square':
      return <rect x="-8" y="-8" width="16" height="16" {...s} />;
    case 'diamond':
      return <rect x="-7" y="-7" width="14" height="14" transform="rotate(45)" {...s} />;
    case 'triangle':
      return <path d="M0 -10 L9 7 L-9 7 Z" strokeLinejoin="round" {...s} />;
    default:
      return (
        <g>
          <circle r="9" {...s} />
          <circle r="3" fill="#000" />
        </g>
      );
  }
}

function BoardArt({ formation }: { formation: number }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className="art-svg">
      {Array.from({ length: ROWS }, (_, r) =>
        Array.from({ length: COLS }, (_, c) => {
          const { x, y } = hexCenter(r, c);
          return <polygon key={`${r}-${c}`} points={hexPoints(x, y, HEX_R - 1.5)} fill="#fff" stroke="#000" strokeWidth="2" />;
        }),
      )}
      {PIECES.map((kind, i) => {
        const [r, c] = FORMATIONS[formation][i];
        const { x, y } = hexCenter(r, c);
        return (
          <g key={kind} className="piece" style={{ transform: `translate(${x}px, ${y}px)` }}>
            <g className="piece-lift">
              <Piece kind={kind} fill={PIECE_FILL[i]} />
            </g>
          </g>
        );
      })}
    </svg>
  );
}

function PickleballArt({ hits }: { hits: number }) {
  const right = hits % 2 === 1;
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className="art-svg">
      <rect x="10" y="168" width="300" height="6" fill="#000" />
      <path d="M100 168 V174 M220 168 V174" stroke="#fff" strokeWidth="3" />
      <rect x="156" y="128" width="8" height="42" fill="#000" />
      <rect x="132" y="130" width="56" height="34" fill="none" stroke="#000" strokeWidth="2" />
      <path d="M132 138 H188 M132 146 H188 M132 154 H188 M146 130 V164 M160 130 V164 M174 130 V164" stroke="#000" strokeWidth="1" />
      <rect x="132" y="126" width="56" height="6" fill="#fff" stroke="#000" strokeWidth="2" />
      <g transform="translate(52 112) rotate(-18)">
        <rect x="-6" y="30" width="12" height="34" fill="#000" />
        <rect x="-24" y="-30" width="48" height="62" rx="16" fill="#fff" stroke="#000" strokeWidth="3" />
        <rect x="-15" y="-21" width="30" height="44" rx="10" fill="#87ceeb" stroke="#000" strokeWidth="2" />
      </g>
      <g transform="translate(96 96)">
        <g className="fly-x" style={{ transform: right ? 'translate(152px, 61px)' : 'translate(0px, 0px)' }}>
          <g key={hits} className={hits ? 'fly-hop' : undefined}>
            <g className="ball-nudge">
              <circle r="11" fill="#d7ff28" stroke="#000" strokeWidth="3" />
              {[0, 72, 144, 216, 288].map((deg) => (
                <circle
                  key={deg}
                  cx={(5.5 * Math.cos(((deg - 90) * Math.PI) / 180)).toFixed(2)}
                  cy={(5.5 * Math.sin(((deg - 90) * Math.PI) / 180)).toFixed(2)}
                  r="1.6"
                  fill="#000"
                />
              ))}
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function Card({ id, n, title, line, children }: { id: string; n: number; title: string; line: string; children: React.ReactNode }) {
  return (
    <E id={id} kind="container" as="li" className={`beyond-card beyond-card--${n}`} label={`${title} card`}>
      {children}
      <div className="beyond__text">
        <E id={`${id}.title`} kind="heading" as="h3" className="beyond__title" label="Title">
          {title}
        </E>
        <E id={`${id}.line`} kind="text" as="p" className="beyond__line" label="Line">
          {line}
        </E>
      </div>
    </E>
  );
}

export function Beyond() {
  const [shuttleHits, setShuttleHits] = useState(0);
  const [formation, setFormation] = useState(0);
  const [ballHits, setBallHits] = useState(0);
  const { badminton, tft, pickleball } = beyond;

  return (
    <E id="beyond" htmlId="beyond-work" kind="section" as="section" className="section section--paper grid-paper" aria-labelledby="beyond-title" file="Beyond" label="Beyond work">
      <div className="wrap">
        <SectionHead id="beyond" num="03" label="Beyond the roadmap" titleId="beyond-title" title={<Lines id="beyond.title" lines={beyond.heading} />} />

        <E id="beyond.cards" kind="container" as="ul" className="beyond" label="Cards">
          <Card id="beyond.badminton" n={1} title={badminton.title} line={badminton.line}>
            <E id="beyond.badminton.art" kind="container" as="button" className="beyond__art surface-sky" aria-label="Play: send the shuttlecock over the net" onClick={() => setShuttleHits((h) => h + 1)} label="Illustration">
              <BadmintonArt hits={shuttleHits} />
              <span className="beyond__hint mono" aria-hidden="true">
                Tap to rally
              </span>
            </E>
          </Card>
          <Card id="beyond.tft" n={2} title={tft.title} line={tft.line}>
            <E id="beyond.tft.art" kind="container" as="button" className="beyond__art surface-lime" aria-label="Play: rearrange the strategy board" onClick={() => setFormation((f) => (f + 1) % FORMATIONS.length)} label="Illustration">
              <BoardArt formation={formation} />
              <span className="beyond__hint mono" aria-hidden="true">
                Tap to reposition · {formation + 1}/{FORMATIONS.length}
              </span>
            </E>
          </Card>
          <Card id="beyond.pickleball" n={3} title={pickleball.title} line={pickleball.line}>
            <E id="beyond.pickleball.art" kind="container" as="button" className="beyond__art surface-coral" aria-label="Play: hit the pickleball over the net" onClick={() => setBallHits((h) => h + 1)} label="Illustration">
              <PickleballArt hits={ballHits} />
              <span className="beyond__hint mono" aria-hidden="true">
                Tap to dink
              </span>
            </E>
          </Card>
        </E>

        {(beyond.personal || beyond.alsoInto.length > 0) && (
          <E id="beyond.footer" kind="container" className="beyond__footer" label="Footer">
            {beyond.personal && (
              <E id="beyond.personal" kind="text" as="p" className="beyond__personal" label="Personal note">
                {beyond.personal}
              </E>
            )}
            {beyond.alsoInto.length > 0 && (
              <E id="beyond.also" kind="text" as="p" className="beyond__also" label="Also into">
                <E id="beyond.also.label" kind="text" as="span" className="mono-label" label="Label">
                  Also into
                </E>
                <E id="beyond.also.list" kind="text" as="span" label="Interests">
                  {beyond.alsoInto.join(' · ')}
                </E>
              </E>
            )}
          </E>
        )}
      </div>
    </E>
  );
}

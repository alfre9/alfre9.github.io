import type { ReactNode } from 'react';

export function SectionHead({ num, label, title, titleId, aside }: { num: string; label: string; title: ReactNode; titleId: string; aside?: ReactNode }) {
  return (
    <div className="section-head">
      <div>
        <p className="section-label">
          <span className="section-label__num">{num}</span>
          {label}
        </p>
        <h2 id={titleId} className="display h2">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}

/** Renders an array of lines as block spans, keeping a real space between them for screen readers. */
export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={i} className="line">
          {l}
          {i < lines.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
}

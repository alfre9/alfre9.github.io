import { Fragment, type ReactNode } from 'react';
import { E } from '../editor/E';
import { useEditor } from '../editor/store';

/** The selected element in Visual Design, or null in Preview. */
export function useDesignSelection() {
  const { mode, selectedId } = useEditor();
  return mode === 'design' ? selectedId : null;
}

/** True when `id` or anything inside it is selected. Used to open collapsed content so it can be edited. */
export const within = (sel: string | null, id: string) => !!sel && (sel === id || sel.startsWith(`${id}.`));

export function Eyebrow({ id, num, children }: { id: string; num: string; children: string }) {
  return (
    <E id={`${id}.label`} kind="text" as="p" className="section-label" label="Eyebrow">
      <E id={`${id}.label.num`} kind="text" as="span" className="section-label__num" label="Number">
        {num}
      </E>
      <E id={`${id}.label.text`} kind="text" as="span" label="Eyebrow text">
        {children}
      </E>
    </E>
  );
}

export function SectionHead({ id, num, label, title, titleId }: { id: string; num: string; label: string; title: ReactNode; titleId: string }) {
  return (
    <E id={`${id}.head`} kind="container" className="section-head" label="Section heading">
      <div>
        <Eyebrow id={id} num={num}>
          {label}
        </Eyebrow>
        <E id={`${id}.title`} htmlId={titleId} kind="heading" as="h2" className="display h2" label="Heading">
          {title}
        </E>
      </div>
    </E>
  );
}

/** Block lines with a real space between them, as in the site's `Lines`. */
export function Lines({ id, lines }: { id: string; lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <Fragment key={i}>
          <E id={`${id}.${i}`} kind="text" as="span" className="line" label={`Line ${i + 1}`}>
            {l}
          </E>
          {i < lines.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </>
  );
}

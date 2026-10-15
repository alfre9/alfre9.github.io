import { createElement, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { useDoc, useDocApi, useEditState } from './store';

export type Kind = 'section' | 'container' | 'heading' | 'text' | 'button' | 'link' | 'icon' | 'graphic';

export const KIND_LABEL: Record<Kind, string> = {
  section: 'Section',
  container: 'Container',
  heading: 'Heading',
  text: 'Text',
  button: 'Button',
  link: 'Link',
  icon: 'Icon',
  graphic: 'Graphic',
};

export const TEXT_KINDS: Kind[] = ['heading', 'text', 'button', 'link'];

interface EProps {
  id: string;
  /** DOM id, for in-page anchors and aria references. `id` is the Visual Design id. */
  htmlId?: string;
  kind: Kind;
  as?: string;
  /** Layer name shown in the Layers panel. */
  label?: string;
  /** Marks a section root that becomes its own component file in Code view. */
  file?: string;
  className?: string;
  style?: CSSProperties;
  href?: string;
  target?: string;
  children?: ReactNode;
  [attr: string]: unknown;
}

/**
 * Editable element. Renders `as` with the base design, then layers the
 * user's visual-design overrides (style, text, link, visibility) on top.
 */
export function E({ id, htmlId, kind, as = 'div', label, file, className, style, href, target, children, ...rest }: EProps) {
  const { doc } = useDoc();
  const api = useDocApi();
  const { editingId, animatingId, stopEdit } = useEditState();
  const ov = doc[id];
  const editing = editingId === id;
  const ref = useRef<HTMLElement>(null);
  const frozen = useRef<ReactNode>(null);

  let content: ReactNode = ov?.text ?? children;
  // While typing, React must not touch the text node: render a frozen snapshot.
  if (editing) {
    if (frozen.current === null) frozen.current = content;
    content = frozen.current;
  } else {
    frozen.current = null;
  }

  useLayoutEffect(() => {
    const el = ref.current;
    if (!editing || !el) return;
    el.focus({ preventScroll: true });
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }, [editing]);

  const s: Record<string, string | number | undefined> = { ...(style as Record<string, string>), ...ov?.style };
  if (ov?.hidden) s.display = 'none';
  if (animatingId === id) s.transition = 'all 620ms cubic-bezier(.2,.8,.2,1)';

  const props: Record<string, unknown> = {
    ...rest,
    id: htmlId,
    ref,
    key: editing ? 'editing' : 'view',
    className,
    style: s,
    'data-vid': id,
    'data-kind': kind,
    'data-label': label,
    'data-file': file,
  };
  const h = ov?.href ?? href;
  if (h !== undefined) props.href = h;
  const t = ov?.target ?? target;
  if (t) {
    props.target = t;
    if (t === '_blank') props.rel = 'noreferrer';
  }
  if (editing) {
    Object.assign(props, {
      contentEditable: 'plaintext-only',
      suppressContentEditableWarning: true,
      spellCheck: false,
      onInput: (e: React.FormEvent<HTMLElement>) => api.setText(id, e.currentTarget.textContent ?? "", `text:${id}`),
      onBlur: () => stopEdit(),
      onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
        if ((e.key === 'Enter' && !e.shiftKey) || e.key === 'Escape') {
          e.preventDefault();
          e.currentTarget.blur();
        }
      },
      onPaste: (e: React.ClipboardEvent<HTMLElement>) => {
        e.preventDefault();
        document.execCommand('insertText', false, e.clipboardData.getData('text/plain'));
      },
    });
  }
  return createElement(as, props, content);
}

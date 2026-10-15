import { memo, type MouseEvent } from 'react';
import '../../../src/styles.css';
import { useEditor } from '../editor/store';
import { Beyond } from './sections/Beyond';
import { Contact, Footer } from './sections/Contact';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { HowIThink } from './sections/HowIThink';
import { Journey } from './sections/Journey';
import { Reach } from './sections/Reach';
import { Work } from './sections/Work';
import './site.css';

/*
 * Alfred's personal site (the repo root), rebuilt from the same markup, class names,
 * copy (content.ts), and stylesheet (styles.css) so it looks the same, with every
 * element wrapped in <E> so Visual Design can select and edit it. It's a look-and-feel
 * copy: the main page only, with light interactions in Preview. The #bolt page,
 * the mobile menu panel, and nav highlighting aren't included.
 */

/** Memoized so hover and selection changes in the editor don't re-render the whole page. */
const Page = memo(function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Journey />
      <Reach />
      <Beyond />
      <HowIThink />
      <Work />
      <Contact />
      <Footer />
    </>
  );
});

export function Site() {
  const { mode, rootRef, viewportRef } = useEditor();

  // Preview mode: smooth-scroll in-page anchors inside the preview viewport, clear of the sticky header.
  const onClick = (e: MouseEvent) => {
    if (mode === 'design') return;
    const a = (e.target as HTMLElement).closest('a');
    const href = a?.getAttribute('href');
    if (!a || !href?.startsWith('#')) return;
    e.preventDefault();
    const root = rootRef.current;
    const vp = viewportRef.current;
    const target = href === '#' ? root : root?.querySelector<HTMLElement>(`#${CSS.escape(href.slice(1))}`);
    if (!root || !vp || !target) return;
    const header = root.querySelector<HTMLElement>('.header')?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top - vp.getBoundingClientRect().top + vp.scrollTop;
    vp.scrollTo({ top: Math.max(0, top - header - 16), behavior: 'smooth' });
  };

  return (
    <div className="site" data-mode={mode} ref={rootRef} onClick={onClick}>
      <Page />
    </div>
  );
}

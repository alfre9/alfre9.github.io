import { useEffect, useRef, useState } from 'react';
import { Beyond } from './components/Beyond';
import { Contact, Footer } from './components/Contact';
import { ForBolt } from './components/ForBolt';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowIThink } from './components/HowIThink';
import { Journey } from './components/Journey';
import { Prd } from './components/Prd';
import { Reach } from './components/Reach';
import { Work } from './components/Work';
import { forBolt } from './content';
import { prd } from './prd';

export type View = 'main' | 'bolt' | 'prd';

const MAIN_TITLE = document.title;
const TITLES: Record<View, string> = { main: MAIN_TITLE, bolt: forBolt.documentTitle, prd: prd.documentTitle };
/** Each view's hash, and the heading that takes focus when the view opens. */
const VIEW_HASH: Partial<Record<View, string>> = { bolt: forBolt.hash, prd: prd.hash };
const VIEW_HEADING: Partial<Record<View, string>> = { bolt: 'bolt-title', prd: 'prd-title' };

/**
 * `#bolt-prd` and `#prd-…` open the PRD; `#bolt` and `#bolt-…` open the Bolt.new page.
 * Any other anchor returns to the main site. `#main` (skip link) keeps the current view.
 */
function viewFor(hash: string, current: View): View {
  const id = decodeURIComponent(hash.slice(1));
  if (id === 'main') return current;
  if (id === prd.hash || id.startsWith('prd-')) return 'prd';
  if (id === forBolt.hash || id.startsWith(`${forBolt.hash}-`)) return 'bolt';
  return 'main';
}

function useView() {
  const [view, setView] = useState<View>(() => viewFor(window.location.hash, 'main'));
  const prev = useRef<View | null>(null);

  useEffect(() => {
    const onHash = () => setView((v) => viewFor(window.location.hash, v));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // After the view swaps, land on the requested anchor (it didn't exist when the hash changed) or the top.
  useEffect(() => {
    document.title = TITLES[view];
    if (prev.current === view) return;
    // On first load, only jump to a deep link (e.g. /#prd-requirements) and leave scroll restoration alone.
    const first = prev.current === null;
    prev.current = view;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id && id !== VIEW_HASH[view] ? document.getElementById(id) : null;
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else if (!first) window.scrollTo({ top: 0, behavior: 'instant' });
    const heading = VIEW_HEADING[view];
    if (heading && !first) document.getElementById(heading)?.focus({ preventScroll: true });
  }, [view]);

  return view;
}

export default function App() {
  const view = useView();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header view={view} />
      <main id="main" tabIndex={-1}>
        {view === 'prd' ? (
          <Prd />
        ) : view === 'bolt' ? (
          <ForBolt />
        ) : (
          <>
            <Hero />
            <Journey />
            <Reach />
            <Beyond />
            <HowIThink />
            <Work />
            <Contact />
          </>
        )}
      </main>
      <Footer view={view} />
    </>
  );
}

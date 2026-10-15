import { FileText, Linkedin, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { nav, site } from '../content';

/** Tracks which nav section is currently in view. `view` re-observes after the page view swaps. */
export function useActiveSection(ids: readonly string[], view: string) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setActive(best && best[1] > 0 ? best[0] : null);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.01, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, view]);
  return active;
}

const NAV_IDS = nav.map((n) => n.id);

export function Header({ view }: { view: string }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection(NAV_IDS, view);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const links = nav.map((n) => (
    <li key={n.id}>
      <a href={`#${n.id}`} aria-current={active === n.id ? 'location' : undefined} onClick={() => setOpen(false)}>
        {n.label}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Alfred Chang, back to top">
        <span className="brand__mark" aria-hidden="true">
          AC
        </span>
        <span className="brand__name">{site.name}</span>
      </a>

      <nav className="nav" aria-label="Primary">
        <ul className="nav__links">{links}</ul>
        {site.linkedinUrl && (
          <a className="nav__linkedin" href={site.linkedinUrl} target="_blank" rel="noopener">
            <Linkedin size={16} strokeWidth={2.5} aria-hidden="true" />
            LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        {site.resumeUrl && (
          <a className="nav__resume" href={site.resumeUrl} target="_blank" rel="noopener">
            <FileText size={16} strokeWidth={2.5} aria-hidden="true" />
            Résumé
          </a>
        )}
      </nav>

      <button
        ref={toggleRef}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={18} strokeWidth={2.75} aria-hidden="true" /> : <Menu size={18} strokeWidth={2.75} aria-hidden="true" />}
        <span>{open ? 'Close' : 'Menu'}</span>
      </button>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>{links}</ul>
          {site.linkedinUrl && (
            <a className="mobile-menu__resume" href={site.linkedinUrl} target="_blank" rel="noopener">
              <Linkedin size={16} strokeWidth={2.5} aria-hidden="true" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
          {site.resumeUrl && (
            <a className="mobile-menu__resume" href={site.resumeUrl} target="_blank" rel="noopener">
              <FileText size={16} strokeWidth={2.5} aria-hidden="true" />
              Résumé
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

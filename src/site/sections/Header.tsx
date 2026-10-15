import { FileText, Linkedin, Menu } from 'lucide-react';
import { nav, site } from '../../../personal-site/src/content';
import { E } from '../../editor/E';

export function Brand({ id }: { id: string }) {
  return (
    <E id={id} kind="link" as="a" className="brand" href="#top" label="Brand">
      <E id={`${id}.mark`} kind="text" as="span" className="brand__mark" aria-hidden="true" label="Monogram">
        AC
      </E>
      <E id={`${id}.name`} kind="text" as="span" className="brand__name" label="Name">
        {site.name}
      </E>
    </E>
  );
}

export function Header() {
  return (
    <E id="header" kind="section" as="header" className="header" file="Header" label="Header">
      <Brand id="header.brand" />

      <E id="header.nav" kind="container" as="nav" className="nav" aria-label="Primary" label="Navigation">
        <E id="header.links" kind="container" as="ul" className="nav__links" label="Nav links">
          {nav.map((n) => (
            <li key={n.id}>
              <E id={`header.link.${n.id}`} kind="link" as="a" href={`#${n.id}`} label={`${n.label} link`}>
                {n.label}
              </E>
            </li>
          ))}
        </E>
        {site.linkedinUrl && (
          <E id="header.linkedin" kind="button" as="a" className="nav__linkedin" href={site.linkedinUrl} target="_blank" label="LinkedIn button">
            <Linkedin size={16} strokeWidth={2.5} aria-hidden="true" />
            <E id="header.linkedin.label" kind="text" as="span" label="Label">
              LinkedIn
            </E>
          </E>
        )}
        {site.resumeUrl && (
          <E id="header.resume" kind="button" as="a" className="nav__resume" href={site.resumeUrl} target="_blank" label="Résumé button">
            <FileText size={16} strokeWidth={2.5} aria-hidden="true" />
            <E id="header.resume.label" kind="text" as="span" label="Label">
              Résumé
            </E>
          </E>
        )}
      </E>

      {/* Shown below 1000px. The mobile menu panel isn't part of the prototype. */}
      <E id="header.menu" kind="button" as="button" type="button" className="menu-toggle" aria-expanded={false} label="Menu button">
        <Menu size={18} strokeWidth={2.75} aria-hidden="true" />
        <E id="header.menu.label" kind="text" as="span" label="Label">
          Menu
        </E>
      </E>
    </E>
  );
}

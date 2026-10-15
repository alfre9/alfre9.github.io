import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Check, Copy, FileText, Linkedin, Mail, MousePointerClick } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { contact, forBolt, site } from '../content';
import { prd } from '../prd';

interface Row {
  key: string;
  href: string;
  icon: ReactNode;
  label: string;
  detail: string;
  external: boolean;
}

export function Contact({ num = '06' }: { num?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const rows: Row[] = [
    { key: 'email', href: `mailto:${site.email}`, icon: <Mail size={22} strokeWidth={2.25} />, label: 'Email', detail: site.email, external: false },
  ];
  if (site.linkedinUrl)
    rows.push({
      key: 'linkedin',
      href: site.linkedinUrl,
      icon: <Linkedin size={22} strokeWidth={2.25} />,
      label: 'LinkedIn',
      detail: site.linkedinHandle,
      external: true,
    });
  if (site.resumeUrl)
    rows.push({ key: 'resume', href: site.resumeUrl, icon: <FileText size={22} strokeWidth={2.25} />, label: 'Résumé', detail: 'PDF', external: true });
  if (site.prototypeUrl)
    rows.push({
      key: 'prototype',
      href: site.prototypeUrl,
      icon: <MousePointerClick size={22} strokeWidth={2.25} />,
      label: 'Prototype',
      detail: 'Visual Design concept',
      external: true,
    });

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__left grid-paper">
        <p className="section-label">
          <span className="section-label__num">{num}</span>Contact
        </p>
        <h2 id="contact-title" className="display h2 contact__title">
          {contact.heading}
        </h2>
        <p className="contact__body">{contact.body}</p>
        <div className="contact__email">
          <a className="contact__email-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <button className="btn btn--sm" onClick={copy}>
            {copied ? <Check size={16} strokeWidth={3} aria-hidden="true" /> : <Copy size={16} strokeWidth={2.5} aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <span className="sr-only" role="status">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </div>
      </div>
      <div className="contact__right">
        <ul className="contact__rows">
          {rows.map((r) => (
            <li key={r.key}>
              <a className="contact__row" href={r.href} {...(r.external ? { target: '_blank', rel: 'noopener' } : {})}>
                <span className="contact__icon" aria-hidden="true">
                  {r.icon}
                </span>
                <span className="contact__label">{r.label}</span>
                <span className="contact__detail">{r.detail}</span>
                <ArrowUpRight className="contact__arrow" size={22} strokeWidth={2.75} aria-hidden="true" />
                {r.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const TOP_HASH = { main: 'top', bolt: forBolt.hash, prd: prd.hash } as const;

export function Footer({ view }: { view: keyof typeof TOP_HASH }) {
  return (
    <footer className="footer">
      <a className="brand" href="#top">
        <span className="brand__mark" aria-hidden="true">
          AC
        </span>
        <span className="brand__name">{site.name}</span>
      </a>
      <p className="footer__copy mono">© {new Date().getFullYear()} {site.name} · Built with React + TypeScript</p>
      <div className="footer__links">
        {view === 'main' ? (
          <a className="footer__for mono" href={`#${forBolt.hash}`}>
            {forBolt.footerLabel} <ArrowRight size={16} strokeWidth={2.75} aria-hidden="true" />
          </a>
        ) : view === 'prd' ? (
          <a className="footer__for mono" href={`#${forBolt.hash}`}>
            <ArrowLeft size={16} strokeWidth={2.75} aria-hidden="true" /> {prd.back}
          </a>
        ) : (
          <a className="footer__for mono" href="#top">
            <ArrowLeft size={16} strokeWidth={2.75} aria-hidden="true" /> {forBolt.back}
          </a>
        )}
        <a className="footer__top mono" href={`#${TOP_HASH[view]}`}>
          Back to top <ArrowUp size={16} strokeWidth={2.75} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

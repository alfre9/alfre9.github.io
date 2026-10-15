import { ArrowRight, ArrowUp, ArrowUpRight, Check, Copy, FileText, Linkedin, Mail, MousePointerClick } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { contact, forBolt, site } from '../../../../src/content';
import { E } from '../../editor/E';
import { Eyebrow } from '../ui';
import { Brand } from './Header';

interface Row {
  key: string;
  href: string;
  icon: ReactNode;
  label: string;
  detail: string;
  external: boolean;
}

const rows: Row[] = [
  { key: 'email', href: `mailto:${site.email}`, icon: <Mail size={22} strokeWidth={2.25} />, label: 'Email', detail: site.email, external: false },
];
if (site.linkedinUrl)
  rows.push({ key: 'linkedin', href: site.linkedinUrl, icon: <Linkedin size={22} strokeWidth={2.25} />, label: 'LinkedIn', detail: site.linkedinHandle, external: true });
if (site.resumeUrl) rows.push({ key: 'resume', href: site.resumeUrl, icon: <FileText size={22} strokeWidth={2.25} />, label: 'Résumé', detail: 'PDF', external: true });
if (site.prototypeUrl)
  rows.push({
    key: 'prototype',
    href: site.prototypeUrl,
    icon: <MousePointerClick size={22} strokeWidth={2.25} />,
    label: 'Prototype',
    detail: 'Visual Design concept',
    external: true,
  });

export function Contact() {
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
      /* clipboard unavailable in this frame */
    }
  };

  return (
    <E id="contact" htmlId="contact" kind="section" as="section" className="contact" aria-labelledby="contact-title" file="Contact" label="Contact">
      <E id="contact.left" kind="container" className="contact__left grid-paper" label="Pitch">
        <Eyebrow id="contact" num="06">
          Contact
        </Eyebrow>
        <E id="contact.title" htmlId="contact-title" kind="heading" as="h2" className="display h2 contact__title" label="Heading">
          {contact.heading}
        </E>
        <E id="contact.body" kind="text" as="p" className="contact__body" label="Body">
          {contact.body}
        </E>
        <E id="contact.email" kind="container" className="contact__email" label="Email row">
          <E id="contact.email.link" kind="link" as="a" className="contact__email-link" href={`mailto:${site.email}`} label="Email link">
            {site.email}
          </E>
          <E id="contact.copy" kind="button" as="button" type="button" className="btn btn--sm" onClick={copy} label="Copy email">
            {copied ? <Check size={16} strokeWidth={3} aria-hidden="true" /> : <Copy size={16} strokeWidth={2.5} aria-hidden="true" />}
            <E id="contact.copy.label" kind="text" as="span" label="Label">
              {copied ? 'Copied' : 'Copy email'}
            </E>
          </E>
        </E>
      </E>
      <E id="contact.right" kind="container" className="contact__right" label="Links">
        <ul className="contact__rows">
          {rows.map((r) => (
            <li key={r.key}>
              <E id={`contact.row.${r.key}`} kind="link" as="a" className="contact__row" href={r.href} target={r.external ? '_blank' : undefined} label={`${r.label} row`}>
                <E id={`contact.row.${r.key}.icon`} kind="icon" as="span" className="contact__icon" aria-hidden="true" label="Icon">
                  {r.icon}
                </E>
                <E id={`contact.row.${r.key}.label`} kind="text" as="span" className="contact__label" label="Label">
                  {r.label}
                </E>
                <E id={`contact.row.${r.key}.detail`} kind="text" as="span" className="contact__detail" label="Detail">
                  {r.detail}
                </E>
                <ArrowUpRight className="contact__arrow" size={22} strokeWidth={2.75} aria-hidden="true" />
              </E>
            </li>
          ))}
        </ul>
      </E>
    </E>
  );
}

export function Footer() {
  return (
    <E id="footer" kind="section" as="footer" className="footer" file="Footer" label="Footer">
      <Brand id="footer.brand" />
      <E id="footer.copy" kind="text" as="p" className="footer__copy mono" label="Copyright">
        {`© ${new Date().getFullYear()} ${site.name} · Built with React + TypeScript`}
      </E>
      <div className="footer__links">
        {/* The #bolt page isn't part of the prototype; the link is here for the look. */}
        <E id="footer.bolt" kind="link" as="a" className="footer__for mono" href={`#${forBolt.hash}`} label={forBolt.footerLabel}>
          <E id="footer.bolt.label" kind="text" as="span" label="Label">
            {forBolt.footerLabel}
          </E>
          <ArrowRight size={16} strokeWidth={2.75} aria-hidden="true" />
        </E>
        <E id="footer.top" kind="link" as="a" className="footer__top mono" href="#top" label="Back to top">
          <E id="footer.top.label" kind="text" as="span" label="Label">
            Back to top
          </E>
          <ArrowUp size={16} strokeWidth={2.75} aria-hidden="true" />
        </E>
      </div>
    </E>
  );
}

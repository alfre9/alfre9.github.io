import { nav } from '../../personal-site/src/content';

/** In-page anchors offered by the link pickers in Visual Design. */
export const SECTION_LINKS: [href: string, label: string][] = [['#top', 'Top'], ...nav.map((n): [string, string] => [`#${n.id}`, n.label])];

import type { AtRule, Plugin } from 'postcss';

// The personal site's global stylesheet: src/styles.css at the repo root, one folder up.
const SITE_CSS = decodeURIComponent(new URL('../src/styles.css', import.meta.url).pathname);

/**
 * The prototype renders the real personal site (the repo root) inside its canvas,
 * next to the Bolt shell's own styles. This rewrites the site's global stylesheet on
 * import so it only applies inside `.site`:
 *
 * - `:root`, `html`, and `body` rules move onto `.site`; every other selector gets a `.site ` prefix.
 * - Width `@media` queries become `@container site` queries and `vw` becomes `cqw`, so the
 *   Desktop / Tablet / Mobile toggle drives the layout instead of the browser window.
 *
 * The file itself is untouched; the Code view still shows it as written.
 */
export function scopeSiteCss(): Plugin {
  return {
    postcssPlugin: 'scope-site-css',
    Once(root) {
      const file = root.source?.input.file?.replace(/\\/g, '/');
      if (file !== SITE_CSS) return;

      root.walkAtRules('media', (at) => {
        if (/\((min|max)-width/.test(at.params)) {
          at.name = 'container';
          at.params = `site ${at.params}`;
        }
      });
      root.walkRules((rule) => {
        const at = rule.parent?.type === 'atrule' ? (rule.parent as AtRule) : null;
        if (at?.name.endsWith('keyframes')) return;
        // A container query can't style its own container, so root rules inside one go on its children.
        const self = at?.name === 'container' ? '.site > *' : '.site';
        rule.selectors = rule.selectors.map((s) => (/^(:root|html|body)$/.test(s) ? self : `.site ${s}`));
      });
      root.walkDecls((d) => {
        d.value = d.value.replace(/(\d)vw\b/g, '$1cqw');
      });
    },
  };
}

/* Tiny line-based highlighter tuned for the generated code (TSX / CSS / JSON / HTML). */

export interface Tok {
  t: string;
  c?: string;
}

type Rule = [RegExp, string | ((m: string) => string)];

const TSX: Rule[] = [
  [/\{\/\*.*?\*\/\}|\/\/.*$/, 'cm'],
  [/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`/, 'str'],
  [/<\/?[A-Za-z][\w.]*|\/?>/, (m) => (/^<\/?[A-Z]/.test(m) ? 'cmp' : 'tag')],
  [/\b(import|from|export|default|function|return|const|let|type|interface|as)\b/, 'kw'],
  [/\b[a-zA-Z-]+(?==)/, 'attr'],
  [/\b\d+(\.\d+)?\b/, 'num'],
  [/[{}()[\],;:.!]/, 'pun'],
];
const CSS: Rule[] = [
  [/\/\*.*?\*\/|^\s*\*.*$|^\s*\/\*.*$/, 'cm'],
  [/@[\w-]+/, 'kw'],
  [/^\s*[\w-]+(?=\s*:(?!\w*\)))/, 'attr'],
  [/'[^']*'|"[^"]*"/, 'str'],
  [/#[0-9a-fA-F]{3,8}\b/, 'num'],
  [/-?\d*\.?\d+(px|em|rem|%|deg|s|fr|cqi)?\b/, 'num'],
  [/[.#][\w-]+|::?[\w-]+|\[[^\]]+\]/, 'sel'],
  [/[{}();:,>]/, 'pun'],
];
const JSONR: Rule[] = [
  [/"(?:[^"\\]|\\.)*"(?=\s*:)/, 'attr'],
  [/"(?:[^"\\]|\\.)*"/, 'str'],
  [/\b(true|false|null)\b|-?\d+(\.\d+)?/, 'num'],
  [/[{}[\],:]/, 'pun'],
];
const HTML: Rule[] = [
  [/<!--.*?-->/, 'cm'],
  [/"[^"]*"/, 'str'],
  [/<\/?[\w!-]+|\/?>/, 'tag'],
  [/\b[\w-]+(?==)/, 'attr'],
];

const RULES = { tsx: TSX, css: CSS, json: JSONR, html: HTML };

export function highlightLine(line: string, lang: keyof typeof RULES): Tok[] {
  const rules = RULES[lang];
  const out: Tok[] = [];
  let i = 0;
  let plain = '';
  const flush = () => {
    if (plain) out.push({ t: plain });
    plain = '';
  };
  while (i < line.length) {
    let best: { idx: number; m: string; c: string } | null = null;
    const rest = line.slice(i);
    for (const [re, cls] of rules) {
      const m = re.exec(rest);
      if (m && m[0].length && (best === null || m.index < best.idx)) {
        best = { idx: m.index, m: m[0], c: typeof cls === 'string' ? cls : cls(m[0]) };
        if (m.index === 0) break;
      }
    }
    if (!best) {
      plain += rest;
      break;
    }
    plain += rest.slice(0, best.idx);
    flush();
    out.push({ t: best.m, c: best.c });
    i += best.idx + best.m.length;
  }
  flush();
  return out;
}

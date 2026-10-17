import { ChevronDown, ChevronRight, Copy, FileCode2, FileJson, FileType, Folder, FolderOpen, Sparkles, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDoc, useEditor } from '../editor/store';
import { useToast } from '../shell/toast';
import { highlightLine } from './highlight';
import { generateFiles, type GenFile } from './serialize';

export interface SyncInfo {
  ids: string[];
  at: number;
  focusFile?: string;
}

function FileIcon({ path }: { path: string }) {
  if (path.endsWith('.json')) return <FileJson size={14} className="fi fi--json" />;
  if (path.endsWith('.css')) return <FileType size={14} className="fi fi--css" />;
  if (path.endsWith('.html')) return <FileCode2 size={14} className="fi fi--html" />;
  return <FileCode2 size={14} className="fi fi--tsx" />;
}

export function CodeView({ sync }: { sync: SyncInfo | null }) {
  const { rootRef } = useEditor();
  const { doc } = useDoc();
  const toast = useToast();
  const files = useMemo<GenFile[]>(
    () => (rootRef.current ? generateFiles(rootRef.current, doc, new Set(sync?.ids ?? [])) : []),
    [rootRef, doc, sync],
  );
  const changedFiles = files.filter((f) => f.changedLines.size > 0);
  const [active, setActive] = useState<string>(() => sync?.focusFile ?? changedFiles[0]?.path ?? 'src/components/Hero.tsx');
  const [tabs, setTabs] = useState<string[]>(() => [...new Set([active, 'src/App.tsx'])]);
  const [srcOpen, setSrcOpen] = useState(true);
  const [secOpen, setSecOpen] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const editorRef = useRef<HTMLDivElement>(null);
  const file = files.find((f) => f.path === active) ?? files[0];

  const open = (p: string) => {
    setActive(p);
    setTabs((t) => (t.includes(p) ? t : [...t, p]));
  };

  // Scroll first changed line into view.
  useEffect(() => {
    const first = file && [...file.changedLines].sort((a, b) => a - b)[0];
    const ed = editorRef.current;
    if (!ed) return;
    if (first) {
      const row = ed.querySelector<HTMLElement>(`[data-line="${first}"]`);
      if (row) ed.scrollTo({ top: Math.max(0, row.offsetTop - 120), behavior: 'smooth' });
    } else ed.scrollTo({ top: 0 });
  }, [file]);

  if (!file) return null;
  const lines = file.content.split('\n');
  const root = files.filter((f) => !f.path.startsWith('src/'));
  const src = files.filter((f) => f.path.startsWith('src/') && !f.path.startsWith('src/components/'));
  const sections = files.filter((f) => f.path.startsWith('src/components/'));
  const isChanged = (p: string) => files.find((f) => f.path === p)?.changedLines.size;

  const fileRow = (f: GenFile, depth: number) => (
    <button key={f.path} className={`tree__row ${active === f.path ? 'is-active' : ''}`} style={{ paddingLeft: 10 + depth * 14 }} onClick={() => open(f.path)}>
      <FileIcon path={f.path} />
      <span>{f.path.split('/').pop()}</span>
      {f.changedLines.size > 0 && <em className="tree__badge">M</em>}
    </button>
  );

  return (
    <div className="code">
      <aside className="tree">
        <div className="tree__head">Files</div>
        <button className="tree__row" onClick={() => setSrcOpen((o) => !o)}>
          {srcOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          {srcOpen ? <FolderOpen size={14} className="fi fi--dir" /> : <Folder size={14} className="fi fi--dir" />}
          <span>src</span>
        </button>
        {srcOpen && (
          <>
            <button className="tree__row" style={{ paddingLeft: 24 }} onClick={() => setSecOpen((o) => !o)}>
              {secOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              {secOpen ? <FolderOpen size={14} className="fi fi--dir" /> : <Folder size={14} className="fi fi--dir" />}
              <span>components</span>
              {sections.some((f) => f.changedLines.size) && <i className="tree__dot" />}
            </button>
            {secOpen && sections.map((f) => fileRow(f, 3))}
            {src.map((f) => fileRow(f, 2))}
          </>
        )}
        {root.map((f) => fileRow(f, 0))}
      </aside>

      <div className="code__main">
        <div className="code__tabs">
          {tabs.map((p) => (
            <div key={p} className={`code__tab ${p === active ? 'is-active' : ''}`} onClick={() => setActive(p)}>
              <FileIcon path={p} />
              <span>{p.split('/').pop()}</span>
              {isChanged(p) ? <i className="tree__dot" /> : null}
              {tabs.length > 1 && (
                <button
                  className="code__tab-x"
                  aria-label="Close tab"
                  onClick={(e) => {
                    e.stopPropagation();
                    const next = tabs.filter((t) => t !== p);
                    setTabs(next);
                    if (p === active) setActive(next[next.length - 1]);
                  }}
                >
                  <X size={12} />
                </button>
              )}
            </div>
          ))}
        </div>

        {sync && showBanner && changedFiles.length > 0 && (
          <div className="code__banner">
            <Sparkles size={14} />
            <span>
              AI applied <b>{sync.ids.length}</b> design {sync.ids.length === 1 ? 'change' : 'changes'} to{' '}
              {changedFiles.map((f, i) => (
                <button key={f.path} onClick={() => open(f.path)}>
                  {f.path.split('/').pop()}
                  {i < changedFiles.length - 1 ? ', ' : ''}
                </button>
              ))}
            </span>
            <button className="icon-btn" aria-label="Dismiss" onClick={() => setShowBanner(false)}>
              <X size={13} />
            </button>
          </div>
        )}

        <div className="code__crumbs">
          {file.path.split('/').map((p, i, arr) => (
            <span key={i}>
              {p}
              {i < arr.length - 1 && <ChevronRight size={11} />}
            </span>
          ))}
          <button
            className="code__copy"
            onClick={() => {
              navigator.clipboard?.writeText(file.content);
              toast('Copied to clipboard');
            }}
          >
            <Copy size={12} /> Copy
          </button>
        </div>

        <div className="code__editor" ref={editorRef}>
          <div className="code__lines">
            {lines.map((l, i) => {
              const n = i + 1;
              const changed = file.changedLines.has(n);
              return (
                <div key={i} className={`code__line ${changed ? 'is-changed' : ''}`} data-line={n}>
                  <span className="code__ln">{n}</span>
                  <span className="code__src">
                    {highlightLine(l, file.lang).map((tk, j) =>
                      tk.c ? (
                        <span key={j} className={`tk-${tk.c}`}>
                          {tk.t}
                        </span>
                      ) : (
                        tk.t
                      ),
                    )}
                    {l === '' && '​'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

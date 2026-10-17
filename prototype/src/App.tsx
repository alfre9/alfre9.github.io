import { Database as DbIcon, Plug, Table2, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CodeView, type SyncInfo } from './code/CodeView';
import { computeChanges, TransformModal, type ChangeItem } from './code/TransformModal';
import { DesignLayer } from './editor/DesignLayer';
import { DesignStrip } from './editor/DesignStrip';
import { Inspector } from './editor/Inspector';
import { DocProvider, EditorProvider, useDoc, useDocApi, useEditor, type Doc, type Mode } from './editor/store';
import { Site } from './site/Site';
import { ChatPanel } from './shell/ChatPanel';
import { ChatProvider, useChat, versionStamp } from './shell/chatStore';
import { BoltLogo } from './shell/icons';
import { ToastProvider, useToast } from './shell/toast';
import { TopBar } from './shell/TopBar';

const DEVICE_W = { desktop: '100%', tablet: '834px', mobile: '390px' };

export default function App() {
  const [mode, setMode] = useState<Mode>('preview');
  return (
    <ToastProvider>
      <DocProvider>
        <ChatProvider>
          <EditorProvider mode={mode} setMode={setMode}>
            <Shell />
          </EditorProvider>
        </ChatProvider>
      </DocProvider>
    </ToastProvider>
  );
}

function diffIds(a: Doc, b: Doc) {
  return [...new Set([...Object.keys(a), ...Object.keys(b)])].filter((k) => JSON.stringify(a[k]) !== JSON.stringify(b[k]));
}

function Shell() {
  const { mode, setMode, device, getEl, viewportRef, select } = useEditor();
  const { doc, compiled } = useDoc();
  const api = useDocApi();
  const chat = useChat();
  const toast = useToast();
  const [leftOpen, setLeftOpen] = useState(true);
  const [applying, setApplying] = useState<{ changes: ChangeItem[]; next: Mode } | null>(null);
  const [sync, setSync] = useState<SyncInfo | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [badge, setBadge] = useState(true);
  const pending = useMemo(() => diffIds(compiled, doc).length, [compiled, doc]);

  // Phase 1 of the PRD's prioritization: Visual Design is a strict mode. Edits there are a draft
  // until you leave it, then AI applies them all in one pass. A draft left from an earlier visit
  // reopens Visual Design, so Preview never shows edits that aren't in code.
  useEffect(() => {
    if (pending > 0) setMode('design');
  }, []);

  const requestMode = useCallback(
    (m: Mode) => {
      if (m === mode || applying) return;
      if (mode === 'design' && pending > 0) {
        const changes = computeChanges(compiled, doc, getEl);
        if (changes.length) {
          setApplying({ changes, next: m });
          return;
        }
        api.markCompiled();
      }
      setMode(m);
    },
    [mode, applying, pending, compiled, doc, getEl, api, setMode],
  );

  // Read through a ref so the modal's onDone stays stable while it animates.
  const latest = useRef({ applying, chat, toast });
  latest.current = { applying, chat, toast };
  const finishApply = useCallback(() => {
    const { applying: a, chat, toast } = latest.current;
    if (!a) return;
    const n = a.changes.length;
    const label = `${n} design ${n === 1 ? 'change' : 'changes'}`;
    const versions = chat.messages.filter((m) => m.role === 'version').length;
    chat.add({
      role: 'assistant',
      badge: 'Visual Design',
      text: `Applied ${label} to your code in one pass.`,
      actions: [...new Set(a.changes.map((c) => `Edited ${c.file}`)), 'Ran npm run build'],
    });
    chat.add({ role: 'version', title: `Visual Design · ${label}`, subtitle: `Version ${versions + 2} at ${versionStamp()}`, current: true });
    setSync({ ids: a.changes.map((c) => c.id), at: Date.now(), focusFile: a.changes[0]?.file });
    api.markCompiled();
    setApplying(null);
    setMode(a.next);
    toast('Saved to code');
  }, [api, setMode]);

  // "D" toggles Visual Design.
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.metaKey || e.ctrlKey || e.altKey || t.closest('input, textarea, select, [contenteditable]')) return;
      if (e.key === 'd' || e.key === 'D') requestMode(mode === 'design' ? 'preview' : 'design');
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [mode, requestMode]);

  const showCanvas = mode === 'design' || mode === 'preview';

  return (
    <div className={`app mode-${mode}`}>
      <TopBar
        onMode={requestMode}
        onToggleLeft={() => setLeftOpen((o) => !o)}
        pending={pending}
        onReload={() => setReloadKey((k) => k + 1)}
        onReset={() => {
          api.resetAll();
          chat.reset();
          setSync(null);
          select(null);
          toast('Prototype reset to the original design');
        }}
      />
      <div className="body">
        {leftOpen && <ChatPanel onMode={requestMode} />}
        <main className="main">
          <div className="workspace">
            {mode === 'code' && <CodeView sync={sync} />}
            {mode === 'database' && <DatabaseView />}

            <div className="canvas-area" style={{ display: showCanvas ? undefined : 'none' }}>
              {mode === 'design' && <DesignStrip onDone={() => requestMode('preview')} pending={pending} />}
              <div className="canvas-row">
                <div className={`canvas ${mode === 'design' ? 'is-design' : ''} device-${device}`}>
                  <div className="canvas__scroll" ref={viewportRef}>
                    <div className="canvas__device" style={{ width: DEVICE_W[device] }} key={reloadKey}>
                      <Site />
                    </div>
                  </div>
                  <DesignLayer />
                  {mode === 'preview' && badge && (
                    <div className="made-in">
                      <BoltLogo size={16} />
                      <span>Made in Bolt</span>
                      <button aria-label="Hide badge" onClick={() => setBadge(false)}>
                        <X size={13} />
                      </button>
                    </div>
                  )}
                </div>
                {mode === 'design' && <Inspector />}
              </div>
            </div>
          </div>
        </main>
      </div>
      {applying && <TransformModal changes={applying.changes} onDone={finishApply} />}
    </div>
  );
}

function DatabaseView() {
  return (
    <div className="db">
      <div className="db__card">
        <span className="db__icon">
          <DbIcon size={22} />
        </span>
        <h3>No database connected</h3>
        <p>This portfolio is a static site. Connect a database to store contact form submissions or project analytics.</p>
        <button className="btn btn--blue">
          <Plug size={15} /> Connect Supabase
        </button>
        <div className="db__ghost">
          {['contacts', 'projects', 'page_views'].map((t) => (
            <div key={t}>
              <Table2 size={14} /> {t}
              <em>suggested</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

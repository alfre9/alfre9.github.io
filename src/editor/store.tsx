import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';

/* ------------------------------------------------------------------ */
/* Document model: every editable element has an id; edits are stored */
/* as overrides on top of the base design.                             */
/* ------------------------------------------------------------------ */

export type StyleMap = Record<string, string>;
export interface Override {
  style?: StyleMap;
  text?: string;
  href?: string;
  target?: string;
  hidden?: boolean;
}
export type Doc = Record<string, Override>;

const STORAGE_KEY = 'bolt-visual-design:v2';
const COALESCE_MS = 1200;

interface Persisted {
  doc: Doc;
  compiled: Doc;
}

function load(): Persisted {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<Persisted>;
      return { doc: p.doc ?? {}, compiled: p.compiled ?? {} };
    }
  } catch {
    /* storage unavailable */
  }
  return { doc: {}, compiled: {} };
}

function clean(o: Override): Override | undefined {
  const next: Override = { ...o };
  if (next.style) {
    const s: StyleMap = {};
    for (const [k, v] of Object.entries(next.style)) if (v !== '' && v != null) s[k] = v;
    if (Object.keys(s).length) next.style = s;
    else delete next.style;
  }
  if (next.text === undefined) delete next.text;
  if (!next.href) delete next.href;
  if (!next.target) delete next.target;
  if (!next.hidden) delete next.hidden;
  return Object.keys(next).length ? next : undefined;
}

function patchDoc(doc: Doc, id: string, fn: (o: Override) => Override): Doc {
  const cur = doc[id] ?? {};
  const nextO = clean(fn(cur));
  const next = { ...doc };
  if (nextO) next[id] = nextO;
  else delete next[id];
  return next;
}

interface HistState {
  doc: Doc;
  past: Doc[];
  future: Doc[];
}
type Action =
  | { type: 'update'; fn: (d: Doc) => Doc; push: boolean }
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'reset' };

function reducer(s: HistState, a: Action): HistState {
  switch (a.type) {
    case 'update': {
      const doc = a.fn(s.doc);
      if (doc === s.doc || JSON.stringify(doc) === JSON.stringify(s.doc)) return s;
      return { doc, past: a.push ? [...s.past, s.doc].slice(-150) : s.past, future: [] };
    }
    case 'undo': {
      if (!s.past.length) return s;
      return { doc: s.past[s.past.length - 1], past: s.past.slice(0, -1), future: [s.doc, ...s.future] };
    }
    case 'redo': {
      if (!s.future.length) return s;
      return { doc: s.future[0], past: [...s.past, s.doc], future: s.future.slice(1) };
    }
    case 'reset':
      return { doc: {}, past: [...s.past, s.doc], future: [] };
  }
}

export interface DocApi {
  setStyle: (id: string, patch: Record<string, string | undefined>, key?: string) => void;
  setText: (id: string, text: string | undefined, key?: string) => void;
  setLink: (id: string, link: { href?: string; target?: string }, key?: string) => void;
  setHidden: (id: string, hidden: boolean) => void;
  resetNode: (id: string) => void;
  resetAll: () => void;
  undo: () => void;
  redo: () => void;
  markCompiled: () => void;
}

interface DocCtxValue {
  doc: Doc;
  compiled: Doc;
  canUndo: boolean;
  canRedo: boolean;
  saving: boolean;
  savedAt: number;
}

const DocCtx = createContext<DocCtxValue | null>(null);
const ApiCtx = createContext<DocApi | null>(null);

export function DocProvider({ children }: { children: ReactNode }) {
  const initial = useMemo(load, []);
  const [hist, dispatch] = useReducer(reducer, { doc: initial.doc, past: [], future: [] });
  const [compiled, setCompiled] = useState<Doc>(initial.compiled);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(() => Date.now());
  const last = useRef<{ key?: string; t: number }>({ t: 0 });
  const docRef = useRef(hist.doc);
  docRef.current = hist.doc;

  const update = useCallback((fn: (d: Doc) => Doc, key?: string) => {
    const now = Date.now();
    const coalesce = !!key && last.current.key === key && now - last.current.t < COALESCE_MS;
    last.current = { key, t: now };
    dispatch({ type: 'update', fn, push: !coalesce });
  }, []);

  const api = useMemo<DocApi>(
    () => ({
      setStyle: (id, patch, key) =>
        update((d) => patchDoc(d, id, (o) => ({ ...o, style: { ...(o.style ?? {}), ...(patch as StyleMap) } })), key),
      setText: (id, text, key) => update((d) => patchDoc(d, id, (o) => ({ ...o, text })), key),
      setLink: (id, link, key) => update((d) => patchDoc(d, id, (o) => ({ ...o, ...link })), key),
      setHidden: (id, hidden) => update((d) => patchDoc(d, id, (o) => ({ ...o, hidden }))),
      resetNode: (id) => update((d) => patchDoc(d, id, () => ({}))),
      resetAll: () => {
        dispatch({ type: 'reset' });
        setCompiled({});
      },
      undo: () => {
        last.current = { t: 0 };
        dispatch({ type: 'undo' });
      },
      redo: () => {
        last.current = { t: 0 };
        dispatch({ type: 'redo' });
      },
      markCompiled: () => setCompiled(docRef.current),
    }),
    [update],
  );

  // Live sync: every change is persisted automatically (debounced).
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setSaving(true);
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ doc: hist.doc, compiled }));
      } catch {
        /* ignore */
      }
      setSaving(false);
      setSavedAt(Date.now());
    }, 450);
    return () => clearTimeout(t);
  }, [hist.doc, compiled]);

  const value = useMemo<DocCtxValue>(
    () => ({
      doc: hist.doc,
      compiled,
      canUndo: hist.past.length > 0,
      canRedo: hist.future.length > 0,
      saving,
      savedAt,
    }),
    [hist, compiled, saving, savedAt],
  );

  return (
    <ApiCtx.Provider value={api}>
      <DocCtx.Provider value={value}>{children}</DocCtx.Provider>
    </ApiCtx.Provider>
  );
}

export function useDoc() {
  const v = useContext(DocCtx);
  if (!v) throw new Error('useDoc outside DocProvider');
  return v;
}
export function useDocApi() {
  const v = useContext(ApiCtx);
  if (!v) throw new Error('useDocApi outside DocProvider');
  return v;
}

/* ------------------------------------------------------------------ */
/* Editor UI state                                                     */
/* ------------------------------------------------------------------ */

export type Mode = 'design' | 'preview' | 'code' | 'database';
export type Device = 'desktop' | 'tablet' | 'mobile';

/** Kept separate so hover/selection changes don't re-render the whole site. */
interface EditStateValue {
  editingId: string | null;
  animatingId: string | null;
  mode: Mode;
  stopEdit: () => void;
}
const EditStateCtx = createContext<EditStateValue>({ editingId: null, animatingId: null, mode: 'preview', stopEdit: () => {} });

export interface AiRun {
  id: string;
  prompt: string;
  phase: 'thinking' | 'applying' | 'done' | 'unsupported';
  steps: { label: string; done: boolean }[];
}

interface EditorValue {
  mode: Mode;
  setMode: (m: Mode) => void;
  device: Device;
  setDevice: (d: Device) => void;
  selectedId: string | null;
  select: (id: string | null) => void;
  hoverId: string | null;
  setHover: (id: string | null) => void;
  editingId: string | null;
  startEdit: (id: string) => void;
  stopEdit: () => void;
  animatingId: string | null;
  setAnimating: (id: string | null) => void;
  ai: AiRun | null;
  setAi: (a: AiRun | null | ((a: AiRun | null) => AiRun | null)) => void;
  rootRef: RefObject<HTMLDivElement>;
  viewportRef: RefObject<HTMLDivElement>;
  getEl: (id: string | null | undefined) => HTMLElement | null;
}
const EditorCtx = createContext<EditorValue | null>(null);

export function EditorProvider({ children, mode, setMode }: { children: ReactNode; mode: Mode; setMode: (m: Mode) => void }) {
  const [device, setDevice] = useState<Device>('desktop');
  const [selectedId, setSelected] = useState<string | null>(null);
  const [hoverId, setHover] = useState<string | null>(null);
  const [editingId, setEditing] = useState<string | null>(null);
  const [animatingId, setAnimating] = useState<string | null>(null);
  const [ai, setAi] = useState<AiRun | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const getEl = useCallback((id: string | null | undefined) => {
    if (!id || !rootRef.current) return null;
    return rootRef.current.querySelector<HTMLElement>(`[data-vid="${CSS.escape(id)}"]`);
  }, []);

  const select = useCallback((id: string | null) => {
    setSelected(id);
    setEditing((e) => (e === id ? e : null));
    setAi((a) => (a && a.id !== id && a.phase !== 'applying' && a.phase !== 'thinking' ? null : a));
  }, []);

  useEffect(() => {
    if (mode !== 'design') {
      setSelected(null);
      setHover(null);
      setEditing(null);
      setAi(null);
    }
  }, [mode]);

  const stopEdit = useCallback(() => setEditing(null), []);
  const editState = useMemo(() => ({ editingId, animatingId, mode, stopEdit }), [editingId, animatingId, mode, stopEdit]);
  const value = useMemo<EditorValue>(
    () => ({
      mode,
      setMode,
      device,
      setDevice,
      selectedId,
      select,
      hoverId,
      setHover,
      editingId,
      startEdit: (id) => {
        setSelected(id);
        setEditing(id);
      },
      stopEdit,
      animatingId,
      setAnimating,
      ai,
      setAi,
      rootRef,
      viewportRef,
      getEl,
    }),
    [mode, setMode, device, selectedId, select, hoverId, editingId, stopEdit, animatingId, ai, getEl],
  );

  return (
    <EditorCtx.Provider value={value}>
      <EditStateCtx.Provider value={editState}>{children}</EditStateCtx.Provider>
    </EditorCtx.Provider>
  );
}

export function useEditor() {
  const v = useContext(EditorCtx);
  if (!v) throw new Error('useEditor outside EditorProvider');
  return v;
}
export function useEditState() {
  return useContext(EditStateCtx);
}

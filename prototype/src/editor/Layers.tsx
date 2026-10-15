import {
  ChevronRight,
  Eye,
  EyeOff,
  Frame,
  Heading,
  Image,
  LayoutPanelTop,
  Link2,
  RectangleHorizontal,
  Smile,
  Type,
} from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { buildLayerTree, type LayerNode } from './dom';
import type { Kind } from './E';
import { useDoc, useDocApi, useEditor } from './store';

export function KindIcon({ kind, size = 14 }: { kind: Kind; size?: number }) {
  const p = { size, strokeWidth: 1.9 };
  switch (kind) {
    case 'section':
      return <LayoutPanelTop {...p} />;
    case 'heading':
      return <Heading {...p} />;
    case 'text':
      return <Type {...p} />;
    case 'button':
      return <RectangleHorizontal {...p} />;
    case 'link':
      return <Link2 {...p} />;
    case 'icon':
      return <Smile {...p} />;
    case 'graphic':
      return <Image {...p} />;
    default:
      return <Frame {...p} />;
  }
}

export function Layers() {
  const { rootRef, selectedId, hoverId, select, setHover, getEl, viewportRef } = useEditor();
  const { doc } = useDoc();
  const [tree, setTree] = useState<LayerNode[]>([]);
  const [open, setOpen] = useState<Set<string>>(() => new Set(['hero', 'hero.layout', 'hero.copy']));
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (rootRef.current) setTree(buildLayerTree(rootRef.current));
  }, [doc, rootRef]);

  // Reveal the selected layer: expand ancestors, scroll row & canvas into view.
  useEffect(() => {
    const el = getEl(selectedId);
    if (!el) return;
    const ids: string[] = [];
    let cur = el.parentElement?.closest('[data-vid]') as HTMLElement | null;
    while (cur) {
      ids.push(cur.dataset.vid!);
      cur = cur.parentElement?.closest('[data-vid]') as HTMLElement | null;
    }
    setOpen((o) => (ids.every((i) => o.has(i)) ? o : new Set([...o, ...ids])));
    requestAnimationFrame(() => {
      listRef.current?.querySelector(`[data-row="${CSS.escape(selectedId!)}"]`)?.scrollIntoView({ block: 'nearest' });
    });
  }, [selectedId, getEl]);

  const reveal = (id: string) => {
    const el = getEl(id);
    const vp = viewportRef.current;
    if (!el || !vp) return;
    const r = el.getBoundingClientRect();
    const v = vp.getBoundingClientRect();
    if (r.top < v.top + 40 || r.bottom > v.bottom - 40) {
      vp.scrollTo({ top: vp.scrollTop + r.top - v.top - 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="layers" ref={listRef} onPointerLeave={() => setHover(null)}>
      <div className="layers__page">
        <ChevronRight size={12} className="is-open" />
        <span>Home</span>
        <em>/</em>
      </div>
      {tree.map((n) => (
        <Row
          key={n.id}
          node={n}
          depth={0}
          open={open}
          setOpen={setOpen}
          selectedId={selectedId}
          hoverId={hoverId}
          onSelect={(id) => {
            select(id);
            reveal(id);
          }}
          onHover={setHover}
        />
      ))}
    </div>
  );
}

function Row({
  node,
  depth,
  open,
  setOpen,
  selectedId,
  hoverId,
  onSelect,
  onHover,
}: {
  node: LayerNode;
  depth: number;
  open: Set<string>;
  setOpen: React.Dispatch<React.SetStateAction<Set<string>>>;
  selectedId: string | null;
  hoverId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}) {
  const api = useDocApi();
  const isOpen = open.has(node.id);
  const has = node.children.length > 0;
  const sel = selectedId === node.id;
  return (
    <>
      <div
        className={`layer ${sel ? 'is-selected' : ''} ${hoverId === node.id && !sel ? 'is-hover' : ''} ${node.hidden ? 'is-hidden' : ''} layer--${node.kind}`}
        style={{ paddingLeft: 8 + depth * 14 }}
        data-row={node.id}
        onPointerEnter={() => onHover(node.id)}
        onClick={() => onSelect(node.id)}
      >
        <button
          className={`layer__caret ${has ? '' : 'is-empty'} ${isOpen ? 'is-open' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => {
              const n = new Set(o);
              if (n.has(node.id)) n.delete(node.id);
              else n.add(node.id);
              return n;
            });
          }}
          tabIndex={-1}
          aria-label={isOpen ? 'Collapse' : 'Expand'}
        >
          {has && <ChevronRight size={12} />}
        </button>
        <span className="layer__icon">
          <KindIcon kind={node.kind} size={13} />
        </span>
        <span className="layer__name">{node.name}</span>
        <button
          className="layer__eye"
          aria-label={node.hidden ? 'Show' : 'Hide'}
          onClick={(e) => {
            e.stopPropagation();
            api.setHidden(node.id, !node.hidden);
          }}
        >
          {node.hidden ? <EyeOff size={13} /> : <Eye size={13} />}
        </button>
      </div>
      {has &&
        isOpen &&
        node.children.map((c) => (
          <Row
            key={c.id}
            node={c}
            depth={depth + 1}
            open={open}
            setOpen={setOpen}
            selectedId={selectedId}
            hoverId={hoverId}
            onSelect={onSelect}
            onHover={onHover}
          />
        ))}
    </>
  );
}

import { useEffect, useRef } from 'react';
import { useToast } from '../shell/toast';
import { ContextToolbar } from './ContextToolbar';
import { friendlyName, isLeafText } from './dom';
import { KIND_LABEL, type Kind } from './E';
import { useDocApi, useEditor } from './store';

const HANDLES = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'] as const;
type Handle = (typeof HANDLES)[number];

function firstEditableText(el: HTMLElement): HTMLElement | null {
  if (isLeafText(el)) return el;
  return Array.from(el.querySelectorAll<HTMLElement>('[data-vid]')).find(isLeafText) ?? null;
}

export function DesignLayer() {
  const { mode, rootRef, selectedId, hoverId, setHover, select, editingId, startEdit, getEl, ai } = useEditor();
  const api = useDocApi();
  const toast = useToast();
  const active = mode === 'design';

  const layerRef = useRef<HTMLDivElement>(null);
  const hoverBox = useRef<HTMLDivElement>(null);
  const hoverChip = useRef<HTMLSpanElement>(null);
  const selBox = useRef<HTMLDivElement>(null);
  const sizeBadge = useRef<HTMLSpanElement>(null);
  const aiBox = useRef<HTMLDivElement>(null);
  const tbRef = useRef<HTMLDivElement>(null);
  const dragPos = useRef<{ x: number; y: number } | null>(null);
  const selIdRef = useRef(selectedId);
  selIdRef.current = selectedId;
  const hoverIdRef = useRef(hoverId);
  hoverIdRef.current = hoverId;

  useEffect(() => {
    dragPos.current = null;
  }, [selectedId]);

  /* ---------------- pointer + keyboard ---------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!active || !root) return;

    // Buttons & links behave like groups: first click selects the whole button,
    // a second click drills into its label/icon (Figma-style).
    const resolve = (t: EventTarget | null): HTMLElement | null => {
      const el = (t as Element | null)?.closest?.('[data-vid]') as HTMLElement | null;
      if (!el || !root.contains(el)) return null;
      const group = el.parentElement?.closest('[data-kind="button"],[data-kind="link"]') as HTMLElement | null;
      if (group && root.contains(group)) {
        const sel = getEl(selIdRef.current);
        const drilled = sel && (sel === group || group.contains(sel));
        if (!drilled) return group;
      }
      return el;
    };

    const onMove = (e: PointerEvent) => {
      const id = resolve(e.target)?.dataset.vid ?? null;
      if (id !== hoverIdRef.current) setHover(id);
    };
    const onLeave = () => setHover(null);
    const onClick = (e: MouseEvent) => {
      const editingEl = getEl(editingId);
      if (editingEl && editingEl.contains(e.target as Node)) return;
      e.preventDefault();
      e.stopPropagation();
      select(resolve(e.target)?.dataset.vid ?? null);
    };
    const onDbl = (e: MouseEvent) => {
      e.preventDefault();
      const t = (e.target as Element).closest('[data-vid]') as HTMLElement | null;
      const el = t && firstEditableText(t);
      if (el?.dataset.vid) startEdit(el.dataset.vid);
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, select, [contenteditable]')) return;
      const mod = e.metaKey || e.ctrlKey;
      const k = e.key.toLowerCase();
      if (mod && k === 'z') {
        e.preventDefault();
        if (e.shiftKey) api.redo();
        else api.undo();
        return;
      }
      if (mod && k === 'y') {
        e.preventDefault();
        api.redo();
        return;
      }
      const id = selIdRef.current;
      if (!id) return;
      const el = getEl(id);
      if (e.key === 'Escape') {
        const parent = el?.parentElement?.closest('[data-vid]') as HTMLElement | null;
        select(parent && root.contains(parent) ? parent.dataset.vid! : null);
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        const name = el ? friendlyName(el) : 'element';
        api.setHidden(id, true);
        select(null);
        toast(`Hidden “${name}”`, { label: 'Undo', run: () => api.setHidden(id, false) });
      } else if (e.key === 'Enter' && el) {
        e.preventDefault();
        const leaf = firstEditableText(el);
        if (leaf?.dataset.vid) startEdit(leaf.dataset.vid);
      }
    };

    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);
    root.addEventListener('click', onClick, true);
    root.addEventListener('dblclick', onDbl, true);
    window.addEventListener('keydown', onKey);
    return () => {
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('click', onClick, true);
      root.removeEventListener('dblclick', onDbl, true);
      window.removeEventListener('keydown', onKey);
    };
  }, [active, rootRef, getEl, select, setHover, startEdit, editingId, api, toast]);

  /* ---------------- overlay tracking (rAF) ---------------- */
  const aiBusy = !!ai && ai.id === selectedId && (ai.phase === 'thinking' || ai.phase === 'applying');
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const place = (box: HTMLElement | null, el: HTMLElement | null, vp: DOMRect) => {
      if (!box) return null;
      const r = el && el.style.display !== 'none' ? el.getBoundingClientRect() : null;
      if (!r || (r.width === 0 && r.height === 0)) {
        box.style.visibility = 'hidden';
        return null;
      }
      const x = r.left - vp.left;
      const y = r.top - vp.top;
      box.style.visibility = 'visible';
      box.style.transform = `translate(${x}px, ${y}px)`;
      box.style.width = `${r.width}px`;
      box.style.height = `${r.height}px`;
      box.dataset.edgeTop = y < 26 ? '1' : '';
      return { x, y, w: r.width, h: r.height };
    };
    const tick = () => {
      const layer = layerRef.current;
      if (layer) {
        const vp = layer.getBoundingClientRect();
        const selEl = getEl(selectedId);
        const sr = place(selBox.current, selEl, vp);
        if (sr && sizeBadge.current && selEl) {
          sizeBadge.current.textContent = `${selEl.offsetWidth || Math.round(sr.w)} × ${selEl.offsetHeight || Math.round(sr.h)}`;
        }
        place(aiBox.current, aiBusy ? selEl : null, vp);
        place(hoverBox.current, hoverId && hoverId !== selectedId ? getEl(hoverId) : null, vp);

        const tb = tbRef.current;
        if (tb && sr) {
          const bar = tb.querySelector<HTMLElement>('.ctb__bar');
          const bh = bar?.offsetHeight ?? 52;
          const tw = bar?.offsetWidth ?? tb.offsetWidth;
          let left: number;
          let top: number;
          let placeAt: 'below' | 'above';
          if (dragPos.current) {
            ({ x: left, y: top } = dragPos.current);
            placeAt = top > vp.height / 2 ? 'above' : 'below';
          } else {
            const below = sr.y + sr.h + 34;
            placeAt = below + bh + 8 < vp.height ? 'below' : 'above';
            top = placeAt === 'below' ? below : sr.y - 14 - bh;
            left = sr.x + sr.w / 2 - tw / 2;
          }
          left = Math.max(8, Math.min(left, vp.width - tw - 8));
          top = Math.max(8, Math.min(top, vp.height - bh - 8));
          tb.style.transform = `translate(${left}px, ${top}px)`;
          tb.style.visibility = 'visible';
          tb.dataset.place = placeAt;
          // Panels open away from the element, unless there's no room on that side.
          const roomBelow = vp.height - (top + bh);
          tb.dataset.pop = roomBelow > 300 || top < roomBelow ? 'down' : 'up';
        } else if (tb) {
          tb.style.visibility = 'hidden';
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, selectedId, hoverId, getEl, aiBusy]);

  if (!active) return null;

  const selEl = getEl(selectedId);
  const hovEl = getEl(hoverId);
  const selKind = (selEl?.dataset.kind ?? 'container') as Kind;
  const editing = !!editingId && editingId === selectedId;

  const startResize = (h: Handle) => (e: React.PointerEvent) => {
    const el = getEl(selectedId);
    if (!el || !selectedId) return;
    e.preventDefault();
    e.stopPropagation();
    const id = selectedId;
    const sx = e.clientX;
    const sy = e.clientY;
    const w0 = el.offsetWidth;
    const h0 = el.offsetHeight;
    const key = `resize:${id}:${Date.now()}`;
    if (getComputedStyle(el).display === 'inline') api.setStyle(id, { display: 'inline-block' }, key);
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - sx;
      const dy = ev.clientY - sy;
      const patch: Record<string, string> = {};
      if (h.includes('e') || h.includes('w')) {
        patch.width = `${Math.max(8, Math.round(w0 + (h.includes('w') ? -dx : dx)))}px`;
        patch.maxWidth = 'none';
      }
      if (h.includes('s') || h.includes('n')) {
        patch.height = `${Math.max(8, Math.round(h0 + (h.includes('n') ? -dy : dy)))}px`;
      }
      api.setStyle(id, patch, key);
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      document.body.classList.remove('is-resizing');
    };
    document.body.classList.add('is-resizing');
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const onGrip = (e: React.PointerEvent) => {
    e.preventDefault();
    const tb = tbRef.current;
    if (!tb) return;
    const m = tb.style.transform.match(/translate\((-?[\d.]+)px, (-?[\d.]+)px\)/);
    const x0 = m ? parseFloat(m[1]) : 0;
    const y0 = m ? parseFloat(m[2]) : 0;
    const sx = e.clientX;
    const sy = e.clientY;
    const move = (ev: PointerEvent) => {
      dragPos.current = { x: x0 + ev.clientX - sx, y: y0 + ev.clientY - sy };
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <div className="dl" ref={layerRef}>
      <div className="dl__hover" ref={hoverBox}>
        <span className="dl__chip dl__chip--ghost" ref={hoverChip}>
          {hovEl ? KIND_LABEL[(hovEl.dataset.kind ?? 'container') as Kind] : ''}
        </span>
      </div>

      <div className="dl__ai" ref={aiBox}>
        <span className="dl__ai-sweep" />
      </div>

      <div className={`dl__sel ${editing ? 'is-editing' : ''}`} ref={selBox}>
        {selEl && (
          <>
            <span className="dl__chip">{editing ? 'Editing text' : KIND_LABEL[selKind]}</span>
            {!editing &&
              HANDLES.map((h) => <span key={h} className={`dl__handle dl__handle--${h}`} onPointerDown={startResize(h)} />)}
            <span className="dl__size" ref={sizeBadge} />
          </>
        )}
      </div>

      {selectedId && !editing && (
        <div className="dl__tb" ref={tbRef}>
          <ContextToolbar id={selectedId} onGrip={onGrip} />
        </div>
      )}
    </div>
  );
}

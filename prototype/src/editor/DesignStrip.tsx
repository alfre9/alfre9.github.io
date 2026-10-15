import { Check, ChevronRight, Cloud, Loader2, Monitor, Redo2, Smartphone, Tablet, Undo2 } from 'lucide-react';
import { Fragment } from 'react';
import { Segmented } from './controls';
import { ancestorsOf, friendlyName } from './dom';
import { useDoc, useDocApi, useEditor, type Device } from './store';

export function DesignStrip({ onDone, editCount }: { onDone: () => void; editCount: number }) {
  const { selectedId, getEl, select, setHover, device, setDevice } = useEditor();
  const { canUndo, canRedo, saving } = useDoc();
  const api = useDocApi();
  const chain = ancestorsOf(getEl(selectedId));

  return (
    <div className="strip">
      <div className="strip__left">
        <div className="strip__crumbs">
          {chain.length === 0 ? (
            <span className="strip__hint">Click any element to select it · double-click text to edit</span>
          ) : (
            chain.map((el, i) => (
              <Fragment key={el.dataset.vid}>
                {i > 0 && <ChevronRight size={12} className="strip__sep" />}
                <button
                  className={i === chain.length - 1 ? 'is-current' : ''}
                  onClick={() => select(el.dataset.vid!)}
                  onPointerEnter={() => setHover(el.dataset.vid!)}
                  onPointerLeave={() => setHover(null)}
                >
                  {friendlyName(el)}
                </button>
              </Fragment>
            ))
          )}
        </div>
      </div>
      <div className="strip__right">
        <button className="icon-btn" data-tip="Undo  ⌘Z" disabled={!canUndo} onClick={api.undo}>
          <Undo2 size={15} />
        </button>
        <button className="icon-btn" data-tip="Redo  ⇧⌘Z" disabled={!canRedo} onClick={api.redo}>
          <Redo2 size={15} />
        </button>
        <span className="strip__div" />
        <Segmented<Device>
          size="sm"
          value={device}
          onChange={setDevice}
          options={[
            { value: 'desktop', icon: <Monitor size={14} />, title: 'Desktop' },
            { value: 'tablet', icon: <Tablet size={14} />, title: 'Tablet · 834' },
            { value: 'mobile', icon: <Smartphone size={14} />, title: 'Mobile · 390' },
          ]}
        />
        <span className="strip__div" />
        <span className={`sync ${saving ? 'is-saving' : ''}`} data-tip="Live sync: every change is saved automatically">
          {saving ? <Loader2 size={13} className="spin" /> : <Cloud size={14} />}
          {saving ? 'Saving…' : editCount ? (
            <>
              Saved <Check size={12} strokeWidth={3} />
            </>
          ) : (
            'Live'
          )}
        </span>
        <button className="btn btn--blue btn--sm" onClick={onDone}>
          Done
        </button>
      </div>
    </div>
  );
}

import {
  ChevronsUpDown,
  Code2,
  Database,
  Ellipsis,
  Eye,
  History,
  MessagesSquare,
  Monitor,
  PanelLeft,
  RotateCw,
  Settings,
  Smartphone,
  Tablet,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { useOutside } from '../editor/controls';
import { useEditor, type Device, type Mode } from '../editor/store';
import { BoltLogo, GithubIcon, VisualDesignIcon } from './icons';
import { useToast } from './toast';

const DEVICES: { d: Device; icon: typeof Monitor; label: string }[] = [
  { d: 'desktop', icon: Monitor, label: 'Desktop' },
  { d: 'tablet', icon: Tablet, label: 'Tablet' },
  { d: 'mobile', icon: Smartphone, label: 'Mobile' },
];

export function TopBar({
  onMode,
  onToggleLeft,
  pending,
  onReload,
  onReset,
}: {
  onMode: (m: Mode) => void;
  onToggleLeft: () => void;
  pending: number;
  onReload: () => void;
  onReset: () => void;
}) {
  const { mode, device, setDevice } = useEditor();
  const toast = useToast();
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOutside(menuRef, () => setMenu(false), menu);
  const dev = DEVICES.find((x) => x.d === device)!;
  const DevIcon = dev.icon;

  const tabs: { m: Mode; label: string; tip: string; icon: React.ReactNode }[] = [
    { m: 'design', label: 'Visual Design', tip: 'Visual Design', icon: <VisualDesignIcon size={17} active={mode === 'design'} /> },
    { m: 'preview', label: 'Preview', tip: 'Preview', icon: <Eye size={17} /> },
    { m: 'code', label: 'Code', tip: 'Code', icon: <Code2 size={17} /> },
    { m: 'database', label: 'Database', tip: 'Database', icon: <Database size={16} /> },
  ];

  return (
    <header className="top">
      <div className="top__left">
        <span className="top__logo">
          <BoltLogo size={24} />
        </span>
        <span className="top__slash">/</span>
        <span className="top__avatar">A</span>
        <ChevronsUpDown size={13} className="top__muted" />
        <span className="top__project" title="Alfred Chang · Personal Site">
          Alfred Chang · Personal Site
        </span>
        <button className="top__icon" data-tip="Discussion">
          <MessagesSquare size={17} />
        </button>
        <button className="top__icon" data-tip="Version history">
          <History size={17} />
        </button>
        <button className="top__icon" data-tip="Toggle sidebar" onClick={onToggleLeft}>
          <PanelLeft size={17} />
        </button>

        <nav className="modes" aria-label="Workspace view">
          {tabs.map((t) => (
            <button
              key={t.m}
              className={`modes__btn ${mode === t.m ? 'is-active' : ''} ${t.m === 'design' ? 'modes__btn--design' : ''}`}
              data-tip={mode === t.m ? undefined : t.tip}
              data-tip-kbd={t.m === 'design' ? 'D' : undefined}
              aria-label={t.tip}
              aria-pressed={mode === t.m}
              onClick={() => onMode(mode === t.m && t.m === 'design' ? 'preview' : t.m)}
            >
              {t.icon}
              {mode === t.m && <span>{t.label}</span>}
              {t.m === 'code' && pending > 0 && mode !== 'code' && <i className="modes__dot" title={`${pending} edits not yet in code`} />}
            </button>
          ))}
        </nav>
        <div className="top__menu" ref={menuRef}>
          <button className="top__icon" data-tip="Project settings" onClick={() => setMenu((m) => !m)}>
            <Settings size={17} />
          </button>
          {menu && (
            <div className="menu">
              <button
                onClick={() => {
                  setMenu(false);
                  onReset();
                }}
              >
                Reset prototype to original
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="urlbar">
        <span className="urlbar__path">/</span>
        <button className="top__icon" data-tip="Reload preview" onClick={onReload}>
          <RotateCw size={15} />
        </button>
        <button
          className="top__icon"
          data-tip={`${dev.label} — click to switch`}
          onClick={() => setDevice(DEVICES[(DEVICES.indexOf(dev) + 1) % DEVICES.length].d)}
        >
          <DevIcon size={15} />
        </button>
        <button className="top__icon" data-tip="More">
          <Ellipsis size={15} />
        </button>
      </div>

      <div className="top__right">
        <button className="top__icon" data-tip="GitHub">
          <GithubIcon size={19} />
        </button>
        <button className="btn btn--light" onClick={() => toast('Upgrade is not part of this prototype')}>
          Upgrade
        </button>
        <button className="btn btn--ghost" onClick={() => toast('Share link copied (prototype)')}>
          Share
        </button>
        <button className="btn btn--blue" onClick={() => toast('Publishing is disabled in this prototype')}>
          Publish
        </button>
      </div>
    </header>
  );
}

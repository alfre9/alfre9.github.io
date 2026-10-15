import {
  ArrowDown,
  ArrowUp,
  Bookmark,
  ChevronDown,
  ChevronsUpDown,
  CircleDashed,
  Copy,
  Eye,
  FileCode2,
  Lightbulb,
  Mic,
  MousePointerClick,
  Plus,
  ScrollText,
  ThumbsDown,
  ThumbsUp,
  Undo2,
  Ellipsis,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Layers } from '../editor/Layers';
import { useEditor, type Mode } from '../editor/store';
import { VisualDesignIcon } from './icons';
import { useChat, type ChatMessage } from './chatStore';

function Feedback() {
  return (
    <div className="msg__feedback">
      <button aria-label="Copy">
        <Copy size={15} />
      </button>
      <button aria-label="Good response">
        <ThumbsUp size={15} />
      </button>
      <button aria-label="Bad response">
        <ThumbsDown size={15} />
      </button>
      <button aria-label="More">
        <Ellipsis size={15} />
      </button>
    </div>
  );
}

function Message({ m }: { m: ChatMessage }) {
  const [open, setOpen] = useState(false);
  if (m.role === 'version') {
    return (
      <div className={`vcard ${m.current ? 'is-current' : ''}`}>
        <div>
          <strong>{m.title}</strong>
          <span>{m.subtitle}</span>
        </div>
        <div className="vcard__actions">
          <Bookmark size={17} className={m.current ? 'is-blue' : ''} />
          {!m.current && (
            <>
              <Eye size={17} />
              <Undo2 size={17} />
            </>
          )}
        </div>
      </div>
    );
  }
  if (m.role === 'user') return <div className="msg msg--user">{m.text}</div>;
  if (m.role === 'typing') {
    return (
      <div className="msg msg--bot">
        <div className="msg__brand">bolt</div>
        <div className="typing">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }
  return (
    <div className="msg msg--bot">
      <div className="msg__brand">bolt</div>
      {m.badge && (
        <div className="msg__badge">
          <VisualDesignIcon size={14} active /> {m.badge}
        </div>
      )}
      {m.skill && (
        <div className="msg__skill">
          <ScrollText size={15} /> Skill <code>{m.skill}</code>
        </div>
      )}
      <p className="msg__text">{m.text}</p>
      {m.actions && (
        <div className={`actions ${open ? 'is-open' : ''}`}>
          <button className="actions__head" onClick={() => setOpen((o) => !o)}>
            <CircleDashed size={15} />
            <span>{m.actions.length} actions taken</span>
            <ChevronDown size={16} />
          </button>
          {open && (
            <ul>
              {m.actions.map((a) => (
                <li key={a}>
                  <FileCode2 size={13} /> {a}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <Feedback />
    </div>
  );
}

export function ChatPanel({ onMode }: { onMode: (m: Mode) => void }) {
  const { mode } = useEditor();
  const { messages, add, remove } = useChat();
  const [tab, setTab] = useState<'chat' | 'layers'>('chat');
  const [text, setText] = useState('');
  const [atBottom, setAtBottom] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  // Design mode opens Layers by default; leaving it returns to chat.
  useEffect(() => setTab(mode === 'design' ? 'layers' : 'chat'), [mode]);

  useEffect(() => {
    const el = listRef.current;
    if (el && tab === 'chat') el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages.length, tab]);

  const send = () => {
    const t = text.trim();
    if (!t) return;
    setText('');
    add({ role: 'user', text: t });
    const typingId = add({ role: 'typing' });
    setTimeout(() => {
      remove(typingId);
      add({
        role: 'assistant',
        text:
          'This is a prototype, so chat replies are simulated. To change the page yourself, open ✦ Visual Design (left of Preview): click any element to restyle it, double-click text to edit, or ask the AI box in the toolbar to restyle a button.',
      });
    }, 1300);
  };

  return (
    <aside className="left">
      {mode === 'design' && (
        <div className="left__tabs">
          <button className={tab === 'chat' ? 'is-active' : ''} onClick={() => setTab('chat')}>
            Chat
          </button>
          <button className={tab === 'layers' ? 'is-active' : ''} onClick={() => setTab('layers')}>
            Layers
          </button>
        </div>
      )}

      {tab === 'layers' && mode === 'design' ? (
        <Layers />
      ) : (
        <>
          <div
            className="chat"
            ref={listRef}
            onScroll={(e) => {
              const el = e.currentTarget;
              setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 40);
            }}
          >
            <Feedback />
            {messages.map((m) => (
              <Message key={m.id} m={m} />
            ))}
          </div>
          {!atBottom && (
            <button className="chat__down" aria-label="Scroll to bottom" onClick={() => listRef.current?.scrollTo({ top: 1e6, behavior: 'smooth' })}>
              <ArrowDown size={16} />
            </button>
          )}
          <div className="composer">
            <textarea
              value={text}
              placeholder="How can Bolt help you today? (or /command)"
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
            />
            <div className="composer__bar">
              <button className="composer__plus" aria-label="Attach">
                <Plus size={18} />
              </button>
              <button className="composer__pill">
                Standard <ChevronsUpDown size={13} />
              </button>
              <span className="composer__spacer" />
              <button
                className={`composer__pill ${mode === 'design' ? 'is-on' : ''}`}
                data-tip="Select an element to edit visually"
                onClick={() => onMode(mode === 'design' ? 'preview' : 'design')}
              >
                <MousePointerClick size={15} /> Select
              </button>
              <button className="composer__pill">
                <Lightbulb size={15} /> Plan
              </button>
              <button className="composer__icon" aria-label="Voice">
                <Mic size={16} />
              </button>
              <button className="composer__send" aria-label="Send" disabled={!text.trim()} onClick={send}>
                <ArrowUp size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

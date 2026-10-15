import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type ChatMessage =
  | { id: string; role: 'user'; text: string }
  | { id: string; role: 'assistant'; text: string; skill?: string; actions?: string[]; badge?: string }
  | { id: string; role: 'version'; title: string; subtitle: string; current?: boolean }
  | { id: string; role: 'typing' };

const SEED: ChatMessage[] = [
  { id: 'v2', role: 'version', title: 'Hi, I’m Alfred: new hero with photo', subtitle: 'Version 2 at Oct 15 12:47 AM' },
  {
    id: 'u1',
    role: 'user',
    text:
      'Make the hero punchier. Replace the intro paragraph with my top three results as stat tiles: AI commerce $20M ARR, AI photo augmentation $40M ARR, replatforming $146M ARR. Give each tile an icon and a short detail that opens on hover, or on tap on phones.',
  },
  {
    id: 'a1',
    role: 'assistant',
    text:
      "I'll swap the intro paragraph for three stat tiles under the hello. Each gets an icon and a detail card that opens on hover, keyboard focus, or tap. The figures and details live in content.ts so you can edit them in one place.",
    actions: [
      'Read src/content.ts',
      'Read src/components/Hero.tsx',
      'Edited src/content.ts — hero.wins',
      'Edited src/components/Hero.tsx — stat tiles',
      'Edited src/styles.css — tile detail cards',
      'Ran npm run build',
    ],
  },
  { id: 'v3', role: 'version', title: 'Hero stat tiles with detail cards', subtitle: 'Version 3 at Oct 15 2:05 AM', current: true },
];

const KEY = 'bolt-visual-design:chat:v2';

interface ChatValue {
  messages: ChatMessage[];
  add: (m: ChatMessage | Omit<ChatMessage, 'id'>) => string;
  remove: (id: string) => void;
  reset: () => void;
}
const Ctx = createContext<ChatValue | null>(null);

let n = 0;
export const uid = (p = 'm') => `${p}${Date.now().toString(36)}${(n++).toString(36)}`;

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw) as ChatMessage[];
    } catch {
      /* ignore */
    }
    return SEED;
  });
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(messages.filter((m) => m.role !== 'typing')));
    } catch {
      /* ignore */
    }
  }, [messages]);

  const add = useCallback((m: ChatMessage | Omit<ChatMessage, 'id'>) => {
    const id = 'id' in m && m.id ? m.id : uid();
    const msg = { ...m, id } as ChatMessage;
    setMessages((ms) => {
      let next = ms;
      if (msg.role === 'version') next = ms.map((x) => (x.role === 'version' ? { ...x, current: false } : x));
      return [...next, msg];
    });
    return id;
  }, []);
  const remove = useCallback((id: string) => setMessages((ms) => ms.filter((m) => m.id !== id)), []);
  const reset = useCallback(() => setMessages(SEED), []);

  const value = useMemo(() => ({ messages, add, remove, reset }), [messages, add, remove, reset]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useChat() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useChat outside ChatProvider');
  return v;
}

export function versionStamp(d = new Date()) {
  const mon = d.toLocaleString('en-US', { month: 'short' });
  const day = String(d.getDate()).padStart(2, '0');
  const time = d.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' });
  return `${mon} ${day} ${time}`;
}

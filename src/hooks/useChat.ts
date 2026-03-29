'use client';

import { useState, useCallback } from 'react';

export interface Message {
  role: 'user' | 'agent';
  text: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (message: string) => {
    setError(null);
    setMessages(prev => [...prev, { role: 'user', text: message }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, session_id: sessionId }),
      });

      const data = await res.json() as { reply?: string; session_id?: string; detail?: string };

      if (!res.ok) throw new Error(data.detail ?? 'Something went wrong');

      if (data.session_id && !sessionId) setSessionId(data.session_id);

      setMessages(prev => [...prev, { role: 'agent', text: data.reply ?? '...' }]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Agent unavailable';
      setError(msg);
      setMessages(prev => [...prev, { role: 'agent', text: `Sorry, I'm having trouble responding right now.` }]);
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  return { messages, loading, error, sendMessage };
}

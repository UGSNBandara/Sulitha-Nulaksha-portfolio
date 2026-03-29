'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend } from 'react-icons/fi';
import Image from 'next/image';
import { useChat } from '@/hooks/useChat';

const GREETING = "Hey — I'm Sulitha. Ask me anything about my work, projects, or research.";

export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [greeted, setGreeted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const avatarSize = isMobile ? 24 : 28;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, loading, sendMessage } = useChat();

  const Avatar = () => (
    <div
      className="relative rounded-full overflow-hidden flex-shrink-0"
      style={{
        width: `${avatarSize}px`,
        height: `${avatarSize}px`,
        border: '1px solid rgba(243,240,236,0.18)',
      }}
    >
      <Image src="/Avatar/Avatar.png" alt="Sulitha" fill sizes={`${avatarSize}px`} className="object-cover" />
    </div>
  );

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setGreeted(true);
    }
  }, [open]);

  const handleSend = () => {
    const msg = input.trim();
    if (!msg || loading) return;
    setInput('');
    sendMessage(msg);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ── Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50"
            style={{
              bottom: '5.5rem',
              right: '1.5rem',
              width: 'min(380px, calc(100vw - 2rem))',
            }}
          >
            <div
              className="flex flex-col overflow-hidden rounded-2xl"
              style={{
                background: 'rgba(21, 24, 26, 0.92)',
                border: '1px solid rgba(243,240,236,0.1)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                height: '480px',
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4 flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(243,240,236,0.07)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#4ade80', boxShadow: '0 0 6px #4ade80' }}
                  />
                  <span
                    style={{
                      color: 'var(--color-cream)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      fontFamily: 'Inter, monospace',
                      textTransform: 'uppercase',
                    }}
                  >
                    Ask Sulitha
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  style={{ color: 'rgba(243,240,236,0.3)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(243,240,236,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,240,236,0.3)')}
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'none' }}>
                {/* Greeting bubble */}
                {greeted && (
                  <div className="flex items-end gap-2">
                    <Avatar />
                    <div
                      className="max-w-[82%] px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed"
                      style={{
                        background: 'rgba(243,240,236,0.07)',
                        color: 'rgba(243,240,236,0.75)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {GREETING}
                    </div>
                  </div>
                )}

                {messages.map((msg, i) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={i}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start items-end gap-2'}`}
                    >
                      {!isUser && <Avatar />}
                      <div
                        className="max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                        style={
                          isUser
                            ? {
                                background: 'rgba(243,240,236,0.14)',
                                color: 'var(--color-cream)',
                                borderBottomRightRadius: '4px',
                                fontFamily: 'Inter, sans-serif',
                              }
                            : {
                                background: 'rgba(243,240,236,0.06)',
                                color: 'rgba(243,240,236,0.75)',
                                borderBottomLeftRadius: '4px',
                                fontFamily: 'Inter, sans-serif',
                              }
                        }
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}

                {/* Typing indicator */}
                {loading && (
                  <div className="flex justify-start">
                    <div
                      className="px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center"
                      style={{ background: 'rgba(243,240,236,0.06)' }}
                    >
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: 'rgba(243,240,236,0.4)' }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div
                className="px-4 pb-4 pt-3 flex-shrink-0"
                style={{ borderTop: '1px solid rgba(243,240,236,0.07)' }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                  style={{
                    background: 'rgba(243,240,236,0.06)',
                    border: '1px solid rgba(243,240,236,0.1)',
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent outline-none text-sm"
                    style={{
                      color: 'var(--color-cream)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    style={{
                      color: input.trim() && !loading ? 'var(--color-cream)' : 'rgba(243,240,236,0.2)',
                      transition: 'color 0.2s',
                      flexShrink: 0,
                    }}
                  >
                    <FiSend size={14} />
                  </button>
                </div>
                <p
                  className="text-center mt-2"
                  style={{
                    fontSize: '0.6rem',
                    color: 'rgba(243,240,236,0.18)',
                    fontFamily: 'Inter, monospace',
                    letterSpacing: '0.04em',
                  }}
                >
                  Powered by Sulitha&apos;s AI Agent
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle Button ── */}
      <motion.button
        className="fixed z-50 flex items-center gap-2.5 rounded-full"
        style={{
          bottom: '1.75rem',
          right: '1.5rem',
          padding: (open || isMobile) ? '6px' : '6px 14px 6px 6px',
          background: 'rgba(21,24,26,0.85)',
          border: '1px solid rgba(243,240,236,0.12)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          overflow: 'hidden',
          transition: 'padding 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {/* Avatar */}
        <div
          className="relative rounded-full overflow-hidden flex-shrink-0"
          style={{
            width: isMobile ? '36px' : '44px',
            height: isMobile ? '36px' : '44px',
            border: '1px solid rgba(243,240,236,0.15)',
          }}
        >
          <Image src="/Avatar/Avatar.png" alt="Sulitha" fill className="object-cover" />
        </div>

        {/* Label — hidden on mobile or when open */}
        <AnimatePresence mode="wait">
          {!open && !isMobile && (
            <motion.span
              key="label"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: 'rgba(243,240,236,0.75)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              Talk with me
            </motion.span>
          )}
          {open && !isMobile && (
            <motion.span
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: 'rgba(243,240,236,0.5)', paddingRight: '2px' }}
            >
              <FiX size={14} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

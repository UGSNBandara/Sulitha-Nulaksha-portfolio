'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const CREAM_SECTIONS = new Set(['about', 'experience']);

export const BottomNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance on load
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = NAV_ITEMS.map(item => {
        const el = document.getElementById(item.id);
        return el ? { id: item.id, el } : null;
      }).filter(Boolean) as Array<{ id: string; el: HTMLElement }>;

      let current = 'hero';
      for (const section of sections) {
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const handleNavClick = (sectionId: string) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setTimeout(() => setIsScrolling(false), 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-1/2 z-50"
          style={{ x: '-50%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {(() => {
            const onCream = CREAM_SECTIONS.has(activeSection);
            return (
              <div className={`${onCream ? 'glass-on-cream' : 'glass'} shadow-glass rounded-full px-2 py-2`}>
                <nav className="flex items-center gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="relative px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300"
                        style={{
                          color: isActive
                            ? (onCream ? 'var(--color-cream)' : 'var(--color-void)')
                            : (onCream ? 'rgba(33,35,37,0.45)' : 'rgba(243,240,236,0.5)'),
                          letterSpacing: '0.08em',
                        }}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: onCream ? 'var(--color-charcoal)' : 'var(--color-cream)' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            );
          })()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

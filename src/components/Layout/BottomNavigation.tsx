'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi';

interface NavItem {
  id: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero',       label: 'Home',       Icon: FiHome      },
  { id: 'about',      label: 'About',      Icon: FiUser      },
  { id: 'projects',   label: 'Projects',   Icon: FiFolder    },
  { id: 'experience', label: 'Experience', Icon: FiBriefcase },
  { id: 'contact',    label: 'Contact',    Icon: FiMail      },
];

const CREAM_SECTIONS = new Set(['about', 'experience']);

export const BottomNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
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
        if (rect.top <= window.innerHeight * 0.5) current = section.id;
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
          className="fixed bottom-6 left-1/2 z-50"
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
                <nav className="flex items-center gap-0.5 sm:gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    const activeColor = onCream ? 'var(--color-cream)' : 'var(--color-void)';
                    const inactiveColor = onCream ? 'rgba(33,35,37,0.45)' : 'rgba(243,240,236,0.5)';
                    const pillBg = onCream ? 'var(--color-charcoal)' : 'var(--color-cream)';

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="relative rounded-full transition-colors duration-300 flex items-center justify-center gap-1.5"
                        style={{
                          color: isActive ? activeColor : inactiveColor,
                          padding: isMobile ? '0.5rem 0.65rem' : '0.45rem 1rem',
                        }}
                        aria-label={item.label}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: pillBg }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          />
                        )}
                        {/* Mobile: icon only — Desktop: icon + label */}
                        <span className="relative z-10 flex items-center gap-1.5">
                          <item.Icon size={isMobile ? 16 : 13} />
                          {!isMobile && (
                            <span
                              style={{
                                fontSize: '0.68rem',
                                fontWeight: 500,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                fontFamily: 'Inter, monospace',
                              }}
                            >
                              {item.label}
                            </span>
                          )}
                        </span>
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

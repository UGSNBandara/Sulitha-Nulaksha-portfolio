'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { VideoBackground } from '../Shared/VideoBackground';

interface SectionContainerProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  background?: 'void' | 'charcoal' | 'cream' | 'dark' | 'white' | 'gradient' | 'image' | 'video';
  videoSrc?: string;
  imageSrc?: string;
  overlay?: 'dark' | 'light' | 'gradient-dark' | 'gradient-light' | 'none';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullHeight = true,
  background = 'void',
  videoSrc,
  imageSrc,
  overlay = 'none',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px 0px' });

  // Scroll reveal observer for data-reveal elements
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll('[data-reveal]');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const bgStyles: Record<string, string> = {
    void: 'section-dark',
    dark: 'section-dark',
    charcoal: 'section-charcoal',
    cream: 'section-cream',
    white: 'section-cream',
    gradient: 'section-dark',
    image: 'section-dark',
    video: 'section-dark',
  };

  const isOnDark = background !== 'cream' && background !== 'white';

  return (
    <section
      id={id}
      className={`${fullHeight ? 'min-h-screen' : ''} relative flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 ${fullHeight ? 'py-24 md:py-32' : 'py-16 md:py-20'} ${bgStyles[background] || 'section-dark'} ${className}`}
    >
      {/* Background Video or Image */}
      {(background === 'video' || background === 'image') && (
        <VideoBackground
          videoSrc={background === 'video' ? videoSrc : undefined}
          posterImage={background === 'image' ? imageSrc : undefined}
          overlay={overlay}
          opacity={0.4}
        />
      )}

      {/* Spring-animated content wrapper */}
      <motion.div
        ref={sectionRef}
        className="w-full max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 80, scale: 0.97 }}
        animate={isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.97 }
        }
        transition={{
          type: 'spring',
          stiffness: 52,
          damping: 17,
          mass: 1.2,
        }}
      >
        {/* Section header */}
        {(title || subtitle) && (
          <div className="mb-16 md:mb-24" data-reveal>
            {title && (
              <h2
                className="heading-section"
                style={{ color: isOnDark ? 'var(--color-cream)' : 'var(--color-charcoal)' }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="mt-4 body-large max-w-xl"
                style={{ color: isOnDark ? 'rgba(212,206,198,0.6)' : 'rgba(33,35,37,0.5)' }}
              >
                {subtitle}
              </p>
            )}
            <div className={`mt-8 ${isOnDark ? 'divider' : 'divider-cream'}`} />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

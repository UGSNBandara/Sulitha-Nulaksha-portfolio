'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const RESEARCH_ITEMS = [
  {
    label: '01',
    title: 'Intelligent Virtual Agents and Human–AI Interaction',
    desc: 'Developing intelligent virtual agents that can perceive context, reason about interactions, and engage with humans in real time. My work integrates computer vision–based perception, contextual memory, and LLM-driven reasoning to build agents that respond dynamically — demonstrated through a virtual customer interaction assistant and ongoing exploration of multi-agent coordination in shared environments.',
  },
  {
    label: '02',
    title: 'Immersive Digital Environments and Digital Twins',
    desc: 'Investigating methods for reconstructing real-world environments as interactive digital twins. This involves building 3D scene reconstructions, developing preprocessing pipelines to remove dynamic objects like pedestrians and vehicles, and preparing these environments for immersive simulation and intelligent agent interaction.',
  },
  {
    label: '03',
    title: 'Generative AI for Engineering Systems',
    desc: 'Exploring physics-aware generative models for predicting electromagnetic interference in PCB layouts. This work was developed as part of a shortlisted submission to the IEEE IES Generative AI Challenge 2026 — one of 575 submissions from 57 countries — and focuses on methodology design, dataset preparation, and experimental evaluation',
  },
];

export const ResearchSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  // Box grows to full then shrinks back — peaks at midpoint
  const boxScaleX = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [0.18, 1, 1, 0.18]);
  const boxScaleY = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [0.12, 1, 1, 0.12]);
  const boxOpacity = useTransform(smoothProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  // Label "Research" visible only when box is small
  const labelOpacity = useTransform(smoothProgress, [0.05, 0.22, 0.78, 0.95], [1, 0, 0, 1]);

  // Cards fade in once box is big enough
  const cardsOpacity = useTransform(smoothProgress, [0.3, 0.45, 0.55, 0.7], [0, 1, 1, 0]);
  const cardsY = useTransform(smoothProgress, [0.3, 0.45], [16, 0]);

  // Heading fades in with cards
  const headingOpacity = useTransform(smoothProgress, [0.28, 0.42, 0.58, 0.72], [0, 1, 1, 0]);

  const cardContent = RESEARCH_ITEMS.map((item) => (
    <div
      key={item.label}
      style={{
        background: 'rgba(243,240,236,0.04)',
        border: '1px solid rgba(243,240,236,0.08)',
        borderRadius: '12px',
        padding: '1.25rem',
      }}
    >
      <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(243,240,236,0.2)', fontFamily: 'Inter, monospace', display: 'block', marginBottom: '0.6rem' }}>
        {item.label}
      </span>
      <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-cream)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
        {item.title}
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'rgba(243,240,236,0.45)', lineHeight: 1.6 }}>
        {item.desc}
      </p>
    </div>
  ));

  // Mobile: simple static section, no scroll animation
  if (isMobile) {
    return (
      <div style={{ background: 'var(--color-void)', padding: '4rem 1.5rem' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(243,240,236,0.3)', fontFamily: 'Inter, monospace', marginBottom: '1rem' }}>
          Research Directions
        </p>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 600, color: 'var(--color-cream)', letterSpacing: '-0.02em', marginBottom: '2rem', lineHeight: 1.2 }}>
          What I&apos;m working on.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cardContent}
        </div>
      </div>
    );
  }

  return (
    // Tall outer div gives the scroll distance for the animation to play through
    <div
      ref={containerRef}
      style={{
        height: '220vh',
        background: 'var(--color-void)',
        position: 'relative',
      }}
    >
      {/* Sticky inner keeps the box centered while scrolling through */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          style={{
            opacity: boxOpacity,
            scaleX: boxScaleX,
            scaleY: boxScaleY,
            width: '100%',
            maxWidth: '860px',
            minHeight: '340px',
            margin: '0 auto',
            borderRadius: '20px',
            background: 'rgba(243,240,236,0.04)',
            border: '1px solid rgba(243,240,236,0.1)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2.5rem',
            transformOrigin: 'center center',
          }}
        >
          {/* Small-state label */}
          <motion.div
            style={{
              opacity: labelOpacity,
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(243,240,236,0.4)',
                fontFamily: 'Inter, monospace',
              }}
            >
              Research
            </span>
          </motion.div>

          {/* Expanded content */}
          <motion.div style={{ opacity: headingOpacity }}>
            <p
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(243,240,236,0.3)',
                fontFamily: 'Inter, monospace',
                marginBottom: '1rem',
              }}
            >
              Research Directions
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight: 600,
                color: 'var(--color-cream)',
                letterSpacing: '-0.02em',
                marginBottom: '2rem',
                lineHeight: 1.2,
              }}
            >
              What I&apos;m working on.
            </h2>
          </motion.div>

          <motion.div
            style={{
              opacity: cardsOpacity,
              y: cardsY,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {cardContent}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

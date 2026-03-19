'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/*
  All cards AND tags are absolutely placed inside a tall canvas.
  Cards move on scroll (parallax). Tags are STATIC — they sit in
  the empty space near the relevant card but are not bound to it.
*/

// ─── Cards ───────────────────────────────────────────────────────────────────

interface CardDef {
  image: string;
  title: string;
  org: string;
  year: string;
  left: string;
  top: number;
  width: number;
  parallaxRange: [number, number];
}

const CARDS: CardDef[] = [
  {
    // left side
    image: '/experiences/RedChypher/Redcypher.jpeg',
    title: '1st Runner-Up',
    org: 'Red Cypher 2.0 CTF',
    year: '2025',
    left: '4%',
    top: 20,
    width: 580,
    parallaxRange: [70, -70],
  },
  {
    // right side — slightly different right-offset than a true 50/50 column
    image: '/experiences/Neo_Ventures/cover.jpg',
    title: 'Top 50 Rising Founders',
    org: 'Neo Ventures',
    year: '2025',
    left: '52%',
    top: 430,
    width: 600,
    parallaxRange: [40, -40],
  },
  {
    // left side again — nudged a little from Card A so not same column
    image: '/experiences/CodeNight/codenight.jpeg',
    title: '1st Runner-Up',
    org: 'Code Night 2025',
    year: '2025',
    left: '9%',
    top: 860,
    width: 590,
    parallaxRange: [80, -80],
  },
];

// ─── Tags ─────────────────────────────────────────────────────────────────────
// Placed freely in the SPACE near (but not touching) the relevant card.
// They do NOT move on scroll — static, like ambient labels in the canvas.

interface TagDef {
  text: string;
  left: string;
  top: number;
}

const TAGS: TagDef[] = [
  // Near Card A (Red Cypher) — 2 tags in right open space
  { text: 'Problem Solving',   left: '66%', top: 60  },
  { text: 'Critical Thinking', left: '71%', top: 180 },

  // Near Card B (Neo Ventures) — 1 tag in left open space
  { text: 'Leadership',        left: '7%',  top: 530 },

  // Near Card C (Code Night) — 2 tags in right open space
  { text: 'Team Collaboration',left: '65%', top: 960  },
  { text: 'Adaptability',      left: '70%', top: 1070 },
];

// Estimate card height from width + assumed aspect ratio (~4:3 landscape photos)
const estimateHeight = (w: number) => Math.round(w * 0.72);

const CANVAS_H =
  CARDS[CARDS.length - 1].top +
  estimateHeight(CARDS[CARDS.length - 1].width) +
  160;

// ─── Sub-components ──────────────────────────────────────────────────────────

function AbsoluteCard({
  card,
  scrollYProgress,
}: {
  card: CardDef;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const rawY = useTransform(scrollYProgress, [0, 1], card.parallaxRange);
  const y = useSpring(rawY, { stiffness: 70, damping: 22, mass: 0.9 });

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: card.left,
        top: card.top,
        width: card.width,
        y,
        willChange: 'transform',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(243,240,236,0.1)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
      }}
    >
      <Image
        src={card.image}
        alt={card.title}
        width={card.width}
        height={estimateHeight(card.width)}
        style={{ display: 'block', width: card.width, height: 'auto' }}
        sizes={`${card.width}px`}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 45%, rgba(11,16,18,0.94) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px' }}>
        <p style={{ fontFamily: 'Inter, monospace', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(243,240,236,0.4)', marginBottom: 4 }}>
          {card.year}
        </p>
        <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cream)', lineHeight: 1.25, marginBottom: 3 }}>
          {card.title}
        </p>
        <p style={{ fontSize: '0.7rem', color: 'rgba(212,206,198,0.5)', lineHeight: 1.3 }}>
          {card.org}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export const ScatteredCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <>
      {/* Desktop canvas */}
      <div
        ref={containerRef}
        className="relative hidden md:block w-full"
        style={{ height: CANVAS_H }}
      >
        {/* Static floating tags — sit freely in the space */}
        {TAGS.map((tag) => (
          <span
            key={`${tag.text}-${tag.top}`}
            style={{
              position: 'absolute',
              left: tag.left,
              top: tag.top,
              pointerEvents: 'none',
              fontFamily: 'Raleway, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'rgba(33,35,37,0.12)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            {tag.text}
          </span>
        ))}

        {/* Cards with parallax */}
        {CARDS.map((card) => (
          <AbsoluteCard key={card.org} card={card} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      {/* Mobile — simple stack */}
      <div className="flex flex-col gap-8 md:hidden">
        {CARDS.map((card) => (
          <div key={card.org}>
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(243,240,236,0.1)', boxShadow: '0 8px 30px rgba(0,0,0,0.35)' }}>
              <Image src={card.image} alt={card.title} width={400} height={290} style={{ display: 'block', width: '100%', height: 'auto' }} sizes="100vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 35%, rgba(11,16,18,0.9) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 14 }}>
                <p style={{ fontFamily: 'Inter, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(243,240,236,0.4)', marginBottom: 2 }}>{card.year}</p>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-cream)', lineHeight: 1.2 }}>{card.title}</p>
                <p style={{ fontSize: '0.68rem', color: 'rgba(212,206,198,0.5)' }}>{card.org}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

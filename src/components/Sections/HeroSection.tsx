'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiHuggingface, SiWhatsapp } from 'react-icons/si';

const HERO_LINKS = [
  { icon: FaLinkedin,    url: 'https://www.linkedin.com/in/sulitha-nulaksha/', label: 'LinkedIn' },
  { icon: FaGithub,      url: 'https://github.com/SulithaNulaksha',            label: 'GitHub' },
  { icon: SiHuggingface, url: 'https://huggingface.co/sulitha-nulaksha',       label: 'Hugging Face' },
  { icon: FaEnvelope,    url: 'mailto:sulitha.nulaksha@gmail.com',             label: 'Email' },
  { icon: SiWhatsapp,    url: 'https://wa.me/94702405535',                     label: 'WhatsApp' },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      {/* ── Full-viewport video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.75, zIndex: 0 }}
      >
        <source src="/Video/Award.mp4" type="video/mp4" />
      </video>

      {/* ── Subtle gradient: transparent top → dark bottom for text readability ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(11,16,18,0.65) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Main Content ── */}
      <div
        className="relative w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-10"
        style={{ zIndex: 2 }}
      >
        {/* Name & Subtitle */}
        <div className="space-y-4">
          <motion.h1
            className="heading-display"
            style={{ color: 'var(--color-cream)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
          >
            Sulitha Nulaksha
            <br />
            <span style={{ color: 'var(--color-taupe)' }}>Bandara</span>
          </motion.h1>

          <motion.p
            className="body-large max-w-xl mx-auto"
            style={{ color: 'rgba(212, 206, 198, 0.85)', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
          >
            AI · Computer Vision · Game Development
          </motion.p>
        </div>
      </div>

      {/* ── Social icons — top right, vertical column ── */}
      <motion.div
        className="absolute top-8 right-6 md:right-10 flex flex-col items-center gap-5"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {HERO_LINKS.map(({ icon: Icon, url, label }) => (
          <a
            key={label}
            href={url}
            aria-label={label}
            target={url.startsWith('mailto') || url.startsWith('https://wa') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            style={{ color: 'rgba(243,240,236,0.4)', transition: 'opacity 0.3s, color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(243,240,236,1)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,240,236,0.4)')}
          >
            <Icon size={28} />
          </a>
        ))}
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute flex flex-col items-center gap-3"
        style={{ zIndex: 2, bottom: '6rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <div
          className="w-px overflow-hidden"
          style={{ height: '56px', background: 'rgba(243, 240, 236, 0.12)' }}
        >
          <div
            className="w-full h-full scroll-indicator-line"
            style={{ background: 'rgba(243, 240, 236, 0.55)' }}
          />
        </div>
        <span className="label" style={{ opacity: 0.3, color: 'var(--color-cream)' }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

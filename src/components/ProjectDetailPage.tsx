'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiGithub, SiLinkedin, SiHuggingface, SiStreamlit, SiAndroid, SiApple } from 'react-icons/si';
import { FiExternalLink, FiSun, FiMoon } from 'react-icons/fi';
import type { ContentItem, LinkType, ProjectDetail, ProjectSection, ProjectVideo } from '@/data/projects';

type IconComp = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const LINK_META: Record<LinkType, { label: string; Icon: IconComp }> = {
  github:      { label: 'GitHub',       Icon: SiGithub       },
  linkedin:    { label: 'LinkedIn',     Icon: SiLinkedin     },
  wandb:       { label: 'W&B Report',   Icon: FiExternalLink },
  roboflow:    { label: 'Roboflow',     Icon: FiExternalLink },
  streamlit:   { label: 'Live Demo',    Icon: SiStreamlit    },
  huggingface: { label: 'Hugging Face', Icon: SiHuggingface  },
  android:     { label: 'Android APK',  Icon: SiAndroid      },
  ios:         { label: 'iOS',          Icon: SiApple        },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

// ─── Theme tokens ─────────────────────────────────────────────────────────────
type Theme = 'dark' | 'light';

function tokens(theme: Theme) {
  const dark = theme === 'dark';
  return {
    bg:           dark ? '#0b1012'                    : '#f3f0ec',
    glow:         dark ? 'rgba(212,206,198,0.06)'     : 'rgba(33,35,37,0.05)',
    text:         dark ? '#f3f0ec'                    : '#0b1012',
    textMuted:    dark ? 'rgba(243,240,236,0.55)'     : 'rgba(33,35,37,0.55)',
    textFaint:    dark ? 'rgba(243,240,236,0.3)'      : 'rgba(33,35,37,0.3)',
    panelBg:      dark ? 'rgba(243,240,236,0.04)'     : 'rgba(33,35,37,0.04)',
    panelBorder:  dark ? 'rgba(243,240,236,0.08)'     : 'rgba(33,35,37,0.08)',
    tagBg:        dark ? 'rgba(243,240,236,0.06)'     : 'rgba(33,35,37,0.06)',
    tagBorder:    dark ? 'rgba(243,240,236,0.1)'      : 'rgba(33,35,37,0.1)',
    tagText:      dark ? 'rgba(243,240,236,0.5)'      : 'rgba(33,35,37,0.5)',
    divider:      dark ? 'rgba(243,240,236,0.07)'     : 'rgba(33,35,37,0.1)',
    navBg:        dark ? 'rgba(243,240,236,0.06)'     : 'rgba(33,35,37,0.06)',
    navBorder:    dark ? 'rgba(243,240,236,0.12)'     : 'rgba(33,35,37,0.12)',
    navText:      dark ? 'rgba(243,240,236,0.7)'      : 'rgba(33,35,37,0.7)',
    navPillBg:    dark ? '#f3f0ec'                    : '#0b1012',
    navPillText:  dark ? '#0b1012'                    : '#f3f0ec',
  };
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function ContentCard({ card, t }: { card: ContentItem; t: ReturnType<typeof tokens> }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: t.panelBg, border: `1px solid ${t.panelBorder}` }}
    >
      {card.title && (
        <h4 className="mb-2 text-sm font-semibold" style={{ color: t.text }}>
          {card.title}
        </h4>
      )}
      {card.description && (
        <p className="text-sm leading-relaxed" style={{ color: t.textMuted }}>
          {card.description}
        </p>
      )}
      {card.points && (
        <ul className="space-y-1.5 pl-4" style={{ listStyleType: 'disc' }}>
          {card.points.map((pt, i) => (
            <li key={i} className="text-sm leading-relaxed" style={{ color: t.textMuted }}>
              {pt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectionBlock({ section, t }: { section: ProjectSection; t: ReturnType<typeof tokens> }) {
  return (
    <div>
      <h2
        className="mb-5 font-medium uppercase"
        style={{ color: t.textFaint, letterSpacing: '0.12em', fontSize: '0.68rem' }}
      >
        {section.emoji} {section.title}
      </h2>
      {section.items && (
        <ul className="space-y-2.5 pl-4" style={{ listStyleType: 'disc' }}>
          {section.items.map((item, i) => (
            <li key={i} className="text-sm leading-relaxed" style={{ color: t.textMuted }}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.imageBlock && (
        <div
          className="my-5 overflow-hidden rounded-2xl"
          style={{ border: `1px solid ${t.panelBorder}` }}
        >
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image src={section.imageBlock.src} alt={section.imageBlock.alt} fill className="object-cover" />
          </div>
          {(section.imageBlock.title || section.imageBlock.description) && (
            <div className="p-4">
              {section.imageBlock.title && (
                <h3 className="text-sm font-semibold" style={{ color: t.text }}>
                  {section.imageBlock.title}
                </h3>
              )}
              {section.imageBlock.description && (
                <p className="mt-1 text-sm" style={{ color: t.textMuted }}>
                  {section.imageBlock.description}
                </p>
              )}
            </div>
          )}
        </div>
      )}
      {section.content && (
        <div className="space-y-3">
          {section.content.map((card, i) => <ContentCard key={i} card={card} t={t} />)}
        </div>
      )}
    </div>
  );
}

function VideoBlock({ video, index }: { video: ProjectVideo; index: number }) {
  const normalizeEmbedHtml = (html: string) =>
    html
      .replace(/width="[^"]*"/i, 'width="100%"')
      .replace(/height="[^"]*"/i, 'height="100%"')
      .replace('<iframe ', '<iframe style="width:100%;height:100%;border:0;" ');

  if (video.type === 'youtube' && video.youtubeId) {
    return (
      <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
        <iframe
          width="100%" height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title ?? `Demo ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ display: 'block', border: 0 }}
        />
      </div>
    );
  }
  if (video.type === 'embed' && video.embedHtml) {
    return (
      <div
        className="overflow-hidden rounded-2xl"
        style={{ aspectRatio: '16/9' }}
        dangerouslySetInnerHTML={{ __html: normalizeEmbedHtml(video.embedHtml) }}
      />
    );
  }
  return null;
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ProjectDetailPage({ project }: { project: ProjectDetail }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const t = tokens(theme);

  const hasVideos  = project.videos && project.videos.length > 0;
  const hasYoutubes = project.coverYoutubes && project.coverYoutubes.length > 0;

  const GlassPanel = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
      {...fadeUp(delay)}
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: t.panelBg,
        border: `1px solid ${t.panelBorder}`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <main
      style={{
        minHeight: '100vh',
        background: t.bg,
        paddingTop: '5rem',
        paddingBottom: '8rem',
        transition: 'background 0.4s ease',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${t.glow} 0%, transparent 70%)`,
          zIndex: 0,
          transition: 'background 0.4s ease',
        }}
      />

      {/* ── Content container ─────────────────────────────────────────────── */}
      <div
        className="relative z-10 mx-auto w-full px-6 md:px-10 lg:px-12"
        style={{ maxWidth: '1100px' }}
      >

        {/* ── Hero: title + subtitle + tags ── */}
        <motion.div {...fadeUp(0.05)} className="mb-10">
          {project.subtitle && (
            <p
              className="mb-3 text-xs font-medium uppercase tracking-widest"
              style={{ color: t.textFaint, letterSpacing: '0.14em' }}
            >
              {project.subtitle}
            </p>
          )}
          <h1
            className="mb-5 font-semibold leading-tight"
            style={{
              color: t.text,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              transition: 'color 0.4s ease',
            }}
          >
            {project.title}
          </h1>
          <p
            className="mb-8 leading-relaxed"
            style={{
              color: t.textMuted,
              fontSize: '1rem',
              maxWidth: '680px',
              transition: 'color 0.4s ease',
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: t.tagBg,
                  border: `1px solid ${t.tagBorder}`,
                  color: t.tagText,
                  letterSpacing: '0.06em',
                  fontFamily: 'Inter, monospace',
                  transition: 'all 0.4s ease',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Links ── */}
        {project.links.length > 0 && (
          <motion.div {...fadeUp(0.1)} className="mb-10 flex flex-wrap gap-3">
            {project.links.map(({ type, url }) => {
              const { label, Icon } = LINK_META[type];
              return (
                <a
                  key={type}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    padding: '0.5rem 1.1rem',
                    background: t.tagBg,
                    border: `1px solid ${t.tagBorder}`,
                    color: t.tagText,
                    letterSpacing: '0.08em',
                  }}
                >
                  <Icon style={{ width: 13, height: 13 }} />
                  {label}
                </a>
              );
            })}
          </motion.div>
        )}

        {/* Divider */}
        <motion.div
          {...fadeUp(0.13)}
          className="mb-10"
          style={{ height: '1px', background: t.divider, transition: 'background 0.4s ease' }}
        />

        {/* ── Media: videos (unified) ── */}
        {hasVideos && (
          <GlassPanel delay={0.16}>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest" style={{ color: t.textFaint, letterSpacing: '0.12em' }}>
              Demos
            </p>
            <div className={project.videos!.length > 1 ? 'grid gap-4 md:grid-cols-2' : ''}>
              {project.videos!.map((video, index) => (
                <VideoBlock key={index} video={video} index={index} />
              ))}
            </div>
          </GlassPanel>
        )}

        {/* ── Media: legacy coverEmbed ── */}
        {!hasVideos && project.coverEmbed && (
          <GlassPanel delay={0.16}>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest" style={{ color: t.textFaint, letterSpacing: '0.12em' }}>Demo</p>
            <div
              className="overflow-hidden rounded-xl"
              style={{ aspectRatio: '16/9' }}
              dangerouslySetInnerHTML={{ __html: project.coverEmbed }}
            />
          </GlassPanel>
        )}

        {/* ── Media: legacy coverYoutubes ── */}
        {!hasVideos && !project.coverEmbed && hasYoutubes && (
          <GlassPanel delay={0.16}>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest" style={{ color: t.textFaint, letterSpacing: '0.12em' }}>Demos</p>
            <div className={project.coverYoutubes!.length > 1 ? 'grid gap-4 md:grid-cols-2' : ''}>
              {project.coverYoutubes!.map((youtubeId, index) => (
                <div key={`${youtubeId}-${index}`} className="overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    width="100%" height="100%"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={`Demo ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ display: 'block', border: 0 }}
                  />
                </div>
              ))}
            </div>
          </GlassPanel>
        )}

        {/* ── Media: legacy single coverYoutube ── */}
        {!hasVideos && !project.coverEmbed && !hasYoutubes && project.coverYoutube && (
          <GlassPanel delay={0.16}>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest" style={{ color: t.textFaint, letterSpacing: '0.12em' }}>Demo</p>
            <div className="overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%" height="100%"
                src={`https://www.youtube.com/embed/${project.coverYoutube}`}
                title="Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ display: 'block', border: 0 }}
              />
            </div>
          </GlassPanel>
        )}

        {/* ── Media: cover image ── */}
        {!hasVideos && !project.coverEmbed && !hasYoutubes && !project.coverYoutube && project.coverImage && (
          <motion.div
            {...fadeUp(0.16)}
            className="mb-6 overflow-hidden rounded-2xl"
            style={{ border: `1px solid ${t.panelBorder}` }}
          >
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority />
            </div>
          </motion.div>
        )}

        {/* ── Dynamic sections ── */}
        {project.sections.length > 0 && (
          <div className="mt-6 space-y-4">
            {project.sections.map((section, i) => (
              <GlassPanel key={i} delay={0.2 + i * 0.05}>
                <SectionBlock section={section} t={t} />
              </GlassPanel>
            ))}
          </div>
        )}
      </div>

      {/* ── Fixed bottom pill: Home + theme toggle ── */}
      <motion.div
        className="fixed bottom-8 left-1/2 z-50"
        style={{ x: '-50%' } as React.CSSProperties}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="flex items-center gap-1 rounded-full px-2 py-2"
          style={{
            background: t.navBg,
            border: `1px solid ${t.navBorder}`,
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            transition: 'all 0.4s ease',
          }}
        >
          {/* Home button */}
          <Link
            href="/"
            className="relative rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300"
            style={{ color: t.navPillText, background: t.navPillBg, letterSpacing: '0.08em' }}
          >
            Home
          </Link>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
            className="rounded-full p-2 transition-all duration-300 hover:scale-110"
            style={{ color: t.navText }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>
    </main>
  );
}

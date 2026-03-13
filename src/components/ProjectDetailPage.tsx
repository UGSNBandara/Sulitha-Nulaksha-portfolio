'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SiGithub, SiLinkedin, SiHuggingface, SiStreamlit, SiAndroid, SiApple } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import type { ContentItem, LinkType, ProjectDetail, ProjectSection, ProjectVideo } from '@/data/projects';

const ACCENT = '#007AFF';

const BG =
  'relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_40%,_#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] py-20';

const CARD =
  'rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-xl dark:border-white/10 dark:bg-slate-900/80 backdrop-blur-md';

const NAV_PILL =
  'rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100';

const rowV = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.48, delay },
});

type IconComp = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const LINK_META: Record<LinkType, { label: string; color: string; Icon: IconComp }> = {
  github:      { label: 'GitHub',       color: '#333333', Icon: SiGithub       },
  linkedin:    { label: 'LinkedIn',     color: '#0077B5', Icon: SiLinkedin     },
  wandb:       { label: 'W&B Report',   color: '#FFBE00', Icon: FiExternalLink },
  roboflow:    { label: 'Roboflow',     color: '#6706CE', Icon: FiExternalLink },
  streamlit:   { label: 'Live Demo',    color: '#FF4B4B', Icon: SiStreamlit    },
  huggingface: { label: 'Hugging Face', color: '#FFD21E', Icon: SiHuggingface  },
  android:     { label: 'Android APK',  color: '#3DDC84', Icon: SiAndroid      },
  ios:         { label: 'iOS',          color: '#555555', Icon: SiApple        },
};

const COLOR_CLASS: Record<string, string> = {
  blue:   'text-blue-600 dark:text-blue-400',
  green:  'text-green-600 dark:text-green-400',
  red:    'text-red-600 dark:text-red-400',
  orange: 'text-orange-600 dark:text-orange-400',
  purple: 'text-purple-600 dark:text-purple-400',
};

function ContentCard({ card }: { card: ContentItem }) {
  const colorCls = card.color ? (COLOR_CLASS[card.color] ?? 'text-primary') : 'text-primary';
  return (
    <div className="rounded-xl bg-slate-50/60 p-4 dark:bg-slate-800/40">
      {card.title && <h3 className={`mb-2 font-semibold ${colorCls}`}>{card.title}</h3>}
      {card.description && <p className="text-slate-600 dark:text-slate-300">{card.description}</p>}
      {card.points && (
        <ul className="list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
          {card.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
      )}
    </div>
  );
}

function SectionBlock({ section }: { section: ProjectSection }) {
  return (
    <>
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        {section.emoji} {section.title}
      </h2>
      {section.items && (
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {section.imageBlock && (
        <div className="my-4 overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-3 shadow-md dark:border-white/10 dark:bg-slate-800/50">
          <div className="relative h-72 w-full overflow-hidden rounded-xl">
            <Image src={section.imageBlock.src} alt={section.imageBlock.alt} fill className="object-cover" />
          </div>
          {(section.imageBlock.title || section.imageBlock.description) && (
            <div className="px-1 pb-1 pt-3">
              {section.imageBlock.title && (
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{section.imageBlock.title}</h3>
              )}
              {section.imageBlock.description && (
                <p className="mt-1 text-slate-600 dark:text-slate-300">{section.imageBlock.description}</p>
              )}
            </div>
          )}
        </div>
      )}
      {section.content && (
        <div className="space-y-3">
          {section.content.map((card, i) => <ContentCard key={i} card={card} />)}
        </div>
      )}
    </>
  );
}

function VideoCard({ video, index }: { video: ProjectVideo; index: number }) {
  const normalizeEmbedHtml = (html: string): string => {
    // Force embeds (e.g., LinkedIn) to fill the same card box as YouTube.
    const sized = html
      .replace(/width="[^"]*"/i, 'width="100%"')
      .replace(/height="[^"]*"/i, 'height="100%"');

    return sized.replace('<iframe ', '<iframe style="width:100%;height:100%;border:0;" ');
  };

  if (video.type === 'youtube' && video.youtubeId) {
    return (
      <div className="h-[360px] w-full overflow-hidden rounded-xl md:h-[420px]">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title ?? `Demo ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full rounded-xl"
        />
      </div>
    );
  }

  if (video.type === 'embed' && video.embedHtml) {
    return (
      <div
        className="h-[360px] w-full overflow-hidden rounded-xl md:h-[420px]"
        dangerouslySetInnerHTML={{ __html: normalizeEmbedHtml(video.embedHtml) }}
      />
    );
  }

  return null;
}

export default function ProjectDetailPage({ project }: { project: ProjectDetail }) {
  return (
    <main className={BG}>
      {/* dot-grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:w-[90%] lg:w-[65%]">

        {/* ── Nav header ── */}
        <motion.div {...rowV(0)} className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
            Projects
          </p>
          <div className="flex gap-2">
            <Link href="/projects" className={NAV_PILL}>← All Projects</Link>
            <Link href="/" className={NAV_PILL}>← Home</Link>
          </div>
        </motion.div>

        {/* ── Title + description + tags ── */}
        <motion.section {...rowV(0.06)} className={`mb-6 ${CARD}`}>
          <h1 className="text-2xl font-bold leading-snug text-slate-900 dark:text-white">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="mt-1 text-sm font-medium" style={{ color: ACCENT }}>{project.subtitle}</p>
          )}
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* ── Videos: mixed media (new) ── */}
        {project.videos && project.videos.length > 0 && (
          <motion.section {...rowV(0.12)} className={`mb-6 ${CARD}`}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">🎥 Demos</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {project.videos.map((video, index) => (
                <VideoCard key={`video-${index}`} video={video} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Cover: LinkedIn embed (legacy single embed) ── */}
        {(!project.videos || project.videos.length === 0) && project.coverEmbed && (
          <motion.section {...rowV(0.12)} className={`mb-6 ${CARD}`}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">🎥 Demo</h2>
            <div
              className="flex justify-center overflow-hidden rounded-xl"
              dangerouslySetInnerHTML={{ __html: project.coverEmbed }}
            />
          </motion.section>
        )}

        {/* ── Cover: YouTube ── */}
        {(!project.videos || project.videos.length === 0) && !project.coverEmbed && project.coverYoutubes && project.coverYoutubes.length > 0 && (
          <motion.section {...rowV(0.12)} className={`mb-6 ${CARD}`}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">🎥 Demos</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {project.coverYoutubes.map((youtubeId, index) => (
                <div key={`${youtubeId}-${index}`} className="overflow-hidden rounded-xl">
                  <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={`Demo ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-xl"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Cover: YouTube (legacy single video) ── */}
        {(!project.videos || project.videos.length === 0) && !project.coverEmbed && (!project.coverYoutubes || project.coverYoutubes.length === 0) && project.coverYoutube && (
          <motion.section {...rowV(0.12)} className={`mb-6 ${CARD}`}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">🎥 Demo</h2>
            <div className="overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="480"
                src={`https://www.youtube.com/embed/${project.coverYoutube}`}
                title="Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl"
              />
            </div>
          </motion.section>
        )}

        {/* ── Cover: image ── */}
        {(!project.videos || project.videos.length === 0) && !project.coverEmbed && (!project.coverYoutubes || project.coverYoutubes.length === 0) && !project.coverYoutube && project.coverImage && (
          <motion.section {...rowV(0.12)} className="mb-6 overflow-hidden rounded-[2rem]">
            <div className="relative h-72 w-full">
              <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority />
            </div>
          </motion.section>
        )}

        {/* ── Links ── */}
        {project.links.length > 0 && (
          <motion.section {...rowV(0.18)} className={`mb-6 ${CARD}`}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">🔗 Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map(({ type, url }) => {
                const { label, color, Icon } = LINK_META[type];
                return (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-800/60"
                  >
                    <Icon className="h-4 w-4" style={{ color }} />
                    <span style={{ color }}>{label}</span>
                  </a>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* ── Dynamic sections ── */}
        {project.sections.map((section, i) => (
          <motion.section key={i} {...rowV(0.24 + i * 0.06)} className={`mb-6 ${CARD}`}>
            <SectionBlock section={section} />
          </motion.section>
        ))}

      </div>
    </main>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  SiCplusplus,
  SiGithub,
  SiHuggingface,
  SiLinkedin,
  SiOpencv,
  SiPython,
  SiScikitlearn,
  SiSpacy,
  SiTensorflow,
  SiUnity,
  SiWhatsapp,
} from 'react-icons/si';
import { MdEmail, MdLocationOn, MdClose } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import { IconType } from 'react-icons';

// ─── Technical skills (each links to /projects?skill=filterTag) ───────────────
const techSkills = [
  { name: 'Unity',      icon: SiUnity,      color: '#dbeafe', iconColor: '#1d4ed8', filterTag: 'Unity'        },
  { name: 'C++',        icon: SiCplusplus,  color: '#dbeafe', iconColor: '#00599C', filterTag: 'C++'          },
  { name: 'C#',         icon: null,  image: '/images/logo/CSharp.png',  color: '#ede9fe', iconColor: '#68217A', filterTag: 'C#' },
  { name: 'Python',     icon: SiPython,     color: '#dbeafe', iconColor: '#3776AB', filterTag: 'Python'       },
  { name: 'FastAPI',    icon: null, image: '/images/logo/fastapi.svg',   color: '#d1fae5', iconColor: '#009688', filterTag: 'FastAPI' },
  { name: 'ML',         icon: SiScikitlearn,color: '#fef3c7', iconColor: '#F7931E', filterTag: 'ML'           },
  { name: 'Deep Learning', icon: SiTensorflow, color: '#fef3c7', iconColor: '#FF6F00', filterTag: 'Deep Learning' },
  { name: 'NLP',        icon: SiSpacy,      color: '#dbeafe', iconColor: '#09A3D5', filterTag: 'NLP'          },
  { name: 'LangChain',  icon: null, image: '/images/logo/langchain-color.png', color: '#ede9fe', iconColor: '#412991', filterTag: 'LangChain' },
  { name: 'MERN',       icon: null, image: '/images/logo/mern.png',      color: '#dbeafe', iconColor: '#61DAFB', filterTag: 'MERN'  },
  { name: 'Computer Vision', icon: SiOpencv,     color: '#ede9fe', iconColor: '#5C3EE8', filterTag: 'Computer Vision' },
  { name: 'YOLO',       icon: null, image: '/images/logo/yolo.png',      color: '#fef3c7', iconColor: '#FF6F00', filterTag: 'YOLOv8' },
  { name: 'AI Agents',  icon: null, image: '/images/logo/google adk.png',color: '#dbeafe', iconColor: '#007AFF', filterTag: 'AI Agents' },
  { name: 'AR',         icon: SiUnity,      color: '#d1fae5', iconColor: '#16a34a', filterTag: 'AR' },
] as const;

// ─── Soft skills (each links to /experience?skill=filterTag) ─────────────────
const softSkills = [
  { name: 'Leadership',          filterTag: 'Leadership',          desc: 'Team leading & motivating others'          },
  { name: 'Problem Solving',     filterTag: 'Problem Solving',     desc: 'Tackling competitive & research challenges' },
  { name: 'Critical Thinking',   filterTag: 'Critical Thinking',   desc: 'Evaluating problems from multiple angles'  },
  { name: 'Analytical Thinking', filterTag: 'Analytical Thinking', desc: 'Breaking down complex problems logically'   },
  { name: 'Communication Skills',filterTag: 'Communication Skills',desc: 'Clear communication with teams & stakeholders' },
  { name: 'Team Collaboration',  filterTag: 'Team Collaboration',  desc: 'Working effectively in cross-functional teams' },
  { name: 'Adaptability',        filterTag: 'Adaptability',        desc: 'Thriving in new and changing environments'  },
  { name: 'Time Management',     filterTag: 'Time Management',     desc: 'Prioritising tasks and meeting deadlines'   },
  { name: 'Research Mindset',    filterTag: 'Research Mindset',    desc: 'Curiosity-driven exploration & experimentation' },
  { name: 'Self-Learning Ability',filterTag: 'Self-Learning Ability',desc: 'Independently acquiring new skills'        },
];

// ─── Profiles ────────────────────────────────────────────────────────────────
const socialProfiles = [
  { name: 'LinkedIn',    icon: SiLinkedin,    color: '#0077B5', url: 'https://www.linkedin.com/in/nulaksha-bandara/' },
  { name: 'GitHub',      icon: SiGithub,      color: '#333',    url: 'https://github.com/UGSNBandara'                },
  { name: 'Hugging Face',icon: SiHuggingface, color: '#FFD21E', url: 'https://huggingface.co/Sulitha'                },
];

// ─── Contact ─────────────────────────────────────────────────────────────────
const contactItems = [
  { label: 'Personal Email',    value: 'sulithanb119@gmail.com',      href: 'mailto:sulithanb119@gmail.com',   Icon: MdEmail,       color: '#ef4444' },
  { label: 'University Email',  value: 'eg244962@engug.ruh.ac.lk',   href: 'mailto:eg244962@engug.ruh.ac.lk', Icon: MdEmail,       color: '#ef4444' },
  { label: 'WhatsApp',          value: '+94 71 426 2972',             href: 'https://wa.me/94714262972',        Icon: SiWhatsapp,    color: '#22c55e' },
  { label: 'Location',          value: 'Galle, Sri Lanka',            href: '',                                 Icon: MdLocationOn,  color: '#3b82f6' },
];

const ACCENT = '#007AFF';

// ─── Row animation variant ────────────────────────────────────────────────────
const rowVariant = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.48, delay },
});

export default function ProfilePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_40%,_#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] py-20">
      {/* dot-grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:w-[90%] lg:w-[65%]">

        {/* ── Header row ── */}
        <motion.div {...rowVariant(0)} className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>Profile</p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">Sulitha Nulaksha Bandara</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Contact
            </button>
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100"
            >
              ← Home
            </Link>
          </div>
        </motion.div>

        {/* ── Row 1: Intro ── */}
        <motion.section
          {...rowVariant(0.06)}
          className="mb-6 rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-xl dark:border-white/10 dark:bg-slate-900/80 backdrop-blur-md"
        >
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">About Me</h2>
          <div className="mt-4 space-y-3 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              I am a Computer Engineering undergraduate at the University of Ruhuna with a strong interest in Artificial Intelligence, Computer Vision, and immersive digital systems.
            </p>
            <p>
              My work explores how intelligent virtual agents perceive context, reason about interactions, and operate within environments shared with humans. I have developed several AI-driven systems including virtual assistants, computer vision–based interaction platforms, and multi-agent decision systems.
            </p>
            <p>
              My research interests also extend to neural scene reconstruction and digital twin environments for immersive simulations. Alongside academic research, I contribute to applied AI development as a consultant at Traverse Labs, where I work on intelligent systems designed for interactive and immersive technologies.
            </p>
          </div>
        </motion.section>

        {/* ── Row 2: Profiles ── */}
        <motion.section
          {...rowVariant(0.12)}
          className="mb-6 rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-xl dark:border-white/10 dark:bg-slate-900/80 backdrop-blur-md"
        >
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Profiles</h2>
          <div className="flex flex-wrap gap-3">
            {socialProfiles.map(p => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-100"
              >
                <p.icon className="h-4 w-4" style={{ color: p.color }} />
                {p.name}
                <FiExternalLink className="h-3 w-3 opacity-40" />
              </a>
            ))}
          </div>
        </motion.section>

        {/* ── Row 3: Technical Skills ── */}
        <motion.section
          {...rowVariant(0.18)}
          className="mb-6 rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-xl dark:border-white/10 dark:bg-slate-900/80 backdrop-blur-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Technical Skills</h2>
            <span className="text-xs text-slate-400 dark:text-slate-500">Click to see related projects →</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {techSkills.map(skill => (
              <Link
                key={skill.name}
                href={`/projects?skill=${encodeURIComponent(skill.filterTag)}`}
                className="group flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: `${ACCENT}33`,
                  background: 'rgba(0,122,255,0.05)',
                }}
              >
                {(() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const s = skill as any;
                  if (s.image) return <Image src={s.image} alt={skill.name} width={18} height={18} className="h-[18px] w-[18px] object-contain" />;
                  if (s.icon) { const Icon = s.icon; return <Icon className="h-[18px] w-[18px]" style={{ color: s.iconColor }} />; }
                  return null;
                })()}
                <span className="text-slate-800 dark:text-slate-100 group-hover:text-[#007AFF]">{skill.name}</span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ── Row 4: Soft Skills ── */}
        <motion.section
          {...rowVariant(0.24)}
          className="mb-6 rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-xl dark:border-white/10 dark:bg-slate-900/80 backdrop-blur-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Soft Skills</h2>
            <span className="text-xs text-slate-400 dark:text-slate-500">Click to see related experience →</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map(skill => (
              <Link
                key={skill.name}
                href={`/experience?skill=${encodeURIComponent(skill.filterTag)}`}
                className="group flex items-center rounded-2xl border px-4 py-2.5 text-sm shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: `${ACCENT}33`,
                  background: 'rgba(0,122,255,0.05)',
                }}
              >
                <span className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-[#007AFF]">
                  {skill.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

      </div>

      {/* ── Contact popup ── */}
      <AnimatePresence>
        {contactOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setContactOpen(false)}
            />
            {/* modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div
                className="w-full max-w-md rounded-2xl border border-white/70 bg-white/95 p-8 shadow-2xl dark:border-white/10 dark:bg-slate-950"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
                  <button
                    onClick={() => setContactOpen(false)}
                    className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <MdClose className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {contactItems.map(item => {
                    const inner = (
                      <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-4 transition-colors hover:bg-primary/5 dark:bg-slate-900">
                        <item.Icon className="h-6 w-6 flex-none" style={{ color: item.color }} />
                        <div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}</p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={item.label}>{inner}</div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

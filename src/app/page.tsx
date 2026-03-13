'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMoon, FiSun } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { getFeaturedProjects } from '@/data/projects';
import { getFeaturedExperiences } from '@/data/experience';

// ─── Nav items — blue / white / black palette only ─────────────────────────
const orbitLinks = [
  { label: 'Profile',    href: '/profile',    description: 'Skills, Education, Story' },
  { label: 'Projects',   href: '/projects',   description: 'Latest projects'          },
  { label: 'Experience', href: '/experience', description: 'Working experience, Competitions, Awards' },
  { label: 'Research',   href: '/research',   description: 'Research Articles'        },
];
// Single accent for all segments — blue that works in both themes
const ACCENT = '#007AFF';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nulaksha-bandara/', icon: SiLinkedin },
  { label: 'GitHub',   href: 'https://github.com/UGSNBandara',                icon: SiGithub   },
  { label: 'Email',    href: 'mailto:sulithanb119@gmail.com',                  icon: MdEmail    },
];

// Shared dashed-border tuning for card frame + tooltips
const DASH_LENGTH = 6; // length of each dash in px — increase for longer dashes
const DASH_GAP    = 8; // gap between dashes in px — increase for more spacing

// ─── Feed: featured projects + featured experiences ─────────────────────────
interface HomeFeedItem {
  label: string;
  sub:   string;
  image?: string;
  link:  string;
  accent: string;
  type: 'project' | 'experience';
}

const TAILWIND_HEX: Record<string, string> = {
  red: '#ef4444', blue: '#3b82f6', purple: '#a855f7', green: '#22c55e',
  orange: '#f97316', yellow: '#eab308', pink: '#ec4899', indigo: '#6366f1',
  teal: '#14b8a6', cyan: '#06b6d4',
};
function gradientAccent(from: string): string {
  const m = from.match(/from-(\w+)-/);
  return m ? (TAILWIND_HEX[m[1]] ?? '#3b82f6') : '#3b82f6';
}

const feedItems: HomeFeedItem[] = [
  ...getFeaturedProjects().map(p => ({
    label:  p.title,
    sub:    `Project · ${p.tags[0] ?? 'Build'}`,
    image:  p.image,
    link:   p.link,
    accent: gradientAccent(p.gradient.from),
    type:   'project' as const,
  })),
  ...getFeaturedExperiences().map(e => ({
    label:  e.title,
    sub:    `${e.organization} · ${e.year}`,
    image:  e.image,
    link:   '/experience',
    accent: gradientAccent(e.gradient.from),
    type:   'experience' as const,
  })),
];
const FEED_LEN = feedItems.length;

// ─── SVG ring geometry (all in SVG user-units) ────────────────────────────────
const S        = 500;                          // canvas width & height
const CX       = S / 2;                        // 250
const CY       = S / 2;                        // 250
const INNER_R  = 170;                          // inner dashed ring radius
const SEG_IR   = 178;                          // segment inner edge — 8 px gap from ring
const OUTER_R  = 228;                          // outer edge
const TEXT_R   = (SEG_IR + OUTER_R) / 2;      // mid of segment band for text
const IMG_R    = 160;                          // image radius (must stay < INNER_R)
const N        = orbitLinks.length;
const GAP      = 4;                            // degrees of gap between segments
const SPAN     = 360 / N - GAP;               // degrees this segment spans

// Helpers
function toRad(deg: number) { return (deg * Math.PI) / 180; }

/** Cartesian point on a circle of radius r at angle deg (0=right, 90=down) */
function pt(r: number, deg: number) {
  return { x: CX + r * Math.cos(toRad(deg)), y: CY + r * Math.sin(toRad(deg)) };
}

/**
 * SVG path for a filled donut arc-segment from startDeg → endDeg (clockwise).
 * Outer arc → line to inner end → inner arc (CCW) → close.
 */
function donutPath(startDeg: number, endDeg: number): string {
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const o0 = pt(OUTER_R, startDeg);
  const o1 = pt(OUTER_R, endDeg);
  const i1 = pt(SEG_IR, endDeg);
  const i0 = pt(SEG_IR, startDeg);
  return [
    `M ${o0.x} ${o0.y}`,
    `A ${OUTER_R} ${OUTER_R} 0 ${large} 1 ${o1.x} ${o1.y}`,
    `L ${i1.x} ${i1.y}`,
    `A ${INNER_R} ${INNER_R} 0 ${large} 0 ${i0.x} ${i0.y}`,
    'Z',
  ].join(' ');
}

/**
 * Invisible arc path used as the text track inside a segment.
 *
 * Rule: if the midpoint of the segment is in the bottom half of the circle
 * (sin(midDeg) > 0  →  y > CY in screen-space), the arc is drawn
 * counter-clockwise (reversed) so the letter bases face outward and the text
 * reads normally from outside the circle.
 *
 * For the top half the arc is clockwise, which also reads left-to-right.
 */
function textTrack(startDeg: number, endDeg: number, midDeg: number): string {
  const large = SPAN > 180 ? 1 : 0;
  const isBottom = Math.sin(toRad(midDeg)) > 0;   // y-down screen coords

  if (isBottom) {
    // CCW: go from endDeg back to startDeg so text reads correctly from outside
    const p0 = pt(TEXT_R, endDeg);
    const p1 = pt(TEXT_R, startDeg);
    return `M ${p0.x} ${p0.y} A ${TEXT_R} ${TEXT_R} 0 ${large} 0 ${p1.x} ${p1.y}`;
  }
  // CW: from startDeg to endDeg
  const p0 = pt(TEXT_R, startDeg);
  const p1 = pt(TEXT_R, endDeg);
  return `M ${p0.x} ${p0.y} A ${TEXT_R} ${TEXT_R} 0 ${large} 1 ${p1.x} ${p1.y}`;
}

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted]       = useState(false);
  const [hovered, setHovered]       = useState<number | null>(null);
  const [glowIndex, setGlowIndex]   = useState<number>(0);
  const [feedIdx, setFeedIdx]       = useState<number>(0);
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);

  // Ring glow + feed advance — same 2 s beat
  useEffect(() => {
    const id = setInterval(() => {
      setGlowIndex(prev => (prev + 1) % N);
      setFeedIdx(prev => (prev + 1) % FEED_LEN);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Segment fill depends on dark/light mode
  const baseFill  = mounted && theme === 'dark' ? 'rgba(15,23,42,0.88)'  : 'rgba(255,255,255,0.92)';
  const glowFill  = mounted && theme === 'dark' ? 'rgba(0,100,220,0.22)' : 'rgba(0,122,255,0.10)';
  const textColor = mounted && theme === 'dark' ? '#e2e8f0'              : '#0f172a';

  // Pre-compute per-segment geometry
  const segs = orbitLinks.map((item, i) => {
    const startDeg = -90 + i * (360 / N) + GAP / 2;
    const endDeg   = startDeg + SPAN;
    const midDeg   = (startDeg + endDeg) / 2;
    return { ...item, i, startDeg, endDeg, midDeg };
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_40%,_#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {mounted && (
        <motion.button
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="fixed right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/80 text-slate-700 shadow-lg backdrop-blur-md transition-colors dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
        </motion.button>
      )}

      <section className="relative z-10 flex min-h-screen items-center px-4 py-20 md:px-8">
        <div className="container mx-auto grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">

          {/* ── Left: intro copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl">
              Sulitha Nulaksha Bandara
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
              AI • Computer Vision • Game Development
            </p>
            <p className="mt-1 text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
              Research Enthusiast | Consultant at Traverse Labs (Startup)
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </motion.a>
              ))}
            </div>

            {/* ── Camera Roll Feed ── */}
            <div className="mt-8 w-full px-2">

              {/* 16:9 card stack — cards crossfade on top of each other */}
              {/* Outer: dotted border only, transparent inside so the gap shows */}
              <div
                className="mx-auto"
                style={{
                  aspectRatio: '16 / 9',
                  width: '94%',
                  borderRadius: '20px',
                  // Dashed frame using repeating-linear-gradient so dash length & gap are controllable
                  border: 'none',
                  backgroundImage: [
                    // top
                    `repeating-linear-gradient(to right, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                    // bottom
                    `repeating-linear-gradient(to right, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                    // left
                    `repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                    // right
                    `repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                  ].join(','),
                  backgroundSize: '100% 1.5px, 100% 1.5px, 1.5px 100%, 1.5px 100%',
                  backgroundPosition: '0 0, 0 100%, 0 0, 100% 0',
                  backgroundRepeat: 'no-repeat',
                  padding: '8px',
                }}
              >
                {/* Inner: actual image card, fills the padded area */}
                <div className="relative h-full w-full overflow-hidden rounded-xl" style={{ boxShadow: '0 0 32px 8px rgba(0,122,255,0.45), inset 0 0 20px 4px rgba(0,122,255,0.15)' }}>
                {feedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      background: '#081220',
                      opacity: feedIdx === idx ? 1 : 0,
                      transition: 'opacity 0.7s ease',
                      pointerEvents: feedIdx === idx ? 'auto' : 'none',
                    }}
                    onClick={() => router.push(item.link)}
                  >
                    {/* Real image background */}
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    {/* Dark overlay so text is always readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                    {/* Subtle grid texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
                    {/* Left accent bar — always blue */}
                    <div
                      className="absolute left-0 inset-y-0 w-1 rounded-l-2xl"
                      style={{ background: ACCENT }}
                    />
                    {/* Counter — top right */}
                    <span className="absolute right-4 top-3 select-none font-mono text-[10px] text-white/25">
                      {String(idx + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(FEED_LEN).padStart(2, '0')}
                    </span>
                    {/* Content — bottom left */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-5">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/70"
                      >
                        {item.sub}
                      </p>
                      <p className="mt-1 text-base font-semibold leading-snug text-white">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {feedItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeedIdx(idx)}
                    aria-label={feedItems[idx].label}
                    style={{
                      height: 8,
                      width: feedIdx === idx ? 22 : 8,
                      borderRadius: 4,
                      background: feedIdx === idx ? ACCENT : 'rgba(148,163,184,0.35)',
                      boxShadow: feedIdx === idx ? `0 0 10px ${ACCENT}99` : 'none',
                      transition: 'width 0.4s ease, background 0.4s ease, box-shadow 0.4s ease',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  />
                ))}
              </div>

            </div>
          </motion.div>

          {/* ── Right: SVG donut ring nav ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex justify-center"
          >

            {/* Desktop: SVG ring */}
            <div className="relative hidden md:block" style={{ width: S, height: S }}>

              {/* Profile image — sits below the SVG layer */}
              <div
                className="absolute overflow-hidden rounded-full border-[10px] border-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.22)] dark:border-slate-800/80"
                style={{
                  width:  IMG_R * 2,
                  height: IMG_R * 2,
                  left:   CX - IMG_R,
                  top:    CY - IMG_R,
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Sulitha Nulaksha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* SVG canvas — ring segments + arc text on top of image */}
              <svg
                viewBox={`0 0 ${S} ${S}`}
                width={S}
                height={S}
                className="absolute inset-0"
              >
                <defs>
                  {/* One invisible arc path per segment — used as the text track */}
                  {segs.map(seg => (
                    <path
                      key={`track-${seg.i}`}
                      id={`track-${seg.i}`}
                      d={textTrack(seg.startDeg, seg.endDeg, seg.midDeg)}
                      fill="none"
                    />
                  ))}

                  {/* Glow filter for hovered segment */}
                  <filter id="hglow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer dashed ring — white slashed outline */}
                <circle
                  cx={CX} cy={CY}
                  r={OUTER_R + 18}
                  fill="none"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="6 9"
                />

                {/* ── Donut segments ── */}
                {segs.map(seg => {
                  const isHov  = hovered === seg.i;
                  const isGlow = hovered === null && glowIndex === seg.i;
                  const active = isHov || isGlow;
                  // single unified glow opacity — hover = same as auto-glow
                  const glowOp = active ? 0.26 : 0;
                  return (
                    <g
                      key={seg.i}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHovered(seg.i)}
                      onMouseLeave={() => {
                        setGlowIndex(seg.i); // resume cycle from this segment
                        setHovered(null);
                      }}
                      onClick={() => router.push(seg.href)}
                    >
                      {/* Glow bloom — always rendered so CSS opacity transition fades smoothly */}
                      <path
                        d={donutPath(seg.startDeg, seg.endDeg)}
                        fill="none"
                        stroke={ACCENT}
                        strokeWidth="24"
                        strokeLinejoin="round"
                        style={{
                          opacity: glowOp,
                          filter: 'blur(10px)',
                          transition: 'opacity 0.8s ease',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Segment fill — hover same visual as glow */}
                      <path
                        d={donutPath(seg.startDeg, seg.endDeg)}
                        fill={active ? glowFill : baseFill}
                        stroke={active ? ACCENT : 'rgba(255,255,255,0.45)'}
                        strokeWidth="1.5"
                        style={{ transition: 'fill 0.6s ease, stroke 0.6s ease' }}
                      />

                      {/* Curved label */}
                      <text
                        fontSize="12"
                        fontWeight="700"
                        letterSpacing="0.16em"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill={active ? ACCENT : textColor}
                        style={{
                          transition: 'fill 0.6s ease',
                          userSelect: 'none',
                          pointerEvents: 'none',
                        }}
                      >
                        <textPath href={`#track-${seg.i}`} startOffset="50%">
                          {seg.label.toUpperCase()}
                        </textPath>
                      </text>

                      {/* Connector line + dots — sequenced draw/erase */}
                      {(() => {
                        const LINE_LEN = 54;
                        const b = pt(OUTER_R + 2, seg.midDeg);
                        const e = pt(OUTER_R + 56, seg.midDeg);
                        return (
                          <>
                            {/* Line draws button→tip on appear; retracts tip→button on disappear */}
                            <line
                              x1={b.x} y1={b.y} x2={e.x} y2={e.y}
                              stroke="white" strokeWidth="1"
                              style={{
                                strokeDasharray: LINE_LEN,
                                strokeDashoffset: active ? 0 : LINE_LEN,
                                opacity: active ? 0.75 : 0,
                                transition: active
                                  ? 'stroke-dashoffset 0.45s ease, opacity 0.2s ease'
                                  : 'stroke-dashoffset 0.4s ease 0.25s, opacity 0.2s ease 0.6s',
                                pointerEvents: 'none',
                              }}
                            />
                            {/* Button-end dot — appears instantly, disappears last */}
                            <circle cx={b.x} cy={b.y} r="2.5" fill="white"
                              style={{
                                opacity: active ? 0.8 : 0,
                                transition: active
                                  ? 'opacity 0.15s ease'
                                  : 'opacity 0.15s ease 0.6s',
                                pointerEvents: 'none',
                              }}
                            />
                            {/* Tip dot — appears after line reaches it, disappears first */}
                            <circle cx={e.x} cy={e.y} r="2.5" fill="white"
                              style={{
                                opacity: active ? 0.8 : 0,
                                transition: active
                                  ? 'opacity 0.2s ease 0.38s'
                                  : 'opacity 0.15s ease',
                                pointerEvents: 'none',
                              }}
                            />
                          </>
                        );
                      })()}
                    </g>
                  );
                })}

                {/* Inner separator ring — white dashed, drawn on top of segments */}
                <circle
                  cx={CX} cy={CY}
                  r={INNER_R}
                  fill="none"
                  stroke="rgba(255,255,255,0.40)"
                  strokeWidth="1.5"
                  strokeDasharray="5 8"
                />
              </svg>

              {/* Tooltips — always rendered, opacity transitions sequence with connector line */}
              {segs.map(seg => {
                const isHov2  = hovered === seg.i;
                const isGlow2 = hovered === null && glowIndex === seg.i;
                const active2 = isHov2 || isGlow2;
                const midRad  = toRad(seg.midDeg);
                const tR      = OUTER_R + 62;
                const txPct   = ((CX + tR * Math.cos(midRad)) / S) * 100;
                const tyPct   = ((CY + tR * Math.sin(midRad)) / S) * 100;
                const anchorX = txPct < 50 ? 'right' : 'left';
                const anchorY = tyPct < 50 ? 'bottom' : 'top';
                const lines   = seg.description.split(',').map(part => part.trim());
                return (
                  <div
                    key={seg.i}
                    className="pointer-events-none absolute z-30 w-48 rounded-2xl"
                    style={{
                      left:      `${txPct}%`,
                      top:       `${tyPct}%`,
                      transform: `translate(${anchorX === 'left' ? '4px' : 'calc(-100% - 4px)'}, ${anchorY === 'top' ? '4px' : 'calc(-100% - 4px)'})`,
                      opacity:   active2 ? 1 : 0,
                      padding:   '4px', // small gap between border and glowing box
                      border:    'none',
                      backgroundImage: [
                        // top
                        `repeating-linear-gradient(to right, rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                        // bottom
                        `repeating-linear-gradient(to right, rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                        // left
                        `repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                        // right
                        `repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) ${DASH_LENGTH}px, transparent ${DASH_LENGTH}px, transparent ${DASH_LENGTH + DASH_GAP}px)`,
                      ].join(','),
                      backgroundSize: '100% 1.5px, 100% 1.5px, 1.5px 100%, 1.5px 100%',
                      backgroundPosition: '0 0, 0 100%, 0 0, 100% 0',
                      backgroundRepeat: 'no-repeat',
                      // Appear: wait for line to fully draw (0.5s delay)
                      // Disappear: fade out first (no delay) so line can then retract
                      transition: active2
                        ? 'opacity 0.25s ease 0.5s'
                        : 'opacity 0.2s ease',
                    }}
                  >
                    <div
                      className="w-full rounded-2xl p-3.5"
                      style={{
                        boxShadow: `inset 0 0 18px ${ACCENT}99`,
                        background: 'transparent',
                      }}
                    >
                      <p className="text-xs leading-5 text-slate-50 text-center">
                        {lines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile fallback — plain nav cards */}
            <div className="flex w-full max-w-sm flex-col gap-3 md:hidden">
              {orbitLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border bg-white/90 px-5 py-4 shadow-md backdrop-blur-md dark:bg-slate-900/85"
                  style={{ borderColor: `${ACCENT}55` }}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em]"
                       style={{ color: ACCENT }}>
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-lg" style={{ color: ACCENT }}>→</span>
                </Link>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
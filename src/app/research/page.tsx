'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Research Work',
    description: 'A place for deeper technical explorations, model experiments, and system investigations that deserve more than a short project card.',
  },
  {
    title: 'Articles',
    description: 'Write-ups, implementation notes, and reflections on AI, computer vision, software engineering, and competition lessons.',
  },
  {
    title: 'Lab Notes',
    description: 'Small observations, prototype learnings, and findings worth keeping visible as this section grows.',
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gray-50/60 py-20 dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-xl dark:border-white/10 dark:bg-dark-light"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Research</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Research and Articles</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                This route is ready as the new destination from home. It is set up as a dedicated section for future publications, research notes, and technical articles.
              </p>
            </div>

            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-dark dark:text-slate-100"
            >
              Back Home
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50 p-6 dark:border-slate-700 dark:bg-dark"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">Coming Soon</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
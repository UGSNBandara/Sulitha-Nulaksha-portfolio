'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllExperiences } from '@/data/experience';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ExperienceContent() {
  const searchParams = useSearchParams();
  const skillFilter = searchParams.get('skill') ?? '';

  const allExps = getAllExperiences();
  const experiences = skillFilter
    ? allExps.filter(e => e.tags?.some(t => t.toLowerCase() === skillFilter.toLowerCase()))
    : allExps;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_40%,_#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Experience</p>
            <h1 className="mt-3 text-4xl font-bold">
              {skillFilter ? `Experience · ${skillFilter}` : 'Experience Timeline'}
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {skillFilter
                ? `Showing ${experiences.length} entr${experiences.length !== 1 ? 'ies' : 'y'} demonstrating "${skillFilter}"`
                : 'My complete journey and achievements'}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {skillFilter && (
              <Link
                href="/experience"
                className="rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                Clear filter ✕
              </Link>
            )}
            <Link
              href="/"
              className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-dark-light dark:text-gray-100"
            >
              Back Home
            </Link>
          </div>
        </motion.div>

        {experiences.length === 0 ? (
          <div className="py-24 text-center text-slate-400">
            <p className="text-lg">No experiences tagged with &ldquo;{skillFilter}&rdquo; yet.</p>
            <Link href="/experience" className="mt-4 inline-block text-primary hover:underline">See all experience</Link>
          </div>
        ) : (
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20" />

            <div className="space-y-12">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10" />
                  <div className={`w-full md:w-1/2 pl-12 md:pl-8 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div
                      className={`bg-gradient-to-br from-white to-${item.gradient.from.replace('from-', '')}/5
                        dark:from-dark-light dark:to-${item.gradient.from.replace('from-', '')}/10
                        p-6 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300
                        border-2 border-opacity-20 ${item.gradient.from.replace('from-', 'border-')}`}
                    >
                      <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                        <Image
                          src={item.image || '/experiences/default-experience.svg'}
                          alt={`${item.organization} - ${item.title}`}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            if (!e.currentTarget.src.includes('default-experience.svg')) {
                              e.currentTarget.src = '/experiences/default-experience.svg';
                            }
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="text-sm font-semibold text-white">{item.year}</div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 mb-2">{item.organization}</div>
                      <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.tags.map(tag => (
                            <span
                              key={tag}
                              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function Experience() {
  return (
    <Suspense>
      <ExperienceContent />
    </Suspense>
  );
}

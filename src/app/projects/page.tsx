'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const skillFilter = searchParams.get('skill') ?? '';

  const summarizeCardDescription = (text: string, max = 100): string =>
    text.length <= max ? text : `${text.slice(0, max - 3)}...`;

  const allProjects = getAllProjects();
  const projects = skillFilter
    ? allProjects.filter(p =>
        p.tags.some(t => t.toLowerCase().includes(skillFilter.toLowerCase()))
      )
    : allProjects;

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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Projects</p>
            <h1 className="mt-3 text-4xl font-bold">
              {skillFilter ? `Projects · ${skillFilter}` : 'All Projects'}
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {skillFilter
                ? `Showing ${projects.length} project${projects.length !== 1 ? 's' : ''} tagged with "${skillFilter}"`
                : 'A collection of my work'}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {skillFilter && (
              <Link
                href="/projects"
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

        {projects.length === 0 ? (
          <div className="py-24 text-center text-slate-400">
            <p className="text-lg">No projects tagged with &ldquo;{skillFilter}&rdquo; yet.</p>
            <Link href="/projects" className="mt-4 inline-block text-primary hover:underline">See all projects</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-opacity-20 ${project.gradient.from.replace('from-', 'border-')}`}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || '/projects/default-project.svg'}
                      alt={project.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        if (!e.currentTarget.src.includes('default-project.svg')) {
                          e.currentTarget.src = '/projects/default-project.svg';
                        }
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{summarizeCardDescription(project.description, 100)}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-sm rounded-full bg-opacity-10 border border-opacity-20
                            ${project.gradient.from.replace('from-', 'bg-')}
                            ${project.gradient.from.replace('from-', 'border-')}
                            ${project.gradient.from.replace('from-', 'text-')}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className={`inline-flex items-center ${project.gradient.from.replace('from-', 'text-')} hover:opacity-80 transition-colors`}
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default function Projects() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}

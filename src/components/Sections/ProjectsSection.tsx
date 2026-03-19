'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from '../Layout/SectionContainer';
import { allProjects } from '@/data/projects';

const getAllTags = () => {
  const tags = new Set<string>();
  allProjects.forEach(project => {
    project.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();

  const filteredProjects = selectedTag
    ? allProjects.filter(p => p.tags?.includes(selectedTag))
    : allProjects;

  return (
    <SectionContainer
      id="projects"
      fullHeight={false}
      background="charcoal"
    >
      {/* Header */}
      <div className="mb-12" data-reveal>
        <p className="label mb-4" style={{ color: 'rgba(243,240,236,0.4)' }}>
          Work
        </p>
        <h2 className="heading-section" style={{ color: 'var(--color-cream)' }}>
          Featured Projects
        </h2>
        <div className="divider mt-8" />
      </div>

      {/* Filter Tags */}
      <div
        className="flex flex-wrap gap-2 mb-14"
        data-reveal
        data-delay="100"
      >
        <button
          onClick={() => setSelectedTag(null)}
          className="transition-all duration-300"
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            fontFamily: 'Inter, monospace',
            background: selectedTag === null ? 'var(--color-cream)' : 'rgba(243,240,236,0.06)',
            border: selectedTag === null ? '1px solid var(--color-cream)' : '1px solid rgba(243,240,236,0.1)',
            color: selectedTag === null ? 'var(--color-void)' : 'rgba(243,240,236,0.5)',
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className="transition-all duration-300"
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              fontFamily: 'Inter, monospace',
              background: selectedTag === tag ? 'var(--color-cream)' : 'rgba(243,240,236,0.06)',
              border: selectedTag === tag ? '1px solid var(--color-cream)' : '1px solid rgba(243,240,236,0.1)',
              color: selectedTag === tag ? 'var(--color-void)' : 'rgba(243,240,236,0.5)',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid — no data-reveal on cards so filter changes render instantly */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.link || '#'}
              className="block group"
            >
              <div
                className="h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-glass-lg"
                style={{
                  background: 'rgba(243,240,236,0.04)',
                  border: '1px solid rgba(243,240,236,0.08)',
                }}
              >
                {project.image && (
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(33,35,37,0.8))' }}
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-base font-semibold mb-2 line-clamp-2"
                    style={{ color: 'var(--color-cream)', letterSpacing: '-0.01em' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-5 flex-grow line-clamp-3"
                    style={{ color: 'rgba(212,206,198,0.55)' }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20" style={{ color: 'rgba(243,240,236,0.3)' }}>
          No projects match this filter.
        </div>
      )}
    </SectionContainer>
  );
};

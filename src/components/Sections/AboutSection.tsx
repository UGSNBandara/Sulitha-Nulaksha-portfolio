'use client';

import React from 'react';
import Image from 'next/image';
import { SectionContainer } from '../Layout/SectionContainer';

export const AboutSection: React.FC = () => {
  return (
    <SectionContainer
      id="about"
      fullHeight={false}
      background="cream"
    >
      {/* Two columns — bio | image */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        data-reveal
      >
        {/* Col 1 — bio */}
        <div className="space-y-6">
          <p className="label" style={{ color: 'rgba(33,35,37,0.45)' }}>
            About
          </p>
          <h2
            className="heading-section"
            style={{ color: 'var(--color-charcoal)' }}
          >
            Where research meets something you can see, play, or step into.
          </h2>
          <blockquote
            className="body-large"
            style={{
              color: 'rgba(33,35,37,0.65)',
              borderLeft: '2px solid rgba(33,35,37,0.15)',
              paddingLeft: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            &ldquo;Computer Engineering undergrad at Ruhuna, building at the intersection of AI and
            immersive tech — virtual agents, computer vision systems, and multi-agent platforms.
            Currently going deep into game development and neural scene reconstruction,
            exploring how real-world spaces become intelligent simulations.&rdquo;
          </blockquote>
        </div>

        {/* Col 2 — profile image */}
        <div className="flex items-center justify-center md:justify-end">
          <div
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden"
            style={{
              border: '1px solid rgba(33,35,37,0.12)',
              boxShadow: '0 8px 40px rgba(33,35,37,0.1)',
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
        </div>
      </div>
    </SectionContainer>
  );
};

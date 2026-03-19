'use client';

import React from 'react';
import { SectionContainer } from '../Layout/SectionContainer';
import { ScatteredCards } from '../Experience/ScatteredCards';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionContainer
      id="experience"
      fullHeight={false}
      background="cream"
    >
      {/* Header */}
      <div className="mb-14" data-reveal>
        <p className="label mb-4" style={{ color: 'rgba(33,35,37,0.4)' }}>
          Journey
        </p>
        <h2 className="heading-section" style={{ color: 'var(--color-charcoal)' }}>
          Experience & Achievements
        </h2>
        <div className="divider-cream mt-8" />
      </div>

      {/* Scattered parallax cards — desktop / 2×2 grid — mobile */}
      <ScatteredCards />

    </SectionContainer>
  );
};

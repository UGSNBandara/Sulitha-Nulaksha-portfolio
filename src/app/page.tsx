'use client';

import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/Sections/HeroSection';
import { AboutSection } from '@/components/Sections/AboutSection';
import { ProjectsSection } from '@/components/Sections/ProjectsSection';
import { ExperienceSection } from '@/components/Sections/ExperienceSection';
import { ContactSection } from '@/components/Sections/ContactSection';
import { ResearchSection } from '@/components/Sections/ResearchSection';
import { BottomNavigation } from '@/components/Layout/BottomNavigation';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main
      className="relative w-full"
      style={{ backgroundColor: 'var(--color-void)' }}
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResearchSection />
      <ExperienceSection />
      <ContactSection />

      {/* TODO: Game Showcase Video Section
          — Same full-viewport video background style as HeroSection
          — Video: game showcase reel (to be provided)
          — Add a minimal overlay label e.g. "In Play" or "Games"
          — Place between ContactSection and Footer
          — Component to create: src/components/Sections/GameShowcaseSection.tsx
      */}

      <BottomNavigation />

      {/* Footer */}
      <footer
        className="py-10 px-6 md:px-12"
        style={{
          borderTop: '1px solid rgba(243,240,236,0.06)',
          backgroundColor: 'var(--color-void)',
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{
              color: 'rgba(243,240,236,0.25)',
              letterSpacing: '0.06em',
              fontFamily: 'Inter, monospace',
            }}
          >
            © 2025 Sulitha Nulaksha Bandara
          </p>
          <p
            className="text-xs"
            style={{
              color: 'rgba(243,240,236,0.15)',
              letterSpacing: '0.04em',
              fontFamily: 'Inter, monospace',
            }}
          >
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </footer>
    </main>
  );
}

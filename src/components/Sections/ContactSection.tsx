'use client';

import React from 'react';
import { SectionContainer } from '../Layout/SectionContainer';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

const CONTACT_LINKS = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'sulithanb119@gmail.com',
    url: 'mailto:sulithanb119@gmail.com',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    value: '+94 71 426 2972',
    url: 'https://wa.me/94714262972',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/nulaksha-bandara',
    url: 'https://www.linkedin.com/in/nulaksha-bandara/',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'SulithaNulaksha',
    url: 'https://github.com/SulithaNulaksha',
  },
];

export const ContactSection: React.FC = () => {
  return (
    <SectionContainer
      id="contact"
      fullHeight={false}
      background="charcoal"
    >
      {/* Two-column: CTA left | icons right */}
      <div className="flex items-start justify-between gap-16 flex-wrap" data-reveal>
        {/* Left — CTA */}
        <div className="flex-1 min-w-0">
          <p className="label mb-6" style={{ color: 'rgba(243,240,236,0.4)' }}>
            Contact
          </p>
          <h2
            className="heading-section mb-6"
            style={{ color: 'var(--color-cream)' }}
          >
            Let's build something
            <br />
            <span style={{ color: 'var(--color-taupe)' }}>together.</span>
          </h2>
          <p
            className="body-large"
            style={{ color: 'rgba(212,206,198,0.55)' }}
          >
            Always interested in new projects and opportunities.
            Reach out through any channel below.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <a href="mailto:sulithanb119@gmail.com" className="btn-cream">
              Send a Message
            </a>
            <a
              href="/cv/Sulitha_Nulaksha_CV.pdf"
              download
              className="btn-outline-cream"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right — icons only, vertical column */}
        <div className="flex flex-col items-center gap-6 pt-2 flex-shrink-0">
          {CONTACT_LINKS.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              aria-label={label}
              target={url.startsWith('mailto') || url.startsWith('https://wa') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              style={{ color: 'rgba(243,240,236,0.35)', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(243,240,236,1)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,240,236,0.35)')}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

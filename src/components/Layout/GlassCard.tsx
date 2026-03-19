'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'subtle' | 'cream';
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'light',
  hover = true,
  onClick,
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-500';

  const variantStyles = {
    light: 'glass shadow-glass',
    dark: 'glass-dark shadow-glass',
    subtle: 'glass-subtle shadow-glass-sm',
    cream: 'glass-on-cream shadow-glass-sm',
  };

  const hoverStyles = hover
    ? 'hover:shadow-glass-lg hover:-translate-y-0.5'
    : '';

  const interactiveStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${interactiveStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

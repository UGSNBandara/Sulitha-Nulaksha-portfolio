'use client';

import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  variant = 'primary',
}) => {
  const variantStyles = {
    primary: 'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 dark:from-slate-300 dark:via-slate-200 dark:to-slate-100',
    secondary: 'bg-gradient-to-r from-slate-600 to-slate-400 dark:from-slate-400 dark:to-slate-200',
    accent: 'bg-gradient-to-r from-slate-800 to-slate-600 dark:from-cream to-slate-300',
  };

  return (
    <span className={`${variantStyles[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

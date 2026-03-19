/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Fluid.glass exact palette
        cream: '#f3f0ec',
        charcoal: '#212325',
        void: '#0b1012',
        taupe: '#d4cec6',
        'muted': '#8a8480',

        // Legacy aliases
        'dark-bg': '#212325',
        'border-light': '#e8e5e0',

        // Glass effect colors
        glass: {
          light: 'rgba(243, 240, 236, 0.08)',
          lighter: 'rgba(243, 240, 236, 0.04)',
          dark: 'rgba(11, 16, 18, 0.6)',
          darker: 'rgba(11, 16, 18, 0.8)',
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(243, 240, 236, 0.1)',
        'glass-lg': '0 24px 64px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(243, 240, 236, 0.08)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(243, 240, 236, 0.06)',
        'glow': '0 0 60px rgba(243, 240, 236, 0.05)',
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(243,240,236,0.08) 0%, rgba(243,240,236,0.02) 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0b1012 0%, #121a1e 100%)',
        'gradient-cream': 'linear-gradient(180deg, #f3f0ec 0%, #ebe8e4 100%)',
      },
      letterSpacing: {
        'widest': '0.1em',
        'wider': '0.08em',
        'wide': '0.05em',
      },
      fontSize: {
        'fluid-hero': 'clamp(2.5rem, 6vw, 5rem)',
        'fluid-title': 'clamp(1.8rem, 4vw, 3rem)',
        'fluid-subtitle': 'clamp(1rem, 2vw, 1.25rem)',
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blob': 'blob 12s ease-in-out infinite',
        'grain': 'grain 0.5s steps(2) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(40px, -60px) scale(1.08)' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.95)' },
          '75%': { transform: 'translate(-50px, -20px) scale(1.05)' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-1px, 2px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'snappy': 'cubic-bezier(1, 0, 0, 1)',
      },
    },
  },
  safelist: [
    'from-blue-500', 'to-purple-600',
    'from-green-500', 'to-teal-600',
    'from-orange-500', 'to-red-600',
    'from-pink-500', 'to-purple-600',
    'from-yellow-500', 'to-orange-600',
  ],
  plugins: [],
}

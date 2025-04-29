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
        primary: '#007AFF',
        secondary: '#6B7280',
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          dark: '#020617',
        },
        custom:{
          pink : '#bc02eb',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
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
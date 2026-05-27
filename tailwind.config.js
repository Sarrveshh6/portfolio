import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        'bg-dark': 'var(--color-bg-dark)',
        'bg-dark-2': 'var(--color-bg-dark-2)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-subtle': 'var(--color-text-subtle)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'hero-red': 'var(--hero-red)',
        border: 'var(--color-border)',
        'border-medium': 'var(--color-border-medium)',
        'border-dark': 'var(--color-border-dark)',
      },
      fontFamily: {
        display: ['"Clash Display"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['7rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-l': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-m': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-s': ['2rem', { lineHeight: '1.2' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        content: '72rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [typography, forms],
};

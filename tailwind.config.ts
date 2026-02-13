import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#141414',
        'text-primary': '#F1F0EB',
        'text-muted': '#999999',
        'accent-ai': '#7B61FF',
        'accent-gold': '#D4AF37',
        'border-subtle': 'rgba(255,255,255,0.1)',
        'overlay-glass': 'rgba(20,20,20,0.6)',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'hero': ['96px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'chapter': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'base': '4px',
      },
      maxWidth: {
        'container': '1600px',
      },
      borderRadius: {
        'card': '24px',
        'button': '999px',
      },
      backdropBlur: {
        'glass': '24px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;

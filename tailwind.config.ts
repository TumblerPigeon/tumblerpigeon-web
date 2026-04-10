import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0d0b0e',
          card: '#161318',
          elevated: '#1e1a22',
        },
        cream: {
          DEFAULT: '#f5e6c8',
          muted: '#c8b89a',
          dim: '#8a7560',
        },
        brand: {
          blue: '#1a3adb',
          'blue-bright': '#2e52ff',
          red: '#c0392b',
          'red-bright': '#e84c3d',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', ...fontFamily.sans],
        body: ['var(--font-space-grotesk)', ...fontFamily.sans],
        mono: ['var(--font-space-mono)', ...fontFamily.mono],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'glitch': 'glitch 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, 2px)' },
          '98%': { transform: 'translate(1px, -1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#c8b89a',
            '--tw-prose-headings': '#f5e6c8',
            '--tw-prose-links': '#2e52ff',
            '--tw-prose-bold': '#f5e6c8',
            '--tw-prose-code': '#f5e6c8',
            '--tw-prose-pre-bg': '#161318',
            '--tw-prose-pre-code': '#f5e6c8',
            '--tw-prose-hr': '#2a2530',
            '--tw-prose-quotes': '#c8b89a',
            '--tw-prose-quote-borders': '#1a3adb',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;

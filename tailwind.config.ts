import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const color = (token: string) => `rgb(var(${token}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: color('--color-canvas'),
          card: color('--color-surface'),
          elevated: color('--color-surface-raised'),
        },
        cream: {
          DEFAULT: color('--color-ink'),
          muted: color('--color-ink-muted'),
          dim: color('--color-ink-dim'),
        },
        brand: {
          DEFAULT: color('--color-accent'),
          accent: color('--color-accent'),
          'accent-bright': color('--color-accent-strong'),
          // Compatibility aliases for dormant routes while the old palette is retired.
          blue: color('--color-accent'),
          'blue-bright': color('--color-accent-strong'),
          red: color('--color-accent'),
          'red-bright': color('--color-accent-strong'),
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', ...fontFamily.sans],
        body: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      animation: {
        reveal: 'reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'image-in': 'imageIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both',
      },
      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        imageIn: {
          from: { opacity: '0', transform: 'scale(0.96) rotate(1deg)' },
          to: { opacity: '1', transform: 'scale(1) rotate(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-ink-muted))',
            '--tw-prose-headings': 'rgb(var(--color-ink))',
            '--tw-prose-links': 'rgb(var(--color-accent))',
            '--tw-prose-bold': 'rgb(var(--color-ink))',
            '--tw-prose-code': 'rgb(var(--color-ink))',
            '--tw-prose-pre-bg': 'rgb(var(--color-surface))',
            '--tw-prose-pre-code': 'rgb(var(--color-ink))',
            '--tw-prose-hr': 'rgb(var(--color-ink) / 0.12)',
            '--tw-prose-quotes': 'rgb(var(--color-ink-muted))',
            '--tw-prose-quote-borders': 'rgb(var(--color-accent))',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;

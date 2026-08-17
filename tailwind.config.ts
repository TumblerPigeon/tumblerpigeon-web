import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const color = (token: string) => `rgb(var(${token}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
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
      },
      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

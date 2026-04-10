import type { Metadata } from 'next';
import { Bebas_Neue, Space_Grotesk, Space_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TumblerPigeon — Game Dev. Content. Chaos.',
    template: '%s | TumblerPigeon',
  },
  description:
    'TumblerPigeon is a solo game developer and content creator brand. Dev logs, games, merch, and more.',
  keywords: ['game development', 'indie games', 'content creator', 'TumblerPigeon'],
  openGraph: { siteName: 'TumblerPigeon', type: 'website' },
  twitter: { card: 'summary_large_image', creator: '@tumblerpigeon' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Read the locale that next-intl's middleware injects into request headers
  const headersList = headers();
  const locale = headersList.get('x-next-intl-locale') ?? 'en';

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="font-body bg-bg text-cream-muted min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Bebas_Neue, Space_Grotesk } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';

const siteDescription =
  'TumblerPigeon is an anonymous masked creator identity sharing original content, visual experiments, and internet culture.';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tumblerpigeon.com'),
  title: 'Tumbler Pigeon',
  description: siteDescription,
  keywords: ['content creator', 'social media creator', 'internet culture', 'TumblerPigeon'],
  icons: { icon: '/images/logo.png' },
  openGraph: {
    title: 'Tumbler Pigeon',
    description: siteDescription,
    siteName: 'TumblerPigeon',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tumbler Pigeon',
    description: siteDescription,
    creator: '@tumblerpigeon_',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Read the locale that next-intl's middleware injects into request headers
  const headersList = headers();
  const locale = headersList.get('x-next-intl-locale') ?? 'en';

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-body bg-bg text-cream-muted min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

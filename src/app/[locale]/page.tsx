import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import PigeonArcSection from '@/components/home/PigeonArcSection';
import MerchSection from '@/components/home/MerchSection';
import SocialSection from '@/components/home/SocialSection';

const productionUrl = 'https://www.tumblerpigeon.com';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return {
    alternates: {
      canonical: `${productionUrl}/${locale}`,
      languages: {
        en: `${productionUrl}/en`,
        tr: `${productionUrl}/tr`,
        'x-default': `${productionUrl}/en`,
      },
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <PigeonArcSection />
      <MerchSection />
      <SocialSection />
    </>
  );
}

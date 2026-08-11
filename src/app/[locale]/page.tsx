import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import FeaturedContent from '@/components/home/FeaturedContent';
import About from '@/components/home/About';
import PigeonArcSection from '@/components/home/PigeonArcSection';
import MerchSection from '@/components/home/MerchSection';
import SocialSection from '@/components/home/SocialSection';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturedContent />
      <About />
      <PigeonArcSection />
      <MerchSection />
      <SocialSection />
    </>
  );
}

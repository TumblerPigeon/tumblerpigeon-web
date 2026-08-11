import { useTranslations } from 'next-intl';
import LogoImage from '@/components/LogoImage';
import { SITE_LINKS } from '@/lib/site-links';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero-wash min-h-svh border-b editorial-rule px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
      <div className="mx-auto grid min-h-[calc(100svh-12rem)] max-w-[88rem] items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="motion-reveal lg:col-span-8">
          <p className="mb-5 text-sm font-semibold text-brand-accent">{t('eyebrow')}</p>
          <h1 className="font-display text-[clamp(5rem,24vw,9rem)] leading-[0.74] tracking-[0.025em] text-cream sm:text-[clamp(7rem,19vw,12rem)] lg:text-[clamp(9rem,14vw,14rem)]">
            <span className="block">{t('line1')}</span>
            <span className="block">{t('line2')}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-muted sm:text-xl">{t('intro')}</p>
          <div className="mt-8 grid gap-3 sm:flex">
            <a
              href={SITE_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-between gap-8 bg-brand-accent px-6 py-3 text-sm font-bold text-bg transition-colors hover:bg-brand-accent-bright"
            >
              {t('primary_cta')} <span aria-hidden="true">↗</span>
            </a>
            <a
              href={SITE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-between gap-8 border border-cream/25 px-6 py-3 text-sm font-bold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              {t('secondary_cta')} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="motion-image-in mx-auto aspect-square w-full max-w-[17rem] sm:max-w-[21rem] lg:col-span-4 lg:max-w-[26rem]">
          <LogoImage
            alt={t('artwork_alt')}
            priority
            sizes="(max-width: 640px) 272px, (max-width: 1024px) 336px, 416px"
            className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

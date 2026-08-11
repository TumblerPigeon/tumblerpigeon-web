import { useTranslations } from 'next-intl';
import { SITE_LINKS } from '@/lib/site-links';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero-wash relative isolate min-h-svh overflow-hidden border-b editorial-rule px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
      <div className="hero-artwork pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true" />
      <div className="hero-artwork-shade pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-12rem)] max-w-[88rem] items-center">
        <div className="motion-reveal w-full">
          <p className="mb-5 text-sm font-semibold text-brand-accent">{t('eyebrow')}</p>
          <h1 className="font-display text-[clamp(5.2rem,24vw,9rem)] leading-[0.74] tracking-[0.025em] text-cream sm:text-[clamp(8rem,20vw,13rem)] lg:text-[clamp(10rem,16vw,16rem)]">
            <span className="block">{t('line1')}</span>
            <span className="block sm:pl-[11vw]">{t('line2')}</span>
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-cream-muted sm:text-xl lg:col-span-5">{t('intro')}</p>
            <div className="grid gap-3 sm:flex lg:col-span-6 lg:col-start-7 lg:justify-end">
              <a
                href={SITE_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-brand-accent px-7 py-3 text-sm font-bold text-bg transition-colors hover:bg-brand-accent-bright"
              >
                {t('primary_cta')}
              </a>
              <a
                href={SITE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-cream/25 px-7 py-3 text-sm font-bold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
              >
                {t('secondary_cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

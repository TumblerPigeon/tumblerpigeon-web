import { useTranslations } from 'next-intl';
import { SITE_LINKS } from '@/lib/site-links';

export default function PigeonArcSection() {
  const t = useTranslations('pigeonarc');

  return (
    <section className="border-b editorial-rule px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="flex min-h-56 items-center justify-center border border-cream/15 bg-bg-card px-8 py-12 text-center lg:col-span-5 lg:min-h-72">
          <div>
            <span className="font-display text-6xl tracking-[0.08em] text-cream sm:text-7xl">PIGEONARC</span>
            <p className="mt-4 text-sm text-cream-dim">{t('logo_placeholder')}</p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-sm font-semibold text-brand-accent">{t('label')}</p>
          <h2 className="mt-5 font-display text-6xl leading-[0.9] tracking-[0.04em] text-cream sm:text-8xl">{t('title')}</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-muted">{t('body')}</p>
          <a
            href={SITE_LINKS.pigeonarc}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-between gap-10 border border-cream/25 px-6 py-3 text-sm font-bold text-cream transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import { SITE_LINKS } from '@/lib/site-links';

export default function PigeonArcSection() {
  const t = useTranslations('pigeonarc');

  return (
    <section className="border-b editorial-rule px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-3">
          <p className="editorial-label text-cream-dim">03 — {t('label')}</p>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-display text-5xl tracking-[0.05em] text-cream sm:text-6xl">PIGEONARC</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-cream-muted lg:col-span-4">{t('body')}</p>
        <a
          href={SITE_LINKS.pigeonarc}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-label inline-flex min-h-12 items-center justify-between gap-6 border-b border-brand-accent py-3 text-cream transition-colors hover:text-brand-accent lg:col-span-2"
        >
          {t('cta')} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SITE_LINKS } from '@/lib/site-links';

export default function PigeonArcSection() {
  const t = useTranslations('pigeonarc');

  return (
    <section className="border-b editorial-rule px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="flex min-h-48 items-center justify-center px-4 py-8 sm:min-h-56 sm:px-8 sm:py-10 lg:col-span-5 lg:min-h-72 lg:px-6">
          <Image
            src="/images/PA_Logo_Horizontal.png"
            alt=""
            width={428}
            height={142}
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 70vw, 92vw"
            className="h-auto w-full max-w-md object-contain"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="font-display text-6xl leading-[0.9] tracking-[0.04em] text-cream sm:text-8xl">{t('title')}</h2>
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

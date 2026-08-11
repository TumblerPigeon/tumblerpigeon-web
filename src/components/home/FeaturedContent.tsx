import { useTranslations } from 'next-intl';
import { SITE_LINKS } from '@/lib/site-links';
import SectionLabel from './SectionLabel';

const items = [
  {
    id: 'short_form',
    href: SITE_LINKS.tiktok,
    visual: 'content-visual--signal',
    layout: 'md:col-span-7 lg:col-span-7',
    ratio: 'aspect-[4/3] sm:aspect-[16/10]',
  },
  {
    id: 'visuals',
    href: SITE_LINKS.instagram,
    visual: 'content-visual--frame',
    layout: 'md:col-span-5 lg:col-span-5 lg:mt-20',
    ratio: 'aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: 'dispatches',
    href: SITE_LINKS.patreon,
    visual: 'content-visual--archive',
    layout: 'md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3',
    ratio: 'aspect-[4/3] sm:aspect-[2/1]',
  },
] as const;

export default function FeaturedContent() {
  const t = useTranslations('featured');

  return (
    <section id="featured" className="scroll-mt-20 border-b editorial-rule px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <SectionLabel index="01">{t('label')}</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="font-display text-6xl leading-[0.9] tracking-[0.035em] text-cream sm:text-8xl lg:text-9xl">
              {t('title')}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">{t('intro')}</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-12 lg:mt-24 lg:gap-y-16">
          {items.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(`${item.id}.title`)} — ${t(`${item.id}.platform`)}`}
              className={`group block ${item.layout}`}
            >
              <article>
                <div className={`content-visual ${item.visual} ${item.ratio} border editorial-rule transition-transform duration-500 group-hover:-translate-y-1`}>
                  <span className="editorial-label absolute left-5 top-5 z-10 text-cream-dim">0{index + 1}</span>
                  <span className="editorial-label absolute right-5 top-5 z-10 text-cream-dim">{t(`${item.id}.platform`)}</span>
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-bg via-bg/80 to-transparent p-5 pt-20 sm:p-7">
                    <h3 className="font-display text-4xl tracking-[0.045em] text-cream sm:text-5xl">{t(`${item.id}.title`)}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-cream-muted">{t(`${item.id}.body`)}</p>
                  </div>
                </div>
                <div className="editorial-label mt-3 flex items-center justify-between text-cream-dim">
                  <span>{t('open_channel')}</span>
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

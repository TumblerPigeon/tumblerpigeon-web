import { useTranslations } from 'next-intl';
import LogoImage from '@/components/LogoImage';
import { SITE_LINKS } from '@/lib/site-links';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero-wash relative min-h-svh overflow-hidden border-b editorial-rule px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-28">
      <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-[92rem] flex-col">
        <div className="editorial-label motion-reveal grid grid-cols-2 gap-x-6 gap-y-2 border-y editorial-rule py-3 text-cream-dim sm:grid-cols-4">
          <p><span className="text-cream">{t('meta.subject_label')}:</span> {t('meta.subject')}</p>
          <p><span className="text-cream">{t('meta.identity_label')}:</span> {t('meta.identity')}</p>
          <p><span className="text-cream">{t('meta.status_label')}:</span> <span className="text-brand-accent">{t('meta.status')}</span></p>
          <p className="sm:text-right"><span className="text-cream">{t('meta.location_label')}:</span> {t('meta.location')}</p>
        </div>

        <div className="relative flex flex-1 flex-col justify-center py-10 lg:py-4">
          <p className="editorial-label motion-reveal mb-4 text-brand-accent lg:absolute lg:left-[1%] lg:top-[18%]">
            {t('eyebrow')}
          </p>

          <h1 className="motion-reveal relative z-10 font-display text-[clamp(5.3rem,26vw,9rem)] leading-[0.72] tracking-[0.025em] text-cream sm:text-[clamp(8rem,22vw,13rem)] lg:text-[clamp(10rem,18vw,17rem)]">
            <span className="block">{t('line1')}</span>
            <span className="block text-right lg:pr-[4vw]">{t('line2')}</span>
          </h1>

          <div className="motion-image-in relative z-20 -mx-10 -mb-5 -mt-4 aspect-square sm:-mx-2 sm:mx-auto sm:w-[36rem] lg:hidden">
            <LogoImage alt={t('artwork_alt')} priority sizes="(max-width: 640px) 110vw, 576px" className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)]" />
          </div>

          <div className="motion-image-in pointer-events-none absolute right-[-5%] top-1/2 z-20 hidden aspect-square w-[min(46vw,43rem)] -translate-y-[47%] lg:block xl:right-[1%]">
            <LogoImage alt={t('artwork_alt')} priority sizes="(max-width: 1280px) 46vw, 688px" className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.58)]" />
          </div>

          <div className="relative z-30 mt-7 max-w-xl lg:ml-[7%] lg:mt-5">
            <p className="text-lg leading-relaxed text-cream-muted sm:text-xl lg:max-w-md">{t('intro')}</p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex">
              <a
                href={SITE_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 inline-flex items-center justify-between gap-8 bg-brand-accent px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-bg transition-colors hover:bg-brand-accent-bright"
              >
                {t('primary_cta')} <span aria-hidden="true">↗</span>
              </a>
              <a
                href={SITE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 inline-flex items-center justify-between gap-8 border border-cream/20 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream/50 hover:bg-cream/5"
              >
                {t('secondary_cta')} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="editorial-label hidden items-center justify-between border-t editorial-rule pt-3 text-cream-dim lg:flex">
          <span>{t('footer_left')}</span>
          <span>{t('footer_right')}</span>
        </div>
      </div>
    </section>
  );
}

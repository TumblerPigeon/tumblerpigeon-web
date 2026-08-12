import { useTranslations } from 'next-intl';
import { CREATOR_SOCIALS } from '@/lib/site-links';
import SectionRibbons from './SectionRibbons';

export default function SocialSection() {
  const t = useTranslations('social');

  return (
    <section className="relative isolate overflow-hidden border-y border-bg/20 bg-brand-accent px-4 py-20 text-bg sm:px-6 lg:px-8 lg:py-28">
      <SectionRibbons variant="social" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(5.5rem,15vw,12rem)] leading-[0.75] tracking-[0.025em]">
              {t('title_line1')}
              <span className="block">{t('title_line2')}</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-bg/70 lg:col-span-3 lg:col-start-10">{t('body')}</p>
        </div>

        <div className="mt-14 border-t border-bg/25">
          {CREATOR_SOCIALS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block min-h-16 border-b border-bg/25 py-4 transition-colors hover:bg-bg hover:px-4 hover:text-cream"
            >
              <span className="font-display text-4xl tracking-[0.05em] sm:text-5xl">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

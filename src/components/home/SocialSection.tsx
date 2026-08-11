import { useTranslations } from 'next-intl';
import { CREATOR_SOCIALS } from '@/lib/site-links';

export default function SocialSection() {
  const t = useTranslations('social');

  return (
    <section className="border-y border-bg/20 bg-brand-accent px-4 py-20 text-bg sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="editorial-label flex items-center justify-between border-b border-bg/25 pb-4">
          <span>05 — {t('label')}</span>
          <span>{t('status')}</span>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(5.5rem,15vw,12rem)] leading-[0.75] tracking-[0.025em]">
              {t('title_line1')}
              <span className="block pl-[8vw]">{t('title_line2')}</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-bg/70 lg:col-span-3 lg:col-start-10">{t('body')}</p>
        </div>

        <div className="border-t border-bg/25">
          {CREATOR_SOCIALS.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid min-h-16 grid-cols-[2rem_1fr_auto] items-center gap-4 border-b border-bg/25 py-4 transition-colors hover:bg-bg hover:px-4 hover:text-cream sm:grid-cols-[4rem_1fr_auto]"
            >
              <span className="editorial-label opacity-60">0{index + 1}</span>
              <span className="font-display text-4xl tracking-[0.05em] sm:text-5xl">{link.label}</span>
              <span className="font-mono text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

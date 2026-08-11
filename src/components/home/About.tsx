import { useTranslations } from 'next-intl';
import SectionLabel from './SectionLabel';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="scroll-mt-20 border-b editorial-rule px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="01">{t('label')}</SectionLabel>
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(4.6rem,11vw,9rem)] leading-[0.82] tracking-[0.035em] text-cream">
              {t('title_line1')}
              <span className="block pl-[11vw] text-brand-accent">{t('title_line2')}</span>
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-cream-muted sm:text-xl">{t('body')}</p>
          </div>

          <aside className="lg:col-span-3 lg:col-start-10 lg:pt-8">
            <div className="border-l border-brand-accent pl-5">
              <p className="editorial-label text-brand-accent">{t('aside_label')}</p>
              <p className="mt-4 text-sm leading-relaxed text-cream">{t('aside')}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="scroll-mt-20 border-b editorial-rule px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-[clamp(4.6rem,11vw,9rem)] leading-[0.82] tracking-[0.035em] text-cream lg:col-span-8">
            {t('title_line1')}
            <span className="block text-brand-accent">{t('title_line2')}</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-cream-muted lg:col-span-4 lg:pb-2">
            <p>{t('body')}</p>
            <p className="text-cream">{t('aside')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function MerchSection() {
  const t = useTranslations('merch_home');

  return (
    <section className="overflow-hidden bg-cream px-4 py-20 text-bg sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="editorial-label text-bg/60">03 / {t('label')}</p>
          <h2 className="mt-8 font-display text-[clamp(5rem,13vw,10rem)] leading-[0.78] tracking-[0.035em]">
            {t('title_line1')}
            <span className="block text-brand-accent">{t('title_line2')}</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bg/70 sm:text-lg">{t('body')}</p>
          <Link
            href="/merch"
            className="mt-9 inline-flex min-h-12 items-center justify-between gap-10 border border-bg px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-bg hover:text-cream"
          >
            {t('cta')} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative min-h-[23rem] border border-bg/20 sm:min-h-[30rem] lg:col-span-5 lg:col-start-8" aria-hidden="true">
          <div className="absolute inset-x-[14%] bottom-0 top-[8%] rotate-[-3deg] border-2 border-bg bg-bg shadow-[18px_18px_0_rgb(var(--color-accent))]">
            <div className="absolute inset-x-0 top-[12%] border-y border-cream/20 py-4 text-center font-display text-5xl tracking-[0.08em] text-cream sm:text-7xl">
              TP
            </div>
            <div className="absolute bottom-[10%] left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-brand-accent sm:h-36 sm:w-36">
              <span className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.2em] text-brand-accent">{t('edition')}</span>
            </div>
          </div>
          <p className="editorial-label absolute bottom-4 left-4 -rotate-90 origin-bottom-left text-bg/60">{t('sample_label')}</p>
        </div>
      </div>
    </section>
  );
}

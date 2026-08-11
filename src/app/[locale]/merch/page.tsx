import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';

const CONTACT_EMAIL = 'tp@tumblerpigeon.com';

export default function MerchPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('merch');

  return (
    <div className="min-h-screen px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center gap-3 border border-cream/20 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:border-brand-accent hover:text-brand-accent"
        >
          <span aria-hidden="true">←</span> {t('back_home')}
        </Link>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-accent">{t('title')}</p>
            <h1 className="mt-5 font-display text-[clamp(5rem,14vw,11rem)] leading-[0.78] tracking-[0.035em] text-cream">
              {t('coming_soon')}
            </h1>
            <p className="mt-7 max-w-xl text-xl text-cream">{t('subtitle')}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">{t('body')}</p>
          </div>

          <div className="border border-cream/15 bg-bg-card p-7 sm:p-9 lg:col-span-4 lg:col-start-9">
            <p className="text-sm font-semibold text-cream">{t('contact_intro')}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block min-h-12 py-3 text-base font-semibold text-brand-accent underline underline-offset-4 transition-colors hover:text-brand-accent-bright"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-16 border-t editorial-rule pt-6 text-sm text-cream-dim">{t('fine_print')}</div>
      </div>
    </div>
  );
}

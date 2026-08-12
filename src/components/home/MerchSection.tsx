import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import SectionRibbons from './SectionRibbons';

export default function MerchSection() {
  const t = useTranslations('merch_home');

  return (
    <section className="relative isolate overflow-hidden bg-cream px-4 py-20 text-bg sm:px-6 lg:px-8 lg:py-28">
      <SectionRibbons variant="merch" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 className="font-display text-[clamp(5rem,13vw,10rem)] leading-[0.78] tracking-[0.035em]">
            {t('title_line1')}
            <span className="block text-brand-accent">{t('title_line2')}</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bg/70 sm:text-lg">{t('body')}</p>
          <Link
            href="/merch"
            className="mt-9 inline-flex min-h-12 items-center justify-between gap-10 border border-bg px-6 py-3 text-sm font-bold transition-colors hover:bg-bg hover:text-cream"
          >
            {t('cta')} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="pointer-events-none relative grid grid-cols-2 items-start gap-3 sm:min-h-[38rem] lg:col-span-5 lg:col-start-8 lg:min-h-[40rem]" aria-label={t('moodboard_label')}>
          <div className="relative z-10 col-span-2 w-[72%] rotate-[-2deg] justify-self-start bg-cream p-1 shadow-[0_18px_38px_rgb(12_11_10_/_0.22)] sm:w-[62%] lg:absolute lg:left-[1%] lg:top-[4%] lg:w-[64%] lg:rotate-[-3deg]">
            <Image
              src="/images/apparel.png"
              alt={t('apparel_alt')}
              width={1122}
              height={1402}
              draggable={false}
              sizes="(min-width: 1024px) 27vw, (min-width: 640px) 38vw, 72vw"
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="relative z-0 col-start-2 row-start-1 mt-16 w-[88%] rotate-[2deg] justify-self-end bg-cream p-1 shadow-[0_14px_32px_rgb(12_11_10_/_0.18)] sm:mt-20 sm:w-[78%] lg:absolute lg:right-0 lg:top-[10%] lg:mt-0 lg:w-[52%] lg:rotate-[3deg]">
            <Image
              src="/images/sticker.png"
              alt={t('sticker_alt')}
              width={1122}
              height={1402}
              draggable={false}
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 24vw, 44vw"
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="relative z-20 col-span-2 -mt-20 w-[60%] rotate-[-1deg] justify-self-end bg-cream p-1 shadow-[0_18px_38px_rgb(12_11_10_/_0.22)] sm:-mt-40 sm:w-[54%] lg:absolute lg:bottom-[1%] lg:right-[7%] lg:mt-0 lg:w-[54%] lg:rotate-[-2deg]">
            <Image
              src="/images/extras.png"
              alt={t('extras_alt')}
              width={1122}
              height={1402}
              draggable={false}
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 33vw, 60vw"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

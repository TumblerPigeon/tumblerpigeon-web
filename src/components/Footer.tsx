import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { CREATOR_SOCIALS, SITE_LINKS } from '@/lib/site-links';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const navigationLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/#about' as const, label: t('about') },
    { href: '/merch' as const, label: t('merch') },
    { href: '/contact' as const, label: t('contact') },
  ];

  return (
    <footer className="bg-bg px-4 pb-7 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-12 border-b editorial-rule pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="editorial-label text-brand-accent">{t('signal_label')}</p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-muted">{t('tagline')}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5 lg:col-start-8">
            <div className="flex flex-col gap-3">
              <span className="editorial-label mb-2 text-cream-dim">{t('navigate')}</span>
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-cream-muted transition-colors hover:text-brand-accent">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="editorial-label mb-2 text-cream-dim">{t('elsewhere')}</span>
              {CREATOR_SOCIALS.map((link) => (
                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-cream-muted transition-colors hover:text-brand-accent">
                  {link.label} ↗
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="editorial-label mb-2 text-cream-dim">{t('related')}</span>
              <a href={SITE_LINKS.pigeonarc} target="_blank" rel="noopener noreferrer" className="text-sm text-cream-muted transition-colors hover:text-brand-accent">
                PigeonArc ↗
              </a>
              <span className="editorial-label mt-3 text-cream-dim">{t('status')}</span>
              <span className="flex items-center gap-2 text-sm text-cream">
                <span className="h-2 w-2 bg-brand-accent" aria-hidden="true" /> {t('online')}
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b editorial-rule py-8 lg:py-10">
          <div className="font-display text-[clamp(4rem,13.2vw,13rem)] leading-[0.78] tracking-[0.025em] text-cream whitespace-nowrap">
            TUMBLER PIGEON
          </div>
        </div>

        <div className="editorial-label flex flex-col gap-2 pt-6 text-cream-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TumblerPigeon — {t('rights')}</p>
          <p>{t('made')}</p>
        </div>
      </div>
    </footer>
  );
}

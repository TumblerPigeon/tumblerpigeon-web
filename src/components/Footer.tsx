import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { CREATOR_SOCIALS, SITE_LINKS } from '@/lib/site-links';

const CONTACT_EMAIL = 'tp@tumblerpigeon.com';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const navigationLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/#about' as const, label: t('about') },
    { href: '/merch' as const, label: t('merch') },
  ];

  return (
    <footer className="bg-bg px-4 pb-7 pt-12 sm:px-6 lg:px-8 lg:pt-14">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-10 border-b editorial-rule pb-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-display text-4xl tracking-[0.08em] text-cream transition-colors hover:text-brand-accent">
              TUMBLER PIGEON
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-muted">{t('tagline')}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:col-span-4" aria-label={t('navigate')}>
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-cream-muted transition-colors hover:text-brand-accent">
                {link.label}
              </Link>
            ))}
            {CREATOR_SOCIALS.map((link) => (
              <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-cream-muted transition-colors hover:text-brand-accent">
                {link.label}
              </a>
            ))}
            <a href={SITE_LINKS.pigeonarc} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-cream-muted transition-colors hover:text-brand-accent">
              PigeonArc
            </a>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm font-semibold text-cream">{t('contact')}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-block min-h-11 py-2 text-sm text-cream-muted underline decoration-brand-accent underline-offset-4 transition-colors hover:text-cream">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-xs text-cream-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TumblerPigeon / {t('rights')}</p>
          <p>{t('made')}</p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname as useRawPathname } from 'next/navigation';
import { Link, useRouter } from '@/navigation';
import { SITE_LINKS } from '@/lib/site-links';

function TikTokIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.09-3.18V9.01a6.34 6.34 0 1 0 5.54 6.29V8.88a8.2 8.2 0 0 0 4.8 1.54V7.01c-.35-.07-.69-.18-1.03-.32Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.02 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.21-.02 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.02-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.02-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92C8.42 2.18 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
    </svg>
  );
}

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const rawPathname = useRawPathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'tr' : 'en';
    const pathWithoutLocale = rawPathname.replace(new RegExp(`^\\/${locale}`), '') || '/';
    router.replace(pathWithoutLocale, { locale: nextLocale });
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/#about' as const, label: t('about') },
    { href: '/merch' as const, label: t('merch') },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-cream/10 bg-bg/95 backdrop-blur-sm' : 'border-transparent bg-bg/20'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[92rem] items-center justify-between px-4 sm:px-6 lg:px-8" aria-label={t('primary_label')}>
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3 text-cream"
        >
          <span className="flex h-7 w-7 items-center justify-center bg-brand-accent font-display text-xl leading-none text-bg transition-transform group-hover:rotate-3">
            TP
          </span>
          <span className="font-display text-xl tracking-[0.12em] sm:text-2xl">TUMBLER PIGEON</span>
        </Link>

        <div className="hidden items-center lg:flex">
          <div className="flex items-center border-r border-cream/15 pr-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-11 px-3 py-3 text-sm font-semibold text-cream-muted transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_LINKS.pigeonarc}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 px-3 py-3 text-sm font-semibold text-cream-muted transition-colors hover:text-cream"
            >
              {t('pigeonarc')} ↗
            </a>
          </div>

          <div className="flex items-center gap-1 pl-4">
            <a
              href={SITE_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('tiktok')}
              className="flex min-h-11 min-w-10 items-center justify-center text-cream-dim transition-colors hover:text-brand-accent"
            >
              <TikTokIcon />
            </a>
            <a
              href={SITE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('instagram')}
              className="flex min-h-11 min-w-10 items-center justify-center text-cream-dim transition-colors hover:text-brand-accent"
            >
              <InstagramIcon />
            </a>
            <button
              onClick={switchLocale}
              aria-label={t('switch_language')}
              className="ml-2 min-h-10 border border-cream/15 px-3 py-2 text-sm font-semibold text-cream transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              {locale === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={switchLocale}
            aria-label={t('switch_language')}
            className="min-h-11 min-w-11 border border-cream/15 px-3 py-2 text-sm font-semibold text-cream"
          >
            {locale === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex min-h-11 min-w-14 items-center justify-center border border-cream/15 px-3 text-sm font-semibold text-cream"
            aria-label={t('toggle_menu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? t('close') : t('menu')}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-bg px-4 py-8 sm:px-6 lg:hidden">
          <div className="mx-auto flex min-h-full max-w-3xl flex-col">
            <div className="flex-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group grid grid-cols-[1fr_auto] items-center border-b editorial-rule py-4 text-cream"
                >
                  <span className="font-display text-5xl tracking-[0.045em] sm:text-6xl">{link.label}</span>
                  <span className="text-brand-accent transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              ))}
              <a
                href={SITE_LINKS.pigeonarc}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="group grid grid-cols-[1fr_auto] items-center border-b editorial-rule py-4 text-cream"
              >
                <span className="font-display text-5xl tracking-[0.045em] sm:text-6xl">{t('pigeonarc')}</span>
                <span className="text-brand-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t editorial-rule pt-5">
              <a href={SITE_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="min-h-12 border border-cream/15 px-4 py-3 text-center text-sm font-semibold text-cream">
                {t('tiktok')} ↗
              </a>
              <a href={SITE_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="min-h-12 border border-cream/15 px-4 py-3 text-center text-sm font-semibold text-cream">
                {t('instagram')} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

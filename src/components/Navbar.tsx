'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname as useRawPathname } from 'next/navigation';
import { Link, useRouter } from '@/navigation';
import { SITE_LINKS } from '@/lib/site-links';

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
                className="editorial-label min-h-11 px-3 py-3 text-cream-muted transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_LINKS.pigeonarc}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-label min-h-11 px-3 py-3 text-cream-muted transition-colors hover:text-cream"
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
              className="editorial-label min-h-11 px-2 py-3 text-cream-dim transition-colors hover:text-brand-accent"
            >
              TT
            </a>
            <a
              href={SITE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('instagram')}
              className="editorial-label min-h-11 px-2 py-3 text-cream-dim transition-colors hover:text-brand-accent"
            >
              IG
            </a>
            <button
              onClick={switchLocale}
              aria-label={t('switch_language')}
              className="editorial-label ml-2 min-h-10 border border-cream/15 px-3 py-2 text-cream transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              {locale === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={switchLocale}
            aria-label={t('switch_language')}
            className="editorial-label min-h-11 min-w-11 border border-cream/15 px-3 py-2 text-cream"
          >
            {locale === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="editorial-label flex min-h-11 min-w-14 items-center justify-center border border-cream/15 px-3 text-cream"
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
            <div className="editorial-label flex items-center justify-between border-b editorial-rule pb-3 text-cream-dim">
              <span>{t('menu_status')}</span>
              <span className="text-brand-accent">{t('online')}</span>
            </div>

            <div className="flex-1 py-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group grid grid-cols-[2rem_1fr_auto] items-center border-b editorial-rule py-4 text-cream"
                >
                  <span className="editorial-label text-cream-dim">0{index + 1}</span>
                  <span className="font-display text-5xl tracking-[0.045em] sm:text-6xl">{link.label}</span>
                  <span className="text-brand-accent transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              ))}
              <a
                href={SITE_LINKS.pigeonarc}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="group grid grid-cols-[2rem_1fr_auto] items-center border-b editorial-rule py-4 text-cream"
              >
                <span className="editorial-label text-cream-dim">04</span>
                <span className="font-display text-5xl tracking-[0.045em] sm:text-6xl">{t('pigeonarc')}</span>
                <span className="text-brand-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t editorial-rule pt-5">
              <a href={SITE_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="min-h-12 border border-cream/15 px-4 py-3 text-center font-mono text-xs uppercase tracking-wider text-cream">
                {t('tiktok')} ↗
              </a>
              <a href={SITE_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="min-h-12 border border-cream/15 px-4 py-3 text-center font-mono text-xs uppercase tracking-wider text-cream">
                {t('instagram')} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

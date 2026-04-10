'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname as useRawPathname } from 'next/navigation';
import { Link, useRouter } from '@/navigation';

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-cream-dim hover:text-cream transition-colors duration-200"
  >
    {children}
  </a>
);

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const rawPathname = useRawPathname(); // e.g. '/tr/blog'
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'tr' : 'en';
    // Strip the current locale prefix so router.replace doesn't double-stack it.
    // '/tr/blog' → '/blog'   '/en' → '/'   '/' → '/'
    const pathWithoutLocale = rawPathname.replace(new RegExp(`^\\/${locale}`), '') || '/';
    router.replace(pathWithoutLocale, { locale: nextLocale });
  };

  const navLinks = [
    { href: '/blog' as const, label: t('blog') },
    { href: '/merch' as const, label: t('merch') },
    { href: '/contact' as const, label: t('contact') },
  ];

  const externalLinks = [
    { href: 'https://discord.gg/placeholder', label: t('discord') },
    { href: 'https://patreon.com/tumblerpigeon', label: t('patreon') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-display text-2xl tracking-widest text-cream hover:text-brand-blue transition-colors duration-200"
        >
          TP<span className="text-brand-blue">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-body text-cream-muted hover:text-cream transition-colors duration-200 uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-4 bg-white/10 mx-2" />

          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-body text-cream-muted hover:text-cream transition-colors duration-200 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}

          <div className="w-px h-4 bg-white/10 mx-2" />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <SocialIcon href="https://tiktok.com/@tumblerpigeon" label="TikTok">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.88a8.2 8.2 0 004.8 1.54V7.01a4.85 4.85 0 01-1.03-.32z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://github.com/tumblerpigeon" label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com/tumblerpigeon" label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </SocialIcon>
          </div>

          {/* Language switcher */}
          <button
            onClick={switchLocale}
            className="ml-4 px-3 py-1 text-xs font-mono font-bold border border-white/10 rounded text-cream-muted hover:text-cream hover:border-brand-blue/50 transition-all duration-200 uppercase tracking-widest"
          >
            {locale === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
          </button>
        </div>

        {/* Mobile: right side actions */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={switchLocale}
            className="px-2 py-1 text-xs font-mono border border-white/10 rounded text-cream-muted"
          >
            {locale === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cream-muted hover:text-cream p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t border-white/5 px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-body text-cream-muted hover:text-cream transition-colors uppercase tracking-wider border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-base font-body text-cream-muted hover:text-cream transition-colors uppercase tracking-wider border-b border-white/5"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

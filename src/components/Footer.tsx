import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-4xl tracking-widest text-cream mb-2">
              TUMBLER<span className="text-brand-blue">.</span>
              <br />
              PIGEON
            </div>
            <p className="text-cream-dim text-sm font-body mt-3">{t('tagline')}</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-cream-dim uppercase tracking-widest mb-2">Navigate</span>
            {[
              { href: '/blog' as const, label: 'Blog' },
              { href: '/merch' as const, label: 'Merch' },
              { href: '/contact' as const, label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream-muted hover:text-cream text-sm font-body transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-cream-dim uppercase tracking-widest mb-2">Elsewhere</span>
            {[
              { href: 'https://discord.gg/placeholder', label: 'Discord' },
              { href: 'https://patreon.com/tumblerpigeon', label: 'Patreon' },
              { href: 'https://tiktok.com/@tumblerpigeon', label: 'TikTok' },
              { href: 'https://github.com/tumblerpigeon', label: 'GitHub' },
              { href: 'https://instagram.com/tumblerpigeon', label: 'Instagram' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-muted hover:text-cream text-sm font-body transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-cream-dim text-xs font-mono">
            © {year} TumblerPigeon — {t('rights')}
          </p>
          <p className="text-cream-dim text-xs font-mono opacity-50">{t('made')}</p>
        </div>
      </div>
    </footer>
  );
}

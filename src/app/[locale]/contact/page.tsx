import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with TumblerPigeon.',
};

function SocialLink({ href, label, handle }: { href: string; label: string; handle: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 bg-bg-card border border-white/5 rounded-lg hover:border-white/10 transition-all group"
    >
      <span className="text-sm font-mono text-cream-dim uppercase tracking-wider">{label}</span>
      <span className="text-sm font-body text-cream-muted group-hover:text-cream transition-colors">
        {handle} ↗
      </span>
    </a>
  );
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('contact');

  const socials = [
    { label: 'Discord', handle: 'Join the server', href: 'https://discord.gg/placeholder' },
    { label: 'Patreon', handle: 'patreon.com/tumblerpigeon', href: 'https://patreon.com/tumblerpigeon' },
    { label: 'TikTok', handle: '@tumblerpigeon', href: 'https://tiktok.com/@tumblerpigeon' },
    { label: 'GitHub', handle: 'tumblerpigeon', href: 'https://github.com/tumblerpigeon' },
    { label: 'Instagram', handle: '@tumblerpigeon', href: 'https://instagram.com/tumblerpigeon' },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-mono text-brand-red uppercase tracking-widest mb-4">
            // CONTACT
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-cream tracking-widest leading-none mb-4">
            {t('title')}
          </h1>
          <p className="text-cream-muted font-body text-base max-w-xl">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono text-cream-dim uppercase tracking-widest mb-6">
              // {t('drop_message').toUpperCase()}
            </div>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Direct email */}
            <div>
              <div className="text-xs font-mono text-cream-dim uppercase tracking-widest mb-4">
                // {t('direct_email').toUpperCase()}
              </div>
              <a
                href="mailto:tp@tumblerpigeon.com"
                className="block p-4 bg-bg-card border border-white/5 rounded-lg hover:border-brand-blue/30 transition-all group"
              >
                <div className="text-xs font-mono text-cream-dim mb-1 uppercase tracking-wider">
                  {t('email_label')}
                </div>
                <div className="font-mono text-cream group-hover:text-brand-blue transition-colors">
                  tp@tumblerpigeon.com
                </div>
              </a>
            </div>

            {/* Social links */}
            <div>
              <div className="text-xs font-mono text-cream-dim uppercase tracking-widest mb-4">
                // {t('social_title').toUpperCase()}
              </div>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <SocialLink key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="border border-white/5 bg-bg-card/50 rounded-lg p-4">
              <div className="text-xs font-mono text-cream-dim leading-relaxed">
                {t('response_time')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

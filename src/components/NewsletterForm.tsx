'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterForm({ minimal = false }: { minimal?: boolean }) {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    // TODO: connect to email service (Mailchimp, ConvertKit, etc.)
    console.log('Newsletter signup:', email);
    setStatus('success');
    setEmail('');
  };

  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('placeholder')}
          className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm font-body text-cream placeholder:text-cream-dim focus:outline-none focus:border-brand-blue/50 transition-colors"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-brand-blue text-cream text-sm font-mono font-bold rounded hover:bg-brand-blue-bright transition-colors whitespace-nowrap"
        >
          {t('button')}
        </button>
      </form>
    );
  }

  return (
    <div className="relative overflow-hidden bg-bg-card border border-white/5 rounded-xl p-8 md:p-12">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl">
        <div className="text-xs font-mono text-brand-blue uppercase tracking-widest mb-4">
          // SUBSCRIBE
        </div>
        <h2 className="font-display text-5xl md:text-6xl tracking-widest text-cream mb-4">
          {t('title')}
        </h2>
        <p className="text-cream-muted font-body mb-8 text-base">
          {t('subtitle')}
        </p>

        {status === 'success' ? (
          <div className="border border-brand-blue/30 bg-brand-blue/5 rounded-lg p-4 text-cream-muted font-mono text-sm">
            ✓ You&apos;re in. Stay weird.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus('idle');
              }}
              placeholder={t('placeholder')}
              className={`flex-1 bg-white/5 border rounded-lg px-4 py-3 text-base font-body text-cream placeholder:text-cream-dim focus:outline-none transition-colors ${
                status === 'error'
                  ? 'border-brand-red/50 focus:border-brand-red'
                  : 'border-white/10 focus:border-brand-blue/50'
              }`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-blue text-cream font-mono font-bold text-sm rounded-lg hover:bg-brand-blue-bright active:scale-95 transition-all whitespace-nowrap"
            >
              {t('button')}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-brand-red text-xs font-mono mt-2">Enter a valid email.</p>
        )}

        <p className="text-cream-dim text-xs font-mono mt-4 opacity-60">{t('disclaimer')}</p>
      </div>
    </div>
  );
}

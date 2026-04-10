'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function MerchPage() {
  const t = useTranslations('merch');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'done'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('done');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Animated decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,230,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,230,200,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Category label */}
        <div className="text-xs font-mono text-brand-red uppercase tracking-[0.4em] mb-8">
          // {t('store_label').toUpperCase()}
        </div>

        {/* Main title stack */}
        <div className="mb-2">
          <div className="font-display text-[clamp(4rem,18vw,12rem)] tracking-[0.05em] text-cream leading-none">
            {t('coming_soon')}
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-mono text-brand-blue uppercase tracking-[0.3em] text-sm mb-8">
          {t('subtitle')}
        </p>

        {/* Separator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* Body copy */}
        <p className="text-cream-muted font-body text-base leading-relaxed mb-12 max-w-md mx-auto">
          {t('body')}
        </p>

        {/* Notify form */}
        {status === 'done' ? (
          <div className="border border-brand-blue/30 bg-brand-blue/5 rounded-xl p-6">
            <div className="font-display text-3xl text-cream tracking-widest mb-2">{t('on_list_title')}</div>
            <p className="text-cream-muted font-mono text-sm">
              {t('on_list_body')}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('notify_placeholder')}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body text-cream placeholder:text-cream-dim focus:outline-none focus:border-brand-blue/40 transition-colors text-center sm:text-left"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-blue text-cream font-mono font-bold text-sm rounded-lg hover:bg-brand-blue-bright active:scale-95 transition-all tracking-widest uppercase whitespace-nowrap"
            >
              {t('notify_button')}
            </button>
          </form>
        )}

        {/* Small print */}
        <p className="text-cream-dim text-xs font-mono mt-6 opacity-50">
          {t('fine_print')}
        </p>

        {/* Decorative divider */}
        <div className="mt-16 flex justify-center">
          <div className="text-cream-dim font-mono text-xs opacity-20 tracking-[0.5em] uppercase">
            ◆ tumblerpigeon ◆
          </div>
        </div>
      </div>
    </div>
  );
}

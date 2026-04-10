'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    // TODO: connect to form backend (Formspree, Resend, etc.)
    console.log('Contact form:', form);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base font-body text-cream placeholder:text-cream-dim focus:outline-none focus:border-brand-blue/50 transition-colors';

  if (status === 'success') {
    return (
      <div className="border border-brand-blue/30 bg-brand-blue/5 rounded-xl p-8 text-center">
        <div className="font-display text-4xl text-cream mb-3 tracking-widest">GOT IT.</div>
        <p className="text-cream-muted font-body">Message received. Will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-xs font-mono text-cream-dim uppercase tracking-widest mb-2">
          {t('form_name')}
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t('form_placeholder_name')}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-cream-dim uppercase tracking-widest mb-2">
          {t('form_email')}
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t('form_placeholder_email')}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-cream-dim uppercase tracking-widest mb-2">
          {t('form_message')}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t('form_placeholder_message')}
          rows={6}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-brand-red text-xs font-mono">Fill in all fields.</p>
      )}

      <button
        type="submit"
        className="self-start px-8 py-3 bg-brand-blue text-cream font-mono font-bold text-sm rounded-lg hover:bg-brand-blue-bright active:scale-95 transition-all tracking-widest uppercase"
      >
        {t('form_submit')} →
      </button>
    </form>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';

export default function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove existing giscus iframe if re-rendering
    const existing = containerRef.current.querySelector('iframe.giscus-frame');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';

    script.setAttribute('data-repo', 'TumblerPigeon/tumblerpigeon-web');
    script.setAttribute('data-repo-id', 'R_kgDOR-ecDg');
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOR-ecDs4C6fNu');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', locale === 'tr' ? 'tr' : 'en');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);
  }, [locale]);

  return (
    <section className="mt-16 pt-10 border-t border-white/5">
      <h2 className="font-display text-2xl tracking-widest text-cream mb-6">COMMENTS</h2>
      <div ref={containerRef} className="giscus" />
      <p className="text-xs font-mono text-cream-dim mt-4 opacity-60">
        Comments powered by{' '}
        <a
          href="https://giscus.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-cream-muted"
        >
          Giscus
        </a>{' '}
        via GitHub Discussions
      </p>
    </section>
  );
}

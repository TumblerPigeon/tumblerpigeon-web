'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { PostMeta } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';

export default function BlogClient({ posts }: { posts: PostMeta[] }) {
  const t = useTranslations('blog');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLang, setActiveLang] = useState<'all' | 'en' | 'tr'>('all');

  // Categories built from translations — no hardcoded labels
  const CATEGORIES = [
    { id: 'all', label: t('all') },
    { id: 'game-dev', label: t('categories.game-dev') },
    { id: 'income-business', label: t('categories.income-business') },
    { id: 'product-reviews', label: t('categories.product-reviews') },
    { id: 'life-misc', label: t('categories.life-misc') },
  ];

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesLang = activeLang === 'all' || post.language === activeLang;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);
      return matchesCategory && matchesLang && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery, activeLang]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-xs font-mono text-brand-blue uppercase tracking-widest mb-4">
          // THE BLOG
        </div>
        <h1 className="font-display text-6xl md:text-8xl text-cream tracking-widest leading-none mb-4">
          {t('title')}
        </h1>
        <p className="text-cream-muted font-body text-base max-w-xl">{t('subtitle')}</p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category tabs — labels come from t() */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-full border transition-all uppercase tracking-wider ${
                  activeCategory === cat.id
                    ? 'bg-brand-blue border-brand-blue text-cream'
                    : 'border-white/10 text-cream-dim hover:border-white/20 hover:text-cream-muted'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right: language filter + search */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center gap-1 bg-bg-card border border-white/5 rounded-full p-1">
              {(['all', 'en', 'tr'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                    activeLang === lang
                      ? 'bg-white/10 text-cream'
                      : 'text-cream-dim hover:text-cream-muted'
                  }`}
                >
                  {lang === 'all' ? t('all') : lang === 'en' ? '🇬🇧 EN' : '🇹🇷 TR'}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-cream-dim"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search_placeholder')}
                className="bg-bg-card border border-white/5 rounded-full pl-9 pr-4 py-2 text-xs font-body text-cream placeholder:text-cream-dim focus:outline-none focus:border-white/10 w-44 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="font-display text-5xl text-cream-dim mb-3 tracking-widest">
              {t('nothing_label')}
            </div>
            <p className="text-cream-dim font-mono text-sm">{t('no_posts')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

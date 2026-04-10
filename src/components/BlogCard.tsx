import { PostMeta } from '@/lib/posts';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogCard({ post }: { post: PostMeta }) {
  const t = useTranslations('blog');

  // Category label from translations — no hardcoded map
  const categoryLabel = t(`categories.${post.category}` as Parameters<typeof t>[0]);

  return (
    <article className="group relative bg-bg-card border border-white/5 rounded-lg overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 flex flex-col">
      {/* Category accent bar */}
      <div
        className={`h-0.5 w-full ${
          post.category === 'game-dev'
            ? 'bg-brand-blue'
            : post.category === 'income-business'
            ? 'bg-brand-red'
            : post.category === 'product-reviews'
            ? 'bg-cream'
            : 'bg-cream-dim'
        }`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
              post.category === 'game-dev'
                ? 'border-brand-blue/30 text-brand-blue bg-brand-blue/5'
                : post.category === 'income-business'
                ? 'border-brand-red/30 text-brand-red bg-brand-red/5'
                : post.category === 'product-reviews'
                ? 'border-cream/20 text-cream bg-cream/5'
                : 'border-cream-dim/20 text-cream-dim bg-cream-dim/5'
            }`}>
              {categoryLabel}
            </span>
            <span className="text-xs font-mono text-cream-dim opacity-70">
              {post.language === 'en' ? '🇬🇧' : '🇹🇷'}
            </span>
          </div>
          <span className="text-xs font-mono text-cream-dim">
            {formatDate(post.date)}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl tracking-wide text-cream mb-3 leading-tight group-hover:text-brand-blue transition-colors duration-200">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-cream-muted text-sm font-body leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-mono text-cream-dim">
            {post.readingTime} {t('min_read')}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-mono text-brand-blue hover:text-brand-blue-bright transition-colors duration-200 group-hover:underline underline-offset-4"
          >
            {t('read_more')} →
          </Link>
        </div>
      </div>
    </article>
  );
}

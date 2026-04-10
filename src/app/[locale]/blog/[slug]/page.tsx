import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getAllPostSlugs, getRelatedPosts } from '@/lib/posts';
import { getCategoryBg } from '@/lib/post-utils';
import GiscusComments from '@/components/GiscusComments';
import BlogCard from '@/components/BlogCard';

interface Props {
  params: { slug: string; locale: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  setRequestLocale(params.locale);

  const post = getPost(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(params.slug);
  const categoryClass = getCategoryBg(post.category);
  const t = await getTranslations('post');
  const tBlog = await getTranslations('blog');

  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-cream-dim hover:text-cream-muted transition-colors mb-10 uppercase tracking-wider"
        >
          {t('back')}
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          {/* Meta tags */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`text-xs font-mono px-2 py-1 rounded-full border ${
                post.category === 'game-dev'
                  ? 'border-brand-blue/30 text-brand-blue bg-brand-blue/5'
                  : post.category === 'income-business'
                  ? 'border-brand-red/30 text-brand-red bg-brand-red/5'
                  : post.category === 'product-reviews'
                  ? 'border-cream/20 text-cream bg-cream/5'
                  : 'border-cream-dim/20 text-cream-dim bg-cream-dim/5'
              }`}
            >
              {tBlog(`categories.${post.category}` as Parameters<typeof tBlog>[0])}
            </span>

            <span className="text-xs font-mono text-cream-dim">
              {post.language === 'en' ? '🇬🇧 English' : '🇹🇷 Türkçe'}
            </span>

            <span className="text-xs font-mono text-cream-dim">
              {formatDate(post.date, params.locale)}
            </span>

            <span className="text-xs font-mono text-cream-dim">
              {post.readingTime} {tBlog('min_read')}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream tracking-wide leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt / Lead */}
          <p className="text-cream-muted font-body text-lg leading-relaxed border-l-2 border-brand-blue pl-4">
            {post.excerpt}
          </p>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-blue/20 via-white/5 to-transparent" />
        </header>

        {/* MDX Content */}
        <div className="prose prose-invert max-w-none font-body">
          <MDXRemote source={post.content} />
        </div>

        {/* Post Footer Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-cream-dim border border-white/5 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Giscus Comments */}
        <GiscusComments />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-white/5">
          <h2 className="font-display text-3xl text-cream tracking-widest mb-8">{t('related').toUpperCase()}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

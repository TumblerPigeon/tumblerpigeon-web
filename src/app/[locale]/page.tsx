import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import LogoImage from '@/components/LogoImage';
import { getAllPosts } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';
import NewsletterForm from '@/components/NewsletterForm';

function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,230,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,230,200,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner labels */}
      <div className="absolute top-24 left-6 text-xs font-mono text-cream-dim opacity-40 hidden lg:block">
        [EST. 2024]
      </div>
      <div className="absolute top-24 right-6 text-xs font-mono text-cream-dim opacity-40 hidden lg:block">
        [GAME DEV / CONTENT]
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-8 animate-fade-in">
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto animate-float">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-brand-blue/20 blur-xl scale-110" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-blue/30 shadow-2xl shadow-brand-blue/20">
              <LogoImage />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-display text-[clamp(4rem,15vw,10rem)] tracking-[0.08em] text-cream leading-none animate-fade-up">
            {t('line1')}
          </h1>
        </div>
        <div className="overflow-hidden mb-6">
          <h1 className="font-display text-[clamp(4rem,15vw,10rem)] tracking-[0.08em] text-gradient-blue leading-none animate-fade-up delay-100">
            {t('line2')}
          </h1>
        </div>

        {/* Tagline */}
        <p className="font-mono text-brand-blue uppercase tracking-[0.3em] text-sm md:text-base mb-3 animate-fade-up delay-200">
          {t('tagline')}
        </p>
        <p className="text-cream-muted font-body text-base md:text-lg max-w-md animate-fade-up delay-300">
          {t('sub')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10 animate-fade-up delay-400">
          <Link
            href="/blog"
            className="px-8 py-3 bg-brand-blue text-cream font-mono font-bold text-sm rounded-lg hover:bg-brand-blue-bright active:scale-95 transition-all tracking-widest uppercase"
          >
            {t('cta_blog')}
          </Link>
          <a
            href="https://discord.gg/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/10 text-cream-muted font-mono font-bold text-sm rounded-lg hover:border-cream/20 hover:text-cream active:scale-95 transition-all tracking-widest uppercase"
          >
            {t('cta_discord')}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <svg className="w-6 h-6 text-cream-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    { label: t('label_games'), value: '3+' },
    { label: t('label_posts'), value: '20+' },
    { label: t('label_years'), value: '2' },
  ];

  return (
    <section className="py-24 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-mono text-brand-red uppercase tracking-widest mb-4">
              // ABOUT
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream tracking-widest leading-none mb-6">
              {t('title')}
            </h2>
            <p className="text-cream-muted font-body text-base leading-relaxed">
              {t('body')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg-card border border-white/5 rounded-xl p-6 text-center"
              >
                <div className="font-display text-4xl text-cream mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-cream-dim uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider with text */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-xs font-mono text-cream-dim uppercase tracking-widest">{t('latest_posts_divider')}</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>
    </section>
  );
}

function LatestPostsSection() {
  const t = useTranslations('about');
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border border-white/10 text-cream-muted font-mono text-sm rounded-lg hover:border-brand-blue/40 hover:text-cream transition-all tracking-widest uppercase"
          >
            {t('view_all')} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-20 px-4 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <NewsletterForm />
      </div>
    </section>
  );
}

function SocialProofSection() {
  const t = useTranslations('home');
  const platforms = [
    { name: 'TikTok', handle: '@tumblerpigeon', href: 'https://tiktok.com/@tumblerpigeon' },
    { name: 'GitHub', handle: 'tumblerpigeon', href: 'https://github.com/tumblerpigeon' },
    { name: 'Discord', handle: 'Join the server', href: 'https://discord.gg/placeholder' },
    { name: 'Patreon', handle: 'Support the work', href: 'https://patreon.com/tumblerpigeon' },
    { name: 'Instagram', handle: '@tumblerpigeon', href: 'https://instagram.com/tumblerpigeon' },
  ];

  return (
    <section className="py-16 px-4 border-t border-white/5 bg-bg-card/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-mono text-cream-dim uppercase tracking-widest text-center mb-8">
          {t('find_online')}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-bg border border-white/5 rounded-full text-sm font-body text-cream-muted hover:text-cream hover:border-white/10 transition-all"
            >
              <span className="font-mono text-cream-dim text-xs">{p.name}</span>
              <span className="text-cream-dim opacity-40">·</span>
              <span>{p.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LatestPostsSection />
      <NewsletterSection />
      <SocialProofSection />
    </>
  );
}

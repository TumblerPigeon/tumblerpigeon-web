import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export type PostFrontmatter = {
  title: string;
  date: string;
  category: 'game-dev' | 'income-business' | 'product-reviews' | 'life-misc';
  language: 'en' | 'tr';
  excerpt: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
};

export type Post = PostFrontmatter & {
  readingTime: string;
  content: string;
};

export type PostMeta = PostFrontmatter & {
  readingTime: string;
};

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostMeta(slug: string): PostMeta | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(raw);
    const rt = readingTime(content);
    return {
      ...(data as PostFrontmatter),
      slug,
      readingTime: Math.ceil(rt.minutes).toString(),
    };
  } catch {
    return null;
  }
}

export function getPost(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(raw);
    const rt = readingTime(content);
    return {
      ...(data as PostFrontmatter),
      slug,
      content,
      readingTime: Math.ceil(rt.minutes).toString(),
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostsByLanguage(lang: 'en' | 'tr'): PostMeta[] {
  return getAllPosts().filter((p) => p.language === lang);
}

export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const post = getPostMeta(slug);
  if (!post) return [];
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, limit);
}

export const CATEGORIES = [
  { id: 'game-dev', label: 'Game Dev', color: 'brand-blue' },
  { id: 'income-business', label: 'Income & Business', color: 'brand-red' },
  { id: 'product-reviews', label: 'Product Reviews', color: 'cream' },
  { id: 'life-misc', label: 'Life & Misc', color: 'cream-muted' },
] as const;

// Re-exported from post-utils for server-side convenience
function getCategoryBgInternal(category: string): string {
  const map: Record<string, string> = {
    'game-dev': 'bg-brand-blue/10 text-brand-blue',
    'income-business': 'bg-brand-red/10 text-brand-red',
    'product-reviews': 'bg-cream/10 text-cream',
    'life-misc': 'bg-cream-muted/10 text-cream-muted',
  };
  return map[category] ?? 'bg-cream-muted/10 text-cream-muted';
}

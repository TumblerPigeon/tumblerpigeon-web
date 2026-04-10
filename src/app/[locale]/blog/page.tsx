import { setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/posts';
import BlogClient from './BlogClient';

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getBlogPosts } from '@/content/blog/load-posts';
import { PageLayout } from '../pages/PageLayout';

export const BlogPage = () => {
  const posts = getBlogPosts();

  return (
    <PageLayout title="Blog">
      <p className="text-[var(--muted)] text-sm mb-8">
        Insights on cricket analytics, AI predictions, venue intelligence, and tips for fantasy and analysis.
      </p>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 sm:p-5 rounded-2xl page-card transition-all duration-200 hover:-translate-y-0.5 hover:border-white/10"
          >
            <time className="text-xs text-[var(--muted)]" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <h2 className="font-semibold text-base mt-1 mb-2" style={{ color: 'var(--text)' }}>
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium" style={{ color: 'var(--accent)' }}>
              Read more <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

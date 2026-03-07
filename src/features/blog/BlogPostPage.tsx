import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { BlogPost } from '@/content/blog/load-posts';
import { PageLayout } from '../pages/PageLayout';

export const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PageLayout title={post.title}>
      <header className="mb-6">
        <time className="text-[var(--muted)] text-sm" dateTime={post.date}>
          {formattedDate}
        </time>
        {post.author && (
          <span className="text-[var(--muted)] text-sm ml-2 before:content-['·'] before:mr-2">
            {post.author}
          </span>
        )}
      </header>
      <article className="prose-content space-y-4 blog-post-body">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </article>
      <footer className="mt-8 pt-6 border-t border-white/10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </footer>
    </PageLayout>
  );
};

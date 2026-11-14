import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost } from '@/content/blog/load-posts';
import { PageLayout } from '../pages/PageLayout';

export const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : 'Unpublished';

  return (
    <PageLayout title={post.title}>
      {post.preview && <p role="status" className="mb-6 rounded-xl border border-amber-300/40 p-4 text-sm">Editorial preview. Not published or approved for release.</p>}
      <header className="mb-6 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2">
        <time className="text-[var(--muted)] text-sm shrink-0" dateTime={post.date}>
          {formattedDate}
        </time>
        {post.author && (
          <span className="text-[var(--muted)] text-sm sm:before:content-['·'] sm:before:mr-2">
            {post.author}
          </span>
        )}
        {post.updated && post.updated !== post.date && <span className="text-sm text-[var(--muted)]">Updated <time dateTime={post.updated}>{post.updated}</time></span>}
      </header>
      {post.image && post.imageAlt && <figure className="mb-8">
        {/* Local editorial images retain a crawlable src with a stable aspect ratio. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.imageAlt} width={1672} height={941} className="w-full h-auto rounded-2xl" decoding="async" fetchPriority="high" />
        {post.imageCaption && <figcaption className="mt-2 text-xs text-[var(--muted)]">{post.imageCaption}</figcaption>}
      </figure>}
      <article className="prose-content space-y-4 blog-post-body min-w-0 max-w-full">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ children, node: _node, ...props }) => (
              <div className="table-scroll" role="region" aria-label="Scrollable article table" tabIndex={0}>
                <table {...props}>{children}</table>
              </div>
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>
      </article>
      <footer className="mt-8 pt-6 border-t border-white/10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </footer>
    </PageLayout>
  );
};

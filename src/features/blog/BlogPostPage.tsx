import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost } from '@/content/blog/load-posts';
import { SiteShell } from '../reference/SiteShell';
import '../pages/page-layout-aicrix.css';
import './blog-article.css';

export const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const formattedDate = post.date ? new Date(`${post.date}T00:00:00Z`).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }) : 'Unpublished';
  const readingMinutes = Math.max(1, Math.ceil(post.body.split(/\s+/).length / 220));

  return (
    <SiteShell>
      <div className="page-layout-aicrix blog-article-layout">
        <main id="main-content" className="blog-article-container">
          <Link href="/blog" className="blog-back-link"><ArrowLeft size={16} aria-hidden="true" /> All articles</Link>
          <header className="blog-article-header">
            {post.preview && <p role="status" className="blog-notice">Editorial preview. Not published or approved for release.</p>}
            {post.archived && <p role="note" className="blog-notice">Archived article. This page is not current match advice.</p>}
            <h1>{post.title}</h1>
            <p className="blog-article-excerpt">{post.excerpt}</p>
            <div className="blog-article-meta">
              {post.date ? <time dateTime={post.date}>{formattedDate}</time> : <span>Unpublished</span>}
              {post.author && <span>{post.author}</span>}
              {post.updated && post.updated !== post.date && <span>Updated <time dateTime={post.updated}>{post.updated}</time></span>}
              <span>{readingMinutes} min read</span>
            </div>
          </header>
          {post.image && post.imageAlt && <figure className="blog-article-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.imageAlt} width={1672} height={941} decoding="async" fetchPriority="high" />
            {post.imageCaption && <figcaption>{post.imageCaption}</figcaption>}
          </figure>}
          <article className="prose-content blog-post-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
              table: ({ children, node: _node, ...props }) => (
                <div className="table-scroll" role="region" aria-label="Scrollable article table" tabIndex={0}>
                  <table {...props}>{children}</table>
                </div>
              ),
            }}>{post.body}</ReactMarkdown>
          </article>
          <footer className="blog-article-footer">
            <Link href="/blog" className="blog-back-link"><ArrowLeft size={16} aria-hidden="true" /> Back to Blog</Link>
          </footer>
        </main>
      </div>
    </SiteShell>
  );
};

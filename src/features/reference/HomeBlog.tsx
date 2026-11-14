import Link from 'next/link';
import { getPublishedBlogPosts } from '@/content/blog/load-posts';

/** Server-rendered and published-only, including in protected preview builds. */
export function HomeBlog() {
  const posts = getPublishedBlogPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section className="home-blog" aria-labelledby="home-blog-title">
      <div className="wrap">
        <div className="home-blog-heading">
          <div>
            <p className="home-blog-eyebrow">From the AiCrix blog</p>
            <h2 id="home-blog-title">Read the game more clearly</h2>
            <p>Cricket explainers, practical checklists and context for your next match.</p>
          </div>
          <Link href="/blog" className="home-blog-all">View all articles <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="home-blog-grid">
          {posts.map(post => (
            <article key={post.slug} className="home-blog-card">
              {post.date && <time dateTime={post.date}>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}</time>}
              <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              <Link className="home-blog-read" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read article <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

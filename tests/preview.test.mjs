import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import matter from 'gray-matter';

test('preview drafts have noindex, visible warning and no fabricated publication dates', () => {
  for (const file of readdirSync('src/content/blog/posts')) {
    const { data } = matter(readFileSync(`src/content/blog/posts/${file}`, 'utf8'));
    if (data.status !== 'draft') continue;
    const html = readFileSync(`out/blog/${file.replace(/\.md$/, '')}.html`, 'utf8');
    assert.ok(html.includes('noindex, nofollow'), file);
    assert.ok(html.includes('Editorial preview. Not published or approved for release.'), file);
    assert.ok(!html.includes('"datePublished"'), file);
  }
});

test('preview blocks crawling and does not retain a stale sitemap', () => {
  assert.ok(readFileSync('out/robots.txt', 'utf8').includes('Disallow: /'));
  assert.ok(!readFileSync('out/sitemap.xml', 'utf8').includes('<loc>'));
});

test('worked tables and disclosed illustration render as semantic HTML', () => {
  const html = readFileSync('out/blog/batting-average-vs-strike-rate.html', 'utf8');
  assert.ok(html.includes('<table'));
  assert.ok(html.includes('Scrollable article table'));
  assert.ok(html.includes('AI-generated cricket equipment illustration.'));
  assert.ok(html.includes('src="/images/blog/cricket-bat-ball.png"'));
});

 test('preview guide inherits the global noindex protection', () => {
 assert.ok(readFileSync('out/guides/playing-xi.html', 'utf8').includes('noindex, nofollow'));
 });

test('article layout has a visible summary, reading metadata and one page heading', () => {
  const html = readFileSync('out/blog/batting-average-vs-strike-rate.html', 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
  for (const marker of ['blog-article-container', 'blog-article-excerpt', 'blog-article-meta', 'min read', 'blog-article-figure', 'All articles']) assert.ok(html.includes(marker), marker);
  assert.ok(html.includes('Calculate batting average and strike rate with worked examples'));
  assert.ok(!html.includes('dateTime=""'));
  const css = readFileSync('src/features/blog/blog-article.css', 'utf8');
  for (const rule of ['@media (max-width: 600px)', 'max-height: 360px', ':focus-visible', 'min-width: 520px']) assert.ok(css.includes(rule), rule);
});

import { assertPublishedHomeBlog } from './home-blog-assertions.mjs';
test('homepage still excludes all drafts in editorial preview mode', assertPublishedHomeBlog);

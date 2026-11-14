import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import matter from 'gray-matter';
import { isPublished } from '../src/content/blog/content-policy.cjs';

export function assertPublishedHomeBlog() {
  const html = readFileSync('out/index.html', 'utf8');
  const section = html.match(/<section class="home-blog"[\s\S]*?<\/section>/)?.[0];
  assert.ok(section, 'homepage has a server-rendered blog section');
  assert.ok(section.includes('Read the game more clearly'));
  assert.ok(section.includes('href="/blog"'));
  assert.equal((section.match(/<article /g) ?? []).length, 3);
  const slugs = new Set([...section.matchAll(/href="\/blog\/([^"?#]+)"/g)].map(match => match[1]));
  assert.equal(slugs.size, 3);
  for (const slug of slugs) {
    const { data } = matter(readFileSync(`src/content/blog/posts/${slug}.md`, 'utf8'));
    assert.ok(isPublished(data, slug), `${slug}: homepage cannot promote a draft`);
    assert.ok(!data.archived, `${slug}: homepage cannot promote archived advice`);
  }
  assert.ok(html.indexOf('class="home-blog"') < html.indexOf('class="download-banner'), 'blog comes before final download call to action');
}

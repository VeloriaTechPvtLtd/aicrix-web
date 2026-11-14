import policy from '../src/content/blog/content-policy.cjs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';
const root = 'out';
const walk = dir => readdirSync(dir).flatMap(name => { const path = join(dir, name); return statSync(path).isDirectory() ? walk(path) : [path]; });
const pages = walk(root).filter(path => path.endsWith('.html'));

test('all rendered local navigation, scripts, styles and images resolve', () => {
  const missing = [];
  for (const path of pages) {
    const html = readFileSync(path, 'utf8');
    for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
      if (match[1].startsWith('//')) continue;
      const target = decodeURIComponent(match[1].split(/[?#]/)[0]).replace(/^\//, '');
      if (![target, `${target}.html`, `${target}/index.html`].some(name => existsSync(join(root, name)))) missing.push(`${relative(root, path)}: ${target}`);
    }
  }
  assert.deepEqual(missing, []);
});

test('all nine existing blog posts keep their rendered URL and canonical', () => {
  const posts = [...policy.LEGACY_SLUGS].map(slug => `${slug}.md`);
  assert.equal(posts.length, 9);
  const sitemap = readFileSync('out/sitemap.xml', 'utf8');
  for (const post of posts) {
    const slug = post.replace(/\.md$/, '');
    const html = readFileSync(`out/blog/${slug}.html`, 'utf8');
    assert.ok(html.includes(`rel="canonical" href="https://aicrix.com/blog/${slug}"`), slug);
    assert.ok(html.includes('"@type":"Article"'), slug);
    assert.ok(sitemap.includes(`https://aicrix.com/blog/${slug}`), slug);
  }
});

test('legal source copy is unchanged from upstream main', () => {
  for (const [file, sha] of [['PrivacyPolicyPage.tsx', '2c7e87b0b91e57d39d923b14b66dafe6083e1e28'], ['TermsAndConditionsPage.tsx', '1c22519c23255175513b7c141e67e24ef31ddfee']]) {
    const bytes = readFileSync(`src/features/pages/${file}`);
    const actual = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
    assert.equal(actual, sha, file);
  }
});

test('contact information and its support sections remain present', () => {
  const html = readFileSync('out/contact-us.html', 'utf8');
  for (const text of ['support@aicrix.com', '+91 63615 62262', 'VELORIA TECH (OPC) PRIVATE LIMITED', 'Pedda Devaram Padu', 'Specific Department Inquiries', 'Response Times', 'User Data Deletion', 'Grievance Redressal', 'Security Notice:']) assert.ok(html.includes(text), text);
  assert.ok(html.includes('does not send messages automatically'));
});

test('new guide and download routes are indexable and error pages are not in sitemap', () => {
  const sitemap = readFileSync('out/sitemap.xml', 'utf8');
  for (const route of ['insights', 'download', ...['match-prediction', 'player-prediction', 'fantasy-xi', 'playing-xi', 'team-analysis', 'pitch-and-toss'].map(slug => `guides/${slug}`)]) {
    assert.ok(existsSync(`out/${route}.html`), route);
    assert.ok(sitemap.includes(`https://aicrix.com/${route}`), route);
  }
  assert.ok(!sitemap.includes('aicrix.com/404'));
  assert.ok(!existsSync('public/robots.txt'));
  assert.ok(readFileSync('out/robots.txt', 'utf8').includes('Sitemap: https://aicrix.com/sitemap.xml'));
});

test('homepage content is server rendered, assets are local, and accuracy claims are absent', () => {
  const html = readFileSync('out/index.html', 'utf8');
  for (const text of ['cricket companion', 'AiCrix connects fans worldwide', 'Cricket fans endorse AiCrix', 'Level up your match day', 'data-world-country', '/privacy-policy', '/terms-and-conditions', '/blog']) assert.ok(html.includes(text), text);
  assert.ok(!html.includes('89% accuracy'));
  assert.ok(!html.includes('chatgpt.site'));
  assert.ok(!html.includes('<iframe'));
});

 test('staged drafts are absent from production output and sitemap', () => {
 const sitemap = readFileSync('out/sitemap.xml', 'utf8');
 for (const file of readdirSync('src/content/blog/posts')) {
 const slug = file.replace(/\.md$/, '');
 if (policy.LEGACY_SLUGS.has(slug)) continue;
 assert.ok(!existsSync(`out/blog/${slug}.html`), slug);
 assert.ok(!sitemap.includes(`/blog/${slug}`), slug);
 }
 });

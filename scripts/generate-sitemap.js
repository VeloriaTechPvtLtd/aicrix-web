/**
 * Generates public/sitemap.xml with all static routes and dynamic blog post URLs.
 * Run before or after build so search engines (Google, Bing, etc.) can discover all pages.
 *
 * Usage: node scripts/generate-sitemap.js
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const contentDir = join(root, 'src', 'content', 'blog', 'posts');
const outPath = join(root, 'public', 'sitemap.xml');

const SITE_URL = process.env.VITE_SITE_URL || 'https://aicrix.com';

const lastmod = new Date().toISOString().slice(0, 10); // YYYY-MM-DD for sitemap

const staticUrls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0', lastmod },
  { loc: '/about-us', changefreq: 'monthly', priority: '0.8', lastmod },
  { loc: '/contact-us', changefreq: 'monthly', priority: '0.8', lastmod },
  { loc: '/privacy-policy', changefreq: 'monthly', priority: '0.6', lastmod },
  { loc: '/terms-and-conditions', changefreq: 'monthly', priority: '0.6', lastmod },
  { loc: '/predictions', changefreq: 'monthly', priority: '0.8', lastmod },
  { loc: '/player-analysis', changefreq: 'monthly', priority: '0.8', lastmod },
  { loc: '/venue-reports', changefreq: 'monthly', priority: '0.8', lastmod },
  { loc: '/how-it-works', changefreq: 'monthly', priority: '0.8', lastmod },
  { loc: '/accuracy-reports', changefreq: 'monthly', priority: '0.8', lastmod },
  { loc: '/blog', changefreq: 'weekly', priority: '0.7', lastmod },
];

function getBlogSlugs() {
  try {
    const files = readdirSync(contentDir, { withFileTypes: true });
    return files
      .filter((f) => f.isFile() && f.name.endsWith('.md'))
      .map((f) => f.name.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

function getBlogPostDate(slug) {
  try {
    const mdPath = join(contentDir, `${slug}.md`);
    const content = readFileSync(mdPath, 'utf8');
    const match = content.match(/^date:\s*(.+)$/m);
    return match ? match[1].trim().slice(0, 10) : lastmod;
  } catch {
    return lastmod;
  }
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlNode({ loc, changefreq, priority, lastmod: lm }) {
  return `  <url>
    <loc>${escapeXml(SITE_URL + loc)}</loc>
    <lastmod>${escapeXml(lm || lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const blogSlugs = getBlogSlugs();
const blogUrls = blogSlugs.map((slug) => ({
  loc: `/blog/${slug}`,
  changefreq: 'monthly',
  priority: '0.6',
  lastmod: getBlogPostDate(slug),
}));

const allUrls = [...staticUrls, ...blogUrls];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(urlNode).join('\n')}
</urlset>
`;

writeFileSync(outPath, xml, 'utf8');
console.log(`Sitemap written to ${outPath} (${allUrls.length} URLs, ${blogSlugs.length} blog posts)`);

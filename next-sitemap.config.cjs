const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { isPublished, dateString } = require("./src/content/blog/content-policy.cjs");

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aicrix.com";
const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog", "posts");

function getBlogSlugsWithDates() {
  return fs.readdirSync(POSTS_DIR).filter(name => name.endsWith(".md")).flatMap(name => {
    const slug = name.replace(/\.md$/, "");
    const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, name), "utf8"));
    return isPublished(data, slug) ? [{ slug, lastmod: dateString(data.updated) || dateString(data.date) }] : [];
  });
}
const publishedSlugs = new Set(getBlogSlugsWithDates().map(post => post.slug));
// next-sitemap emits no file for an empty sitemap; replace any stale copied sitemap.
if (process.env.BLOG_PREVIEW === "true") {
  const output = process.env.VERCEL ? "public" : "out";
  fs.mkdirSync(output, { recursive: true });
  fs.writeFileSync(path.join(output, "sitemap.xml"), '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  // Next.js src/app/robots.ts owns /robots.txt for both deployment modes.
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  autoLastmod: false,
  transform: async (config, url) => {
    if (process.env.BLOG_PREVIEW === "true") return null;
    if (url.startsWith("/blog/") && !publishedSlugs.has(url.slice(6))) return null;
    return { loc: url, changefreq: config.changefreq, priority: config.priority };
  },
  changefreq: "weekly",
  priority: 0.7,
  // Vercel builds without `output: "export"` (no `out/`). Static-export
  // hosts still write into `out/`; otherwise sitemap lands in `public/`.
  outDir: process.env.VERCEL ? "public" : "out",
  exclude: ["/robots.txt", "/404", "/404/*", "/500", "/_not-found", "/_error"],
  additionalPaths: async () => {
    if (process.env.BLOG_PREVIEW === "true") return [];
    const staticPaths = [
      { loc: "/", changefreq: "weekly", priority: 1 },
      { loc: "/about-us", changefreq: "monthly", priority: 0.8 },
      { loc: "/contact-us", changefreq: "monthly", priority: 0.8 },
      { loc: "/data-deletion", changefreq: "monthly", priority: 0.6 },
      { loc: "/privacy-policy", changefreq: "monthly", priority: 0.6 },
      { loc: "/terms-and-conditions", changefreq: "monthly", priority: 0.6 },
      { loc: "/predictions", changefreq: "monthly", priority: 0.8 },
      { loc: "/player-analysis", changefreq: "monthly", priority: 0.8 },
      { loc: "/venue-reports", changefreq: "monthly", priority: 0.8 },
      { loc: "/how-it-works", changefreq: "monthly", priority: 0.8 },
      { loc: "/accuracy-reports", changefreq: "monthly", priority: 0.8 },
      { loc: "/blog", changefreq: "weekly", priority: 0.7 },
      { loc: "/insights", changefreq: "monthly", priority: 0.8 },
      { loc: "/download", changefreq: "monthly", priority: 0.8 },
      ...["match-prediction", "player-prediction", "fantasy-xi", "playing-xi", "team-analysis", "pitch-and-toss"].map(slug => ({ loc: `/guides/${slug}`, changefreq: "monthly", priority: 0.7 })),
    ];
    const blogPosts = getBlogSlugsWithDates().map(({ slug, lastmod }) => ({
      loc: `/blog/${slug}`,
      lastmod: new Date(lastmod).toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    }));
    return [...staticPaths, ...blogPosts];
  },
};

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aicrix.com";
const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog", "posts");

function getBlogSlugsWithDates() {
  try {
    const names = fs.readdirSync(POSTS_DIR);
    return names
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const slug = name.replace(/\.md$/, "");
        const filePath = path.join(POSTS_DIR, name);
        let date = new Date().toISOString().split("T")[0];
        try {
          const raw = fs.readFileSync(filePath, "utf8");
          const { data } = matter(raw);
          if (data.date) date = data.date;
        } catch (_) {}
        return { slug, lastmod: date };
      });
  } catch {
    return [];
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  outDir: "out",
  exclude: ["/robots.txt"],
  additionalPaths: async () => {
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

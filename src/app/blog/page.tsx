import type { Metadata } from "next";
import { BlogPage } from "@/features/blog/BlogPage";
import { getBlogPosts } from "@/content/blog/load-posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "AICRIX blog: cricket analytics insights, AI updates, and tips for fantasy and analysis. Stay ahead with data-driven cricket intelligence.",
  keywords: "cricket blog, cricket analytics, AI predictions blog, fantasy cricket tips",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    description: "AICRIX blog: cricket analytics insights, AI updates, and tips for fantasy and analysis.",
    url: `${SITE_URL}/blog`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "AICRIX blog: cricket analytics insights, AI updates, fantasy tips.",
  },
};

const blogBreadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: SITE_URL + "/blog" },
  ],
};

function buildBlogItemListLd() {
  const posts = getBlogPosts();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AICRIX Blog – Cricket analytics and AI predictions",
    description: "Cricket analytics insights, AI updates, and tips for fantasy and analysis.",
    numberOfItems: posts.length,
    itemListElement: posts.slice(0, 20).map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };
}

export default function Page() {
  const itemListLd = buildBlogItemListLd();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <BlogPage />
    </>
  );
}

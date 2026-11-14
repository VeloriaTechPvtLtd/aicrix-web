import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/content/blog/load-posts";
import { BlogPostPage } from "@/features/blog/BlogPostPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";
const TWITTER_SITE = process.env.NEXT_PUBLIC_TWITTER_SITE ?? "";
const TWITTER_CREATOR = process.env.NEXT_PUBLIC_TWITTER_CREATOR ?? "";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found", robots: "noindex, nofollow" };
  }
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `${SITE_URL}${post.image ?? "/og-image.png"}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      type: "article",
      description: post.excerpt,
      url: postUrl,
      siteName: "AICRIX",
      images: [{ url: imageUrl }],
      publishedTime: post.preview ? undefined : post.date,
      modifiedTime: post.preview ? undefined : post.updated,
      ...(post.author && { authors: [post.author] }),
    },
    twitter: {
      title: post.title,
      card: "summary_large_image",
      description: post.excerpt,
      images: [imageUrl],
      ...(TWITTER_SITE && { site: TWITTER_SITE }),
      ...(TWITTER_CREATOR && { creator: TWITTER_CREATOR }),
    },
    robots: post.preview ? "noindex, nofollow" : "index, follow",
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `${SITE_URL}${post.image ?? "/og-image.png"}`;

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    ...(post.preview ? {} : { datePublished: post.date, dateModified: post.updated ?? post.date }),
    ...(post.author ? { author: { "@type": "Organization", name: post.author, url: SITE_URL } } : {}),
    publisher: {
      "@type": "Organization",
      name: "AICRIX",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/applogo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    image: imageUrl,
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 2, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, "\\u003c") }}
      />
      <BlogPostPage post={post} />
    </>
  );
}

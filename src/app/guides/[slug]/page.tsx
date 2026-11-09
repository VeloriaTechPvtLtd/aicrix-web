import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides } from "@/features/reference/guides";
import { SiteShell } from "@/features/reference/SiteShell";
import { SITE_URL } from "@/lib/seo";
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((guide) => guide.slug === slug);
  if (!guide) return { title: "Guide not found", robots: { index: false } };
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `/guides/${slug}`,
      type: "article",
      siteName: "AICRIX",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/og-image.png"],
    },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((guide) => guide.slug === slug);
  if (!guide) notFound();
  const { Component } = guide;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${SITE_URL}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${SITE_URL}/guides/${slug}`,
      },
    ],
  };
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Component />
    </SiteShell>
  );
}

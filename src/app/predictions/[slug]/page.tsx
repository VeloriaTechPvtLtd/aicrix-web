import type { Metadata } from "next";
import { PredictionDetailPage } from "@/features/pages/PredictionDetailPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = decodeURIComponent(slug.replace(/-/g, " "));
  const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const pageTitle = `Prediction: ${displayTitle}`;
  const pageUrl = `${SITE_URL}/predictions/${slug}`;

  return {
    title: pageTitle,
    description: `AI match prediction for ${displayTitle}. This match has its own player analysis: key player impact and performance insights. Win probability and live updates in the AICRIX app.`,
    alternates: { canonical: pageUrl },
    openGraph: {
      description: `AI match prediction for ${displayTitle}. Full analysis in the AICRIX app.`,
      url: pageUrl,
      siteName: "AICRIX",
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      description: `AI match prediction for ${displayTitle}. Full analysis in the AICRIX app.`,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: "index, follow",
  };
}

function slugToSportsEventJsonLd(slug: string) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";
  const title = decodeURIComponent(slug.replace(/-/g, " "));
  const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const pageUrl = `${SITE_URL}/predictions/${slug}`;

  const vsIndex = title.toLowerCase().indexOf(" vs ");
  const team1 =
    vsIndex > -1 ? title.slice(0, vsIndex).trim() : title.split(/\s+/)[0] ?? title;
  const team2 =
    vsIndex > -1 ? title.slice(vsIndex + 4).trim() : title.split(/\s+/).slice(1).join(" ") || title;

  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: displayTitle,
    description: `AI match prediction for ${displayTitle}. Win probability, player analysis, and live updates in the AICRIX app.`,
    url: pageUrl,
    sport: "Cricket",
    organizer: {
      "@type": "Organization",
      name: "AICRIX",
      url: SITE_URL,
    },
    competitor: [
      { "@type": "SportsTeam", name: team1.charAt(0).toUpperCase() + team1.slice(1) },
      { "@type": "SportsTeam", name: team2.charAt(0).toUpperCase() + team2.slice(1) },
    ],
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const sportsEventJsonLd = slugToSportsEventJsonLd(slug);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventJsonLd) }}
      />
      <PredictionDetailPage slug={slug} />
    </>
  );
}

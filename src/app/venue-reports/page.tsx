import type { Metadata } from "next";
import { VenueReportsPage } from "@/features/pages/VenueReportsPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "Venue Reports",
  description:
    "AICRIX venue intelligence: pitch behavior, batting first win rates, dew factor, scoring patterns, and weather impact for every major cricket ground.",
  keywords: "cricket venue analysis, pitch report, stadium stats, dew factor cricket, batting first win rate",
  alternates: { canonical: `${SITE_URL}/venue-reports` },
  openGraph: {
    description: "AICRIX venue intelligence: pitch behavior, batting first win rates, dew factor, scoring patterns, and weather impact for every major cricket ground.",
    url: `${SITE_URL}/venue-reports`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "AICRIX venue intelligence: pitch behavior, dew factor, scoring patterns for every major cricket ground.",
  },
};

export default function Page() {
  return <VenueReportsPage />;
}

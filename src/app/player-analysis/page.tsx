import type { Metadata } from "next";
import { PlayerAnalysisPage } from "@/features/pages/PlayerAnalysisPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "Player Analysis",
  description:
    "AICRIX player analytics: each match has different player analysis. Form index, batsman vs bowler matchups, phase-wise performance, venue history. 350+ players, match-specific key player impact.",
  keywords: "cricket player analytics, form index, batsman vs bowler, player stats, match-specific player analysis, fantasy cricket analysis",
  alternates: { canonical: `${SITE_URL}/player-analysis` },
  openGraph: {
    description: "AICRIX player analytics: form index, batsman vs bowler matchups, phase-wise performance, venue history. 350+ players tracked.",
    url: `${SITE_URL}/player-analysis`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "AICRIX player analytics: form index, matchups, phase-wise performance. 350+ players tracked.",
  },
};

export default function Page() {
  return <PlayerAnalysisPage />;
}

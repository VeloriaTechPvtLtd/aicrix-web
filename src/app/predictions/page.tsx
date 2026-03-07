import type { Metadata } from "next";
import { PredictionsPage } from "@/features/pages/PredictionsPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "AI Match Predictions",
  description:
    "Explore AICRIX AI match predictions: win probability, toss impact, player performance, team strength, live momentum, and pitch-weather engine. 89% accuracy.",
  keywords: "cricket match predictions, win probability, toss impact, cricket AI, match outcome prediction",
  alternates: { canonical: `${SITE_URL}/predictions` },
  openGraph: {
    description: "Explore AICRIX AI match predictions: win probability, toss impact, player performance, team strength, live momentum. 89% accuracy.",
    url: `${SITE_URL}/predictions`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "Explore AICRIX AI match predictions: win probability, toss impact, player performance, team strength. 89% accuracy.",
  },
};

export default function Page() {
  return <PredictionsPage />;
}

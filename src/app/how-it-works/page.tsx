import type { Metadata } from "next";
import { HowItWorksPage } from "@/features/pages/HowItWorksPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how AICRIX works: data collection, AI model analysis, and prediction output. Three precision stages. One output you can trust.",
  keywords: "how AICRIX works, cricket AI model, data collection, match prediction algorithm",
  alternates: { canonical: `${SITE_URL}/how-it-works` },
  openGraph: {
    description: "Learn how AICRIX works: data collection, AI model analysis, and prediction output. Three precision stages.",
    url: `${SITE_URL}/how-it-works`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "Learn how AICRIX works: data collection, AI model analysis, prediction output. Three precision stages.",
  },
};

export default function Page() {
  return <HowItWorksPage />;
}

import type { Metadata } from "next";
import { AccuracyReportsPage } from "@/features/pages/AccuracyReportsPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "Accuracy Reports",
  description:
    "How AICRIX measures prediction accuracy: methodology, confidence bands, hit rates, and continuous validation. Transparent, data-driven reporting.",
  keywords: "cricket prediction accuracy, AICRIX methodology, hit rate, confidence bands, prediction validation",
  alternates: { canonical: `${SITE_URL}/accuracy-reports` },
  openGraph: {
    description: "How AICRIX measures prediction accuracy: methodology, confidence bands, hit rates, continuous validation.",
    url: `${SITE_URL}/accuracy-reports`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "How AICRIX measures prediction accuracy: methodology, confidence bands, hit rates.",
  },
};

export default function Page() {
  return <AccuracyReportsPage />;
}

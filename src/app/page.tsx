import type { Metadata } from "next";
import { LandingPage } from "@/features/landing/LandingPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

const defaultTitle = "AICRIX – AI-Powered Cricket Match Predictions";
const defaultDescription =
  "Get AI-powered cricket match predictions with 89% accuracy. Real-time win probability, player analytics, pitch intelligence, and live match momentum. Download the AICRIX app.";

/** Force static generation at build time — fast load, great for SEO. */
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  description: defaultDescription,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: "AICRIX",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "AICRIX – AI-Powered Cricket Match Predictions",
  description:
    "Get AI-powered cricket match predictions with 89% accuracy. Real-time win probability, player analytics, pitch intelligence, and live match momentum.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <LandingPage />
    </>
  );
}

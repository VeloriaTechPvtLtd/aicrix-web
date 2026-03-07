import type { Metadata } from "next";
import { AboutUsPage } from "@/features/pages/AboutUsPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AICRIX: our mission, values, and AI-powered cricket analytics. Built by cricket lovers for fans, analysts, and fantasy players.",
  keywords: "about AICRIX, cricket AI company, cricket analytics team, VELORIA TECH",
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    description: "Learn about AICRIX: our mission, values, and AI-powered cricket analytics. Built by cricket lovers.",
    url: `${SITE_URL}/about-us`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "Learn about AICRIX: our mission, values, and AI-powered cricket analytics.",
  },
};

export default function Page() {
  return <AboutUsPage />;
}

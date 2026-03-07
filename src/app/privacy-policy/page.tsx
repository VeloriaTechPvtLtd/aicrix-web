import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/features/pages/PrivacyPolicyPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AICRIX Privacy Policy: how we collect, use, and protect your data. Cookies, rights, and contact for data requests.",
  keywords: "AICRIX privacy policy, data protection, cricket app privacy",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    description: "AICRIX Privacy Policy: how we collect, use, and protect your data.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "AICRIX Privacy Policy: how we collect, use, and protect your data.",
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}

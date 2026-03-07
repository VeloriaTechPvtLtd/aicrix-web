import type { Metadata } from "next";
import { TermsAndConditionsPage } from "@/features/pages/TermsAndConditionsPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "AICRIX Terms and Conditions: user eligibility, account terms, in-app purchases, EULA, and acceptable use.",
  keywords: "AICRIX terms, terms and conditions, cricket app terms, EULA",
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
  openGraph: {
    description: "AICRIX Terms and Conditions: user eligibility, account terms, in-app purchases.",
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "AICRIX Terms and Conditions: user eligibility, account terms.",
  },
};

export default function Page() {
  return <TermsAndConditionsPage />;
}

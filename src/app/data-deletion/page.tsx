import type { Metadata } from "next";
import { DataDeletionPage } from "@/features/pages/DataDeletionPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description:
    "Instructions on how to request the deletion of your personal data collected via Facebook Login and other means on the AICRIX platform.",
  keywords: "AICRIX data deletion, remove account, delete Facebook data, cricket app data privacy",
  alternates: { canonical: `${SITE_URL}/data-deletion` },
  openGraph: {
    description: "Instructions on how to request the deletion of your personal data on AICRIX.",
    url: `${SITE_URL}/data-deletion`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "Instructions on how to request the deletion of your personal data on AICRIX.",
  },
};

export default function Page() {
  return <DataDeletionPage />;
}

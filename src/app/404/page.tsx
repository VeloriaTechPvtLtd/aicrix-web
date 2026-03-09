import type { Metadata } from "next";
import { NotFoundContent } from "@/components/NotFoundContent";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";
const description = "The page you are looking for does not exist.";

export const metadata: Metadata = {
  title: "Page Not Found",
  description,
  robots: "noindex, nofollow",
  openGraph: {
    description,
    url: SITE_URL,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description,
  },
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}

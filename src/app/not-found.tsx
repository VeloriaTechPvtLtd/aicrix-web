import type { Metadata } from "next";
import Link from "next/link";

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

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="text-[var(--muted)] mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        style={{ color: "var(--accent)" }}
      >
        Back to Home
      </Link>
    </div>
  );
}

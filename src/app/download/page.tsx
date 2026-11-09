import type { Metadata } from "next";
import { Download } from "@/features/reference/Download";
import { SiteShell } from "@/features/reference/SiteShell";
export const metadata: Metadata = {
  title: "Download AiCrix",
  description:
    "Get AiCrix for iOS and Android from the official App Store and Google Play listings.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download AiCrix",
    description: "Get AiCrix for iOS and Android from the official App Store and Google Play listings.",
    url: "/download",
    siteName: "AICRIX",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download AiCrix",
    description: "Get AiCrix for iOS and Android from the official App Store and Google Play listings.",
    images: ["/og-image.png"],
  },
};
export default function Page() {
  return (
    <SiteShell>
      <Download />
    </SiteShell>
  );
}

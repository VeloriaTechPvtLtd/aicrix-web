import type { Metadata } from "next";
import { Insights } from "@/features/reference/Insights";
import { SiteShell } from "@/features/reference/SiteShell";
export const metadata: Metadata = {
  title: "The AiCrix playbook",
  description:
    "Guides to match predictions, player impact, Playing XI, Fantasy XI, team analysis and match conditions.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "The AiCrix playbook",
    description: "Guides to match predictions, player impact, Playing XI, Fantasy XI, team analysis and match conditions.",
    url: "/insights",
    siteName: "AICRIX",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AiCrix playbook",
    description: "Guides to match predictions, player impact, Playing XI, Fantasy XI, team analysis and match conditions.",
    images: ["/og-image.png"],
  },
};
export default function Page() {
  return (
    <SiteShell>
      <Insights />
    </SiteShell>
  );
}

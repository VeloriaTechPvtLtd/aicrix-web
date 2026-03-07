import type { Metadata } from "next";
import { ContactUsPage } from "@/features/pages/ContactUsPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AICRIX support. Email, phone, office address, and department-specific inquiries. We're here to help.",
  keywords: "contact AICRIX, AICRIX support, cricket app support, AICRIX email",
  alternates: { canonical: `${SITE_URL}/contact-us` },
  openGraph: {
    description: "Contact AICRIX support. Email, phone, office address. We're here to help.",
    url: `${SITE_URL}/contact-us`,
    siteName: "AICRIX",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    description: "Contact AICRIX support. Email, phone, office address.",
  },
};

export default function Page() {
  return <ContactUsPage />;
}

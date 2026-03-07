import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const defaultTitle = "AICRIX – AI-Powered Cricket Match Predictions";
const defaultDescription =
  "Get AI-powered cricket match predictions with 89% accuracy. Real-time win probability, player analytics, pitch intelligence, and live match momentum. Download the AICRIX app.";

export const viewport: Viewport = {
  themeColor: "#050810",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: "%s | AICRIX" },
  description: defaultDescription,
  keywords:
    "cricket predictions, AI cricket, match predictions, cricket analytics, fantasy cricket, win probability, cricket app",
  robots: "index, follow",
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
  icons: { icon: "/applogo.svg", apple: "/applogo.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AICRIX",
      url: SITE_URL,
      logo: `${SITE_URL}/applogo.svg`,
      description: "AI-powered cricket match predictions and analytics",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "AICRIX",
      url: SITE_URL,
      description: defaultDescription,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={GOOGLE_SITE_VERIFICATION}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="app-wrap">{children}</div>
      </body>
    </html>
  );
}

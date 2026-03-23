import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Prevent Next.js error overlay from showing "[object Event]" when a promise rejects
 * with DOM Event-like payloads (including cross-realm Event objects).
 */
const PROMISE_REJECTION_FILTER = `(function () {
  if (typeof window === 'undefined') return;
  var toString = Object.prototype.toString;
  function isEventLike(reason) {
    if (!reason || typeof reason !== 'object') return false;
    if (typeof Event !== 'undefined' && reason instanceof Event) return true;
    var tag = toString.call(reason);
    if (tag === '[object Event]' || tag === '[object ErrorEvent]') return true;
    var ctor = reason.constructor && reason.constructor.name;
    if (ctor === 'Event' || ctor === 'ErrorEvent') return true;
    return (
      'type' in reason &&
      'target' in reason &&
      'currentTarget' in reason
    );
  }
  window.addEventListener(
    'unhandledrejection',
    function (e) {
      if (isEventLike(e.reason)) {
        e.preventDefault();
      }
    },
    true
  );
})();`;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
});

const defaultTitle = "AICRIX – AI-Powered Cricket Match Predictions";
const defaultDescription =
  "Get AI-powered cricket match predictions with 89% accuracy. Real-time win probability, player analytics, pitch intelligence, and live match momentum. Download the AICRIX app.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: PROMISE_REJECTION_FILTER,
          }}
        />
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
      <body suppressHydrationWarning>
        {/* suppressHydrationWarning prevents mismatches from browser extensions (e.g. Cursor IDE) injecting data-* attrs */}
        <a href="#main-content" className="skip-link" suppressHydrationWarning>
          Skip to main content
        </a>
        <div className="app-wrap" suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  );
}

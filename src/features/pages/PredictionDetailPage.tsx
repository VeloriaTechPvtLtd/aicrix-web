import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout, Section } from "./PageLayout";

type Props = { slug: string };

export const PredictionDetailPage = ({ slug }: Props) => {
  const title = decodeURIComponent(slug.replace(/-/g, " "));
  const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <PageLayout title={`Prediction: ${displayTitle}`}>
      <div className="p-4 sm:p-6 rounded-2xl page-card-accent">
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          Match prediction and AI analysis for this fixture. This match has its own player analysis in the app: key player impact scores, form vs opposition, and phase-wise insights — different for every fixture. Full win probability and live updates are in the AICRIX app.
        </p>
      </div>
      <Section title="Get the full prediction">
        <p>
          Download the AICRIX app to view real-time win probabilities, <strong className="text-white/70">this match&apos;s player impact and analysis</strong>, toss advantage, and ball-by-ball momentum. Each match gets different key players and impact scores. See how we build player analysis on our <Link href="/player-analysis" className="underline hover:no-underline" style={{ color: "var(--accent)" }}>Player Analysis</Link> page.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--accent)" }}
          >
            <ArrowLeft className="w-4 h-4" /> Download AICRIX App
          </Link>
          <Link href="/player-analysis" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--accent)" }}>
            How we analyze players
          </Link>
        </div>
      </Section>
      <footer className="mt-8 pt-6 border-t border-white/10">
        <Link
          href="/predictions"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--accent)" }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Predictions
        </Link>
      </footer>
    </PageLayout>
  );
};

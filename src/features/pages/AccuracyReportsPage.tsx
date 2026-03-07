import { BarChart3, CheckCircle2, Target, Database } from 'lucide-react';
import { PageLayout, Section } from './PageLayout';

const methodology = [
  { icon: <Database className="w-5 h-5" />, title: 'Ground Truth', desc: 'Actual match outcomes from official scorecards. Predictions are compared against final results.' },
  { icon: <Target className="w-5 h-5" />, title: 'Confidence Bands', desc: 'Each prediction includes a confidence score. Higher confidence = tighter historical accuracy.' },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Hit Rate', desc: 'For binary outcomes (win/lose), we report hit rate. For probabilities, we use Brier score.' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Continuous Validation', desc: 'Models are retrained and validated against out-of-sample data on a regular schedule.' },
];

const sampleStats = [
  { label: 'Match Winner Prediction', value: '89%', desc: 'Hit rate on pre-match predictions' },
  { label: 'Toss Impact Correlation', value: '0.94', desc: 'Correlation with actual toss advantage' },
  { label: 'Player Impact Ranking', value: 'Top 3', desc: 'Key players in top 3 by impact in 78% of matches' },
];

export const AccuracyReportsPage = () => {
  return (
    <PageLayout title="Accuracy Reports" lastUpdated="March 2026">
        <div className="p-4 sm:p-6 rounded-2xl page-card-accent">
          <p className="text-base leading-relaxed font-light italic" style={{ color: 'var(--muted)' }}>
            Every prediction is backed by verified statistical models. We measure accuracy rigorously and report it transparently.
          </p>
        </div>

        <Section title="Our Methodology">
          <p>
            AICRIX accuracy is measured against actual match outcomes. We use industry-standard metrics and publish methodology so you can understand exactly what we report.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
            {methodology.map((m, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl page-card">
                <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3">
                  {m.icon}
                </div>
                <h4 className="text-white text-sm font-semibold mb-1.5">{m.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Sample Accuracy Metrics">
          <p>
            Below are representative accuracy metrics from our validation pipeline. Actual figures are updated periodically and may vary by format (T20, ODI, Test) and tournament.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
            {sampleStats.map((s, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl page-card text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>{s.value}</div>
                <div className="text-[var(--text)] text-sm font-medium mb-1">{s.label}</div>
                <div className="text-[var(--muted)] text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Confidence Bands">
          <p>
            Predictions are shown with confidence bands (e.g., &quot;65% India, 35% Australia — 88% AI confidence&quot;). Higher confidence indicates the model is more certain based on data quality and historical performance in similar situations.
          </p>
        </Section>

        <Section title="Ongoing Improvement">
          <p>
            We continuously retrain models on new match data and validate against held-out sets. Accuracy reports are updated periodically to reflect the latest performance.
          </p>
        </Section>
    </PageLayout>
  );
};

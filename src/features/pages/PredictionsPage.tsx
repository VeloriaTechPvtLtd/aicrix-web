import Link from 'next/link';
import { Target, TrendingUp, Users, Zap, Cloud, BarChart3, ArrowRight } from 'lucide-react';
import { PageLayout, Section } from './PageLayout';

const features = [
  { icon: <Target className="w-5 h-5" />, title: 'Match Winner Probability', desc: 'Advanced ML models analyze 200+ variables to produce precise win probabilities updated in real-time throughout the match.', metric: '89% Accuracy' },
  { icon: <Zap className="w-5 h-5" />, title: 'Toss Impact Analysis', desc: 'Pitch behavior, weather data, and historical venue patterns determine exactly how much the toss matters in each match.', metric: 'Venue-specific' },
  { icon: <Users className="w-5 h-5" />, title: 'Player Performance Prediction', desc: 'Form index, opposition matchup analysis, and venue history combine to predict individual player contributions.', metric: '350+ Players tracked' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Team Strength Comparison', desc: 'Quantified team ratings across batting depth, bowling attack, fielding, and squad availability metrics.', metric: 'Dynamic ratings' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Live Match Momentum', desc: 'Ball-by-ball momentum index that detects turning points and probabilities the moment they shift mid-innings.', metric: 'Real-time' },
  { icon: <Cloud className="w-5 h-5" />, title: 'Pitch & Weather Engine', desc: "Integrated weather forecasts, pitch curators' notes and historical surface behavior affect every prediction output.", metric: 'Hyper-local data' },
];

export const PredictionsPage = () => {
  return (
    <PageLayout title="AI Match Predictions">
        <div className="p-4 sm:p-6 rounded-2xl page-card-accent">
          <p className="text-base leading-relaxed font-light italic" style={{ color: 'var(--muted)' }}>
            Our AI doesn&apos;t guess — it calculates. Five proprietary models working in parallel on every match. Each match has its own prediction and its own player analysis: key player impact and performance insights are computed per fixture.
          </p>
        </div>

        <Section title="What AICRIX Predicts">
          <p>
            AICRIX combines neural networks with decades of cricket data to deliver predictions that matter. Every output is backed by rigorous statistical analysis, real-time data feeds, and continuous model refinement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4">
            {features.map((f, i) => (
              <div key={i} className="group p-4 sm:p-5 rounded-2xl page-card transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h4 className="text-white text-sm font-semibold mb-1.5">{f.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed mb-2">{f.desc}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium" style={{ color: 'var(--accent)' }}><TrendingUp className="w-3 h-3 shrink-0" /> {f.metric}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="How Predictions Are Delivered">
          <p>
            Predictions are available in the AICRIX app seconds before each match. Every match has different player analysis: you get win probabilities, <strong className="text-white/70">match-specific key player impact scores</strong>, toss advantage, pitch and weather summaries, and live updates. Learn how we build player analysis in our <Link href="/player-analysis" className="underline hover:no-underline" style={{ color: 'var(--accent)' }}>Player Analysis</Link> section.
          </p>
          <div className="p-4 sm:p-5 rounded-2xl page-card mt-3">
            <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1">
              <li>Pre-match: Full analysis with confidence bands and key player impact for that fixture</li>
              <li>Live: Ball-by-ball probability updates</li>
              <li>Post-match: Accuracy tracking for continuous improvement</li>
            </ul>
          </div>
          <Link href="/player-analysis" className="inline-flex items-center gap-2 mt-3 text-sm font-medium" style={{ color: 'var(--accent)' }}>
            How we analyze players <ArrowRight className="w-4 h-4" />
          </Link>
        </Section>
    </PageLayout>
  );
};

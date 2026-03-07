import { Target, Coins, Zap, Link2, TrendingUp, CloudSun } from 'lucide-react';

const features = [
  { icon: Target, title: 'Match Winner Probability', desc: 'Advanced ML models analyze 200+ variables to produce precise win probabilities updated in real-time throughout the match.', pct: '89% Accuracy' },
  { icon: Coins, title: 'Toss Impact Analysis', desc: 'Pitch behavior, weather data, and historical venue patterns determine exactly how much the toss matters in each match.', pct: 'Venue-specific' },
  { icon: Zap, title: 'Player Performance Prediction', desc: 'Form index, opposition matchup analysis, and venue history combine to predict individual player contributions.', pct: '350+ Players tracked' },
  { icon: Link2, title: 'Team Strength Comparison', desc: 'Quantified team ratings across batting depth, bowling attack, fielding, and squad availability metrics.', pct: 'Dynamic ratings' },
  { icon: TrendingUp, title: 'Live Match Momentum', desc: 'Ball-by-ball momentum index that detects turning points and probabilities the moment they shift mid-innings.', pct: 'Real-time' },
  { icon: CloudSun, title: 'Pitch & Weather Engine', desc: "Integrated weather forecasts, pitch curators' notes and historical surface behavior affect every prediction output.", pct: 'Hyper-local data' },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="landing-section" style={{ background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div className="section-tag reveal">What AICRIX Predicts</div>
        <h2 className="section-title reveal">Every Angle.<br />Every Data Point.</h2>
        <p className="section-sub reveal">Our AI doesn&apos;t guess — it calculates. Five proprietary models working in parallel on every match.</p>
        <div className="features-grid">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
            <div key={i} className="feat-card reveal">
              <div className="feat-icon"><Icon className="w-6 h-6" strokeWidth={2} /></div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
              <div className="feat-pct inline-flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5 shrink-0" /> {f.pct}</div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

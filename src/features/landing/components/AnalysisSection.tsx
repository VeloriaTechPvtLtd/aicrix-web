import { MapPin, Brain, Target, TrendingUp, CloudSun } from 'lucide-react';

const STRENGTH_METRICS = [
  { label: 'Batting Depth', indPct: 88, ausPct: 84 },
  { label: 'Bowling Attack', indPct: 92, ausPct: 95 },
  { label: 'Fielding', indPct: 85, ausPct: 91 },
  { label: 'Form', indPct: 100, ausPct: 92 },
] as const;

export const AnalysisSection = () => {
  return (
    <section
      id="analysis"
      className="landing-section analysis-section"
      aria-labelledby="analysis-heading"
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Match Intelligence</div>
          <h2 className="section-title" id="analysis-heading">
            Team &amp; Venue{' '}
            <span style={{ color: 'var(--accent)' }}>Intelligence</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Comparative squad signals, venue conditions, and model-driven
            context—built for the fixture, not generic stats.
          </p>
        </div>

        {/* Fixture meta strip */}
        <div className="ai-meta-strip reveal">
          <span className="ai-fixture-pill">Fixture</span>
          <span className="ai-fixture-format">T20I</span>
          <span className="ai-fixture-venue">
            <MapPin size={12} aria-hidden />
            MCG · Melbourne
          </span>
          <span className="ai-fixture-badge">
            <span className="ai-dot" aria-hidden />
            Sample Report
          </span>
        </div>

        {/* Win probability card */}
        <div className="feat-card ai-matchup-card reveal">
          <div className="ai-team-block ai-team-ind">
            <span className="ai-team-code">IND</span>
            <span className="ai-team-pct">52.1%</span>
            <span className="ai-team-label">Win Probability</span>
          </div>

          <div className="ai-prob-center">
            <div className="ai-prob-bar">
              <div className="ai-prob-seg ind" style={{ flex: '52.1' }} />
              <div className="ai-prob-seg aus" style={{ flex: '47.9' }} />
            </div>
            <div className="ai-prob-legend">
              <span>IND</span>
              <span className="ai-prob-legend-label">
                <Brain size={11} aria-hidden />
                Model Probability
              </span>
              <span>AUS</span>
            </div>
          </div>

          <div className="ai-team-block ai-team-aus">
            <span className="ai-team-code">AUS</span>
            <span className="ai-team-pct">47.9%</span>
            <span className="ai-team-label">Win Probability</span>
          </div>
        </div>

        {/* Intelligence grid — 3 cards */}
        <div className="analysis-intel-grid">
          {/* Venue Dynamics */}
          <div className="feat-card reveal">
            <div className="feat-icon" style={{ background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.2)', color: '#818cf8' }}>
              <Target size={20} aria-hidden />
            </div>
            <div className="feat-title">Venue Dynamics</div>
            <div className="feat-desc" style={{ marginBottom: '1rem' }}>MCG · Melbourne</div>
            <ul className="ai-stat-list">
              <li className="ai-stat-item">
                <span className="ai-stat-label">Avg 1st Innings</span>
                <span className="ai-stat-value" style={{ color: 'var(--accent)' }}>175+</span>
              </li>
              <li className="ai-stat-item">
                <span className="ai-stat-label">Bat 1st Win Rate</span>
                <span className="ai-stat-value">68%</span>
              </li>
              <li className="ai-stat-item">
                <span className="ai-stat-label">Pitch Pace</span>
                <span className="ai-stat-value">Fast / True Bounce</span>
              </li>
              <li className="ai-stat-item" style={{ borderBottom: 'none' }}>
                <span className="ai-stat-label">Weather</span>
                <span className="ai-stat-value" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CloudSun size={12} aria-hidden />
                  Clear · 62% Humidity
                </span>
              </li>
            </ul>
          </div>

          {/* Squad Matchup */}
          <div className="feat-card reveal">
            <div className="feat-icon">
              <TrendingUp size={20} aria-hidden />
            </div>
            <div className="feat-title">Squad Matchup</div>
            <div className="feat-desc" style={{ marginBottom: '1rem' }}>Comparative strength</div>
            <div className="ai-squad-list">
              {STRENGTH_METRICS.map((m) => (
                <div className="ai-squad-item" key={m.label}>
                  <div className="ai-squad-row">
                    <span className="ai-squad-val ind">{m.indPct}</span>
                    <span className="ai-squad-label">{m.label}</span>
                    <span className="ai-squad-val aus">{m.ausPct}</span>
                  </div>
                  <div className="ai-squad-bar">
                    <div className="ai-squad-fill ind" style={{ width: `${m.indPct / 2}%` }} />
                    <div className="ai-squad-fill aus" style={{ width: `${m.ausPct / 2}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Verdict */}
          <div className="feat-card reveal">
            <div className="feat-icon" style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(251,191,36,0.18)', color: '#fbbf24' }}>
              <Brain size={20} aria-hidden />
            </div>
            <div className="feat-title">AI Verdict</div>
            <div className="feat-desc" style={{ marginBottom: '1rem' }}>Model output</div>
            <div className="ai-verdict-edge">
              <span className="ai-verdict-edge-label">Edge</span>
              <span className="ai-verdict-edge-val">+4.2%</span>
              <span className="ai-verdict-edge-team">IND</span>
            </div>
            <p className="ai-verdict-text">
              Models favor <strong>IND</strong> slightly due to superior batting
              depth against true bounce conditions at the MCG.
            </p>
            <div className="ai-verdict-key-factor">
              <span className="ai-verdict-kf-label">Key Factor</span>
              <p className="ai-verdict-kf-text">
                Early swing for AUS seamers could disrupt the top order, but
                IND&apos;s middle order stability delivers the decisive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Zap, Check, X, Sparkles } from 'lucide-react';

const rows = [
  { feature: 'Prediction methodology', aicrix: 'AI & ML models', other: 'Expert guesses' },
  { feature: 'Win probability %', aicrix: 'Live recalculation', other: 'Static opinions' },
  { feature: 'Player impact index', aicrix: 'Per-player scores', other: 'Not available' },
  { feature: 'Pitch & weather analysis', aicrix: 'Integrated engine', other: 'Rarely mentioned' },
  { feature: 'Historical depth', aicrix: '50+ years of data', other: 'Limited history' },
  { feature: 'Confidence scoring', aicrix: 'Per-prediction %', other: 'Not available' },
  { feature: 'Bias & transparency', aicrix: 'Zero editorial bias', other: 'Team favorites' },
] as const;

export const CompareSection = () => {
  return (
    <section
      id="compare"
      className="landing-section compare-section"
      aria-labelledby="compare-heading"
    >
      <div className="ai-wrap">
        {/* Section Header */}
        <div className="ai-header reveal" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <Sparkles size={11} aria-hidden />
            Why AICRIX
          </div>
          <h2 className="section-title" id="compare-heading">
            Data wins.{' '}
            <span style={{ color: 'var(--accent)' }}>Guesses don&apos;t.</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            The same decision points you care about—methodology, depth, and
            transparency—stacked side by side. No noise, no paywalled
            &quot;locks.&quot;
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="ai-dashboard compare-card reveal">
          {/* Top bar */}
          <div className="ai-fixture-bar">
            <div className="ai-fixture-left">
              <span className="ai-fixture-pill">Capability Comparison</span>
              <span className="ai-fixture-format">7 Categories</span>
            </div>
            <span className="cs-vs-label">AICRIX vs. Typical apps</span>
          </div>

          {/* Table scroll wrapper */}
          <div className="compare-shell">
            <table className="compare-table">
              <caption className="compare-caption">
                Comparison of AICRIX versus typical prediction tools
              </caption>

              <thead>
                <tr>
                  <th scope="col" className="compare-th compare-th--feature">
                    <div className="compare-th-stack compare-th-stack--feature">
                      <span className="compare-th-feature-label">Capability</span>
                    </div>
                  </th>

                  <th scope="col" className="compare-th compare-th--aicrix">
                    <div className="compare-th-stack compare-th-stack--aicrix">
                      <div className="compare-th-brand-block">
                        <span className="compare-th-logo" aria-hidden>
                          <Zap
                            className="w-[1.15rem] h-[1.15rem]"
                            strokeWidth={2.5}
                          />
                        </span>
                        <div className="compare-th-heading-block">
                          <div className="compare-th-title-row">
                            <span className="compare-th-label">AICRIX</span>
                            <span className="compare-th-pick">Recommended</span>
                          </div>
                          <span className="compare-th-tagline">
                            AI engine · live models
                          </span>
                          <span className="compare-th-desc">
                            Refreshed every match—not static tips.
                          </span>
                        </div>
                      </div>
                    </div>
                  </th>

                  <th scope="col" className="compare-th compare-th--other">
                    <div className="compare-th-stack compare-th-stack--other">
                      <span className="compare-th-label compare-th-label--muted">
                        Typical apps
                      </span>
                      <span className="compare-th-sub">
                        Tips &amp; static odds
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => (
                  <tr key={r.feature}>
                    <th scope="row" className="compare-td compare-td--feature">
                      {r.feature}
                    </th>
                    <td className="compare-td compare-td--aicrix">
                      <span className="compare-cell">
                        <span
                          className="compare-icon compare-icon--yes"
                          aria-hidden
                        >
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                        <span className="compare-value">{r.aicrix}</span>
                      </span>
                    </td>
                    <td className="compare-td compare-td--other">
                      <span className="compare-cell">
                        <span
                          className="compare-icon compare-icon--no"
                          aria-hidden
                        >
                          <X className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                        <span className="compare-value compare-value--muted">
                          {r.other}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

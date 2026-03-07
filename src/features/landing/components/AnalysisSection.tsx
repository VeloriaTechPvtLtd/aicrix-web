import { useEffect, useRef } from 'react';
import { Coins, Sprout, CloudSun, Zap, Target, Trophy } from 'lucide-react';

const TREND_DATA = [
  { win: true, val: 80 },
  { win: false, val: 55 },
  { win: true, val: 90 },
  { win: true, val: 70 },
  { win: true, val: 85 },
];

export const AnalysisSection = () => {
  const trendBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trendBarsRef.current) return;
    trendBarsRef.current.innerHTML = '';
    TREND_DATA.forEach((d) => {
      const bar = document.createElement('div');
      bar.className = 'trend-bar';
      bar.style.height = d.val + '%';
      bar.style.flex = '1';
      bar.style.borderRadius = '3px 3px 0 0';
      bar.style.background = d.win
        ? 'linear-gradient(to top, var(--accent), rgba(0,229,160,0.5))'
        : 'linear-gradient(to top, var(--red), rgba(255,77,109,0.5))';
      bar.title = d.win ? 'IND won' : 'AUS won';
      trendBarsRef.current?.appendChild(bar);
    });
  }, []);

  return (
    <section id="analysis" className="landing-section analysis-section" style={{ background: 'var(--bg2)' }}>
      <div className="analysis-inner">
        <div className="section-tag reveal">Sample Analysis</div>
        <h2 className="section-title reveal">See the AI in Action</h2>
        <p className="section-sub reveal">Real match data. This is exactly what you get inside AICRIX.</p>
        <div className="analysis-wrapper">
          <div className="analysis-card reveal">
            <div className="analysis-header">
              <div>
                <div className="analysis-teams"><span className="team-code">IND</span> India vs Australia <span className="team-code">AUS</span></div>
                <div className="analysis-match-meta">ICC T20 WC · Semi-Final · MCG</div>
              </div>
              <span className="analysis-confidence-badge">AI CONFIDENCE 88%</span>
            </div>
            <div className="analysis-body">
              <div className="prob-duel">
                <div className="prob-side">
                  <div className="prob-big win">65%</div>
                  <div className="prob-country"><span className="team-code">IND</span> INDIA WINS</div>
                </div>
                <div className="prob-vs">vs</div>
                <div className="prob-side">
                  <div className="prob-big lose">35%</div>
                  <div className="prob-country"><span className="team-code">AUS</span> AUSTRALIA WINS</div>
                </div>
              </div>
              <div className="stat-rows">
                <div className="stat-row">
                  <span className="stat-row-icon"><Coins className="w-4 h-4" /></span>
                  <span className="stat-row-label">Toss Winner Advantage</span>
                  <span className="stat-row-val pos">Batting first: +8%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-row-icon"><Sprout className="w-4 h-4" /></span>
                  <span className="stat-row-label">Pitch Behaviour</span>
                  <span className="stat-row-val neu">Flat · High Scoring</span>
                </div>
                <div className="stat-row">
                  <span className="stat-row-icon"><CloudSun className="w-4 h-4" /></span>
                  <span className="stat-row-label">Weather Impact</span>
                  <span className="stat-row-val neu">Dew expected · Ov.15+</span>
                </div>
                <div className="stat-row">
                  <span className="stat-row-icon"><Zap className="w-4 h-4" /></span>
                  <span className="stat-row-label">Top Batting Threat</span>
                  <span className="stat-row-val pos">Kohli · Form: 9.2/10</span>
                </div>
                <div className="stat-row">
                  <span className="stat-row-icon"><Target className="w-4 h-4" /></span>
                  <span className="stat-row-label">Bowling Edge</span>
                  <span className="stat-row-val pos">India · Bumrah vs top-order</span>
                </div>
              </div>
              <div className="trend-chart">
                <div className="trend-title">IND HEAD-TO-HEAD LAST 5 MATCHES vs AUS (T20)</div>
                <div className="trend-bars" ref={trendBarsRef} />
              </div>
            </div>
          </div>

          <div className="side-stats reveal">
            <div className="stat-block">
              <div className="stat-block-header">
                <span className="stat-block-title">Key Player Impact Index</span>
                <span className="stat-block-badge badge-green">LIVE</span>
              </div>
              {[
                { name: 'Virat Kohli', role: 'Batter · RHB', impact: '↑ +18.4%', color: 'var(--accent)', icon: Trophy },
                { name: 'J. Bumrah', role: 'Bowler · RFM', impact: '↑ +14.2%', color: 'var(--accent)', icon: Zap },
                { name: 'D. Warner', role: 'Batter · LHB', impact: '↓ −6.1%', color: 'var(--red)', icon: Trophy },
                { name: 'M. Starc', role: 'Bowler · LFM', impact: '→ +3.8%', color: 'var(--accent2)', icon: Target },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                <div key={i} className="player-row">
                  <div className="player-avatar"><Icon className="w-5 h-5" /></div>
                  <div className="player-info">
                    <div className="player-name">{p.name}</div>
                    <div className="player-role">{p.role}</div>
                  </div>
                  <div className="player-impact" style={{ color: p.color }}>{p.impact}</div>
                </div>
              );
              })}
            </div>

            <div className="stat-block">
              <div className="stat-block-header">
                <span className="stat-block-title">Team Strength Comparison</span>
                <span className="stat-block-badge badge-blue">AI RATED</span>
              </div>
              <div className="team-strength-bars">
                {[
                  { label: 'Batting Depth', val: 'IND 8.4 vs AUS 7.6', w: 70, color: 'var(--accent)' },
                  { label: 'Bowling Attack', val: 'IND 9.1 vs AUS 8.2', w: 77, color: 'var(--accent)' },
                  { label: 'Fielding Quality', val: 'IND 7.8 vs AUS 8.5', w: 55, color: 'var(--accent2)' },
                  { label: 'Squad Availability', val: 'IND 9.0 vs AUS 7.2', w: 80, color: 'var(--accent)' },
                ].map((r, i) => (
                  <div key={i}>
                    <div className="team-strength-row">
                      <span className="team-strength-label">{r.label}</span>
                      <span className="team-strength-val" style={{ color: r.color }}>{r.val}</span>
                    </div>
                    <div className="team-strength-bar-wrap">
                      <div className="team-strength-bar-fill" style={{ width: r.w + '%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stat-block">
              <div className="stat-block-header">
                <span className="stat-block-title">Venue Intelligence</span>
                <span className="stat-block-badge badge-purple">MCG</span>
              </div>
              <div className="venue-grid">
                {[
                  { val: '68%', lbl: 'BATTING FIRST WIN', color: 'var(--accent)' },
                  { val: '175+', lbl: 'AVG FIRST INNINGS', color: 'var(--accent2)' },
                  { val: 'DEW', lbl: 'EVENING FACTOR', color: 'var(--accent3)' },
                  { val: 'FAST', lbl: 'OUTFIELD PACE', color: 'var(--accent)' },
                ].map((b, i) => (
                  <div key={i} className="venue-stat-card">
                    <div className="venue-stat-value" style={{ color: b.color }}>{b.val}</div>
                    <div className="venue-stat-label">{b.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

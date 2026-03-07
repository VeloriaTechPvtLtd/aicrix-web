import { useEffect, useRef } from 'react';
import { Trophy, Smartphone, CloudFog, ArrowUp } from 'lucide-react';

const SPARK_HEIGHTS = [60, 45, 80, 55, 90, 70, 85, 65, 75, 88, 60, 72];

export const HeroSection = () => {
  const probFillRef = useRef<HTMLDivElement>(null);
  const sparkChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (probFillRef.current) probFillRef.current.style.width = '65%';
    }, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!sparkChartRef.current) return;
    sparkChartRef.current.innerHTML = '';
    SPARK_HEIGHTS.forEach((h, i) => {
      const bar = document.createElement('div');
      bar.className = 'spark-bar';
      bar.style.height = h + '%';
      bar.style.background = i > 8
        ? 'linear-gradient(to top, var(--accent), rgba(0,229,160,0.6))'
        : 'rgba(255,255,255,0.08)';
      sparkChartRef.current?.appendChild(bar);
    });
  }, []);

  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">LIVE · AI Match Engine Active</div>
          <h1 className="hero-title">
            AI-Powered<br />
            Cricket <span className="hl">Match</span><br />
            Predictions
          </h1>
          <p className="hero-sub">
            Smart AI models analyze teams, players, pitch conditions & live data to deliver precise match insights before the first ball is bowled.
          </p>
          <div className="hero-btns">
            <a href="#analysis" className="btn-primary"><Trophy className="w-4 h-4 shrink-0" /> View Today&apos;s Predictions</a>
            <a href="#download" className="btn-secondary"><Smartphone className="w-4 h-4 shrink-0" /> Download App</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="val">89%</div>
              <div className="lbl">PREDICTION ACCURACY</div>
            </div>
            <div className="hero-stat">
              <div className="val">500K+</div>
              <div className="lbl">MATCHES ANALYZED</div>
            </div>
            <div className="hero-stat">
              <div className="val">24/7</div>
              <div className="lbl">LIVE COVERAGE</div>
            </div>
          </div>
        </div>

        <div className="hero-card-wrap">
          <div className="match-card">
            <div className="match-header">
              <span className="match-badge">T20 WORLD CUP · SEMI-FINAL</span>
              <span className="match-live">LIVE ANALYSIS</span>
            </div>
            <div className="teams">
              <div className="team">
                <div className="team-flag"><span className="team-code">IND</span></div>
                <div className="team-name">India</div>
                <div className="team-score">184/6 (18.2)</div>
              </div>
              <div className="vs-divider">VS</div>
              <div className="team">
                <div className="team-flag"><span className="team-code">AUS</span></div>
                <div className="team-name">Australia</div>
                <div className="team-score">—</div>
              </div>
            </div>
            <div className="prob-section">
              <div className="prob-label">
                <span>WIN PROBABILITY</span>
                <span><span className="val1">IND 65%</span> · <span className="val2">AUS 35%</span></span>
              </div>
              <div className="prob-bar">
                <div className="prob-fill" ref={probFillRef} />
              </div>
            </div>
            <div className="confidence-row">
              <div className="conf-item">
                <div className="conf-val up">65%</div>
                <div className="conf-lbl">IND WIN</div>
              </div>
              <div className="conf-item">
                <div className="conf-val mid">88%</div>
                <div className="conf-lbl">CONFIDENCE</div>
              </div>
              <div className="conf-item">
                <div className="conf-val down">35%</div>
                <div className="conf-lbl">AUS WIN</div>
              </div>
            </div>
            <div className="spark-wrap">
              <div className="spark-title">MATCH MOMENTUM · LAST 6 OVERS</div>
              <div className="spark-chart" ref={sparkChartRef} />
            </div>
            <div className="sub-cards">
              <div className="sub-card">
                <div className="sub-card-title">Key Player</div>
                <div className="sub-card-val">V. Kohli</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: "'Inter', sans-serif" }} className="inline-flex items-center gap-1">Impact: HIGH <ArrowUp className="w-3 h-3 shrink-0" /></div>
              </div>
              <div className="sub-card">
                <div className="sub-card-title">Pitch Factor</div>
                <div className="sub-card-val">Batting</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: "'Inter', sans-serif" }} className="flex items-center gap-1"><CloudFog className="w-3 h-3 shrink-0" /> Dew expected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

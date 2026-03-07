const steps = [
  {
    num: '01',
    title: 'Data Collection',
    desc: 'Historical match data, player stats, pitch reports & live weather feeds — all ingested automatically.',
    tags: ['50+ years records', 'Live APIs', 'Weather feeds'],
  },
  {
    num: '02',
    title: 'AI Model Analysis',
    desc: 'Five specialized ML models analyze patterns, form cycles, matchup data and run 10,000+ simulations per match.',
    tags: ['Deep Learning', 'Monte Carlo', 'NLP Reports'],
  },
  {
    num: '03',
    title: 'Prediction Output',
    desc: 'Clean percentages, confidence scores, and clear match recommendations delivered seconds before kickoff.',
    tags: ['% Probabilities', 'Confidence bands', 'Key factors'],
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how" className="landing-section">
      <div style={{ maxWidth: 1300, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-tag reveal" style={{ justifyContent: 'center' }}>How It Works</div>
        <h2 className="section-title reveal">From Raw Data to<br /><span style={{ color: 'var(--accent)' }}>Actionable Insights</span></h2>
        <p className="section-sub reveal" style={{ margin: '0 auto' }}>Three precision stages. One output you can trust.</p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="step reveal">
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
              <div className="step-tags">
                {s.tags.map((tag, j) => (
                  <span key={j} className="step-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

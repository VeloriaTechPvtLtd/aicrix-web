import { Zap, Check, X } from 'lucide-react';

const rows = [
  { feature: 'Prediction methodology', aicrix: 'AI & ML models', other: 'Expert guesses' },
  { feature: 'Win probability %', aicrix: 'Live recalculation', other: 'Static opinions' },
  { feature: 'Player impact index', aicrix: 'Per-player scores', other: 'Not available' },
  { feature: 'Pitch & weather analysis', aicrix: 'Integrated engine', other: 'Rarely mentioned' },
  { feature: 'Historical depth', aicrix: '50+ years of data', other: 'Limited history' },
  { feature: 'Confidence scoring', aicrix: 'Per-prediction %', other: 'Not available' },
  { feature: 'Bias & transparency', aicrix: 'Zero editorial bias', other: 'Team favorites' },
];

export const CompareSection = () => {
  return (
    <section id="compare" className="landing-section">
      <div style={{ maxWidth: 1300, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Why AICRIX</div>
        <h2 className="section-title reveal">Data Wins.<br /><span style={{ color: 'var(--accent)' }}>Guesses Don&apos;t.</span></h2>
        <p className="section-sub reveal" style={{ margin: '0 auto' }}>See how AI-powered analysis compares to every other prediction tool out there.</p>
        <div className="compare-table reveal">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th><span className="inline-flex items-center gap-1.5">AICRIX <Zap className="w-4 h-4" /></span></th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.feature}</td>
                  <td><span className="tick"><Check className="w-4 h-4" /></span> {r.aicrix}</td>
                  <td><span className="cross"><X className="w-4 h-4" /></span> {r.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

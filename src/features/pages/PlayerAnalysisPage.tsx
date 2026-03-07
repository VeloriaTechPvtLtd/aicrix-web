import { User, Crosshair, BarChart2, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PageLayout, Section } from './PageLayout';

const capabilities = [
  { icon: <User className="w-5 h-5" />, title: 'Form Index', desc: 'Weighted scoring of recent performances across formats, conditions, and opposition strength.' },
  { icon: <Crosshair className="w-5 h-5" />, title: 'Batsman vs Bowler Matchups', desc: 'Head-to-head statistics, scoring rates, and dismissal patterns for every relevant pairing.' },
  { icon: <BarChart2 className="w-5 h-5" />, title: 'Phase-wise Performance', desc: 'Powerplay, middle overs, and death overs analysis — where does each player excel?' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Venue History', desc: 'How players perform at specific grounds, considering pitch type and conditions.' },
];

const samplePlayers = [
  { name: 'Virat Kohli', role: 'Batter · RHB', impact: '↑ +18.4%', color: 'var(--accent)' },
  { name: 'J. Bumrah', role: 'Bowler · RFM', impact: '↑ +14.2%', color: 'var(--accent)' },
  { name: 'D. Warner', role: 'Batter · LHB', impact: '↓ −6.1%', color: 'var(--red)' },
  { name: 'M. Starc', role: 'Bowler · LFM', impact: '→ +3.8%', color: 'var(--accent2)' },
];

export const PlayerAnalysisPage = () => {
  return (
    <PageLayout title="Player Analysis">
        <div className="p-4 sm:p-6 rounded-2xl page-card-accent">
          <p className="text-base leading-relaxed font-light italic" style={{ color: 'var(--muted)' }}>
            Deep situational analysis — batsman vs bowler matchups, form curves, and phase-wise performance for every key player. Each match has its own player analysis: different key players and impact scores for every fixture.
          </p>
        </div>

        <Section title="What We Analyze">
          <p>
            Our AI tracks 350+ players across international and major domestic leagues. For each match, we compute a <strong className="text-white/70">match-specific</strong> Key Player Impact Index: every fixture gets its own player analysis based on form, opposition matchups, venue history, and current conditions. View <Link href="/predictions" className="underline hover:no-underline" style={{ color: 'var(--accent)' }}>today&apos;s predictions</Link> and open any match in the app to see that match&apos;s player impact and analysis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
            {capabilities.map((c, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl page-card">
                <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3">
                  {c.icon}
                </div>
                <h4 className="text-white text-sm font-semibold mb-1.5">{c.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Sample: Key Player Impact Index">
          <p>
            Below is an example of the Impact Index shown in the app for a sample match. Positive values indicate players expected to outperform their baseline; negative values suggest underperformance risk.
          </p>
          <div className="p-4 sm:p-5 rounded-2xl page-card mt-3">
            <div className="space-y-3">
              {samplePlayers.map((p, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <div className="text-[var(--text)] font-medium text-sm">{p.name}</div>
                    <div className="text-[var(--muted)] text-xs">{p.role}</div>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: p.color }}>{p.impact}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Getting Started">
          <p>
            Full player analysis is available in the AICRIX app for every match — each match has different key players and impact scores. Download the app to access match-specific Key Player Impact scores, form curves, and matchup insights for every fixture.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <Link href="/predictions" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
              View match predictions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/#download" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
              Get the App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>
    </PageLayout>
  );
};

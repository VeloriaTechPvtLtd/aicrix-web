import { MapPin, Cloud, Thermometer, Wind, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PageLayout, Section } from './PageLayout';

const venueFactors = [
  { icon: <MapPin className="w-5 h-5" />, title: 'Batting First Win %', desc: 'Historical win rate for teams batting first at each venue.' },
  { icon: <Thermometer className="w-5 h-5" />, title: 'Avg First Innings', desc: 'Typical first-innings totals based on pitch and format.' },
  { icon: <Cloud className="w-5 h-5" />, title: 'Dew & Weather', desc: 'Evening dew, humidity, and rain probability impacts.' },
  { icon: <Wind className="w-5 h-5" />, title: 'Outfield & Surface', desc: 'Pace, bounce, and scoring patterns by phase.' },
];

const sampleVenueStats = [
  { val: '68%', lbl: 'BATTING FIRST WIN', color: 'var(--accent)' },
  { val: '175+', lbl: 'AVG FIRST INNINGS', color: 'var(--accent2)' },
  { val: 'DEW', lbl: 'EVENING FACTOR', color: 'var(--accent3)' },
  { val: 'FAST', lbl: 'OUTFIELD PACE', color: 'var(--accent)' },
];

export const VenueReportsPage = () => {
  return (
    <PageLayout title="Venue Reports">
        <div className="p-4 sm:p-6 rounded-2xl page-card-accent">
          <p className="text-base leading-relaxed font-light italic" style={{ color: 'var(--muted)' }}>
            AI reads pitch conditions using weather data, historical venue stats, and ball behavior analysis — hyper-local intelligence for every match.
          </p>
        </div>

        <Section title="Venue Intelligence">
          <p>
            Every cricket ground has its own character. AICRIX aggregates decades of match data, pitch curator notes, and real-time weather to produce venue-specific intelligence that influences every prediction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
            {venueFactors.map((f, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl page-card">
                <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3">
                  {f.icon}
                </div>
                <h4 className="text-white text-sm font-semibold mb-1.5">{f.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Sample: Venue Stats (e.g. MCG)">
          <p>
            For each match, the app displays key venue metrics. Here is an example of the Venue Intelligence card format.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
            {sampleVenueStats.map((b, i) => (
              <div key={i} className="p-4 rounded-xl page-card text-center">
                <div className="text-lg font-bold mb-1" style={{ color: b.color }}>{b.val}</div>
                <div className="text-[11px] text-[var(--muted)] uppercase tracking-wide">{b.lbl}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Data Sources">
          <p>
            Venue intelligence combines historical match databases, live weather APIs, pitch reports from curators, and ball-by-ball data to assess conditions. This feeds into toss impact analysis and run-scoring expectations.
          </p>
        </Section>

        <Section title="See It in Action">
          <p>
            Full venue reports are shown for every match in the AICRIX app. Download to explore pitch behavior, weather impact, and scoring patterns.
          </p>
          <Link href="/#download" className="inline-flex items-center gap-2 mt-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
            Get the App <ArrowRight className="w-4 h-4" />
          </Link>
        </Section>
    </PageLayout>
  );
};

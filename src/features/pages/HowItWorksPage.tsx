import { Database, Cpu, FileOutput } from 'lucide-react';
import { PageLayout, Section } from './PageLayout';

const steps = [
  {
    icon: <Database className="w-6 h-6" />,
    num: '01',
    title: 'Data Collection',
    desc: 'Historical match data, player stats, pitch reports & live weather feeds — all ingested automatically.',
    tags: ['50+ years records', 'Live APIs', 'Weather feeds'],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    num: '02',
    title: 'AI Model Analysis',
    desc: 'Five specialized ML models analyze patterns, form cycles, matchup data and run 10,000+ simulations per match.',
    tags: ['Deep Learning', 'Monte Carlo', 'NLP Reports'],
  },
  {
    icon: <FileOutput className="w-6 h-6" />,
    num: '03',
    title: 'Prediction Output',
    desc: 'Clean percentages, confidence scores, and clear match recommendations delivered seconds before kickoff.',
    tags: ['% Probabilities', 'Confidence bands', 'Key factors'],
  },
];

export const HowItWorksPage = () => {
  return (
    <PageLayout title="How It Works">
        <div className="p-4 sm:p-6 rounded-2xl page-card-accent">
          <p className="text-base leading-relaxed font-light italic" style={{ color: 'var(--muted)' }}>
            From raw data to actionable insights. Three precision stages. One output you can trust.
          </p>
        </div>

        <Section title="The AICRIX Pipeline">
          <p>
            Our platform processes over 2.3 million data points every match day. Here is how we turn that into predictions you can rely on.
          </p>
          <div className="space-y-6 mt-6">
            {steps.map((s, i) => (
              <div key={i} className="p-5 sm:p-6 rounded-2xl page-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl page-icon-wrap-accent flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-[var(--accent)] mb-2 block">{s.num}</span>
                    <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text)' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                          style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--muted)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="What You Get">
          <p>
            Before every match, the AICRIX app delivers win probabilities, key player impact scores, toss advantage estimates, venue intelligence, and confidence bands. During the match, probabilities update in real time as the game unfolds.
          </p>
        </Section>
    </PageLayout>
  );
};

import { Target, Shield, Lightbulb, Leaf, Eye, Users, Globe, Heart } from 'lucide-react';
import { PageLayout, Section, InfoRow } from './PageLayout';

const values = [
    { icon: <Shield className="w-5 h-5" />, title: 'Trust & Safety', desc: 'Prioritizing user safety through robust data protection and secure infrastructure.' },
    { icon: <Users className="w-5 h-5" />, title: 'User-Centric Approach', desc: 'Continuous improvement driven by user feedback and community needs.' },
    { icon: <Eye className="w-5 h-5" />, title: 'Transparency', desc: 'Clear communication, honest practices, and no hidden agendas.' },
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Innovation', desc: 'Leveraging cutting-edge AI and analytics to redefine cricket intelligence.' },
    { icon: <Leaf className="w-5 h-5" />, title: 'Accuracy', desc: 'Data-driven rigor — every prediction backed by verified statistical models.' },
    { icon: <Heart className="w-5 h-5" />, title: 'Passion for Cricket', desc: 'Built by cricket lovers, for cricket lovers. The game is in our DNA.' },
];

export const AboutUsPage = () => {
    return (
        <PageLayout title="About Us" lastUpdated="February 20, 2026">
            {/* Mission statement */}
            <div className="p-4 sm:p-6 rounded-2xl page-card-accent">
                <p className="text-base leading-relaxed font-light italic" style={{ color: 'var(--muted)' }}>
                    "To transform the way cricket enthusiasts engage with the sport by creating the most intelligent, accurate, and accessible cricket analytics platform powered by artificial intelligence."
                </p>
            </div>

            <Section title="Who We Are">
                <p>
                    Aicrix is an AI-powered cricket advisory platform built and operated by <strong className="text-white/60">VELORIA TECH (OPC) PRIVATE LIMITED</strong>. We combine neural networks with decades of cricket data to deliver predictions, analytics, and strategies that win — for fantasy league players, analysts, coaches, broadcasters, and every cricket fan.
                </p>
                <p>
                    Our platform processes over 2.3 million data points every match day, analyzing player form, pitch conditions, weather impacts, head-to-head records, and 50,000+ historical matches to generate insights with industry-leading 92% prediction accuracy.
                </p>
            </Section>

            <Section title="What We Do">
                <p>Aicrix is a comprehensive cricket intelligence platform that offers:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3">
                    {[
                        { title: 'AI Match Predictions', desc: 'Real-time win probability powered by neural networks, updating ball-by-ball.' },
                        { title: 'Player Analytics', desc: 'Deep situational analysis — batsman vs bowler matchups, form curves, and phase-wise performance.' },
                        { title: 'Pitch Intelligence', desc: 'AI reads pitch conditions using weather data, historical venue stats, and ball behavior analysis.' },
                        { title: 'Tournament Simulator', desc: 'Monte Carlo simulations predicting qualification paths and knockout probabilities.' },
                        { title: 'Live Match Flow', desc: 'Dynamic probability graphs that shift with every boundary, wicket, and dot ball.' },
                        { title: 'Field Strategy', desc: 'Optimized fielding placements calculated from scoring zone analysis and batter tendencies.' },
                    ].map(item => (
                        <div key={item.title} className="p-3 sm:p-4 rounded-xl page-card transition-colors">
                            <div className="text-[var(--text)] text-[13px] font-medium mb-1" style={{ color: 'var(--text)' }}>{item.title}</div>
                            <div className="text-[var(--muted)] text-xs leading-relaxed" style={{ color: 'var(--muted)', opacity: 0.9 }}>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Core values */}
            <Section title="Our Core Values">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-1">
                    {values.map((v, i) => (
                        <div key={i} className="group p-4 sm:p-5 rounded-2xl page-card transition-all duration-300 hover:-translate-y-0.5">
                            <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                {v.icon}
                            </div>
                            <h4 className="text-white text-sm font-semibold mb-1.5">{v.title}</h4>
                            <p className="text-white/35 text-xs leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-6 rounded-2xl page-card">
                    <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3">
                        <Target className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text)' }}>Our Vision</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>To be the world's most trusted and accurate AI-powered cricket intelligence platform, empowering millions of fans and professionals to make smarter decisions.</p>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl page-card">
                    <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3">
                        <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text)' }}>Our Mission</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>To make world-class cricket analytics accessible to everyone — combining deep learning, statistical modeling, and real-time data to democratize cricket intelligence.</p>
                </div>
            </div>

            {/* Tech & Compliance */}
            <Section title="Technology & Compliance">
                <p>Our platform is built on secure cloud infrastructure with industry-standard security measures including:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Encrypted communications and data storage</li>
                    <li>Compliance with Indian data protection laws and the Consumer Protection Act 2019</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Real-time analytics infrastructure processing millions of data points daily</li>
                </ul>
            </Section>

            {/* Company info */}
            <Section title="Company Details">
                <div className="p-4 sm:p-5 rounded-2xl page-card">
                    <InfoRow label="Parent Company" value="VELORIA TECH (OPC) PRIVATE LIMITED" />
                    <InfoRow label="Registered Address" value="12-132, Main Road, Pedda Devaram Padu, Ammanabrolu, Ongole Mandal, Prakasham, 523180, Andhra Pradesh, India" />
                    <InfoRow label="Country" value="India" />
                    <InfoRow label="Website" value="https://aicrix.com" href="https://aicrix.com" />
                    <InfoRow label="Email" value="support@aicrix.com" href="mailto:support@aicrix.com" />
                    <InfoRow label="Phone" value="+91 63615 62262" href="tel:+916361562262" />
                </div>
            </Section>
        </PageLayout>
    );
};

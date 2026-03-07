import { AnimateOnScroll } from '../LandingPage';

const testimonials = [
    {
        type: 'quote' as const,
        text: '"The AI predictions here are scarily accurate. Changed how I approach every match day — it\'s like having an expert analyst whispering insights in your ear, live."',
        name: 'Rahul K.',
        role: 'Fantasy League Champion, IPL 2025',
        rating: '4.9',
    },
    {
        type: 'stat' as const,
        value: '120K+',
        desc: 'predictions delivered',
        sub: 'to users worldwide since beta launch.',
        label: 'Our Community',
    },
    {
        type: 'quote' as const,
        text: '"Finally, a cricket platform that puts data first. I analyzed player form, pitch conditions, and match dynamics all in one place — saved me hours of manual research."',
        name: 'Elena R.',
        role: 'Sports Analyst, ESPN Cricinfo',
        rating: '4.9',
    },
    {
        type: 'quote' as const,
        text: '"Managing my fantasy team used to be guesswork. Now I track every metric — strike rates by phase, matchup histories — and make decisions backed by real intelligence."',
        name: 'Sofia M.',
        role: 'Top 1% Fantasy Player',
        rating: '4.8',
    },
    {
        type: 'quote' as const,
        text: '"The real-time match flow analysis helps us spot momentum shifts before they\'re obvious. No more blind spots in our strategy. Absolute game-changer for coaching staff."',
        name: 'Daniel C.',
        role: 'Assistant Coach, Rajasthan Royals',
        rating: '4.9',
    },
    {
        type: 'stat' as const,
        value: '2.3M+',
        desc: 'data points processed',
        sub: 'every match day — growing stronger.',
        label: 'Scale that matters',
    },
    {
        type: 'quote' as const,
        text: '"The pitch intelligence module alone is worth the signup. It predicted the Chepauk surface would break down after 25 overs — and it did, exactly as forecasted."',
        name: 'Priya S.',
        role: 'Cricket Journalist, CricBuzz',
        rating: '5.0',
    },
    {
        type: 'quote' as const,
        text: '"I\'m a broadcaster and I use the tournament simulator before every show. It gives me talking points my colleagues simply don\'t have. The audience loves the data depth."',
        name: 'James W.',
        role: 'Sports Broadcaster, Sky Sports',
        rating: '4.8',
    },
    {
        type: 'stat' as const,
        value: '92%',
        desc: 'overall prediction accuracy',
        sub: 'verified across 10K+ matches.',
        label: 'Industry-leading accuracy',
    },
];

export const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 md:py-28 bg-[#080010] relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-purple-600/[0.04] rounded-full blur-[100px] animate-glowPulse"></div>

            <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
                {/* Header */}
                <AnimateOnScroll className="text-center mb-14 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-5">
                        <span className="tracking-widest uppercase">Wall of Love</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                        Built for People,
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300 italic">Powered</span>{' '}
                        by Cricket Community
                    </h2>
                    <p className="text-white/55 max-w-lg mx-auto text-sm leading-relaxed">
                        Thousands of cricket fans, coaches, analysts, and broadcasters already trust our platform. Here's what they say.
                    </p>
                </AnimateOnScroll>

                {/* Testimonial grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((item, index) => (
                        <AnimateOnScroll key={index} delay={index * 80}>
                            <div className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/15 transition-all duration-400 h-full hover:-translate-y-0.5">
                                {item.type === 'quote' ? (
                                    <>
                                        {/* Stars */}
                                        <div className="flex items-center gap-0.5 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-white/60 text-[13px] leading-relaxed mb-5 group-hover:text-white/75 transition-colors">{item.text}</p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-violet-500/20 border border-purple-500/20 flex items-center justify-center text-[10px] font-bold text-purple-300 group-hover:border-purple-500/40 transition-colors">
                                                    {item.name?.[0]}
                                                </div>
                                                <div>
                                                    <div className="text-white text-xs font-medium">{item.name}</div>
                                                    <div className="text-white/40 text-[10px]">{item.role}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/15">
                                                <span className="text-purple-400 text-[10px]">★</span>
                                                <span className="text-white/65 text-[11px] font-semibold">{item.rating}</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col justify-center h-full min-h-[160px]">
                                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/65 mb-3 tracking-tight group-hover:from-purple-200 group-hover:to-purple-400/40 transition-all duration-500">{item.value}</div>
                                        <div className="text-white/50 text-xs leading-relaxed">{item.desc}<br />{item.sub}</div>
                                        <div className="flex items-center gap-1.5 mt-3">
                                            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-[8px] group-hover:bg-purple-500/30 transition-colors">✦</div>
                                            <span className="text-white/50 text-[10px] font-medium">{item.label}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

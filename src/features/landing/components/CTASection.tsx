import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { AnimateOnScroll } from '../LandingPage';

export const CTASection = () => {
    return (
        <section className="py-20 md:py-28 bg-[#080010] relative overflow-hidden">
            {/* Purple glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] animate-glowPulse"></div>
            <div className="absolute top-1/2 left-[30%] w-[200px] h-[200px] bg-violet-600/5 rounded-full blur-[80px] animate-glowPulse delay-300"></div>

            <div className="container mx-auto px-5 sm:px-8 max-w-4xl relative z-10">
                <AnimateOnScroll className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-5">
                        <span className="tracking-widest uppercase">Early Access</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                        Ready to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300 italic">Dominate</span>
                        <br />
                        Every Match?
                    </h2>
                    <p className="text-white/55 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
                        Join 2,400+ cricket enthusiasts already on the waitlist. Be the first to access the future of cricket intelligence when we launch.
                    </p>

                    {/* Email + button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full sm:flex-1 pl-5 pr-4 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all duration-300"
                        />
                        <button className="w-full sm:w-auto group px-7 py-3.5 bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 text-sm whitespace-nowrap">
                            <span>Join Waitlist</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-wrap items-center justify-center gap-5 text-white/45 text-[11px]">
                        <div className="flex items-center gap-1.5">
                            <Shield className="w-3 h-3 text-purple-400/80" />
                            <span>No spam, ever</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-purple-400/80" />
                            <span>Unsubscribe anytime</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-purple-400/80" />
                            <span>Free during beta</span>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

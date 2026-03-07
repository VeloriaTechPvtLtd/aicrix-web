import { useEffect, useRef, useState } from 'react';
import { AnimateOnScroll } from '../LandingPage';

const stats = [
    { value: 50000, suffix: '+', label: 'Global Community', desc: 'Cricket fans using our platform', prefix: '' },
    { value: 92, suffix: '%', label: 'Prediction Accuracy', desc: 'Verified across 10,000+ matches', prefix: '' },
    { value: 200, suffix: 'K+', label: 'Data Points', desc: 'Real-time match intelligence', prefix: '' },
];

function useCountUp(end: number, duration: number = 2200, start: boolean = false) {
    const [count, setCount] = useState(0);
    const frameRef = useRef(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) frameRef.current = requestAnimationFrame(animate);
        };
        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [end, duration, start]);
    return count;
}

function StatItem({ value, suffix, label, desc, prefix, inView, index }: { value: number; suffix: string; label: string; desc: string; prefix: string; inView: boolean; index: number }) {
    const count = useCountUp(value, 2200, inView);
    return (
        <AnimateOnScroll delay={index * 200} className="text-center py-6 md:py-8 group">
            <div className="text-white/55 text-xs font-medium tracking-widest uppercase mb-3 group-hover:text-purple-400/70 transition-colors duration-300">{label}</div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 tabular-nums tracking-tight">
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <div className="text-white/45 text-xs font-light">{desc}</div>
        </AnimateOnScroll>
    );
}

export const StatsSection = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-16 md:py-24 bg-[#080010] relative overflow-hidden">
            {/* Glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1100px] h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600/[0.03] rounded-full blur-[80px]"></div>

            <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-white/[0.05]">
                    {stats.map((stat, i) => <StatItem key={i} {...stat} inView={inView} index={i} />)}
                </div>
            </div>
        </section>
    );
};

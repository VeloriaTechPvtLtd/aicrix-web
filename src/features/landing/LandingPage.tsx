'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import './landing.css';
import { HeroSection } from './components/HeroSection';
import { TickerSection } from './components/TickerSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AnalysisSection } from './components/AnalysisSection';
import { CompareSection } from './components/CompareSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

/** Legacy export for StatsSection/TestimonialsSection/CTASection if used elsewhere; uses .reveal + observer. */
export function AnimateOnScroll({ children, className = '', delay: _delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setMobileOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const closeAndGo = () => setMobileOpen(false);

  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <Link href="/" className="nav-logo" onClick={closeAndGo}>AI<span>CRIX</span></Link>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How it Works</a></li>
        <li><a href="#analysis">Analysis</a></li>
        <li><a href="#download">Get App</a></li>
        <li><a href="#download" className="nav-cta inline-flex items-center gap-1">View Predictions <ArrowRight className="w-3.5 h-3.5" /></a></li>
      </ul>
      <button
        type="button"
        className="nav-mobile-toggle"
        onClick={() => setMobileOpen((o) => !o)}
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <a href="#features" onClick={closeAndGo}>Features</a>
        <a href="#how" onClick={closeAndGo}>How it Works</a>
        <a href="#analysis" onClick={closeAndGo}>Analysis</a>
        <a href="#download" onClick={closeAndGo}>Get App</a>
        <a href="#download" className="nav-cta inline-flex items-center gap-1" onClick={closeAndGo}>View Predictions <ArrowRight className="w-3.5 h-3.5" /></a>
      </div>
    </nav>
  );
}

export const LandingPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observerRef.current?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const observer = observerRef.current;
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TickerSection />
        <article aria-label="Features and capabilities">
          <FeaturesSection />
          <HowItWorksSection />
          <AnalysisSection />
          <CompareSection />
        </article>
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sparkles, Smartphone } from 'lucide-react';

const heroScreenshots = [
  {
    src: '/hero/app-overview.png',
    alt: 'AICRIX mobile app — live match overview with win probability and predicted winner',
  },
  {
    src: '/hero/app-team-analysis.png',
    alt: 'AICRIX mobile app — team analysis with recent form and tactical balance',
  },
] as const;

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileLike = window.matchMedia('(max-width: 900px)').matches;

    if (isReducedMotion || !isMobileLike) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroScreenshots.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tagline">
            <Sparkles className="hero-tagline-icon" aria-hidden />
            <span>Revolutionary AI Technology</span>
          </div>
          <h1 className="hero-title">
            AI-Powered
            <br />
            Cricket
            <br />
            Prediction
            <br />
            Platform
          </h1>
          <p className="hero-sub">
            Leverage advanced machine learning and real-time analytics to make data-driven cricket predictions with unmatched accuracy. AICRIX combines cutting-edge AI with expert cricket knowledge.
          </p>
          <div className="hero-btns">
            <Link href="/predictions" className="btn-primary">
              Start Predicting
            </Link>
            <a href="#download" className="btn-outline">
              <Smartphone className="w-4 h-4 shrink-0" aria-hidden />
              Get the App
            </a>
          </div>
          <div className="hero-social-proof">
            <div className="hero-avatars">
              <div className="hero-avatar" aria-hidden />
              <div className="hero-avatar" aria-hidden />
              <div className="hero-avatar" aria-hidden />
            </div>
            <span className="hero-trust-text">Trusted by 10,000+ cricket enthusiasts</span>
          </div>
        </div>

        <div className="hero-app-showcase" aria-label="AICRIX mobile app screenshots">
          <div className="hero-app-showcase-inner">
            {heroScreenshots.map(({ src, alt }, index) => (
              <div
                key={src}
                className={[
                  'hero-phone-frame',
                  index === 1 ? 'hero-phone-frame--offset' : '',
                  index === 0 ? 'hero-phone-frame--tilt-left' : 'hero-phone-frame--tilt-right',
                  index === activeSlide ? 'is-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={494}
                  height={1024}
                  className="hero-app-screenshot"
                  sizes="(max-width: 600px) 42vw, (max-width: 900px) 38vw, 240px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

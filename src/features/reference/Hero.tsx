import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <h1 id="hero-title">
          {"Your "}
          <span>{"AI-powered"}</span>
          <span className="line">{"cricket companion"}</span>
        </h1>
        <p className="hero-capabilities">
          {"Match predictions"}
          <b aria-hidden="true">{"·"}</b>
          {"Playing XI"}
          <b aria-hidden="true">{"·"}</b>
          {"Player insights"}
        </p>
        <div className="stores">
          <a
            className="store-badge google"
            href="https://play.google.com/store/apps/details?id=com.veloria.aicrix&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get AiCrix on Google Play, opens in a new tab"
          >
            <svg aria-hidden="true">
              <use href="#google"></use>
            </svg>
            <span>
              <small>{"GET IT ON"}</small>
              <strong>{"Google Play"}</strong>
            </span>
          </a>
          <a
            className="store-badge"
            href="https://apps.apple.com/in/app/aicrix-ai-cricket-predictions/id6759485224"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download AiCrix on the App Store, opens in a new tab"
          >
            <svg aria-hidden="true">
              <use href="#apple"></use>
            </svg>
            <span>
              <small>{"Download on the"}</small>
              <strong>{"App Store"}</strong>
            </span>
          </a>
        </div>
      </div>
      <div className="hero-stage">
        <div className="hero-phone-set">
          <button
            className="phone-button hero-phone left"
            type="button"
            data-screen="team"
            aria-label="Open Team Analysis screenshot"
          >
            <span className="device-outer">
              <span className="device">
                <Image
                  unoptimized
                  src="/reference/apple-team-analysis-web.webp"
                  width={620}
                  height={1342}
                  alt="AiCrix Team Analysis: Recent team form and tactical balance"
                  loading="eager"
                  decoding="async"
                />
              </span>
            </span>
          </button>
          <button
            className="phone-button hero-phone center"
            type="button"
            data-screen="match"
            aria-label="Open Match Prediction screenshot"
          >
            <span className="device-outer">
              <span className="device">
                <Image
                  unoptimized
                  src="/reference/apple-match-prediction-web.webp"
                  width={620}
                  height={1342}
                  alt="AiCrix Match Prediction: Match win probability, predicted winner and key factors"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </span>
            </span>
          </button>
          <button
            className="phone-button hero-phone right"
            type="button"
            data-screen="player"
            aria-label="Open Player Impact screenshot"
          >
            <span className="device-outer">
              <span className="device">
                <Image
                  unoptimized
                  src="/reference/apple-player-impact-web.webp"
                  width={620}
                  height={1342}
                  alt="AiCrix Player Impact: Expected player output and key performers"
                  loading="eager"
                  decoding="async"
                />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function DownloadBanner() {
  return (
    <section
      className="download-banner download-refined"
      aria-labelledby="download-heading"
    >
      <div className="wrap">
        <div className="download-heading" data-reveal="">
          <h2 id="download-heading">{"Level up your match day"}</h2>
          <p>{"Bring a clearer view of cricket with AiCrix."}</p>
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
      </div>
      <div className="download-panorama">
        <div className="download-phone-trio">
          <button
            className="phone-button download-device trio-left"
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
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </span>
          </button>
          <button
            className="phone-button download-device trio-center"
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
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </span>
          </button>
          <button
            className="phone-button download-device trio-right"
            type="button"
            data-screen="home"
            aria-label="Open The AiCrix home screen screenshot"
          >
            <span className="device-outer">
              <span className="device">
                <Image
                  unoptimized
                  src="/reference/apple-home-live-analytics-web.webp"
                  width={620}
                  height={1342}
                  alt="AiCrix The AiCrix home screen: Live analytics and upcoming match previews"
                  loading="lazy"
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

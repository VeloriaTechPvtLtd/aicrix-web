import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Screens() {
  return (
    <section className="screens-section" aria-labelledby="screens-title">
      <div className="wrap">
        <div className="rail-head" data-reveal="">
          <h2 id="screens-title">
            {"Get closer to the game"}
            <br />
            {" with every screen."}
          </h2>
          <div className="rail-controls">
            <button
              className="round-button"
              type="button"
              data-rail="previous"
              aria-label="Previous app features"
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 12H5m6-7-7 7 7 7"></path>
              </svg>
            </button>
            <button
              className="round-button"
              type="button"
              data-rail="next"
              aria-label="Next app features"
            >
              <svg className="icon arrow" aria-hidden="true">
                <use href="#arrow"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="screen-rail" aria-label="App screen previews">
          <article className="screen-card">
            <div className="screen-card-visual">
              <button
                className="phone-button "
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
            </div>
            <h3>
              <Link href="/guides/match-prediction">
                {"See the story behind the win chances"}
              </Link>
            </h3>
            <p>{"Match Prediction · App Store preview"}</p>
          </article>
          <article className="screen-card">
            <div className="screen-card-visual">
              <button
                className="phone-button "
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
            </div>
            <h3>
              <Link href="/guides/team-analysis">
                {"Understand each team’s recent form"}
              </Link>
            </h3>
            <p>{"Team Analysis · App Store preview"}</p>
          </article>
          <article className="screen-card">
            <div className="screen-card-visual">
              <button
                className="phone-button "
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
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </span>
              </button>
            </div>
            <h3>
              <Link href="/guides/player-prediction">
                {"Look closer at player impact"}
              </Link>
            </h3>
            <p>{"Player Impact · App Store preview"}</p>
          </article>
          <article className="screen-card">
            <div className="screen-card-visual">
              <button
                className="phone-button "
                type="button"
                data-screen="pitch"
                aria-label="Open Pitch & Weather screenshot"
              >
                <span className="device-outer">
                  <span className="device">
                    <Image
                      unoptimized
                      src="/reference/apple-pitch-weather-web.webp"
                      width={620}
                      height={1342}
                      alt="AiCrix Pitch & Weather: Venue conditions, pitch and weather context"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </span>
              </button>
            </div>
            <h3>
              <Link href="/guides/pitch-and-toss">
                {"Bring the conditions into focus"}
              </Link>
            </h3>
            <p>{"Pitch & Weather · App Store preview"}</p>
          </article>
          <article className="screen-card">
            <div className="screen-card-visual">
              <button
                className="phone-button "
                type="button"
                data-screen="toss"
                aria-label="Open Toss Strategy screenshot"
              >
                <span className="device-outer">
                  <span className="device">
                    <Image
                      unoptimized
                      src="/reference/apple-toss-strategy-web.webp"
                      width={620}
                      height={1342}
                      alt="AiCrix Toss Strategy: Toss and innings strategy context"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </span>
              </button>
            </div>
            <h3>
              <Link href="/guides/pitch-and-toss">
                {"See why the toss can matter"}
              </Link>
            </h3>
            <p>{"Toss Strategy · App Store preview"}</p>
          </article>
          <article className="screen-card">
            <div className="screen-card-visual">
              <button
                className="phone-button "
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
            <h3>
              <Link href="/guides/match-prediction">
                {"Keep your next match in view"}
              </Link>
            </h3>
            <p>{"The AiCrix home screen · App Store preview"}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

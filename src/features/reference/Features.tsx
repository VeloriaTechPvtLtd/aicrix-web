import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Features() {
  return (
    <section
      className="features"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="wrap">
        <div className="section-head" data-reveal="">
          <h2 id="features-title">{"More insight. Every part of the game."}</h2>
          <p>
            {"Explore the match, understand the players, and shape your XI."}
          </p>
        </div>
        <div className="feature-layout">
          <div
            className="feature-tabs"
            role="tablist"
            aria-label="Explore AiCrix features"
            aria-orientation="vertical"
            data-reveal=""
          >
            <div className="feature-item active">
              <button
                className="feature-tab"
                type="button"
                role="tab"
                id="tab-match"
                aria-controls="panel-match"
                aria-selected="true"
                tabIndex={0}
                data-feature-tab="match"
              >
                {"Match Prediction"}
              </button>
              <div
                className="feature-copy"
                id="panel-match"
                role="tabpanel"
                aria-labelledby="tab-match"
              >
                <p>
                  {
                    "Understand the win outlook, recent form and key match factors. See the context behind the prediction."
                  }
                </p>
                <Link className="text-link" href="/guides/match-prediction">
                  {"Dive into the details"}
                  <svg className="icon arrow" aria-hidden="true">
                    <use href="#arrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="feature-item ">
              <button
                className="feature-tab"
                type="button"
                role="tab"
                id="tab-player"
                aria-controls="panel-player"
                aria-selected="false"
                tabIndex={-1}
                data-feature-tab="player"
              >
                {"Player Prediction"}
              </button>
              <div
                className="feature-copy"
                id="panel-player"
                role="tabpanel"
                aria-labelledby="tab-player"
                hidden
              >
                <p>
                  {
                    "Look beyond the scorecard. Explore player impact, expected output and the form that could shape the next game."
                  }
                </p>
                <Link className="text-link" href="/guides/player-prediction">
                  {"Dive into the details"}
                  <svg className="icon arrow" aria-hidden="true">
                    <use href="#arrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="feature-item ">
              <button
                className="feature-tab"
                type="button"
                role="tab"
                id="tab-fantasy"
                aria-controls="panel-fantasy"
                aria-selected="false"
                tabIndex={-1}
                data-feature-tab="fantasy"
              >
                {"Fantasy XI"}
              </button>
              <div
                className="feature-copy"
                id="panel-fantasy"
                role="tabpanel"
                aria-labelledby="tab-fantasy"
                hidden
              >
                <p>
                  {
                    "Explore suggested players and captain options. Build your selection with a clearer view of roles, form and conditions."
                  }
                </p>
                <Link className="text-link" href="/guides/fantasy-xi">
                  {"Dive into the details"}
                  <svg className="icon arrow" aria-hidden="true">
                    <use href="#arrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="feature-scene" data-reveal="">
            <div className="scene-glow" aria-hidden="true"></div>
            <div className="feature-visual active" data-feature-visual="match">
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
              <span className="screen-note">
                {"Match Prediction · App Store preview"}
              </span>
            </div>
            <div
              className="feature-visual player-scene"
              data-feature-visual="player"
              hidden
            >
              <Image
                unoptimized
                className="concept-underlay"
                src="/reference/player-intelligence.png"
                width={1536}
                height={1024}
                loading="lazy"
                alt=""
              />
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
              <span className="screen-note">
                {"Player Impact · App Store preview"}
              </span>
            </div>
            <div
              className="feature-visual fantasy-scene"
              data-feature-visual="fantasy"
              hidden
            >
              <Image
                unoptimized
                src="/reference/fantasy-selection.png"
                width={1536}
                height={1024}
                loading="lazy"
                alt="A sculptural cricket selection board with blue jersey pieces and a highlighted captain piece"
              />
              <span className="screen-note">
                {"Fantasy selection · conceptual illustration"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

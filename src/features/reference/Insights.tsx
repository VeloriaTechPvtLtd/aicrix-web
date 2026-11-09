import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Insights() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{"The AiCrix playbook"}</p>
          <h1>{"Go deeper into the game."}</h1>
          <p>
            {
              "Clear guides to match predictions, player insights and your next XI."
            }
          </p>
        </div>
      </section>
      <section className="insights">
        <div className="wrap">
          <div className="filters">
            <div
              className="filter-buttons"
              role="group"
              aria-label="Filter guides"
            >
              <button
                className="filter-button"
                type="button"
                data-filter="All"
                aria-pressed="true"
              >
                {"All"}
              </button>
              <button
                className="filter-button"
                type="button"
                data-filter="Match"
                aria-pressed="false"
              >
                {"Match"}
              </button>
              <button
                className="filter-button"
                type="button"
                data-filter="Players"
                aria-pressed="false"
              >
                {"Players"}
              </button>
              <button
                className="filter-button"
                type="button"
                data-filter="Fantasy"
                aria-pressed="false"
              >
                {"Fantasy"}
              </button>
            </div>
            <label>
              <span className="sr-only">{"Search guides"}</span>
              <input
                className="guide-search"
                id="guide-search"
                type="search"
                placeholder="Search the playbook…"
                autoComplete="off"
              />
            </label>
          </div>
          <span
            className="sr-only"
            id="guide-status"
            role="status"
            aria-live="polite"
          >
            {"6 guides shown"}
          </span>
          <div className="guide-grid">
            <article className="guide-card" data-category="Match">
              <Link href="/guides/match-prediction">
                <div className="guide-cover">
                  <span className="cover-device">
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
                </div>
                <span className="guide-category">
                  {"Match · Product guide"}
                </span>
                <h2>{"Reading a match prediction"}</h2>
                <p>
                  {
                    "Use win probability and its supporting factors to understand a match outlook, while keeping the uncertainty of cricket in view."
                  }
                </p>
              </Link>
            </article>
            <article className="guide-card" data-category="Players">
              <Link href="/guides/player-prediction">
                <div className="guide-cover">
                  <span className="cover-device">
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
                </div>
                <span className="guide-category">
                  {"Players · Product guide"}
                </span>
                <h2>{"Understanding player impact"}</h2>
                <p>
                  {
                    "Use Player Impact to explore expected contribution, then bring in the player’s role, recent form, and match situation."
                  }
                </p>
              </Link>
            </article>
            <article className="guide-card" data-category="Fantasy">
              <Link href="/guides/fantasy-xi">
                <div className="guide-cover">
                  <Image
                    unoptimized
                    className="art"
                    src="/reference/fantasy-selection.png"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    alt="Cricket selection board illustration"
                  />
                </div>
                <span className="guide-category">
                  {"Fantasy · Product guide"}
                </span>
                <h2>{"Choosing a Fantasy XI"}</h2>
                <p>
                  {
                    "Use suggested players and captain options as a starting point for a considered selection across both teams."
                  }
                </p>
              </Link>
            </article>
            <article className="guide-card" data-category="Match">
              <Link href="/guides/playing-xi">
                <div className="guide-cover">
                  <Image
                    unoptimized
                    className="art"
                    src="/reference/fantasy-selection.png"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    alt="Cricket selection board illustration"
                  />
                </div>
                <span className="guide-category">
                  {"Match · Product guide"}
                </span>
                <h2>{"Projected and confirmed Playing XI"}</h2>
                <p>
                  {
                    "Understand the difference between a projected lineup and the team officially announced for the match."
                  }
                </p>
              </Link>
            </article>
            <article className="guide-card" data-category="Match">
              <Link href="/guides/team-analysis">
                <div className="guide-cover">
                  <span className="cover-device">
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
                </div>
                <span className="guide-category">
                  {"Match · Product guide"}
                </span>
                <h2>{"Reading team analysis"}</h2>
                <p>
                  {
                    "Put recent results and tactical balance together to understand a team’s strengths, gaps, and possible matchups."
                  }
                </p>
              </Link>
            </article>
            <article className="guide-card" data-category="Match">
              <Link href="/guides/pitch-and-toss">
                <div className="guide-cover">
                  <span className="cover-device">
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
                </div>
                <span className="guide-category">
                  {"Match · Product guide"}
                </span>
                <h2>{"Understanding pitch and toss"}</h2>
                <p>
                  {
                    "Read pitch, weather, and toss information as connected parts of the match context."
                  }
                </p>
              </Link>
            </article>
          </div>
          <p id="guide-empty" className="guide-empty" hidden>
            {"No guides match your search. Try a different word or category."}
          </p>
        </div>
      </section>
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
    </main>
  );
}

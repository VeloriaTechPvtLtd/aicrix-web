import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function MatchPredictionGuide() {
  return (
    <main id="main-content">
      <article>
        <header className="article-intro">
          <div className="wrap">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">{"Home"}</Link>
              <span aria-hidden="true">{"/"}</span>
              <Link href="/insights">{"Insights"}</Link>
              <span aria-hidden="true">{"/"}</span>
              <span aria-current="page">{"Reading a match prediction"}</span>
            </nav>
            <p className="eyebrow">{"AiCrix product guide"}</p>
            <h1>{"Reading a match prediction"}</h1>
            <p>
              {
                "Use win probability and its supporting factors to understand a match outlook, while keeping the uncertainty of cricket in view."
              }
            </p>
            <div className="article-visual">
              <div>
                <h2>{"Match Prediction"}</h2>
                <p>{"Explore the details in AiCrix."}</p>
                <p className="small-note">
                  {"Official App Store preview."}
                  <br />
                  {" Match information is illustrative."}
                </p>
              </div>
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
          </div>
        </header>
        <div className="wrap article-layout">
          <nav className="article-nav" aria-label="On this page">
            <p>{"In this guide"}</p>
            <a href="#start-with-probability">{"Start with the probability"}</a>
            <a href="#read-the-reasons">{"Read the reasons"}</a>
            <a href="#keep-context-current">{"Keep the context in view"}</a>
            <a href="#questions">{"Common questions"}</a>
          </nav>
          <div className="article-body">
            <section id="start-with-probability">
              <h2>{"Start with the probability"}</h2>
              <p>
                {
                  "Win probability is an estimate of how likely an outcome is. A higher percentage indicates the team favored by that estimate. It does not make an unexpected result impossible or promise a particular winner."
                }
              </p>
              <ul>
                <li>
                  {
                    "Check that the teams and match shown are the ones you intend to assess."
                  }
                </li>
                <li>
                  {"Read the percentage together with the predicted winner."}
                </li>
              </ul>
            </section>
            <section id="read-the-reasons">
              <h2>{"Read the reasons"}</h2>
              <p>
                {
                  "AiCrix places key factors alongside the match outlook. Use those explanations to understand the reasoning behind the number. Team form, the venue, and match conditions provide context, but each is only part of the picture."
                }
              </p>
              <ul>
                <li>
                  {
                    "Look for factors that support the outlook and factors that could challenge it."
                  }
                </li>
              </ul>
            </section>
            <section id="keep-context-current">
              <h2>{"Keep the context in view"}</h2>
              <p>
                {
                  "Treat a preview as a snapshot. A changed lineup or different conditions can make an earlier assessment less useful. Check the match details available to you before carrying an expectation forward."
                }
              </p>
            </section>
            <section id="questions">
              <h2>{"Common questions"}</h2>
              <div className="article-faq">
                <details>
                  <summary>{"Does the favored team always win?"}</summary>
                  <p>
                    {
                      "No. An estimate describes uncertainty; an upset remains a possible outcome."
                    }
                  </p>
                </details>
                <details>
                  <summary>
                    {"Should I focus only on the largest percentage?"}
                  </summary>
                  <p>
                    {
                      "Read the supporting factors too, and check how relevant the displayed context is to the match."
                    }
                  </p>
                </details>
              </div>
            </section>
            <Link className="primary" href="/download">
              {"Explore AiCrix"}
              <svg className="icon arrow" aria-hidden="true">
                <use href="#arrow"></use>
              </svg>
            </Link>
          </div>
        </div>
      </article>
      <section className="related">
        <div className="wrap">
          <h2>{"Keep exploring."}</h2>
          <div className="guide-grid">
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
        </div>
      </section>
    </main>
  );
}

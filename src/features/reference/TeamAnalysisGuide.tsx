import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function TeamAnalysisGuide() {
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
              <span aria-current="page">{"Reading team analysis"}</span>
            </nav>
            <p className="eyebrow">{"AiCrix product guide"}</p>
            <h1>{"Reading team analysis"}</h1>
            <p>
              {
                "Put recent results and tactical balance together to understand a team’s strengths, gaps, and possible matchups."
              }
            </p>
            <div className="article-visual">
              <div>
                <h2>{"Team Analysis"}</h2>
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
          </div>
        </header>
        <div className="wrap article-layout">
          <nav className="article-nav" aria-label="On this page">
            <p>{"In this guide"}</p>
            <a href="#read-recent-team-form">
              {"Read recent form with context"}
            </a>
            <a href="#explore-tactical-balance">{"Explore tactical balance"}</a>
            <a href="#connect-analysis-to-match">{"Connect it to the match"}</a>
            <a href="#questions">{"Common questions"}</a>
          </nav>
          <div className="article-body">
            <section id="read-recent-team-form">
              <h2>{"Read recent form with context"}</h2>
              <p>
                {
                  "Recent team form shows a sequence of results. It can reveal a run of wins or losses, but the sequence alone does not explain the opposition, the venue, or how those matches unfolded."
                }
              </p>
              <ul>
                <li>
                  {
                    "Use the results as a starting point for questions about the team."
                  }
                </li>
                <li>
                  {
                    "Consider whether the earlier matches resemble the one you are assessing."
                  }
                </li>
              </ul>
            </section>
            <section id="explore-tactical-balance">
              <h2>{"Explore tactical balance"}</h2>
              <p>
                {
                  "AiCrix’s Team Analysis screen includes tactical balance across aspects of the side. Read the labels around the comparison before interpreting its shape. A larger area on a visual is meaningful only in relation to the measure it represents."
                }
              </p>
              <ul>
                <li>
                  {"Look for strengths and dependence on particular roles."}
                </li>
                <li>
                  {
                    "Compare complementary qualities as well as obvious strengths."
                  }
                </li>
              </ul>
            </section>
            <section id="connect-analysis-to-match">
              <h2>{"Connect it to the match"}</h2>
              <p>
                {
                  "Bring the likely lineup and conditions into the comparison. A strength that suits one surface or opponent may matter less in another match. Use team analysis to understand possibilities without treating it as a final result."
                }
              </p>
            </section>
            <section id="questions">
              <h2>{"Common questions"}</h2>
              <div className="article-faq">
                <details>
                  <summary>
                    {"Does a winning streak guarantee another win?"}
                  </summary>
                  <p>
                    {
                      "No. A result sequence describes past matches; the next match brings its own circumstances."
                    }
                  </p>
                </details>
                <details>
                  <summary>
                    {"Does a tactical chart identify the winner?"}
                  </summary>
                  <p>
                    {
                      "It summarizes aspects of team balance. Combine it with the match outlook and supporting context."
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
          </div>
        </div>
      </section>
    </main>
  );
}

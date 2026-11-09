import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function PlayerPredictionGuide() {
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
              <span aria-current="page">{"Understanding player impact"}</span>
            </nav>
            <p className="eyebrow">{"AiCrix product guide"}</p>
            <h1>{"Understanding player impact"}</h1>
            <p>
              {
                "Use Player Impact to explore expected contribution, then bring in the player’s role, recent form, and match situation."
              }
            </p>
            <div className="article-visual">
              <div>
                <h2>{"Player Impact"}</h2>
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
          </div>
        </header>
        <div className="wrap article-layout">
          <nav className="article-nav" aria-label="On this page">
            <p>{"In this guide"}</p>
            <a href="#understand-expected-output">
              {"Know what output represents"}
            </a>
            <a href="#add-role-and-form">{"Add form and role"}</a>
            <a href="#allow-for-player-uncertainty">
              {"Allow for different outcomes"}
            </a>
            <a href="#questions">{"Common questions"}</a>
          </nav>
          <div className="article-body">
            <section id="understand-expected-output">
              <h2>{"Know what output represents"}</h2>
              <p>
                {
                  "Expected output is a projection of a player’s contribution using the metric shown on the screen. Before comparing players, check what the value measures. Runs, wickets, and other measures describe different things, so a number needs its label."
                }
              </p>
              <ul>
                <li>
                  {"Compare values only when the measure and context match."}
                </li>
                <li>{"Read the player’s role alongside the estimate."}</li>
              </ul>
            </section>
            <section id="add-role-and-form">
              <h2>{"Add form and role"}</h2>
              <p>
                {
                  "AiCrix’s Player Impact view brings expected output and key performers together. Recent form helps frame an outlook, while batting position and bowling responsibilities help explain opportunity."
                }
              </p>
              <ul>
                <li>
                  {
                    "Consider whether the player is likely to have the role your assessment assumes."
                  }
                </li>
                <li>
                  {
                    "Check lineup information before relying on a projected contribution."
                  }
                </li>
              </ul>
            </section>
            <section id="allow-for-player-uncertainty">
              <h2>{"Allow for different outcomes"}</h2>
              <p>
                {
                  "A strong outlook can still lead to a quiet match. A batter may face few deliveries; a bowler may have fewer chances than expected. Use the prediction to ask better questions, then reassess when the context changes."
                }
              </p>
            </section>
            <section id="questions">
              <h2>{"Common questions"}</h2>
              <div className="article-faq">
                <details>
                  <summary>
                    {"Is expected output the player’s final score?"}
                  </summary>
                  <p>
                    {
                      "No. It is an estimate of potential contribution, and its meaning depends on the displayed metric."
                    }
                  </p>
                </details>
                <details>
                  <summary>
                    {"Can I compare players from different roles?"}
                  </summary>
                  <p>
                    {
                      "Start with the measure and match context. Batting and bowling contributions may need different interpretations."
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
          </div>
        </div>
      </section>
    </main>
  );
}

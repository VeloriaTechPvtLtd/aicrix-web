import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function PitchAndTossGuide() {
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
              <span aria-current="page">{"Understanding pitch and toss"}</span>
            </nav>
            <p className="eyebrow">{"AiCrix product guide"}</p>
            <h1>{"Understanding pitch and toss"}</h1>
            <p>
              {
                "Read pitch, weather, and toss information as connected parts of the match context."
              }
            </p>
            <div className="article-visual">
              <div>
                <h2>{"Pitch & Weather"}</h2>
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
          </div>
        </header>
        <div className="wrap article-layout">
          <nav className="article-nav" aria-label="On this page">
            <p>{"In this guide"}</p>
            <a href="#start-with-the-surface">{"Start with the surface"}</a>
            <a href="#consider-match-weather">
              {"Bring weather into the picture"}
            </a>
            <a href="#interpret-toss-strategy">
              {"Interpret the toss decision"}
            </a>
            <a href="#questions">{"Common questions"}</a>
          </nav>
          <div className="article-body">
            <section id="start-with-the-surface">
              <h2>{"Start with the surface"}</h2>
              <p>
                {
                  "The Pitch & Weather view gives context for how conditions may influence play. Read surface information alongside the venue and environmental details shown. A description suggests possibilities; the pitch’s behavior becomes clearer as the match unfolds."
                }
              </p>
              <ul>
                <li>
                  {
                    "Consider which batting and bowling roles may suit the described conditions."
                  }
                </li>
                <li>
                  {
                    "Keep a surface description separate from certainty about the result."
                  }
                </li>
              </ul>
            </section>
            <section id="consider-match-weather">
              <h2>{"Bring weather into the picture"}</h2>
              <p>
                {
                  "Temperature, humidity, wind, and possible dew are contextual details to consider together. Check the information for the relevant match and time. A general venue description may not capture the day’s conditions."
                }
              </p>
              <ul>
                <li>
                  {
                    "Use weather context to question assumptions about batting or bowling."
                  }
                </li>
                <li>{"Reassess if conditions differ from the preview."}</li>
              </ul>
            </section>
            <section id="interpret-toss-strategy">
              <h2>{"Interpret the toss decision"}</h2>
              <p>
                {
                  "Toss & Strategy explores the possible influence of batting or bowling first. Read any indicated advantage with conditions and team composition in mind. The benefit of a captain’s choice depends on how the match develops."
                }
              </p>
            </section>
            <section id="questions">
              <h2>{"Common questions"}</h2>
              <div className="article-faq">
                <details>
                  <summary>{"Does winning the toss decide the match?"}</summary>
                  <p>
                    {
                      "No. It gives one captain the choice of batting or bowling first; performance and conditions still matter."
                    }
                  </p>
                </details>
                <details>
                  <summary>
                    {"Should a pitch preview be treated as fixed?"}
                  </summary>
                  <p>
                    {
                      "No. Treat it as context for that assessment and revisit it when more relevant information is available."
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

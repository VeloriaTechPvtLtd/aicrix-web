import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function FantasyXiGuide() {
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
              <span aria-current="page">{"Choosing a Fantasy XI"}</span>
            </nav>
            <p className="eyebrow">{"AiCrix product guide"}</p>
            <h1>{"Choosing a Fantasy XI"}</h1>
            <p>
              {
                "Use suggested players and captain options as a starting point for a considered selection across both teams."
              }
            </p>
            <div className="article-visual is-art">
              <Image
                unoptimized
                className="article-art"
                src="/reference/fantasy-selection.png"
                width={1536}
                height={1024}
                alt="A conceptual cricket selection board with jersey pieces"
              />
              <h2>
                {"Give every selection"}
                <br />
                {" a little more thought."}
              </h2>
            </div>
          </div>
        </header>
        <div className="wrap article-layout">
          <nav className="article-nav" aria-label="On this page">
            <p>{"In this guide"}</p>
            <a href="#understand-fantasy-selection">
              {"Understand the selection"}
            </a>
            <a href="#balance-roles-and-opportunity">
              {"Balance roles and opportunity"}
            </a>
            <a href="#check-your-final-selection">
              {"Check before you settle"}
            </a>
            <a href="#questions">{"Common questions"}</a>
          </nav>
          <div className="article-body">
            <section id="understand-fantasy-selection">
              <h2>{"Understand the selection"}</h2>
              <p>
                {
                  "A Fantasy XI combines players from the two sides in a match. AiCrix provides selection guidance through suggested players and captain options, helping you think through a team with space for your own judgment."
                }
              </p>
              <ul>
                <li>
                  {
                    "Keep the match and player pool consistent while making choices."
                  }
                </li>
                <li>
                  {
                    "Separate a fantasy selection from either side’s actual Playing XI."
                  }
                </li>
              </ul>
            </section>
            <section id="balance-roles-and-opportunity">
              <h2>{"Balance roles and opportunity"}</h2>
              <p>
                {
                  "Review how the players might contribute. Similar roles can leave other opportunities overlooked. Consider expected involvement, recent form, and conditions alongside each suggestion."
                }
              </p>
              <ul>
                <li>
                  {
                    "Look at the balance between batting, bowling, and all-round contributions."
                  }
                </li>
                <li>
                  {
                    "Review captain options in the context of each player’s likely role."
                  }
                </li>
              </ul>
            </section>
            <section id="check-your-final-selection">
              <h2>{"Check before you settle"}</h2>
              <p>
                {
                  "Revisit the selection when lineup information becomes clearer. A projected player may not appear in the confirmed team. If you use a separate fantasy contest service, check that service’s eligibility, selection, and captain rules."
                }
              </p>
            </section>
            <section id="questions">
              <h2>{"Common questions"}</h2>
              <div className="article-faq">
                <details>
                  <summary>{"Does AiCrix host the fantasy contest?"}</summary>
                  <p>
                    {
                      "No. The features described here support player selection; they do not host contests."
                    }
                  </p>
                </details>
                <details>
                  <summary>{"Is a suggested XI a guaranteed result?"}</summary>
                  <p>
                    {
                      "No. Player involvement and performance remain uncertain, even after teams are confirmed."
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

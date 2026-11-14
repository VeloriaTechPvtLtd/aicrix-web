import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { playingXiRevisions } from "@/content/guides/playing-xi-revisions";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function PlayingXiGuide() {
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
              <span aria-current="page">
                {"Projected and confirmed Playing XI"}
              </span>
            </nav>
            <p className="eyebrow">{"AiCrix product guide"}</p>
            <h1>{"Projected and confirmed Playing XI"}</h1>
            <p>
              {
                "Understand the difference between a projected lineup and the team officially announced for the match."
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
            <a href="#recognize-lineup-status">{"Recognize the status"}</a>
            <a href="#read-lineup-roles">{"Read the roles"}</a>
            <a href="#revisit-connected-outlooks">
              {"Revisit connected predictions"}
            </a>
            <a href="#lineup-revisions">{"Late changes and alert timing"}</a>
            <a href="#questions">{"Common questions"}</a>
          </nav>
          <div className="article-body">
            <section id="recognize-lineup-status">
              <h2>{"Recognize the status"}</h2>
              <p>
                {
                  "A projected Playing XI estimates the eleven players one team may select. A confirmed Playing XI is the lineup officially announced for that match. Read the status before using the names."
                }
              </p>
              <ul>
                <li>
                  {
                    "Treat a projection as provisional until an official lineup is available."
                  }
                </li>
                <li>
                  {
                    "Keep each team’s eleven separate when reviewing the selection."
                  }
                </li>
              </ul>
            </section>
            <section id="read-lineup-roles">
              <h2>{"Read the roles"}</h2>
              <p>
                {
                  "Use the lineup to understand the mix of players and likely responsibilities. Wicketkeeping, batting depth, and bowling options provide context for team analysis and individual outlooks. Selection alone does not tell you exactly how a player will be used."
                }
              </p>
              <ul>
                <li>
                  {"Look beyond inclusion to the role a player might have."}
                </li>
                <li>
                  {"Consider how one change affects the rest of the side."}
                </li>
              </ul>
            </section>
            <section id="revisit-connected-outlooks">
              <h2>{"Revisit connected predictions"}</h2>
              <p>
                {
                  "A lineup change can alter the assumptions behind a match prediction or fantasy selection. Return to those views with the updated information. An official announcement confirms selection; it does not guarantee a particular performance."
                }
              </p>
            </section>
            <section id="lineup-revisions">
              <h2>Late changes and alert timing</h2>
              <p>Read the source publication time, the lineup version and the time an alert reached you separately. A new notification does not necessarily mean a new selection.</p>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                h2: ({ children }) => <h3>{children}</h3>,
                table: ({ children }) => <div className="table-scroll" role="region" aria-label="Lineup revision table" tabIndex={0}><table>{children}</table></div>,
              }}>{playingXiRevisions}</ReactMarkdown>
            </section>
            <section id="questions">
              <h2>{"Common questions"}</h2>
              <div className="article-faq">
                <details>
                  <summary>
                    {"Can the projected XI differ from the official team?"}
                  </summary>
                  <p>
                    {
                      "Yes. A projection can change as selection decisions and match information become clearer."
                    }
                  </p>
                </details>
                <details>
                  <summary>
                    {"Is a Playing XI the same as a Fantasy XI?"}
                  </summary>
                  <p>
                    {
                      "No. A Playing XI belongs to one team. A Fantasy XI draws players across both sides."
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
          </div>
        </div>
      </section>
    </main>
  );
}

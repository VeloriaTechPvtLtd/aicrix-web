import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Download() {
  return (
    <main id="main-content">
      <section className="download-page">
        <div className="wrap download-page-grid">
          <div>
            <Image
              unoptimized
              className="app-icon"
              src="/reference/aicrix-official-app-icon-google.png"
              width={61}
              height={61}
              alt="AiCrix app icon"
            />
            <h1>
              {"Your match day."}
              <span>{"With more insight."}</span>
            </h1>
            <p>
              {
                "Match predictions. Player insights. Your next XI. Take a clearer view of cricket with you."
              }
            </p>
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
            <span className="app-pill">{"Available on iOS and Android"}</span>
            <p
              className="small-note"
              style={{ marginTop: "23px" } as React.CSSProperties}
            >
              {
                "Availability, in-app purchases and device requirements are listed in your app store."
              }
            </p>
          </div>
          <div className="download-page-visual">
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
            <span
              className="screen-note"
              style={
                { position: "absolute", bottom: "0" } as React.CSSProperties
              }
            >
              {"Official App Store preview"}
            </span>
          </div>
        </div>
      </section>
      <section className="wrap download-faq">
        <h2>{"A few useful answers."}</h2>
        <details>
          <summary>{"Where can I download AiCrix?"}</summary>
          <p>
            {
              "Use the App Store button for iPhone or the Google Play button for Android. Both buttons take you directly to the official AiCrix listing."
            }
          </p>
        </details>
        <details>
          <summary>{"Are the screenshots showing today’s matches?"}</summary>
          <p>
            {
              "The screens on this website are the official store previews. Their match details are illustrative. Open the app to explore the information available there."
            }
          </p>
        </details>
        <details>
          <summary>{"Are predictions guaranteed?"}</summary>
          <p>
            {
              "No. Predictions describe an estimated outlook. Team announcements, conditions and the game itself can change what happens."
            }
          </p>
        </details>
        <details>
          <summary>{"Where can I get help with my account?"}</summary>
          <p>
            {"Visit our "}
            <Link className="text-link" href="/contact-us">
              {"support page"}
            </Link>
            {" for the official contact details and account-help links."}
          </p>
        </details>
      </section>
    </main>
  );
}

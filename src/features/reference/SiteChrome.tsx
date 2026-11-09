import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="AiCrix home">
          <Image
            unoptimized
            src="/reference/aicrix-official-app-icon-google.png"
            width={34}
            height={34}
            alt=""
          />
          <span>
            <em>{"Ai"}</em>
            {"Crix"}
          </span>
        </Link>
        <nav className="nav" id="main-nav" aria-label="Main navigation">
          <Link href="/insights">{"Insights"}</Link>
          <Link href="/about-us">{"About"}</Link>
          <Link href="/contact-us">{"Contact"}</Link>
        </nav>
        <div className="header-actions">
          <button
            className="menu"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="main-nav"
          >
            <svg className="icon open" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 8h16M4 16h16"></path>
            </svg>
            <svg className="icon close" aria-hidden="true">
              <use href="#x"></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="AiCrix home">
              <Image
                unoptimized
                src="/reference/aicrix-official-app-icon-google.png"
                width={34}
                height={34}
                alt=""
              />
              <span>
                <em>{"Ai"}</em>
                {"Crix"}
              </span>
            </Link>
            <p>
              {"A clearer view of the game."}
              <br />
              {" Your AI cricket companion."}
            </p>
            <button
              className="motion-setting"
              type="button"
              data-motion-toggle=""
              aria-pressed="false"
            >
              {"Reduce motion"}
            </button>
          </div>
          <div className="footer-column">
            <h3>{"Explore"}</h3>
            <Link href="/guides/match-prediction">{"Match predictions"}</Link>
            <Link href="/guides/player-prediction">{"Player insights"}</Link>
            <Link href="/guides/fantasy-xi">{"Fantasy XI"}</Link>
            <Link href="/blog">{"Cricket blog"}</Link>
          </div>
          <div className="footer-column">
            <h3>{"AiCrix"}</h3>
            <Link href="/insights">{"Insights & guides"}</Link>
            <Link href="/download">{"Download the app"}</Link>
            <Link href="/about-us">{"About us"}</Link>
            <Link href="/contact-us">{"Contact support"}</Link>
          </div>
          <div className="footer-column">
            <h3>{"Legal & account"}</h3>
            <Link href="/privacy-policy">{"Privacy policy"}</Link>
            <Link href="/terms-and-conditions">{"Terms & conditions"}</Link>
            <Link href="/data-deletion">{"Data deletion"}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {"© 2026 AiCrix."}
            <br />
            {" A product of VELORIA TECH (OPC) PRIVATE LIMITED."}
          </p>
          <p>
            {
              "App screens are official store previews with illustrative match information."
            }
            <br />
            {
              " Predictions are estimates. Cricket illustrations are conceptual."
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
export function SiteSymbols() {
  return (
    <svg
      aria-hidden="true"
      style={
        {
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden",
        } as React.CSSProperties
      }
      xmlns="http://www.w3.org/2000/svg"
    >
      {"\n"}
      <symbol id="arrow" viewBox="0 0 24 24">
        <path d="M4 12h15M13 5l7 7-7 7"></path>
      </symbol>
      {"\n"}
      <symbol id="x" viewBox="0 0 24 24">
        <path d="m6 6 12 12M18 6 6 18"></path>
      </symbol>
      {"\n"}
      <symbol id="apple" viewBox="-1 -0.5 24 29">
        <path
          fill="currentColor"
          d="M17.5 0c.2 1.8-.6 3.4-1.6 4.5-1 1.1-2.6 1.9-4.2 1.8-.3-1.7.6-3.5 1.6-4.5C14.4.6 16.2-.1 17.5 0ZM21.8 20.6c-.6 1.4-.9 2-1.7 3.3-1.1 1.6-2.7 3.7-4.7 3.7-1.7 0-2.1-1.1-4.3-1.1-2.1 0-2.6 1.1-4.3 1.1-2 0-3.5-1.9-4.6-3.5C-.9 19.4-1.3 12.7.7 9.7c1.4-2.1 3.6-3.2 5.7-3.2 1.8 0 3 1.1 4.6 1.1 1.5 0 2.6-1.1 4.6-1.1 1.7 0 3.4.9 4.8 2.3-4.2 2.3-3.5 8.5.9 10.1l.5 1.7Z"
        ></path>
      </symbol>
      {"\n"}
      <symbol id="google" viewBox="0 0 28 30">
        <path
          fill="#46c6f7"
          d="M2.4 1.3 16.1 15 2.4 28.7C2.1 28.2 2 27.6 2 27V3c0-.6.1-1.2.4-1.7Z"
        ></path>
        <path fill="#63d587" d="m4 .5 17.4 10-5.2 4.4L4 .5Z"></path>
        <path
          fill="#ffd752"
          d="m21.4 10.5 4.7 2.6a2.2 2.2 0 0 1 0 3.8l-4.7 2.6-5.2-4.5 5.2-4.5Z"
        ></path>
        <path fill="#f76f6b" d="M21.4 19.5 4 29.5l12.2-14.4 5.2 4.4Z"></path>
      </symbol>
    </svg>
  );
}
export function ScreenGallery() {
  return (
    <dialog
      className="screen-dialog"
      id="screen-dialog"
      aria-labelledby="screen-title"
      aria-describedby="screen-description"
    >
      <div className="dialog-header">
        <div>
          <h2 id="screen-title">{"Match Prediction"}</h2>
          <p id="screen-description">
            {"Official App Store preview · illustrative match information"}
          </p>
        </div>
        <button
          className="dialog-close"
          type="button"
          aria-label="Close app screenshot"
        >
          <svg className="icon" aria-hidden="true">
            <use href="#x"></use>
          </svg>
        </button>
      </div>
      <div className="dialog-body">
        <Image
          unoptimized
          id="gallery-image"
          src="/reference/apple-match-prediction-web.webp"
          width={620}
          height={1342}
          alt=""
        />
      </div>
      <div className="dialog-footer">
        <div className="gallery-controls">
          <button
            className="gallery-arrow"
            id="gallery-previous"
            type="button"
            aria-label="Previous app screenshot"
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 12H5m6-7-7 7 7 7"></path>
            </svg>
          </button>
          <span className="gallery-counter" aria-live="polite">
            {"1 / 6"}
          </span>
          <button
            className="gallery-arrow"
            id="gallery-next"
            type="button"
            aria-label="Next app screenshot"
          >
            <svg className="icon arrow" aria-hidden="true">
              <use href="#arrow"></use>
            </svg>
          </button>
        </div>
        <a
          className="gallery-source"
          href="https://apps.apple.com/in/app/aicrix-ai-cricket-predictions/id6759485224"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"View on the App Store ↗"}
        </a>
      </div>
    </dialog>
  );
}

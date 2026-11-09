import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Platform() {
  return (
    <section className="section" aria-labelledby="platform-title">
      <div className="wrap">
        <div className="section-head" data-reveal="">
          <h2 id="platform-title">
            {"Your cricket thinking,"}
            <br />
            {" one step ahead."}
          </h2>
          <p>
            {
              "Match outlooks, player insights and team context. All in one place."
            }
          </p>
        </div>
        <div className="platform-panel" data-reveal="">
          <div className="callout-column left">
            <p className="callout">
              {"AI-powered"}
              <br /> <span>{"match predictions"}</span>
            </p>
            <p className="callout">
              {"A closer look at"}
              <br /> <span>{"team form"}</span>
            </p>
            <p className="callout">
              {"Player impact"}
              <br /> <span>{"and expected output"}</span>
            </p>
          </div>
          <div className="platform-center">
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
            <span className="screen-note">{"Official App Store preview"}</span>
          </div>
          <div className="callout-column right">
            <p className="callout">
              <span>{"Pitch, weather"}</span>
              <br />
              {" and toss context"}
            </p>
            <p className="callout">
              {"Explore the"}
              <br /> <span>{"projected Playing XI"}</span>
            </p>
            <p className="callout">
              <span>{"Fantasy picks"}</span>
              <br />
              {" and captain options"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

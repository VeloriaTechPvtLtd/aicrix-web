import Link from "next/link";
import type React from "react";

export function Reviews() {
  return (
    <section
      className="reviews reviews-refined"
      aria-labelledby="reviews-title"
    >
      <div className="wrap">
        {"\n"}
        <div className="section-head" data-reveal="">
          <h2 id="reviews-title">{"Cricket fans endorse AiCrix"}</h2>
        </div>
        {"\n"}
        <div className="review-proof-grid" data-reveal="">
          {"\n"}
          <figure className="review-proof-card">
            {"\n"}
            <figcaption className="review-proof-header">
              <div className="review-proof-author">
                <span className="review-proof-name">{"Pratap Kumar 27"}</span>
                <span className="review-proof-source">
                  {"App Store review"}
                </span>
              </div>
              <span
                className="review-proof-stars"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {"★★★★★"}
              </span>
            </figcaption>
            {"\n"}
            <blockquote>
              {"“The app runs smoothly and loads predictions fast.”"}
            </blockquote>
            {"\n"}
          </figure>
          <figure className="review-proof-card">
            {"\n"}
            <figcaption className="review-proof-header">
              <div className="review-proof-author">
                <span className="review-proof-name">{"Nihal1407"}</span>
                <span className="review-proof-source">
                  {"App Store review"}
                </span>
              </div>
              <span
                className="review-proof-stars"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {"★★★★★"}
              </span>
            </figcaption>
            {"\n"}
            <blockquote>
              {
                "“Watching IPL and using this app makes analysis experience better”"
              }
            </blockquote>
            {"\n"}
          </figure>
          {"\n"}
          <article
            className="review-proof-card review-proof-rating"
            aria-labelledby="app-store-rating-title"
          >
            {"\n"}
            <div className="review-proof-header">
              <div className="review-proof-author">
                <h3 className="review-proof-name" id="app-store-rating-title">
                  {"App Store rating"}
                </h3>
                <p className="review-proof-source">{"India App Store"}</p>
              </div>
              <span className="review-proof-stars" aria-hidden="true">
                {"★★★★★"}
              </span>
            </div>
            {"\n"}
            <div className="review-proof-rating-summary">
              <p className="review-proof-score">
                <strong>{"5.0"}</strong>
                <span>{"/ 5"}</span>
              </p>
              <p className="review-proof-count">{"7 ratings"}</p>
            </div>
            {"\n"}
          </article>
          {"\n"}
        </div>
        {"\n"}
        <div className="review-proof-meta">
          <a
            href="https://apps.apple.com/in/app/aicrix-ai-cricket-predictions/id6759485224"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"View on the India App Store ↗"}
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.veloria.aicrix&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"5K+ downloads · Google Play ↗"}
          </a>
        </div>
        {"\n"}
        <p className="review-proof-date">
          {"Store information checked "}
          <time dateTime="2026-11-08">{"8 November 2026"}</time>
          {". Ratings and downloads may change."}
        </p>
        {"\n"}
      </div>
    </section>
  );
}

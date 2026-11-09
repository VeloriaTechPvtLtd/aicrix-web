import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Introduction() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="wrap">
        <div className="section-head" data-reveal="">
          <h2 id="intro-title">
            {"Cricket intelligence."}
            <br />
            {" Built around your match day."}
          </h2>
        </div>
        <div className="intro-grid">
          <div className="intro-art" data-reveal="">
            <Image
              unoptimized
              src="/reference/player-intelligence.png"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              alt="A cricket helmet, bat and seam ball against an elegant blue performance backdrop"
            />
          </div>
          <div className="intro-points" data-reveal="">
            <h3>
              {"Understand the "}
              <span>{"match"}</span>
              <br />
              {" before the first ball."}
            </h3>
            <h3>
              {"See the "}
              <span>{"players"}</span>
              <br />
              {" behind the numbers."}
            </h3>
            <h3>
              {"Build your "}
              <span>{"Fantasy XI"}</span>
              <br />
              {" with more context."}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

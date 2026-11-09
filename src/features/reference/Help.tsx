import Link from "next/link";
import type React from "react";

export function Help() {
  return (
    <section className="help" aria-labelledby="help-title">
      <div className="wrap help-inner" data-reveal="">
        <h2 id="help-title">
          {"Questions?"}
          <br />
          {" We’re here for you."}
        </h2>
        <div>
          <p>
            {
              "Need help with the app, your account or a prediction? Find the right place to start."
            }
          </p>
          <Link className="primary" href="/contact-us">
            {"Contact the support team"}
            <svg className="icon arrow" aria-hidden="true">
              <use href="#arrow"></use>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

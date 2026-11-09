import type { ReactNode } from "react";
export { ReferenceHome as LandingPage } from "../reference/ReferenceHome";

/** Retained for legacy sections; content remains visible without JavaScript. */
export function AnimateOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

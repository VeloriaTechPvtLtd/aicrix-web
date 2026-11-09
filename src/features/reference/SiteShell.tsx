import type { ReactNode } from "react";
import {
  SiteHeader,
  SiteFooter,
  SiteSymbols,
  ScreenGallery,
} from "./SiteChrome";
import { SiteInteractions } from "./SiteInteractions";

export function SiteShell({
  children,
  home = false,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  return (
    <div className={`site-shell${home ? " home" : ""}`}>
      <SiteSymbols />
      <div className="progress" aria-hidden="true" />
      <SiteHeader />
      {children}
      <SiteFooter />
      <ScreenGallery />
      <SiteInteractions />
    </div>
  );
}

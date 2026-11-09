import { SiteShell } from "./SiteShell";
import { Hero } from "./Hero";
import { Introduction } from "./Introduction";
import { Platform } from "./Platform";
import { Features } from "./Features";
import { World } from "./World";
import { Screens } from "./Screens";
import { Reviews } from "./Reviews";
import { Help } from "./Help";
import { DownloadBanner } from "./DownloadBanner";

export function ReferenceHome() {
  return (
    <SiteShell home>
      <main id="main-content">
        <Hero />
        <Introduction />
        <Platform />
        <Features />
        <World />
        <Screens />
        <Reviews />
        <Help />
        <DownloadBanner />
      </main>
    </SiteShell>
  );
}

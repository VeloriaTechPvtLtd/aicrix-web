"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { screens } from "./screens";

/** Progressive enhancement only: all page copy and links are rendered by Next.js. */
export function SiteInteractions() {
  const pathname = usePathname();
  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".site-shell");
    if (!shell) return;
    const $ = <T extends Element = HTMLElement>(selector: string) =>
      shell.querySelector<T>(selector);
    const $$ = <T extends Element = HTMLElement>(selector: string) =>
      Array.from(shell.querySelectorAll<T>(selector));
    const abort = new AbortController();
    const observers: Array<ResizeObserver | IntersectionObserver> = [];
    const on = (
      target: EventTarget | null,
      event: string,
      callback: (event: Event) => void,
    ) => target?.addEventListener(event, callback, { signal: abort.signal });
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const motion = $<HTMLButtonElement>("[data-motion-toggle]");
    let manuallyPaused = false;
    try {
      manuallyPaused = localStorage.getItem("aicrix-motion") === "paused";
    } catch {
      /* Optional preference storage. */
    }
    let paused = reduced.matches || manuallyPaused;
    const setMotion = (value: boolean, save = false) => {
      if (save) manuallyPaused = value;
      paused = reduced.matches || value;
      root.classList.toggle("motion-paused", paused);
      if (motion) {
        motion.disabled = reduced.matches;
        motion.setAttribute("aria-pressed", String(paused));
        motion.title = reduced.matches
          ? "Animations reduced by your device settings"
          : paused
            ? "Resume animations"
            : "Pause animations";
        motion.textContent = reduced.matches
          ? "Reduced motion enabled"
          : paused
            ? "Enable animations"
            : "Reduce motion";
      }
      if (save)
        try {
          localStorage.setItem("aicrix-motion", value ? "paused" : "on");
        } catch {
          /* Optional preference storage. */
        }
    };
    setMotion(manuallyPaused);
    on(motion, "click", () => setMotion(!paused, true));
    on(reduced, "change", () => setMotion(manuallyPaused));
    let frame = 0;
    const updateScroll = () => {
      $(".site-header")?.classList.toggle("scrolled", scrollY > 25);
      const progress = $(".progress");
      const total = root.scrollHeight - innerHeight;
      if (progress)
        progress.style.transform = `scaleX(${total > 0 ? Math.max(0, Math.min(1, scrollY / total)) : 0})`;
      frame = 0;
    };
    on(window, "scroll", () => {
      if (!frame) frame = requestAnimationFrame(updateScroll);
    });
    updateScroll();
    const menu = $<HTMLButtonElement>(".menu");
    const nav = $("#main-nav");
    const setMenu = (open: boolean, restore = false) => {
      nav?.classList.toggle("open", open);
      menu?.setAttribute("aria-expanded", String(open));
      menu?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) nav?.querySelector("a")?.focus();
      if (restore) menu?.focus();
    };
    on(menu, "click", () =>
      setMenu(menu?.getAttribute("aria-expanded") !== "true"),
    );
    $$("#main-nav a").forEach((link) =>
      on(link, "click", () => setMenu(false)),
    );
    on(window, "resize", () => {
      if (innerWidth > 700) setMenu(false);
    });
    on(document, "keydown", (event) => {
      if (
        (event as KeyboardEvent).key === "Escape" &&
        nav?.classList.contains("open")
      )
        setMenu(false, true);
    });
    on(document, "click", (event) => {
      if (
        nav?.classList.contains("open") &&
        event.target instanceof Element &&
        !event.target.closest(".header-inner")
      )
        setMenu(false);
    });
    const observeSize = (element: Element | null, callback: () => void) => {
      if (!element) return;
      callback();
      if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(callback);
        observer.observe(element);
        observers.push(observer);
      } else on(window, "resize", callback);
    };
    const stage = $(".hero-stage");
    observeSize(stage, () => {
      if (!stage) return;
      const width = stage.clientWidth;
      const scale =
        width < 641
          ? Math.max(0.59, Math.min(0.73, width / 590))
          : Math.min(1, (width - 65) / 1000);
      $(".hero-phone-set")?.style.setProperty("--hero-scale", scale.toFixed(4));
    });
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            if (!paused) entry.target.classList.add("entering");
            observer.unobserve(entry.target);
          }),
        { threshold: 0.09 },
      );
      $$("[data-reveal]").forEach((element) => observer.observe(element));
      observers.push(observer);
    }
    const tabs = $$<HTMLButtonElement>("[data-feature-tab]");
    const activate = (tab: HTMLButtonElement, focus = false) => {
      tabs.forEach((item) => {
        const active = item === tab;
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
        item.closest(".feature-item")?.classList.toggle("active", active);
        const panel = document.getElementById(
          item.getAttribute("aria-controls") || "",
        );
        if (panel) panel.hidden = !active;
      });
      $$("[data-feature-visual]").forEach((visual) => {
        const active = visual.dataset.featureVisual === tab.dataset.featureTab;
        visual.classList.toggle("active", active);
        visual.hidden = !active;
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, index) => {
      on(tab, "click", () => activate(tab));
      on(tab, "keydown", (event) => {
        const key = (event as KeyboardEvent).key;
        const positions: Record<string, number> = {
          ArrowDown: (index + 1) % tabs.length,
          ArrowRight: (index + 1) % tabs.length,
          ArrowUp: (index - 1 + tabs.length) % tabs.length,
          ArrowLeft: (index - 1 + tabs.length) % tabs.length,
          Home: 0,
          End: tabs.length - 1,
        };
        if (positions[key] === undefined) return;
        event.preventDefault();
        activate(tabs[positions[key]], true);
      });
    });
    const rail = $(".screen-rail");
    const previous = $<HTMLButtonElement>('[data-rail="previous"]');
    const next = $<HTMLButtonElement>('[data-rail="next"]');
    if (rail && previous && next) {
      const updateRail = () => {
        previous.disabled = rail.scrollLeft < 5;
        next.disabled =
          rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 5;
      };
      [previous, next].forEach((button, index) =>
        on(button, "click", () => {
          const distance =
            (rail.querySelector(".screen-card")?.getBoundingClientRect()
              .width || 250) + 22;
          rail.scrollBy({
            left: distance * (index ? 1 : -1),
            behavior: paused ? "instant" : "smooth",
          });
        }),
      );
      on(rail, "scroll", updateRail);
      observeSize(rail, updateRail);
    }
    const dialog = $<HTMLDialogElement>("#screen-dialog");
    const galleryImage = $<HTMLImageElement>("#gallery-image");
    let current = 0;
    let trigger: HTMLElement | null = null;
    const renderScreen = (index: number) => {
      current = (index + screens.length) % screens.length;
      const screen = screens[current];
      if (galleryImage) {
        galleryImage.src = screen.src;
        galleryImage.alt = screen.alt;
      }
      const title = $("#screen-title");
      if (title) title.textContent = screen.title;
      const counter = $(".gallery-counter");
      if (counter) counter.textContent = `${current + 1} / ${screens.length}`;
    };
    $$("[data-screen]").forEach((button) =>
      on(button, "click", () => {
        trigger = button;
        const index = screens.findIndex(
          (screen) => screen.key === button.dataset.screen,
        );
        renderScreen(index < 0 ? 0 : index);
        if (dialog?.showModal) {
          document.body.classList.add("dialog-open");
          dialog.showModal();
          $<HTMLButtonElement>(".dialog-close")?.focus();
        } else {
          window.open(screens[current].src, "_blank", "noopener");
        }
      }),
    );
    on($(".dialog-close"), "click", () => dialog?.close());
    on($("#gallery-previous"), "click", () => renderScreen(current - 1));
    on($("#gallery-next"), "click", () => renderScreen(current + 1));
    on(dialog, "keydown", (event) => {
      const key = (event as KeyboardEvent).key;
      if (key === "ArrowLeft" || key === "ArrowRight") {
        event.preventDefault();
        renderScreen(current + (key === "ArrowLeft" ? -1 : 1));
      }
    });
    on(dialog, "click", (event) => {
      if (!dialog || event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const { clientX: x, clientY: y } = event as MouseEvent;
      if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom)
        dialog.close();
    });
    on(dialog, "close", () => {
      document.body.classList.remove("dialog-open");
      trigger?.focus({ preventScroll: true });
    });
    const search = $<HTMLInputElement>("#guide-search");
    const filters = $$<HTMLButtonElement>("[data-filter]");
    const cards = $$("[data-category]");
    let category = "All";
    const filter = () => {
      const query = (search?.value || "").trim().toLocaleLowerCase();
      let count = 0;
      cards.forEach((card) => {
        const visible =
          (category === "All" || card.dataset.category === category) &&
          (card.textContent || "").toLocaleLowerCase().includes(query);
        card.hidden = !visible;
        if (visible) count++;
      });
      const empty = $("#guide-empty");
      if (empty) empty.hidden = count > 0;
      const status = $("#guide-status");
      if (status)
        status.textContent = `${count} ${count === 1 ? "guide" : "guides"} shown`;
    };
    filters.forEach((button) =>
      on(button, "click", () => {
        category = button.dataset.filter || "All";
        filters.forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
        filter();
      }),
    );
    on(search, "input", filter);
    const map = $("[data-cricket-map]");
    const labels = $$<HTMLButtonElement>("[data-world-country]");
    const lands = $$("[data-world-land]");
    let selected: string | null = null;
    const highlight = (code: string | null) =>
      lands.forEach((land) =>
        land.classList.toggle(
          "is-highlighted",
          land.dataset.worldLand === code,
        ),
      );
    const selectCountry = (code: string | null, name = "") => {
      selected = code;
      labels.forEach((item) =>
        item.setAttribute(
          "aria-pressed",
          String(item.dataset.worldCountry === selected),
        ),
      );
      highlight(selected);
      const status = $("[data-world-announcement]");
      if (status)
        status.textContent = code
          ? `${name} highlighted on the world map.`
          : "World view.";
    };
    labels.forEach((label) => {
      const code = label.dataset.worldCountry || null;
      ["pointerenter", "focus"].forEach((event) =>
        on(label, event, () => highlight(code)),
      );
      ["pointerleave", "blur"].forEach((event) =>
        on(label, event, () => highlight(selected)),
      );
      on(label, "click", () =>
        selectCountry(selected === code ? null : code, label.dataset.placeName),
      );
    });
    on(map, "keydown", (event) => {
      if ((event as KeyboardEvent).key === "Escape") selectCountry(null);
    });
    return () => {
      abort.abort();
      observers.forEach((observer) => observer.disconnect());
      cancelAnimationFrame(frame);
      if (dialog?.open) dialog.close();
      document.body.classList.remove("dialog-open");
    };
  }, [pathname]);
  return null;
}

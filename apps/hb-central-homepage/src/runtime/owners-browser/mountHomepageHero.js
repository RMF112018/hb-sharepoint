import { createElement, StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "../homepageHardening.css";

export function mountHomepageHero(container) {
  render(
    createElement(
      StrictMode,
      null,
      createElement(
        "main",
        {
          className: "hb-homepage-main",
          "aria-label": "HB Central homepage hero",
          role: "main",
        },
        createElement("section", { "data-surface": "homepage-hero" }, [
          createElement("h2", { key: "heading" }, "HB Central Homepage Hero"),
          createElement(
            "p",
            { key: "body" },
            "Hero runtime owner is loaded through the browser-safe owner path.",
          ),
        ]),
      ),
    ),
    container,
  );

  return () => {
    unmountComponentAtNode(container);
  };
}

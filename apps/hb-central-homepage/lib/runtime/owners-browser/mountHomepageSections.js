import { createElement, StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "../homepageHardening.css";

export function mountHomepageSections(container) {
  render(
    createElement(
      StrictMode,
      null,
      createElement(
        "main",
        {
          className: "hb-homepage-main",
          "aria-label": "HB Central homepage sections",
          role: "main",
        },
        createElement("section", { "data-surface": "homepage-sections" }, [
          createElement("h2", { key: "heading" }, "HB Central Homepage"),
          createElement(
            "p",
            { key: "body" },
            "Homepage sections runtime owner is loaded through the browser-safe owner path.",
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

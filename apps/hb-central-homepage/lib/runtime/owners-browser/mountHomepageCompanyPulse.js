import { createElement, StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "../homepageHardening.css";

export function mountHomepageCompanyPulse(container) {
  render(
    createElement(
      StrictMode,
      null,
      createElement(
        "main",
        {
          className: "hb-homepage-main",
          "aria-label": "HB Central company pulse",
          role: "main",
        },
        createElement("section", { "data-surface": "homepage-company-pulse" }, [
          createElement("h2", { key: "heading" }, "HB Central Company Pulse"),
          createElement(
            "p",
            { key: "body" },
            "Company pulse updates are mounted through the browser-safe owner entrypoint.",
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

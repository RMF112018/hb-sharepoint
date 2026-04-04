import { createElement, StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "../homepageHardening.css";

export function mountHomepageFeaturedProjects(container) {
  render(
    createElement(
      StrictMode,
      null,
      createElement(
        "main",
        {
          className: "hb-homepage-main",
          "aria-label": "HB Central featured projects",
          role: "main",
        },
        createElement("section", { "data-surface": "homepage-featured-projects" }, [
          createElement("h2", { key: "heading" }, "HB Central Featured Projects"),
          createElement(
            "p",
            { key: "body" },
            "Featured project highlights are available.",
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

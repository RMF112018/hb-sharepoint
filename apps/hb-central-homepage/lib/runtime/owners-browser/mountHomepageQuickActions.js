import { createElement, StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "../homepageHardening.css";

export function mountHomepageQuickActions(container) {
  render(
    createElement(
      StrictMode,
      null,
      createElement(
        "main",
        {
          className: "hb-homepage-main",
          "aria-label": "HB Central quick actions",
          role: "main",
        },
        createElement("section", { "data-surface": "homepage-quick-actions" }, [
          createElement("h2", { key: "heading" }, "HB Central Quick Actions"),
          createElement(
            "p",
            { key: "body" },
            "Quick actions runtime owner is loaded through the browser-safe owner path.",
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

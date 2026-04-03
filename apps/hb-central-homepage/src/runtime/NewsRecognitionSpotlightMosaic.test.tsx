import { render, screen } from "@testing-library/react";
import { NewsRecognitionSpotlightMosaic } from "./NewsRecognitionSpotlightMosaic";
import type { NewsRecognitionSourceModel } from "./newsRecognition";

describe("NewsRecognitionSpotlightMosaic", () => {
  it("renders mixed-stream mosaic entries with heading hierarchy", () => {
    render(<NewsRecognitionSpotlightMosaic />);

    expect(
      screen.getByRole("heading", { name: /news, recognition, and spotlight mosaic/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("news-recognition-mosaic")).toBeInTheDocument();
    expect(screen.getAllByText("News").length).toBeGreaterThan(0);
    expect(screen.getByText("Recognition")).toBeInTheDocument();
  });

  it("degrades gracefully when only a single stream has content", () => {
    const sourceModel: NewsRecognitionSourceModel = {
      news: [],
      recognition: [],
      spotlight: [
        {
          id: "spotlight-only",
          title: "Spotlight only item",
          href: "#spotlight-only",
          summary: "Single-stream fallback coverage.",
          rank: 1,
        },
      ],
    };

    render(<NewsRecognitionSpotlightMosaic sourceModel={sourceModel} />);
    expect(screen.getByText(/spotlight only item/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open .* item/i })).toBeInTheDocument();
  });

  it("renders empty state when no streams have content", () => {
    const sourceModel: NewsRecognitionSourceModel = {
      news: [],
      recognition: [],
      spotlight: [],
    };

    render(<NewsRecognitionSpotlightMosaic sourceModel={sourceModel} />);
    expect(screen.getByText(/no news, recognition, or spotlight items are available/i)).toBeInTheDocument();
  });

  it("marks responsive mosaic layout container", () => {
    render(<NewsRecognitionSpotlightMosaic />);
    const mosaic = screen.getByTestId("news-recognition-mosaic");
    expect(mosaic).toHaveAttribute("data-responsive-contract", "grid-stack");
    expect(mosaic).toHaveClass("hb-grid-mosaic");
  });
});

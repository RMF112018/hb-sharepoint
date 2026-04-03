import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { NewsRecognitionSpotlightMosaic } from "./NewsRecognitionSpotlightMosaic";
describe("NewsRecognitionSpotlightMosaic", function () {
    it("renders mixed-stream mosaic entries with heading hierarchy", function () {
        render(_jsx(NewsRecognitionSpotlightMosaic, {}));
        expect(screen.getByRole("heading", { name: /news, recognition, and spotlight mosaic/i })).toBeInTheDocument();
        expect(screen.getByTestId("news-recognition-mosaic")).toBeInTheDocument();
        expect(screen.getAllByText("News").length).toBeGreaterThan(0);
        expect(screen.getByText("Recognition")).toBeInTheDocument();
    });
    it("degrades gracefully when only a single stream has content", function () {
        var sourceModel = {
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
        render(_jsx(NewsRecognitionSpotlightMosaic, { sourceModel: sourceModel }));
        expect(screen.getByText(/spotlight only item/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /open .* item/i })).toBeInTheDocument();
    });
    it("renders empty state when no streams have content", function () {
        var sourceModel = {
            news: [],
            recognition: [],
            spotlight: [],
        };
        render(_jsx(NewsRecognitionSpotlightMosaic, { sourceModel: sourceModel }));
        expect(screen.getByText(/no news, recognition, or spotlight items are available/i)).toBeInTheDocument();
    });
    it("marks responsive mosaic layout container", function () {
        render(_jsx(NewsRecognitionSpotlightMosaic, {}));
        var mosaic = screen.getByTestId("news-recognition-mosaic");
        expect(mosaic).toHaveAttribute("data-responsive-contract", "grid-stack");
        expect(mosaic).toHaveClass("hb-grid-mosaic");
    });
});
//# sourceMappingURL=NewsRecognitionSpotlightMosaic.test.js.map
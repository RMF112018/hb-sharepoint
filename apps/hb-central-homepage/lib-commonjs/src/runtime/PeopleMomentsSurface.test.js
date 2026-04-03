import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { PeopleMomentsSurface } from "./PeopleMomentsSurface";
describe("PeopleMomentsSurface", function () {
    it("renders people moments heading and content cards", function () {
        render(_jsx(PeopleMomentsSurface, {}));
        expect(screen.getByRole("heading", { name: /people and culture moments/i })).toBeInTheDocument();
        expect(screen.getByTestId("people-moments-grid")).toBeInTheDocument();
    });
    it("renders empty state for zero moments", function () {
        var sourceModel = { items: [] };
        render(_jsx(PeopleMomentsSurface, { sourceModel: sourceModel }));
        expect(screen.getByText(/no people moments are posted yet/i)).toBeInTheDocument();
    });
    it("handles uneven content counts with bounded rendering", function () {
        render(_jsx(PeopleMomentsSurface, { maxItems: 3 }));
        expect(screen.getAllByRole("article")).toHaveLength(3);
    });
    it("applies restrained celebration emphasis and semantic links", function () {
        render(_jsx(PeopleMomentsSurface, {}));
        expect(screen.getAllByText(/celebration/i).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", { name: /open people moment/i }).length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=PeopleMomentsSurface.test.js.map
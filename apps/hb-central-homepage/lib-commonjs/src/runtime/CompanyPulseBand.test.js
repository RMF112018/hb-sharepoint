import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { CompanyPulseBand } from "./CompanyPulseBand";
describe("CompanyPulseBand", function () {
    it("renders pulse heading hierarchy and metric list", function () {
        render(_jsx(CompanyPulseBand, {}));
        expect(screen.getByRole("heading", { name: /company pulse band/i })).toBeInTheDocument();
        expect(screen.getByTestId("company-pulse-list")).toBeInTheDocument();
    });
    it("renders empty state when no metrics are available", function () {
        var sourceModel = { items: [] };
        render(_jsx(CompanyPulseBand, { sourceModel: sourceModel }));
        expect(screen.getByText(/company pulse is waiting for the next update/i)).toBeInTheDocument();
    });
    it("keeps bounded rendering for long lists", function () {
        render(_jsx(CompanyPulseBand, { maxItems: 2 }));
        expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });
    it("uses semantic metric links when destinations are provided", function () {
        render(_jsx(CompanyPulseBand, {}));
        expect(screen.getAllByRole("link", { name: /view .* metric/i }).length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=CompanyPulseBand.test.js.map
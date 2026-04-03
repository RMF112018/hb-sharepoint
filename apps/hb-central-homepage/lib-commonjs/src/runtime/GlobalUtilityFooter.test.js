import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { GlobalUtilityFooter } from "./GlobalUtilityFooter";
describe("GlobalUtilityFooter", function () {
    it("renders heading and utility link navigation", function () {
        render(_jsx(GlobalUtilityFooter, {}));
        expect(screen.getByRole("heading", { name: /global utility footer/i })).toBeInTheDocument();
        expect(screen.getByRole("navigation", { name: /global utility links/i })).toBeInTheDocument();
    });
    it("supports semantic external link behavior", function () {
        render(_jsx(GlobalUtilityFooter, {}));
        var policyLink = screen.getByRole("link", { name: /policy library/i });
        expect(policyLink).toHaveAttribute("target", "_blank");
        expect(policyLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
    it("renders responsive-safe utility link container", function () {
        render(_jsx(GlobalUtilityFooter, {}));
        expect(screen.getByTestId("global-utility-links")).toBeInTheDocument();
    });
});
//# sourceMappingURL=GlobalUtilityFooter.test.js.map
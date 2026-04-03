import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { HomepageCompanyPulse } from "./HomepageCompanyPulse";
describe("HomepageCompanyPulse", function () {
    it("renders the dedicated company pulse runtime surface", function () {
        render(_jsx(HomepageCompanyPulse, {}));
        expect(screen.getByRole("main", { name: /hb central company pulse/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /company pulse band/i })).toBeInTheDocument();
    });
});
//# sourceMappingURL=HomepageCompanyPulse.test.js.map
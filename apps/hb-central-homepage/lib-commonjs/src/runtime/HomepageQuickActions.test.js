import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { HomepageQuickActions } from "./HomepageQuickActions";
describe("HomepageQuickActions", function () {
    it("renders the dedicated quick actions runtime surface", function () {
        render(_jsx(HomepageQuickActions, {}));
        expect(screen.getByRole("main", { name: /hb central quick actions/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /quick actions deck/i })).toBeInTheDocument();
    });
});
//# sourceMappingURL=HomepageQuickActions.test.js.map
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { HomepageShellHero } from "./HomepageShellHero";
describe("HomepageShellHero", function () {
    it("renders dedicated shell/hero surface content", function () {
        render(_jsx(HomepageShellHero, {}));
        expect(screen.getByRole("heading", { name: /hb central homepage shell and hero/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /cinematic hero storyboard/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /open hero priority board/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/homepage hero media frame/i)).toBeInTheDocument();
    });
});
//# sourceMappingURL=HomepageShellHero.test.js.map
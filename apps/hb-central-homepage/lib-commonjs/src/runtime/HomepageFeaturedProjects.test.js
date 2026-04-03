import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { HomepageFeaturedProjects } from "./HomepageFeaturedProjects";
describe("HomepageFeaturedProjects", function () {
    it("renders the dedicated featured projects runtime surface", function () {
        render(_jsx(HomepageFeaturedProjects, {}));
        expect(screen.getByRole("main", { name: /hb central featured projects/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /featured projects showcase/i })).toBeInTheDocument();
    });
});
//# sourceMappingURL=HomepageFeaturedProjects.test.js.map
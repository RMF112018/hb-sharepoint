import { beforeEach, describe, expect, it, vi } from "vitest";
import { mountHomepageCompanyPulse } from "./mountHomepageCompanyPulse";
import { mountHomepageFeaturedProjects } from "./mountHomepageFeaturedProjects";
import { mountHomepageHero } from "./mountHomepageHero";
import { mountHomepageQuickActions } from "./mountHomepageQuickActions";
import { mountHomepageSections } from "./mountHomepageSections";
var _a = vi.hoisted(function () { return ({
    renderMock: vi.fn(),
    unmountComponentAtNodeMock: vi.fn(),
}); }), renderMock = _a.renderMock, unmountComponentAtNodeMock = _a.unmountComponentAtNodeMock;
vi.mock("react-dom", function () { return ({
    render: renderMock,
    unmountComponentAtNode: unmountComponentAtNodeMock,
}); });
describe("per-surface runtime owners", function () {
    beforeEach(function () {
        renderMock.mockClear();
        unmountComponentAtNodeMock.mockClear();
        document.body.innerHTML = "";
    });
    it("mounts and unmounts homepage sections owner", function () {
        var container = document.createElement("div");
        var unmount = mountHomepageSections(container);
        expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
        unmount();
        expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
    });
    it("mounts and unmounts homepage hero owner", function () {
        var container = document.createElement("div");
        var unmount = mountHomepageHero(container);
        expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
        unmount();
        expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
    });
    it("mounts and unmounts featured projects owner", function () {
        var container = document.createElement("div");
        var unmount = mountHomepageFeaturedProjects(container);
        expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
        unmount();
        expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
    });
    it("mounts and unmounts company pulse owner", function () {
        var container = document.createElement("div");
        var unmount = mountHomepageCompanyPulse(container);
        expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
        unmount();
        expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
    });
    it("mounts and unmounts quick actions owner", function () {
        var container = document.createElement("div");
        var unmount = mountHomepageQuickActions(container);
        expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
        unmount();
        expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
    });
});
//# sourceMappingURL=mountOwners.test.js.map
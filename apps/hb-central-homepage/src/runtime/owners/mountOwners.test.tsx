import { beforeEach, describe, expect, it, vi } from "vitest";
import { mountHomepageCompanyPulse } from "./mountHomepageCompanyPulse";
import { mountHomepageFeaturedProjects } from "./mountHomepageFeaturedProjects";
import { mountHomepageHero } from "./mountHomepageHero";
import { mountHomepageQuickActions } from "./mountHomepageQuickActions";
import { mountHomepageSections } from "./mountHomepageSections";

const { renderMock, unmountComponentAtNodeMock } = vi.hoisted(() => ({
  renderMock: vi.fn(),
  unmountComponentAtNodeMock: vi.fn(),
}));

vi.mock("react-dom", () => ({
  render: renderMock,
  unmountComponentAtNode: unmountComponentAtNodeMock,
}));

describe("per-surface runtime owners", () => {
  beforeEach(() => {
    renderMock.mockClear();
    unmountComponentAtNodeMock.mockClear();
    document.body.innerHTML = "";
  });

  it("mounts and unmounts homepage sections owner", () => {
    const container = document.createElement("div");
    const unmount = mountHomepageSections(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });

  it("mounts and unmounts homepage hero owner", () => {
    const container = document.createElement("div");
    const unmount = mountHomepageHero(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });

  it("mounts and unmounts featured projects owner", () => {
    const container = document.createElement("div");
    const unmount = mountHomepageFeaturedProjects(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });

  it("mounts and unmounts company pulse owner", () => {
    const container = document.createElement("div");
    const unmount = mountHomepageCompanyPulse(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });

  it("mounts and unmounts quick actions owner", () => {
    const container = document.createElement("div");
    const unmount = mountHomepageQuickActions(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });
});

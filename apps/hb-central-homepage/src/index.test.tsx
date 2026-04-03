import { beforeEach, describe, expect, it, vi } from "vitest";

const renderMock = vi.fn();
const unmountComponentAtNodeMock = vi.fn();

vi.mock("react-dom", () => ({
  render: renderMock,
  unmountComponentAtNode: unmountComponentAtNodeMock,
}));

describe("homepage mount exports", () => {
  beforeEach(() => {
    renderMock.mockClear();
    unmountComponentAtNodeMock.mockClear();
    document.body.innerHTML = "";
  });

  it("mounts and unmounts dedicated featured projects runtime", async () => {
    const { mountHbCentralHomepageFeaturedProjects } = await import("./index");
    const container = document.createElement("div");
    const unmount = mountHbCentralHomepageFeaturedProjects(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    expect(renderMock).toHaveBeenCalledTimes(1);
    expect(typeof unmount).toBe("function");

    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });

  it("mounts and unmounts dedicated company pulse runtime", async () => {
    const { mountHbCentralHomepageCompanyPulse } = await import("./index");
    const container = document.createElement("div");
    const unmount = mountHbCentralHomepageCompanyPulse(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    expect(renderMock).toHaveBeenCalledTimes(1);
    expect(typeof unmount).toBe("function");

    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });

  it("mounts and unmounts dedicated quick actions runtime", async () => {
    const { mountHbCentralHomepageQuickActions } = await import("./index");
    const container = document.createElement("div");
    const unmount = mountHbCentralHomepageQuickActions(container);

    expect(renderMock).toHaveBeenCalledWith(expect.anything(), container);
    expect(renderMock).toHaveBeenCalledTimes(1);
    expect(typeof unmount).toBe("function");

    unmount();
    expect(unmountComponentAtNodeMock).toHaveBeenCalledWith(container);
  });
});

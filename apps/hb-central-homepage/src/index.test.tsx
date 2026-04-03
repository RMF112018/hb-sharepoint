import { beforeEach, describe, expect, it, vi } from "vitest";

const renderMock = vi.fn();
const unmountMock = vi.fn();
const createRootMock = vi.fn(() => ({
  render: renderMock,
  unmount: unmountMock,
}));

vi.mock("react-dom/client", () => ({
  createRoot: createRootMock,
}));

describe("homepage mount exports", () => {
  beforeEach(() => {
    renderMock.mockClear();
    unmountMock.mockClear();
    createRootMock.mockClear();
    document.body.innerHTML = "";
  });

  it("mounts and unmounts dedicated featured projects runtime", async () => {
    const { mountHbCentralHomepageFeaturedProjects } = await import("./index");
    const container = document.createElement("div");
    const unmount = mountHbCentralHomepageFeaturedProjects(container);

    expect(createRootMock).toHaveBeenCalledWith(container);
    expect(renderMock).toHaveBeenCalledTimes(1);
    expect(typeof unmount).toBe("function");

    unmount();
    expect(unmountMock).toHaveBeenCalledTimes(1);
  });

  it("mounts and unmounts dedicated company pulse runtime", async () => {
    const { mountHbCentralHomepageCompanyPulse } = await import("./index");
    const container = document.createElement("div");
    const unmount = mountHbCentralHomepageCompanyPulse(container);

    expect(createRootMock).toHaveBeenCalledWith(container);
    expect(renderMock).toHaveBeenCalledTimes(1);
    expect(typeof unmount).toBe("function");

    unmount();
    expect(unmountMock).toHaveBeenCalledTimes(1);
  });

  it("mounts and unmounts dedicated quick actions runtime", async () => {
    const { mountHbCentralHomepageQuickActions } = await import("./index");
    const container = document.createElement("div");
    const unmount = mountHbCentralHomepageQuickActions(container);

    expect(createRootMock).toHaveBeenCalledWith(container);
    expect(renderMock).toHaveBeenCalledTimes(1);
    expect(typeof unmount).toBe("function");

    unmount();
    expect(unmountMock).toHaveBeenCalledTimes(1);
  });
});

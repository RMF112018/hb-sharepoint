import { render, screen } from "@testing-library/react";
import { HbCentralHomepageHost } from "./HbCentralHomepageHost";
import { HOMEPAGE_COMPOSITION_MANIFEST } from "./homepageComposition";

describe("HbCentralHomepageHost", () => {
  it("defines the static non-hero composition manifest order for Prompt-07", () => {
    expect(HOMEPAGE_COMPOSITION_MANIFEST.map((entry) => entry.id)).toEqual([
      "people",
      "newsRecognition",
      "personalizedLowerZone",
      "footerGlobalUtility",
    ]);
  });

  it("renders ready-state sections in stable order without optional personalized zone by default", () => {
    render(<HbCentralHomepageHost />);

    const wrappers = screen
      .getAllByTestId(/homepage-section-/)
      .map((node) => node.getAttribute("data-section-id"));

    expect(wrappers).toEqual([
      "people",
      "newsRecognition",
      "footerGlobalUtility",
    ]);
    expect(screen.queryByTestId("homepage-section-hero")).not.toBeInTheDocument();
    expect(screen.queryByTestId("homepage-section-projects")).not.toBeInTheDocument();
    expect(screen.queryByTestId("homepage-section-pulse")).not.toBeInTheDocument();
  });

  it("renders optional personalized lower zone when enabled", async () => {
    render(<HbCentralHomepageHost includePersonalizedLowerZone />);

    expect(screen.getByTestId("homepage-section-personalizedLowerZone")).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { name: /personalized lower zone seam/i }),
    ).toBeInTheDocument();
  });

  it("renders wrappers for each zone type", () => {
    render(<HbCentralHomepageHost includePersonalizedLowerZone />);

    expect(screen.getByTestId("homepage-section-people")).toHaveAttribute("data-zone", "mosaic");
    expect(screen.getByTestId("homepage-section-newsRecognition")).toHaveAttribute("data-zone", "mosaic");
    expect(screen.getByTestId("homepage-section-footerGlobalUtility")).toHaveAttribute("data-zone", "full-width");
  });

  it("does not mount featured projects or company pulse in the non-hero host", () => {
    render(<HbCentralHomepageHost />);

    expect(screen.queryByRole("heading", { name: /featured projects showcase/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /company pulse band/i })).not.toBeInTheDocument();
  });

  it("mounts the people moments surface in its section slot", () => {
    render(<HbCentralHomepageHost />);

    expect(screen.getByRole("heading", { name: /people and culture moments/i })).toBeInTheDocument();
  });

  it("does not mount quick actions in the non-hero host", () => {
    render(<HbCentralHomepageHost />);

    expect(screen.queryByRole("heading", { name: /quick actions deck/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /open action daily log/i })).not.toBeInTheDocument();
  });

  it("mounts the news recognition spotlight mosaic in the newsRecognition slot", async () => {
    render(<HbCentralHomepageHost />);

    expect(
      await screen.findByRole("heading", { name: /news, recognition, and spotlight mosaic/i }),
    ).toBeInTheDocument();
    expect((await screen.findAllByRole("link", { name: /open .* item/i })).length).toBeGreaterThan(0);
  });

  it("mounts page-local global utility footer in the footerGlobalUtility slot", async () => {
    render(<HbCentralHomepageHost />);

    expect(await screen.findByRole("heading", { name: /global utility footer/i })).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: /help center/i })).toBeInTheDocument();
  });

  it("renders loading slot behavior without data-fetch coupling", () => {
    render(<HbCentralHomepageHost shellState="loading" />);

    expect(screen.getByText(/homepage shell loading/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/homepage shell loading placeholder/i)).toBeInTheDocument();
  });

  it("renders empty slot behavior without data-fetch coupling", () => {
    render(<HbCentralHomepageHost shellState="empty" />);

    expect(screen.getByText(/composition is ready but no surfaces are configured/i)).toBeInTheDocument();
  });

  it("renders error slot behavior without data-fetch coupling", () => {
    render(<HbCentralHomepageHost shellState="error" />);

    expect(screen.getByText(/shell could not render configured surfaces/i)).toBeInTheDocument();
  });
});

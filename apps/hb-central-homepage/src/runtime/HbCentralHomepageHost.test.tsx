import { render, screen } from "@testing-library/react";
import { HbCentralHomepageHost } from "./HbCentralHomepageHost";
import { HOMEPAGE_COMPOSITION_MANIFEST } from "./homepageComposition";

describe("HbCentralHomepageHost", () => {
  it("defines the static non-hero composition manifest order for Prompt-05", () => {
    expect(HOMEPAGE_COMPOSITION_MANIFEST.map((entry) => entry.id)).toEqual([
      "projects",
      "pulse",
      "people",
      "actions",
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
      "projects",
      "pulse",
      "people",
      "actions",
      "newsRecognition",
      "footerGlobalUtility",
    ]);
    expect(screen.queryByTestId("homepage-section-hero")).not.toBeInTheDocument();
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

    expect(screen.getByTestId("homepage-section-projects")).toHaveAttribute("data-zone", "banded");
    expect(screen.getByTestId("homepage-section-pulse")).toHaveAttribute("data-zone", "mosaic");
    expect(screen.getByTestId("homepage-section-footerGlobalUtility")).toHaveAttribute("data-zone", "full-width");
  });

  it("mounts the featured projects showcase in the projects slot", () => {
    render(<HbCentralHomepageHost />);

    expect(screen.getAllByRole("heading", { name: /featured projects showcase/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /view beacon tower modernization project/i })).toBeInTheDocument();
  });

  it("mounts the company pulse and people moments surfaces in their section slots", () => {
    render(<HbCentralHomepageHost />);

    expect(screen.getByRole("heading", { name: /company pulse band/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /people and culture moments/i })).toBeInTheDocument();
  });

  it("mounts the quick actions deck in the actions slot", () => {
    render(<HbCentralHomepageHost />);

    expect(screen.getAllByRole("heading", { name: /quick actions deck/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /open action daily log/i })).toBeInTheDocument();
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

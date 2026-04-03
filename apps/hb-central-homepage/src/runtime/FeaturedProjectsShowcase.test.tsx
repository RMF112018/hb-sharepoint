import { render, screen } from "@testing-library/react";
import { FeaturedProjectsShowcase } from "./FeaturedProjectsShowcase";
import type { FeaturedProjectsSourceModel } from "./featuredProjects";

describe("FeaturedProjectsShowcase", () => {
  it("renders ranked editorial projects with primary destination links", () => {
    render(<FeaturedProjectsShowcase />);

    expect(screen.getByRole("heading", { name: /featured projects showcase/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view beacon tower modernization project/i })).toHaveAttribute(
      "href",
      "#project-beacon-tower-modernization",
    );
  });

  it("renders image fallback when imagery is missing", () => {
    const sourceModel: FeaturedProjectsSourceModel = {
      items: [
        {
          id: "project-without-image",
          title: "Project Without Image",
          destinationUrl: "#project-without-image",
          supportLine: "Fallback image test",
          sublabel: "Chicago, IL - Commercial",
          rank: 1,
        },
      ],
    };

    render(<FeaturedProjectsShowcase sourceModel={sourceModel} />);
    expect(screen.getByLabelText(/image pending for project without image/i)).toBeInTheDocument();
  });

  it("supports responsive grid-to-stack layout contract", () => {
    render(<FeaturedProjectsShowcase />);

    const grid = screen.getByTestId("featured-projects-grid");
    expect(grid).toHaveAttribute("data-responsive-contract", "grid-stack");
    expect(grid).toHaveClass("hb-grid-featured");
  });

  it("uses configured image aspect metadata when provided", () => {
    render(<FeaturedProjectsShowcase />);

    const image = screen.getByRole("img", {
      name: /healthcare campus buildings framed by evening sky/i,
    });
    expect(image).toHaveStyle({ aspectRatio: "4 / 3" });
  });
});

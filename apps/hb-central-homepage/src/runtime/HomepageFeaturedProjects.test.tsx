import { render, screen } from "@testing-library/react";
import { HomepageFeaturedProjects } from "./HomepageFeaturedProjects";

describe("HomepageFeaturedProjects", () => {
  it("renders the dedicated featured projects runtime surface", () => {
    render(<HomepageFeaturedProjects />);

    expect(screen.getByRole("main", { name: /hb central featured projects/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /featured projects showcase/i })).toBeInTheDocument();
  });
});

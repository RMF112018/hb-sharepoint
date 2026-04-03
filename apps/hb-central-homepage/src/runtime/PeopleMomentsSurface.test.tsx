import { render, screen } from "@testing-library/react";
import { PeopleMomentsSurface } from "./PeopleMomentsSurface";
import type { PeopleMomentsSourceModel } from "./peopleMoments";

describe("PeopleMomentsSurface", () => {
  it("renders people moments heading and content cards", () => {
    render(<PeopleMomentsSurface />);

    expect(screen.getByRole("heading", { name: /people and culture moments/i })).toBeInTheDocument();
    expect(screen.getByTestId("people-moments-grid")).toBeInTheDocument();
  });

  it("renders empty state for zero moments", () => {
    const sourceModel: PeopleMomentsSourceModel = { items: [] };
    render(<PeopleMomentsSurface sourceModel={sourceModel} />);

    expect(screen.getByText(/no people moments are posted yet/i)).toBeInTheDocument();
  });

  it("handles uneven content counts with bounded rendering", () => {
    render(<PeopleMomentsSurface maxItems={3} />);

    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  it("applies restrained celebration emphasis and semantic links", () => {
    render(<PeopleMomentsSurface />);

    expect(screen.getAllByText(/celebration/i).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /open people moment/i }).length).toBeGreaterThan(0);
  });
});

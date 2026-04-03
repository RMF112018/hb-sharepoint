import { render, screen } from "@testing-library/react";
import { CompanyPulseBand } from "./CompanyPulseBand";
import type { CompanyPulseSourceModel } from "./companyPulse";

describe("CompanyPulseBand", () => {
  it("renders pulse heading hierarchy and metric list", () => {
    render(<CompanyPulseBand />);

    expect(screen.getByRole("heading", { name: /company pulse band/i })).toBeInTheDocument();
    expect(screen.getByTestId("company-pulse-list")).toBeInTheDocument();
  });

  it("renders empty state when no metrics are available", () => {
    const sourceModel: CompanyPulseSourceModel = { items: [] };
    render(<CompanyPulseBand sourceModel={sourceModel} />);

    expect(screen.getByText(/company pulse is waiting for the next update/i)).toBeInTheDocument();
  });

  it("keeps bounded rendering for long lists", () => {
    render(<CompanyPulseBand maxItems={2} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("uses semantic metric links when destinations are provided", () => {
    render(<CompanyPulseBand />);

    expect(screen.getAllByRole("link", { name: /view .* metric/i }).length).toBeGreaterThan(0);
  });
});

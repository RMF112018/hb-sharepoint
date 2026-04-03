import { render, screen } from "@testing-library/react";
import { QuickActionsDeck } from "./QuickActionsDeck";
import type { QuickActionsSourceModel } from "./quickActions";

describe("QuickActionsDeck", () => {
  it("renders grouped actions and heading hierarchy", () => {
    render(<QuickActionsDeck />);

    expect(screen.getByRole("heading", { name: /quick actions deck/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /delivery/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /governance/i })).toBeInTheDocument();
  });

  it("renders ungrouped actions via normalized default group", () => {
    const sourceModel: QuickActionsSourceModel = {
      items: [
        {
          id: "ungrouped-action",
          label: "Single Action",
          href: "#single-action",
        },
      ],
    };

    render(<QuickActionsDeck sourceModel={sourceModel} />);
    expect(screen.getByRole("heading", { name: /quick actions deck/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open action single action/i })).toBeInTheDocument();
  });

  it("supports link semantics and external destinations", () => {
    render(<QuickActionsDeck />);

    const externalLink = screen.getByRole("link", { name: /open action pmo standards/i });
    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("applies label fallback/truncation and responsive wrap marker", () => {
    const sourceModel: QuickActionsSourceModel = {
      items: [
        {
          id: "empty-label",
          label: " ",
          href: "#empty-label",
        },
        {
          id: "long-label",
          label: "This is an intentionally very long action label that should be shortened safely",
          href: "#long-label",
        },
      ],
    };

    render(<QuickActionsDeck sourceModel={sourceModel} />);
    expect(screen.getByRole("link", { name: /open action untitled action/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open action this is an intentionally very long acti…/i })).toBeInTheDocument();
    const wrap = screen.getByTestId("quick-actions-wrap");
    expect(wrap).toBeInTheDocument();
    expect(wrap).toHaveAttribute("data-responsive-contract", "grid-stack");
    expect(wrap).toHaveClass("hb-grid-actions");
  });

  it("renders empty state when no actions are configured", () => {
    const sourceModel: QuickActionsSourceModel = { items: [] };

    render(<QuickActionsDeck sourceModel={sourceModel} />);
    expect(screen.getByText(/no quick actions are configured/i)).toBeInTheDocument();
  });
});

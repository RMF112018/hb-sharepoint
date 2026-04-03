import { render, screen } from "@testing-library/react";
import { GlobalUtilityFooter } from "./GlobalUtilityFooter";

describe("GlobalUtilityFooter", () => {
  it("renders heading and utility link navigation", () => {
    render(<GlobalUtilityFooter />);

    expect(screen.getByRole("heading", { name: /global utility footer/i })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /global utility links/i })).toBeInTheDocument();
  });

  it("supports semantic external link behavior", () => {
    render(<GlobalUtilityFooter />);

    const policyLink = screen.getByRole("link", { name: /policy library/i });
    expect(policyLink).toHaveAttribute("target", "_blank");
    expect(policyLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("renders responsive-safe utility link container", () => {
    render(<GlobalUtilityFooter />);

    expect(screen.getByTestId("global-utility-links")).toBeInTheDocument();
  });
});

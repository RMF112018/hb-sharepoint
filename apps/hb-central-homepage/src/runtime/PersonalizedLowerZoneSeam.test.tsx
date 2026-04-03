import { render, screen } from "@testing-library/react";
import { PersonalizedLowerZoneSeam } from "./PersonalizedLowerZoneSeam";

describe("PersonalizedLowerZoneSeam", () => {
  it("renders intentional deferred personalization placeholder", () => {
    render(<PersonalizedLowerZoneSeam />);

    expect(screen.getByRole("heading", { name: /personalized lower zone seam/i })).toBeInTheDocument();
    expect(screen.getByText(/intentionally deferred/i)).toBeInTheDocument();
  });

  it("shows future source requirements clearly", () => {
    render(<PersonalizedLowerZoneSeam />);

    expect(screen.getByText(/reliable user profile and role signal/i)).toBeInTheDocument();
    expect(screen.getByText(/targeting rules/i)).toBeInTheDocument();
    expect(screen.getByText(/operational logging and support diagnostics/i)).toBeInTheDocument();
  });
});

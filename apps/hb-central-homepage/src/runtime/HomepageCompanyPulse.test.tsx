import { render, screen } from "@testing-library/react";
import { HomepageCompanyPulse } from "./HomepageCompanyPulse";

describe("HomepageCompanyPulse", () => {
  it("renders the dedicated company pulse runtime surface", () => {
    render(<HomepageCompanyPulse />);

    expect(screen.getByRole("main", { name: /hb central company pulse/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /company pulse band/i })).toBeInTheDocument();
  });
});

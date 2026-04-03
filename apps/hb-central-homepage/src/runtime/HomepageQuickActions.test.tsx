import { render, screen } from "@testing-library/react";
import { HomepageQuickActions } from "./HomepageQuickActions";

describe("HomepageQuickActions", () => {
  it("renders the dedicated quick actions runtime surface", () => {
    render(<HomepageQuickActions />);

    expect(screen.getByRole("main", { name: /hb central quick actions/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /quick actions deck/i })).toBeInTheDocument();
  });
});

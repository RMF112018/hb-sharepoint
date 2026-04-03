import { render, screen } from "@testing-library/react";
import { HomepageShellHero } from "./HomepageShellHero";

describe("HomepageShellHero", () => {
  it("renders dedicated shell/hero surface content", () => {
    render(<HomepageShellHero />);

    expect(screen.getByRole("heading", { name: /hb central homepage shell and hero/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /cinematic hero storyboard/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open hero priority board/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/homepage hero media frame/i)).toBeInTheDocument();
  });
});

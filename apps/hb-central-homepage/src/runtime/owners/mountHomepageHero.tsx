import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageShellHero } from "../HomepageShellHero";
import "../homepageHardening.css";

export function mountHomepageHero(container: HTMLElement): () => void {
  render(
    <StrictMode>
      <HomepageShellHero />
    </StrictMode>,
    container,
  );

  return () => {
    unmountComponentAtNode(container);
  };
}

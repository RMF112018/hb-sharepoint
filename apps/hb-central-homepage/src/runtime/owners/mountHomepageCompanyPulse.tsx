import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageCompanyPulse } from "../HomepageCompanyPulse";
import "../homepageHardening.css";

export function mountHomepageCompanyPulse(container: HTMLElement): () => void {
  render(
    <StrictMode>
      <HomepageCompanyPulse />
    </StrictMode>,
    container,
  );

  return () => {
    unmountComponentAtNode(container);
  };
}

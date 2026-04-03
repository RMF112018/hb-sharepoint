import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HbCentralHomepageHost } from "../HbCentralHomepageHost";
import "../homepageHardening.css";

export function mountHomepageSections(container: HTMLElement): () => void {
  render(
    <StrictMode>
      <HbCentralHomepageHost />
    </StrictMode>,
    container,
  );

  return () => {
    unmountComponentAtNode(container);
  };
}

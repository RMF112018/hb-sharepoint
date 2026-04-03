import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageQuickActions } from "../HomepageQuickActions";
import "../homepageHardening.css";

export function mountHomepageQuickActions(container: HTMLElement): () => void {
  render(
    <StrictMode>
      <HomepageQuickActions />
    </StrictMode>,
    container,
  );

  return () => {
    unmountComponentAtNode(container);
  };
}

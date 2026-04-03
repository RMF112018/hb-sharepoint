import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageFeaturedProjects } from "../HomepageFeaturedProjects";
import "../homepageHardening.css";

export function mountHomepageFeaturedProjects(
  container: HTMLElement,
): () => void {
  render(
    <StrictMode>
      <HomepageFeaturedProjects />
    </StrictMode>,
    container,
  );

  return () => {
    unmountComponentAtNode(container);
  };
}

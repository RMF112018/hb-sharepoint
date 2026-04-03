import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageCompanyPulse } from "./runtime/HomepageCompanyPulse";
import { HomepageFeaturedProjects } from "./runtime/HomepageFeaturedProjects";
import { HomepageQuickActions } from "./runtime/HomepageQuickActions";
import { HbCentralHomepageHost } from "./runtime/HbCentralHomepageHost";
import { HomepageShellHero } from "./runtime/HomepageShellHero";
import "./runtime/homepageHardening.css";

export function mountHbCentralHomepage(container: HTMLElement): () => void {
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

export function mountHbCentralHomepageHero(container: HTMLElement): () => void {
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

export function mountHbCentralHomepageFeaturedProjects(
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

export function mountHbCentralHomepageCompanyPulse(
  container: HTMLElement,
): () => void {
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

export function mountHbCentralHomepageQuickActions(
  container: HTMLElement,
): () => void {
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

const container = document.getElementById("root");

if (container) {
  mountHbCentralHomepage(container);
}

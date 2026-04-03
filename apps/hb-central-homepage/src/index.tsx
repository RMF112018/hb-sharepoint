import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomepageCompanyPulse } from "./runtime/HomepageCompanyPulse";
import { HomepageFeaturedProjects } from "./runtime/HomepageFeaturedProjects";
import { HbCentralHomepageHost } from "./runtime/HbCentralHomepageHost";
import { HomepageShellHero } from "./runtime/HomepageShellHero";
import "./runtime/homepageHardening.css";

export function mountHbCentralHomepage(container: HTMLElement): () => void {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <HbCentralHomepageHost />
    </StrictMode>,
  );

  return () => {
    root.unmount();
  };
}

export function mountHbCentralHomepageHero(container: HTMLElement): () => void {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <HomepageShellHero />
    </StrictMode>,
  );

  return () => {
    root.unmount();
  };
}

export function mountHbCentralHomepageFeaturedProjects(container: HTMLElement): () => void {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <HomepageFeaturedProjects />
    </StrictMode>,
  );

  return () => {
    root.unmount();
  };
}

export function mountHbCentralHomepageCompanyPulse(container: HTMLElement): () => void {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <HomepageCompanyPulse />
    </StrictMode>,
  );

  return () => {
    root.unmount();
  };
}

const container = document.getElementById("root");

if (container) {
  mountHbCentralHomepage(container);
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HbCentralHomepageHost } from "./runtime/HbCentralHomepageHost";
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

const container = document.getElementById("root");

if (container) {
  mountHbCentralHomepage(container);
}

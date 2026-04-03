import { mountHomepageCompanyPulse } from "./runtime/owners/mountHomepageCompanyPulse";
import { mountHomepageFeaturedProjects } from "./runtime/owners/mountHomepageFeaturedProjects";
import { mountHomepageHero } from "./runtime/owners/mountHomepageHero";
import { mountHomepageQuickActions } from "./runtime/owners/mountHomepageQuickActions";
import { mountHomepageSections } from "./runtime/owners/mountHomepageSections";

export function mountHbCentralHomepage(container: HTMLElement): () => void {
  return mountHomepageSections(container);
}

export function mountHbCentralHomepageHero(container: HTMLElement): () => void {
  return mountHomepageHero(container);
}

export function mountHbCentralHomepageFeaturedProjects(
  container: HTMLElement,
): () => void {
  return mountHomepageFeaturedProjects(container);
}

export function mountHbCentralHomepageCompanyPulse(
  container: HTMLElement,
): () => void {
  return mountHomepageCompanyPulse(container);
}

export function mountHbCentralHomepageQuickActions(
  container: HTMLElement,
): () => void {
  return mountHomepageQuickActions(container);
}

const container = document.getElementById("root");

if (container) {
  mountHbCentralHomepage(container);
}

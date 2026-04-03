import { mountHomepageCompanyPulse } from "./runtime/owners/mountHomepageCompanyPulse";
import { mountHomepageFeaturedProjects } from "./runtime/owners/mountHomepageFeaturedProjects";
import { mountHomepageHero } from "./runtime/owners/mountHomepageHero";
import { mountHomepageQuickActions } from "./runtime/owners/mountHomepageQuickActions";
import { mountHomepageSections } from "./runtime/owners/mountHomepageSections";
export function mountHbCentralHomepage(container) {
    return mountHomepageSections(container);
}
export function mountHbCentralHomepageHero(container) {
    return mountHomepageHero(container);
}
export function mountHbCentralHomepageFeaturedProjects(container) {
    return mountHomepageFeaturedProjects(container);
}
export function mountHbCentralHomepageCompanyPulse(container) {
    return mountHomepageCompanyPulse(container);
}
export function mountHbCentralHomepageQuickActions(container) {
    return mountHomepageQuickActions(container);
}
var container = document.getElementById("root");
if (container) {
    mountHbCentralHomepage(container);
}
//# sourceMappingURL=index.js.map
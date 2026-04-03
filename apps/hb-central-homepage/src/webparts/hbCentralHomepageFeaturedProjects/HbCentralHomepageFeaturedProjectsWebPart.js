import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { mountHomepageFeaturedProjects } from "../../runtime/owners/mountHomepageFeaturedProjects";

const FEATURED_PROJECTS_ROOT_CLASS =
  "hb-central-homepage-featured-projects-spfx-root";

export default class HbCentralHomepageFeaturedProjectsWebPart extends BaseClientSideWebPart {
  constructor() {
    super();
    this._unmountFeaturedProjects = undefined;
    this._mountPromise = undefined;
  }

  render() {
    if (!this._mountPromise) {
      const root = this.domElement.ownerDocument.createElement("div");
      root.className = FEATURED_PROJECTS_ROOT_CLASS;
      this.domElement.replaceChildren(root);

      this._mountPromise = Promise.resolve()
        .then(() => {
          const unmount = mountHomepageFeaturedProjects(root);
          if (typeof unmount === "function") {
            this._unmountFeaturedProjects = unmount;
          }
        })
        .catch((error) => {
          this.domElement.innerHTML =
            '<section aria-label="HB Central Featured Projects"><p>HB Central featured projects failed to load runtime bundle.</p></section>';
          throw error;
        });
    }
  }

  onDispose() {
    if (typeof this._unmountFeaturedProjects === "function") {
      this._unmountFeaturedProjects();
    }
    this._mountPromise = undefined;
    this._unmountFeaturedProjects = undefined;
    this.domElement.replaceChildren();
  }
}

import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { mountHomepageHero } from "../../runtime/owners/mountHomepageHero.tsx";

const HERO_ROOT_CLASS = "hb-central-homepage-hero-spfx-root";

export default class HbCentralHomepageHeroWebPart extends BaseClientSideWebPart {
  constructor() {
    super();
    this._unmountHero = undefined;
    this._mountPromise = undefined;
  }

  render() {
    if (!this._mountPromise) {
      const root = this.domElement.ownerDocument.createElement("div");
      root.className = HERO_ROOT_CLASS;
      this.domElement.replaceChildren(root);

      this._mountPromise = Promise.resolve()
        .then(() => {
          const unmount = mountHomepageHero(root);
          if (typeof unmount === "function") {
            this._unmountHero = unmount;
          }
        })
        .catch((error) => {
          this.domElement.innerHTML =
            '<section aria-label="HB Central Homepage Hero"><p>HB Central Homepage hero failed to load runtime bundle.</p></section>';
          throw error;
        });
    }
  }

  onDispose() {
    if (typeof this._unmountHero === "function") {
      this._unmountHero();
    }
    this._mountPromise = undefined;
    this._unmountHero = undefined;
    this.domElement.replaceChildren();
  }
}

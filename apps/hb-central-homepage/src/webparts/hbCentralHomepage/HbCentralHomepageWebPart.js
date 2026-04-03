import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { mountHomepageSections } from "../../runtime/owners/mountHomepageSections";

const HOMEPAGE_ROOT_CLASS = "hb-central-homepage-spfx-root";

export default class HbCentralHomepageWebPart extends BaseClientSideWebPart {
  constructor() {
    super();
    this._unmountHomepage = undefined;
    this._mountPromise = undefined;
  }

  render() {
    if (!this._mountPromise) {
      const root = this.domElement.ownerDocument.createElement("div");
      root.className = HOMEPAGE_ROOT_CLASS;
      this.domElement.replaceChildren(root);

      this._mountPromise = Promise.resolve()
        .then(() => {
          const unmount = mountHomepageSections(root);
          if (typeof unmount === "function") {
            this._unmountHomepage = unmount;
          }
        })
        .catch((error) => {
          this.domElement.innerHTML =
            '<section aria-label="HB Central Homepage"><p>HB Central Homepage failed to load runtime bundle.</p></section>';
          throw error;
        });
    }
  }

  onDispose() {
    if (typeof this._unmountHomepage === "function") {
      this._unmountHomepage();
    }
    this._mountPromise = undefined;
    this._unmountHomepage = undefined;
    this.domElement.replaceChildren();
  }
}

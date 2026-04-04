import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

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
        .then(
          () =>
            import("../../../lib-commonjs/src/runtime/owners/mountHomepageSections.js"),
        )
        .then((module) => {
          const mountHomepageSections =
            module.mountHomepageSections ??
            module.default?.mountHomepageSections;
          if (typeof mountHomepageSections !== "function") {
            throw new Error("mountHomepageSections export is unavailable");
          }
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

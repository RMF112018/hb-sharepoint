import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

const COMPANY_PULSE_ROOT_CLASS = "hb-central-homepage-company-pulse-spfx-root";

export default class HbCentralHomepageCompanyPulseWebPart extends BaseClientSideWebPart {
  constructor() {
    super();
    this._unmountCompanyPulse = undefined;
    this._mountPromise = undefined;
  }

  render() {
    if (!this._mountPromise) {
      const root = this.domElement.ownerDocument.createElement("div");
      root.className = COMPANY_PULSE_ROOT_CLASS;
      this.domElement.replaceChildren(root);

      this._mountPromise = Promise.resolve()
        .then(() =>
          import(
            "../../../lib-commonjs/src/runtime/owners/mountHomepageCompanyPulse.js"
          ),
        )
        .then((module) => {
          const mountHomepageCompanyPulse =
            module.mountHomepageCompanyPulse ??
            module.default?.mountHomepageCompanyPulse;
          if (typeof mountHomepageCompanyPulse !== "function") {
            throw new Error("mountHomepageCompanyPulse export is unavailable");
          }
          const unmount = mountHomepageCompanyPulse(root);
          if (typeof unmount === "function") {
            this._unmountCompanyPulse = unmount;
          }
        })
        .catch((error) => {
          this.domElement.innerHTML =
            '<section aria-label="HB Central Company Pulse"><p>HB Central company pulse failed to load runtime bundle.</p></section>';
          throw error;
        });
    }
  }

  onDispose() {
    if (typeof this._unmountCompanyPulse === "function") {
      this._unmountCompanyPulse();
    }
    this._mountPromise = undefined;
    this._unmountCompanyPulse = undefined;
    this.domElement.replaceChildren();
  }
}

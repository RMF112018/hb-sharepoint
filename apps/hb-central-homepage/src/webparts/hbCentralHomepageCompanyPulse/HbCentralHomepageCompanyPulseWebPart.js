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

      this._mountPromise = import("../../../dist/homepage.js")
        .then((module) => {
          if (typeof module.mountHbCentralHomepageCompanyPulse !== "function") {
            throw new Error(
              "HB Central homepage build artifact is missing mountHbCentralHomepageCompanyPulse export.",
            );
          }
          const unmount = module.mountHbCentralHomepageCompanyPulse(root);
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

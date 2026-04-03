import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

const QUICK_ACTIONS_ROOT_CLASS = "hb-central-homepage-quick-actions-spfx-root";

export default class HbCentralHomepageQuickActionsWebPart extends BaseClientSideWebPart {
  constructor() {
    super();
    this._unmountQuickActions = undefined;
    this._mountPromise = undefined;
  }

  render() {
    if (!this._mountPromise) {
      const root = this.domElement.ownerDocument.createElement("div");
      root.className = QUICK_ACTIONS_ROOT_CLASS;
      this.domElement.replaceChildren(root);

      this._mountPromise = Promise.resolve()
        .then(() =>
          import(
            "../../../lib-commonjs/src/runtime/owners/mountHomepageQuickActions.js"
          ),
        )
        .then((module) => {
          const mountHomepageQuickActions =
            module.mountHomepageQuickActions ??
            module.default?.mountHomepageQuickActions;
          if (typeof mountHomepageQuickActions !== "function") {
            throw new Error("mountHomepageQuickActions export is unavailable");
          }
          const unmount = mountHomepageQuickActions(root);
          if (typeof unmount === "function") {
            this._unmountQuickActions = unmount;
          }
        })
        .catch((error) => {
          this.domElement.innerHTML =
            '<section aria-label="HB Central Quick Actions"><p>HB Central quick actions failed to load runtime bundle.</p></section>';
          throw error;
        });
    }
  }

  onDispose() {
    if (typeof this._unmountQuickActions === "function") {
      this._unmountQuickActions();
    }
    this._mountPromise = undefined;
    this._unmountQuickActions = undefined;
    this.domElement.replaceChildren();
  }
}

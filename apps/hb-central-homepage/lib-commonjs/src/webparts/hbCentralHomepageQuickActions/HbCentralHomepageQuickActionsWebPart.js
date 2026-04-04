"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var QUICK_ACTIONS_ROOT_CLASS = "hb-central-homepage-quick-actions-spfx-root";
var HbCentralHomepageQuickActionsWebPart = /** @class */ (function (_super) {
    __extends(HbCentralHomepageQuickActionsWebPart, _super);
    function HbCentralHomepageQuickActionsWebPart() {
        var _this = _super.call(this) || this;
        _this._unmountQuickActions = undefined;
        _this._mountPromise = undefined;
        return _this;
    }
    HbCentralHomepageQuickActionsWebPart.prototype.render = function () {
        var _this = this;
        if (!this._mountPromise) {
            var root_1 = this.domElement.ownerDocument.createElement("div");
            root_1.className = QUICK_ACTIONS_ROOT_CLASS;
            this.domElement.replaceChildren(root_1);
            this._mountPromise = Promise.resolve()
                .then(function () {
                return Promise.resolve().then(function () { return require("../../runtime/owners-browser/mountHomepageQuickActions.js"); });
            })
                .then(function (module) {
                var _a, _b;
                var mountHomepageQuickActions = (_a = module.mountHomepageQuickActions) !== null && _a !== void 0 ? _a : (_b = module.default) === null || _b === void 0 ? void 0 : _b.mountHomepageQuickActions;
                if (typeof mountHomepageQuickActions !== "function") {
                    throw new Error("mountHomepageQuickActions export is unavailable");
                }
                var unmount = mountHomepageQuickActions(root_1);
                if (typeof unmount === "function") {
                    _this._unmountQuickActions = unmount;
                }
            })
                .catch(function (error) {
                _this.domElement.innerHTML =
                    '<section aria-label="HB Central Quick Actions"><p>HB Central quick actions failed to load runtime bundle.</p></section>';
                throw error;
            });
        }
    };
    HbCentralHomepageQuickActionsWebPart.prototype.onDispose = function () {
        if (typeof this._unmountQuickActions === "function") {
            this._unmountQuickActions();
        }
        this._mountPromise = undefined;
        this._unmountQuickActions = undefined;
        this.domElement.replaceChildren();
    };
    return HbCentralHomepageQuickActionsWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HbCentralHomepageQuickActionsWebPart;
//# sourceMappingURL=HbCentralHomepageQuickActionsWebPart.js.map
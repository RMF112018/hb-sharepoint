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
var HOMEPAGE_ROOT_CLASS = "hb-central-homepage-spfx-root";
var HbCentralHomepageWebPart = /** @class */ (function (_super) {
    __extends(HbCentralHomepageWebPart, _super);
    function HbCentralHomepageWebPart() {
        var _this = _super.call(this) || this;
        _this._unmountHomepage = undefined;
        _this._mountPromise = undefined;
        return _this;
    }
    HbCentralHomepageWebPart.prototype.render = function () {
        var _this = this;
        if (!this._mountPromise) {
            var root_1 = this.domElement.ownerDocument.createElement("div");
            root_1.className = HOMEPAGE_ROOT_CLASS;
            this.domElement.replaceChildren(root_1);
            this._mountPromise = Promise.resolve()
                .then(function () { return Promise.resolve().then(function () { return require("../../runtime/owners-browser/mountHomepageSections.js"); }); })
                .then(function (module) {
                var _a, _b;
                var mountHomepageSections = (_a = module.mountHomepageSections) !== null && _a !== void 0 ? _a : (_b = module.default) === null || _b === void 0 ? void 0 : _b.mountHomepageSections;
                if (typeof mountHomepageSections !== "function") {
                    throw new Error("mountHomepageSections export is unavailable");
                }
                var unmount = mountHomepageSections(root_1);
                if (typeof unmount === "function") {
                    _this._unmountHomepage = unmount;
                }
            })
                .catch(function (error) {
                _this.domElement.innerHTML =
                    '<section aria-label="HB Central Homepage"><p>HB Central Homepage failed to load runtime bundle.</p></section>';
                throw error;
            });
        }
    };
    HbCentralHomepageWebPart.prototype.onDispose = function () {
        if (typeof this._unmountHomepage === "function") {
            this._unmountHomepage();
        }
        this._mountPromise = undefined;
        this._unmountHomepage = undefined;
        this.domElement.replaceChildren();
    };
    return HbCentralHomepageWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HbCentralHomepageWebPart;
//# sourceMappingURL=HbCentralHomepageWebPart.js.map
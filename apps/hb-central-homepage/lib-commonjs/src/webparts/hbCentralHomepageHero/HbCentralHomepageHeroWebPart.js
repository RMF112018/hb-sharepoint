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
var HERO_ROOT_CLASS = "hb-central-homepage-hero-spfx-root";
var HbCentralHomepageHeroWebPart = /** @class */ (function (_super) {
    __extends(HbCentralHomepageHeroWebPart, _super);
    function HbCentralHomepageHeroWebPart() {
        var _this = _super.call(this) || this;
        _this._unmountHero = undefined;
        _this._mountPromise = undefined;
        return _this;
    }
    HbCentralHomepageHeroWebPart.prototype.render = function () {
        var _this = this;
        if (!this._mountPromise) {
            var root_1 = this.domElement.ownerDocument.createElement("div");
            root_1.className = HERO_ROOT_CLASS;
            this.domElement.replaceChildren(root_1);
            this._mountPromise = Promise.resolve()
                .then(function () { return Promise.resolve().then(function () { return require("../../runtime/owners-browser/mountHomepageHero.js"); }); })
                .then(function (module) {
                var _a, _b;
                var mountHomepageHero = (_a = module.mountHomepageHero) !== null && _a !== void 0 ? _a : (_b = module.default) === null || _b === void 0 ? void 0 : _b.mountHomepageHero;
                if (typeof mountHomepageHero !== "function") {
                    throw new Error("mountHomepageHero export is unavailable");
                }
                var unmount = mountHomepageHero(root_1);
                if (typeof unmount === "function") {
                    _this._unmountHero = unmount;
                }
            })
                .catch(function (error) {
                _this.domElement.innerHTML =
                    '<section aria-label="HB Central Homepage Hero"><p>HB Central Homepage hero failed to load runtime bundle.</p></section>';
                throw error;
            });
        }
    };
    HbCentralHomepageHeroWebPart.prototype.onDispose = function () {
        if (typeof this._unmountHero === "function") {
            this._unmountHero();
        }
        this._mountPromise = undefined;
        this._unmountHero = undefined;
        this.domElement.replaceChildren();
    };
    return HbCentralHomepageHeroWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HbCentralHomepageHeroWebPart;
//# sourceMappingURL=HbCentralHomepageHeroWebPart.js.map
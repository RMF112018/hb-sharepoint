"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageHero = mountHomepageHero;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("../homepageHardening.css");
function mountHomepageHero(container) {
    (0, react_dom_1.render)((0, react_1.createElement)(react_1.StrictMode, null, (0, react_1.createElement)("main", {
        className: "hb-homepage-main",
        "aria-label": "HB Central homepage hero",
        role: "main",
    }, (0, react_1.createElement)("section", { "data-surface": "homepage-hero" }, [
        (0, react_1.createElement)("h2", { key: "heading" }, "HB Central Homepage Hero"),
        (0, react_1.createElement)("p", { key: "body" }, "Hero surface content is mounted through the browser-safe owner entrypoint."),
    ]))), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageHero.js.map
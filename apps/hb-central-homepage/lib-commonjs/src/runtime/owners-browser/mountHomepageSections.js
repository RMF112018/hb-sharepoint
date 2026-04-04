"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageSections = mountHomepageSections;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("../homepageHardening.css");
function mountHomepageSections(container) {
    (0, react_dom_1.render)((0, react_1.createElement)(react_1.StrictMode, null, (0, react_1.createElement)("main", {
        className: "hb-homepage-main",
        "aria-label": "HB Central homepage",
        role: "main",
    }, (0, react_1.createElement)("section", { "data-surface": "homepage-sections" }, [
        (0, react_1.createElement)("h1", { key: "heading" }, "HB Central Homepage"),
        (0, react_1.createElement)("p", { key: "body" }, "Homepage sections are mounted through the browser-safe surface owner."),
    ]))), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageSections.js.map
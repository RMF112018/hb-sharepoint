"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageCompanyPulse = mountHomepageCompanyPulse;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("../homepageHardening.css");
function mountHomepageCompanyPulse(container) {
    (0, react_dom_1.render)((0, react_1.createElement)(react_1.StrictMode, null, (0, react_1.createElement)("main", {
        className: "hb-homepage-main",
        "aria-label": "HB Central company pulse",
        role: "main",
    }, (0, react_1.createElement)("section", { "data-surface": "homepage-company-pulse" }, [
        (0, react_1.createElement)("h2", { key: "heading" }, "HB Central Company Pulse"),
        (0, react_1.createElement)("p", { key: "body" }, "Company pulse updates are available."),
    ]))), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageCompanyPulse.js.map
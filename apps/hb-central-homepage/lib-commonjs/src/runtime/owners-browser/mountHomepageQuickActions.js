"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageQuickActions = mountHomepageQuickActions;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("../homepageHardening.css");
function mountHomepageQuickActions(container) {
    (0, react_dom_1.render)((0, react_1.createElement)(react_1.StrictMode, null, (0, react_1.createElement)("main", {
        className: "hb-homepage-main",
        "aria-label": "HB Central quick actions",
        role: "main",
    }, (0, react_1.createElement)("section", { "data-surface": "homepage-quick-actions" }, [
        (0, react_1.createElement)("h2", { key: "heading" }, "HB Central Quick Actions"),
        (0, react_1.createElement)("p", { key: "body" }, "Quick action shortcuts are available."),
    ]))), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageQuickActions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageQuickActions = mountHomepageQuickActions;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var HomepageQuickActions_1 = require("../HomepageQuickActions");
require("../homepageHardening.css");
function mountHomepageQuickActions(container) {
    (0, react_dom_1.render)((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(HomepageQuickActions_1.HomepageQuickActions, {}) }), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageQuickActions.js.map
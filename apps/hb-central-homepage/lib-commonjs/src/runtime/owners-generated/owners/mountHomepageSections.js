"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageSections = mountHomepageSections;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var HbCentralHomepageHost_1 = require("../HbCentralHomepageHost");
require("../homepageHardening.css");
function mountHomepageSections(container) {
    (0, react_dom_1.render)((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(HbCentralHomepageHost_1.HbCentralHomepageHost, {}) }), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageSections.js.map
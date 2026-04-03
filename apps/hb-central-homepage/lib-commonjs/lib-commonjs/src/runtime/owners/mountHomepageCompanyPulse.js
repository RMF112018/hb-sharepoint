"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageCompanyPulse = mountHomepageCompanyPulse;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var HomepageCompanyPulse_1 = require("../HomepageCompanyPulse");
require("../homepageHardening.css");
function mountHomepageCompanyPulse(container) {
    (0, react_dom_1.render)((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(HomepageCompanyPulse_1.HomepageCompanyPulse, {}) }), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageCompanyPulse.js.map
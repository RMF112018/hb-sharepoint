"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageHero = mountHomepageHero;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var HomepageShellHero_1 = require("../HomepageShellHero");
require("../homepageHardening.css");
function mountHomepageHero(container) {
    (0, react_dom_1.render)((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(HomepageShellHero_1.HomepageShellHero, {}) }), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageHero.js.map
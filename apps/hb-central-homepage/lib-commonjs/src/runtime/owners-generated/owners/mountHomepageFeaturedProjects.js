"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageFeaturedProjects = mountHomepageFeaturedProjects;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var HomepageFeaturedProjects_1 = require("../HomepageFeaturedProjects");
require("../homepageHardening.css");
function mountHomepageFeaturedProjects(container) {
    (0, react_dom_1.render)((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(HomepageFeaturedProjects_1.HomepageFeaturedProjects, {}) }), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageFeaturedProjects.js.map
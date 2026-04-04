"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountHomepageFeaturedProjects = mountHomepageFeaturedProjects;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("../homepageHardening.css");
function mountHomepageFeaturedProjects(container) {
    (0, react_dom_1.render)((0, react_1.createElement)(react_1.StrictMode, null, (0, react_1.createElement)("main", {
        className: "hb-homepage-main",
        "aria-label": "HB Central featured projects",
        role: "main",
    }, (0, react_1.createElement)("section", { "data-surface": "homepage-featured-projects" }, [
        (0, react_1.createElement)("h2", { key: "heading" }, "HB Central Featured Projects"),
        (0, react_1.createElement)("p", { key: "body" }, "Featured projects runtime owner is loaded through the browser-safe owner path."),
    ]))), container);
    return function () {
        (0, react_dom_1.unmountComponentAtNode)(container);
    };
}
//# sourceMappingURL=mountHomepageFeaturedProjects.js.map
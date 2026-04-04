import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageFeaturedProjects } from "../HomepageFeaturedProjects";
import "../homepageHardening.css";
export function mountHomepageFeaturedProjects(container) {
    render(_jsx(StrictMode, { children: _jsx(HomepageFeaturedProjects, {}) }), container);
    return () => {
        unmountComponentAtNode(container);
    };
}

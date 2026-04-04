import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageShellHero } from "../HomepageShellHero";
import "../homepageHardening.css";
export function mountHomepageHero(container) {
    render(_jsx(StrictMode, { children: _jsx(HomepageShellHero, {}) }), container);
    return () => {
        unmountComponentAtNode(container);
    };
}

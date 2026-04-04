import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageQuickActions } from "../HomepageQuickActions";
import "../homepageHardening.css";
export function mountHomepageQuickActions(container) {
    render(_jsx(StrictMode, { children: _jsx(HomepageQuickActions, {}) }), container);
    return () => {
        unmountComponentAtNode(container);
    };
}

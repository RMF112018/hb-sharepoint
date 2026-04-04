import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HomepageCompanyPulse } from "../HomepageCompanyPulse";
import "../homepageHardening.css";
export function mountHomepageCompanyPulse(container) {
    render(_jsx(StrictMode, { children: _jsx(HomepageCompanyPulse, {}) }), container);
    return () => {
        unmountComponentAtNode(container);
    };
}

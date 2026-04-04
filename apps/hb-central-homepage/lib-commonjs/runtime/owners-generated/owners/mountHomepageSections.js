import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { HbCentralHomepageHost } from "../HbCentralHomepageHost";
import "../homepageHardening.css";
export function mountHomepageSections(container) {
    render(_jsx(StrictMode, { children: _jsx(HbCentralHomepageHost, {}) }), container);
    return () => {
        unmountComponentAtNode(container);
    };
}

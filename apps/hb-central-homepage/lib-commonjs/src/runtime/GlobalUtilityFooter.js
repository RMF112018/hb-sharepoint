"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalUtilityFooter = GlobalUtilityFooter;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var homepageAuthoringConfig_1 = require("./homepageAuthoringConfig");
var homepageHardening_1 = require("./homepageHardening");
var linkGridStyle = {
    display: "grid",
    gap: ui_kit_1.hbcSpacingTokens.sm,
    gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
};
var linkStyle = {
    display: "block",
    padding: ui_kit_1.hbcSpacingTokens.sm,
    borderRadius: ui_kit_1.hbcRadiusTokens.md,
    border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.borderSubtle),
    background: ui_kit_1.hbcSemanticTokens.surfaceMuted,
    color: ui_kit_1.hbcSemanticTokens.actionPrimary,
    textDecoration: "none",
    fontWeight: 600,
};
function GlobalUtilityFooter() {
    var adapted = (0, homepageAuthoringConfig_1.adaptGlobalUtilityLinks)();
    if (adapted.state === "empty") {
        return ((0, jsx_runtime_1.jsxs)("footer", { "aria-labelledby": "global-utility-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsx)("h2", { id: "global-utility-heading", style: { marginTop: 0 }, children: "Global utility footer" }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: "Global utility links are not configured", body: "Add a concise set of support and platform links to keep this footer useful.", headingLevel: 3 })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("footer", { "aria-labelledby": "global-utility-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.sm, marginBottom: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { children: "Global Utility" }), (0, jsx_runtime_1.jsx)("h2", { id: "global-utility-heading", style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textPrimary,
                            fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                        }, children: "Global utility footer" })] }), (0, jsx_runtime_1.jsx)("nav", { "aria-label": "Global utility links", "data-testid": "global-utility-links", style: linkGridStyle, children: adapted.items.map(function (link) { return ((0, jsx_runtime_1.jsx)("a", __assign({}, (0, homepageHardening_1.getHomepageLinkProps)({
                    href: link.href,
                    purpose: "Open global utility link ".concat(link.label),
                    external: link.external,
                }), { style: linkStyle, children: link.label }), link.id)); }) })] }));
}
//# sourceMappingURL=GlobalUtilityFooter.js.map
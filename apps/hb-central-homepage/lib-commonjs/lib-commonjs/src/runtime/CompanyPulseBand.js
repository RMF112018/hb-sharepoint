"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyPulseBand = CompanyPulseBand;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var homepageAuthoringConfig_1 = require("./homepageAuthoringConfig");
var homepageHardening_1 = require("./homepageHardening");
var listStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: ui_kit_1.hbcSpacingTokens.md,
};
var itemStyle = {
    display: "grid",
    gap: ui_kit_1.hbcSpacingTokens.xs,
    borderRadius: ui_kit_1.hbcRadiusTokens.md,
    border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.borderSubtle),
    background: ui_kit_1.hbcSemanticTokens.surfaceMuted,
    padding: ui_kit_1.hbcSpacingTokens.md,
};
function trendLabel(trend) {
    if (trend === "up")
        return "Trending up";
    if (trend === "down")
        return "Trending down";
    if (trend === "steady")
        return "Holding steady";
    return "No trend";
}
function CompanyPulseBand(_a) {
    var sourceModel = _a.sourceModel, _b = _a.maxItems, maxItems = _b === void 0 ? 4 : _b;
    var adapted = (0, homepageAuthoringConfig_1.adaptCompanyPulseSource)(sourceModel, maxItems);
    var pulseItems = adapted.items;
    if (adapted.state === "empty") {
        return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "company-pulse-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsx)("h2", { id: "company-pulse-heading", style: { marginTop: 0 }, children: "Company Pulse" }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: "Company pulse is waiting for the next update", body: "Add 3-5 concise metrics with clear values to keep this band fast to scan.", headingLevel: 3 })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "company-pulse-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.sm, marginBottom: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { children: "Company Pulse" }), (0, jsx_runtime_1.jsx)("h2", { id: "company-pulse-heading", style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textPrimary,
                            fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                        }, children: "Company pulse band" })] }), (0, jsx_runtime_1.jsx)("ul", { "data-testid": "company-pulse-list", style: listStyle, children: pulseItems.map(function (item) {
                    return ((0, jsx_runtime_1.jsxs)("li", { style: itemStyle, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: ui_kit_1.hbcSpacingTokens.sm }, children: [(0, jsx_runtime_1.jsx)("strong", { style: { color: ui_kit_1.hbcSemanticTokens.textPrimary }, children: item.title }), (0, jsx_runtime_1.jsx)("span", { style: { color: ui_kit_1.hbcSemanticTokens.textPrimary, fontWeight: 700 }, children: item.value })] }), (0, jsx_runtime_1.jsx)("p", { style: { margin: 0, color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: item.supportLine }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: ui_kit_1.hbcSpacingTokens.sm }, children: [(0, jsx_runtime_1.jsx)("small", { style: { color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: trendLabel(item.trend) }), item.destinationUrl ? ((0, jsx_runtime_1.jsx)("a", __assign({}, (0, homepageHardening_1.getHomepageLinkProps)({
                                        href: item.destinationUrl,
                                        purpose: "View ".concat(item.title, " metric"),
                                    }), { style: { color: ui_kit_1.hbcSemanticTokens.actionPrimary }, children: "View metric" }))) : null] })] }, item.id));
                }) })] }));
}
//# sourceMappingURL=CompanyPulseBand.js.map
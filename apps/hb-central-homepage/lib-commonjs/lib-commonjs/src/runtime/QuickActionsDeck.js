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
exports.QuickActionsDeck = QuickActionsDeck;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var homepageAuthoringConfig_1 = require("./homepageAuthoringConfig");
var homepageHardening_1 = require("./homepageHardening");
var groupGridStyle = {
    display: "grid",
    gap: ui_kit_1.hbcSpacingTokens.lg,
};
var actionGridStyle = {
    gap: ui_kit_1.hbcSpacingTokens.sm,
};
var actionCardStyle = {
    display: "grid",
    gap: ui_kit_1.hbcSpacingTokens.xs,
    borderRadius: ui_kit_1.hbcRadiusTokens.md,
    border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.borderSubtle),
    background: ui_kit_1.hbcSemanticTokens.surface,
    padding: ui_kit_1.hbcSpacingTokens.md,
};
var priorityCardStyle = __assign(__assign({}, actionCardStyle), { border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.actionAccent), background: ui_kit_1.hbcSemanticTokens.surfaceAccent });
function QuickActionsDeck(_a) {
    var sourceModel = _a.sourceModel, maxItems = _a.maxItems, labelMaxLength = _a.labelMaxLength;
    var adapted = (0, homepageAuthoringConfig_1.adaptQuickActionsSource)(sourceModel, maxItems, labelMaxLength);
    var groups = adapted.items;
    if (adapted.state === "empty") {
        return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "quick-actions-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsx)("h2", { id: "quick-actions-heading", style: { marginTop: 0 }, children: "Quick Actions" }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: "No quick actions are configured", body: "Add a small set of high-frequency destinations to keep this deck focused and useful.", headingLevel: 3 })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "quick-actions-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.sm, marginBottom: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { children: "Quick Actions" }), (0, jsx_runtime_1.jsx)("h2", { id: "quick-actions-heading", style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textPrimary,
                            fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                        }, children: "Quick actions deck" })] }), (0, jsx_runtime_1.jsx)("div", { "data-testid": "quick-actions-groups", style: groupGridStyle, children: groups.map(function (group) {
                    return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "quick-actions-group-".concat(group.id), children: [(0, jsx_runtime_1.jsx)("h3", { id: "quick-actions-group-".concat(group.id), style: { margin: "0 0 ".concat(ui_kit_1.hbcSpacingTokens.sm, " 0"), color: ui_kit_1.hbcSemanticTokens.textPrimary }, children: group.title }), (0, jsx_runtime_1.jsx)("div", { "data-testid": "quick-actions-wrap", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-actions hb-layout-tier-marker", style: actionGridStyle, children: group.items.map(function (action) {
                                    return ((0, jsx_runtime_1.jsxs)("a", __assign({}, (0, homepageHardening_1.getHomepageLinkProps)({
                                        href: action.href,
                                        purpose: "Open action ".concat(action.label),
                                        external: action.external,
                                    }), { style: action.priority ? priorityCardStyle : actionCardStyle, "data-priority": action.priority ? "true" : "false", children: [(0, jsx_runtime_1.jsx)("strong", { style: { color: ui_kit_1.hbcSemanticTokens.textPrimary }, children: action.label }), action.description ? ((0, jsx_runtime_1.jsx)("span", { style: { color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: action.description })) : null, (0, jsx_runtime_1.jsx)("small", { style: { color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: action.external ? "External destination" : "Internal destination" })] }), action.id));
                                }) })] }, group.id));
                }) })] }));
}
//# sourceMappingURL=QuickActionsDeck.js.map
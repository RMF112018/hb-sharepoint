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
exports.PeopleMomentsSurface = PeopleMomentsSurface;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var homepageAuthoringConfig_1 = require("./homepageAuthoringConfig");
var homepageHardening_1 = require("./homepageHardening");
var gridStyle = {
    gap: ui_kit_1.hbcSpacingTokens.md,
};
var cardStyle = {
    display: "grid",
    gap: ui_kit_1.hbcSpacingTokens.xs,
    padding: ui_kit_1.hbcSpacingTokens.md,
    borderRadius: ui_kit_1.hbcRadiusTokens.md,
    border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.borderSubtle),
    background: ui_kit_1.hbcSemanticTokens.surface,
};
function typeLabel(type) {
    if (type === "birthday")
        return "Birthday";
    if (type === "anniversary")
        return "Anniversary";
    if (type === "promotion")
        return "Promotion";
    return "Recognition";
}
function PeopleMomentsSurface(_a) {
    var sourceModel = _a.sourceModel, _b = _a.maxItems, maxItems = _b === void 0 ? 6 : _b;
    var adapted = (0, homepageAuthoringConfig_1.adaptPeopleMomentsSource)(sourceModel, maxItems);
    var peopleMoments = adapted.items;
    if (adapted.state === "empty") {
        return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "people-moments-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsx)("h2", { id: "people-moments-heading", style: { marginTop: 0 }, children: "People Moments" }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: "No people moments are posted yet", body: "Add birthdays, anniversaries, promotions, or recognition notes to keep this section fresh.", headingLevel: 3 })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "people-moments-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.sm, marginBottom: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { tone: "accent", children: "People Moments" }), (0, jsx_runtime_1.jsx)("h2", { id: "people-moments-heading", style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textPrimary,
                            fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                        }, children: "People and culture moments" })] }), (0, jsx_runtime_1.jsx)("div", { "data-testid": "people-moments-grid", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-mosaic hb-layout-tier-marker", style: gridStyle, children: peopleMoments.map(function (moment) {
                    return ((0, jsx_runtime_1.jsxs)("article", { style: cardStyle, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: ui_kit_1.hbcSpacingTokens.sm }, children: [(0, jsx_runtime_1.jsx)("small", { style: { color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: typeLabel(moment.type) }), moment.celebrate ? (0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { tone: "accent", children: "Celebration" }) : null] }), (0, jsx_runtime_1.jsx)("h3", { style: {
                                    margin: 0,
                                    color: ui_kit_1.hbcSemanticTokens.textPrimary,
                                    fontSize: "1rem",
                                    lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                                }, children: moment.personName }), (0, jsx_runtime_1.jsx)("p", { style: { margin: 0, color: ui_kit_1.hbcSemanticTokens.textPrimary }, children: moment.milestone }), (0, jsx_runtime_1.jsx)("p", { style: { margin: 0, color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: moment.supportLine }), moment.destinationUrl ? ((0, jsx_runtime_1.jsx)("a", __assign({}, (0, homepageHardening_1.getHomepageLinkProps)({
                                href: moment.destinationUrl,
                                purpose: "Open people moment for ".concat(moment.personName),
                            }), { style: { color: ui_kit_1.hbcSemanticTokens.actionPrimary }, children: "Open moment" }))) : null] }, moment.id));
                }) })] }));
}
//# sourceMappingURL=PeopleMomentsSurface.js.map
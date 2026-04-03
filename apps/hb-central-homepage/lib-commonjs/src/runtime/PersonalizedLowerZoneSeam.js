"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizedLowerZoneSeam = PersonalizedLowerZoneSeam;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var homepageAuthoringConfig_1 = require("./homepageAuthoringConfig");
function PersonalizedLowerZoneSeam() {
    var adapted = (0, homepageAuthoringConfig_1.adaptPersonalizationDecision)();
    var decision = adapted.decision;
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "personalized-lower-zone-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.sm, marginBottom: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { tone: "accent", children: "Personalization Decision" }), (0, jsx_runtime_1.jsx)("h2", { id: "personalized-lower-zone-heading", style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textPrimary,
                            fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                        }, children: "Personalized lower zone seam" })] }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: decision.placeholderTitle, body: decision.placeholderBody, headingLevel: 3 }), (0, jsx_runtime_1.jsx)("ul", { style: { marginTop: ui_kit_1.hbcSpacingTokens.md, color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: decision.requirements.map(function (requirement) { return ((0, jsx_runtime_1.jsx)("li", { children: requirement.description }, requirement.id)); }) })] }));
}
//# sourceMappingURL=PersonalizedLowerZoneSeam.js.map
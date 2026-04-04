import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcEmptyState, hbcSemanticTokens, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
import { adaptPersonalizationDecision } from "./homepageAuthoringConfig";
export function PersonalizedLowerZoneSeam() {
    const adapted = adaptPersonalizationDecision();
    const decision = adapted.decision;
    return (_jsxs("section", { "aria-labelledby": "personalized-lower-zone-heading", "data-source-mode": adapted.sourceMode, children: [_jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }, children: [_jsx(HbcBadge, { tone: "accent", children: "Personalization Decision" }), _jsx("h2", { id: "personalized-lower-zone-heading", style: {
                            margin: 0,
                            color: hbcSemanticTokens.textPrimary,
                            fontSize: hbcTypographyTokens.title.fontSize,
                            lineHeight: hbcTypographyTokens.title.lineHeight,
                        }, children: "Personalized lower zone seam" })] }), _jsx(HbcEmptyState, { title: decision.placeholderTitle, body: decision.placeholderBody, headingLevel: 3 }), _jsx("ul", { style: { marginTop: hbcSpacingTokens.md, color: hbcSemanticTokens.textSecondary }, children: decision.requirements.map((requirement) => (_jsx("li", { children: requirement.description }, requirement.id))) })] }));
}

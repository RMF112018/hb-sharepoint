import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcCta, HbcEditorialCard, HbcMediaFrame, HbcSection, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
export function HomepageShellHero() {
    return (_jsx("section", { "aria-labelledby": "homepage-shell-hero-heading", "data-surface": "homepage-shell-hero", children: _jsx(HbcSection, { tone: "info", children: _jsx(HbcEditorialCard, { title: "HB Central homepage shell and hero", titleLevel: 1, eyebrow: _jsx(HbcBadge, { tone: "accent", children: "HB Central Hero" }), footer: _jsxs("div", { style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: hbcSpacingTokens.sm,
                    }, children: [_jsx(HbcCta, { href: "#hero-priority-board", ariaLabel: "Open hero priority board", children: "Open priority board" }), _jsx(HbcCta, { href: "#hero-weekly-brief", ariaLabel: "Open weekly brief", children: "Open weekly brief" })] }), children: _jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.md }, children: [_jsx("h1", { id: "homepage-shell-hero-heading", style: {
                                margin: 0,
                                fontSize: hbcTypographyTokens.title.fontSize,
                                lineHeight: hbcTypographyTokens.title.lineHeight,
                            }, children: "Cinematic hero storyboard" }), _jsx("p", { style: { margin: 0, lineHeight: hbcTypographyTokens.body.lineHeight }, children: "Premium shell and hero messaging now renders through a dedicated web part path, separated from non-hero homepage composition surfaces." }), _jsx(HbcMediaFrame, { label: "Homepage hero media frame" })] }) }) }) }));
}

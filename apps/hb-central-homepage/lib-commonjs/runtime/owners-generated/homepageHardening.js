import { hbcSemanticTokens } from "@hbc/ui-kit";
export function getHomepageLinkProps({ href, purpose, external = false, }) {
    return {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noreferrer noopener" : undefined,
        "aria-label": purpose,
        className: "hb-homepage-link hb-focus-link",
    };
}
export const srOnlyStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
};
export const sectionShellStyle = {
    display: "grid",
    gap: "1rem",
};
export const homepageRootStyle = {
    "--hb-action-primary": hbcSemanticTokens.actionPrimary,
};
export const focusRingStyle = {
    outline: `2px solid ${hbcSemanticTokens.actionPrimary}`,
    outlineOffset: "2px",
};

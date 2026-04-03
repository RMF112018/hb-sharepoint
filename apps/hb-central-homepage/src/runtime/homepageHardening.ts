import type { CSSProperties } from "react";
import { hbcSemanticTokens } from "@hbc/ui-kit";

export type HomepageViewportTier = "narrow" | "medium" | "wide" | "xwide";

export interface HomepageLinkSemantics {
  href: string;
  purpose: string;
  external?: boolean;
}

export interface HomepageLinkProps {
  href: string;
  target?: "_blank";
  rel?: "noreferrer noopener";
  "aria-label": string;
  className: string;
}

export function getHomepageLinkProps({
  href,
  purpose,
  external = false,
}: HomepageLinkSemantics): HomepageLinkProps {
  return {
    href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer noopener" : undefined,
    "aria-label": purpose,
    className: "hb-homepage-link hb-focus-link",
  };
}

export const srOnlyStyle: CSSProperties = {
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

export const sectionShellStyle: CSSProperties = {
  display: "grid",
  gap: "1rem",
};

export const homepageRootStyle: CSSProperties = {
  "--hb-action-primary": hbcSemanticTokens.actionPrimary,
} as CSSProperties;

export const focusRingStyle: CSSProperties = {
  outline: `2px solid ${hbcSemanticTokens.actionPrimary}`,
  outlineOffset: "2px",
};

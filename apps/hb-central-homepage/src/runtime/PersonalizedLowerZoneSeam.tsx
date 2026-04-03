import {
  HbcBadge,
  HbcEmptyState,
  hbcSemanticTokens,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "@hbc/ui-kit";
import { adaptPersonalizationDecision } from "./homepageAuthoringConfig";

export function PersonalizedLowerZoneSeam() {
  const adapted = adaptPersonalizationDecision();
  const decision = adapted.decision;

  return (
    <section aria-labelledby="personalized-lower-zone-heading" data-source-mode={adapted.sourceMode}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }}>
        <HbcBadge tone="accent">Personalization Decision</HbcBadge>
        <h2
          id="personalized-lower-zone-heading"
          style={{
            margin: 0,
            color: hbcSemanticTokens.textPrimary,
            fontSize: hbcTypographyTokens.title.fontSize,
            lineHeight: hbcTypographyTokens.title.lineHeight,
          }}
        >
          Personalized lower zone seam
        </h2>
      </div>

      <HbcEmptyState
        title={decision.placeholderTitle}
        body={decision.placeholderBody}
        headingLevel={3}
      />

      <ul style={{ marginTop: hbcSpacingTokens.md, color: hbcSemanticTokens.textSecondary }}>
        {decision.requirements.map((requirement) => (
          <li key={requirement.id}>{requirement.description}</li>
        ))}
      </ul>
    </section>
  );
}

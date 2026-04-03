import {
  HbcBadge,
  HbcCta,
  HbcEditorialCard,
  HbcMediaFrame,
  HbcSection,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "@hbc/ui-kit";

export function HomepageShellHero() {
  return (
    <section aria-labelledby="homepage-shell-hero-heading" data-surface="homepage-shell-hero">
      <HbcSection tone="info">
        <HbcEditorialCard
          title="HB Central homepage shell and hero"
          titleLevel={1}
          eyebrow={<HbcBadge tone="accent">HB Central Hero</HbcBadge>}
          footer={
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: hbcSpacingTokens.sm,
              }}
            >
              <HbcCta href="#hero-priority-board" ariaLabel="Open hero priority board">
                Open priority board
              </HbcCta>
              <HbcCta href="#hero-weekly-brief" ariaLabel="Open weekly brief">
                Open weekly brief
              </HbcCta>
            </div>
          }
        >
          <div style={{ display: "grid", gap: hbcSpacingTokens.md }}>
            <h1
              id="homepage-shell-hero-heading"
              style={{
                margin: 0,
                fontSize: hbcTypographyTokens.title.fontSize,
                lineHeight: hbcTypographyTokens.title.lineHeight,
              }}
            >
              Cinematic hero storyboard
            </h1>
            <p style={{ margin: 0, lineHeight: hbcTypographyTokens.body.lineHeight }}>
              Premium shell and hero messaging now renders through a dedicated web part path,
              separated from non-hero homepage composition surfaces.
            </p>
            <HbcMediaFrame label="Homepage hero media frame" />
          </div>
        </HbcEditorialCard>
      </HbcSection>
    </section>
  );
}

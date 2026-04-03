import {
  HbcBadge,
  HbcCta,
  HbcMediaFrame,
  hbcRadiusTokens,
  hbcSemanticTokens,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "@hbc/ui-kit";
import type { CSSProperties } from "react";
import {
  type FeaturedProjectItem,
  type FeaturedProjectsSourceModel,
} from "./featuredProjects";
import { adaptFeaturedProjectsSource } from "./homepageAuthoringConfig";

const gridStyle: CSSProperties = {
  gap: hbcSpacingTokens.lg,
};

const cardStyle: CSSProperties = {
  display: "grid",
  gap: hbcSpacingTokens.md,
  padding: hbcSpacingTokens.lg,
  borderRadius: hbcRadiusTokens.lg,
  border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
  background: hbcSemanticTokens.surface,
};

function renderMedia(project: FeaturedProjectItem) {
  if (!project.image?.src) {
    return <HbcMediaFrame label={`Image pending for ${project.title}`} />;
  }

  return (
    <img
      src={project.image.src}
      alt={project.image.alt || `${project.title} project image`}
      style={{
        width: "100%",
        borderRadius: hbcRadiusTokens.md,
        aspectRatio: project.image.aspectRatio ?? "16 / 9",
        objectFit: "cover",
        border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
      }}
    />
  );
}

export interface FeaturedProjectsShowcaseProps {
  sourceModel?: FeaturedProjectsSourceModel;
  maxItems?: number;
}

export function FeaturedProjectsShowcase({
  sourceModel,
  maxItems,
}: FeaturedProjectsShowcaseProps) {
  const adapted = adaptFeaturedProjectsSource(sourceModel, maxItems);
  const projects = adapted.items;

  return (
    <section aria-labelledby="featured-projects-heading" data-source-mode={adapted.sourceMode}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }}>
        <HbcBadge tone="accent">Featured Projects</HbcBadge>
        <h2
          id="featured-projects-heading"
          style={{
            margin: 0,
            color: hbcSemanticTokens.textPrimary,
            fontSize: hbcTypographyTokens.title.fontSize,
            lineHeight: hbcTypographyTokens.title.lineHeight,
          }}
        >
          Featured projects showcase
        </h2>
      </div>

      <div
        data-testid="featured-projects-grid"
        data-responsive-contract="grid-stack"
        className="hb-responsive-grid hb-grid-featured hb-layout-tier-marker"
        style={gridStyle}
      >
        {projects.map((project) => (
          <article key={project.id} style={cardStyle}>
            {renderMedia(project)}
            <div style={{ display: "grid", gap: hbcSpacingTokens.xs }}>
              {project.sublabel ? (
                <p
                  style={{
                    margin: 0,
                    color: hbcSemanticTokens.textSecondary,
                    fontSize: hbcTypographyTokens.compact.fontSize,
                    lineHeight: hbcTypographyTokens.compact.lineHeight,
                  }}
                >
                  {project.sublabel}
                </p>
              ) : null}
              <h3
                style={{
                  margin: 0,
                  color: hbcSemanticTokens.textPrimary,
                  fontSize: "1.1rem",
                  lineHeight: hbcTypographyTokens.title.lineHeight,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: hbcSemanticTokens.textSecondary,
                  fontSize: hbcTypographyTokens.body.fontSize,
                  lineHeight: hbcTypographyTokens.body.lineHeight,
                }}
              >
                {project.supportLine}
              </p>
            </div>
            <HbcCta
              href={project.destinationUrl}
              ariaLabel={`View ${project.title} project destination`}
            >
              View {project.title} project
            </HbcCta>
          </article>
        ))}
      </div>
    </section>
  );
}

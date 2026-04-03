import {
  HbcBadge,
  HbcCta,
  HbcEditorialCard,
  HbcEmptyState,
  HbcSkeletonBlock,
  HbcSection,
} from "@hbc/ui-kit";
import { Suspense, lazy, useMemo, type CSSProperties, type ReactElement } from "react";
import { CompanyPulseBand } from "./CompanyPulseBand";
import { FeaturedProjectsShowcase } from "./FeaturedProjectsShowcase";
import { PeopleMomentsSurface } from "./PeopleMomentsSurface";
import { QuickActionsDeck } from "./QuickActionsDeck";
import {
  HOMEPAGE_COMPOSITION_MANIFEST,
  type HomepageCompositionEntry,
  type HomepageShellState,
} from "./homepageComposition";
import { srOnlyStyle } from "./homepageHardening";

const NewsRecognitionSpotlightMosaic = lazy(async () => ({
  default: (await import("./NewsRecognitionSpotlightMosaic")).NewsRecognitionSpotlightMosaic,
}));
const PersonalizedLowerZoneSeam = lazy(async () => ({
  default: (await import("./PersonalizedLowerZoneSeam")).PersonalizedLowerZoneSeam,
}));
const GlobalUtilityFooter = lazy(async () => ({
  default: (await import("./GlobalUtilityFooter")).GlobalUtilityFooter,
}));

const zoneStyles: Record<HomepageCompositionEntry["zone"], CSSProperties> = {
  "full-width": { maxWidth: "100%" },
  banded: { maxWidth: "72rem" },
  mosaic: {
    maxWidth: "72rem",
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
  },
};

function renderShellState(state: Exclude<HomepageShellState, "ready">) {
  if (state === "loading") {
    return (
      <HbcSection tone="muted">
        <HbcEditorialCard
          title="Homepage shell loading"
          titleLevel={2}
          eyebrow={<HbcBadge tone="accent">Prompt-04 Composition Shell</HbcBadge>}
        >
          <p>
            The shell renders layout wrappers before feature data loads to keep
            section structure stable.
          </p>
          <HbcSkeletonBlock label="Homepage shell loading placeholder" />
        </HbcEditorialCard>
      </HbcSection>
    );
  }

  if (state === "empty") {
    return (
      <HbcSection tone="muted">
        <HbcEmptyState
          title="Homepage composition is ready but no surfaces are configured"
          body="Feature teams can plug surfaces into the static app-local manifest without rewriting shell structure."
          headingLevel={2}
        />
      </HbcSection>
    );
  }

  return (
    <HbcSection tone="accent">
      <HbcEmptyState
        title="Homepage shell could not render configured surfaces"
        body="The shell-level error slot is active while preserving section and zone contracts for recovery."
        headingLevel={2}
      />
    </HbcSection>
  );
}

function renderDeferredSurfaceFallback(sectionTitle: string) {
  return (
    <HbcEditorialCard title={`Loading ${sectionTitle}`} titleLevel={3}>
      <HbcSkeletonBlock label={`Loading ${sectionTitle} surface`} />
    </HbcEditorialCard>
  );
}

const SURFACE_RENDERERS: Partial<
  Record<HomepageCompositionEntry["id"], () => ReactElement>
> = {
  projects: () => <FeaturedProjectsShowcase />,
  pulse: () => <CompanyPulseBand />,
  people: () => <PeopleMomentsSurface />,
  actions: () => <QuickActionsDeck />,
  newsRecognition: () => <NewsRecognitionSpotlightMosaic />,
  personalizedLowerZone: () => <PersonalizedLowerZoneSeam />,
  footerGlobalUtility: () => <GlobalUtilityFooter />,
};

export interface HbCentralHomepageHostProps {
  shellState?: HomepageShellState;
  includePersonalizedLowerZone?: boolean;
}

export function HbCentralHomepageHost({
  shellState = "ready",
  includePersonalizedLowerZone = false,
}: HbCentralHomepageHostProps) {
  const orderedSections = useMemo(
    () =>
      HOMEPAGE_COMPOSITION_MANIFEST.filter(
        (entry) => !(entry.id === "personalizedLowerZone" && !includePersonalizedLowerZone),
      ),
    [includePersonalizedLowerZone],
  );

  if (shellState !== "ready") {
    return (
      <main className="hb-homepage-main" aria-label="HB Central homepage" role="main">
        <h1 style={srOnlyStyle}>HB Central homepage</h1>
        {renderShellState(shellState)}
      </main>
    );
  }

  return (
    <main className="hb-homepage-main" aria-label="HB Central homepage" role="main">
      <h1 style={srOnlyStyle}>HB Central homepage</h1>
      {orderedSections.map((entry) => (
        <section
          key={entry.id}
          data-testid={`homepage-section-${entry.id}`}
          data-section-id={entry.id}
          data-zone={entry.zone}
          style={zoneStyles[entry.zone]}
          aria-labelledby={`${entry.id}-landmark-heading`}
          className="hb-homepage-shell"
        >
          <h2 id={`${entry.id}-landmark-heading`} style={srOnlyStyle}>
            {entry.title}
          </h2>
          <HbcSection tone={entry.zone === "full-width" ? "info" : "default"}>
            {SURFACE_RENDERERS[entry.id] ? (
              <Suspense fallback={renderDeferredSurfaceFallback(entry.title)}>
                {SURFACE_RENDERERS[entry.id]?.()}
              </Suspense>
            ) : (
              <HbcEditorialCard
                title={entry.title}
                titleLevel={3}
                eyebrow={<HbcBadge>{entry.zone}</HbcBadge>}
                footer={<HbcCta href={`#${entry.id}`}>Slot: {entry.slot}</HbcCta>}
              >
                <p>{entry.description}</p>
              </HbcEditorialCard>
            )}
          </HbcSection>
        </section>
      ))}
    </main>
  );
}

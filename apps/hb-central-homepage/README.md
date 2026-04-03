# HB Central Homepage App

This package now includes the Prompt-02 runtime baseline, Prompt-04 app-local shell/composition contract, Prompt-06 featured projects showcase implementation, Prompt-07 company pulse/people moments implementations, Prompt-08 quick actions deck implementation, Prompt-09 news/recognition/spotlight mosaic implementation, Prompt-10 decisioned personalization/global-utility treatment, Prompt-11 data/configuration authoring seams, Prompt-12 accessibility/responsive/performance hardening, and Prompt-13 final verification/deployment-readiness convergence for the HB Central homepage host.

## Purpose

- own app-local runtime wiring for the homepage host
- provide the first Vite-based SPFx-compatible app scaffold under `apps/`
- own static composition ordering and zone contracts for homepage sections
- own the featured projects surface contract and editorial seed model for Prompt-06
- own company pulse and people moments source contracts plus runtime surfaces for Prompt-07
- own quick actions source contracts plus runtime deck surface for Prompt-08
- own blended news/recognition/spotlight source contracts plus runtime mosaic surface for Prompt-09
- own Prompt-10 decision seams for deferred personalization and page-local utility/footer behavior
- own Prompt-11 central source/configuration seam adapters and authoring defaults
- own Prompt-12 hardening seams for accessibility semantics, responsive layout contracts, and performance-minded section loading
- own Prompt-13 final readiness evidence and documentation alignment expectations

## Commands

- `pnpm --filter @hbc/hb-central-homepage check-types`
- `pnpm --filter @hbc/hb-central-homepage lint`
- `pnpm --filter @hbc/hb-central-homepage build`
- `pnpm --filter @hbc/hb-central-homepage test`
- `pnpm build:sppkg`

## Notes

- The app now consumes `@hbc/ui-kit` for shared design tokens and reusable visual primitives.
- The app scaffold externalizes `@microsoft/*` packages to stay aligned with the SPFx host-runtime expectation documented in the repo baseline.
- Composition remains app-local by design: section order and zone contracts are declared in `src/runtime/homepageComposition.ts`.
- The static manifest order is: hero, projects, pulse, people, actions, news/recognition, optional personalized lower zone, footer/global utility.
- Shell states (`loading`, `empty`, `error`, `ready`) are render-only slots so feature/data layers can plug in later without shell structural rewrites.
- Prompt-06 featured projects lives in `src/runtime/FeaturedProjectsShowcase.tsx` with data contracts in `src/runtime/featuredProjects.ts`.
- Expected featured project input shape: `id`, `title`, `destinationUrl`, `supportLine`, optional `sublabel`, optional `image` (`src`, `alt`, optional `aspectRatio`), optional `rank`, and optional `featured`.
- Editor constraints: keep `title` concise, keep `supportLine` to one short sentence, provide descriptive `image.alt` when image is supplied, and prefer explicit rank for deterministic ordering.
- Missing image data uses an explicit image fallback frame; destination links remain keyboard-focusable anchors for each project card.
- Prompt-07 company pulse lives in `src/runtime/CompanyPulseBand.tsx` with source contracts in `src/runtime/companyPulse.ts`.
- Prompt-07 people moments lives in `src/runtime/PeopleMomentsSurface.tsx` with source contracts in `src/runtime/peopleMoments.ts`.
- Prompt-08 quick actions lives in `src/runtime/QuickActionsDeck.tsx` with source contracts in `src/runtime/quickActions.ts`.
- Prompt-09 mosaic lives in `src/runtime/NewsRecognitionSpotlightMosaic.tsx` with source contracts in `src/runtime/newsRecognition.ts`.
- Prompt-10 personalization decision contract lives in `src/runtime/personalizationDecision.ts`.
- Prompt-10 deferred seam lives in `src/runtime/PersonalizedLowerZoneSeam.tsx`.
- Prompt-10 page-local utility/footer lives in `src/runtime/GlobalUtilityFooter.tsx`.
- Prompt-11 seam config lives in `src/runtime/homepageAuthoringConfig.ts` and is the canonical source for per-surface source modes, required fields, and bounded defaults.
- Prompt-12 hardening utility lives in `src/runtime/homepageHardening.ts` and standardizes link semantics, landmark support, and focus-visible conventions.
- Prompt-12 responsive contract styles live in `src/runtime/homepageHardening.css` and define predictable narrow/medium/wide/xwide grid-to-stack behavior.
- Prompt-12 performance stance: keep shell order static while allowing lower-priority sections to lazy-load with non-jarring skeleton fallbacks.
- Accessibility guardrails: keep explicit link purpose labels, keyboard-visible focus states, and valid heading hierarchy in ready/loading/empty/error seams.
- Pulse content guidance: keep to 3-5 metrics, prefer short titles, and provide a single concise support line for each metric.
- People moments guidance: keep to 4-6 highlights, mix recognition with milestone types, and refresh weekly to avoid stale celebratory noise.
- Quick actions schema: `id`, `label`, `href`, optional `description`, optional `group`, optional `priority`, optional `icon`, optional `external`, optional `audience`.
- Quick actions authoring limits: keep labels short, keep deck groups intentionally curated, and reserve priority treatment for only a few high-frequency actions.
- Use the quick actions deck for high-frequency operational jumps; keep persistent global/site navigation links in normal navigation, not in this deck.
- Prompt-09 source model supports three streams: news/page-like items, recognition items, and spotlight items; all are normalized into a ranked mosaic contract.
- Authoring/freshness guidance: keep featured ordering intentional, rotate spotlight content regularly, and avoid stale recognition/news items lingering beyond their relevance window.
- Prompt-10 decision: keep personalization deferred until stable user-signal and targeting contracts are available; use the lower-zone seam to preserve composition stability.
- Prompt-10 global utility guidance: keep utility/footer page-local until cross-page persistence has clear value and supportability justification.
- Prompt-11 source setup uses seam adapters per surface; update source contracts through seam defaults rather than embedding per-component normalization logic.
- Prompt-11 concise authoring guide:
  - Featured projects: `title`, `destinationUrl`, `supportLine` required; keep item counts bounded and image metadata complete when available.
  - Company pulse: `title`, `value`, `supportLine` required; keep to small scannable metric sets.
  - People moments: `personName`, `type`, `milestone`, `supportLine` required; keep counts bounded and content fresh.
  - Quick actions: `label`, `href` required; short labels and limited priority actions.
  - News/recognition/spotlight: `title`, `href`, `summary` required; keep featured ordering intentional and rotate stale content.
- Prompt-12 verification guidance: treat accessibility semantics, responsive behavior across breakpoint tiers, reduced-motion handling, and lazy-load fallback quality as release gates.
- Prompt-13 readiness guidance: use `docs/reference/developer/hb-central-homepage-deployment-readiness.md` as the canonical packaging/rollout checklist for this app baseline.
- SPFx packaging metadata now uses native app-local scaffolding under `apps/hb-central-homepage/config/` and `apps/hb-central-homepage/src/webparts/`.
- The generated package output path remains `dist/sppkg/hb-central-homepage.sppkg`.
- SPFx host wrapper ownership: `src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js`.
- Homepage runtime root ownership: `src/runtime/HbCentralHomepageHost.tsx`.
- Add or evolve homepage sections in `src/runtime/*` surfaces and `src/runtime/homepageComposition.ts`; keep web part host focused on mounting/unmounting only.
- Both surfaces include explicit empty states so zero-item periods remain clean and informative for editors.

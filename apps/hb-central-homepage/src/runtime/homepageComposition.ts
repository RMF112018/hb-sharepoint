export type HomepageSectionId =
  | "people"
  | "newsRecognition"
  | "personalizedLowerZone"
  | "footerGlobalUtility";

export type HomepageZoneType = "full-width" | "banded" | "mosaic";

export type HomepageShellState = "ready" | "loading" | "empty" | "error";

export interface HomepageCompositionEntry {
  id: HomepageSectionId;
  zone: HomepageZoneType;
  optional?: boolean;
  slot: "main";
  title: string;
  description: string;
}

export const HOMEPAGE_COMPOSITION_MANIFEST: readonly HomepageCompositionEntry[] = [
  {
    id: "people",
    zone: "mosaic",
    slot: "main",
    title: "People moments",
    description: "Recognitions and human-centered culture highlights.",
  },
  {
    id: "newsRecognition",
    zone: "mosaic",
    slot: "main",
    title: "News and recognition mosaic",
    description: "Editorial news blend with recognition callouts.",
  },
  {
    id: "personalizedLowerZone",
    zone: "banded",
    optional: true,
    slot: "main",
    title: "Personalized lower zone",
    description: "User-tailored cards and links when enabled.",
  },
  {
    id: "footerGlobalUtility",
    zone: "full-width",
    slot: "main",
    title: "Footer and global utility",
    description: "Global tools, support links, and platform utility actions.",
  },
] as const;

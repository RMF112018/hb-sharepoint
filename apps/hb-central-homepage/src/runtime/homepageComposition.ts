export type HomepageSectionId =
  | "hero"
  | "projects"
  | "pulse"
  | "people"
  | "actions"
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
    id: "hero",
    zone: "full-width",
    slot: "main",
    title: "Cinematic hero storyboard",
    description: "Opening message area for current priorities and narratives.",
  },
  {
    id: "projects",
    zone: "banded",
    slot: "main",
    title: "Featured projects showcase",
    description: "Current flagship efforts with editorial highlights.",
  },
  {
    id: "pulse",
    zone: "mosaic",
    slot: "main",
    title: "Company pulse",
    description: "Operational and business pulse cards for the week.",
  },
  {
    id: "people",
    zone: "mosaic",
    slot: "main",
    title: "People moments",
    description: "Recognitions and human-centered culture highlights.",
  },
  {
    id: "actions",
    zone: "banded",
    slot: "main",
    title: "Quick actions deck",
    description: "Frequently used actions grouped for fast access.",
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

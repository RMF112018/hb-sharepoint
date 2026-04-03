export interface QuickActionItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  group?: string;
  priority?: boolean;
  icon?: string;
  external?: boolean;
  audience?: "all" | "ops" | "leadership";
}

export interface QuickActionGroup {
  id: string;
  title: string;
  items: readonly QuickActionItem[];
}

export interface QuickActionsSourceModel {
  groups?: readonly QuickActionGroup[];
  items?: readonly QuickActionItem[];
}

export const SEEDED_QUICK_ACTIONS_SOURCE: QuickActionsSourceModel = {
  groups: [
    {
      id: "delivery",
      title: "Delivery",
      items: [
        {
          id: "delivery-daily-log",
          label: "Daily Log",
          href: "#actions-daily-log",
          description: "Capture key site updates and blockers.",
          priority: true,
          icon: "clipboard",
        },
        {
          id: "delivery-risk-register",
          label: "Risk Register",
          href: "#actions-risk-register",
          description: "Review open risks and mitigation owners.",
          icon: "warning",
        },
      ],
    },
    {
      id: "governance",
      title: "Governance",
      items: [
        {
          id: "governance-project-controls",
          label: "Project Controls",
          href: "#actions-project-controls",
          description: "Open reporting controls and status rollups.",
          icon: "chart",
        },
        {
          id: "governance-pmo-standards",
          label: "PMO Standards",
          href: "https://example.com/pmo-standards",
          description: "Reference standards and templates.",
          external: true,
          icon: "book",
        },
      ],
    },
  ],
};

const DEFAULT_MAX_LABEL_LENGTH = 40;
const DEFAULT_MAX_ITEMS_PER_GROUP = 8;

function normalizeLabel(label: string, maxLabelLength: number) {
  const trimmed = label.trim();
  if (trimmed.length === 0) {
    return "Untitled action";
  }
  if (trimmed.length > maxLabelLength) {
    return `${trimmed.slice(0, maxLabelLength - 1)}…`;
  }
  return trimmed;
}

function normalizeItem(item: QuickActionItem, maxLabelLength: number): QuickActionItem {
  return {
    ...item,
    label: normalizeLabel(item.label, maxLabelLength),
  };
}

export function normalizeQuickActions(
  source: QuickActionsSourceModel,
  options?: { maxItemsPerGroup?: number; labelMaxLength?: number },
): QuickActionGroup[] {
  const maxItemsPerGroup = options?.maxItemsPerGroup ?? DEFAULT_MAX_ITEMS_PER_GROUP;
  const labelMaxLength = options?.labelMaxLength ?? DEFAULT_MAX_LABEL_LENGTH;

  if (source.groups && source.groups.length > 0) {
    return source.groups.map((group) => ({
      ...group,
      items: group.items
        .slice(0, maxItemsPerGroup)
        .map((item) => normalizeItem(item, labelMaxLength)),
    }));
  }

  const items = (source.items ?? [])
    .slice(0, maxItemsPerGroup)
    .map((item) => normalizeItem(item, labelMaxLength));
  if (items.length === 0) {
    return [];
  }

  return [
    {
      id: "default-actions",
      title: "Quick actions",
      items,
    },
  ];
}

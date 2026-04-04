"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEEDED_QUICK_ACTIONS_SOURCE = void 0;
exports.normalizeQuickActions = normalizeQuickActions;
exports.SEEDED_QUICK_ACTIONS_SOURCE = {
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
var DEFAULT_MAX_LABEL_LENGTH = 40;
var DEFAULT_MAX_ITEMS_PER_GROUP = 8;
function normalizeLabel(label, maxLabelLength) {
    var trimmed = label.trim();
    if (trimmed.length === 0) {
        return "Untitled action";
    }
    if (trimmed.length > maxLabelLength) {
        return "".concat(trimmed.slice(0, maxLabelLength - 1), "\u2026");
    }
    return trimmed;
}
function normalizeItem(item, maxLabelLength) {
    return Object.assign(Object.assign({}, item), { label: normalizeLabel(item.label, maxLabelLength) });
}
function normalizeQuickActions(source, options) {
    var _a, _b, _c;
    var maxItemsPerGroup = (_a = options === null || options === void 0 ? void 0 : options.maxItemsPerGroup) !== null && _a !== void 0 ? _a : DEFAULT_MAX_ITEMS_PER_GROUP;
    var labelMaxLength = (_b = options === null || options === void 0 ? void 0 : options.labelMaxLength) !== null && _b !== void 0 ? _b : DEFAULT_MAX_LABEL_LENGTH;
    if (source.groups && source.groups.length > 0) {
        return source.groups.map(function (group) { return (Object.assign(Object.assign({}, group), { items: group.items
                .slice(0, maxItemsPerGroup)
                .map(function (item) { return normalizeItem(item, labelMaxLength); }) })); });
    }
    var items = ((_c = source.items) !== null && _c !== void 0 ? _c : [])
        .slice(0, maxItemsPerGroup)
        .map(function (item) { return normalizeItem(item, labelMaxLength); });
    if (items.length === 0) {
        return [];
    }
    return [
        {
            id: "default-actions",
            title: "Quick actions",
            items: items,
        },
    ];
}
//# sourceMappingURL=quickActions.js.map
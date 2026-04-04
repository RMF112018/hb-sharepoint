export const PERSONALIZATION_DECISION = {
    state: "deferred",
    rationale: "Current source adapters do not provide stable, per-user signal quality needed for meaningful personalization.",
    requirements: [
        {
            id: "user-profile-signal",
            description: "Reliable user profile and role signal mapped to actionable homepage preferences.",
        },
        {
            id: "content-targeting-contract",
            description: "Governed targeting rules that avoid empty or noisy personalized slots.",
        },
        {
            id: "supportability-observability",
            description: "Operational logging and support diagnostics for personalized decisioning.",
        },
    ],
    placeholderTitle: "Personalized lower zone is intentionally deferred",
    placeholderBody: "A governed seam is active until source quality supports stable, high-value personalization.",
};
export const GLOBAL_UTILITY_LINKS = [
    { id: "utility-help", label: "Help Center", href: "#utility-help-center" },
    { id: "utility-status", label: "Platform Status", href: "#utility-platform-status" },
    {
        id: "utility-policy",
        label: "Policy Library",
        href: "https://example.com/policy-library",
        external: true,
    },
    { id: "utility-support", label: "Request Support", href: "#utility-request-support" },
];

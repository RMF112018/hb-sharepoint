import { HOMEPAGE_DYNAMIC_DATA_ENABLED, HOMEPAGE_SURFACE_AUTHORING_CONFIG, adaptCompanyPulseSource, adaptFeaturedProjectsSource, adaptGlobalUtilityLinks, adaptNewsRecognitionSource, adaptPeopleMomentsSource, adaptPersonalizationDecision, adaptQuickActionsSource, } from "./homepageAuthoringConfig";
describe("homepageAuthoringConfig", function () {
    it("defines expected source modes and defaults per surface", function () {
        expect(HOMEPAGE_DYNAMIC_DATA_ENABLED).toBe(false);
        expect(HOMEPAGE_SURFACE_AUTHORING_CONFIG.featuredProjects.sourceMode).toBe("editorial-seed");
        expect(HOMEPAGE_SURFACE_AUTHORING_CONFIG.newsRecognition.sourceMode).toBe("native-news-like");
        expect(HOMEPAGE_SURFACE_AUTHORING_CONFIG.personalizedLowerZone.sourceMode).toBe("deferred");
        expect(HOMEPAGE_SURFACE_AUTHORING_CONFIG.quickActions.labelMaxLength).toBe(40);
    });
    it("supports adapter-level source switching and max-item overrides", function () {
        var featured = adaptFeaturedProjectsSource({
            items: [
                { id: "1", title: "A", destinationUrl: "#a", supportLine: "a", rank: 1 },
                { id: "2", title: "B", destinationUrl: "#b", supportLine: "b", rank: 2 },
            ],
        }, 1);
        expect(featured.items).toHaveLength(1);
        var people = adaptPeopleMomentsSource({
            items: [
                { id: "m1", personName: "A", type: "birthday", milestone: "m", supportLine: "s", rank: 2 },
                { id: "m2", personName: "B", type: "recognition", milestone: "m", supportLine: "s", rank: 1 },
            ],
        }, 1);
        expect(people.items).toHaveLength(1);
        expect(people.items[0].personName).toBe("B");
    });
    it("normalizes missing/weak fields and surfaces empty seam states intentionally", function () {
        var actions = adaptQuickActionsSource({
            items: [{ id: "a1", label: " ", href: "#a1" }],
        }, 8, 20);
        expect(actions.items[0].items[0].label).toBe("Untitled action");
        var pulse = adaptCompanyPulseSource({ items: [] });
        expect(pulse.state).toBe("empty");
        var mosaic = adaptNewsRecognitionSource({ news: [], recognition: [], spotlight: [] });
        expect(mosaic.state).toBe("empty");
    });
    it("returns decision seams for personalization and footer utility", function () {
        var personalization = adaptPersonalizationDecision();
        expect(personalization.sourceMode).toBe("deferred");
        expect(personalization.decision.requirements.length).toBeGreaterThan(0);
        var utility = adaptGlobalUtilityLinks();
        expect(utility.state).toBe("ready");
        expect(utility.items.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=homepageAuthoringConfig.test.js.map
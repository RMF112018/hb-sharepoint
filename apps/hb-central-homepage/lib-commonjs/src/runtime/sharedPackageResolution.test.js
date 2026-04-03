import { describe, expect, it } from "vitest";
import { HBC_BRAND_TOKENS } from "@hbc/brand-tokens";
import { createSharePointContextSnapshot, normalizeSharePointUrl } from "@hbc/sharepoint-core";
describe("shared package resolution", function () {
    it("resolves brand token exports", function () {
        expect(HBC_BRAND_TOKENS.color.brandPrimary).toBe("#225391");
        expect(HBC_BRAND_TOKENS.color.brandAccent).toBe("#E57E46");
        expect(HBC_BRAND_TOKENS.spacing.md).toBe("1rem");
    });
    it("resolves sharepoint-core exports", function () {
        expect(normalizeSharePointUrl("https://hb.contoso.com/sites/demo/")).toBe("https://hb.contoso.com/sites/demo");
        expect(createSharePointContextSnapshot({
            siteUrl: "https://hb.contoso.com/sites/demo/",
            webUrl: "https://hb.contoso.com/sites/demo/sub/",
            runtime: "local-dev"
        })).toEqual({
            siteUrl: "https://hb.contoso.com/sites/demo",
            webUrl: "https://hb.contoso.com/sites/demo/sub",
            runtime: "local-dev"
        });
    });
});
//# sourceMappingURL=sharedPackageResolution.test.js.map
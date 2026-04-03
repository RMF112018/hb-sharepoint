import { getHomepageLinkProps } from "./homepageHardening";

describe("homepageHardening", () => {
  it("returns accessible link props for internal links", () => {
    const props = getHomepageLinkProps({
      href: "/internal",
      purpose: "Open internal destination",
    });

    expect(props.href).toBe("/internal");
    expect(props["aria-label"]).toBe("Open internal destination");
    expect(props.target).toBeUndefined();
    expect(props.rel).toBeUndefined();
    expect(props.className).toContain("hb-focus-link");
  });

  it("returns accessible link props for external links", () => {
    const props = getHomepageLinkProps({
      href: "https://example.com",
      purpose: "Open external destination",
      external: true,
    });

    expect(props.target).toBe("_blank");
    expect(props.rel).toBe("noreferrer noopener");
  });
});

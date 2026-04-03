import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HbcBadge, HbcEditorialCard, HbcEmptyState, HbcSection } from "./index";

describe("@hbc/ui-kit primitives", () => {
  it("renders the foundational primitives", () => {
    render(
      <HbcSection>
        <HbcEditorialCard title="Shared visual foundation" eyebrow={<HbcBadge>Prompt-03</HbcBadge>}>
          Shared tokens and primitives are available.
        </HbcEditorialCard>
        <HbcEmptyState
          title="No content source configured yet"
          body="Prompt-04 will replace this placeholder with the homepage shell."
        />
      </HbcSection>,
    );

    expect(screen.getByText(/shared visual foundation/i)).toBeInTheDocument();
    expect(screen.getByText(/no content source configured yet/i)).toBeInTheDocument();
  });
});

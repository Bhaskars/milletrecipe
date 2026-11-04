import { describe, it, expect } from "vitest";
import { DISCLAIMER_SECTIONS, DISCLAIMER_SHORT } from "@/data/disclaimer";

describe("disclaimer", () => {
  it("covers the key protections: general information, health, allergies, food safety, liability", () => {
    const headings = DISCLAIMER_SECTIONS.map((s) => s.heading.toLowerCase()).join(" | ");
    expect(headings).toContain("not medical");
    expect(headings).toContain("allerg");
    expect(headings).toContain("food safety");
    expect(headings).toContain("limitation of liability");
  });

  it("has content in every section and a short notice that points to the full text", () => {
    for (const section of DISCLAIMER_SECTIONS) {
      expect(section.paragraphs.length, section.heading).toBeGreaterThan(0);
    }
    expect(DISCLAIMER_SHORT.toLowerCase()).toContain("not medical");
  });

  it("tells readers to see a doctor for health conditions", () => {
    const text = DISCLAIMER_SECTIONS.flatMap((s) => s.paragraphs).join(" ");
    expect(text).toMatch(/diabetes/i);
    expect(text).toMatch(/doctor/i);
  });
});

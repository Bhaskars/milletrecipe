import type { Metadata } from "next";
import { DISCLAIMER_SECTIONS } from "@/data/disclaimer";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for MilletRecipe: general information only, not medical or nutritional advice.",
};

export default function DisclaimerPage() {
  return (
    <main className="container narrow">
      <h1>Disclaimer</h1>
      <p className="lead">Please read this before using the recipes, nutrition figures or rice information on this site.</p>
      {DISCLAIMER_SECTIONS.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RICE_VARIETIES } from "@/data/rice";
import { getRiceById } from "@/lib/rice";

type Params = { riceId: string };

export function generateStaticParams(): Params[] {
  return RICE_VARIETIES.map((r) => ({ riceId: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { riceId } = await params;
  const rice = getRiceById(riceId);
  return { title: rice ? `${rice.name} Rice` : "Rice not found" };
}

export default async function RiceVarietyPage({ params }: { params: Promise<Params> }) {
  const { riceId } = await params;
  const rice = getRiceById(riceId);
  if (!rice) notFound();

  return (
    <main className="browse-content rice-page">
      <Link href="/rice" className="back-link">
        ← All rice
      </Link>
      <header className="page-header">
        <p className="eyebrow">{rice.group} rice</p>
        <h1>{rice.name}</h1>
        <p className="local-names">{rice.localNames.join(" · ")}</p>
        <p className="lead">{rice.description}</p>
      </header>

      <dl className="facts">
        <div>
          <dt>Region</dt>
          <dd>{rice.region}</dd>
        </div>
        <div>
          <dt>Appearance</dt>
          <dd>{rice.appearance}</dd>
        </div>
      </dl>

      <section className="rice-section">
        <h2>Traditional uses</h2>
        <ul className="rice-list">
          {rice.traditionalUses.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
      </section>

      <section className="rice-section">
        <h2>Traditional and commonly claimed benefits</h2>
        <ul className="rice-list">
          {rice.traditionalBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <p className="rice-disclaimer">These are traditional beliefs or commonly claimed effects, not established medical facts. They are not medical advice.</p>
      </section>

      <section className="rice-section">
        <h2>Nutrition</h2>
        <p>{rice.nutritionNote}</p>
      </section>

      <section className="rice-section">
        <h2>How to cook</h2>
        <p>{rice.cookingNote}</p>
      </section>
    </main>
  );
}

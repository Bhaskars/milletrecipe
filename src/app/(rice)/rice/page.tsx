import type { Metadata } from "next";
import Link from "next/link";
import { riceMenu } from "@/lib/rice";

export const metadata: Metadata = { title: "Rice Varieties" };

export default function RicePage() {
  return (
    <main className="browse-content rice-page">
      <header className="page-header">
        <p className="eyebrow">Rice</p>
        <h1>Rice varieties</h1>
        <p className="lead">
          From everyday white rice to traditional heritage varieties such as Mappillai Samba and Karuppu Kavuni, and whole-grain rice. Each variety lists
          its region, appearance, traditional uses and commonly claimed benefits.
        </p>
        <p className="rice-disclaimer">
          Traditional benefits are beliefs or commonly claimed effects. They are not established medical facts. Speak to a doctor before using rice to manage
          a health condition.
        </p>
      </header>
      {riceMenu().map(({ group, varieties }) => (
        <section key={group} aria-labelledby={`group-${group}`} className="rice-section">
          <h2 id={`group-${group}`}>{group} rice</h2>
          <div className="millet-grid">
            {varieties.map((rice) => (
              <Link key={rice.id} href={`/rice/${rice.id}`} className="millet-card">
                <h3>{rice.name}</h3>
                <p>{rice.description}</p>
                <span className="millet-count">{rice.region}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

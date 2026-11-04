"use client";

import type { PlateInfo } from "@/types/plate";
import { giBand } from "@/types/plate";
import { useT } from "@/components/LanguageProvider";

/** Per-serving nutrition estimate and the vegetables that complete the plate. */
export function NutritionAndPlate({ info }: { info: PlateInfo }) {
  const { t } = useT();
  const band = giBand(info.gi);
  const bandLabel = t(band === "low" ? "nutrition.giLow" : band === "medium" ? "nutrition.giMedium" : "nutrition.giHigh");

  return (
    <>
      <section className="detail-section" aria-labelledby="nutrition-heading">
        <h2 id="nutrition-heading">{t("nutrition.heading")}</h2>
        <div className="nutrition-grid">
          <div className="stat">
            <span className="stat-value">{info.kcal}</span>
            <span className="stat-label">{t("nutrition.kcal")}</span>
          </div>
          <div className="stat">
            <span className="stat-value">{info.fibreG} g</span>
            <span className="stat-label">{t("nutrition.fibre")}</span>
          </div>
          <div className="stat">
            <span className="stat-value">{info.gi}</span>
            <span className={`stat-label gi-${band}`}>
              {t("nutrition.gi")}: {bandLabel}
            </span>
          </div>
        </div>
        <p>
          <strong>{t("nutrition.minerals")}:</strong> {info.minerals.join(", ")}
        </p>
        <p className="muted-note">{t("nutrition.note")}</p>
      </section>

      <section className="detail-section" aria-labelledby="plate-heading">
        <h2 id="plate-heading">{t("plate.heading")}</h2>
        <p>{t("plate.intro")}</p>
        <h3>{t("plate.raw")}</h3>
        <ul className="plate-list">
          <li>
            <strong>{info.raw.name}.</strong> {info.raw.how}
          </li>
        </ul>
        <h3>{t("plate.cooked")}</h3>
        <ul className="plate-list">
          {info.sides.map((side) => (
            <li key={side.name}>
              <strong>{side.name}.</strong> {side.how}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

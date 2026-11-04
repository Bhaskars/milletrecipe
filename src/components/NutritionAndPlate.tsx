"use client";

import type { PlateInfo, VegetableDish } from "@/types/plate";
import { giBand } from "@/types/plate";
import { plateTotals, recipeRow, vegetableRow, type PlateRow } from "@/lib/nutrition";
import { useT } from "@/components/LanguageProvider";
import type { FatEstimate } from "@/lib/fat";

/** Nutrition per serving for the recipe, and the full plate built around it. */
export function NutritionAndPlate({ info, title, fat }: { info: PlateInfo; title: string; fat?: FatEstimate }) {
  const { t } = useT();
  const band = giBand(info.gi);
  const bandLabel = t(band === "low" ? "nutrition.giLow" : band === "medium" ? "nutrition.giMedium" : "nutrition.giHigh");
  const recipe = recipeRow(info);
  const totals = plateTotals(info);
  const vegRows: { dish: VegetableDish; label: string; amount: string; row: PlateRow }[] = [
    { dish: info.raw, label: t("plate.rowRaw"), amount: t("plate.qtyRaw"), row: vegetableRow(info.raw) },
    ...info.sides.map((side) => ({ dish: side, label: t("plate.rowCooked"), amount: t("plate.qtyCooked"), row: vegetableRow(side) })),
  ];

  return (
    <>
      <section className="detail-section" aria-labelledby="nutrition-heading">
        <h2 id="nutrition-heading">{t("nutrition.heading")}</h2>
        <div className="nutrition-grid">
          <div className="stat">
            <span className="stat-value">{info.kcal}</span>
            <span className="stat-label">{t("nutrition.kcal")}</span>
          </div>
          {fat && (
            <>
              <div className="stat">
                <span className="stat-value">{fat.totalG} g</span>
                <span className="stat-label">{t("nutrition.fat")}</span>
              </div>
              <div className="stat">
                <span className="stat-value">{fat.saturatedG} g</span>
                <span className="stat-label">{t("nutrition.satFat")}</span>
              </div>
              <div className="stat">
                <span className="stat-value">{fat.unsaturatedG} g</span>
                <span className="stat-label">{t("nutrition.unsatFat")}</span>
              </div>
            </>
          )}
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
          <div className="stat">
            <span className="stat-value">{recipe.glycemicLoad}</span>
            <span className="stat-label">{t("nutrition.gl")}</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {recipe.sugarTsp} {t("nutrition.tsp")}
            </span>
            <span className="stat-label">{t("nutrition.sugarEq")}</span>
          </div>
        </div>
        <p>
          <strong>{t("nutrition.minerals")}:</strong> {info.minerals.join(", ")}
        </p>
        <p className="muted-note">{t("nutrition.note")}</p>
        {fat && <p className="muted-note">{t("nutrition.fatNote")}</p>}
      </section>

      <section className="detail-section" aria-labelledby="plate-heading">
        <h2 id="plate-heading">{t("plate.heading")}</h2>
        <p>{t("plate.intro")}</p>
        <div className="table-scroll">
          <table className="plate-table">
            <thead>
              <tr>
                <th scope="col">{t("plate.colItem")}</th>
                <th scope="col">{t("plate.colAmount")}</th>
                <th scope="col">{t("nutrition.kcal")}</th>
                <th scope="col">{t("plate.colGi")}</th>
                <th scope="col">{t("nutrition.gl")}</th>
                <th scope="col">{t("nutrition.sugarEq")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {t("plate.rowRecipe")}
                  <span className="plate-name">{title}</span>
                </th>
                <td>{t("nutrition.recipeQty")}</td>
                <td>{recipe.kcal}</td>
                <td>{recipe.gi}</td>
                <td>{recipe.glycemicLoad}</td>
                <td>{recipe.sugarTsp} {t("nutrition.tsp")}</td>
              </tr>
              {vegRows.map(({ dish, label, amount, row }) => (
                <tr key={dish.name}>
                  <th scope="row">
                    {label}
                    <span className="plate-name">{dish.name}</span>
                    <span className="plate-how">{dish.how}</span>
                  </th>
                  <td>{amount}</td>
                  <td>{row.kcal}</td>
                  <td>{row.gi}</td>
                  <td>{row.glycemicLoad}</td>
                  <td>{row.sugarTsp} {t("nutrition.tsp")}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">{t("plate.total")}</th>
                <td></td>
                <td>{totals.kcal}</td>
                <td>–</td>
                <td>{totals.glycemicLoad}</td>
                <td>{totals.sugarTsp} {t("nutrition.tsp")}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
}

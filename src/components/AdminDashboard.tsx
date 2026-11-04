"use client";

import { MILLETS } from "@/data/millets";
import { RECIPES } from "@/data";
import { useT } from "@/components/LanguageProvider";
import { PendingUsers } from "@/components/PendingUsers";

export function AdminDashboard({ email }: { email: string }) {
  const { t } = useT();
  return (
    <main className="container">
      <header className="page-header">
        <p className="eyebrow">{t("role.admin")}</p>
        <h1>{t("admin.title")}</h1>
        <p className="hero-text">{t("admin.signedInAs", { email })}</p>
      </header>

      <section className="admin-stats" aria-label={t("admin.title")}>
        <div className="stat">
          <span className="stat-value">{RECIPES.length}</span>
          <span className="stat-label">{t("admin.recipes")}</span>
        </div>
        <div className="stat">
          <span className="stat-value">{MILLETS.length}</span>
          <span className="stat-label">{t("admin.millets")}</span>
        </div>
      </section>

      <PendingUsers />

      <section aria-labelledby="roles-heading">
        <h2 id="roles-heading">{t("admin.roles")}</h2>
        <table className="roles-table">
          <tbody>
            <tr>
              <th scope="row">{t("admin.adminRole")}</th>
              <td>{t("admin.adminRoleText")}</td>
            </tr>
            <tr>
              <th scope="row">{t("admin.userRole")}</th>
              <td>{t("admin.userRoleText")}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

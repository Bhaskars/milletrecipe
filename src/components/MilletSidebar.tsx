"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MILLETS } from "@/data/millets";
import { useT } from "@/components/LanguageProvider";

/** Left-hand menu: one entry per millet. The entry for the open millet is marked as current. */
export function MilletSidebar() {
  const { t } = useT();
  const pathname = usePathname();

  return (
    <nav aria-label={t("sidebar.label")} className="millet-sidebar">
      <Link href="/recipes" className="millet-link" aria-current={pathname === "/recipes" ? "page" : undefined}>
        {t("sidebar.all")}
      </Link>
      <ul>
        {MILLETS.map((millet) => {
          const href = `/millets/${millet.id}`;
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={millet.id}>
              <Link href={href} className="millet-link" aria-current={active ? "page" : undefined}>
                {t(`millet.name.${millet.id}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { riceMenu } from "@/lib/rice";

/** Left-hand rice menu: every variety grouped by type. The open variety is marked as current. */
export function RiceSidebar() {
  const pathname = usePathname();
  const menu = riceMenu();

  return (
    <nav aria-label="Rice menu" className="millet-sidebar rice-sidebar">
      <Link href="/rice" className="millet-link" aria-current={pathname === "/rice" ? "page" : undefined}>
        All rice
      </Link>
      {menu.map(({ group, varieties }) => (
        <div key={group} className="rice-group">
          <p className="rice-group-label">{group}</p>
          <ul>
            {varieties.map((rice) => {
              const href = `/rice/${rice.id}`;
              return (
                <li key={rice.id}>
                  <Link href={href} className="millet-link" aria-current={pathname === href ? "page" : undefined}>
                    {rice.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

import type { ReactNode } from "react";
import { RiceSidebar } from "@/components/RiceSidebar";

/** Shell for the rice menu: rice varieties on the left, the selected variety on the right. */
export default function RiceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="browse-shell">
      <RiceSidebar />
      <div className="browse-main">{children}</div>
    </div>
  );
}

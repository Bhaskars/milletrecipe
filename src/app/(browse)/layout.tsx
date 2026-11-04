import type { ReactNode } from "react";
import { MilletSidebar } from "@/components/MilletSidebar";

/** Shared shell for browsing: millet menu on the left, the selected millet's content on the right. */
export default function BrowseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="browse-shell">
      <MilletSidebar />
      <div className="browse-main">{children}</div>
    </div>
  );
}

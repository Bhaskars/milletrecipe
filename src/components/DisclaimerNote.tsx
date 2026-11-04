import Link from "next/link";
import { DISCLAIMER_SHORT } from "@/data/disclaimer";

/** Short notice shown at the foot of recipe and rice pages, linking to the full disclaimer. */
export function DisclaimerNote() {
  return (
    <aside className="disclaimer-note" aria-label="Disclaimer">
      <p>
        {DISCLAIMER_SHORT} <Link href="/disclaimer">Read the full disclaimer</Link>.
      </p>
    </aside>
  );
}

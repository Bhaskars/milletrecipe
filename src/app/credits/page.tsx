import type { Metadata } from "next";
import { CreditsView } from "@/components/CreditsView";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Sources, authors and licences for every photo used on MilletRecipe.",
};

export default function CreditsPage() {
  return <CreditsView />;
}

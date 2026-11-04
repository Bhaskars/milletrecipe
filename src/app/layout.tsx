import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MilletRecipe — Traditional Indian Millet Recipes",
    template: "%s · MilletRecipe",
  },
  description: "135 traditional Indian millet recipes, classified by region and diet, with step-by-step cooking instructions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="container">Traditional recipes for every standard kitchen.</div>
        </footer>
      </body>
    </html>
  );
}

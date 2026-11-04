import type { ReactNode } from "react";
import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}

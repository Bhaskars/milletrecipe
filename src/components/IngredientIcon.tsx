"use client";

import type { IngredientCategory } from "@/lib/ingredients";
import { useT } from "@/components/LanguageProvider";

/** A small illustrative icon for each ingredient family. */
export function IngredientIcon({ category }: { category: IngredientCategory }) {
  const { t } = useT();
  const label = t(`category.${category}`);
  const common = { width: 40, height: 40, viewBox: "0 0 48 48", role: "img" as const, "aria-label": label, className: "ingredient-icon" };

  switch (category) {
    case "grain":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#f6e7c8" />
          {[[16, 18], [30, 16], [22, 30], [34, 30], [12, 32]].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="5" ry="3.5" transform={`rotate(-25 ${x} ${y})`} fill="#c8862a" />
          ))}
        </svg>
      );
    case "lentil":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#fbe9b7" />
          <ellipse cx="18" cy="22" rx="7" ry="5" fill="#e0a526" />
          <ellipse cx="32" cy="28" rx="7" ry="5" fill="#d18a1c" />
          <ellipse cx="26" cy="16" rx="5" ry="3.5" fill="#f0bd4b" />
        </svg>
      );
    case "vegetable":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#e3f2dc" />
          <circle cx="24" cy="27" r="13" fill="#d9472b" />
          <path d="M24 14 Q22 8 16 8 Q20 13 24 14 Z" fill="#3d7a3a" />
          <path d="M24 14 Q27 8 33 9 Q29 14 24 14 Z" fill="#4f9a48" />
        </svg>
      );
    case "spice":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#f8e1d5" />
          <polygon points="24,8 28,20 40,20 30,27 34,39 24,32 14,39 18,27 8,20 20,20" fill="#a33b1e" />
        </svg>
      );
    case "dairy":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#e7f0fa" />
          <rect x="14" y="14" width="20" height="22" rx="4" fill="#ffffff" stroke="#6c8fb5" strokeWidth="2" />
          <rect x="14" y="10" width="20" height="6" rx="2" fill="#6c8fb5" />
        </svg>
      );
    case "fat":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#fff4cc" />
          <path d="M24 8 C34 20 36 26 36 30 A12 12 0 0 1 12 30 C12 26 14 20 24 8 Z" fill="#e8b130" />
        </svg>
      );
    case "nut":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#f3e6d6" />
          <ellipse cx="24" cy="24" rx="12" ry="14" fill="#b07a45" />
          <path d="M24 12 Q20 24 24 36" stroke="#7a5230" strokeWidth="2" fill="none" />
        </svg>
      );
    case "sweetener":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#f3e3cf" />
          <rect x="12" y="16" width="24" height="18" rx="4" fill="#9a5b22" />
          <rect x="14" y="18" width="20" height="4" rx="2" fill="#c07a3c" />
        </svg>
      );
    case "meat":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#f8dcd6" />
          <path d="M14 26 Q14 14 26 14 Q36 14 34 26 Q32 36 22 34 Q12 34 14 26 Z" fill="#b8402f" />
          <circle cx="31" cy="16" r="3" fill="#fff4f0" />
        </svg>
      );
    case "fish":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#dcecf7" />
          <ellipse cx="22" cy="24" rx="12" ry="7" fill="#4d82b5" />
          <polygon points="32,24 42,17 42,31" fill="#4d82b5" />
          <circle cx="16" cy="23" r="1.6" fill="#fff" />
        </svg>
      );
    case "herb":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#e3f2dc" />
          <path d="M14 34 Q12 14 34 12 Q36 34 14 34 Z" fill="#4f9a48" />
          <path d="M16 32 Q24 24 32 16" stroke="#2f6b2c" strokeWidth="2" fill="none" />
        </svg>
      );
    case "liquid":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#e1f0fb" />
          <path d="M24 10 C32 22 34 28 34 31 A10 10 0 0 1 14 31 C14 28 16 22 24 10 Z" fill="#5aa0d6" />
        </svg>
      );
    case "salt":
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#eef0f2" />
          <rect x="14" y="14" width="20" height="20" rx="3" fill="#ffffff" stroke="#8a95a1" strokeWidth="2" />
          <circle cx="20" cy="21" r="1.6" fill="#8a95a1" />
          <circle cx="28" cy="27" r="1.6" fill="#8a95a1" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect width="48" height="48" rx="10" fill="#ece7df" />
          <rect x="14" y="16" width="20" height="18" rx="5" fill="#a89a88" />
          <rect x="18" y="11" width="12" height="6" rx="2" fill="#7d7163" />
        </svg>
      );
  }
}

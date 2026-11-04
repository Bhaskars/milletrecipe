"use client";

import type { DishKind } from "@/lib/ingredients";
import { useT } from "@/components/LanguageProvider";

const MILLET_TINT: Record<string, string> = {
  sorghum: "#c98b3a",
  "pearl-millet": "#8c7a5b",
  "finger-millet": "#6b3f22",
  "foxtail-millet": "#d9b25c",
  "little-millet": "#c9a66b",
  "kodo-millet": "#a88f5c",
  "barnyard-millet": "#b8a27a",
  "proso-millet": "#e0c58a",
  "browntop-millet": "#9c6f3f",
};

function Shape({ kind, tint }: { kind: DishKind; tint: string }) {
  switch (kind) {
    case "flatbread":
      return (
        <g>
          <ellipse cx="100" cy="98" rx="52" ry="14" fill="#b07a3a" />
          <ellipse cx="100" cy="92" rx="52" ry="14" fill={tint} />
          <ellipse cx="100" cy="86" rx="50" ry="13" fill="#e9c27a" />
          {[[84, 84], [106, 88], [118, 82], [92, 90]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#a3642b" opacity="0.6" />
          ))}
        </g>
      );
    case "pancake":
      return (
        <g>
          <circle cx="100" cy="92" r="46" fill="#c98b3a" />
          <circle cx="100" cy="92" r="30" fill="#f1d28e" />
          {[[86, 88], [110, 96], [96, 102]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="#b07a3a" opacity="0.7" />
          ))}
        </g>
      );
    case "bowl":
      return (
        <g>
          <path d="M60 84 H140 Q138 116 100 118 Q62 116 60 84 Z" fill="#fff" stroke="#c9b9a2" strokeWidth="2" />
          <path d="M66 88 H134 Q132 110 100 112 Q68 110 66 88 Z" fill={tint} />
          <circle cx="90" cy="92" r="3" fill="#e0a526" />
          <circle cx="110" cy="96" r="2.5" fill="#3d7a3a" />
          <path d="M86 72 Q82 66 86 60 M100 70 Q96 62 100 56 M114 72 Q110 66 114 60" stroke="#b9a58c" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      );
    case "sweet":
      return (
        <g>
          {[[78, 96, 12], [100, 88, 14], [122, 96, 12], [90, 112, 10], [112, 112, 10]].map(([x, y, r], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={r} fill="#c9802a" />
              <circle cx={x - r / 3} cy={y - r / 3} r={r / 4} fill="#f6d28a" />
            </g>
          ))}
        </g>
      );
    case "fritter":
      return (
        <g>
          {[[80, 94], [100, 86], [120, 96], [100, 108]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="15" fill="#b5651d" />
              <circle cx={x} cy={y} r="11" fill="#d98a3f" />
            </g>
          ))}
        </g>
      );
    case "drink":
      return (
        <g>
          <path d="M80 70 L120 70 L114 118 L86 118 Z" fill="#fff" stroke="#c9b9a2" strokeWidth="2" />
          <path d="M84 90 L116 90 L113 115 L87 115 Z" fill={tint} />
          <line x1="110" y1="60" x2="104" y2="84" stroke="#3d7a3a" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
  }
}

export function DishImage({ kind, title, milletId }: { kind: DishKind; title: string; milletId: string }) {
  const { t } = useT();
  const tint = MILLET_TINT[milletId] ?? "#c98b3a";
  return (
    <svg
      role="img"
      aria-label={t("image.finalDish", { title })}
      viewBox="0 0 200 150"
      className="dish-image"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`bg-${milletId}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdf6ea" />
          <stop offset="1" stopColor="#f1e3c8" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" rx="14" fill={`url(#bg-${milletId})`} />
      <ellipse cx="100" cy="118" rx="74" ry="18" fill="#ffffff" stroke="#d9cbb3" strokeWidth="2" />
      <Shape kind={kind} tint={tint} />
    </svg>
  );
}

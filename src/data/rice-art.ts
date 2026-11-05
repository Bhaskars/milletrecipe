/**
 * Illustration spec for each rice variety: the colour of the uncooked grain and
 * its bran or husk edge, and its rough shape. Used to draw identification
 * illustrations on the rice pages. These are drawings, not photographs.
 */
export type GrainShape = "slender" | "long" | "medium" | "short" | "round";

export interface RiceArt {
  fill: string;
  edge: string;
  shape: GrainShape;
}

export const RICE_ART: Record<string, RiceArt> = {
  ponni: { fill: "#f3efe4", edge: "#cfc6b0", shape: "slender" },
  "sona-masoori": { fill: "#f1ece0", edge: "#cbbfa5", shape: "slender" },
  "idli-rice": { fill: "#efe9dc", edge: "#c4b8a0", shape: "short" },
  "parboiled-rice": { fill: "#e9c98a", edge: "#b8923f", shape: "slender" },
  basmati: { fill: "#f5efdc", edge: "#d6cba9", shape: "slender" },
  "seeraga-samba": { fill: "#f2ede2", edge: "#cfc4aa", shape: "short" },
  "kichili-samba": { fill: "#f0e8d0", edge: "#cdbf9c", shape: "short" },
  thooyamalli: { fill: "#f4f1ea", edge: "#d2cbb8", shape: "slender" },
  gobindabhog: { fill: "#f6f2e8", edge: "#d5cdb8", shape: "round" },
  kalanamak: { fill: "#efe3c4", edge: "#3a3a3a", shape: "medium" },
  "mappillai-samba": { fill: "#e8d3b0", edge: "#b5573a", shape: "medium" },
  "karuppu-kavuni": { fill: "#2b2118", edge: "#120d09", shape: "short" },
  navara: { fill: "#9b6b3c", edge: "#5a3a22", shape: "medium" },
  "kerala-matta": { fill: "#d8b07a", edge: "#a4502f", shape: "medium" },
  pokkali: { fill: "#c9a46a", edge: "#9c4a2c", shape: "medium" },
  "brown-rice": { fill: "#c8a47a", edge: "#8a6440", shape: "long" },
  "red-rice": { fill: "#b5553a", edge: "#7a2e1e", shape: "medium" },
  "chak-hao": { fill: "#2e2a27", edge: "#111111", shape: "long" },
  "sticky-rice": { fill: "#f7f5ee", edge: "#d8d2c0", shape: "round" },
};

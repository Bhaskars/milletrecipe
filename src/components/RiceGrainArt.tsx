import { RICE_ART, type GrainShape } from "@/data/rice-art";

const SIZE: Record<GrainShape, { rx: number; ry: number }> = {
  slender: { rx: 13, ry: 4 },
  long: { rx: 14, ry: 5 },
  medium: { rx: 11, ry: 5 },
  short: { rx: 8, ry: 6 },
  round: { rx: 7, ry: 6.5 },
};

/** Deterministic grid of grains, so the same variety always draws the same picture. */
const POSITIONS = Array.from({ length: 18 }, (_, i) => {
  const row = Math.floor(i / 6);
  const col = i % 6;
  return {
    x: 22 + col * 30 + (row % 2) * 15,
    y: 24 + row * 36,
    angle: ((i * 37) % 120) - 60,
  };
});

/** Illustration of uncooked grains for identifying a rice variety. */
export function RiceGrainArt({ riceId }: { riceId: string }) {
  const art = RICE_ART[riceId];
  if (!art) return null;
  const { rx, ry } = SIZE[art.shape];
  return (
    <svg viewBox="0 0 200 110" role="img" aria-label="Illustration of the uncooked grain" className="rice-grain-art">
      <rect width="200" height="110" rx="10" fill="#faf6ec" />
      {POSITIONS.map((p, i) => (
        <ellipse
          key={i}
          cx={p.x}
          cy={p.y}
          rx={rx}
          ry={ry}
          fill={art.fill}
          stroke={art.edge}
          strokeWidth="1.2"
          transform={`rotate(${p.angle} ${p.x} ${p.y})`}
        />
      ))}
    </svg>
  );
}

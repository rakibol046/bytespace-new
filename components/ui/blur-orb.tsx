import { fromCenter } from "./ornament";

const colors = {
  blue: "0 59 226", // #003BE2
  lime: "203 252 1", // #CBFC01
} as const;

type BlurOrbProps = {
  color: keyof typeof colors;
  /** Artboard x/y (relative to the section's top-left on a 1440px frame). */
  x: number;
  y: number;
  size: number;
  opacity: number;
};

/** Soft radial colour wash behind the light sections (20px layer blur in Figma). */
export function BlurOrb({ color, x, y, size, opacity }: BlurOrbProps) {
  const c = colors[color];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full blur-[20px]"
      style={{
        left: fromCenter(x),
        top: y,
        width: size,
        height: size,
        opacity,
        background: `radial-gradient(closest-side, rgb(${c}) 0%, rgb(${c} / 0.23) 53%, rgb(${c} / 0.06) 75%, rgb(${c} / 0) 100%)`,
      }}
    />
  );
}

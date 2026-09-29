import Image from "next/image";
import type { CSSProperties } from "react";

export type OrnamentShape =
  | "cone"
  | "cylinder"
  | "pyramid"
  | "spiral-long"
  | "spiral-short"
  | "torus";

const tints = {
  lime: "var(--color-lime)",
  light: "var(--color-shuttle-50)",
} as const;

type OrnamentProps = {
  shape: OrnamentShape;
  tint: keyof typeof tints;
  size: number;
  /** Mirror horizontally (used for the small spirals). */
  flip?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * A 3D ornament from the design: the grey render with a flat colour layer
 * masked to its silhouette and blended with hard-light.
 */
export function Ornament({ shape, tint, size, flip, className, style }: OrnamentProps) {
  const mask = `url(/assets/ornaments/masks/${shape}.png)`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute isolate ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        transform: flip ? "scaleX(-1)" : undefined,
        ...style,
      }}
    >
      <Image
        src={`/assets/ornaments/${shape}.png`}
        alt=""
        fill
        sizes={`${Math.ceil(size)}px`}
      />
      <span
        className="ornament-tint absolute inset-0"
        style={{ backgroundColor: tints[tint], maskImage: mask, WebkitMaskImage: mask }}
      />
    </div>
  );
}

/** Horizontal offset from the centre of a 1440px artboard, as a CSS length. */
export function fromCenter(x: number) {
  const offset = x - 720;
  return `calc(50% ${offset < 0 ? "-" : "+"} ${Math.abs(offset)}px)`;
}

import type { ReactNode } from "react";

type ScaledArtboardProps = {
  width: number;
  height: number;
  /** Tailwind classes that size the outer box per breakpoint. */
  frameClassName: string;
  /** Tailwind classes that scale the inner artboard to match `frameClassName`. */
  scaleClassName: string;
  label?: string;
  children: ReactNode;
};

/**
 * A fixed-size illustration (photos + overlapping cards) laid out in design
 * pixels, scaled down as a whole on narrow screens so the composition keeps
 * its proportions.
 */
export function ScaledArtboard({
  width,
  height,
  frameClassName,
  scaleClassName,
  label,
  children,
}: ScaledArtboardProps) {
  return (
    <div role={label ? "img" : undefined} aria-label={label} className={`relative shrink-0 ${frameClassName}`}>
      <div className={`absolute top-0 left-0 origin-top-left ${scaleClassName}`} style={{ width, height }}>
        {children}
      </div>
    </div>
  );
}

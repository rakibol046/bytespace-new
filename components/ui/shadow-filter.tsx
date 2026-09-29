import { Fragment } from "react";

/**
 * The "A" effect style from Figma: eight stacked drop shadows computed from
 * the layer's alpha, so they follow cut-out photos instead of their box.
 * Apply with the `shadow-soft` class after rendering this once on the page.
 */
const layers = [
  { dx: 0.518356, dy: 0.740509, blur: 1.51787, opacity: 0.04 },
  { dx: 2.23292, dy: 3.18988, blur: 2.86172, opacity: 0.06 },
  { dx: 5.38293, dy: 7.6899, blur: 4.78564, opacity: 0.07 },
  { dx: 10.2076, dy: 14.5823, blur: 8.04375, opacity: 0.08 },
  { dx: 16.9463, dy: 24.2089, blur: 12, opacity: 0.09 },
  { dx: 25.8381, dy: 36.9115, blur: 18, opacity: 0.1 },
  { dx: 37.1223, dy: 53.0318, blur: 28, opacity: 0.105219 },
  { dx: 51.0381, dy: 72.9116, blur: 36, opacity: 0.13 },
];

export function ShadowFilterDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <filter
        id="shadow-soft"
        x="-10%"
        y="-10%"
        width="150%"
        height="150%"
        colorInterpolationFilters="sRGB"
      >
        {layers.map((layer, i) => (
          <Fragment key={i}>
            <feOffset in="SourceAlpha" dx={layer.dx} dy={layer.dy} />
            <feGaussianBlur stdDeviation={layer.blur} />
            <feColorMatrix
              type="matrix"
              values={`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${layer.opacity} 0`}
              result={`shadow${i}`}
            />
          </Fragment>
        ))}
        <feMerge>
          {layers.map((_, i) => (
            <feMergeNode key={i} in={`shadow${i}`} />
          ))}
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </svg>
  );
}

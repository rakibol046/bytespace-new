import { averageRating, STAR_VALUES, totalRatings } from "@/lib/catalog";
import type { RatingCounts } from "@/lib/types";
import { StarRating } from "./star-rating";

/**
 * Average score plus the per-star distribution. Each row shows the five-star
 * glyph row from the design; `bars` can supply the drawn bar lengths.
 */
export function RatingSummary({ counts, bars }: { counts: RatingCounts; bars?: RatingCounts }) {
  const total = totalRatings(counts);

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-shuttle-200 bg-white p-6 sm:flex-row sm:items-center sm:px-[39px] sm:py-[39px]">
      <div className="flex h-[140px] w-full shrink-0 flex-col items-center justify-center rounded-lg bg-lime sm:w-[129px]">
        <p className="text-sm leading-[17px] font-medium text-shuttle-950">Ratings</p>
        <p className="font-heading text-[36px] leading-[43px] text-shuttle-950">
          {averageRating(counts)}
          <span className="sr-only"> out of 5 from {total} ratings</span>
        </p>
      </div>

      <ul className="flex w-full flex-col gap-1">
        {STAR_VALUES.map((star) => {
          const share = (bars ? bars[star] : total ? counts[star] / total : 0) * 100;
          return (
            <li key={star} className="flex items-center gap-[18px]">
              <span className="h-2 min-w-0 flex-1 rounded bg-shuttle-100" aria-hidden>
                <span className="block h-full rounded bg-lime" style={{ width: `${share}%` }} />
              </span>
              <StarRating value={5} size={20} gap={8} decorative />
              <span className="w-10 text-right text-base leading-[26px] text-shuttle-700">
                <span className="sr-only">{star}-star ratings: </span>
                {counts[star]}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

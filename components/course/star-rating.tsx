import { StarIcon } from "@/components/ui/icons";

type StarRatingProps = {
  value: number;
  size?: 20 | 24;
  gap?: number;
  /** Hide from assistive tech when the surrounding text already states the rating. */
  decorative?: boolean;
};

/** Row of five stars; `value` of them are filled, the rest are faint. */
export function StarRating({ value, size = 24, gap = 4, decorative }: StarRatingProps) {
  return (
    <span
      className="flex"
      style={{ gap }}
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": `${value} out of 5 stars` })}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          width={size}
          height={size}
          className={star <= value ? "text-shuttle-700" : "text-shuttle-100"}
        />
      ))}
    </span>
  );
}

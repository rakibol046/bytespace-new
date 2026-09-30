"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@/components/ui/icons";
import type { Review } from "@/lib/types";
import { StarRating } from "./star-rating";

type Filter = "all" | Review["rating"];

const chipClass = "flex items-center rounded-3xl text-base leading-[19px] font-medium transition-colors";

/** Individual reviews with the "All rating / ★5 … ★1" filter chips. */
export function ReviewList({ reviews }: { reviews: Review[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? reviews : reviews.filter((review) => review.rating === filter);
  const filters: Filter[] = ["all", 5, 4, 3, 2, 1];

  return (
    <div className="flex flex-col gap-6">
      <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap gap-4">
        {filters.map((value) => {
          const selected = value === filter;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(value)}
              className={`${chipClass} ${value === "all" ? "h-[43px] px-4" : "h-12 gap-1 px-4"} ${
                selected ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
              }`}
            >
              {value === "all" ? (
                "All rating"
              ) : (
                <>
                  <StarIcon />
                  {value}
                  <span className="sr-only"> stars</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {reviews.length} reviews
      </p>

      {visible.length === 0 ? (
        <p className="rounded-3xl border border-dashed border-shuttle-200 p-10 text-center text-base leading-[26px] text-shuttle-700">
          {reviews.length === 0 ? "No written reviews yet." : "No reviews with this rating yet."}
        </p>
      ) : (
        <ul className="flex flex-col gap-6">
          {visible.map((review) => (
            <li key={review.id}>
              <article className="flex flex-col gap-6 rounded-3xl border border-shuttle-200 bg-white p-6 sm:p-[39px]">
                <header className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.avatar}
                        alt=""
                        width={52}
                        height={52}
                        className="size-[52px] rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-lg leading-[22px] font-medium text-shuttle-950">{review.author}</h3>
                        <p className="text-base leading-6 text-shuttle-700">{review.role}</p>
                      </div>
                    </div>
                    <StarRating value={review.rating} />
                  </div>
                  <p className="shrink-0 text-base leading-6 text-shuttle-700">{review.postedAgo}</p>
                </header>
                <p className={`text-base text-shuttle-700 ${review.bodyLeading ?? "leading-[26px]"}`}>{review.body}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

/**
 * Course category filter pills. The rows mirror the design on desktop; on
 * smaller screens the rows dissolve into one centred, wrapping list.
 */
export function CategoryTabs({ rows }: { rows: string[][] }) {
  const [active, setActive] = useState(rows[0][0]);

  return (
    <div
      role="group"
      aria-label="Course categories"
      className="flex flex-wrap justify-center gap-4 xl:flex-col xl:items-center xl:gap-[21px]"
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="contents xl:flex xl:gap-4">
          {row.map((label) => {
            const selected = label === active;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(label)}
                className={`h-[43px] rounded-full px-4 text-base leading-[19px] font-medium whitespace-nowrap transition-colors ${
                  selected
                    ? "bg-lime text-shuttle-950"
                    : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
                }`}
              >
                {label}
              </button>
            );
          })}
          {rowIndex === rows.length - 1 && (
            <a
              href="#categories"
              className="self-center text-base leading-[19px] font-medium whitespace-nowrap text-primary hover:underline"
            >
              + More
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

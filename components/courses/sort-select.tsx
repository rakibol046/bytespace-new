"use client";

import { useRouter } from "next/navigation";
import { SortIcon } from "@/components/ui/icons";

type SortSelectProps = {
  value: string;
  /** Each option carries the URL that applies it (built on the server). */
  options: { value: string; label: string; href: string }[];
};

/** "Most relevant" pill: a native select that navigates to the chosen sort order. */
export function SortSelect({ value, options }: SortSelectProps) {
  const router = useRouter();

  return (
    <label className="relative flex h-12 items-center rounded-3xl border border-shuttle-200 bg-white text-shuttle-700 outline-offset-2 outline-primary focus-within:outline-2 hover:border-shuttle-400">
      <span className="sr-only">Sort courses</span>
      <SortIcon className="pointer-events-none absolute left-4 text-shuttle-950" />
      <select
        value={value}
        onChange={(event) => {
          const option = options.find((item) => item.value === event.target.value);
          if (option) router.push(option.href, { scroll: false });
        }}
        className="h-full cursor-pointer appearance-none rounded-3xl bg-transparent pr-4 pl-11 text-base leading-[19px] font-medium outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

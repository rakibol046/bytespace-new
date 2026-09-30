"use client";

import Image from "next/image";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { CourseQuery } from "@/lib/search";

/**
 * GET form for /search. Enter submits; changing the scope select submits too.
 * Active level/category/sort filters are carried along as hidden fields.
 */
export function SearchForm({ query }: { query: CourseQuery }) {
  return (
    <form
      role="search"
      action="/search"
      className="flex w-full max-w-[461px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-start sm:gap-4"
    >
      <label className="flex h-[52px] items-center gap-2 rounded-3xl bg-white px-6 py-3 outline-offset-2 outline-white focus-within:outline-2 sm:w-[461px]">
        <Image src="/assets/icons/search.svg" alt="" width={24} height={24} />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          defaultValue={query.q}
          placeholder="Search"
          className="body-l w-full min-w-0 bg-transparent text-shuttle-950 outline-none placeholder:text-shuttle-400"
        />
      </label>

      <label className="relative flex h-12 items-center rounded-3xl bg-lime outline-offset-2 outline-white focus-within:outline-2 hover:bg-lime-strong">
        <span className="sr-only">Search in</span>
        <select
          name="scope"
          defaultValue={query.scope}
          onChange={(event) => event.currentTarget.form?.requestSubmit()}
          className="h-full w-full cursor-pointer appearance-none rounded-3xl bg-transparent pr-14 pl-6 text-lg leading-[22px] font-medium text-shuttle-950 outline-none sm:w-[147px]"
        >
          <option value="courses">Courses</option>
          <option value="creators">Creators</option>
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-6 text-shuttle-950" />
      </label>

      {query.level && <input type="hidden" name="level" value={query.level} />}
      {query.category && <input type="hidden" name="category" value={query.category} />}
      {query.sort !== "relevant" && <input type="hidden" name="sort" value={query.sort} />}
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
}

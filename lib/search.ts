import { getCourseCreator } from "@/lib/catalog";
import { categories, levels, type Category } from "@/lib/data/categories";
import type { Course, CourseLevel } from "@/lib/types";

const PAGE_SIZE = 18;

export const sortOptions = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "popular", label: "Most popular" },
] as const;

export type SortValue = (typeof sortOptions)[number]["value"];
export type SearchScope = "courses" | "creators";

export type CourseQuery = {
  q: string;
  scope: SearchScope;
  level?: CourseLevel;
  category?: Category;
  sort: SortValue;
  page: number;
};

type RawParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function isOneOf<T extends string>(list: readonly T[], value: string | undefined): value is T {
  return value !== undefined && (list as readonly string[]).includes(value);
}

/** Reads and validates URL search params; unknown values fall back to defaults. */
export function parseCourseQuery(params: RawParams): CourseQuery {
  const level = first(params.level);
  const category = first(params.category);
  const sort = first(params.sort);
  const page = Number.parseInt(first(params.page) ?? "1", 10);

  return {
    q: (first(params.q) ?? "").trim(),
    scope: first(params.scope) === "creators" ? "creators" : "courses",
    level: isOneOf(levels, level) ? level : undefined,
    category: isOneOf(categories, category) ? category : undefined,
    sort: isOneOf(
      sortOptions.map((option) => option.value),
      sort,
    )
      ? sort
      : "relevant",
    page: Number.isFinite(page) && page > 0 ? page : 1,
  };
}

/** Builds a URL for the same page with some params changed (undefined removes a param). */
export function withQuery(
  basePath: string,
  query: CourseQuery,
  changes: Partial<Record<keyof CourseQuery, string | number | undefined>>,
): string {
  const merged: Record<string, string | number | undefined> = {
    q: query.q || undefined,
    scope: query.scope === "courses" ? undefined : query.scope,
    level: query.level,
    category: query.category,
    sort: query.sort === "relevant" ? undefined : query.sort,
    page: query.page === 1 ? undefined : query.page,
    // Any filter change sends you back to the first page.
    ...("page" in changes ? {} : { page: undefined }),
    ...changes,
  };
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(merged)) {
    if (value !== undefined && value !== "") params.set(key, String(value));
  }
  const search = params.toString();
  return search ? `${basePath}?${search}` : basePath;
}

function matchScore(course: Course, words: string[], scope: SearchScope): number {
  const creator = getCourseCreator(course);
  const fields =
    scope === "creators"
      ? [creator.name, creator.handle]
      : [course.title, course.headline, course.subtitle, course.category, course.level, creator.name];
  const haystack = fields.join(" ").toLowerCase();
  const title = course.title.toLowerCase();
  let score = 0;
  for (const word of words) {
    if (!haystack.includes(word)) return 0;
    score += title.includes(word) ? 2 : 1;
  }
  return score;
}

export type CourseResults = {
  items: Course[];
  total: number;
  page: number;
  pageCount: number;
};

export function searchCourses(source: Course[], query: CourseQuery): CourseResults {
  const words = query.q.toLowerCase().split(/\s+/).filter(Boolean);

  const matches = source
    .map((course, index) => ({ course, index, score: words.length ? matchScore(course, words, query.scope) : 1 }))
    .filter(({ course, score }) => {
      if (score === 0) return false;
      if (query.level && course.level !== query.level) return false;
      if (query.category && course.category !== query.category) return false;
      return true;
    });

  matches.sort((a, b) => {
    if (query.sort === "rating") {
      return b.course.rating - a.course.rating || a.index - b.index;
    }
    if (query.sort === "popular") return b.course.studentCount - a.course.studentCount || a.index - b.index;
    return b.score - a.score || a.index - b.index;
  });

  const pageCount = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  const page = Math.min(query.page, pageCount);
  const start = (page - 1) * PAGE_SIZE;

  return {
    items: matches.slice(start, start + PAGE_SIZE).map((match) => match.course),
    total: matches.length,
    page,
    pageCount,
  };
}

import Link from "next/link";
import { searchPills } from "@/lib/data/categories";
import { withQuery, type CourseQuery } from "@/lib/search";

/** Quick category links under the search filters; "Featured" shows every course. */
export function CategoryPills({ basePath, query }: { basePath: string; query: CourseQuery }) {
  const pills = [
    { label: "Featured", href: withQuery(basePath, query, { category: undefined }), selected: !query.category },
    ...searchPills.map((category) => ({
      label: category,
      href: withQuery(basePath, query, { category }),
      selected: query.category === category,
    })),
  ];

  return (
    <nav aria-label="Course categories">
      <ul className="flex flex-wrap gap-4 xl:justify-between xl:gap-0">
        {pills.map((pill) => (
          <li key={pill.label}>
            <Link
              href={pill.href}
              scroll={false}
              aria-current={pill.selected ? "page" : undefined}
              className={`flex h-[43px] items-center rounded-full px-4 text-base leading-[19px] font-medium whitespace-nowrap transition-colors ${
                pill.selected ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
              }`}
            >
              {pill.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

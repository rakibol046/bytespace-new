import { CategoryIcon, FilterIcon, LevelIcon } from "@/components/ui/icons";
import { categories, levels } from "@/lib/data/categories";
import { sortOptions, withQuery, type CourseQuery } from "@/lib/search";
import { FilterMenu, type FilterGroup } from "./filter-menu";
import { SortSelect } from "./sort-select";

type CourseFilterBarProps = {
  basePath: string;
  query: CourseQuery;
};

/** Filter / Level / Category menus and the sort control (search and creator pages). */
export function CourseFilterBar({ basePath, query }: CourseFilterBarProps) {
  const levelGroup: FilterGroup = {
    legend: "Level",
    options: [
      { label: "All levels", href: withQuery(basePath, query, { level: undefined }), selected: !query.level },
      ...levels.map((level) => ({
        label: level,
        href: withQuery(basePath, query, { level }),
        selected: query.level === level,
      })),
    ],
  };

  const categoryGroup: FilterGroup = {
    legend: "Category",
    options: [
      { label: "All categories", href: withQuery(basePath, query, { category: undefined }), selected: !query.category },
      ...categories.map((category) => ({
        label: category,
        href: withQuery(basePath, query, { category }),
        selected: query.category === category,
      })),
    ],
  };

  const clearHref = withQuery(basePath, query, { level: undefined, category: undefined });

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <FilterMenu
          label="Filter"
          icon={<FilterIcon />}
          groups={[levelGroup, categoryGroup]}
          active={Boolean(query.level || query.category)}
          clearHref={clearHref}
        />
        <FilterMenu label="Level" icon={<LevelIcon />} groups={[levelGroup]} active={Boolean(query.level)} />
        <FilterMenu label="Category" icon={<CategoryIcon />} groups={[categoryGroup]} active={Boolean(query.category)} />
      </div>
      <SortSelect
        value={query.sort}
        options={sortOptions.map((option) => ({
          ...option,
          href: withQuery(basePath, query, { sort: option.value === "relevant" ? undefined : option.value }),
        }))}
      />
    </div>
  );
}

import type { Metadata } from "next";
import { CategoryPills } from "@/components/courses/category-pills";
import { CourseFilterBar } from "@/components/courses/course-filter-bar";
import { CourseGrid } from "@/components/courses/course-grid";
import { Pagination } from "@/components/courses/pagination";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SearchForm } from "@/components/search/search-form";
import { courses } from "@/lib/data/courses";
import { parseCourseQuery, searchCourses, withQuery } from "@/lib/search";

export async function generateMetadata({ searchParams }: PageProps<"/search">): Promise<Metadata> {
  const { q } = parseCourseQuery(await searchParams);
  return {
    title: q ? `Search results for “${q}” — ByteSpace` : "Find Your Next Course — ByteSpace",
    description: "Search and filter ByteSpace courses by topic, level and category.",
  };
}

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const query = parseCourseQuery(await searchParams);
  const results = searchCourses(courses, query);
  const resetHref = withQuery("/search", query, { level: undefined, category: undefined, q: undefined });

  return (
    <>
      <SiteHeader current="courses" />
      <main>
        <section
          aria-labelledby="search-title"
          className="bytespace-grid px-4 pt-[140px] pb-16 sm:px-8 xl:h-[360px] xl:px-0 xl:pt-[164px] xl:pb-0"
        >
          <div className="mx-auto flex max-w-[624px] flex-col items-center gap-8">
            <h1
              id="search-title"
              className="font-heading text-center text-[32px] leading-[1.2] text-shuttle-50 md:text-[36px] md:leading-[43px]"
            >
              Find Your Next Course
            </h1>
            <SearchForm key={`${query.q}|${query.scope}`} query={query} />
          </div>
        </section>

        <div className="mx-auto flex max-w-[1201px] flex-col px-4 pt-10 pb-16 sm:px-8 md:pt-[72px] md:pb-[72px] xl:px-0">
          <h2 className="sr-only">Results</h2>
          <p className="sr-only" aria-live="polite">
            {results.total} {results.total === 1 ? "course" : "courses"} found
          </p>
          <CourseFilterBar basePath="/search" query={query} />
          <div className="mt-8">
            <CategoryPills basePath="/search" query={query} />
          </div>
          <div className="mt-10 md:mt-[77px]">
            <CourseGrid courses={results.items} resetHref={resetHref} />
          </div>
          <div className="mt-12 md:mt-[72px]">
            <Pagination
              page={results.page}
              pageCount={results.pageCount}
              hrefFor={(page) => withQuery("/search", query, { page: page === 1 ? undefined : page })}
            />
          </div>
        </div>
      </main>
      <SiteFooter bordered />
    </>
  );
}

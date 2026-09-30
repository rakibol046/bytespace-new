import Link from "next/link";
import { CourseCard } from "@/components/ui/course-card";
import type { Course } from "@/lib/types";

type CourseGridProps = {
  courses: Course[];
  /** Where "Clear filters" goes when nothing matches. */
  resetHref: string;
};

/** Three-column catalogue grid shared by Home-style listings, search and creator pages. */
export function CourseGrid({ courses, resetHref }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-shuttle-200 px-6 py-16 text-center">
        <p className="font-heading text-xl leading-6 text-shuttle-950">No courses found</p>
        <p className="max-w-md text-base leading-[26px] text-shuttle-700">
          Try a different search term or remove some filters.
        </p>
        <Link
          href={resetHref}
          className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[22px] font-medium text-shuttle-950 hover:bg-lime-strong"
        >
          Clear filters
        </Link>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <li key={course.slug} className="flex w-full justify-center">
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}

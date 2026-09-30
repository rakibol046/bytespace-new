import Link from "next/link";
import { coursePath } from "@/lib/catalog";
import type { Course } from "@/lib/types";

export type CourseTab = "about" | "lessons" | "reviews";

type CourseTabsProps = {
  course: Course;
  active: CourseTab;
  /** The designs label this tab "Lessons" on About and "Lesson" on the other two tabs. */
  lessonsLabel?: string;
};

/** About / Lessons / Reviews navigation; each tab is its own route. */
export function CourseTabs({ course, active, lessonsLabel = "Lessons" }: CourseTabsProps) {
  const tabs: { id: CourseTab; label: string; href: string }[] = [
    { id: "about", label: "About", href: coursePath(course) },
    { id: "lessons", label: lessonsLabel, href: coursePath(course, "lessons") },
    { id: "reviews", label: "Reviews", href: coursePath(course, "reviews") },
  ];

  return (
    <nav aria-label="Course sections">
      <ul className="flex flex-wrap gap-4">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              href={tab.href}
              scroll={false}
              aria-current={tab.id === active ? "page" : undefined}
              className={`flex h-[43px] items-center rounded-full px-4 text-base leading-[19px] font-medium transition-colors ${
                tab.id === active ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
              }`}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

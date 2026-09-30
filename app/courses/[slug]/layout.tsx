import { notFound } from "next/navigation";
import { CourseHero } from "@/components/course/course-hero";
import { CourseSidebar } from "@/components/course/course-sidebar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCourse, getCourseCreator } from "@/lib/catalog";
import { courses } from "@/lib/data/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export const dynamicParams = false;

export default async function CourseLayout({ children, params }: LayoutProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const creator = getCourseCreator(course);

  return (
    <>
      <SiteHeader current="courses" />
      <main>
        <CourseHero course={course} creator={creator} />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-4 pt-10 sm:px-8 xl:block xl:px-0 xl:pt-0">
          {/* At xl the card overlaps the blue hero, starting 541px above this block. */}
          <CourseSidebar
            course={course}
            creator={creator}
            className="xl:absolute xl:top-[-541px] xl:right-0 xl:w-[412px]"
          />
          <div className="w-full max-w-[725px]">{children}</div>
        </div>
      </main>
      <SiteFooter bordered />
    </>
  );
}

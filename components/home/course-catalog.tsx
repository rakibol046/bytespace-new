import { CourseCard } from "@/components/ui/course-card";
import { categoryTabRows, courses } from "@/lib/home-content";
import { CategoryTabs } from "./category-tabs";
import { SectionHeading } from "./section-heading";

export function CourseCatalog() {
  return (
    <section id="courses" aria-labelledby="catalog-title" className="px-4 pt-14 sm:px-8 md:pt-[72px]">
      <SectionHeading id="catalog-title" title="Discover Your Passion, Build Your Skills" titleClassName="max-w-[588px]">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
        courses across different fields, from technology to the arts, and make a difference in your
        career and life.
      </SectionHeading>

      <div className="mx-auto mt-[42px] max-w-[1086px]">
        <CategoryTabs rows={categoryTabRows} />
      </div>

      <div className="mx-auto mt-14 grid max-w-[1199px] grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 md:mt-[77px] xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}

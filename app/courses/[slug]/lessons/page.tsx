import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseSection, CourseText } from "@/components/course/course-section";
import { CourseTabs } from "@/components/course/course-tabs";
import { LearningProgress } from "@/components/course/learning-progress";
import { VideoIcon } from "@/components/ui/icons";
import { getCourse } from "@/lib/catalog";

export async function generateMetadata({ params }: PageProps<"/courses/[slug]/lessons">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  return {
    title: `Lessons · ${course.title} — ByteSpace`,
    description: `Explore the ${course.modules.length} modules of ${course.headline}.`,
  };
}

/** Sample progress shown in the design; there is no learner account data yet. */
const SAMPLE_PROGRESS = 55;

export default async function CourseLessonsPage({ params }: PageProps<"/courses/[slug]/lessons">) {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  return (
    <div className="pb-16 xl:pt-[79px] xl:pb-[83px]">
      <CourseTabs course={course} active="lessons" lessonsLabel="Lesson" />
      <div className="mt-10 flex flex-col gap-6">
        <CourseSection title="Explore the Modules">
          <CourseText>
            Immerse yourself in the course content as we break down each module into comprehensive
            lessons, providing practical insights and hands-on experiences.
          </CourseText>
        </CourseSection>

        <CourseSection title="Lesson List">
          <ol className="flex flex-col gap-6">
            {course.modules.map((module) => (
              <li key={module.title} className="flex items-start gap-[13px]">
                <span className="mt-[1.5px] flex size-[72px] shrink-0 items-center justify-center rounded-3xl bg-lime text-shuttle-950">
                  <VideoIcon />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base leading-[19px] font-medium text-shuttle-950">
                    Module {module.number}: {module.title}
                  </h3>
                  <CourseText>{module.summary}</CourseText>
                </div>
              </li>
            ))}
          </ol>
        </CourseSection>

        <CourseSection title="Lesson Content">
          <CourseText>
            Engage with each lesson through captivating video content, detailed textual explanations, and
            interactive elements. Download resources, complete assignments, and test your understanding
            with quizzes.
          </CourseText>
        </CourseSection>

        <CourseSection title="Lesson Progress Tracking">
          <CourseText>
            Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding
            you through your learning journey.
          </CourseText>
          <LearningProgress value={SAMPLE_PROGRESS} />
        </CourseSection>
      </div>
    </div>
  );
}

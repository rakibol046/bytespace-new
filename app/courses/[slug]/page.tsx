import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CourseSection, CourseText } from "@/components/course/course-section";
import { CourseTabs } from "@/components/course/course-tabs";
import { CheckCircleIcon } from "@/components/ui/icons";
import { getCourse } from "@/lib/catalog";

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  return {
    title: `${course.headline} — ByteSpace`,
    description: course.subtitle,
  };
}

export default async function CourseAboutPage({ params }: PageProps<"/courses/[slug]">) {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  return (
    <div className="pb-16 xl:pt-[62.5px] xl:pb-[64.5px]">
      <CourseTabs course={course} active="about" />
      <div className="mt-10 flex flex-col gap-6">
        <CourseSection title="Description">
          <div className="flex flex-col gap-[26px]">
            {course.description.map((paragraph) => (
              <CourseText key={paragraph.slice(0, 32)}>{paragraph}</CourseText>
            ))}
          </div>
        </CourseSection>

        {course.sneakPeek.length > 0 && (
          <CourseSection title="Sneak Peak">
            <ul className="grid grid-cols-2 gap-[19px] sm:grid-cols-4">
              {course.sneakPeek.map((image) => (
                <li key={image.src} className="relative aspect-[167/125] overflow-hidden rounded-2xl bg-[#d9d9d9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 167px, 45vw"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </CourseSection>
        )}

        <CourseSection title="Key Points">
          <ul className="flex flex-col gap-3">
            {course.keyPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-base leading-[26px] text-shuttle-700">
                <CheckCircleIcon className="shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </CourseSection>
      </div>
    </div>
  );
}

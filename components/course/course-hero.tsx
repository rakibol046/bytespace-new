import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PlayIcon, SignalIcon, StarOutlineIcon, UsersIcon } from "@/components/ui/icons";
import { courseDetailFacts, coursePath, creatorPath } from "@/lib/catalog";
import type { Course, Creator } from "@/lib/types";
import { ShareButton } from "./share-button";

function Badge({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex h-10 items-center gap-2 rounded-[20px] bg-white px-6 text-base leading-[19px] font-medium text-shuttle-950">
      <span className="text-primary">{icon}</span>
      {children}
    </li>
  );
}

/** Blue course header shared by the About, Lessons and Reviews tabs. */
export function CourseHero({ course, creator }: { course: Course; creator: Creator }) {
  const facts = courseDetailFacts(course);

  return (
    <section
      aria-labelledby="course-title"
      className="bytespace-grid px-4 pt-[140px] pb-10 sm:px-8 xl:h-[957px] xl:px-0 xl:pt-[172px] xl:pb-0"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start xl:ml-0.5">
          <h1
            id="course-title"
            className="font-heading text-[28px] leading-[1.2] text-shuttle-50 md:text-[36px] md:leading-[43px]"
          >
            {course.headline}
          </h1>
          <p className="font-heading mt-2 text-lg leading-[1.3] text-shuttle-50 md:text-xl md:leading-6">
            {course.subtitle}
          </p>
          <p className="mt-6 text-lg leading-[22px] font-medium text-[#f1f4fe]">
            by{" "}
            <Link href={creatorPath(creator)} className="text-lime hover:underline">
              {creator.handle}
            </Link>
          </p>
          <ul className="mt-6 flex flex-wrap gap-4">
            <Badge icon={<SignalIcon />}>{facts.level}</Badge>
            <Badge icon={<StarOutlineIcon />}>
              {facts.rating} ({facts.reviewCount} reviews)
            </Badge>
            <Badge icon={<UsersIcon />}>{course.studentCount} Students</Badge>
          </ul>
        </div>

        {/* Figma places Share 85px past the content edge; narrower screens keep a 16px margin. */}
        <ShareButton
          title={course.headline}
          className="mt-6 xl:absolute xl:top-0 xl:right-[max(-85px,calc((1200px-100vw)/2+16px))] xl:mt-0"
        />

        <div className="relative mt-10 aspect-[720/479] w-full max-w-[720px] overflow-hidden rounded-3xl bg-thumb xl:mt-[59px] xl:ml-[5px]">
          <Image
            src={course.preview}
            alt={`Preview of ${course.headline}`}
            fill
            preload
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
          <Link
            href={coursePath(course, "lessons")}
            aria-label="Preview the course lessons"
            className="absolute top-1/2 left-1/2 flex size-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-charcoal bg-[#3d3d3d]/24 text-[#f5f2ff] backdrop-blur-[20px] transition-transform hover:scale-105"
          >
            <PlayIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

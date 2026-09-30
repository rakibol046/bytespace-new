import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CertificateIcon, ConsultationIcon, ResourcesIcon, VideoSmallIcon } from "@/components/ui/icons";
import { courseDetailFacts, creatorPath, formatPrice } from "@/lib/catalog";
import type { Course, Creator } from "@/lib/types";

const includes: { icon: ReactNode; label: string }[] = [
  { icon: <ResourcesIcon />, label: "Learning Resources" },
  { icon: <VideoSmallIcon />, label: "Quality Lesson Videos" },
  { icon: <CertificateIcon />, label: "Certificate of Completion" },
  { icon: <ConsultationIcon />, label: "Private Consultation" },
];

const cta = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

/** Enrolment card: lesson preview, price, what's included and the creator. */
export function CourseSidebar({ course, creator, className }: { course: Course; creator: Creator; className?: string }) {
  const facts = courseDetailFacts(course);

  return (
    <aside
      aria-label="Course summary"
      className={`flex flex-col gap-6 rounded-3xl border border-shuttle-200 bg-white p-6 sm:p-[39px] ${className ?? ""}`}
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl leading-6 text-shuttle-950">
          {facts.lessonCount} Lessons ({facts.duration})
        </h2>
        <ol className="flex flex-col gap-3">
          {course.lessonPreview.map((lesson, i) => (
            <li key={lesson.title} className="flex items-start justify-between gap-4 text-base">
              <span className="flex gap-2 leading-[19px] text-shuttle-950">
                <span className="w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="max-w-[198px]">{lesson.title}</span>
              </span>
              <span className="shrink-0 pt-px leading-[26px] whitespace-nowrap text-primary">{lesson.duration}</span>
            </li>
          ))}
          {facts.moreLessons > 0 && (
            <li className="text-base leading-[26px] text-shuttle-700">{facts.moreLessons} more videos</li>
          )}
        </ol>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-base leading-[26px] text-shuttle-700">{cta}</p>
        <p className="flex items-end">
          <span className="text-[32px] leading-[38px] font-bold text-primary">{formatPrice(course.price)}</span>
          <span className="text-base leading-[26px] text-shuttle-700">/lifetime</span>
        </p>
        {/* No checkout exists yet, so enrolling starts with creating an account. */}
        <Link
          href="/register"
          className="flex h-[46px] items-center justify-center rounded-3xl bg-lime text-lg leading-[22px] font-medium text-shuttle-950 transition-colors hover:bg-lime-strong"
        >
          Enroll Now
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl leading-6 text-shuttle-950">This course include</h2>
        <ul className="flex flex-col gap-3">
          {includes.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-base leading-[26px] text-shuttle-700">
              <span className="text-primary">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 border-t border-divider pt-6">
        <div className="flex items-center gap-3">
          <Image src={creator.sidebarAvatar} alt="" width={52} height={52} className="size-[52px] rounded-full object-cover" />
          <div className="flex flex-col">
            <p className="text-lg leading-[22px] font-medium text-shuttle-950">{creator.name}</p>
            <p className="text-base leading-[26px] text-shuttle-700">{creator.role}</p>
          </div>
        </div>
        <p className="text-base leading-[26px] text-shuttle-700">{cta}</p>
        <Link
          href={creatorPath(creator)}
          className="self-start rounded-[17px] border border-shuttle-200 px-4 py-2 text-base leading-[19px] font-medium text-shuttle-700 transition-colors hover:border-shuttle-400"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}

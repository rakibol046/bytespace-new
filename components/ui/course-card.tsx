import Image from "next/image";
import type { Course } from "@/lib/home-content";
import { AvatarStack } from "./avatar-stack";

type CourseCardProps = {
  course: Course;
  /**
   * `grid` is the catalogue card; `showcase` is the copy inside the
   * "Professional Growth" composition, which has taller pills and line boxes.
   */
  variant?: "grid" | "showcase";
  className?: string;
};

export function CourseCard({ course, variant = "grid", className }: CourseCardProps) {
  const showcase = variant === "showcase";

  return (
    <article
      className={`flex flex-col gap-[21px] rounded-3xl border border-shuttle-200 bg-white p-[15px] ${
        showcase ? "w-[373px]" : "w-full max-w-[373px] pb-5"
      } ${className ?? ""}`}
    >
      <div className="@container relative aspect-[341/195.14] w-full overflow-hidden rounded-xl bg-thumb">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <ul
          className={`absolute left-[13px] flex gap-3 text-xs font-medium text-charcoal ${
            showcase ? "bottom-[13px]" : "bottom-[19px]"
          }`}
        >
          {[course.lessons, course.duration, course.comments].map((meta, i) => (
            <li
              key={meta}
              className={`${i === 2 ? "hidden @[330px]:flex" : "flex"} items-center rounded-2xl bg-track/60 px-3 whitespace-nowrap backdrop-blur-[4px] ${
                showcase ? "h-8" : "h-[26px]"
              }`}
            >
              {meta}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex flex-col">
            <h3
              className={`max-w-[280px] truncate font-poppins text-xl font-semibold tracking-[-0.01em] text-black ${
                showcase ? "leading-7" : "leading-6"
              }`}
            >
              {course.title}
            </h3>
            <p className={`text-xs text-charcoal ${showcase ? "leading-5" : "leading-[19px]"}`}>
              by <span className="text-primary">{course.creator}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-8 items-center gap-1 rounded-2xl bg-shuttle-50 px-3">
              <Image src="/assets/icons/signal.svg" alt="" width={20} height={20} />
              <span
                className={`text-xs font-medium text-shuttle-700 ${showcase ? "leading-5" : "leading-[14px]"}`}
              >
                {course.level}
              </span>
            </span>
            <AvatarStack
              avatars={course.learnerAvatars}
              size={32}
              countLabel={course.learnersCount}
              countTone={showcase ? "dark" : "lime"}
            />
          </div>

          <p className="flex items-end">
            <span className="text-xl leading-[24px] font-bold text-primary">{course.price}</span>
            <span className="text-xs leading-[19px] text-charcoal">/lifetime</span>
          </p>
        </div>

        <p className="flex shrink-0 items-center" aria-label={`Rated ${course.rating} out of 5`}>
          <span className="text-lg leading-[29px] text-charcoal">{course.rating}</span>
          <Image
            src={showcase ? "/assets/icons/star-rating-lime.svg" : "/assets/icons/star-rating.svg"}
            alt=""
            width={24}
            height={24}
          />
        </p>
      </div>
    </article>
  );
}

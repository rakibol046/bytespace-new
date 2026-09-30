import Image from "next/image";
import Link from "next/link";
import { coursePath, formatPrice, formatRating, getCourseCreator } from "@/lib/catalog";
import type { Course } from "@/lib/types";
import { AvatarStack } from "./avatar-stack";

type CourseCardProps = {
  course: Course;
  /**
   * `grid` is the catalogue card and links to the course; `showcase` is the
   * decorative copy inside illustrations, with taller pills and line boxes.
   */
  variant?: "grid" | "showcase";
  className?: string;
};

export function CourseCard({ course, variant = "grid", className }: CourseCardProps) {
  const showcase = variant === "showcase";
  const creator = getCourseCreator(course);
  const rating = formatRating(course.rating);
  const meta = [`${course.lessonCount} Lessons`, course.duration, `${course.commentCount} Comments`];

  const titleClass = `block max-w-[280px] truncate font-poppins text-xl font-semibold tracking-[-0.01em] text-black ${
    showcase ? "leading-7" : "leading-6"
  }`;

  return (
    <article
      className={`flex flex-col gap-[21px] rounded-3xl border border-shuttle-200 bg-white p-[15px] ${
        showcase
          ? // Positioned by the illustration that places it.
            "w-[373px]"
          : "relative w-full max-w-[373px] pb-5 outline-offset-2 outline-primary transition-shadow has-[a:focus-visible]:outline-2 hover:shadow-[0_8px_24px_rgb(0_0_0/0.08)]"
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
          {meta.map((item, i) => (
            <li
              key={item}
              className={`${i === 2 ? "hidden @[330px]:flex" : "flex"} items-center rounded-2xl bg-track/60 px-3 whitespace-nowrap backdrop-blur-[4px] ${
                showcase ? "h-8" : "h-[26px]"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex flex-col">
            <h3 className={titleClass}>
              {showcase ? (
                course.title
              ) : (
                // The stretched link makes the whole card clickable while keeping one tab stop.
                <Link href={coursePath(course)} className="outline-none after:absolute after:inset-0 after:rounded-3xl">
                  {course.title}
                </Link>
              )}
            </h3>
            <p className={`text-xs text-charcoal ${showcase ? "leading-5" : "leading-[19px]"}`}>
              by <span className="text-primary">{creator.handle}</span>
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
              countLabel={course.learnersLabel}
              countTone={showcase ? "dark" : "lime"}
            />
          </div>

          <p className="flex items-end">
            <span className="text-xl leading-[24px] font-bold text-primary">{formatPrice(course.price)}</span>
            <span className="text-xs leading-[19px] text-charcoal">/lifetime</span>
          </p>
        </div>

        <p className="flex shrink-0 items-center">
          <span className="sr-only">Rated </span>
          <span className="text-lg leading-[29px] text-charcoal">{rating}</span>
          <span className="sr-only"> out of 5</span>
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

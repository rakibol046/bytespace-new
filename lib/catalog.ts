import { courses } from "@/lib/data/courses";
import { creators } from "@/lib/data/creators";
import type { Course, CourseLevel, Creator, RatingCounts } from "@/lib/types";

export const STAR_VALUES = [5, 4, 3, 2, 1] as const;

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getCreator(slug: string): Creator | undefined {
  return creators.find((creator) => creator.slug === slug);
}

/** Every course has a creator in the data set; this throws if the data is inconsistent. */
export function getCourseCreator(course: Course): Creator {
  const creator = getCreator(course.creatorSlug);
  if (!creator) throw new Error(`Unknown creator "${course.creatorSlug}" for course "${course.slug}"`);
  return creator;
}

export function getCoursesByCreator(slug: string): Course[] {
  return courses.filter((course) => course.creatorSlug === slug);
}

export function totalRatings(counts: RatingCounts): number {
  return STAR_VALUES.reduce((sum, star) => sum + counts[star], 0);
}

/** Average rating rounded to one decimal, formatted like "4.5". */
export function averageRating(counts: RatingCounts): string {
  const total = totalRatings(counts);
  if (total === 0) return "0.0";
  const sum = STAR_VALUES.reduce((acc, star) => acc + star * counts[star], 0);
  return (Math.round((sum / total) * 10) / 10).toFixed(1);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export type CourseDetailFacts = {
  rating: string;
  reviewCount: number;
  level: CourseLevel;
  lessonCount: number;
  duration: string;
  moreLessons: number;
};

/** Figures for the course page hero and sidebar: design-supplied values first, then the course data. */
export function courseDetailFacts(course: Course): CourseDetailFacts {
  const detail = course.detail ?? {};
  const lessonCount = detail.lessonCount ?? course.lessonCount;
  return {
    rating: detail.rating ?? formatRating(course.rating),
    reviewCount: detail.reviewCount ?? totalRatings(course.ratingCounts),
    level: detail.level ?? course.level,
    lessonCount,
    duration: detail.duration ?? course.duration,
    moreLessons: detail.moreLessons ?? Math.max(0, lessonCount - course.lessonPreview.length),
  };
}

export function formatPrice(price: number): string {
  return `$${price}`;
}

export function coursePath(course: Course, tab?: "lessons" | "reviews"): string {
  return `/courses/${course.slug}${tab ? `/${tab}` : ""}`;
}

export function creatorPath(creator: Creator): string {
  return `/creators/${creator.slug}`;
}

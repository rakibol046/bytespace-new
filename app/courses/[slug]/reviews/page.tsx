import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseSection, CourseText } from "@/components/course/course-section";
import { CourseTabs } from "@/components/course/course-tabs";
import { RatingSummary } from "@/components/course/rating-summary";
import { ReviewList } from "@/components/course/review-list";
import { averageRating, getCourse, totalRatings } from "@/lib/catalog";

export async function generateMetadata({ params }: PageProps<"/courses/[slug]/reviews">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  return {
    title: `Reviews · ${course.title} — ByteSpace`,
    description: `Rated ${averageRating(course.ratingCounts)} out of 5 by ${totalRatings(course.ratingCounts)} learners.`,
  };
}

export default async function CourseReviewsPage({ params }: PageProps<"/courses/[slug]/reviews">) {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  return (
    <div className="pb-16 xl:pt-[79px] xl:pb-[91px]">
      <CourseTabs course={course} active="reviews" lessonsLabel="Lesson" />
      <div className="mt-10 flex flex-col gap-6">
        <CourseSection title="What Learners Are Saying">
          <CourseText>
            {course.reviewsIntro ??
              `Discover what our learners have to say about their experience with '${course.headline}.' Read reviews and ratings from individuals who have embarked on this learning journey.`}
          </CourseText>
          <RatingSummary counts={course.ratingCounts} bars={course.ratingBars} />
        </CourseSection>

        <CourseSection title="Individual Reviews:">
          <ReviewList reviews={course.reviews} />
        </CourseSection>
      </div>
    </div>
  );
}

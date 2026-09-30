import type { Category } from "@/lib/data/categories";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Creator = {
  slug: string;
  /** Display name, e.g. on the profile and course sidebar. */
  name: string;
  /** Lower-case byline used on course cards ("by purepearl studio"). */
  handle: string;
  avatar: string;
  headline: string;
  role: string;
  /** Portrait used in the course sidebar (the design uses a different photo there). */
  sidebarAvatar: string;
  bio: string[];
  /** Figures shown on the profile, as supplied by the design. */
  products: number;
  followers: number;
};

export type Review = {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
  postedAgo: string;
  body: string;
  /** The first review in the design sets its text on 24px lines instead of 26px. */
  bodyLeading?: "leading-6";
};

export type CourseModule = {
  /** Number shown in "Module N:" (the design's numbering is kept as supplied). */
  number: number;
  title: string;
  summary: string;
};

export type LessonPreview = {
  title: string;
  duration: string;
};

export type StarValue = 1 | 2 | 3 | 4 | 5;

/** Number of ratings per star value. */
export type RatingCounts = Record<StarValue, number>;

/**
 * Values shown on the course page hero and sidebar when the design states
 * them explicitly; anything omitted falls back to the course's own data.
 */
export type CourseDetailDisplay = {
  rating?: string;
  reviewCount?: number;
  level?: CourseLevel;
  lessonCount?: number;
  duration?: string;
  moreLessons?: number;
};

export type Course = {
  slug: string;
  /** Short title used on cards. */
  title: string;
  /** Full title used on the course page. */
  headline: string;
  subtitle: string;
  creatorSlug: string;
  category: Category;
  level: CourseLevel;
  image: string;
  preview: string;
  price: number;
  /** Rating shown on course cards and used for sorting. */
  rating: number;
  lessonCount: number;
  duration: string;
  commentCount: number;
  studentCount: number;
  learnersLabel: string;
  learnerAvatars: string[];
  description: string[];
  sneakPeek: { src: string; alt: string }[];
  keyPoints: string[];
  lessonPreview: LessonPreview[];
  modules: CourseModule[];
  ratingCounts: RatingCounts;
  /** Bar lengths (0–1) for the rating distribution; defaults to count ÷ total. */
  ratingBars?: RatingCounts;
  reviewsIntro?: string;
  detail?: CourseDetailDisplay;
  reviews: Review[];
};

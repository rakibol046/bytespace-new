export type Course = {
  title: string;
  creator: string;
  image: string;
  level: string;
  rating: string;
  price: string;
  lessons: string;
  duration: string;
  comments: string;
  learnersCount: string;
  learnerAvatars: string[];
};

const cardLearners = [
  "/assets/avatars/avatar-02.png",
  "/assets/avatars/avatar-08.png",
  "/assets/avatars/avatar-09.png",
  "/assets/avatars/avatar-10.png",
];

const courseDefaults = {
  creator: "purepearl studio",
  level: "Beginner",
  rating: "4.5",
  price: "$25",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  learnersCount: "26+",
  learnerAvatars: cardLearners,
};

export const courses: Course[] = [
  {
    ...courseDefaults,
    title: "Learn Figma from Basic",
    image: "/assets/courses/learn-figma-from-basic.jpg",
  },
  {
    ...courseDefaults,
    title: "Build Digital Asset",
    image: "/assets/courses/build-digital-asset.jpg",
  },
  {
    ...courseDefaults,
    title: "the Power of Big Data",
    image: "/assets/courses/power-of-big-data.jpg",
  },
  {
    ...courseDefaults,
    title: "Balancing Productivity and Self-Care",
    image: "/assets/courses/balancing-productivity.jpg",
  },
  {
    ...courseDefaults,
    title: "Mastering Money Management",
    image: "/assets/courses/mastering-money-management.jpg",
  },
  {
    ...courseDefaults,
    title: "From Idea to Startup Success",
    image: "/assets/courses/idea-to-startup.jpg",
  },
];

/** Tab rows are kept as in the design so desktop wraps exactly like Figma. */
export const categoryTabRows: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const learningPaths = [
  { label: "Design", icon: "/assets/categories/design.svg" },
  { label: "Development", icon: "/assets/categories/development.svg" },
  { label: "IT & Software", icon: "/assets/categories/it-software.svg" },
  { label: "Business", icon: "/assets/categories/business.svg" },
  { label: "Marketing", icon: "/assets/categories/marketing.svg" },
  { label: "Photography", icon: "/assets/categories/photography.svg" },
];

export const partnerLogos = [
  { src: "/assets/partners/partner-logo-1.svg", width: 167, height: 41 },
  { src: "/assets/partners/partner-logo-2.svg", width: 168, height: 41 },
  { src: "/assets/partners/partner-logo-3.svg", width: 170, height: 41 },
  { src: "/assets/partners/partner-logo-4.svg", width: 170, height: 41 },
  { src: "/assets/partners/partner-logo-5.svg", width: 169, height: 42 },
];

export const happyStudentAvatars = [
  "/assets/avatars/avatar-01.png",
  "/assets/avatars/avatar-02.png",
  "/assets/avatars/avatar-03.png",
  "/assets/avatars/avatar-04.png",
  "/assets/avatars/avatar-05.png",
  "/assets/avatars/avatar-06.png",
  "/assets/avatars/avatar-07.png",
];

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/avatars/avatar-09.png",
    // The first card's name uses a 24px line box in the design, the others 28px.
    nameLeading: "leading-[24px]",
    quote:
      `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/testimonials/james-l.png",
    nameLeading: "leading-[28px]",
    quote:
      `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/testimonials/alex-b.png",
    nameLeading: "leading-[28px]",
    quote:
      `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export const footerNav = [
  {
    title: "Browse",
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    title: null,
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    title: "Platform",
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

export const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

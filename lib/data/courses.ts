import type { Course, CourseModule, LessonPreview, RatingCounts } from "@/lib/types";

/*
 * Mock catalogue. Card-level values (rating, level, lessons, duration,
 * comments, price) are the ones on the course cards. Where a design screen
 * states different figures for a view (the Build Digital Asset detail page and
 * reviews), they are kept as supplied in `detail`, `ratingBars` and friends.
 */

const cardLearners = [
  "/assets/avatars/avatar-02.png",
  "/assets/avatars/avatar-08.png",
  "/assets/avatars/avatar-09.png",
  "/assets/avatars/avatar-10.png",
];

/** Averages 4.46, shown as 4.5 like the other catalogue cards. */
const typicalRatings: RatingCounts = { 5: 62, 4: 28, 3: 6, 2: 2, 1: 2 };

const shared = {
  creatorSlug: "purepearl-studio",
  level: "Beginner",
  price: 25,
  rating: 4.5,
  lessonCount: 17,
  duration: "2 hours 16 mins",
  commentCount: 59,
  learnersLabel: "26+",
  learnerAvatars: cardLearners,
  sneakPeek: [],
  reviews: [],
} as const satisfies Partial<Course>;

function modules(...items: [string, string][]): CourseModule[] {
  return items.map(([title, summary], i) => ({ number: i + 1, title, summary }));
}

function lessons(...items: [string, string][]): LessonPreview[] {
  return items.map(([title, duration]) => ({ title, duration }));
}

export const courses: Course[] = [
  {
    ...shared,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    headline: "Learn Figma from Basic: Design Your First Interfaces",
    subtitle: "Go from a blank canvas to a clickable prototype",
    category: "UI/UX Design",
    image: "/assets/courses/learn-figma-from-basic.jpg",
    preview: "/assets/courses/learn-figma-from-basic.jpg",
    studentCount: 214,
    description: [
      "Start designing in Figma with no prior experience. You'll learn how frames, layers and components fit together, then use them to build real interface screens step by step.",
      "By the end of the course you'll have designed a small app, organised it with reusable components and auto layout, and shared it as an interactive prototype.",
    ],
    keyPoints: [
      "Frames, Layers and Groups",
      "Auto Layout Fundamentals",
      "Reusable Components and Variants",
      "Interactive Prototyping",
    ],
    lessonPreview: lessons(
      ["Getting Around the Figma Canvas", "10 mins"],
      ["Working with Frames and Layers", "14 mins"],
      ["Auto Layout in Practice", "18 mins"],
    ),
    modules: modules(
      ["Figma Essentials", "Explore the canvas, tools and panels, and set up your first file."],
      ["Layout and Components", "Build flexible layouts with auto layout and turn repeated UI into components."],
      ["Prototyping and Handoff", "Link screens into a prototype and prepare your design for developers."],
    ),
    ratingCounts: typicalRatings,
  },
  {
    ...shared,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    headline: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    category: "UI/UX Design",
    image: "/assets/courses/build-digital-asset.jpg",
    preview: "/assets/courses/build-digital-asset-preview.jpg",
    studentCount: 199,
    description: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeek: [
      { src: "/assets/courses/sneak-peek-wireframe.jpg", alt: "Hand sketching wireframes with a pencil" },
      { src: "/assets/courses/sneak-peek-laptop.jpg", alt: "Design software open on a laptop" },
      { src: "/assets/courses/sneak-peek-imac.jpg", alt: "A style guide on a desktop monitor" },
      { src: "/assets/courses/sneak-peek-phones.jpg", alt: "Two phones showing colourful app screens" },
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    lessonPreview: lessons(
      ["Introduction to Digital Assets", "12 mins"],
      ["Design Principles for Impacts", "21 mins"],
      ["Advanced Techniques in Digital Creation", "16 mins"],
    ),
    // Numbered as in the design (it has no Module 3).
    modules: modules(
      [
        "Introduction to Digital Assets",
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      ],
      [
        "Design Principles for Impact",
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      ],
      [
        "User-Centric Design Strategies",
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      ],
      [
        "Interactive Media and Engagement",
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      ],
      [
        "Project Showcase and Critique",
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      ],
      [
        "Optimizing Digital Assets for Various Platforms",
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      ],
    ).map((module, i) => ({ ...module, number: [1, 2, 4, 5, 6, 7][i] })),
    ratingCounts: { 5: 720, 4: 120, 3: 21, 2: 12, 1: 16 },
    // Bar lengths as drawn in the design (out of a 282px track).
    ratingBars: { 5: 260.2 / 282, 4: 102.9 / 282, 3: 26.7 / 282, 2: 9.9 / 282, 1: 14.8 / 282 },
    reviewsIntro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    detail: {
      rating: "4.8",
      reviewCount: 172,
      level: "Intermediate",
      lessonCount: 112,
      duration: "24 hours",
      moreLessons: 99,
    },
    reviews: [
      {
        id: "bda-1",
        author: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/assets/avatars/avatar-11.png",
        rating: 5,
        postedAgo: "a year ago",
        body: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
        bodyLeading: "leading-6",
      },
      {
        id: "bda-2",
        author: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/assets/avatars/avatar-12.png",
        rating: 5,
        postedAgo: "a year ago",
        body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        id: "bda-3",
        author: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/assets/testimonials/james-l.png",
        rating: 5,
        postedAgo: "a year ago",
        body: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        id: "bda-4",
        author: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/assets/avatars/avatar-01.png",
        rating: 5,
        postedAgo: "a year ago",
        body: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
  {
    ...shared,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    headline: "The Power of Big Data: From Raw Numbers to Insight",
    subtitle: "Read, clean and visualise data to make better decisions",
    category: "Data Science",
    image: "/assets/courses/power-of-big-data.jpg",
    preview: "/assets/courses/power-of-big-data.jpg",
    studentCount: 187,
    description: [
      "Learn how large datasets are collected, stored and analysed, and how to turn them into clear answers. The course focuses on practical skills rather than heavy mathematics.",
      "You'll practise cleaning messy data, spotting trends and building dashboards that communicate what the numbers mean.",
    ],
    keyPoints: [
      "How Big Data Is Collected and Stored",
      "Cleaning and Preparing Data",
      "Finding Trends and Patterns",
      "Building Clear Dashboards",
    ],
    lessonPreview: lessons(
      ["What Makes Data “Big”", "11 mins"],
      ["Cleaning Messy Datasets", "19 mins"],
      ["Visualising Trends", "15 mins"],
    ),
    modules: modules(
      ["Data Foundations", "Understand where data comes from and how it is stored and structured."],
      ["Analysis in Practice", "Clean, filter and summarise datasets to answer real questions."],
      ["Communicating Insight", "Present findings with charts and dashboards people can act on."],
    ),
    ratingCounts: typicalRatings,
  },
  {
    ...shared,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    headline: "Balancing Productivity and Self-Care",
    subtitle: "Get more done without burning out",
    category: "Productivity",
    image: "/assets/courses/balancing-productivity.jpg",
    preview: "/assets/courses/balancing-productivity.jpg",
    studentCount: 176,
    description: [
      "Build a sustainable routine that balances focused work with rest. You'll learn simple planning methods and habits that protect your energy over the long term.",
      "Each module pairs a productivity technique with a self-care practice so the two support each other.",
    ],
    keyPoints: [
      "Planning Your Week",
      "Deep Work and Focus",
      "Healthy Boundaries",
      "Building Lasting Habits",
    ],
    lessonPreview: lessons(
      ["Auditing Your Current Routine", "9 mins"],
      ["Planning a Realistic Week", "14 mins"],
      ["Protecting Focus Time", "12 mins"],
    ),
    modules: modules(
      ["Know Your Routine", "Map how you spend your time and energy today."],
      ["Focused Work", "Use planning and focus techniques to do your best work."],
      ["Rest and Recovery", "Build boundaries and habits that prevent burnout."],
    ),
    ratingCounts: typicalRatings,
  },
  {
    ...shared,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    headline: "Mastering Money Management for Creators",
    subtitle: "Budget, save and plan with confidence",
    category: "Freelance & Entrepreneurship",
    image: "/assets/courses/mastering-money-management.jpg",
    preview: "/assets/courses/mastering-money-management.jpg",
    studentCount: 158,
    description: [
      "Take control of your finances as a freelancer or small business owner. You'll set up a budget, plan for irregular income and understand the basics of saving and investing.",
      "The course uses practical templates you can adapt to your own situation.",
    ],
    keyPoints: [
      "Budgeting for Irregular Income",
      "Pricing Your Work",
      "Saving and Emergency Funds",
      "Planning for Taxes",
    ],
    lessonPreview: lessons(
      ["Where Your Money Goes", "10 mins"],
      ["Budgeting for Irregular Income", "17 mins"],
      ["Setting Your Prices", "15 mins"],
    ),
    modules: modules(
      ["Money Basics", "Track income and spending and build your first budget."],
      ["Earning Well", "Price your work and plan around uneven months."],
      ["Planning Ahead", "Save, prepare for taxes and set long-term goals."],
    ),
    ratingCounts: typicalRatings,
  },
  {
    ...shared,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    headline: "From Idea to Startup Success",
    subtitle: "Validate, launch and grow your first product",
    category: "Freelance & Entrepreneurship",
    image: "/assets/courses/idea-to-startup.jpg",
    preview: "/assets/courses/idea-to-startup.jpg",
    studentCount: 203,
    description: [
      "Turn an idea into a working business. You'll learn how to test demand before building, launch a first version quickly and learn from your early customers.",
      "Each module ends with a practical exercise so you can apply the steps to your own idea.",
    ],
    keyPoints: [
      "Validating Your Idea",
      "Building a Minimum Viable Product",
      "Finding Your First Customers",
      "Measuring and Iterating",
    ],
    lessonPreview: lessons(
      ["Is Your Idea Worth Building?", "12 mins"],
      ["Talking to Customers", "16 mins"],
      ["Scoping Your First Version", "14 mins"],
    ),
    modules: modules(
      ["Validate", "Test demand for your idea before investing time and money."],
      ["Launch", "Build and ship a focused first version."],
      ["Grow", "Measure what works and improve with customer feedback."],
    ),
    ratingCounts: typicalRatings,
  },
];

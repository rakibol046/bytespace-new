import Image from "next/image";
import { learningPaths } from "@/lib/home-content";
import { SectionHeading } from "./section-heading";

export function LearningPaths() {
  return (
    <section
      id="categories"
      aria-labelledby="paths-title"
      className="px-4 pt-14 pb-20 sm:px-8 md:pt-[72px] md:pb-[120px]"
    >
      <SectionHeading id="paths-title" title="Explore Diverse Learning Paths at Bytespace" size="s">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
        courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
        potential and explore our carefully curated categories.
      </SectionHeading>

      <ul className="mx-auto mt-12 grid max-w-[1202px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-10 md:mt-[68px] lg:grid-cols-6 lg:gap-4 xl:gap-10">
        {learningPaths.map((path) => (
          <li key={path.label}>
            <a
              href="#courses"
              className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 transition-colors hover:border-primary"
            >
              <span className="flex size-[60px] items-center justify-center rounded-full bg-lime">
                <Image src={path.icon} alt="" width={36} height={36} />
              </span>
              <span className="text-xl leading-[24px] font-medium text-shuttle-950">{path.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

import Image from "next/image";
import { Ornament, fromCenter } from "@/components/ui/ornament";
import { HappyStudentsCard, LearningProgressCard, TopicCard } from "@/components/ui/stat-cards";
import { GridBackdrop } from "./grid-backdrop";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary" aria-labelledby="hero-title">
      <GridBackdrop />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 pt-[140px] sm:px-8 xl:block xl:h-[1024px] xl:px-0 xl:pt-0">
        {/* Headline, subtitle and search */}
        <div className="relative z-10 flex w-full flex-col items-center gap-10 text-center xl:absolute xl:top-[169px] xl:left-1/2 xl:w-[1200px] xl:-translate-x-1/2 xl:gap-[60px]">
          <div className="flex flex-col items-center gap-6 xl:gap-8">
            <h1
              id="hero-title"
              className="font-heading max-w-[935px] text-[40px] text-white sm:text-[56px] leading-[1.2] xl:w-[935px] xl:text-[72px] xl:leading-[86px]"
            >
              Get Access to Hundreds Courses Available
            </h1>
            <p className="body-l max-w-[640px] text-shuttle-100 xl:max-w-none xl:whitespace-nowrap">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide
              range of courses.
            </p>
          </div>

          <form
            role="search"
            action="#courses"
            className="flex w-full max-w-[461px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-start sm:gap-4"
          >
            <label className="flex h-[52px] items-center gap-2 rounded-3xl bg-white px-6 py-3 outline-offset-2 outline-white focus-within:outline-2 sm:w-[461px]">
              <Image src="/assets/icons/search.svg" alt="" width={24} height={24} />
              <span className="sr-only">Search courses</span>
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                className="body-l w-full min-w-0 bg-transparent text-shuttle-950 outline-none placeholder:text-shuttle-400"
              />
            </label>
            <button
              type="submit"
              className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[22px] font-medium text-shuttle-950 transition-colors hover:bg-lime-strong"
            >
              Search
            </button>
          </form>
        </div>

        {/* Student photo with floating stat cards. At xl this box sits exactly at
            the Figma position; below xl it flows under the search bar. */}
        <div className="relative mt-16 mb-[-5.4%] aspect-[578/541] w-full max-w-[578px] xl:absolute xl:top-[512px] xl:left-[calc(50%-289px)] xl:m-0 xl:w-[578px]">
          <Image
            src="/assets/hero/lime-circle.svg"
            alt=""
            aria-hidden
            width={1149}
            height={1149}
            className="absolute top-[12.94%] left-[-49.48%] w-[198.79%] max-w-none"
          />
          <Image
            src="/assets/hero/student.png"
            alt="Smiling student with headphones holding a laptop"
            fill
            fetchPriority="high"
            loading="eager"
            sizes="(min-width: 640px) 578px, 100vw"
            className="shadow-soft"
          />

          <LearningProgressCard className="absolute top-[26%] right-[-4%] origin-top-right scale-[0.62] sm:scale-[0.85] lg:right-[-18%] lg:scale-100 xl:top-[139px] xl:right-auto xl:left-[411px]" />
          <HappyStudentsCard className="absolute top-[62%] left-[-4%] origin-top-left scale-[0.62] sm:scale-[0.85] lg:left-[-18%] lg:scale-100 xl:top-[325px] xl:left-[-103px]" />
          <TopicCard className="absolute top-[23%] left-[-5%] z-20 hidden origin-top-left sm:flex sm:scale-[0.85] lg:scale-100 xl:top-[127px] xl:left-[-27px]" />
        </div>

        {/* 3D ornaments (desktop artboard coordinates, centred on 1440px). */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
          <Ornament shape="spiral-short" tint="light" size={331.535} style={{ left: fromCenter(1123.93), top: 672 }} />
          <Ornament shape="spiral-long" tint="lime" size={386.791} style={{ left: fromCenter(-121.581), top: 221 }} />
          <Ornament shape="spiral-long" tint="light" size={175.814} flip style={{ left: fromCenter(183.814), top: 477 }} />
          <Ornament shape="torus" tint="light" size={343.684} style={{ left: fromCenter(14.4082), top: 681.26 }} />
          <Ornament shape="cylinder" tint="lime" size={371.822} style={{ left: fromCenter(1227.11), top: 220.199 }} />
          <Ornament shape="pyramid" tint="light" size={188.926} style={{ left: fromCenter(1104.03), top: 463.593 }} />
        </div>
      </div>
    </section>
  );
}

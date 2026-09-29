import Image from "next/image";
import { BlurOrb } from "@/components/ui/blur-orb";
import { CourseCard } from "@/components/ui/course-card";
import { Ornament } from "@/components/ui/ornament";
import { HappyStudentsCard, LearningProgressCard, RevenueCard } from "@/components/ui/stat-cards";
import { courses, creatorBenefits, growthStats } from "@/lib/home-content";
import { ScaledArtboard } from "./scaled-artboard";

function GrowthArtboard() {
  return (
    <ScaledArtboard
      width={621}
      height={552}
      label="A course card, a smiling student with a laptop and a 55% learning progress card"
      frameClassName="h-[287px] w-[323px] sm:h-[469px] sm:w-[528px] md:h-[552px] md:w-[621px]"
      scaleClassName="scale-[0.52] sm:scale-[0.85] md:scale-100"
    >
      <CourseCard course={courses[0]} variant="showcase" className="absolute top-0 left-0" />
      <Image
        src="/assets/hero/student.png"
        alt=""
        width={577}
        height={540}
        sizes="577px"
        className="shadow-soft absolute top-3 left-0 h-[540px] w-[577px]"
      />
      <LearningProgressCard roomy className="absolute top-[213px] left-[345px]" />
      <Ornament shape="spiral-short" tint="lime" size={216} style={{ left: 404, top: 67 }} />
    </ScaledArtboard>
  );
}

function CreatorArtboard() {
  return (
    <ScaledArtboard
      width={541}
      height={596}
      label="A creator with a tablet, revenue cards and a happy students card"
      frameClassName="h-[358px] w-[325px] sm:h-[536px] sm:w-[487px] md:h-[596px] md:w-[541px]"
      scaleClassName="scale-[0.6] sm:scale-[0.9] md:scale-100"
    >
      <RevenueCard
        title="Total Revenue"
        period="July 1-28"
        amount="$120.29"
        change="+12$"
        progress={56}
        className="absolute top-[44px] left-0 w-[232px]"
      />
      <RevenueCard
        title="Year to Date"
        period="2023"
        amount="$1,200.38"
        change="+12$"
        className="absolute top-[194px] left-0 w-[134px]"
      />
      <div className="shadow-soft absolute top-0 left-7 h-[596px] w-[435px]">
        <div className="relative size-full overflow-hidden">
          <Image
            src="/assets/features/creator-with-tablet.png"
            alt=""
            width={683}
            height={683}
            sizes="683px"
            className="absolute top-0 left-[-124px] size-[683px] max-w-none"
          />
        </div>
      </div>
      <HappyStudentsCard compact className="absolute top-[413px] left-[283px]" />
      <Ornament shape="spiral-long" tint="lime" size={216} style={{ left: 303, top: 114 }} />
    </ScaledArtboard>
  );
}

export function CreatorFeatures() {
  return (
    <section id="creators" className="relative overflow-hidden bg-surface px-4 py-20 sm:px-8 xl:h-[1460px] xl:px-0 xl:py-[120px]">
      <BlurOrb color="blue" x={722} y={788} size={1137} opacity={0.24} />
      <BlurOrb color="lime" x={-152} y={-466} size={1137} opacity={0.4} />
      <BlurOrb color="blue" x={-508} y={183} size={1137} opacity={0.16} />
      <BlurOrb color="blue" x={811} y={-458} size={1137} opacity={0.08} />
      <BlurOrb color="lime" x={-287} y={946} size={672} opacity={0.6} />

      <div className="relative mx-auto flex max-w-[1258px] flex-col gap-20 xl:ml-[calc(50%-599px)] xl:gap-[72px]">
        {/* Your Path to Professional Growth */}
        <div className="flex flex-col items-center gap-12 xl:h-[552px] xl:flex-row xl:justify-between xl:gap-8">
          <div className="flex w-full max-w-[574px] flex-col gap-10">
            <h2 className="font-heading max-w-[577px] text-[32px] text-shuttle-950 md:text-[44px] leading-[1.2] md:leading-[53px] xl:w-[577px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="body-l max-w-[477px] text-shuttle-700">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <dl className="flex gap-10 sm:gap-14">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="body-l text-shuttle-700">{stat.label}</dt>
                  <dd className="text-4xl leading-[44px] tracking-[-0.01em] text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <GrowthArtboard />
        </div>

        {/* Create & Manage Courses Easily */}
        <div className="flex flex-col-reverse items-center gap-12 xl:h-[596px] xl:flex-row xl:justify-between xl:gap-8 xl:w-[1200px]">
          <CreatorArtboard />
          <div className="flex w-full max-w-[580px] flex-col gap-10">
            <h2 className="font-heading text-[32px] text-shuttle-950 md:text-[44px] leading-[1.2] md:leading-[53px] xl:w-[391px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="body-l max-w-[574px] text-shuttle-700">
              <strong className="font-bold text-shuttle-950">ByteSpace</strong> supports individuals
              or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-lg leading-[22px] font-medium text-shuttle-950">
                  <Image src="/assets/icons/check-circle.svg" alt="" width={24} height={24} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

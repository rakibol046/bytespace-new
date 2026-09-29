import { CourseCard } from "@/components/ui/course-card";
import { Ornament } from "@/components/ui/ornament";
import { ScaledArtboard } from "@/components/ui/scaled-artboard";
import { HappyStudentsCard } from "@/components/ui/stat-cards";
import { courses } from "@/lib/home-content";

const buildDigitalAsset = courses[1];
const powerOfBigData = courses[2];

/** Stacked course cards, the lime "Happy Students" card and 3D ornaments. */
export function AuthIllustration() {
  return (
    <ScaledArtboard
      width={552}
      height={586}
      label="Course cards for Build Digital Asset and the Power of Big Data, with a happy students card"
      frameClassName="h-[340px] w-[320px] sm:h-[527px] sm:w-[497px] md:h-[586px] md:w-[552px]"
      scaleClassName="scale-[0.58] sm:scale-[0.9] md:scale-100"
    >
      <CourseCard course={buildDigitalAsset} variant="showcase" className="absolute top-[89px] left-[27px]" />
      <CourseCard course={powerOfBigData} variant="showcase" className="absolute top-0 left-[138px]" />
      <HappyStudentsCard compact tone="lime" className="absolute top-[435px] left-[253px]" />
      <Ornament shape="spiral-long" tint="light" size={175.814} flip style={{ left: 375.814, top: 321 }} />
      <Ornament shape="torus" tint="lime" size={146.667} style={{ left: 54.5, top: 14.7 }} />
      <Ornament shape="pyramid" tint="lime" size={188.926} style={{ left: 0, top: 396.6 }} />
    </ScaledArtboard>
  );
}

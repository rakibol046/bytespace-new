import Link from "next/link";
import { Ornament, fromCenter } from "@/components/ui/ornament";
import { GridBackdrop } from "./grid-backdrop";

export function CreatorCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-primary px-4 py-20 sm:px-8 xl:h-[488px] xl:px-0 xl:pt-[85px] xl:pb-0"
    >
      <GridBackdrop />

      <div className="relative z-10 mx-auto flex max-w-[964px] flex-col items-center gap-10 text-center">
        <h2 id="cta-title" className="font-heading max-w-[710px] text-[32px] text-shuttle-50 md:text-[44px] leading-[1.2] md:leading-[53px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="body-l text-shuttle-50">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/register"
          prefetch={false}
          className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[22px] font-medium text-shuttle-950 transition-colors hover:bg-lime-strong"
        >
          Join as Creator
        </Link>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <Ornament shape="pyramid" tint="lime" size={188.926} style={{ left: fromCenter(1078.03), top: -0.41 }} />
        <Ornament shape="spiral-short" tint="lime" size={331.535} style={{ left: fromCenter(1106.93), top: 289 }} />
        <Ornament shape="spiral-long" tint="lime" size={386.791} style={{ left: fromCenter(-121.581), top: -162 }} />
        <Ornament shape="spiral-long" tint="light" size={175.814} flip style={{ left: fromCenter(178.814), top: 5 }} />
        <Ornament shape="cone" tint="light" size={188.926} style={{ left: fromCenter(-49.9746), top: 224.59 }} />
        <Ornament shape="torus" tint="lime" size={343.684} style={{ left: fromCenter(16.4082), top: 298.26 }} />
        <Ornament shape="cylinder" tint="light" size={371.822} style={{ left: fromCenter(1222.11), top: 5.2 }} />
      </div>
    </section>
  );
}

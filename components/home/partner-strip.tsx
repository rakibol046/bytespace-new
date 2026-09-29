import Image from "next/image";
import { partnerLogos } from "@/lib/home-content";

export function PartnerStrip() {
  return (
    <section aria-label="Our partners" className="bg-shuttle-50 px-4 py-12 sm:px-8 xl:h-[202px] xl:py-20">
      <ul className="mx-auto flex max-w-[1132px] flex-wrap items-end justify-center gap-x-10 gap-y-8 md:gap-x-[72px] xl:flex-nowrap">
        {partnerLogos.map((logo) => (
          <li key={logo.src}>
            <Image
              src={logo.src}
              alt="Logoipsum"
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto sm:h-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

import Image from "next/image";
import { BlurOrb } from "@/components/ui/blur-orb";
import { testimonials } from "@/lib/home-content";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-surface px-4 py-20 sm:px-8 xl:h-[784px] xl:px-0 xl:pt-[74px] xl:pb-0"
    >
      <BlurOrb color="lime" x={842} y={-241} size={1137} opacity={0.4} />
      <BlurOrb color="lime" x={395} y={-138} size={672} opacity={0.6} />
      <BlurOrb color="blue" x={-442} y={149} size={1137} opacity={0.24} />

      <div className="relative mx-auto max-w-[1204px] xl:ml-[calc(50%-602px)] xl:w-[1204px]">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between xl:w-[1200px]">
          <h2
            id="testimonials-title"
            className="font-heading max-w-[577px] text-[32px] text-black md:text-[44px] leading-[1.2] md:leading-[53px] xl:w-[577px]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="body-l max-w-[580px] text-charcoal xl:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap items-start justify-center gap-6 md:mt-[72px] xl:flex-nowrap xl:justify-between xl:gap-0">
          {testimonials.map((t) => (
            <li key={t.name} className="w-full max-w-[374px] xl:w-[374px]">
              <figure className="flex flex-col items-start gap-6 rounded-3xl bg-white p-6">
                <Image src={t.avatar} alt="" width={80} height={80} className="size-20 rounded-full" />
                <figcaption className="flex flex-col">
                  <span className={`font-poppins text-xl font-semibold tracking-[-0.01em] text-black ${t.nameLeading}`}>
                    {t.name}
                  </span>
                  <span className="body-l text-primary">{t.role}</span>
                </figcaption>
                <blockquote className="body-l w-full max-w-[326px] text-charcoal">{t.quote}</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

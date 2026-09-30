import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CourseFilterBar } from "@/components/courses/course-filter-bar";
import { CourseGrid } from "@/components/courses/course-grid";
import { CreatorStats } from "@/components/creator/creator-stats";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { creatorPath, getCoursesByCreator, getCreator } from "@/lib/catalog";
import { parseCourseQuery, searchCourses, withQuery } from "@/lib/search";

export async function generateMetadata({ params }: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = getCreator((await params).slug);
  if (!creator) return {};
  return {
    title: `${creator.name} — ByteSpace Creator`,
    description: `${creator.headline}. Browse courses by ${creator.name} on ByteSpace.`,
  };
}

export default async function CreatorPage({ params, searchParams }: PageProps<"/creators/[slug]">) {
  const creator = getCreator((await params).slug);
  if (!creator) notFound();

  const allCourses = getCoursesByCreator(creator.slug);
  const query = parseCourseQuery(await searchParams);
  const basePath = creatorPath(creator);
  // Creator pages list every course on one page, so pagination is not used here.
  const results = searchCourses(allCourses, { ...query, q: "", page: 1 });

  return (
    <>
      <SiteHeader current="creators" />
      <main>
        <section
          aria-labelledby="creator-name"
          className="bytespace-grid px-4 pt-[140px] pb-12 sm:px-8 xl:h-[592px] xl:px-0 xl:pt-[172px] xl:pb-0"
        >
          <div className="mx-auto flex max-w-[1198px] flex-col gap-10 xl:ml-[calc(50%-598px)]">
            <div className="flex flex-col gap-10 xl:gap-[40px]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src={creator.avatar}
                  alt=""
                  width={96}
                  height={96}
                  preload
                  className="size-24 shrink-0 rounded-3xl object-cover"
                />
                <div className="flex flex-col gap-4 xl:gap-[16px]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1
                      id="creator-name"
                      className="font-heading text-[32px] leading-[1.2] text-shuttle-50 md:text-[36px] md:leading-[43px]"
                    >
                      {creator.name}
                    </h1>
                    <span className="rounded-[17.5px] bg-lime px-6 py-2 text-base leading-[19px] font-medium text-shuttle-950">
                      Creator
                    </span>
                  </div>
                  <p className="body-l text-shuttle-50">{creator.headline}</p>
                </div>
              </div>
              <div className="flex flex-col">
                {creator.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="body-l text-shuttle-50">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <CreatorStats products={creator.products} followers={creator.followers} creatorName={creator.name} />
          </div>
        </section>

        <section
          aria-labelledby="creator-courses-title"
          className="mx-auto flex max-w-[1201px] flex-col gap-10 px-4 pt-10 pb-16 sm:px-8 md:pt-[62px] md:pb-[61px] xl:px-0"
        >
          <h2 id="creator-courses-title" className="sr-only">
            Courses by {creator.name}
          </h2>
          <CourseFilterBar basePath={basePath} query={query} />
          <CourseGrid courses={results.items} resetHref={withQuery(basePath, query, { level: undefined, category: undefined })} />
        </section>
      </main>
      <SiteFooter bordered />
    </>
  );
}

import { CourseCatalog } from "@/components/home/course-catalog";
import { CreatorCta } from "@/components/home/creator-cta";
import { CreatorFeatures } from "@/components/home/creator-features";
import { Hero } from "@/components/home/hero";
import { LearningPaths } from "@/components/home/learning-paths";
import { PartnerStrip } from "@/components/home/partner-strip";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Testimonials } from "@/components/home/testimonials";
import { ShadowFilterDefs } from "@/components/ui/shadow-filter";

export default function Home() {
  return (
    <>
      <ShadowFilterDefs />
      {/* Positioned over the hero; kept outside <main> so it is the page banner. */}
      <SiteHeader current="home" />
      <main>
        <Hero />
        <PartnerStrip />
        <CourseCatalog />
        <LearningPaths />
        <CreatorFeatures />
        <CreatorCta />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Page not found — ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          aria-labelledby="not-found-title"
          className="bytespace-grid relative overflow-hidden px-4 pt-[160px] pb-20 sm:px-8 xl:mb-[3px] xl:h-[957px] xl:px-0 xl:pt-[223.5px] xl:pb-0"
        >
          <div className="relative mx-auto flex max-w-[935px] flex-col items-center text-center">
            <Image
              src="/assets/errors/404-digits.svg"
              alt="Error 404"
              width={886}
              height={345}
              preload
              className="h-auto w-[92%] max-w-[886px] xl:ml-[3px] xl:w-[886px]"
            />
            <h1
              id="not-found-title"
              className="font-heading relative -mt-[6%] text-[36px] leading-[1.2] text-white sm:text-[56px] xl:-mt-[47.5px] xl:text-[72px] xl:leading-[86px]"
            >
              The page you are looking for doesn’t exist
            </h1>
            <p className="body-l mt-8 text-shuttle-100">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link
              href="/"
              className="mt-8 rounded-3xl bg-lime px-6 py-3 text-lg leading-[22px] font-medium text-shuttle-950 transition-colors hover:bg-lime-strong"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter bordered />
    </>
  );
}

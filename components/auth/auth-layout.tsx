import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AuthIllustration } from "./auth-illustration";

type AuthLayoutProps = {
  tagline: string;
  description: string;
  /** The white form card. */
  children: ReactNode;
};

/**
 * Shared shell for /login and /register: blue grid background, logo, a short
 * pitch with the course-card illustration on the left and the form card on the
 * right. At xl it follows the 1440 × 1024 Figma frames (positions are offsets
 * from the centre so the layout stays centred on wider screens); smaller
 * screens stack pitch, form and illustration.
 */
export function AuthLayout({ tagline, description, children }: AuthLayoutProps) {
  return (
    <div className="bytespace-grid relative min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] xl:h-[1024px]">
        <header className="mx-auto max-w-[611px] px-4 pt-8 sm:px-8 xl:absolute xl:top-[35px] xl:left-[calc(50%-598px)] xl:p-0">
          <Link href="/" aria-label="ByteSpace home" className="inline-block">
            <Image
              src="/assets/logo/bytespace-mark.svg"
              alt=""
              width={28.875}
              height={31.5}
              className="h-[31.5px] w-[28.875px]"
            />
          </Link>
        </header>

        <main className="flex flex-col items-center gap-10 px-4 pt-10 pb-16 sm:px-8 xl:block xl:p-0">
          <div className="flex w-full max-w-[579px] flex-col gap-4 text-shuttle-50 xl:absolute xl:top-[120px] xl:left-[calc(50%-598px)] xl:w-[475px]">
            <p className="font-heading text-xl leading-6">{tagline}</p>
            <p className="body-l">{description}</p>
          </div>

          <div className="w-full max-w-[579px] xl:absolute xl:top-[120px] xl:left-[calc(50%+21px)] xl:w-[579px]">
            {children}
          </div>

          <div className="xl:absolute xl:top-[305px] xl:left-[calc(50%-625px)]">
            <AuthIllustration />
          </div>
        </main>
      </div>
    </div>
  );
}

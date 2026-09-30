import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "./mobile-menu";

export type NavSection = "home" | "courses" | "creators";

const primaryNav: { section: NavSection; label: string; href: string }[] = [
  { section: "home", label: "Home", href: "/" },
  { section: "courses", label: "Courses", href: "/search" },
  { section: "creators", label: "Creators", href: "/#creators" },
];

const accountNav = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

type SiteHeaderProps = {
  /** Section to highlight; omit on pages outside the main sections (e.g. 404). */
  current?: NavSection;
};

/** Transparent header laid over the blue hero of every page. */
export function SiteHeader({ current }: SiteHeaderProps) {
  const nav = primaryNav.map((item) => ({ ...item, current: item.section === current }));

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="relative mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-4 sm:px-8 xl:px-[120px]">
        <Logo tone="light" className="xl:mt-[-13px] xl:ml-0.5" />

        <nav
          aria-label="Primary"
          className="absolute top-1/2 left-[calc(50%-0.5px)] hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <ul className="flex items-start gap-6 text-base whitespace-nowrap text-shuttle-50">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={
                    item.current
                      ? "leading-[19px] font-medium"
                      : "leading-[26px] transition-opacity hover:opacity-80"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-start gap-6 text-base leading-6 text-shuttle-50">
          {accountNav.map((item) => (
            <Link key={item.label} href={item.href} className="hidden transition-opacity hover:opacity-80 lg:block">
              {item.label}
            </Link>
          ))}
          {/* There is no cart yet; the icon is kept from the design. */}
          <a href="#" aria-label="Shopping bag" className="transition-opacity hover:opacity-80">
            <Image src="/assets/icons/shopping-bag.svg" alt="" width={24} height={24} />
          </a>
          <MobileMenu primary={nav} account={accountNav} />
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "./mobile-menu";

const primaryNav = [
  { label: "Home", href: "/", current: true },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

const accountNav = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="relative mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-4 sm:px-8 xl:px-[120px]">
        <Logo tone="light" className="xl:mt-[-13px] xl:ml-0.5" />

        <nav
          aria-label="Primary"
          className="absolute top-1/2 left-[calc(50%-0.5px)] hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <ul className="flex items-start gap-6 text-base whitespace-nowrap text-shuttle-50">
            {primaryNav.map((item) => (
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
            <Link
              key={item.label}
              href={item.href}
              prefetch={false}
              className="hidden transition-opacity hover:opacity-80 lg:block"
            >
              {item.label}
            </Link>
          ))}
          <Link href="#" aria-label="Shopping bag" className="transition-opacity hover:opacity-80">
            <Image src="/assets/icons/shopping-bag.svg" alt="" width={24} height={24} />
          </Link>
          <MobileMenu primary={primaryNav} account={accountNav} />
        </div>
      </div>
    </header>
  );
}

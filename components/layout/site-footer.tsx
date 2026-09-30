import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { NewsletterForm } from "./newsletter-form";
import { footerNav, legalLinks } from "@/lib/home-content";

type SiteFooterProps = {
  /** Inner pages separate the footer from the content with a top rule. */
  bordered?: boolean;
};

export function SiteFooter({ bordered }: SiteFooterProps) {
  return (
    <footer
      className={`bg-white px-4 pt-16 pb-12 sm:px-8 xl:h-[525px] xl:px-0 ${
        // The 1px rule sits inside the 525px frame, so the content starts 1px earlier.
        bordered ? "border-t border-shuttle-200 xl:pt-[70px]" : "xl:pt-[71px]"
      }`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
          <div className="flex w-full max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-sm leading-[22px] text-shuttle-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <NewsletterForm />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:w-[580px]">
            {footerNav.map((column, i) => (
              <div key={column.title ?? i} className="xl:w-[167px]">
                {column.title && <h2 className="sr-only">{column.title}</h2>}
                <ul className="flex flex-col gap-4 text-sm leading-[22px] text-shuttle-950 xl:pt-12">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {/* Placeholder "#" links stay plain anchors so they are not prefetched. */}
                      {link.href === "#" ? (
                        <a href="#" className="hover:text-primary">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="hover:text-primary">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-shuttle-200 pt-[22px] text-xs leading-[19px] text-shuttle-950 sm:flex-row sm:justify-between xl:mt-[130px]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

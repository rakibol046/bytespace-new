import { Logo } from "@/components/ui/logo";
import { footerNav, legalLinks } from "@/lib/home-content";

export function SiteFooter() {
  return (
    <footer className="bg-white px-4 pt-16 pb-12 sm:px-8 xl:h-[525px] xl:px-0 xl:pt-[71px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
          <div className="flex w-full max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-sm leading-[22px] text-shuttle-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <form action="#" className="flex max-w-[504px] flex-col gap-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                <label className="flex h-[52px] w-full items-center rounded-[26px] border border-shuttle-200 bg-white px-6 outline-offset-2 outline-primary focus-within:outline-2 sm:w-[376px]">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-base leading-[26px] text-shuttle-950 outline-none placeholder:text-shuttle-950"
                  />
                </label>
                <button
                  type="submit"
                  className="h-[46px] rounded-3xl bg-lime px-6 text-lg leading-[22px] font-medium text-shuttle-950 transition-colors hover:bg-lime-strong sm:w-[104px]"
                >
                  Search
                </button>
              </div>
              <p className="text-xs leading-[19px] text-shuttle-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </form>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:w-[580px]">
            {footerNav.map((column, i) => (
              <div key={column.title ?? i} className="xl:w-[167px]">
                {column.title && <h2 className="sr-only">{column.title}</h2>}
                <ul className="flex flex-col gap-4 text-sm leading-[22px] text-shuttle-950 xl:pt-12">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-primary">
                        {link}
                      </a>
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

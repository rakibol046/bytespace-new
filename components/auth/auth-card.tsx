import type { ReactNode } from "react";

type AuthCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  /** "New user? Create an account" style line pinned to the card bottom. */
  footer: ReactNode;
  /** Bottom padding under the footer line at desktop (differs per design). */
  footerOffsetClassName: string;
};

export function AuthCard({ eyebrow, title, children, footer, footerOffsetClassName }: AuthCardProps) {
  return (
    <section
      aria-labelledby="auth-title"
      className={`flex flex-col rounded-3xl bg-white px-6 pt-10 pb-10 sm:px-[63px] xl:h-[784px] xl:pt-[61px] ${footerOffsetClassName}`}
    >
      <div className="flex flex-col">
        <p className="body-l text-primary">{eyebrow}</p>
        <h1
          id="auth-title"
          className="font-heading text-[36px] leading-[1.2] text-shuttle-950 sm:text-[44px] sm:leading-[53px]"
        >
          {title}
        </h1>
      </div>

      {children}

      <p className="mt-12 text-center text-base leading-[26px] xl:mt-auto">{footer}</p>
    </section>
  );
}

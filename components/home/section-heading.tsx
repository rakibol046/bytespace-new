import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  children: ReactNode;
  /** 44px section title (default) or the smaller 36px variant. */
  size?: "m" | "s";
  titleClassName?: string;
};

/**
 * Centred title + supporting paragraph used by the catalogue sections.
 * The design box is 917px; the extra room absorbs font-rendering differences
 * without changing where the lines break.
 */
export function SectionHeading({ id, title, children, size = "m", titleClassName }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-[940px] flex-col items-center gap-4 text-center">
      <h2
        id={id}
        className={`font-heading text-ink ${
          size === "m" ? "text-[32px] leading-[1.2] md:text-[44px] md:leading-[53px]" : "text-[28px] leading-[1.2] md:text-[36px] md:leading-[43px]"
        } ${titleClassName ?? ""}`}
      >
        {title}
      </h2>
      <p className="body-l text-shuttle-400">{children}</p>
    </div>
  );
}

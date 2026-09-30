import type { ReactNode } from "react";

/** Heading + content block used throughout the course tabs (24px rhythm). */
export function CourseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-heading text-xl leading-6 text-shuttle-950">{title}</h2>
      {children}
    </section>
  );
}

export function CourseText({ children }: { children: ReactNode }) {
  return <p className="text-base leading-[26px] text-shuttle-700">{children}</p>;
}

import Image from "next/image";

/** The faint 120px column grid behind the blue hero and CTA sections. */
export function GridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/assets/hero/grid-lines.svg"
        alt=""
        width={1442}
        height={1026}
        className="absolute top-[-2px] left-[calc(50%-720px)] h-[1026px] w-[1442px] max-w-none"
      />
    </div>
  );
}

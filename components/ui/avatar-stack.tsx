import Image from "next/image";

type AvatarStackProps = {
  avatars: string[];
  /** Diameter of each avatar in px. */
  size: 32 | 43;
  countLabel: string;
  countTone?: "lime" | "dark";
};

/** Overlapping learner avatars followed by a count bubble. */
export function AvatarStack({ avatars, size, countLabel, countTone = "lime" }: AvatarStackProps) {
  const overlap = size === 43 ? "-mr-4" : "-mr-2";

  return (
    <div className="flex items-start">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className={`${overlap} shrink-0 rounded-full`}
          style={{ width: size, height: size }}
        />
      ))}
      <span
        className={`relative flex shrink-0 items-center justify-center rounded-full ${
          countTone === "lime" ? "bg-lime text-shuttle-950" : "bg-black text-white"
        } ${
          size === 43
            ? "size-[43px] text-xs leading-[18px] font-bold"
            : "size-8 text-xs leading-5 font-medium"
        }`}
      >
        {countLabel}
      </span>
    </div>
  );
}

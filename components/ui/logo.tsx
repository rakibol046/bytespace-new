import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone: "light" | "dark";
  className?: string;
};

export function Logo({ tone, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={`inline-flex h-[37px] items-start gap-[8.125px] ${className ?? ""}`}
    >
      <Image
        src="/assets/logo/bytespace-mark.svg"
        alt=""
        width={28.875}
        height={31.5}
        className="h-[31.5px] w-[28.875px]"
      />
      <span
        className={`mt-[5px] font-clash text-2xl leading-normal font-bold ${
          tone === "light" ? "text-shuttle-50" : "text-shuttle-950"
        }`}
      >
        ByteSpace
      </span>
    </Link>
  );
}

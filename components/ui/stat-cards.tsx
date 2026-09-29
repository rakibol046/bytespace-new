import Image from "next/image";
import { AvatarStack } from "./avatar-stack";
import { happyStudentAvatars } from "@/lib/home-content";

type PlacedProps = { className?: string };

function ProgressBar({ value, track, label }: { value: number; track: string; label: string }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative h-2 w-[200px] rounded-3xl ${track}`}
    >
      <div
        className="absolute inset-y-0 left-0 rounded-3xl bg-lime"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

/** "Learning Progress 55%" card. `roomy` matches the copy in the features section. */
export function LearningProgressCard({ roomy, className }: PlacedProps & { roomy?: boolean }) {
  return (
    <div
      className={`flex w-[232px] flex-col items-start gap-2 rounded-2xl bg-white p-4 ${className ?? ""}`}
    >
      <p className={`text-sm font-medium text-shuttle-950 ${roomy ? "leading-6" : "leading-[17px]"}`}>
        Learning Progress
      </p>
      <p className="w-[200px] font-poppins text-5xl leading-[58px] font-semibold tracking-[-0.01em] text-shuttle-950">
        55%
      </p>
      {/* 112px of 200px */}
      <ProgressBar value={56} track="bg-track" label="Learning progress" />
    </div>
  );
}

/**
 * "Happy Students" card with rating and learner avatars. The `lime` tone is
 * the variant used on the sign-in and sign-up pages.
 */
export function HappyStudentsCard({
  compact,
  tone = "white",
  className,
}: PlacedProps & { compact?: boolean; tone?: "white" | "lime" }) {
  const lime = tone === "lime";

  return (
    <div
      className={`flex w-[258px] flex-col items-start justify-center gap-2 rounded-2xl p-4 ${
        lime ? "bg-lime" : "bg-white"
      } ${className ?? ""}`}
    >
      <div className="flex flex-col items-start">
        <p
          className={`min-w-[115px] font-medium whitespace-nowrap text-shuttle-950 ${
            compact ? "text-base leading-6" : "text-base leading-[19px]"
          }`}
        >
          Happy Students
        </p>
        <div className="flex items-center">
          <p className={compact ? "text-[10px] leading-[15px]" : "text-xs leading-[19px]"}>
            <span className="text-shuttle-950">4.5 </span>
            <span className="text-shuttle-400">(240)</span>
          </p>
          <span className="relative size-4 shrink-0">
            <Image
              src={lime ? "/assets/icons/star-blue.svg" : "/assets/icons/star.svg"}
              alt=""
              width={13.1625}
              height={12.5676}
              className="absolute top-[6.92%] left-[8.87%] h-[78.55%] w-[82.26%]"
            />
          </span>
        </div>
      </div>
      <AvatarStack avatars={happyStudentAvatars} size={43} countLabel="2K+" countTone={lime ? "ink" : "lime"} />
    </div>
  );
}

/** "UI/UX Design · 200 Courses · 1000+ Students" chip-card. */
export function TopicCard({ className }: PlacedProps) {
  return (
    <div
      className={`flex flex-col items-start justify-center rounded-2xl bg-white p-4 whitespace-nowrap ${className ?? ""}`}
    >
      <p className="text-base leading-[19px] font-medium text-shuttle-950">UI/UX Design</p>
      <p className="flex items-start gap-2 text-shuttle-400">
        <span className="text-xs leading-[19px]">200 Courses</span>
        <span className="text-[10px] leading-[15px]" aria-hidden>
          •
        </span>
        <span className="text-xs leading-[19px]">1000+ Students</span>
      </p>
    </div>
  );
}

type RevenueCardProps = PlacedProps & {
  title: string;
  period: string;
  amount: string;
  change: string;
  progress?: number;
};

/** Blue earnings card used in the "Create & Manage Courses" composition. */
export function RevenueCard({ title, period, amount, change, progress, className }: RevenueCardProps) {
  const changePill = (
    <span className="rounded-xl bg-lime-strong px-2 py-0.5 text-[10px] leading-5 font-medium text-shuttle-950">
      {change}
    </span>
  );

  return (
    <div
      className={`flex flex-col items-start gap-2 rounded-2xl bg-primary p-4 text-shuttle-50 ${className ?? ""}`}
    >
      <div className="flex flex-col items-start font-medium">
        <p className="text-base leading-[19px]">{title}</p>
        <p className="text-[10px] leading-[12px]">{period}</p>
      </div>
      {progress === undefined ? (
        <>
          <p className="font-poppins text-[23px] leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
          {changePill}
        </>
      ) : (
        <>
          <div className="flex w-[200px] items-center justify-between">
            <p className="font-poppins text-[23px] leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
            {changePill}
          </div>
          <ProgressBar value={progress} track="bg-white" label={title} />
        </>
      )}
    </div>
  );
}

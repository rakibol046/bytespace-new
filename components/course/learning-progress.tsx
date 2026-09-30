/** Wide "Learning Progress" meter on the Lessons tab. */
export function LearningProgress({ value }: { value: number }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-shuttle-200 bg-white p-[15px]">
      <p id="learning-progress-label" className="text-sm leading-[17px] font-medium text-shuttle-950">
        Learning Progress
      </p>
      <p className="font-heading text-[36px] leading-[43px] text-shuttle-950">{value}%</p>
      <div
        role="progressbar"
        aria-labelledby="learning-progress-label"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full rounded bg-shuttle-100"
      >
        <div className="h-full rounded bg-lime" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

type CreatorStatsProps = {
  products: number;
  followers: number;
  creatorName: string;
};

const pillClass = "flex h-[46px] items-center gap-2.5 rounded-[23px] bg-white px-6 text-lg leading-[22px] font-medium";

/** Products / Followers pills and the Follow toggle (local state only; no account system yet). */
export function CreatorStats({ products, followers, creatorName }: CreatorStatsProps) {
  const [following, setFollowing] = useState(false);
  const followerCount = followers + (following ? 1 : 0);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-4">
        <li className={pillClass}>
          <span className="text-primary">{products}</span>
          <span className="text-shuttle-950">{products === 1 ? "Product" : "Products"}</span>
        </li>
        <li className={pillClass}>
          <span className="text-primary" aria-live="polite">
            {followerCount}
          </span>
          <span className="text-shuttle-950">{followerCount === 1 ? "Follower" : "Followers"}</span>
        </li>
      </ul>
      <button
        type="button"
        aria-pressed={following}
        aria-label={following ? `Unfollow ${creatorName}` : `Follow ${creatorName}`}
        onClick={() => setFollowing((value) => !value)}
        className="h-[46px] rounded-[23px] bg-lime px-6 text-lg leading-[22px] font-medium text-ink transition-colors hover:bg-lime-strong"
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter sign-up. There is no mailing-list backend yet, so a valid
 * submission is acknowledged in place instead of navigating away.
 */
export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-[504px] flex-col gap-6">
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
      <p className="text-xs leading-[19px] text-shuttle-950" aria-live="polite">
        {subscribed ? "Thanks for subscribing! " : null}
        By subscribing, you agree to our Privacy Policy and consent to receive updates from
        our company.
      </p>
    </form>
  );
}

"use client";

import type { FormEvent, ReactNode } from "react";

type AuthFormProps = {
  submitLabel: string;
  children: ReactNode;
};

/**
 * Sign-in / sign-up form shell. There is no auth backend yet, so a valid
 * submission is stopped here instead of reloading the page; the browser's
 * built-in validation (required, type="email") still runs first.
 */
export function AuthForm({ submitLabel, children }: AuthFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
      {children}
      <button
        type="submit"
        className="self-end rounded-3xl bg-lime px-6 py-3 text-lg leading-[22px] font-medium text-shuttle-950 transition-colors hover:bg-lime-strong"
      >
        {submitLabel}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { ShareIcon } from "@/components/ui/icons";

/** Uses the native share sheet when available, otherwise copies the page URL. */
export function ShareButton({ title, className }: { title: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // The user closed the share sheet; nothing to do.
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={share}
      className={`flex h-10 items-center gap-2 rounded-[20px] bg-lime px-6 text-base leading-6 font-medium text-shuttle-950 transition-colors hover:bg-lime-strong ${className ?? ""}`}
    >
      <ShareIcon />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}

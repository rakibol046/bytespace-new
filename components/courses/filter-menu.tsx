"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export type FilterOption = { label: string; href: string; selected: boolean };
export type FilterGroup = { legend: string; options: FilterOption[] };

type FilterMenuProps = {
  label: string;
  icon: ReactNode;
  groups: FilterGroup[];
  /** Whether a filter from this menu is applied (highlights the button). */
  active: boolean;
  /** Shown as a "Clear filters" link while a filter is applied. */
  clearHref?: string;
};

/** Pill button that discloses a panel of filter links (URL-driven, so no local filter state). */
export function FilterMenu({ label, icon, groups, active, clearHref }: FilterMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`flex h-12 items-center gap-1 rounded-3xl border bg-white px-4 text-base leading-[19px] font-medium text-shuttle-700 transition-colors hover:border-shuttle-400 ${
          active ? "border-primary" : "border-shuttle-200"
        }`}
      >
        <span className="text-shuttle-950">{icon}</span>
        {label}
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute top-full left-0 z-20 mt-2 flex max-h-[70vh] w-64 flex-col gap-4 overflow-y-auto rounded-2xl border border-shuttle-200 bg-white p-4 shadow-[0_12px_32px_rgb(0_0_0/0.12)]"
        >
          {groups.map((group) => (
            <div key={group.legend} role="group" aria-label={group.legend} className="flex flex-col gap-1">
              <p className="text-xs leading-[19px] font-medium text-shuttle-400 uppercase">{group.legend}</p>
              <ul className="flex flex-col">
                {group.options.map((option) => (
                  <li key={option.label}>
                    <Link
                      href={option.href}
                      scroll={false}
                      aria-current={option.selected ? "true" : undefined}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-2 py-1.5 text-base leading-[26px] text-shuttle-950 hover:bg-shuttle-50 aria-[current=true]:font-medium aria-[current=true]:text-primary"
                    >
                      {option.label}
                      {option.selected && <span aria-hidden>✓</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {active && clearHref && (
            <Link
              href={clearHref}
              scroll={false}
              onClick={() => setOpen(false)}
              className="self-start text-sm leading-[22px] font-medium text-primary hover:underline"
            >
              Clear filters
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = { label: string; href: string; current?: boolean };

export function MobileMenu({ primary, account }: { primary: NavItem[]; account: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-6 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-0.5 w-5 rounded bg-shuttle-50 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-5 rounded bg-shuttle-50 transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-5 rounded bg-shuttle-50 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-4 top-[96px] rounded-2xl bg-white p-4 text-shuttle-950 shadow-lg sm:inset-x-8"
        >
          <ul className="flex flex-col gap-1">
            {[...primary, ...account].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-base leading-6 hover:bg-shuttle-50 aria-[current=page]:font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

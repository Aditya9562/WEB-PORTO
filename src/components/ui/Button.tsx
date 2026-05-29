"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  showIcon?: boolean;
};

export function Button({
  children,
  className,
  variant = "dark",
  showIcon = true,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-between gap-6 border px-5 py-3 font-mono-ibm text-xs font-medium uppercase tracking-[0.22em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
        variant === "dark" &&
          "border-[var(--line)] bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white",
        variant === "light" &&
          "border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]",
        variant === "outline" &&
          "border-[var(--line)] bg-transparent text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? (
        <ArrowUpRight
          className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-45"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}

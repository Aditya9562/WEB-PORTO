import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
};

export function SectionHeader({ eyebrow, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 grid grid-cols-12 gap-6 md:mb-16", className)}>
      <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
        {eyebrow}
      </div>
      <h2 className="col-span-12 font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:col-span-9 md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </div>
  );
}

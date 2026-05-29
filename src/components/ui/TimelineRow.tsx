import type { Experience } from "@/data/profile";

type TimelineRowProps = {
  item: Experience;
};

export function TimelineRow({ item }: TimelineRowProps) {
  return (
    <li className="group grid grid-cols-12 gap-4 py-6 transition-colors hover:bg-[var(--paper)] md:gap-6 md:py-8">
      <div className="col-span-12 font-mono-ibm text-sm text-[var(--ink-2)] transition-colors group-hover:text-[var(--accent)] md:col-span-3 md:text-base">
        {item.period}
      </div>
      <div className="col-span-12 md:col-span-3">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
          {item.role}
        </h3>
        <p className="mt-1 font-mono-ibm text-xs uppercase tracking-[0.18em] text-[var(--ink-2)]">
          {item.type}
        </p>
      </div>
      <div className="col-span-12 font-mono-ibm text-base md:col-span-3">{item.company}</div>
      <div className="col-span-12 md:col-span-3">
        <ul className="space-y-2 text-sm leading-relaxed text-[var(--ink-2)]">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {item.stack ? (
          <div className="mt-4 font-mono-ibm text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
            {item.stack}
          </div>
        ) : null}
      </div>
    </li>
  );
}

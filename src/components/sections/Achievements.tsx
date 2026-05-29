import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Motion";
import { achievements } from "@/data/profile";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(Achievements) - § 07"
        title={
          <>
            Measurable impact beyond <span className="stroke-text">titles.</span>
          </>
        }
      />

      <div className="grid grid-cols-12 border-y border-[var(--line)]">
        {achievements.map((achievement, index) => (
          <Reveal
            key={achievement.title}
            delay={index * 0.06}
            className="col-span-12 border-b border-[var(--line)] p-6 last:border-b-0 md:col-span-6 md:border-r md:[&:nth-child(2n)]:border-r-0"
          >
            <div className="mb-10 flex items-start justify-between gap-6">
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                [ {String(index + 1).padStart(2, "0")} ]
              </div>
              <achievement.icon className="h-7 w-7 text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-3xl font-black uppercase leading-none tracking-tighter md:text-4xl">
              {achievement.title}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--ink-2)] md:text-base">
              {achievement.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

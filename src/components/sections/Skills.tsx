import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Motion";
import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(Skills) - § 03"
        title={
          <>
            Capability stack for <span className="text-[var(--accent)]">real</span> delivery.
          </>
        }
      />

      <div className="grid grid-cols-12 border-y border-[var(--line)]">
        {skills.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 0.04}
            className="skill-card col-span-12 border-b border-[var(--line)] p-5 last:border-b-0 md:col-span-6 md:border-r md:p-6 md:even:border-r-0 lg:col-span-4 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-display text-2xl font-black uppercase tracking-tight">
                {group.title}
              </h3>
              <group.icon className="h-6 w-6 text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="skill-chip border border-[var(--line)] px-2 py-1 font-mono-ibm text-[10px] uppercase tracking-[0.18em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

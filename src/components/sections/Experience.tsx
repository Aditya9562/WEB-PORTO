import { SectionHeader } from "@/components/layout/SectionHeader";
import { TimelineRow } from "@/components/ui/TimelineRow";
import { Reveal } from "@/components/ui/Motion";
import { experiences } from "@/data/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(Experience) - § 04"
        title={
          <>
            Coordination, systems, <span className="text-[var(--accent)]">outcomes.</span>
          </>
        }
      />

      <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {experiences.map((item, index) => (
          <Reveal as="div" key={`${item.company}-${item.role}`} delay={index * 0.04}>
            <TimelineRow item={item} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

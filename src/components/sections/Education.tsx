import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Motion";
import { education } from "@/data/profile";

export function Education() {
  const Icon = education.icon;

  return (
    <section
      id="education"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(Education) - § 05"
        title={
          <>
            Computer engineering <span className="stroke-text">foundation.</span>
          </>
        }
      />

      <Reveal className="grid grid-cols-12 border-y border-[var(--line)]">
        <div className="col-span-12 flex items-start justify-between border-b border-[var(--line)] p-6 md:col-span-4 md:border-b-0 md:border-r">
          <div>
            <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
              Institution
            </div>
            <h3 className="mt-4 font-display text-4xl font-black uppercase tracking-tighter">
              {education.school}
            </h3>
          </div>
          <Icon className="h-8 w-8 text-[var(--accent)]" strokeWidth={1.5} />
        </div>
        <div className="col-span-12 p-6 md:col-span-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                Degree
              </div>
              <p className="mt-3 text-lg">{education.degree}</p>
            </div>
            <div>
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                Period
              </div>
              <p className="mt-3 text-lg">{education.period}</p>
            </div>
            <div>
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                Grade
              </div>
              <p className="mt-3 text-lg text-[var(--accent)]">{education.grade}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

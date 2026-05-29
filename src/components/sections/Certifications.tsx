import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Motion";
import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(Certifications) - § 06"
        title={
          <>
            Verified learning, <span className="text-[var(--accent)]">kept current.</span>
          </>
        }
      />

      <div className="grid grid-cols-12 border-y border-[var(--line)]">
        {certifications.map((cert, index) => (
          <Reveal
            key={`${cert.issuer}-${cert.title}`}
            delay={index * 0.035}
            className="col-span-12 min-h-[210px] border-b border-[var(--line)] p-5 last:border-b-0 md:col-span-6 md:border-r md:p-6 md:even:border-r-0 lg:col-span-3 lg:[&:nth-child(4n)]:border-r-0 lg:even:border-r"
          >
            <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
              {cert.issuer} · {cert.issued}
            </div>
            <h3 className="mt-5 font-display text-2xl font-black uppercase leading-none tracking-tight">
              {cert.title}
            </h3>
            {cert.credential ? (
              <p className="mt-6 break-words font-mono-ibm text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                ID {cert.credential}
              </p>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Motion";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(About) - § 01"
        title={
          <>
            Structured thinker. <span className="text-[var(--accent)]">Adaptive</span> operator.
          </>
        }
      />

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-5">
          <div className="group relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)] bg-[var(--paper)]">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85"
              alt="Collaborative project planning session"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="img-hover object-cover"
            />
          </div>
        </Reveal>

        <div className="col-span-12 flex flex-col gap-6 font-mono-ibm text-[15px] leading-[1.7] md:col-span-6 md:col-start-7 md:text-base">
          {profile.about.map((paragraph, index) => (
            <Reveal as="p" key={paragraph} delay={index * 0.05}>
              {paragraph}
            </Reveal>
          ))}

          <Reveal className="mt-6 grid grid-cols-2 gap-6 border-t border-[var(--line)]/30 pt-8">
            {profile.facts.map(([label, value]) => (
              <div key={label}>
                <div className="font-display text-3xl font-black tracking-tight md:text-4xl">
                  {value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                  {label}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
            Reach -{" "}
            <a href={`mailto:${profile.email}`} className="linky text-[var(--ink)]">
              {profile.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

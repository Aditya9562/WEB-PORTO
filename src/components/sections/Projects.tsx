import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Motion";
import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(Selected work) - § 02"
        title={
          <>
            Things I&apos;ve <span className="stroke-text">delivered.</span>
          </>
        }
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <Reveal
            as="div"
            key={project.title}
            delay={index * 0.05}
            className={`col-span-12 ${project.span}`}
          >
            <ProjectCard project={{ ...project, span: "" }} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

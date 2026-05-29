import Image from "next/image";
import type { Project } from "@/data/profile";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group col-span-12 overflow-hidden liquid-glass-card",
        project.span
      )}
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[var(--muted)]">
        {project.mediaType === "video" ? (
          <video
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            src={project.image}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label={`${project.title} video preview`}
          />
        ) : (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="img-hover object-cover"
          />
        )}
      </div>

      <div className="flex min-h-[320px] flex-col gap-4 border-t border-[var(--line)]/15 p-5 md:p-6">
        <div className="flex items-center justify-between font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
          <span>
            [ {project.index} ] {project.tag}
          </span>
          <span>{project.year}</span>
        </div>

        <h3 className="font-display text-3xl font-black uppercase leading-none tracking-tighter md:text-4xl text-[var(--ink)]">
          {project.title}
        </h3>

        <p className="max-w-2xl text-sm leading-relaxed text-[var(--ink-2)] md:text-base">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.stack.map((item) => (
            <span
              key={item}
              className="border border-[var(--line)]/30 px-2 py-1 font-mono-ibm text-[10px] uppercase tracking-[0.18em] text-[var(--ink-2)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

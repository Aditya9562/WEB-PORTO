"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/profile";

export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-120px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-32 md:px-12 md:py-44"
    >
      {/* Train title animation: left to right */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24 overflow-hidden">
        <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
          (Selected work) - § 02
        </div>
        <div className="col-span-12 overflow-hidden md:col-span-9">
          <motion.h2
            initial={{ x: "-100%", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
          >
            Things I&apos;ve <span className="stroke-text">delivered.</span>
          </motion.h2>
        </div>
      </div>

      {/* Cards pop up from below after title is shown */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-12 gap-6 md:gap-8 projects-grid"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className={`col-span-12 ${project.span}`}
          >
            <ProjectCard project={{ ...project, span: "" }} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

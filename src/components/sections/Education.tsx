"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/profile";

export function Education() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-120px" });
  const Icon = education.icon;

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section
      id="education"
      ref={containerRef}
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-32 md:px-12 md:py-44"
    >
      {/* Animated Pop-up Header */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
        <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
          (Education) - § 05
        </div>
        <div className="col-span-12 overflow-hidden md:col-span-9">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
          >
            Computer engineering <span className="stroke-text">foundation.</span>
          </motion.h2>
        </div>
      </div>

      {/* Grid details */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-12 border-y border-[var(--line)]"
      >
        <div className="col-span-12 flex items-start justify-between border-b border-[var(--line)] p-6 md:col-span-5 md:border-b-0 md:border-r">
          <div>
            <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
              Institution
            </div>
            <a
              href="https://www.instagram.com/undip.official"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-display text-3xl font-black uppercase tracking-tighter text-[var(--ink)] transition-colors duration-300 hover:text-[var(--accent)] hover:underline decoration-[var(--accent)] decoration-2 underline-offset-4"
            >
              {education.school}
            </a>
          </div>
          <Icon className="h-8 w-8 text-[var(--accent)]" strokeWidth={1.5} />
        </div>
        <div className="col-span-12 p-6 md:col-span-7">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                Degree
              </div>
              <p className="mt-3 text-base text-[var(--ink)] leading-relaxed">{education.degree}</p>
            </div>
            <div>
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                Period
              </div>
              <p className="mt-3 text-base text-[var(--ink)]">{education.period}</p>
            </div>
            <div>
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                Grade
              </div>
              <p className="mt-3 text-base text-[var(--accent)] font-bold">{education.grade}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

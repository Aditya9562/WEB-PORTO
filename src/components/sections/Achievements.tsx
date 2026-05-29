"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data/profile";

export function Achievements() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-120px" });

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
      id="achievements"
      ref={containerRef}
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-32 md:px-12 md:py-44"
    >
      {/* Scroll Header */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
        <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
          (Achievements) - § 07
        </div>
        <div className="col-span-12 overflow-hidden md:col-span-9">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
          >
            Measurable impact beyond <span className="stroke-text">titles.</span>
          </motion.h2>
        </div>
      </div>

      {/* Achievements Cards */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-12 border-y border-[var(--line)]"
      >
        {achievements.map((achievement, index) => (
          <div
            key={achievement.title}
            className="col-span-12 border-b border-[var(--line)] p-6 last:border-b-0 md:col-span-6 md:border-r md:[&:nth-child(2n)]:border-r-0 transition-colors hover:bg-[var(--paper)]/50"
          >
            <div className="mb-10 flex items-start justify-between gap-6">
              <div className="font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                [ {String(index + 1).padStart(2, "0")} ]
              </div>
              <achievement.icon className="h-7 w-7 text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-3xl font-black uppercase leading-none tracking-tighter md:text-4xl text-[var(--ink)]">
              {achievement.title}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--ink-2)] md:text-base">
              {achievement.detail}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

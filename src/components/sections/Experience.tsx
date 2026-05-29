"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TimelineRow } from "@/components/ui/TimelineRow";
import { experiences } from "@/data/profile";

export function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-120px" });

  const titleWords = ["Coordination,", "systems,", "outcomes."];

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: -100, rotate: -15, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 350,
        damping: 12
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: titleWords.length * 0.15 + 0.2,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-32 md:px-12 md:py-44"
    >
      {/* Heavy Word Slam Title (Kebanting Per Kata) */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
        <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
          (Experience) - § 04
        </div>
        <div className="col-span-12 md:col-span-9">
          <motion.h2
            variants={titleContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-x-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={word.includes("outcomes") ? "text-[var(--accent)]" : "text-[var(--ink)]"}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>

      {/* Experience Timeline */}
      <motion.ul
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="divide-y divide-[var(--line)] border-y border-[var(--line)]"
      >
        {experiences.map((item) => (
          <TimelineRow key={`${item.company}-${item.role}`} item={item} />
        ))}
      </motion.ul>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skills } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Skills() {
  const containerRef = useRef(null);
  // Set once: false so animations repeat on every scroll entry
  const isInView = useInView(containerRef, { once: false, margin: "-120px" });
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; details: string } | null>(null);

  // Divide title into normal and accent parts for typing animation
  const titlePart1 = "Capability stack for ";
  const titleAccent = "real";
  const titlePart2 = " delivery.";

  const titleChars = [
    ...Array.from(titlePart1).map((char) => ({ char, isAccent: false })),
    ...Array.from(titleAccent).map((char) => ({ char, isAccent: true })),
    ...Array.from(titlePart2).map((char) => ({ char, isAccent: false }))
  ];

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: titleChars.length * 0.035 + 0.1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const handleSkillClick = (item: { name: string; details?: string }) => {
    if (item.details && item.details.trim() !== "") {
      setSelectedSkill({ name: item.name, details: item.details });
    }
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-32 md:px-12 md:py-44"
    >
      {/* Animated Typing Title with Highlighted Orange Word */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
        <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
          (Skills) - § 03
        </div>
        <div className="col-span-12 md:col-span-9">
          <motion.h2
            variants={titleContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
          >
            {titleChars.map((item, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className={item.isAccent ? "text-[var(--accent)]" : "text-[var(--ink)]"}
              >
                {item.char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-12 border-y border-[var(--line)]"
      >
        {skills.map((group, index) => {
          const isLast = index === skills.length - 1;
          return (
            <div
              key={group.title}
              className={cn(
                "skill-card border-b border-[var(--line)] p-5 md:p-6",
                isLast
                  ? "col-span-12 border-b-0 flex flex-col items-center text-center"
                  : "col-span-12 last:border-b-0 md:col-span-6 md:border-r md:even:border-r-0 lg:col-span-4 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0"
              )}
            >
              <div className={cn("mb-8 flex items-center justify-between", isLast ? "w-full max-w-lg justify-center gap-4" : "")}>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-[var(--ink)]">
                  {group.title}
                </h3>
                <group.icon className="h-6 w-6 text-[var(--accent)]" strokeWidth={1.5} />
              </div>
              <div className={cn("flex flex-wrap gap-2", isLast ? "justify-center max-w-4xl" : "")}>
                {group.items.map((item) => {
                  const hasDetails = !!(item.details && item.details.trim() !== "");
                  return (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => handleSkillClick(item)}
                      className={cn(
                        "skill-chip border px-3 py-1.5 font-mono-ibm text-[10px] uppercase tracking-[0.18em] transition-all duration-300",
                        hasDetails
                          ? "cursor-pointer border-[var(--accent)] bg-transparent text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                          : "cursor-default border-[var(--line)]/30 text-[var(--ink-2)]"
                      )}
                    >
                      {item.name}
                      {hasDetails && (
                        <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative z-10 w-full max-w-lg border border-[var(--line)] bg-[var(--paper)] p-6 md:p-8 font-mono-ibm shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="absolute right-4 top-4 text-2xl font-light text-[var(--ink-2)] transition-colors hover:text-[var(--accent)]"
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="mb-2 font-mono-ibm text-[10px] uppercase tracking-[0.2em] text-[var(--ink-2)]">
                Skill Detail / Experience
              </div>
              <h4 className="font-display text-3xl font-black uppercase text-[var(--accent)] tracking-tight mb-5">
                {selectedSkill.name}
              </h4>
              
              <div className="max-h-60 overflow-y-auto pr-2 text-sm leading-relaxed text-[var(--ink-2)] whitespace-pre-line border-t border-[var(--line)]/15 pt-4">
                {selectedSkill.details}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

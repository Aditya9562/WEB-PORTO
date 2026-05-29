"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  const containerRef = useRef(null);
  // Set once: false so the animation re-triggers every time the user scrolls back to the section
  const isInView = useInView(containerRef, { once: false, margin: "-120px" });

  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-32 md:px-12 md:py-44"
    >
      {/* Animated Title Header */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
        <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
          (About) - § 01
        </div>
        <div className="col-span-12 overflow-hidden md:col-span-9">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
          >
            Structured thinker. <span className="text-[var(--accent)]">Adaptive</span> operator.
          </motion.h2>
        </div>
      </div>

      {/* Animated Content Section */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-12 gap-6 md:gap-10"
      >
        <div className="col-span-12 md:col-span-5">
          <div className="group relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)] bg-[var(--paper)]">
            <Image
              src="/assets/projects/pas foto.png"
              alt="Collaborative project planning session"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="img-hover object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-6 font-mono-ibm text-[15px] leading-[1.7] md:col-span-6 md:col-start-7 md:text-base">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}

          <div className="mt-6 grid grid-cols-2 gap-6 border-t border-[var(--line)]/30 pt-8">
            {profile.facts.map(([label, value]) => (
              <div key={label} className="group/fact cursor-default">
                <div className="font-display text-3xl font-black tracking-tight md:text-4xl text-[var(--ink)] group-hover/fact:text-[var(--accent)] transition-colors duration-300">
                  {value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
            Reach -{" "}
            <a href={`mailto:${profile.email}`} className="linky text-[var(--ink)]">
              {profile.email}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

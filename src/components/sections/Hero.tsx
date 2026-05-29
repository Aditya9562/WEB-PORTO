"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile, socials } from "@/data/profile";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const word: Variants = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] as const }
  }
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-[90rem] flex-col justify-between overflow-hidden px-6 pb-16 pt-32 md:px-12"
    >
      <div className="grid grid-cols-12 gap-6 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
        <div className="col-span-6 md:col-span-3">
          <div className="mb-1 text-[var(--ink)]">[ 01 ] Location</div>
          {profile.location}
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="mb-1 text-[var(--ink)]">[ 02 ] Status</div>
          <span className="text-[var(--accent)]">●</span> {profile.status}
        </div>
        <div className="hidden md:col-span-3 md:block">
          <div className="mb-1 text-[var(--ink)]">[ 03 ] Discipline</div>
          {profile.discipline}
        </div>
        <div className="hidden md:col-span-3 md:block">
          <div className="mb-1 text-[var(--ink)]">[ 04 ] Index</div>
          APA / 2026
        </div>
      </div>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-12 font-display text-[17vw] font-black uppercase leading-[0.85] tracking-tighter md:mt-0 md:text-[12.8vw]"
      >
        <span className="block overflow-hidden">
          <motion.span className="block" variants={word}>
            Aditya
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span className="block" variants={word}>
            Putra
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span className="block" variants={word}>
            Afendi
          </motion.span>
        </span>
      </motion.h1>

      <div className="mt-16 grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 font-mono-ibm text-sm leading-relaxed text-[var(--ink-2)] md:col-span-5 md:text-base">
          <span className="text-[var(--ink)]">{profile.tagline}</span> - {profile.intro}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#contact">Contact Me</Button>
            <Button href="#work" variant="outline">
              View Work
            </Button>
          </div>
        </div>

        <div className="hidden md:col-span-3 md:block" />

        <div className="col-span-12 md:col-span-4">
          <a
            href="#work"
            className="group flex items-center justify-between border-t border-[var(--line)] pt-4 transition-colors hover:text-[var(--accent)]"
          >
            <span className="font-display text-2xl font-bold uppercase md:text-3xl">
              Selected Work
            </span>
            <ArrowDownRight
              className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              strokeWidth={1.5}
            />
          </a>
          <div className="mt-6 flex flex-wrap gap-4 font-mono-ibm text-xs uppercase tracking-[0.18em] text-[var(--ink-2)]">
            {socials.slice(0, 3).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.5} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

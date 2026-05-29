"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications, languages } from "@/data/profile";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
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

  // Helper to render issuer logo SVGs
  const getIssuerLogo = (issuer: string) => {
    const norm = issuer.toLowerCase();
    if (norm.includes("google")) {
      return (
        <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      );
    }
    if (norm.includes("ibm")) {
      return (
        <span className="font-sans font-black text-[10px] tracking-tight text-[#0f62fe] bg-[#0f62fe]/10 px-1.5 py-0.5 rounded flex-shrink-0">
          IBM
        </span>
      );
    }
    if (norm.includes("stanford")) {
      return (
        <span className="font-sans font-bold text-[9px] tracking-tighter text-[#8c1515] bg-[#8c1515]/10 px-1.5 py-0.5 rounded flex-shrink-0">
          STANFORD
        </span>
      );
    }
    if (norm.includes("deeplearning") || norm.includes("deeplearning.ai")) {
      return (
        <span className="font-sans font-black text-[8px] tracking-tighter text-[#ff6c37] bg-[#ff6c37]/10 px-1.5 py-0.5 rounded flex-shrink-0">
          DEEPLEARNING
        </span>
      );
    }
    if (norm.includes("dicoding")) {
      return (
        <span className="font-sans font-black text-[9px] tracking-tighter text-[#2d3e50] bg-[#2d3e50]/10 px-1.5 py-0.5 rounded flex-shrink-0">
          DICODING
        </span>
      );
    }
    return <Award className="h-5 w-5 text-[var(--accent)] flex-shrink-0" strokeWidth={1.5} />;
  };

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-32 md:px-12 md:py-44"
    >
      {/* Animated Header */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
        <div className="col-span-12 font-mono-ibm text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)] md:col-span-3">
          (Certifications) - § 06
        </div>
        <div className="col-span-12 overflow-hidden md:col-span-9">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
          >
            Verified learning, <span className="text-[var(--accent)]">kept current.</span>
          </motion.h2>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="carousel-container flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
      >
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="min-w-[290px] max-w-[290px] sm:min-w-[340px] sm:max-w-[340px] snap-start border border-[var(--line)]/15 bg-[var(--paper)] p-6 flex flex-col justify-between transition-colors hover:border-[var(--accent)]"
          >
            <div className="flex flex-col gap-4">
              {/* Header with Brand Logo */}
              <div className="flex items-center justify-between gap-3 border-b border-[var(--line)]/10 pb-4">
                <span className="font-mono-ibm text-[10px] uppercase tracking-[0.18em] text-[var(--ink-2)]">
                  {cert.issuer}
                </span>
                {getIssuerLogo(cert.issuer)}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-black uppercase leading-tight tracking-tight text-[var(--ink)] mt-2 line-clamp-3">
                {cert.title}
              </h3>

              {/* Date & Expiration */}
              <p className="font-mono-ibm text-[10px] text-[var(--ink-2)] uppercase tracking-wider">
                Issued {cert.issued}
                {cert.expires ? ` · Expires ${cert.expires}` : ""}
              </p>

              {/* Skills Tag list */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="border border-[var(--line)]/15 bg-[var(--bg)] px-2 py-0.5 font-mono-ibm text-[8px] uppercase tracking-wider text-[var(--ink-2)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Credential Details */}
            {cert.credential && (
              <div className="mt-8 border-t border-[var(--line)]/10 pt-4 flex items-center justify-between">
                <span className="font-mono-ibm text-[9px] uppercase tracking-widest text-[var(--ink-2)]">
                  ID: {cert.credential}
                </span>
                <span className="inline-flex items-center gap-1 font-mono-ibm text-[9px] uppercase tracking-widest text-[var(--accent)] hover:underline hover:cursor-pointer">
                  Show Credential <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Languages Card at the end of the Carousel */}
        <div className="min-w-[290px] max-w-[290px] sm:min-w-[340px] sm:max-w-[340px] snap-start border border-[var(--line)]/15 bg-[var(--paper)] p-6 flex flex-col justify-between transition-colors hover:border-[var(--accent)]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[var(--line)]/10 pb-4">
              <span className="font-mono-ibm text-[10px] uppercase tracking-[0.18em] text-[var(--ink-2)]">
                Proficiencies
              </span>
              <Award className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-[var(--ink)] mt-2">
              Languages
            </h3>

            <div className="mt-4 space-y-5">
              {languages.map((lang) => (
                <div key={lang.name} className="border-l-2 border-[var(--accent)] pl-3">
                  <div className="font-display text-lg font-bold text-[var(--ink)] uppercase tracking-tight leading-tight">
                    {lang.name}
                  </div>
                  <div className="font-mono-ibm text-[10px] uppercase tracking-wider text-[var(--ink-2)] mt-1">
                    {lang.proficiency}
                  </div>
                  {lang.details && (
                    <div className="font-mono-ibm text-[9px] text-[var(--accent)] uppercase tracking-wider mt-1">
                      {lang.details} {lang.date ? `(${lang.date})` : ""}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--line)]/10 pt-4 text-center font-mono-ibm text-[9px] uppercase tracking-widest text-[var(--ink-2)]">
            Verified Proficiency
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      setTime(`${formatter.format(new Date())} WIB`);
    };

    const updateScroll = () => setIsScrolled(window.scrollY > 40);
    updateTime();
    updateScroll();

    const interval = window.setInterval(updateTime, 1000);
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled ? "border-b border-[var(--line)]/15 bg-[var(--bg)]/85 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-5 font-mono-ibm text-[11px] uppercase tracking-[0.22em] md:px-12">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          <span className="inline-block h-2 w-2 bg-[var(--accent)] cursor-blink" aria-hidden="true" />
          <span className="font-semibold">{profile.initials}</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="linky transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden text-[var(--ink-2)] lg:block">{time}</div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

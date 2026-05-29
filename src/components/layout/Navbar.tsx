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
  const [activeSection, setActiveSection] = useState("");

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

    // Robust scroll position calculations for active section highlights
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = ["about", "work", "skills", "experience", "contact"];
      
      // Special check for top of page (header / hero)
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial trigger

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("scroll", handleScroll);
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
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-5 font-mono-ibm text-[13px] uppercase tracking-[0.22em] md:px-12">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          {/* Funky, bold, rotated badge for the logo */}
          <span className="font-display text-sm font-black tracking-tight bg-[var(--accent)] text-white px-2.5 py-1 rounded-sm rotate-[-3deg] hover:rotate-[3deg] transition-transform duration-300 inline-block shadow-md">
            {profile.initials}
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "linky transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
                  isActive
                    ? "text-[var(--accent)] font-bold scale-105"
                    : "text-[var(--ink-2)] hover:text-[var(--accent)]"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden text-[var(--ink-2)] lg:block">{time}</div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import { contactCards, profile, socials } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[90rem] border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeader
        eyebrow="(Contact) - § 08"
        title={
          <>
            Let&apos;s build something <span className="text-[var(--accent)]">clear.</span>
          </>
        }
      />

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-7">
          <div className="border-y border-[var(--line)] py-8">
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-2)] md:text-2xl">
              I am available for recruiter conversations, project coordination roles, system analyst
              opportunities, and technology operations work where clarity and execution matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>Email Me</Button>
              <Button href={`tel:${profile.phone}`} variant="outline">
                Call
              </Button>
            </div>
          </div>

          <form className="mt-8 flex flex-col gap-2" action={`mailto:${profile.email}`} method="post">
            <div className="grid gap-6 md:grid-cols-2">
              <input className="input-bare" name="name" placeholder="Name *" required />
              <input className="input-bare" name="email" type="email" placeholder="Email *" required />
            </div>
            <input className="input-bare" name="subject" placeholder="Subject" />
            <textarea className="input-bare min-h-36 resize-none" name="message" placeholder="Message *" required />
            <button
              type="submit"
              className="group mt-8 inline-flex items-center justify-between border border-[var(--line)] bg-[var(--ink)] px-6 py-5 font-mono-ibm text-sm font-medium uppercase tracking-[0.22em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)] hover:text-white md:px-8 md:py-6"
            >
              <span>Send Transmission</span>
              <ArrowUpRight
                className="h-5 w-5 transition-transform group-hover:rotate-45"
                strokeWidth={1.5}
              />
            </button>
          </form>
        </Reveal>

        <aside className="col-span-12 flex flex-col gap-8 font-mono-ibm md:col-span-4 md:col-start-9">
          {contactCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.05}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block border-b border-[var(--line)]/30 pb-6 transition-colors hover:text-[var(--accent)]"
              >
                <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
                  <span>{card.label}</span>
                  <card.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="break-words font-display text-2xl font-bold tracking-tight">
                  {card.value}
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal className="border-t border-[var(--line)] pt-6">
            <div className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-2)]">
              Channels
            </div>
            <ul className="flex flex-col gap-3 text-base">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-[var(--line)]/30 pb-3 transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="flex items-center gap-3">
                      <social.icon className="h-4 w-4" strokeWidth={1.5} />
                      {social.label}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:rotate-45"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

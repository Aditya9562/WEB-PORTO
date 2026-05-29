import { profile, socials } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--bg)]">
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-6 px-6 py-12 font-mono-ibm text-xs uppercase tracking-[0.22em] md:px-12">
        <div className="col-span-12 md:col-span-4">
          <div className="font-display text-3xl font-black normal-case tracking-tight">
            {profile.name}
          </div>
          <div className="mt-2 max-w-sm normal-case tracking-normal text-[var(--bg)]/60">
            {profile.tagline}
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="mb-2 text-[var(--bg)]/60"> </div>
          <ul className="space-y-1 normal-case tracking-normal">

          </ul>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="mb-2 text-[var(--bg)]/60">Channels</div>
          <ul className="space-y-1 normal-case tracking-normal">
            {socials.slice(0, 3).map((social) => (
              <li key={social.label}>
                <a href={social.href} className="linky" target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2 md:text-right">
          <div className="mb-2 text-[var(--bg)]/60">© {year}</div>
          <div className="normal-case tracking-normal text-[var(--bg)]/60">
            Built for clarity.
            <br />
            Based in Bekasi.
          </div>
        </div>
      </div>
    </footer>
  );
}

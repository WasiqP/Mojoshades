import Link from "next/link";
import { Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.18 8.18 0 0 0 4.78 1.52V6.84a4.85 4.85 0 0 1-1.01-.15z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-bone/10 bg-noir-soft">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-light tracking-tight text-bone">
              MOJO<span className="italic text-blood-bright">SHADES</span>
            </p>
            <p className="font-body mt-5 max-w-sm text-sm leading-relaxed text-ash">
              A lipstick house for those who refuse to blend in. Editorial
              colour, engineered to be worn loud.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-ash-dim">Explore</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/shop", label: "The Collection" },
                { href: "/about", label: "The House" },
                { href: "/checkout", label: "Bag" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm text-ash transition-colors hover:text-bone"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5 text-ash-dim">Follow The House</p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-bone/15 p-3 text-bone transition-colors hover:border-blood hover:text-blood-bright"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-bone/15 p-3 text-bone transition-colors hover:border-blood hover:text-blood-bright"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="gilt-divider my-12" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-body text-xs text-ash-dim">
            &copy; {new Date().getFullYear()} Mojoshades. All rights reserved.
          </p>
          <p className="eyebrow text-ash-dim">Lips Only. No Compromise.</p>
        </div>
      </div>
    </footer>
  );
}

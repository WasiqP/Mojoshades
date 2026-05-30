import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The House",
  description:
    "The Mojoshades house: cruelty-free, inclusive, made-on-demand lipstick for those who refuse to blend in.",
};

const timeline = [
  {
    year: "2024",
    title: "The Spark",
    text: "Mojoshades began with one conviction — that lipstick should be loud, inclusive, and entirely without apology. No filler categories. Lips only.",
  },
  {
    year: "2025",
    title: "First Drop",
    text: "Our debut collection arrived in four finishes. Cherry Bomb sold out in 48 hours and a waitlist formed overnight. The house had a voice.",
  },
  {
    year: "2026",
    title: "Worn Worldwide",
    text: "Today every shade ships globally, made-on-demand. Curated for real people with real taste — not trends engineered to expire.",
  },
];

const values = [
  {
    title: "Cruelty-Free",
    text: "Never tested on animals. Formulated with compassion at the core, always.",
  },
  {
    title: "Shade Inclusive",
    text: "Every undertone, every finish. A range built so everyone finds their statement.",
  },
  {
    title: "Made On Demand",
    text: "Produced to order and shipped fresh. No warehouse dust — only colour, delivered.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[85svh] items-end overflow-hidden">
        <Image
          src="/images/hero-lips.png"
          alt="Mojoshades"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bone/90 via-bone/40 to-bone/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bone/70 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
          <ScrollReveal y={30}>
            <p className="eyebrow mb-5 text-blood-bright">The House</p>
            <h1 className="font-display display-mega max-w-3xl font-light text-white">
              Born to be<br />
              <span className="italic">worn loud.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <ScrollReveal y={30}>
            <p className="font-display text-2xl font-light leading-snug text-bone sm:text-3xl md:text-4xl">
              We believe a lip should make you the main character — never the
              supporting role.
            </p>
          </ScrollReveal>
          <ScrollReveal y={30} delay={0.12}>
            <p className="font-body leading-relaxed text-ash">
              Mojoshades was born from frustration with beauty that plays it
              safe. We wanted saturated colour, honest formulas, and a house
              that speaks to a bold generation without the cringe. Everything we
              make is lips-only — no distractions, no filler. Just pigment with
              a point of view.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-bone/10 bg-noir-soft px-6 py-28 md:py-36">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal className="mb-16 text-center" y={30}>
            <p className="eyebrow mb-4 text-blood-bright">The Journey</p>
            <h2 className="font-display display-lg font-light text-bone">
              How We Got Here
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger={0.15} y={40}>
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative border-l border-bone/15 pb-14 pl-8 last:pb-0"
              >
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blood" />
                <p className="eyebrow mb-2 text-blood-bright">{item.year}</p>
                <h3 className="font-display text-2xl font-light italic text-bone">
                  {item.title}
                </h3>
                <p className="font-body mt-3 leading-relaxed text-ash">
                  {item.text}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16 text-center" y={30}>
            <p className="eyebrow mb-4 text-blood-bright">Non-Negotiables</p>
            <h2 className="font-display display-lg font-light text-bone">
              What We Stand For
            </h2>
          </ScrollReveal>
          <ScrollReveal
            className="grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 md:grid-cols-3"
            stagger={0.12}
          >
            {values.map((v, i) => (
              <div key={v.title} className="bg-noir-soft p-10">
                <p className="font-display text-5xl font-light text-blood-bright/40">
                  0{i + 1}
                </p>
                <h3 className="font-display mt-6 text-2xl font-light italic text-bone">
                  {v.title}
                </h3>
                <p className="font-body mt-3 text-sm leading-relaxed text-ash">
                  {v.text}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-28 md:py-40">
        <Image
          src="/images/editorial-banner.png"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/90 to-noir/70" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <ScrollReveal y={30}>
            <h2 className="font-display display-lg font-light text-bone">
              Your signature shade is waiting.
            </h2>
            <p className="font-body mx-auto mt-5 max-w-md text-sm text-ash">
              Explore the full collection and find the colour that was made to
              be yours.
            </p>
            <Link href="/shop" className="mt-9 inline-block">
              <Button size="lg">Shop The Collection</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

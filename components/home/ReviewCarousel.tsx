"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const reviews = [
  {
    name: "Zara M.",
    shade: "Cherry Bomb",
    text: "The matte finish is unreal. Through dinner, drinks, and a 2am taxi, it never budged. This is the only red I trust now.",
  },
  {
    name: "Lily K.",
    shade: "Pink Noise",
    text: "Glass-shine without the stick. The pink reads so much louder than it looks in the tube. I get asked about it constantly.",
  },
  {
    name: "Amara J.",
    shade: "Cloud Nine",
    text: "Finally, a nude that works on deeper skin. The satin finish is quietly expensive-looking. My everyday, forever.",
  },
  {
    name: "Sofia R.",
    shade: "Chrome Kiss",
    text: "The chrome shift is genuinely futuristic. It photographs like jewellery. Nothing on my shelf comes close.",
  },
];

export function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="border-y border-bone/10 bg-noir-soft px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal y={30}>
          <p className="eyebrow mb-10 text-blood-bright">The Verdict</p>
          <blockquote className="font-display min-h-[180px] text-2xl font-light leading-snug text-bone sm:text-3xl md:text-4xl">
            <span className="text-blood-bright">&ldquo;</span>
            {reviews[current].text}
            <span className="text-blood-bright">&rdquo;</span>
          </blockquote>
          <div className="mt-8">
            <p className="font-body text-sm text-bone">{reviews[current].name}</p>
            <p className="eyebrow mt-1 text-ash-dim">
              Wearing {reviews[current].shade}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-bone/20 p-3 text-bone transition-colors hover:border-bone"
            aria-label="Previous"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-blood" : "w-1.5 bg-bone/25"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-bone/20 p-3 text-bone transition-colors hover:border-bone"
            aria-label="Next"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

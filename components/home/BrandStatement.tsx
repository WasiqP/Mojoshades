"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const line = "We don't do subtle. We do shades that get remembered.";

export function BrandStatement() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const words = ref.current.querySelectorAll("span[data-w]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <p
          ref={ref}
          className="font-display text-center text-3xl font-light leading-[1.25] text-bone sm:text-4xl md:text-5xl"
        >
          {line.split(" ").map((word, i) => (
            <span key={i} data-w className="inline-block">
              {word}
              {i < line.split(" ").length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { prefersReducedMotion } from "@/lib/utils";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordTopRef = useRef<HTMLSpanElement>(null);
  const wordBottomRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, { opacity: 0, y: 20, duration: 0.8 })
        .from(
          [wordTopRef.current, wordBottomRef.current],
          { opacity: 0, yPercent: 60, duration: 1.3, stagger: 0.12 },
          "-=0.4"
        )
        .from(
          imageRef.current,
          { opacity: 0, scale: 1.12, duration: 1.6, ease: "power2.out" },
          "-=1.1"
        )
        .from(
          contentRef.current?.children ?? [],
          { opacity: 0, y: 24, duration: 0.9, stagger: 0.12 },
          "-=0.9"
        );

      // Cinematic scroll parallax
      gsap.to(imageRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to([wordTopRef.current, wordBottomRef.current], {
        yPercent: -28,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 62% 42%, rgba(200,16,46,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Wordmark behind */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <span
          ref={wordTopRef}
          className="font-display display-mega block font-light tracking-[0.02em] text-bone/95"
        >
          MOJO
        </span>
        <span
          ref={wordBottomRef}
          className="font-display display-mega block font-light italic tracking-[0.02em] text-stroke -mt-[1.5vw]"
        >
          SHADES
        </span>
      </div>

      {/* Lips image in front of the wordmark — black bg blends into the canvas */}
      <div
        ref={imageRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(78vw,540px)] -translate-x-1/2 -translate-y-[48%]"
      >
        <div className="relative aspect-[1200/800] w-full">
          <Image
            src="/images/hero-lips.png"
            alt="Mojoshades signature red lip"
            fill
            priority
            sizes="(max-width: 768px) 78vw, 540px"
            className="object-contain"
            style={{
              maskImage:
                "radial-gradient(68% 68% at 52% 48%, #000 42%, transparent 88%)",
              WebkitMaskImage:
                "radial-gradient(68% 68% at 52% 48%, #000 42%, transparent 88%)",
            }}
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-20 pt-32">
        <p ref={eyebrowRef} className="eyebrow mb-5 text-blood-bright">
          The Lipstick House
        </p>
        <div
          ref={contentRef}
          className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
        >
          <h1 className="font-display max-w-xl text-3xl font-light leading-[1.05] text-bone sm:text-4xl md:text-5xl">
            Lips, in their <span className="italic text-blood-bright">boldest</span>{" "}
            form.
          </h1>
          <div className="flex max-w-sm flex-col gap-5">
            <p className="font-body text-sm leading-relaxed text-ash">
              Molten reds, liquid chrome, midnight plums. Editorial colour for
              the ones who refuse to blend in.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop">
                <Button size="lg">Shop The Collection</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  The House
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2">
        <ArrowDown
          className="animate-scroll-cue h-5 w-5 text-bone/40"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}

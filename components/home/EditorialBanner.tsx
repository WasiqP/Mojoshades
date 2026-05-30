"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function EditorialBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.from(contentRef.current?.children ?? [], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90svh] overflow-hidden"
    >
      <div ref={imageRef} className="absolute inset-0 scale-110">
        <Image
          src="/images/editorial-banner.png"
          alt="Mojoshades signature lipsticks in molten chrome and red"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bone/80 via-bone/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bone/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl items-center px-6">
        <div ref={contentRef} className="max-w-xl">
          <p className="eyebrow mb-5 text-blood-bright">The Signature Edit</p>
          <h2 className="font-display display-xl font-light text-white">
            Colour worth <span className="italic">obsessing</span> over.
          </h2>
          <p className="font-body mt-6 max-w-md leading-relaxed text-white/80">
            Three icon shades, one molten philosophy. Every Mojoshades bullet is
            built to be reached for again, and again, and again.
          </p>
          <Link href="/shop" className="mt-9 inline-block">
            <Button size="lg">Discover The Edit</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

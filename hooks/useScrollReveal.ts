"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  start?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    delay = 0,
    duration = 0.9,
    y = 40,
    stagger = 0.1,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) {
      if (el) gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const targets = el.children.length > 0 ? el.children : [el];

    gsap.set(targets, { opacity: 0, y });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [delay, duration, y, stagger, start]);

  return ref;
}

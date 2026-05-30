"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  y = 40,
  stagger = 0.1,
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ delay, duration, y, stagger });

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

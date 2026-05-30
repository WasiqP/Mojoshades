"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { Finish } from "@/lib/types";

const finishes: {
  finish: Finish;
  label: string;
  description: string;
  swatch: string;
}[] = [
  {
    finish: "matte",
    label: "Matte",
    description: "Velvet-soft, all-day power",
    swatch: "linear-gradient(135deg, #b81d2b, #4a0a14)",
  },
  {
    finish: "gloss",
    label: "Gloss",
    description: "Mirror shine, plumped",
    swatch: "linear-gradient(135deg, #e0568f, #d61f7a)",
  },
  {
    finish: "satin",
    label: "Satin",
    description: "Luminous, creamy glide",
    swatch: "linear-gradient(135deg, #5e1d35, #7a213d)",
  },
  {
    finish: "vinyl",
    label: "Vinyl",
    description: "Liquid-chrome lacquer",
    swatch: "linear-gradient(135deg, #cfcfd4, #9a9aa2, #f5f5f7)",
  },
];

export function ShopByFinish() {
  return (
    <section className="border-y border-bone/10 bg-noir-soft px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-14 text-center" y={30}>
          <p className="eyebrow mb-4 text-blood-bright">Four Finishes</p>
          <h2 className="font-display display-xl font-light text-bone">
            Find Your Finish
          </h2>
        </ScrollReveal>

        <ScrollReveal
          className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {finishes.map((item) => (
            <Link
              key={item.finish}
              href={`/shop?finish=${item.finish}`}
              className="group relative flex flex-col justify-between gap-10 bg-noir-soft p-8 transition-colors duration-500 hover:bg-noir-card"
            >
              <span
                className="h-16 w-16 rounded-full ring-1 ring-bone/20 transition-transform duration-500 group-hover:scale-110"
                style={{ background: item.swatch }}
              />
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl font-light italic text-bone">
                    {item.label}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 text-ash-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blood-bright"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="font-body mt-2 text-sm text-ash">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

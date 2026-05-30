"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function FeaturedShades() {
  const featured = getFeaturedProducts();

  return (
    <section className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          y={30}
        >
          <div>
            <p className="eyebrow mb-4 text-blood-bright">Curated</p>
            <h2 className="font-display display-xl font-light text-bone">
              The Icons
            </h2>
          </div>
          <Link
            href="/shop"
            className="eyebrow group inline-flex items-center gap-2 text-ash transition-colors hover:text-bone"
          >
            View All Shades
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </ScrollReveal>

        <ScrollReveal
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          stagger={0.08}
          y={60}
        >
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

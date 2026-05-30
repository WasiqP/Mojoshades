"use client";

import { getTrendingProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function TrendingNow() {
  const trending = getTrendingProducts().slice(0, 4);

  return (
    <section className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-14" y={30}>
          <p className="eyebrow mb-4 text-blood-bright">In Rotation</p>
          <h2 className="font-display display-xl font-light text-bone">
            Trending Now
          </h2>
        </ScrollReveal>

        <ScrollReveal
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          stagger={0.08}
          y={60}
        >
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

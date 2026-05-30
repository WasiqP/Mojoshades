"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice, getMinPrice } from "@/lib/data/products";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ShadeSwatch } from "@/components/shop/ShadeSwatch";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const minInventory = Math.min(...product.variants.map((v) => v.inventory));

  return (
    <Link href={`/shop/${product.handle}`} className="group block">
      <article className="surface-card overflow-hidden rounded-2xl transition-all duration-500 group-hover:border-bone/25 group-hover:shadow-[0_30px_80px_-40px_rgba(200,16,46,0.5)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-noir-soft">
          <Image
            src={product.images[0]?.url ?? ""}
            alt={product.images[0]?.altText ?? product.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />

          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {product.trending && <Badge variant="blood">Trending</Badge>}
            {minInventory <= 5 && (
              <Badge variant="gilt">Only {minInventory} left</Badge>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-bone/90 via-bone/50 to-transparent p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center gap-2">
              {product.variants.map((v) => (
                <ShadeSwatch key={v.id} hex={v.shadeHex} size="sm" />
              ))}
              <span className="eyebrow ml-auto text-white/80">View</span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-3 p-5">
          <div>
            <h3 className="font-display text-xl font-light italic leading-none text-bone">
              {product.title}
            </h3>
            <p className="eyebrow mt-2 text-ash-dim">
              {product.finish} · {product.undertone}
            </p>
          </div>
          <p className="font-body shrink-0 text-sm text-bone/80">
            {formatPrice(getMinPrice(product))}
          </p>
        </div>
      </article>
    </Link>
  );
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-display text-3xl font-light italic text-ash">
          No shades match your edit
        </p>
        <p className="font-body mt-3 text-sm text-ash-dim">
          Try a different finish or undertone.
        </p>
      </div>
    );
  }

  return (
    <ScrollReveal
      className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
      stagger={0.07}
      y={60}
    >
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} priority={i < 4} />
      ))}
    </ScrollReveal>
  );
}

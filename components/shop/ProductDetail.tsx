"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import type { Product, ProductVariant } from "@/lib/types";
import { formatPrice } from "@/lib/data/products";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ShadeSwatch } from "@/components/shop/ShadeSwatch";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { ProductCard } from "@/components/shop/ProductCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ProductDetailProps {
  product: Product;
  related: Product[];
}

export function ProductDetail({ product, related }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );

  const accordionItems = [
    {
      title: "Ingredients",
      content: (
        <ul className="space-y-1">
          {product.ingredients?.map((ing) => <li key={ing}>{ing}</li>) ?? (
            <li>See packaging for full list</li>
          )}
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content:
        "Complimentary shipping on orders over $40. Returns accepted within 30 days in original condition. Reach the house at care@mojoshades.com.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 pt-28 pb-28 md:pb-24">
      <Link
        href="/shop"
        className="eyebrow mb-10 inline-flex items-center gap-2 text-ash transition-colors hover:text-bone"
      >
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> The Collection
      </Link>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal y={50}>
          <div className="surface-card relative aspect-[4/5] overflow-hidden rounded-3xl bg-noir-soft">
            <Image
              src={product.images[0]?.url ?? ""}
              alt={product.images[0]?.altText ?? product.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute left-4 top-4 flex gap-2">
              {product.trending && <Badge variant="blood">Trending</Badge>}
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:py-4">
          <ScrollReveal y={30} stagger={0.07}>
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="outline">{product.finish}</Badge>
              <Badge variant="outline">{product.undertone} undertone</Badge>
              {product.wearTime && (
                <Badge variant="gilt">{product.wearTime}</Badge>
              )}
            </div>

            <h1 className="font-display display-lg font-light text-bone">
              {product.title}
            </h1>
            <p className="font-body mt-4 text-lg text-bone/70">
              {formatPrice(selectedVariant.price)}
            </p>
            <p className="font-body mt-6 max-w-md leading-relaxed text-ash">
              {product.description}
            </p>

            <div className="mt-9">
              <p className="eyebrow mb-4 text-ash-dim">
                Shade — {selectedVariant.title}
              </p>
              <div className="flex flex-wrap gap-4">
                {product.variants.map((v) => (
                  <div key={v.id} className="flex flex-col items-center gap-2">
                    <ShadeSwatch
                      hex={v.shadeHex}
                      size="lg"
                      selected={selectedVariant.id === v.id}
                      onClick={() => setSelectedVariant(v)}
                      label={v.title}
                    />
                    <span className="font-body text-[10px] text-ash-dim">
                      {v.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {selectedVariant.inventory <= 5 && (
              <p className="font-body mt-5 text-xs text-gilt">
                Only {selectedVariant.inventory} left in this shade.
              </p>
            )}

            <div className="mt-8 hidden md:block">
              <AddToCartButton
                product={product}
                variant={selectedVariant}
                className="w-full sm:w-auto"
              />
            </div>

            <div className="mt-10">
              <p className="eyebrow mb-4 text-ash-dim">Why You&apos;ll Reach For It</p>
              <ul className="space-y-3">
                {product.highlights?.map((h) => (
                  <li
                    key={h}
                    className="font-body flex items-start gap-3 text-sm text-bone/80"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-blood-bright"
                      strokeWidth={1.5}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <Accordion items={accordionItems} className="mt-10" />
          </ScrollReveal>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-28">
          <ScrollReveal className="mb-10">
            <p className="eyebrow mb-3 text-blood-bright">Complete The Look</p>
            <h2 className="font-display display-lg font-light text-bone">
              Pairs Beautifully With
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Sticky mobile add-to-cart */}
      <div className="glass-noir fixed inset-x-0 bottom-0 z-40 border-t border-bone/10 p-4 md:hidden">
        <AddToCartButton
          product={product}
          variant={selectedVariant}
          className="w-full"
        />
      </div>
    </div>
  );
}

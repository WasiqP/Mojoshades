"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { filterProducts, products } from "@/lib/data/products";
import { FilterBar } from "@/components/shop/FilterBar";
import { ProductGrid } from "@/components/shop/ProductCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { Finish, SortOption, Undertone } from "@/lib/types";

export function ShopContent() {
  const searchParams = useSearchParams();
  const [finish, setFinish] = useState<Finish | "all">("all");
  const [undertone, setUndertone] = useState<Undertone | "all">("all");
  const [sort, setSort] = useState<SortOption>("featured");

  useEffect(() => {
    const f = searchParams.get("finish");
    if (f && ["matte", "gloss", "satin", "vinyl"].includes(f)) {
      setFinish(f as Finish);
    }
  }, [searchParams]);

  const filtered = useMemo(
    () => filterProducts({ finish, undertone, sort }),
    [finish, undertone, sort]
  );

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-28">
      <ScrollReveal className="mb-12" y={30}>
        <p className="eyebrow mb-4 text-blood-bright">The Collection</p>
        <h1 className="font-display display-xl font-light text-bone">
          Every shade,<br />
          <span className="italic text-ash">a statement.</span>
        </h1>
        <p className="font-body mt-6 max-w-md text-sm leading-relaxed text-ash">
          {products.length} editorial shades across matte, gloss, satin and
          vinyl. Filter by finish and undertone to find the one that&apos;s
          unmistakably yours.
        </p>
      </ScrollReveal>

      <FilterBar
        finish={finish}
        undertone={undertone}
        sort={sort}
        onFinishChange={setFinish}
        onUndertoneChange={setUndertone}
        onSortChange={setSort}
        resultCount={filtered.length}
      />

      <ProductGrid products={filtered} />
    </div>
  );
}

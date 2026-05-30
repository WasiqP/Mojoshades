"use client";

import { useCartStore } from "@/stores/cartStore";
import type { Product, ProductVariant } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  variant: ProductVariant;
  className?: string;
}

export function AddToCartButton({
  product,
  variant,
  className,
}: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <Button
      className={className}
      size="lg"
      onClick={() => addItem(product, variant)}
      disabled={!variant.available}
    >
      <ShoppingBag className="h-4 w-4" />
      {variant.available ? "Add to Bag" : "Sold Out"}
    </Button>
  );
}

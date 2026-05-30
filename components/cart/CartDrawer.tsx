"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal } =
    useCartStore();

  const subtotal = getSubtotal();
  const freeShippingGap = Math.max(0, 40 - subtotal);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-noir/70 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden
      />

      <div
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-noir-soft shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        data-lenis-prevent
      >
        <div className="flex items-center justify-between border-b border-bone/10 px-6 py-6">
          <h2 className="eyebrow text-bone">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full p-2 text-bone transition-colors hover:bg-bone/10"
            aria-label="Close bag"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl font-light italic text-ash">
                Your bag is empty
              </p>
              <p className="font-body mt-2 text-sm text-ash-dim">
                Time to find your shade.
              </p>
              <Link href="/shop" onClick={closeCart} className="mt-7">
                <Button>Shop The Collection</Button>
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.merchandiseId}
                  className="surface-card flex gap-4 rounded-xl p-3"
                >
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-noir">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-display text-base font-light italic text-bone">
                          {item.title}
                        </p>
                        <p className="font-body mt-0.5 flex items-center gap-1.5 text-xs text-ash">
                          <span
                            className="inline-block h-2.5 w-2.5 rounded-full ring-1 ring-bone/20"
                            style={{ backgroundColor: item.shadeHex }}
                          />
                          {item.variantTitle}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.merchandiseId)}
                        className="p-1 text-ash-dim transition-colors hover:text-blood-bright"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.merchandiseId, item.quantity - 1)
                          }
                          className="rounded-full border border-bone/20 p-1 text-bone transition-colors hover:border-bone"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                        <span className="font-body w-4 text-center text-sm text-bone">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.merchandiseId, item.quantity + 1)
                          }
                          className="rounded-full border border-bone/20 p-1 text-bone transition-colors hover:border-bone"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="font-body text-sm text-bone">
                        {formatPrice(item.cost * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-bone/10 px-6 py-6">
            {freeShippingGap > 0 ? (
              <p className="font-body mb-4 text-xs text-gilt">
                Add {formatPrice(freeShippingGap)} more for complimentary
                shipping.
              </p>
            ) : (
              <p className="font-body mb-4 text-xs text-gilt">
                You&apos;ve unlocked complimentary shipping.
              </p>
            )}
            <div className="mb-5 flex items-center justify-between">
              <span className="eyebrow text-ash">Subtotal</span>
              <span className="font-body text-lg text-bone">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Link href="/checkout" onClick={closeCart}>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

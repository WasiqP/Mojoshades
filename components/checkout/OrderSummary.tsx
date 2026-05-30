"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/data/products";

export function OrderSummary() {
  const { items, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();
  const shipping = subtotal >= 40 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (items.length === 0) return null;

  return (
    <div className="surface-card sticky top-28 rounded-2xl p-6">
      <h2 className="eyebrow mb-6 text-bone">Order Summary</h2>

      <ul className="mb-6 space-y-4">
        {items.map((item) => (
          <li key={item.merchandiseId} className="flex gap-3">
            <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-noir">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="64px"
              />
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blood text-[10px] font-semibold text-bone">
                {item.quantity}
              </span>
            </div>
            <div className="flex flex-1 justify-between">
              <div>
                <p className="font-display text-base font-light italic text-bone">
                  {item.title}
                </p>
                <p className="font-body mt-0.5 text-xs text-ash">
                  {item.variantTitle}
                </p>
              </div>
              <p className="font-body text-sm text-bone">
                {formatPrice(item.cost * item.quantity)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-2.5 border-t border-bone/10 pt-5">
        <div className="font-body flex justify-between text-sm">
          <span className="text-ash">Subtotal</span>
          <span className="text-bone">{formatPrice(subtotal)}</span>
        </div>
        <div className="font-body flex justify-between text-sm">
          <span className="text-ash">Shipping</span>
          <span className="text-bone">
            {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
          </span>
        </div>
        {subtotal < 40 && (
          <p className="font-body text-xs text-gilt">
            Add {formatPrice(40 - subtotal)} more for complimentary shipping.
          </p>
        )}
        <div className="font-body flex justify-between pt-3 text-lg">
          <span className="text-bone">Total</span>
          <span className="text-bone">{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}

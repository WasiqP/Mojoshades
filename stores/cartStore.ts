"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLineItem } from "@/lib/types";
import type { Product, ProductVariant } from "@/lib/types";

interface CartState {
  items: CartLineItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, variant: ProductVariant) => void;
  removeItem: (merchandiseId: string) => void;
  updateQuantity: (merchandiseId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      addItem: (product, variant) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.merchandiseId === variant.merchandiseId
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.merchandiseId === variant.merchandiseId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
              isOpen: true,
            };
          }
          const newItem: CartLineItem = {
            merchandiseId: variant.merchandiseId,
            productId: product.id,
            handle: product.handle,
            title: product.title,
            variantTitle: variant.title,
            shadeHex: variant.shadeHex,
            image: product.images[0]?.url ?? "",
            quantity: 1,
            cost: variant.price,
          };
          return { items: [...state.items, newItem], isOpen: true };
        });
      },

      removeItem: (merchandiseId) =>
        set((state) => ({
          items: state.items.filter((i) => i.merchandiseId !== merchandiseId),
        })),

      updateQuantity: (merchandiseId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(merchandiseId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.merchandiseId === merchandiseId ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getSubtotal: () =>
        get().items.reduce((sum, i) => sum + i.cost * i.quantity, 0),

      getItemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "mojoshades-cart" }
  )
);

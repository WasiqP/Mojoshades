"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && items.length === 0 && !success) {
      router.replace("/shop");
    }
  }, [mounted, items.length, success, router]);

  if (!mounted) return null;

  if (success) {
    return (
      <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
        <ScrollReveal>
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-blood">
            <Check className="h-7 w-7 text-blood-bright" strokeWidth={1.5} />
          </div>
          <p className="eyebrow mb-5 text-blood-bright">Confirmed</p>
          <h1 className="font-display display-lg font-light text-bone">
            Your order is in motion.
          </h1>
          <p className="font-body mx-auto mt-5 max-w-md text-sm leading-relaxed text-ash">
            Thank you. A confirmation is on its way to your inbox. Once Shopify
            is connected, this step hands off to secure Shopify Checkout.
          </p>
          <Link href="/shop" className="mt-9 inline-block">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </ScrollReveal>
      </div>
    );
  }

  if (items.length === 0) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-28">
      <ScrollReveal className="mb-12" y={30}>
        <p className="eyebrow mb-4 text-blood-bright">Secure Checkout</p>
        <h1 className="font-display display-xl font-light text-bone">Checkout</h1>
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <CheckoutForm onSuccess={() => setSuccess(true)} />
        </div>
        <div className="lg:col-span-2">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

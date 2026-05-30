"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";
import { Lock } from "lucide-react";

const checkoutSchema = z.object({
  email: z.string().email("Enter a valid email"),
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  address: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  postalCode: z.string().min(1, "Required"),
  country: z.string().min(1, "Required"),
  cardNumber: z.string().min(16, "Enter a valid card number").max(19),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, "MM/YY"),
  cvc: z.string().min(3, "CVC").max(4),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  onSuccess: () => void;
}

const inputClass =
  "font-body w-full rounded-xl border border-bone/15 bg-noir px-4 py-3.5 text-sm text-bone placeholder:text-ash-dim outline-none transition-colors focus:border-blood";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="font-body mt-1.5 text-xs text-blood-bright">{message}</p>;
}

export function CheckoutForm({ onSuccess }: CheckoutFormProps) {
  const { items, getSubtotal, clearCart } = useCartStore();
  const subtotal = getSubtotal();
  const shipping = subtotal >= 40 ? 0 : 5.99;
  const total = subtotal + shipping;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1400));
    clearCart();
    onSuccess();
  };

  if (items.length === 0) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <section>
        <h2 className="eyebrow mb-5 text-bone">01 — Contact</h2>
        <input {...register("email")} placeholder="Email address" className={inputClass} />
        <FieldError message={errors.email?.message} />
      </section>

      <section>
        <h2 className="eyebrow mb-5 text-bone">02 — Shipping</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <input {...register("firstName")} placeholder="First name" className={inputClass} />
            <FieldError message={errors.firstName?.message} />
          </div>
          <div>
            <input {...register("lastName")} placeholder="Last name" className={inputClass} />
            <FieldError message={errors.lastName?.message} />
          </div>
          <div className="sm:col-span-2">
            <input {...register("address")} placeholder="Address" className={inputClass} />
            <FieldError message={errors.address?.message} />
          </div>
          <div>
            <input {...register("city")} placeholder="City" className={inputClass} />
            <FieldError message={errors.city?.message} />
          </div>
          <div>
            <input {...register("postalCode")} placeholder="Postal code" className={inputClass} />
            <FieldError message={errors.postalCode?.message} />
          </div>
          <div className="sm:col-span-2">
            <input
              {...register("country")}
              placeholder="Country"
              defaultValue="United States"
              className={inputClass}
            />
            <FieldError message={errors.country?.message} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="eyebrow mb-2 text-bone">03 — Payment</h2>
        <p className="font-body mb-5 text-xs text-ash-dim">
          Demo payment — no card is charged. Shopify Checkout replaces this when
          the store goes live.
        </p>
        <div className="space-y-3">
          <div>
            <input {...register("cardNumber")} placeholder="Card number" className={inputClass} />
            <FieldError message={errors.cardNumber?.message} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input {...register("expiry")} placeholder="MM / YY" className={inputClass} />
              <FieldError message={errors.expiry?.message} />
            </div>
            <div>
              <input {...register("cvc")} placeholder="CVC" className={inputClass} />
              <FieldError message={errors.cvc?.message} />
            </div>
          </div>
        </div>
      </section>

      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        <Lock className="h-3.5 w-3.5" strokeWidth={1.5} />
        {isSubmitting ? "Processing" : `Complete Order — ${formatPrice(total)}`}
      </Button>
    </form>
  );
}

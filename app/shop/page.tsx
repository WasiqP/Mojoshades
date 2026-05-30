import { Suspense } from "react";
import { ShopContent } from "@/components/shop/ShopContent";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center pt-28">
          <p className="font-body text-sm text-mojo-ink/40">Loading shades...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}

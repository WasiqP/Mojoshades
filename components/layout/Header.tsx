"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "House" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-noir border-b border-bone/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center">
          <span className="font-display text-lg font-medium tracking-tight text-bone">
            MOJO<span className="italic text-blood-bright">SHADES</span>
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="eyebrow text-bone/70 transition-colors hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full p-2.5 text-bone transition-colors hover:bg-bone/10"
            aria-label="Open bag"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blood text-[9px] font-semibold text-bone">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2.5 text-bone transition-colors hover:bg-bone/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
            ) : (
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "glass-noir mx-4 mt-3 overflow-hidden rounded-2xl transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-xl px-4 py-3 text-2xl italic text-bone transition-colors hover:bg-bone/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

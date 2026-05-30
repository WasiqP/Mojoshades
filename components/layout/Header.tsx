"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/about", label: "The House" },
];

const finishLinks = [
  { href: "/shop?finish=matte", label: "Matte" },
  { href: "/shop?finish=gloss", label: "Gloss" },
  { href: "/shop?finish=satin", label: "Satin" },
  { href: "/shop?finish=vinyl", label: "Vinyl" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [finishesOpen, setFinishesOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setFinishesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/shop") return pathname === "/shop";
    if (href.startsWith("/shop?")) return pathname === "/shop";
    return pathname === href;
  };

  const heroOverlay = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "site-header fixed inset-x-0 top-0 z-50 transition-all duration-500",
          heroOverlay && "site-header--hero-overlay",
          scrolled || mobileOpen
            ? "glass-noir border-b border-bone/8"
            : isHome
              ? "border-b border-transparent bg-transparent"
              : "bg-noir/60 backdrop-blur-md"
        )}
      >
        {/* Announcement strip */}
        <div
          className={cn(
            "hidden border-b border-bone/5 sm:block",
            heroOverlay && "sm:hidden"
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <p className="eyebrow text-ash-dim">
              Lips only — no compromise
            </p>
            <p className="eyebrow text-gilt">
              Complimentary shipping over $40
            </p>
          </div>
        </div>

        {/* Main bar */}
        <div className="site-header-bar mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="site-header-logo relative z-10 shrink-0"
              aria-label="Mojoshades home"
            >
              <span
                className={cn(
                  "font-display text-base font-medium tracking-tight lg:text-lg",
                  heroOverlay ? "text-white" : "text-bone"
                )}
              >
                MOJO
                <span
                  className={cn(
                    "italic",
                    heroOverlay ? "text-white/90" : "text-blood-bright"
                  )}
                >
                  SHADES
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "site-header-link eyebrow rounded-full px-4 py-2 transition-colors",
                    isActive(link.href)
                      ? "bg-bone/10 text-bone"
                      : "text-bone/60 hover:text-bone"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Finishes dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setFinishesOpen(true)}
                onMouseLeave={() => setFinishesOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "eyebrow flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors",
                    pathname === "/shop"
                      ? "text-bone/60 hover:text-bone"
                      : "text-bone/60 hover:text-bone"
                  )}
                  aria-expanded={finishesOpen}
                  aria-haspopup="true"
                >
                  Finishes
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      finishesOpen && "rotate-180"
                    )}
                    strokeWidth={1.5}
                  />
                </button>

                <div
                  className={cn(
                    "absolute left-1/2 top-full z-50 mt-2 w-44 -translate-x-1/2 overflow-hidden rounded-xl border border-bone/10 bg-noir-soft shadow-2xl transition-all duration-200",
                    finishesOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  {finishLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="eyebrow block px-4 py-3 text-bone/70 transition-colors hover:bg-bone/5 hover:text-bone"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#newsletter"
                className="site-header-link eyebrow rounded-full px-4 py-2 text-bone/60 transition-colors hover:text-bone"
              >
                The List
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={openCart}
                className="site-header-icon-btn flex items-center gap-2 rounded-full px-3 py-2 text-bone transition-colors hover:bg-bone/10"
                aria-label={`Open bag, ${itemCount} items`}
              >
                <span className="relative">
                  <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  {itemCount > 0 && (
                    <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blood text-[9px] font-semibold text-white">
                      {itemCount}
                    </span>
                  )}
                </span>
                <span className="eyebrow hidden sm:inline">Bag</span>
              </button>

              <Link
                href="/shop"
                className={cn(
                  "site-header-cta hidden rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors md:inline-block",
                  heroOverlay
                    ? "bg-white text-black hover:bg-white/90"
                    : "btn-shine bg-blood text-white hover:bg-blood-bright"
                )}
              >
                Shop Now
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="site-header-icon-btn rounded-full p-2.5 text-bone transition-colors hover:bg-bone/10 lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
                ) : (
                  <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-bone/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "glass-noir fixed inset-x-4 top-[calc(4.5rem+1px)] z-50 overflow-hidden rounded-2xl border border-bone/10 transition-all duration-300 lg:hidden sm:inset-x-6",
          mobileOpen
            ? "pointer-events-auto max-h-[calc(100svh-6rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
        data-lenis-prevent
      >
        <nav className="overflow-y-auto p-5">
          <p className="eyebrow mb-3 text-ash-dim">Navigate</p>
          <div className="mb-6 flex flex-col gap-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "font-display rounded-xl px-4 py-3 text-2xl font-light italic transition-colors",
                  isActive(link.href)
                    ? "bg-bone/10 text-blood-bright"
                    : "text-bone hover:bg-bone/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#newsletter"
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-xl px-4 py-3 text-2xl font-light italic text-bone transition-colors hover:bg-bone/5"
            >
              The List
            </Link>
          </div>

          <p className="eyebrow mb-3 text-ash-dim">Shop By Finish</p>
          <div className="mb-6 grid grid-cols-2 gap-2">
            {finishLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="eyebrow rounded-xl border border-bone/10 px-4 py-3 text-center text-bone/70 transition-colors hover:border-bone/25 hover:text-bone"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/shop"
            onClick={() => setMobileOpen(false)}
            className="btn-shine block w-full rounded-full bg-blood py-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-white"
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </>
  );
}

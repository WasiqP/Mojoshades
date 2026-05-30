# Mojoshades

Gen Z glam lipstick dropshipping website built with Next.js, Lenis smooth scroll, and GSAP scroll animations. Shopify-ready architecture for future Storefront API integration.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** with custom design tokens
- **Lenis** — smooth scroll
- **GSAP + ScrollTrigger** — scroll-triggered entrance animations
- **Zustand** — cart state (persisted to localStorage)
- **React Hook Form + Zod** — checkout validation
- **Lucide React** — SVG icons (no emojis)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured shades, reviews, newsletter |
| `/shop` | Product grid with finish/undertone filters |
| `/shop/[handle]` | Product detail with shade selector |
| `/about` | Brand story, timeline, values |
| `/checkout` | Mock checkout (ready for Shopify swap) |

## Shopify Migration

1. Copy `.env.example` to `.env.local` and fill in:
   ```
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
   ```

2. Replace mock product imports with `fetchShopifyProducts()` from `lib/shopify/client.ts`.

3. Products are mapped through `lib/shopify/mapProduct.ts` — same `Product` type everywhere.

4. Tag products in Shopify with `finish:matte`, `undertone:warm`, `featured`, `trending` for filter support.

5. Swap mock checkout in `components/checkout/CheckoutForm.tsx` with `createShopifyCheckout()` redirect to Shopify Checkout URL.

## Design System — "Liquid Noir"

Dark editorial luxury: near-black canvas, bone-white type, molten-red and liquid-chrome accents.

- **Display / headlines:** Fraunces (high-contrast luxury serif)
- **Body / UI / labels:** Inter (tracked uppercase for eyebrows)
- **Palette tokens** (in `app/globals.css`): `--noir`, `--noir-soft`, `--bone`, `--ash`, `--blood`, `--blood-bright`, `--gilt`

### Brand imagery

Custom-generated campaign imagery lives in `public/images/` (`hero-lips.png`, `prod-*.png`, `editorial-banner.png`). Swap these for real product photography when available — filenames are referenced in `lib/data/products.ts` and the home/about pages.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

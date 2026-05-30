import type { Product } from "@/lib/types";

const img = (file: string, alt: string) => ({
  url: `/images/${file}`,
  altText: alt,
});

export const products: Product[] = [
  {
    id: "prod_cherry_bomb",
    handle: "cherry-bomb",
    title: "Cherry Bomb",
    description:
      "The matte red that walks in before you do. Saturated, weightless pigment that sets to a velvet finish and holds through every hour you throw at it.",
    finish: "matte",
    undertone: "warm",
    tags: ["bestseller", "red", "matte"],
    featured: true,
    trending: true,
    wearTime: "12 hour wear",
    highlights: [
      "Full-coverage colour in a single pass",
      "Transfer-resistant velvet matte",
      "Conditioned with vitamin E and jojoba",
    ],
    ingredients: ["Dimethicone", "Vitamin E", "Jojoba Oil", "Mineral Pigments"],
    images: [img("prod-cherry-bomb.png", "Cherry Bomb matte red lipstick")],
    variants: [
      {
        id: "var_cherry_classic",
        merchandiseId: "gid://shopify/ProductVariant/cherry-classic",
        title: "Classic Red",
        shadeHex: "#b81d2b",
        price: 24,
        available: true,
        inventory: 8,
      },
      {
        id: "var_cherry_deep",
        merchandiseId: "gid://shopify/ProductVariant/cherry-deep",
        title: "Deep Cherry",
        shadeHex: "#7c1019",
        price: 24,
        available: true,
        inventory: 5,
      },
    ],
  },
  {
    id: "prod_pink_noise",
    handle: "pink-noise",
    title: "Pink Noise",
    description:
      "A glass-finish gloss engineered to catch the light. Cushioned, never sticky, with a faint plumping warmth that makes the colour read louder than it is.",
    finish: "gloss",
    undertone: "cool",
    tags: ["gloss", "pink", "trending"],
    featured: true,
    trending: true,
    wearTime: "6 hour wear",
    highlights: [
      "Mirror-glass high shine",
      "Weightless, non-tacky cushion",
      "Subtle plumping finish",
    ],
    ingredients: ["Hyaluronic Acid", "Coconut Oil", "Mica", "Mineral Pigments"],
    images: [img("prod-pink-noise.png", "Pink Noise high-shine pink gloss")],
    variants: [
      {
        id: "var_pink_bubble",
        merchandiseId: "gid://shopify/ProductVariant/pink-bubble",
        title: "Bubblegum",
        shadeHex: "#e0568f",
        price: 22,
        available: true,
        inventory: 12,
      },
      {
        id: "var_pink_fuchsia",
        merchandiseId: "gid://shopify/ProductVariant/pink-fuchsia",
        title: "Electric Fuchsia",
        shadeHex: "#d61f7a",
        price: 22,
        available: true,
        inventory: 7,
      },
    ],
  },
  {
    id: "prod_midnight_merlot",
    handle: "midnight-merlot",
    title: "Midnight Merlot",
    description:
      "Deep plum-wine satin with a luminous, candlelit sheen. The shade that turns a quiet evening into an occasion.",
    finish: "satin",
    undertone: "cool",
    tags: ["plum", "satin", "evening"],
    featured: true,
    wearTime: "10 hour wear",
    highlights: [
      "Luminous satin sheen",
      "Creamy, slip-on glide",
      "Evening-grade depth",
    ],
    ingredients: ["Shea Butter", "Argan Oil", "Candelilla Wax", "Mineral Pigments"],
    images: [img("prod-midnight-merlot.png", "Midnight Merlot plum satin lipstick")],
    variants: [
      {
        id: "var_merlot_classic",
        merchandiseId: "gid://shopify/ProductVariant/merlot-classic",
        title: "Merlot",
        shadeHex: "#5e1d35",
        price: 26,
        available: true,
        inventory: 6,
      },
    ],
  },
  {
    id: "prod_cloud_nine",
    handle: "cloud-nine",
    title: "Cloud Nine",
    description:
      "The mocha-rose nude that behaves on everyone. A soft satin wash that enhances your natural lip rather than masking it.",
    finish: "satin",
    undertone: "neutral",
    tags: ["nude", "everyday", "bestseller"],
    featured: true,
    trending: true,
    wearTime: "8 hour wear",
    highlights: [
      "Universally flattering mocha-rose",
      "Buildable from sheer to full",
      "Desk-to-dinner versatile",
    ],
    ingredients: ["Vitamin E", "Beeswax", "Castor Oil", "Mineral Pigments"],
    images: [img("prod-cloud-nine.png", "Cloud Nine mocha-rose nude lipstick")],
    variants: [
      {
        id: "var_cloud_light",
        merchandiseId: "gid://shopify/ProductVariant/cloud-light",
        title: "Light Nude",
        shadeHex: "#c08a73",
        price: 22,
        available: true,
        inventory: 15,
      },
      {
        id: "var_cloud_medium",
        merchandiseId: "gid://shopify/ProductVariant/cloud-medium",
        title: "Medium Nude",
        shadeHex: "#a06a55",
        price: 22,
        available: true,
        inventory: 10,
      },
    ],
  },
  {
    id: "prod_velvet_vixen",
    handle: "velvet-vixen",
    title: "Velvet Vixen",
    description:
      "A moody berry matte with a velvet-soft touch. Bold enough to be a statement, comfortable enough to forget you're wearing it.",
    finish: "matte",
    undertone: "cool",
    tags: ["berry", "matte"],
    trending: true,
    wearTime: "11 hour wear",
    highlights: ["Soft-focus matte", "Rich berry depth", "All-day comfort"],
    ingredients: ["Dimethicone", "Kaolin", "Vitamin E", "Mineral Pigments"],
    images: [img("prod-velvet-vixen.png", "Velvet Vixen berry matte lipstick")],
    variants: [
      {
        id: "var_vixen_berry",
        merchandiseId: "gid://shopify/ProductVariant/vixen-berry",
        title: "Berry",
        shadeHex: "#7a213d",
        price: 24,
        available: true,
        inventory: 9,
      },
    ],
  },
  {
    id: "prod_chrome_kiss",
    handle: "chrome-kiss",
    title: "Chrome Kiss",
    description:
      "A liquid-chrome vinyl finish with a metallic shift. Future-facing shine that layers over any shade — or stands entirely on its own.",
    finish: "vinyl",
    undertone: "cool",
    tags: ["vinyl", "metallic", "trending"],
    featured: true,
    trending: true,
    wearTime: "5 hour wear",
    highlights: [
      "Liquid-chrome metallic shift",
      "Wear alone or as a topper",
      "Statement-grade reflectivity",
    ],
    ingredients: ["Silicone Blend", "Mica", "Titanium Dioxide", "Mineral Pigments"],
    images: [img("prod-chrome-kiss.png", "Chrome Kiss metallic vinyl lipstick")],
    variants: [
      {
        id: "var_chrome_pink",
        merchandiseId: "gid://shopify/ProductVariant/chrome-pink",
        title: "Chrome Pink",
        shadeHex: "#c75d8e",
        price: 28,
        available: true,
        inventory: 4,
      },
    ],
  },
  {
    id: "prod_black_cherry",
    handle: "black-cherry",
    title: "Black Cherry",
    description:
      "A wet-look vinyl lacquer in the darkest cherry. Gloss and gothic in the same breath — the shade for when subtle isn't the point.",
    finish: "vinyl",
    undertone: "cool",
    tags: ["dark", "vinyl", "statement"],
    wearTime: "7 hour wear",
    highlights: ["Wet-look lacquer shine", "Near-black cherry depth", "Pure statement"],
    ingredients: ["Silicone Blend", "Vitamin E", "Mineral Pigments"],
    images: [img("prod-black-cherry.png", "Black Cherry dark vinyl lipstick")],
    variants: [
      {
        id: "var_black_cherry",
        merchandiseId: "gid://shopify/ProductVariant/black-cherry",
        title: "Black Cherry",
        shadeHex: "#3a0d14",
        price: 27,
        available: true,
        inventory: 3,
      },
    ],
  },
  {
    id: "prod_nude_revolution",
    handle: "nude-revolution",
    title: "Nude Revolution",
    description:
      "The matte nude that started the conversation. A warm beige with quiet confidence built into every wear.",
    finish: "matte",
    undertone: "warm",
    tags: ["nude", "matte", "bestseller"],
    trending: true,
    wearTime: "12 hour wear",
    highlights: ["Icon warm-beige matte", "Smoothing soft focus", "All-day comfort"],
    ingredients: ["Dimethicone", "Vitamin E", "Shea Butter", "Mineral Pigments"],
    images: [img("prod-nude-revolution.png", "Nude Revolution warm beige matte lipstick")],
    variants: [
      {
        id: "var_nude_warm",
        merchandiseId: "gid://shopify/ProductVariant/nude-warm",
        title: "Warm Beige",
        shadeHex: "#b07d5a",
        price: 24,
        available: true,
        inventory: 16,
      },
    ],
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.trending);
}

export function getRelatedProducts(handle: string, limit = 3): Product[] {
  const current = getProductByHandle(handle);
  if (!current) return products.slice(0, limit);
  return products
    .filter(
      (p) =>
        p.handle !== handle &&
        (p.finish === current.finish || p.undertone === current.undertone)
    )
    .slice(0, limit);
}

export function getMinPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function filterProducts(filters: {
  finish?: string;
  undertone?: string;
  sort?: string;
}): Product[] {
  let result = [...products];

  if (filters.finish && filters.finish !== "all") {
    result = result.filter((p) => p.finish === filters.finish);
  }
  if (filters.undertone && filters.undertone !== "all") {
    result = result.filter((p) => p.undertone === filters.undertone);
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => getMinPrice(a) - getMinPrice(b));
      break;
    case "price-desc":
      result.sort((a, b) => getMinPrice(b) - getMinPrice(a));
      break;
    case "name":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
}

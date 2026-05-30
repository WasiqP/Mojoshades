import type { Product, ShopifyProduct } from "@/lib/types";

const FINISH_MAP: Record<string, Product["finish"]> = {
  matte: "matte",
  gloss: "gloss",
  satin: "satin",
  vinyl: "vinyl",
};

const UNDERTONE_MAP: Record<string, Product["undertone"]> = {
  warm: "warm",
  cool: "cool",
  neutral: "neutral",
};

function parseTag(tags: string[], prefix: string): string | undefined {
  const tag = tags.find((t) => t.startsWith(`${prefix}:`));
  return tag?.split(":")[1];
}

export function mapShopifyProduct(node: ShopifyProduct): Product {
  const finishTag = parseTag(node.tags, "finish");
  const undertoneTag = parseTag(node.tags, "undertone");

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    finish: FINISH_MAP[finishTag ?? ""] ?? "satin",
    undertone: UNDERTONE_MAP[undertoneTag ?? ""] ?? "neutral",
    tags: node.tags,
    featured: node.tags.includes("featured"),
    trending: node.tags.includes("trending"),
    images: node.images.edges.map(({ node: img }) => img),
    variants: node.variants.edges.map(({ node: variant }) => ({
      id: variant.id,
      merchandiseId: variant.id,
      title: variant.title,
      shadeHex: "#ff4d8d",
      price: parseFloat(variant.price.amount),
      available: variant.availableForSale,
      inventory: variant.quantityAvailable,
    })),
  };
}

export function mapShopifyProducts(data: ShopifyProduct[]): Product[] {
  return data.map(mapShopifyProduct);
}

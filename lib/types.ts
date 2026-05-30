export type Finish = "matte" | "gloss" | "satin" | "vinyl";
export type Undertone = "warm" | "cool" | "neutral";

export interface ProductVariant {
  id: string;
  merchandiseId: string;
  title: string;
  shadeHex: string;
  price: number;
  available: boolean;
  inventory: number;
}

export interface ProductImage {
  url: string;
  altText: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  finish: Finish;
  undertone: Undertone;
  tags: string[];
  images: ProductImage[];
  variants: ProductVariant[];
  featured?: boolean;
  trending?: boolean;
  wearTime?: string;
  ingredients?: string[];
  highlights?: string[];
}

export interface CartLineItem {
  merchandiseId: string;
  productId: string;
  handle: string;
  title: string;
  variantTitle: string;
  shadeHex: string;
  image: string;
  quantity: number;
  cost: number;
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface PriceRange {
  minVariantPrice: Money;
  maxVariantPrice: Money;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  tags: string[];
  priceRange: PriceRange;
  images: { edges: { node: ProductImage }[] };
  variants: { edges: { node: ShopifyVariant }[] };
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: Money;
  availableForSale: boolean;
  quantityAvailable: number;
}

export type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export interface ProductFilters {
  finish: Finish | "all";
  undertone: Undertone | "all";
  sort: SortOption;
}

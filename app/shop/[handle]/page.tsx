import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProductByHandle,
  getRelatedProducts,
} from "@/lib/data/products";
import { ProductDetail } from "@/components/shop/ProductDetail";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  const { products } = await import("@/lib/data/products");
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | Mojoshades`,
      description: product.description,
      images: product.images[0]?.url ? [product.images[0].url] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const related = getRelatedProducts(handle);

  return <ProductDetail product={product} related={related} />;
}

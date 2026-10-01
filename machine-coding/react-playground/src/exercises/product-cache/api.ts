import type { ProductDetail, ProductSummary } from "./types";

const PRODUCTS_URL = "https://dummyjson.com/products";

export async function fetchProducts(signal: AbortSignal): Promise<ProductSummary[]> {
  const response = await fetch(`${PRODUCTS_URL}?limit=10&select=title,price`, { signal });
  if (!response.ok) throw new Error("Could not load products");

  const data = (await response.json()) as { products: ProductSummary[] };
  return data.products;
}

export async function fetchProductDetails(
  id: number,
  signal: AbortSignal,
): Promise<ProductDetail> {
  const response = await fetch(`${PRODUCTS_URL}/${id}`, { signal });
  if (!response.ok) throw new Error("Could not load product details");

  return (await response.json()) as ProductDetail;
}

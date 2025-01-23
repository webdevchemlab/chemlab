"use client"

import { featuredProducts } from "@/data/products"
import ProductContent from "./product-content"

export async function generateStaticParams() {
  return featuredProducts.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = featuredProducts.find(p => p.id === params.id)
  return <ProductContent product={product} />
}
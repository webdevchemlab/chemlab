import { featuredProducts } from "@/data/products"
import ProductContent from "./product-content"

export async function generateStaticParams() {
  return featuredProducts.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductContent productId={params.id} />
}
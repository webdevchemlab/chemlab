import { Metadata } from "next"
import { featuredProducts } from "@/data/products"
import { ProductDetail } from "./product-detail"

// Generate static params for all product pages
export async function generateStaticParams() {
  return featuredProducts.map((product) => ({
    category: product.category,
    id: product.id,
  }))
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = featuredProducts.find(p => p.id === params.id)
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: `${product.name} | ChemLab Synthesis`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = featuredProducts.find(p => p.id === params.id)
  return <ProductDetail product={product} />
} 
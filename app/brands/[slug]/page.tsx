import { Metadata } from "next"
import { BrandDetails } from "@/components/brands/brand-details"
import { brands } from "@/data/brands"
import { products } from "@/data/products"

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brand = brands.find(b => b.id === params.slug)

  if (!brand) {
    return {
      title: "Brand Not Found - ChemLab Synthesis",
      description: "The requested brand could not be found on ChemLab Synthesis."
    }
  }

  return {
    title: `${brand.name} - ChemLab Synthesis`,
    description: brand.description
  }
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find(b => b.id === params.slug)
  if (!brand) return null
  
  // Get products for this brand
  const brandProducts = products.filter(product => 
    product.manufacturer.toLowerCase() === brand.name.toLowerCase()
  )
  
  return <BrandDetails brand={brand} products={brandProducts} />
} 
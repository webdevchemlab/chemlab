import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import ProductList from "@/components/products/product-list"
import ProductFilters from "@/components/products/product-filters"
import { getProducts, getProductCategories } from "@/lib/db/products"

export const metadata: Metadata = {
  title: "Products | ChemLab Synthesis",
  description: "Browse our extensive catalog of high-quality chemicals, reagents, and laboratory supplies.",
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const products = getProducts({
    category: searchParams.category as any,
    manufacturer: searchParams.manufacturer as string,
    search: searchParams.search as string,
  })

  const categories = getProductCategories()

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold">Product Catalog</h1>
            <p className="mt-4 text-xl text-blue-100">
              Browse our extensive collection of high-quality chemicals and laboratory supplies
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <div className="flex gap-8 py-8">
          {/* Filters Sidebar */}
          <div className="w-64 shrink-0">
            <ProductFilters categories={categories} />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductList products={products} />
          </div>
        </div>
      </Container>
    </div>
  )
} 
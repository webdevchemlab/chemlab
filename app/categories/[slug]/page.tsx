import { BeakerIcon } from "lucide-react"
import { getProductCategories, getProductsByCategory } from "@/data/products"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  const categories = getProductCategories()
  return categories.map((category) => ({
    slug: category.id,
  }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categories = getProductCategories()
  const category = categories.find(cat => cat.id === params.slug)
  const categoryProducts = getProductsByCategory(params.slug)

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-slate-100">Category not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center space-x-4">
          <div className="rounded-lg bg-slate-900 p-3">
            <BeakerIcon className="h-8 w-8 text-cyan-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-100">{category.name}</h1>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg bg-slate-900/50 p-6">
              <div className="mb-4 aspect-square relative rounded-lg bg-slate-800/50">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BeakerIcon className="h-12 w-12 text-slate-700" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{product.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{product.description}</p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
                  asChild
                >
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
                <Button
                  variant="default"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  asChild
                >
                  <Link href={`/quote-request?product=${product.id}`}>Request Quote</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
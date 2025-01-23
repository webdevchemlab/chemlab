"use client"

import { useState } from "react"
import { BeakerIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getProductsByCategory } from "@/data/products"

interface CategoryContentProps {
  categoryId: string
}

export default function CategoryContent({ categoryId }: CategoryContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const products = getProductsByCategory(categoryId)
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search products..."
            className="max-w-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
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
                  <Link href={`/products/${categoryId}/${product.id}`}>View Details</Link>
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
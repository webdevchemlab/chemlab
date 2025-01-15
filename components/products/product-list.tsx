"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ShoppingCart } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader className="flex-1">
            {product.imageUrl && (
              <div className="relative mb-4 aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Link 
                  href={`/products/${product.id}`}
                  className="text-lg font-semibold hover:text-blue-600"
                >
                  {product.name}
                </Link>
                {product.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                CAS: {product.casNumber}
              </p>
              <p className="text-sm text-muted-foreground">
                {product.manufacturer}
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-4 space-y-2">
              {product.purity && (
                <p className="text-sm">
                  <span className="font-medium">Purity:</span> {product.purity}
                </p>
              )}
              {product.grade && (
                <p className="text-sm">
                  <span className="font-medium">Grade:</span> {product.grade}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={product.msdsUrl} target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                MSDS
              </Link>
            </Button>
            <Button asChild size="sm" className="flex-1">
              <Link href={`/products/${product.id}`}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Quote
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 
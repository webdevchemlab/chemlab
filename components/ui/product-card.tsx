"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, description, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg">
      <Link href={`/products/${id}`} className="block">
        <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="mb-2">
          <h3 className="line-clamp-1 text-lg font-semibold text-foreground">{name}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">
            ${price.toFixed(2)}
          </span>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </Link>
    </div>
  )
} 
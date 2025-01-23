"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, AlertTriangle, CheckCircle } from "lucide-react"
import { featuredProducts } from "@/data/products"
import Link from "next/link"
import Image from "next/image"
import { BeakerIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Particles } from "@/components/ui/particles"
import type { Product } from "@/types/product"

interface ProductContentProps {
  product: Product | undefined
}

export default function ProductContent({ product }: ProductContentProps) {
  if (!product) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-muted-foreground">Product not found</p>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        staticity={30}
        color="var(--slate-500)"
      />
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-900/50 p-8">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <BeakerIcon className="h-32 w-32 text-slate-700" />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-100 mb-4">{product.name}</h1>
              <div className="text-lg text-cyan-500 mb-6">{product.manufacturer}</div>
              
              {/* Product Description */}
              <div className="prose prose-invert mb-8">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">CAS: {product.casNumber}</Badge>
                {product.grade && <Badge variant="secondary">{product.grade}</Badge>}
                {product.purity && <Badge variant="secondary">Purity: {product.purity}</Badge>}
              </div>
            </div>

            {product.specifications && product.specifications.length > 0 && (
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-200">Specifications</h3>
                <ul className="list-inside list-disc space-y-1 text-slate-400">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-200">Applications</h3>
                <ul className="list-inside list-disc space-y-1 text-slate-400">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-200">Available Packaging</h3>
                <div className="flex flex-wrap gap-2">
                  {product.packagingSizes.map((size) => (
                    <Badge key={size.id} variant="outline">
                      {size.size} {size.unit}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600"
                  onClick={() => window.location.href = `/quote-request?product=${product.id}`}
                >
                  Request Quote
                </Button>
                {product.msdsUrl && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500/20 text-cyan-500 hover:bg-cyan-500/10"
                    onClick={() => window.open(product.msdsUrl, '_blank')}
                  >
                    View MSDS
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

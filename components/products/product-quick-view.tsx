"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  X, 
  Package, 
  FileText, 
  Star, 
  CheckCircle, 
  Clock,
  ExternalLink,
  ShoppingCart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

interface ProductQuickViewProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-800">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-slate-100">
              {product.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-800/50">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <Package className="h-32 w-32 text-slate-600" />
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-1">
                    {product.name}
                  </h2>
                  <p className="text-lg text-cyan-500">{product.manufacturer}</p>
                </div>
                <div className="flex flex-col gap-1">
                  {product.featured && (
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {product.inStock ? (
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
                      <Clock className="h-3 w-3 mr-1" />
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-slate-400">{product.description}</p>
            </div>

            <Separator className="bg-slate-700" />

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-200">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">CAS Number:</span>
                  <span className="text-slate-300 ml-2 font-mono">{product.casNumber}</span>
                </div>
                {product.grade && (
                  <div>
                    <span className="text-slate-500">Grade:</span>
                    <span className="text-slate-300 ml-2">{product.grade}</span>
                  </div>
                )}
                {product.purity && (
                  <div>
                    <span className="text-slate-500">Purity:</span>
                    <span className="text-slate-300 ml-2">{product.purity}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500">Category:</span>
                  <span className="text-slate-300 ml-2 capitalize">
                    {product.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Packaging Sizes */}
            {product.packagingSizes && product.packagingSizes.length > 0 && (
              <>
                <Separator className="bg-slate-700" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-3">Available Sizes</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.packagingSizes.map((size) => (
                      <div
                        key={size.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700"
                      >
                        <div>
                          <span className="text-slate-300 font-medium">
                            {size.size} {size.unit}
                          </span>
                          <div className="text-xs text-slate-500">SKU: {size.sku}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <>
                <Separator className="bg-slate-700" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-3">Applications</h3>
                  <ul className="space-y-1">
                    {product.applications.map((app, index) => (
                      <li key={index} className="text-sm text-slate-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Actions */}
            <Separator className="bg-slate-700" />
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
                onClick={() => {
                  onClose()
                  window.location.href = `/products/${product.category}/${product.id}`
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Full Details
              </Button>
              <Button
                variant="default"
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => {
                  onClose()
                  window.location.href = `/quote-request?product=${product.id}`
                }}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Request Quote
              </Button>
            </div>

            {/* MSDS Link */}
            <div className="text-center">
              <Link
                href={product.msdsUrl}
                className="inline-flex items-center text-sm text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                <FileText className="h-4 w-4 mr-1" />
                View Safety Data Sheet (SDS)
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
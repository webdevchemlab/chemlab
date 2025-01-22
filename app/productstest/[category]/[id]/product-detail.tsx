"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/ui/particles"
import type { Product } from "@/data/products"

interface ProductDetailProps {
  product: Product | undefined
}

export default function ProductDetail({ product }: ProductDetailProps) {
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-slate-100">Product not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-slate-950 py-12 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={100}
        color="#60A5FA"
        size={0.5}
      />

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Product Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/0 z-10" />
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = product.fallbackImage
              }}
            />
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                {product.brand}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-100 mb-2">{product.name}</h1>
              <p className="text-lg text-slate-400">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
              <h2 className="text-xl font-semibold text-slate-100 mb-4">Specifications</h2>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-slate-400 capitalize">{key}:</span>
                    <span className="text-slate-200">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Quote Form */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
              <h2 className="text-xl font-semibold text-slate-100 mb-4">Request a Quote</h2>
              <p className="text-slate-400 mb-4">
                Interested in this product? Fill out our quote request form and our team will get back to you with pricing and availability information.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => window.location.href = `/quote-request?product=${product.id}`}
              >
                Request Quote
              </Button>
            </div>

            {/* Additional Information */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
              <h2 className="text-xl font-semibold text-slate-100 mb-4">Additional Information</h2>
              <div className="space-y-2">
                <div className="flex items-center text-slate-400">
                  <span className="w-32">Category:</span>
                  <span className="text-slate-200 capitalize">{product.category.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <span className="w-32">Brand:</span>
                  <span className="text-slate-200">{product.brand}</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <span className="w-32">Product ID:</span>
                  <span className="text-slate-200">{product.id}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
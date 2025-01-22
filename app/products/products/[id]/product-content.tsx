"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, AlertTriangle, CheckCircle } from "lucide-react"
import { featuredProducts } from "@/data/products"
import Link from "next/link"
import Image from "next/image"

export default function ProductContent({ productId }: { productId: string }) {
  const product = featuredProducts.find(p => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-slate-100">Product not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/products">
          <Button variant="ghost" className="mb-8 text-slate-400 hover:text-slate-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-lg overflow-hidden bg-slate-900/50"
          >
            {/* Placeholder for product image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-slate-700">{product.name[0]}</div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-100 mb-4">{product.name}</h1>
            <div className="text-lg text-cyan-500 mb-6">{product.brand}</div>
            
            {/* Product Description */}
            <div className="prose prose-invert mb-8">
              <p className="text-slate-400">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-100 mb-4">Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-slate-400 capitalize">{key}:</span>
                    <span className="text-slate-100">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Information */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-100 mb-4">Safety Information</h2>
              <div className="space-y-4">
                {product.safetyInfo?.hazards && (
                  <div className="flex items-start space-x-2 text-amber-500">
                    <AlertTriangle className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="font-medium">Hazards</div>
                      <p className="text-slate-400">{product.safetyInfo.hazards}</p>
                    </div>
                  </div>
                )}
                {product.safetyInfo?.precautions && (
                  <div className="flex items-start space-x-2 text-emerald-500">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="font-medium">Precautions</div>
                      <p className="text-slate-400">{product.safetyInfo.precautions}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => window.location.href = `/quote-request?product=${product.id}`}
              >
                Request Quote
              </Button>
              <Button variant="outline" className="flex-1 text-slate-400 border-slate-700">
                <Download className="h-4 w-4 mr-2" />
                Download SDS
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

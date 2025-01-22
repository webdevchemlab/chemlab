"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronDown, ArrowLeft } from "lucide-react"
import { brands } from "@/data/brands"
import { featuredProducts } from "@/data/products"
import { categories } from "@/data/categories"
import Link from "next/link"
import Image from "next/image"

export default function BrandContent({ brandId }: { brandId: string }) {
  const brand = brands.find(b => b.id === brandId)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  
  // Filter products by brand
  const brandProducts = featuredProducts.filter(product => 
    product.brand.toLowerCase() === brand?.name.toLowerCase() &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  )

  // Filter products by search query
  const filteredProducts = brandProducts.filter(product =>
    searchQuery === "" ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.specifications.casNumber?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (!brand) {
    return (
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-slate-100">Brand not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/productstest">
          <Button variant="ghost" className="mb-8 text-slate-400 hover:text-slate-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        {/* Brand Hero Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand Logo/Name */}
          <div className="mb-6">
            <div className="h-24 w-48 mx-auto relative bg-slate-800/50 rounded">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-100 mb-4">{brand.name} Products</h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-6">
            {brand.description}
          </p>

          {/* Certifications */}
          {brand.certifications && brand.certifications.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {brand.certifications.map(cert => (
                <span
                  key={cert}
                  className="px-4 py-2 rounded-full bg-slate-900/50 text-slate-300 border border-slate-700"
                >
                  {cert}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
            />
          </div>
          <Button variant="outline" className="text-slate-400 border-slate-700">
            <Filter className="h-4 w-4 mr-2" />
            Sort
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-slate-300 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {brand.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategories(prev =>
                  prev.includes(category.id)
                    ? prev.filter(id => id !== category.id)
                    : [...prev, category.id]
                )}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  selectedCategories.includes(category.id)
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-900/50 text-slate-400 hover:text-slate-300'
                }`}
              >
                {category.name}
                {category.productCount > 0 && (
                  <span className="ml-2 text-xs opacity-70">({category.productCount})</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 border border-slate-800/50 hover:border-cyan-500/50"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <div className="text-sm text-cyan-500 mb-2">{product.brand}</div>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="space-y-2">
                {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 capitalize">{key}:</span>
                    <span className="text-slate-300">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <Button
                  variant="outline"
                  className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
                  onClick={() => window.location.href = `/productstest/products/${product.id}`}
                >
                  View Details
                </Button>
                <Button
                  variant="default"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  onClick={() => window.location.href = `/quote-request?product=${product.id}`}
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-slate-300 mb-2">No products found</h3>
            <p className="text-slate-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

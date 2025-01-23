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
import type { Product } from "@/types/product"

export default function BrandContent({ brandId }: { brandId: string }) {
  const brand = brands.find(b => b.id === brandId)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  
  // Filter products by manufacturer
  const brandProducts = featuredProducts.filter(product => 
    product.manufacturer.toLowerCase() === brand?.name.toLowerCase() &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  )

  // Filter products by search query
  const filteredProducts = brandProducts.filter(product =>
    searchQuery === "" ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.casNumber.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

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
        <Link href="/products">
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-900/50 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-slate-100 mb-6">Filters</h2>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-slate-300 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label
                      key={category.id}
                      className="flex items-center space-x-2 text-sm text-slate-400 hover:text-slate-300 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span>{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full text-slate-400 border-slate-700"
                onClick={() => {
                  setSelectedCategories([])
                }}
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Search and Sort */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search within manufacturer..."
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
                    <div className="text-sm text-cyan-500 mb-2">{product.manufacturer}</div>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">CAS Number:</span>
                      <span className="text-slate-300">{product.casNumber}</span>
                    </div>
                    {product.grade && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Grade:</span>
                        <span className="text-slate-300">{product.grade}</span>
                      </div>
                    )}
                    {product.purity && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Purity:</span>
                        <span className="text-slate-300">{product.purity}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <Button
                      variant="outline"
                      className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
                      onClick={() => window.location.href = `/products/${product.category}/${product.id}`}
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
          </div>
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

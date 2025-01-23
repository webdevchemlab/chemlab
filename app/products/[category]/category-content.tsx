"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronDown } from "lucide-react"
import { categories } from "@/data/categories"
import type { Product } from "@/types/product"
import { featuredProducts } from "@/data/products"
import { brands } from "@/data/brands"

export default function CategoryContent({ categoryId }: { categoryId: string }) {
  const category = categories.find(cat => cat.id === categoryId)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  
  // Filter products by category
  const categoryProducts = featuredProducts.filter(product => 
    product.category === categoryId &&
    (selectedSubcategories.length === 0 || (product.subCategory && selectedSubcategories.includes(product.subCategory))) &&
    (selectedBrands.length === 0 || selectedBrands.includes(product.manufacturer))
  )

  // Filter products by search query
  const filteredProducts = categoryProducts.filter(product =>
    searchQuery === "" ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.casNumber.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(sc => sc !== subcategory)
        : [...prev, subcategory]
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

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
        {/* Hero Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-slate-100 mb-4">{category.name}</h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            {category.description}
          </p>
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
              
              {/* Subcategories */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-slate-300 mb-4">Subcategories</h3>
                <div className="space-y-2">
                  {category.subcategories.map(subcategory => (
                    <label
                      key={subcategory.id}
                      className="flex items-center space-x-2 text-sm text-slate-400 hover:text-slate-300 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSubcategories.includes(subcategory.id)}
                        onChange={() => toggleSubcategory(subcategory.id)}
                        className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span>{subcategory.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Manufacturers */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-slate-300 mb-4">Manufacturers</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label
                      key={brand.id}
                      className="flex items-center space-x-2 text-sm text-slate-400 hover:text-slate-300 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.id)}
                        onChange={() => toggleBrand(brand.id)}
                        className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span>{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full text-slate-400 border-slate-700"
                onClick={() => {
                  setSelectedSubcategories([])
                  setSelectedBrands([])
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
                  placeholder="Search within category..."
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
      </div>
    </div>
  )
}

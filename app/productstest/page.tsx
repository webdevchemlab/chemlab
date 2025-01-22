"use client"

import { Particles } from "@/components/ui/particles"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Product, featuredProducts, searchProducts } from "@/data/products"
import { brands } from "@/data/brands"
import { categories } from "@/data/categories"

export default function ProductsTestPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>(featuredProducts)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.trim() === "") {
      setSearchResults(featuredProducts)
    } else {
      setSearchResults(searchProducts(query))
    }
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
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 mb-6">
            Explore Our Extensive Range of Laboratory Products
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto mb-8">
            Discover high-quality chemicals, reagents, and laboratory supplies from leading manufacturers. Our comprehensive catalog features products from trusted brands like SRL, Merck, and Sigma-Aldrich.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input 
                type="text"
                placeholder="Search by product name, CAS number, or category..."
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:ring-cyan-500 focus:border-cyan-500"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            {/* Search Results Count */}
            {searchQuery && (
              <div className="absolute mt-2 text-sm text-slate-400">
                Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{searchQuery}"
              </div>
            )}
          </div>
        </motion.div>

        {/* Browse by Brand Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Our Trusted Brands</h2>
            <p className="text-slate-400">Explore products from world-renowned manufacturers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/productstest/brands/${brand.id}`}>
                  <div className="group relative overflow-hidden rounded-lg bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 border border-slate-800/50 hover:border-cyan-500/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-32 relative bg-slate-800/50 rounded">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                      {brand.description}
                    </p>
                    <div className="space-y-2">
                      {brand.categories.slice(0, 3).map(category => (
                        <div key={category.id} className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">{category.name}</span>
                          <span className="text-slate-500">{category.productCount}+ products</span>
                        </div>
                      ))}
                    </div>
                    {brand.certifications && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {brand.certifications.slice(0, 2).map(cert => (
                          <span key={cert} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-800 text-slate-300">
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Browse by Category Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-slate-100 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/productstest/${category.id}`}>
                  <div className="group relative overflow-hidden rounded-lg bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 border border-slate-800/50 hover:border-cyan-500/50">
                    <div className="flex items-center justify-between mb-4">
                      <category.icon className="h-8 w-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                      <span className="text-xs text-slate-400">{category.subcategories.length} subcategories</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-1">
                      {category.subcategories.slice(0, 3).map((subcat) => (
                        <div key={subcat.id} className="text-sm text-slate-500">
                          {subcat.name}
                        </div>
                      ))}
                      {category.subcategories.length > 3 && (
                        <div className="text-sm text-cyan-500">
                          +{category.subcategories.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        {searchQuery === "" && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-slate-100 mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
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
          </motion.section>
        )}

        {/* Search Results */}
        {searchQuery !== "" && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((product, index) => (
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
          </motion.section>
        )}
      </div>
    </div>
  )
}
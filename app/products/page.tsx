"use client"

import { Particles } from "@/components/ui/particles"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { Product } from "@/types/product"
import { featuredProducts, searchProducts } from "@/data/products"
import { brands } from "@/data/brands"
import { categories } from "@/data/categories"
import { LampContainer } from "@/components/ui/lamp"
import { GradientText } from "@/components/ui/gradient-text"

export default function ProductsPage() {
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

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group relative overflow-hidden rounded-lg bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 border border-slate-800/50 hover:border-cyan-500/50">
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
    </div>
  )

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Hero Section with Lamp Effect */}
      <section className="relative bg-slate-950 overflow-hidden pt-20 pb-16">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-center text-4xl font-bold tracking-tight md:text-6xl mb-4 font-manrope px-6 py-3"
              showBorder
              animationSpeed={6}
            >
              Our Product Catalog
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              Discover high-quality chemicals, reagents, and laboratory supplies from leading manufacturers. 
              Our comprehensive catalog features products from trusted brands like SRL, Merck, and Sigma-Aldrich.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <Input
                type="text"
                placeholder="Search products by name, category, or brand..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 w-full"
              />
            </div>
          </motion.div>
        </LampContainer>
      </section>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />

        {/* Categories Section */}
        <section className="relative mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-2xl font-bold mb-6"
              animationSpeed={8}
            >
              Browse by Category
            </GradientText>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${category.id}`}>
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
        </section>

        {/* Featured Products Section */}
        {searchQuery === "" && (
          <section className="relative mb-16">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GradientText
                colors={["#60A5FA", "#34D399", "#60A5FA"]}
                className="text-2xl font-bold mb-6"
                animationSpeed={8}
              >
                Featured Products
              </GradientText>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Search Results */}
        {searchQuery !== "" && (
          <section className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Brands Section */}
        <section className="relative mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-2xl font-bold mb-6"
              animationSpeed={8}
            >
              Our Partner Brands
            </GradientText>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/brands/${brand.id}`}>
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
        </section>
      </div>
    </div>
  )
}
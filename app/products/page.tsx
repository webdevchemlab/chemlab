"use client"

import { useState, useMemo } from "react"
import { Particles } from "@/components/ui/particles"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown, 
  ChevronUp,
  Eye,
  Heart,
  Star,
  Package,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { featuredProducts, searchProducts, products } from "@/data/products"
import { brands } from "@/data/brands"
import { categories } from "@/data/categories"
import { LampContainer } from "@/components/ui/lamp"
import { GradientText } from "@/components/ui/gradient-text"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ProductQuickView } from "@/components/products/product-quick-view"
import type { Product, ProductFilter, ProductSort } from "@/types/product"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<ProductFilter>({})
  const [sortBy, setSortBy] = useState<ProductSort>({ field: "name", direction: "asc" })
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([])
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  // Get all products (not just featured)
  const allProducts = useMemo(() => {
    let filtered = products

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery)
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category)
    }

    // Apply manufacturer filter
    if (filters.manufacturer) {
      filtered = filtered.filter(p => p.manufacturer === filters.manufacturer)
    }

    // Apply stock filter
    if (filters.inStock !== undefined) {
      filtered = filtered.filter(p => p.inStock === filters.inStock)
    }

    // Apply grade filter
    if (filters.grade) {
      filtered = filtered.filter(p => p.grade === filters.grade)
    }

    // Apply purity filter
    if (filters.purity) {
      filtered = filtered.filter(p => p.purity === filters.purity)
    }

    return filtered
  }, [searchQuery, filters])

  // Sort products
  const sortedProducts = useMemo(() => {
    return [...allProducts].sort((a, b) => {
      const aValue = a[sortBy.field]?.toLowerCase() || ""
      const bValue = b[sortBy.field]?.toLowerCase() || ""
      
      if (sortBy.direction === "asc") {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    })
  }, [allProducts, sortBy])

  // Get unique values for filters
  const manufacturers = useMemo(() => 
    Array.from(new Set(products.map(p => p.manufacturer))), []
  )
  const grades = useMemo(() => 
    Array.from(new Set(products.map(p => p.grade).filter(Boolean))), []
  )
  const purities = useMemo(() => 
    Array.from(new Set(products.map(p => p.purity).filter(Boolean))), []
  )

  const handleProductClick = (productId: string) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(id => id !== productId)
      return [productId, ...filtered.slice(0, 4)]
    })
  }

  const clearFilters = () => {
    setFilters({})
    setSearchQuery("")
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300 border border-slate-800/50 hover:border-cyan-500/50"
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-800/50">
            <Package className="h-16 w-16 text-slate-600" />
          </div>
        )}
        
        {/* Status Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
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

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-slate-800/80 hover:bg-slate-700/80">
            <Heart className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-8 w-8 p-0 bg-slate-800/80 hover:bg-slate-700/80"
            onClick={(e) => {
              e.stopPropagation()
              setQuickViewProduct(product)
              setIsQuickViewOpen(true)
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="text-sm text-cyan-500 mb-2">{product.manufacturer}</div>
          <p className="text-sm text-slate-400 mb-3 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">CAS:</span>
            <span className="text-slate-300 font-mono">{product.casNumber}</span>
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

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
            onClick={() => {
              handleProductClick(product.id)
              window.location.href = `/products/${product.category}/${product.id}`
            }}
          >
            View Details
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
            onClick={() => window.location.href = `/quote-request?product=${product.id}`}
          >
            Request Quote
          </Button>
        </div>
      </CardContent>
    </motion.div>
  )

  const ProductListItem = ({ product }: { product: Product }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="group relative overflow-hidden rounded-lg bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 border border-slate-800/50 hover:border-cyan-500/50"
    >
      <div className="flex gap-6">
        {/* Product Image */}
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain p-2"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-slate-800/50">
              <Package className="h-8 w-8 text-slate-600" />
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h3>
              <div className="text-sm text-cyan-500">{product.manufacturer}</div>
            </div>
            <div className="flex gap-1">
              {product.featured && (
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
              {product.inStock ? (
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  In Stock
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                  <Clock className="h-3 w-3 mr-1" />
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>
          
          <p className="text-sm text-slate-400 mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="grid grid-cols-3 gap-4 text-sm mb-4">
            <div>
              <span className="text-slate-500">CAS:</span>
              <span className="text-slate-300 ml-1 font-mono">{product.casNumber}</span>
            </div>
            {product.grade && (
              <div>
                <span className="text-slate-500">Grade:</span>
                <span className="text-slate-300 ml-1">{product.grade}</span>
              </div>
            )}
            {product.purity && (
              <div>
                <span className="text-slate-500">Purity:</span>
                <span className="text-slate-300 ml-1">{product.purity}</span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
              onClick={() => {
                handleProductClick(product.id)
                window.location.href = `/products/${product.category}/${product.id}`
              }}
            >
              View Details
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => window.location.href = `/quote-request?product=${product.id}`}
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Hero Section */}
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
                placeholder="Search products by name, CAS number, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 w-full"
              />
            </div>
          </motion.div>
        </LampContainer>
      </section>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />

        {/* Controls Bar */}
        <div className="relative mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <Breadcrumb 
              items={[
                { label: "Products", href: "/products" }
              ]} 
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
              {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            
            <Select value={`${sortBy.field}-${sortBy.direction}`} onValueChange={(value) => {
              const [field, direction] = value.split('-') as ["name" | "manufacturer" | "casNumber", "asc" | "desc"]
              setSortBy({ field, direction })
            }}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name A-Z</SelectItem>
                <SelectItem value="name-desc">Name Z-A</SelectItem>
                <SelectItem value="manufacturer-asc">Manufacturer A-Z</SelectItem>
                <SelectItem value="manufacturer-desc">Manufacturer Z-A</SelectItem>
                <SelectItem value="casNumber-asc">CAS Number A-Z</SelectItem>
                <SelectItem value="casNumber-desc">CAS Number Z-A</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden"
            >
              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-100">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Category</label>
                      <Select value={filters.category || ""} onValueChange={(value) => 
                        setFilters(prev => ({ ...prev, category: value as any || undefined }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Categories</SelectItem>
                          {categories.map(cat => (
                            <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Manufacturer Filter */}
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Manufacturer</label>
                      <Select value={filters.manufacturer || ""} onValueChange={(value) => 
                        setFilters(prev => ({ ...prev, manufacturer: value || undefined }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="All Manufacturers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Manufacturers</SelectItem>
                          {manufacturers.map(man => (
                            <SelectItem key={man} value={man}>{man}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Grade Filter */}
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Grade</label>
                      <Select value={filters.grade || ""} onValueChange={(value) => 
                        setFilters(prev => ({ ...prev, grade: value || undefined }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="All Grades" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Grades</SelectItem>
                          {grades.map(grade => (
                            <SelectItem key={grade} value={grade || ""}>{grade}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Stock Filter */}
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Availability</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="inStock"
                            checked={filters.inStock === true}
                            onCheckedChange={(checked) => 
                              setFilters(prev => ({ ...prev, inStock: checked ? true : undefined }))
                            }
                          />
                          <label htmlFor="inStock" className="text-sm text-slate-300">In Stock</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="outOfStock"
                            checked={filters.inStock === false}
                            onCheckedChange={(checked) => 
                              setFilters(prev => ({ ...prev, inStock: checked ? false : undefined }))
                            }
                          />
                          <label htmlFor="outOfStock" className="text-sm text-slate-300">Out of Stock</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-400">
            Showing {sortedProducts.length} of {products.length} products
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid/List */}
        {sortedProducts.length > 0 ? (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {sortedProducts.map((product) => (
              viewMode === "grid" ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <ProductListItem key={product.id} product={product} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300 mb-2">No products found</h3>
            <p className="text-slate-400 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Recently Viewed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recentlyViewed.slice(0, 4).map(productId => {
                const product = products.find(p => p.id === productId)
                return product ? <ProductCard key={product.id} product={product} /> : null
              })}
            </div>
          </section>
        )}

        {/* Categories Section */}
        <section className="mt-16">
          <GradientText
            colors={["#F472B6", "#9333EA", "#F472B6"]}
            className="text-2xl font-bold mb-6"
            animationSpeed={8}
          >
            Browse by Category
          </GradientText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Brands Section */}
        <section className="mt-16">
          <GradientText
            colors={["#60A5FA", "#34D399", "#60A5FA"]}
            className="text-2xl font-bold mb-6"
            animationSpeed={8}
          >
            Our Partner Brands
          </GradientText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/brands/${brand.id}`}>
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
                      <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
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

        {/* Quick View Modal */}
        <ProductQuickView
          product={quickViewProduct}
          isOpen={isQuickViewOpen}
          onClose={() => {
            setIsQuickViewOpen(false)
            setQuickViewProduct(null)
          }}
        />
      </div>
    </div>
  )
}
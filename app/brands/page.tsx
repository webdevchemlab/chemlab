"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  Star,
  Award,
  Building2,
  Globe,
  Package,
  AlertCircle
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { brands } from "@/data/brands"
import { products } from "@/data/products"
import { categories } from "@/data/categories"
import { Particles } from "@/components/ui/particles"
import { LampContainer } from "@/components/ui/lamp"
import { GradientText } from "@/components/ui/gradient-text"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { CardSpotlight } from "@/components/ui/card-spotlight"

interface BrandFilter {
  featured?: boolean
  search?: string
  category?: string
  hasCertifications?: boolean
}

export default function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<BrandFilter>({})

  // Get brands with product counts from actual data
  const brandsWithProducts = useMemo(() => {
    return brands.map(brand => {
      const brandProducts = products.filter(product => 
        product.manufacturer.toLowerCase() === brand.name.toLowerCase()
      )
      return {
        ...brand,
        actualProductCount: brandProducts.length,
        productCategories: brandProducts.reduce((acc, product) => {
          const category = categories.find(cat => cat.id === product.category)
          if (category && !acc.find(c => c.id === category.id)) {
            acc.push({
              id: category.id,
              name: category.name,
              productCount: brandProducts.filter(p => p.category === category.id).length
            })
          }
          return acc
        }, [] as { id: string; name: string; productCount: number }[])
      }
    })
  }, [])

  // Filter brands
  const filteredBrands = useMemo(() => {
    let filtered = brandsWithProducts

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.specialties?.some(specialty => 
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }

    // Apply featured filter
    if (filters.featured) {
      filtered = filtered.filter(brand => brand.featured)
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(brand =>
        brand.productCategories.some(cat => cat.id === filters.category)
      )
    }

    // Apply certifications filter
    if (filters.hasCertifications) {
      filtered = filtered.filter(brand => brand.certifications && brand.certifications.length > 0)
    }

    return filtered
  }, [brandsWithProducts, searchQuery, filters])

  const clearFilters = () => {
    setFilters({})
    setSearchQuery("")
  }

  const BrandCard = ({ brand }: { brand: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 hover:from-slate-900/80 hover:to-slate-800/80 transition-all duration-500 border border-slate-800/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
      
      <CardSpotlight className="h-full relative z-10">
        <Link href={`/brands/${brand.id}`} className="block p-6">
          {/* Brand Logo Container */}
          <div className="relative h-32 w-full mb-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-4 flex items-center justify-center transition-all duration-500 group-hover:from-white/20 group-hover:to-white/10 group-hover:scale-105 group-hover:shadow-lg">
            {/* Logo Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="relative w-full h-full">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain p-2 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          </div>

          {/* Brand Info */}
          <div className="mb-4 relative">
            <div className="flex items-center justify-between mb-2">
              <motion.h3 
                className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {brand.name}
              </motion.h3>
              {brand.featured && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30 shadow-lg">
                    <Star className="h-3 w-3 mr-1 animate-pulse" />
                    Featured
                  </Badge>
                </motion.div>
              )}
            </div>
            <p className="text-slate-400 mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">{brand.description}</p>
          </div>

          {/* Product Categories */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-300 mb-2 group-hover:text-cyan-300 transition-colors duration-300">Product Categories</h4>
            <div className="flex flex-wrap gap-1">
              {brand.productCategories.slice(0, 3).map((category: any, index: number) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge variant="outline" className="text-xs bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 cursor-pointer">
                    {category.name} ({category.productCount})
                  </Badge>
                </motion.div>
              ))}
              {brand.productCategories.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge variant="outline" className="text-xs bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 cursor-pointer">
                    +{brand.productCategories.length - 3} more
                  </Badge>
                </motion.div>
              )}
            </div>
          </div>

          {/* Certifications */}
          {brand.certifications && brand.certifications.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-300 mb-2 group-hover:text-green-300 transition-colors duration-300">Certifications</h4>
              <div className="flex flex-wrap gap-1">
                {brand.certifications.slice(0, 2).map((cert: string, index: number) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 2 }}
                  >
                    <Badge variant="outline" className="text-xs bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                      {cert}
                    </Badge>
                  </motion.div>
                ))}
                {brand.certifications.length > 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05, x: 2 }}
                  >
                    <Badge variant="outline" className="text-xs bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                      +{brand.certifications.length - 2} more
                    </Badge>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {/* Stats and Action Button */}
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <span className="font-medium text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">{brand.actualProductCount}</span> Products
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
              >
                <span className="mr-1">View Products</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Hover Border Animation */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-xl transition-all duration-500 pointer-events-none" />
        </Link>
      </CardSpotlight>
    </motion.div>
  )

  const BrandListItem = ({ brand }: { brand: any }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ 
        x: 5,
        scale: 1.01,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/50 p-6 hover:from-slate-900/80 hover:to-slate-800/80 transition-all duration-500 border border-slate-800/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
      
      <div className="flex gap-6 relative z-10">
        {/* Brand Logo */}
        <motion.div 
          className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          {/* Logo Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            className="object-contain p-2 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        </motion.div>

        {/* Brand Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <motion.h3 
                className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {brand.name}
              </motion.h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{brand.description}</p>
            </div>
            <div className="flex gap-1">
              {brand.featured && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30 shadow-lg">
                    <Star className="h-3 w-3 mr-1 animate-pulse" />
                    Featured
                  </Badge>
                </motion.div>
              )}
            </div>
          </div>

          {/* Product Categories */}
          <div className="mb-3">
            <h4 className="text-sm font-medium text-slate-300 mb-2 group-hover:text-cyan-300 transition-colors duration-300">Product Categories</h4>
            <div className="flex flex-wrap gap-1">
              {brand.productCategories.slice(0, 4).map((category: any, index: number) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge variant="outline" className="text-xs bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 cursor-pointer">
                    {category.name} ({category.productCount})
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {brand.certifications && brand.certifications.length > 0 && (
            <div className="mb-3">
              <h4 className="text-sm font-medium text-slate-300 mb-2 group-hover:text-green-300 transition-colors duration-300">Certifications</h4>
              <div className="flex flex-wrap gap-1">
                {brand.certifications.slice(0, 3).map((cert: string, index: number) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 2 }}
                  >
                    <Badge variant="outline" className="text-xs bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                      {cert}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <motion.div 
              className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <span className="font-medium text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">{brand.actualProductCount}</span> Products Available
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
              >
                <span className="mr-1">View Products</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hover Border Animation */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-xl transition-all duration-500 pointer-events-none" />
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
              Our Partner Brands
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              We partner with leading manufacturers to bring you the highest quality laboratory chemicals, 
              reagents, and equipment. Each brand is carefully selected to ensure excellence and reliability.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <Input
                type="text"
                placeholder="Search brands by name, description, or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 w-full hover:bg-slate-800/70 hover:border-slate-600 focus:bg-slate-800/80 focus:border-cyan-500/50 transition-all duration-300 group"
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
                { label: "Brands", href: "/brands" }
              ]} 
            />
          </div>
          
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300"
              >
                <Filter className="h-4 w-4" />
                Filters
                {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </motion.div>

            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" 
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20" 
                    : "hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300"
                  }
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" 
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20" 
                    : "hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300"
                  }
                >
                  <List className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-8 overflow-hidden"
            >
              <Card className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-slate-700/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-100">Filters</h3>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="sm" onClick={clearFilters} className="hover:bg-red-500/10 hover:text-red-400 transition-all duration-300">
                        Clear All
                      </Button>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Category</label>
                      <Select value={filters.category || ""} onValueChange={(value) => 
                        setFilters(prev => ({ ...prev, category: value || undefined }))
                      }>
                        <SelectTrigger className="hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300">
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

                    {/* Featured Filter */}
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Status</label>
                      <div className="space-y-2">
                        <motion.div 
                          className="flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Checkbox
                            id="featured"
                            checked={filters.featured === true}
                            onCheckedChange={(checked) => 
                              setFilters(prev => ({ ...prev, featured: checked ? true : undefined }))
                            }
                            className="hover:scale-110 transition-transform duration-200"
                          />
                          <label htmlFor="featured" className="text-sm text-slate-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Featured Brands</label>
                        </motion.div>
                      </div>
                    </div>

                    {/* Certifications Filter */}
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Certifications</label>
                      <div className="space-y-2">
                        <motion.div 
                          className="flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Checkbox
                            id="certifications"
                            checked={filters.hasCertifications === true}
                            onCheckedChange={(checked) => 
                              setFilters(prev => ({ ...prev, hasCertifications: checked ? true : undefined }))
                            }
                            className="hover:scale-110 transition-transform duration-200"
                          />
                          <label htmlFor="certifications" className="text-sm text-slate-300 hover:text-green-300 transition-colors duration-300 cursor-pointer">Certified Brands</label>
                        </motion.div>
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
            Showing {filteredBrands.length} of {brandsWithProducts.length} brands
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Brands Grid/List */}
        {filteredBrands.length > 0 ? (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
          }>
            {filteredBrands.map((brand) => (
              viewMode === "grid" ? (
                <BrandCard key={brand.id} brand={brand} />
              ) : (
                <BrandListItem key={brand.id} brand={brand} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300 mb-2">No brands found</h3>
            <p className="text-slate-400 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Stats Section */}
        <section className="mt-16">
          <GradientText
            colors={["#F472B6", "#9333EA", "#F472B6"]}
            className="text-2xl font-bold mb-6"
            animationSpeed={8}
          >
            Brand Statistics
          </GradientText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Building2 className="h-8 w-8 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">{brandsWithProducts.length}</p>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Partner Brands</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Package className="h-8 w-8 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-2xl font-bold text-slate-100 group-hover:text-green-300 transition-colors duration-300">
                        {brandsWithProducts.reduce((sum, brand) => sum + brand.actualProductCount, 0)}
                      </p>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Total Products</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Award className="h-8 w-8 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-2xl font-bold text-slate-100 group-hover:text-yellow-300 transition-colors duration-300">
                        {brandsWithProducts.filter(brand => brand.featured).length}
                      </p>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Featured Brands</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
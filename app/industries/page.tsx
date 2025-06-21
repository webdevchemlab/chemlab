"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown, 
  ChevronUp,
  Star,
  TrendingUp,
  Building2,
  Globe,
  Package,
  AlertCircle,
  ArrowRight,
  Users,
  Target
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { industries } from "@/data/industries"
import { Particles } from "@/components/ui/particles"
import { LampContainer } from "@/components/ui/lamp"
import { GradientText } from "@/components/ui/gradient-text"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { CardSpotlight } from "@/components/ui/card-spotlight"

interface IndustryFilter {
  featured?: boolean
  search?: string
  category?: string
  hasCertifications?: boolean
}

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<IndustryFilter>({})

  // Filter industries
  const filteredIndustries = useMemo(() => {
    let filtered = industries

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(industry =>
        industry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        industry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        industry.applications.some(app => 
          app.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        industry.specialties?.some(specialty => 
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }

    // Apply featured filter
    if (filters.featured) {
      filtered = filtered.filter(industry => industry.featured)
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(industry =>
        industry.categories.some(cat => cat.id === filters.category)
      )
    }

    // Apply certifications filter
    if (filters.hasCertifications) {
      filtered = filtered.filter(industry => industry.certifications && industry.certifications.length > 0)
    }

    return filtered
  }, [searchQuery, filters])

  const clearFilters = () => {
    setFilters({})
    setSearchQuery("")
  }

  // Get all unique categories across industries
  const allCategories = useMemo(() => {
    const categoryMap = new Map()
    industries.forEach(industry => {
      industry.categories.forEach(category => {
        if (!categoryMap.has(category.id)) {
          categoryMap.set(category.id, category)
        }
      })
    })
    return Array.from(categoryMap.values())
  }, [])

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
              Industries We Serve
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              Providing high-quality chemicals and laboratory supplies across diverse industries, 
              supporting research, education, and innovation worldwide.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <Input
                type="text"
                placeholder="Search industries by name, description, or applications..."
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
                { label: "Industries", href: "/industries" }
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-400">
            Showing {filteredIndustries.length} of {industries.length} industries
            {searchQuery && ` for "${searchQuery}"`}
          </p>
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
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Product Category</label>
                      <select 
                        value={filters.category || ""} 
                        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value || undefined }))}
                        className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-slate-200 hover:bg-slate-800/70 hover:border-slate-600 focus:bg-slate-800/80 focus:border-cyan-500/50 transition-all duration-300"
                      >
                        <option value="">All Categories</option>
                        {allCategories.map(cat => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </select>
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
                          <label htmlFor="featured" className="text-sm text-slate-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Featured Industries</label>
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
                          <label htmlFor="certifications" className="text-sm text-slate-300 hover:text-green-300 transition-colors duration-300 cursor-pointer">Certified Industries</label>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Industries Grid */}
        {filteredIndustries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <div className="p-6">
                    {/* Industry Icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <motion.div 
                        className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 text-cyan-500 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <industry.icon className="h-8 w-8 group-hover:text-cyan-400 transition-colors duration-300" />
                      </motion.div>
                      <div className="flex gap-1">
                        {industry.featured && (
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

                    {/* Industry Info */}
                    <div className="mb-4">
                      <motion.h3 
                        className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {industry.name}
                      </motion.h3>
                      <p className="text-slate-400 mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                        {industry.description}
                      </p>
                    </div>

                    {/* Market Stats */}
                    {(industry.marketSize || industry.growthRate) && (
                      <div className="mb-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                        <div className="flex justify-between text-sm">
                          {industry.marketSize && (
                            <div>
                              <span className="text-slate-500">Market Size:</span>
                              <span className="ml-1 font-medium text-green-400">{industry.marketSize}</span>
                            </div>
                          )}
                          {industry.growthRate && (
                            <div>
                              <span className="text-slate-500">Growth:</span>
                              <span className="ml-1 font-medium text-cyan-400">{industry.growthRate}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Product Categories */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-slate-300 mb-2 group-hover:text-cyan-300 transition-colors duration-300">Key Product Categories</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.categories.slice(0, 3).map((category: any, index: number) => (
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
                        {industry.categories.length > 3 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Badge variant="outline" className="text-xs bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 cursor-pointer">
                              +{industry.categories.length - 3} more
                            </Badge>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-slate-300 mb-2 group-hover:text-green-300 transition-colors duration-300">Applications</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.applications.slice(0, 3).map((app: string, index: number) => (
                          <motion.div
                            key={app}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, x: 2 }}
                          >
                            <Badge variant="outline" className="text-xs bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                              {app}
                            </Badge>
                          </motion.div>
                        ))}
                        {industry.applications.length > 3 && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.05, x: 2 }}
                          >
                            <Badge variant="outline" className="text-xs bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                              +{industry.applications.length - 3} more
                            </Badge>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                        asChild
                      >
                        <Link href={`/products?industry=${industry.id}`}>
                          <span className="mr-1">View Products</span>
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>

                    {/* Hover Border Animation */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-xl transition-all duration-500 pointer-events-none" />
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300 mb-2">No industries found</h3>
            <p className="text-slate-400 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Industry Statistics */}
        <section className="mt-16">
          <GradientText
            colors={["#F472B6", "#9333EA", "#F472B6"]}
            className="text-2xl font-bold mb-6"
            animationSpeed={8}
          >
            Industry Statistics
          </GradientText>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                      <p className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">{industries.length}</p>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Industries Served</p>
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
                        {industries.reduce((sum, industry) => sum + industry.categories.reduce((catSum, cat) => catSum + cat.productCount, 0), 0)}
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
                      <Star className="h-8 w-8 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-2xl font-bold text-slate-100 group-hover:text-yellow-300 transition-colors duration-300">
                        {industries.filter(industry => industry.featured).length}
                      </p>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Featured Industries</p>
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
              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Target className="h-8 w-8 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-2xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors duration-300">
                        {allCategories.length}
                      </p>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Product Categories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16">
          <Particles
            className="absolute inset-0"
            quantity={30}
            ease={70}
            color="#F472B6"
            size={0.3}
          />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Need Help Finding the Right Products?
            </GradientText>
            <p className="mt-4 text-lg text-slate-400">
              Our team of experts is here to help you find the perfect chemical products and 
              supplies for your specific industry needs.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
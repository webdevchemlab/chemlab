"use client"

import { Brand } from "@/data/brands"
import { Product } from "@/types/product"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Particles } from "@/components/ui/particles"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Star, Package, Award, Building2, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"

interface BrandDetailsProps {
  brand: Brand
  products: Product[]
}

export function BrandDetails({ brand, products }: BrandDetailsProps) {
  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as Record<string, Product[]>)

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={75}
        ease={70}
        color="#60A5FA"
        size={0.3}
      />
      <div className="container relative z-10 mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumb 
            items={[
              { label: "Brands", href: "/brands" },
              { label: brand.name }
            ]} 
          />
        </div>

        {/* Brand Header */}
        <Card className="mb-8 bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="relative h-20 w-20">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain brightness-125"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-2xl text-slate-100">{brand.name}</CardTitle>
                {brand.featured && (
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription className="mt-2 text-slate-400">{brand.description}</CardDescription>
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950" asChild>
              <a href={brand.logo} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Button>
          </CardHeader>
        </Card>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-slate-900/50 border-slate-800/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">Overview</TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">Products ({products.length})</TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-slate-100">Company Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-slate-400">Products Available</h4>
                      <p className="text-slate-200">{products.length}+ products</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-400">Categories</h4>
                      <p className="text-slate-200">{Object.keys(productsByCategory).length} categories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {brand.specialties && (
                <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                  <CardHeader>
                    <CardTitle className="text-slate-100">Specialties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {brand.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-300">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {brand.certifications && (
                <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                  <CardHeader>
                    <CardTitle className="text-slate-100">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {brand.certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="bg-green-500/20 border-green-500/30 text-green-400">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="products">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
              <CardHeader>
                <CardTitle className="text-slate-100">Available Products</CardTitle>
                <CardDescription className="text-slate-400">Browse our selection of {brand.name} products</CardDescription>
              </CardHeader>
              <CardContent>
                {products.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.slice(0, 6).map((product) => (
                      <Card key={product.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg text-slate-100">{product.name}</CardTitle>
                          <CardDescription className="text-slate-400">{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-500">CAS:</span>
                              <span className="text-slate-300 font-mono">{product.casNumber}</span>
                            </div>
                            {product.grade && (
                              <div className="flex justify-between">
                                <span className="text-slate-500">Grade:</span>
                                <span className="text-slate-300">{product.grade}</span>
                              </div>
                            )}
                            <div className="flex gap-2 mt-4">
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
                                asChild
                              >
                                <Link href={`/products/${product.category}/${product.id}`}>
                                  View Details
                                </Link>
                              </Button>
                              <Button
                                variant="default"
                                size="sm"
                                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                                asChild
                              >
                                <Link href={`/quote-request?product=${product.id}`}>
                                  Request Quote
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400">
                    No products available from {brand.name} at the moment.
                  </p>
                )}
                {products.length > 6 && (
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10">
                      View All {products.length} Products
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
              <CardHeader>
                <CardTitle className="text-slate-100">Product Categories</CardTitle>
                <CardDescription className="text-slate-400">Explore products by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(productsByCategory).map(([categoryId, categoryProducts]) => (
                    <Card key={categoryId} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg text-slate-100 capitalize">
                          {categoryId.replace('-', ' ')}
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                          {categoryProducts.length} products
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {categoryProducts.slice(0, 3).map((product) => (
                            <div key={product.id} className="text-sm text-slate-300">
                              • {product.name}
                            </div>
                          ))}
                          {categoryProducts.length > 3 && (
                            <div className="text-sm text-slate-500">
                              +{categoryProducts.length - 3} more products
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 
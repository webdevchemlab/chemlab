"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BeakerIcon } from "lucide-react"

interface Brand {
  id: string
  name: string
  description: string
  logo: string
  productCount: number
  founded: string
  headquarters: string
  website: string
  categories: string[]
  featuredProducts: {
    id: string
    name: string
    casNumber: string
    purity: string
    grade: string
  }[]
}

interface BrandDetailsProps {
  brand: Brand
}

export default function BrandDetails({ brand }: BrandDetailsProps) {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/3 h-40 relative">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">{brand.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{brand.description}</p>
            <div className="mt-6 flex gap-4">
              <Button>View All Products</Button>
              <Button variant="outline" onClick={() => window.open(brand.website, '_blank')}>
                Visit Website
              </Button>
            </div>
          </div>
        </div>

        {/* Brand Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Overview</CardTitle>
                <CardDescription>Learn more about {brand.name}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Founded</h3>
                    <p className="text-muted-foreground">{brand.founded}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">{brand.headquarters}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Product Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {brand.categories.map((category) => (
                        <span
                          key={category}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Available Products</h3>
                    <p className="text-muted-foreground">{brand.productCount}+ Products</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Products</CardTitle>
                <CardDescription>Popular products from {brand.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {brand.featuredProducts.map((product) => (
                    <Card key={product.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BeakerIcon className="h-5 w-5 text-blue-500" />
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">CAS Number:</span>
                            <span>{product.casNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Purity:</span>
                            <span>{product.purity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Grade:</span>
                            <span>{product.grade}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Categories</CardTitle>
                <CardDescription>Browse products by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {brand.categories.map((category) => (
                    <Card key={category}>
                      <CardHeader>
                        <CardTitle>{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">Browse Products</Button>
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
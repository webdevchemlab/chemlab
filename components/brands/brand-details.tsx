"use client"

import { Brand } from "@/app/brands/[slug]/page"
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

interface BrandDetailsProps {
  brand: Brand
}

export function BrandDetails({ brand }: BrandDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="relative h-20 w-20">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-2xl">{brand.name}</CardTitle>
            <CardDescription className="mt-2">{brand.description}</CardDescription>
          </div>
          <Button className="ml-auto" asChild>
            <a href={brand.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </Button>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-muted-foreground">Founded</h4>
                  <p>{brand.founded}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground">Headquarters</h4>
                  <p>{brand.headquarters}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground">Product Count</h4>
                  <p>{brand.productCount}+ products</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Featured Products</CardTitle>
              <CardDescription>Browse our selection of {brand.name} products</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Coming soon: Featured products from {brand.name}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle>Product Categories</CardTitle>
              <CardDescription>Explore products by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {brand.categories.map((category) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 
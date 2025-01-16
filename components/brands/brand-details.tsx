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
import { Particles } from "@/components/ui/particles"

interface BrandDetailsProps {
  brand: Brand
}

export function BrandDetails({ brand }: BrandDetailsProps) {
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
            <div>
              <CardTitle className="text-2xl text-slate-100">{brand.name}</CardTitle>
              <CardDescription className="mt-2 text-slate-400">{brand.description}</CardDescription>
            </div>
            <Button className="ml-auto bg-cyan-500 hover:bg-cyan-600 text-slate-950" asChild>
              <a href={brand.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Button>
          </CardHeader>
        </Card>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-slate-900/50 border-slate-800/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">Overview</TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">Products</TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
              <CardHeader>
                <CardTitle className="text-slate-100">Company Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-slate-400">Founded</h4>
                    <p className="text-slate-200">{brand.founded}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-400">Headquarters</h4>
                    <p className="text-slate-200">{brand.headquarters}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-400">Product Count</h4>
                    <p className="text-slate-200">{brand.productCount}+ products</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
              <CardHeader>
                <CardTitle className="text-slate-100">Featured Products</CardTitle>
                <CardDescription className="text-slate-400">Browse our selection of {brand.name} products</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Coming soon: Featured products from {brand.name}
                </p>
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
                  {brand.categories.map((category) => (
                    <Card key={category} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg text-slate-100">{category}</CardTitle>
                      </CardHeader>
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
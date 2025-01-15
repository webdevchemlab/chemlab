"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Mock data - replace with actual data from your backend
const brands = [
  {
    id: "merck",
    name: "Merck",
    description: "Global leader in life science, offering high-quality chemicals and laboratory products.",
    logo: "/brands/merck.svg",
    productCount: 1200,
  },
  {
    id: "sigma-aldrich",
    name: "Sigma Aldrich",
    description: "Premier supplier of research chemicals, biochemicals, and lab equipment.",
    logo: "/brands/sigma-aldrich.svg",
    productCount: 1500,
  },
  {
    id: "srl",
    name: "SRL",
    description: "Leading manufacturer of laboratory chemicals and analytical reagents.",
    logo: "/brands/srl.svg",
    productCount: 800,
  },
  {
    id: "honeywell",
    name: "Honeywell",
    description: "Trusted provider of research chemicals and high-purity solvents.",
    logo: "/brands/honeywell.svg",
    productCount: 600,
  },
  {
    id: "thermo-fisher",
    name: "Thermo Fisher",
    description: "Global provider of analytical instruments and laboratory supplies.",
    logo: "/brands/thermo-fisher.svg",
    productCount: 1000,
  },
  {
    id: "borosil",
    name: "Borosil",
    description: "Leading manufacturer of laboratory glassware and equipment.",
    logo: "/brands/borosil.svg",
    productCount: 400,
  },
]

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Our Partner Brands</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading manufacturers to provide you with the highest quality chemicals, laboratory equipment, and supplies.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/brands/${brand.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-20 relative mb-4">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <CardTitle>{brand.name}</CardTitle>
                    <CardDescription>{brand.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {brand.productCount}+ Products
                      </span>
                      <Button variant="ghost">View Products</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Particles } from "@/components/ui/particles"
import { GridBackground } from "@/components/ui/glowing-card"

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
    <div className="relative min-h-screen bg-slate-950 py-12 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={100}
        color="#60A5FA"
        size={0.5}
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 mb-6">Our Partner Brands</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
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
              <Link href={`/brands/${brand.id}`} className="block h-full">
                <GridBackground
                  title={brand.name}
                  description={brand.description}
                  showAvailability={false}
                  className="h-full group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="h-20 relative mb-4">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain brightness-125"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-800/50">
                    <span className="text-sm text-slate-400">
                      {brand.productCount}+ Products
                    </span>
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30">
                      View Products
                    </Button>
                  </div>
                </GridBackground>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
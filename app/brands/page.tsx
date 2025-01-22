"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Particles } from "@/components/ui/particles"
import { GridBackground } from "@/components/ui/glowing-card"
import { LampContainer } from "@/components/ui/lamp"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"

const brands = [
  {
    id: "merck",
    name: "Merck",
    description: "Global leader in life science, offering high-quality chemicals and laboratory products.",
    logo: "/brands/merck.svg",
    productCount: 1200,
    bgColor: "bg-white",
  },
  {
    id: "sigma-aldrich",
    name: "Sigma Aldrich",
    description: "Premier supplier of research chemicals, biochemicals, and lab equipment.",
    logo: "/brands/sigma-aldrich.svg",
    productCount: 1500,
    bgColor: "bg-blue-50",
  },
  {
    id: "srl",
    name: "SRL",
    description: "Leading manufacturer of laboratory chemicals and analytical reagents.",
    logo: "/brands/srl.svg",
    productCount: 800,
    bgColor: "bg-white",
  },
  {
    id: "honeywell",
    name: "Honeywell",
    description: "Trusted provider of research chemicals and high-purity solvents.",
    logo: "/brands/honeywell.svg",
    productCount: 600,
    bgColor: "bg-red-50",
  },
  {
    id: "thermo-fisher",
    name: "Thermo Fisher",
    description: "Global provider of analytical instruments and laboratory supplies.",
    logo: "/brands/thermo-fisher.svg",
    productCount: 1000,
    bgColor: "bg-blue-50",
  },
  {
    id: "borosil",
    name: "Borosil",
    description: "Leading manufacturer of laboratory glassware and equipment.",
    logo: "/brands/borosil.svg",
    productCount: 700,
    bgColor: "bg-white",
  },
]

export default function BrandsPage() {
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
              Our Partner Brands
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              We partner with leading manufacturers to bring you the highest quality laboratory chemicals, 
              reagents, and equipment. Each brand is carefully selected to ensure excellence and reliability.
            </p>
          </motion.div>
        </LampContainer>
      </section>

      {/* Brands Grid */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardSpotlight className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                  <Link href={`/brands/${brand.id}`} className="block p-6">
                    <div className={`relative h-24 w-full mb-6 rounded-lg ${brand.bgColor} p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
                      <div className="relative w-full h-full">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 6}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">{brand.name}</h3>
                    <p className="text-slate-400 mb-4 line-clamp-2">{brand.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {brand.productCount.toLocaleString()} Products
                      </span>
                      <Button
                        variant="outline"
                        className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10"
                      >
                        View Products
                      </Button>
                    </div>
                  </Link>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
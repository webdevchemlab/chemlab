"use client";

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BeakerIcon, TestTubes, ShieldCheck, Truck, Users, Scale, FlaskConical, Pipette, Microscope, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { ProductCategories } from "@/components/sections/product-categories"
import { CardSpotlight } from "@/components/ui/card-spotlight"

const features = [
  {
    title: "Quality Assured",
    description: "All products sourced directly from authorized manufacturers",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "Efficient logistics network for timely delivery",
    icon: Truck,
  },
  {
    title: "Expert Support",
    description: "Technical assistance from qualified professionals",
    icon: Users,
  },
]

const brands = [
  {
    name: "Sigma-Aldrich",
    logo: "/images/brands/sigma-aldrich.svg",
  },
  {
    name: "Merck",
    logo: "/images/brands/merck.svg",
  },
  {
    name: "SRL",
    logo: "/images/brands/srl.svg",
  },
  {
    name: "Honeywell",
    logo: "/images/brands/honeywell.svg",
  },
  {
    name: "Thermo Fisher",
    logo: "/images/brands/thermo-fisher.svg",
  },
  {
    name: "Borosil",
    logo: "/images/brands/borosil.svg",
  }
]

const testimonials = [
  {
    quote: "ChemLab Synthesis has been our go-to supplier for research chemicals. Their quality and service are unmatched.",
    author: "Dr. Sarah Chen",
    role: "Research Director",
    institution: "Advanced Materials Institute"
  },
  {
    quote: "Exceptional product quality and technical support. Their team's expertise has been invaluable to our research.",
    author: "Prof. Michael Rodriguez",
    role: "Principal Investigator",
    institution: "University Research Lab"
  },
  {
    quote: "Fast delivery and excellent documentation. They've streamlined our procurement process significantly.",
    author: "Dr. James Wilson",
    role: "Lab Manager",
    institution: "Pharmaceutical Research"
  }
]

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-slate-950 overflow-hidden">
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
            <h1 className="mt-8 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl mb-6">
              Your Trusted Partner for <br />Premium Laboratory Chemicals
            </h1>
            <p className="text-xl mb-8 text-slate-400 max-w-3xl mx-auto px-4">
              Authorized dealer for leading manufacturers. Serving research and educational institutions with high-quality chemicals and laboratory supplies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-slate-800">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </motion.div>
        </LampContainer>
      </section>

      {/* Featured Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Trusted by Leading Manufacturers</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We are authorized dealers for premium chemical and laboratory equipment manufacturers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand) => (
              <div 
                key={brand.name} 
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductCategories />

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Why Choose ChemLab Synthesis?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <CardSpotlight key={feature.title} className="bg-transparent">
                <div className="relative z-10">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-100">What Our Clients Say</h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Trusted by leading research institutions and laboratories worldwide
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <CardSpotlight key={testimonial.author} className="bg-transparent">
                <div className="relative z-10">
                  <div className="mb-4 text-blue-400">
                    <Quote className="w-8 h-8" />
                  </div>
                  <p className="text-slate-300 text-lg font-medium mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-100">{testimonial.author}</h3>
                    <p className="text-slate-400">
                      {testimonial.role}
                      <br />
                      {testimonial.institution}
                    </p>
                  </div>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BeakerIcon, TestTubes, ShieldCheck, Truck, Users, Scale, FlaskConical, Pipette, Microscope, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"

const categories = [
  {
    title: "Organic Chemicals",
    description: "High-purity organic compounds, solvents, and reagents for synthesis and analysis",
    icon: BeakerIcon,
  },
  {
    title: "Inorganic Chemicals",
    description: "Premium quality inorganic reagents, salts, and compounds",
    icon: TestTubes,
  },
  {
    title: "Analytical Standards",
    description: "Certified reference materials and analytical standards for calibration",
    icon: Scale,
  },
  {
    title: "Laboratory Essentials",
    description: "Essential lab chemicals, buffers, and solutions for daily use",
    icon: FlaskConical,
  },
  {
    title: "Chromatography",
    description: "HPLC grade solvents and mobile phase solutions",
    icon: Pipette,
  },
  {
    title: "Biochemicals",
    description: "Enzymes, proteins, and biochemical reagents for life science research",
    icon: Microscope,
  }
]

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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Product Categories</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of high-quality laboratory chemicals and reagents
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="group">
                    <Link href={`/products?category=${category.title}`}>
                      View Products
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ChemLab Synthesis?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-white">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Trusted by leading research institutions and laboratories worldwide
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="bg-gray-50">
                <CardHeader>
                  <div className="mb-4 text-blue-700">
                    <Quote className="w-8 h-8" />
                  </div>
                  <CardDescription className="text-gray-700 text-lg font-medium mb-6">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div>
                    <CardTitle className="text-base mb-1">{testimonial.author}</CardTitle>
                    <CardDescription>
                      {testimonial.role}
                      <br />
                      {testimonial.institution}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements or request a quote for your chemical needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
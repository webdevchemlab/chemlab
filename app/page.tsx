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
import { GradientButton } from "@/components/ui/gradient-button"
import { GradientText } from "@/components/ui/gradient-text"
import { Particles } from "@/components/ui/particles"

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
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="mt-8 text-center text-4xl font-bold tracking-tight md:text-7xl mb-4 font-manrope px-6 py-3"
              showBorder
              animationSpeed={6}
            >
              ChemLab Synthesis
            </GradientText>
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-center text-2xl font-bold tracking-tight md:text-5xl mb-6 font-manrope px-4"
              animationSpeed={8}
            >
              Your Trusted Partner for <br />Premium Laboratory Chemicals
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              Authorized dealer for leading manufacturers. Serving research and educational institutions with high-quality chemicals and laboratory supplies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GradientButton asChild>
                <Link href="/products">Browse Products</Link>
              </GradientButton>
              <GradientButton asChild variant="variant">
                <Link href="/contact">Request Quote</Link>
              </GradientButton>
            </div>
          </motion.div>
        </LampContainer>
      </section>

      {/* Featured Brands */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-100">Trusted by Leading Manufacturers</h2>
          <p className="text-lg text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            We are authorized dealers for premium chemical and laboratory equipment manufacturers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand) => (
              <div 
                key={brand.name} 
                className="flex items-center justify-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all grayscale hover:grayscale-0"
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
      <section className="relative bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={75}
          ease={70}
          color="#F472B6"
          size={0.3}
        />
        <div className="relative z-10">
          <ProductCategories />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={60}
          ease={90}
          color="#34D399"
          size={0.4}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Why Choose ChemLab Synthesis?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <CardSpotlight key={feature.title} className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                <div className="relative z-10">
                  <feature.icon className="w-10 h-10 text-cyan-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={40}
          ease={120}
          color="#9333EA"
          size={0.6}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <CardSpotlight key={testimonial.author} className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                <div className="relative z-10">
                  <Quote className="w-10 h-10 text-cyan-500 mb-4" />
                  <blockquote className="text-slate-300 mb-4">{testimonial.quote}</blockquote>
                  <cite className="not-italic">
                    <div className="font-semibold text-slate-200">{testimonial.author}</div>
                    <div className="text-cyan-500">{testimonial.role}</div>
                    <div className="text-slate-400">{testimonial.institution}</div>
                  </cite>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
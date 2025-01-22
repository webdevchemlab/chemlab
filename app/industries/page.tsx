"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FlaskConical, 
  GraduationCap, 
  Pill, 
  Dna, 
  Factory, 
  TestTubes,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { Particles } from "@/components/ui/particles"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"

const industries = [
  {
    title: "Research Institutions",
    description: "Supporting groundbreaking research with high-purity chemicals and reliable supplies.",
    icon: FlaskConical,
    categories: ["Analytical Standards", "Research Chemicals", "Lab Equipment"],
    link: "/products?industry=research"
  },
  {
    title: "Academic Institutions",
    description: "Providing educational institutions with quality chemicals and supplies for teaching and research labs.",
    icon: GraduationCap,
    categories: ["Laboratory Chemicals", "Glassware", "Safety Equipment"],
    link: "/products?industry=academic"
  },
  {
    title: "Pharmaceutical Companies",
    description: "Supplying pharmaceutical research and development with precise analytical standards and reagents.",
    icon: Pill,
    categories: ["API Standards", "HPLC Solvents", "Reference Materials"],
    link: "/products?industry=pharmaceutical"
  },
  {
    title: "Biotechnology Labs",
    description: "Supporting biotech innovation with specialized biochemicals and molecular biology reagents.",
    icon: Dna,
    categories: ["Biochemicals", "Molecular Biology Reagents", "Cell Culture Media"],
    link: "/products?industry=biotech"
  },
  {
    title: "Chemical Industries",
    description: "Providing industrial-grade chemicals and raw materials for manufacturing processes.",
    icon: Factory,
    categories: ["Industrial Chemicals", "Process Chemicals", "Bulk Supplies"],
    link: "/products?industry=chemical"
  },
  {
    title: "Testing Laboratories",
    description: "Equipping testing labs with certified reference materials and analytical reagents.",
    icon: TestTubes,
    categories: ["Analytical Standards", "Quality Control Materials", "Testing Reagents"],
    link: "/products?industry=testing"
  }
]

export default function IndustriesPage() {
  return (
    <div className="flex-1">
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
              className="mt-8 text-center text-4xl font-bold tracking-tight md:text-6xl mb-4 font-manrope px-6 py-3"
              showBorder
              animationSpeed={6}
            >
              Industries We Serve
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              Providing high-quality chemicals and laboratory supplies across diverse industries, 
              supporting research, education, and innovation.
            </p>
          </motion.div>
        </LampContainer>
      </section>

      {/* Industries Grid */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />
        <Container className="relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardSpotlight className="flex flex-col h-full bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-cyan-500">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-slate-100">{industry.title}</CardTitle>
                    <CardDescription className="text-slate-400">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="mb-6 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-slate-100">Key Product Categories:</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-slate-400">
                        {industry.categories.map((category) => (
                          <li key={category}>{category}</li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="outline" className="w-full text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10">
                      <Link href={industry.link} className="group">
                        View Products
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={30}
          ease={70}
          color="#F472B6"
          size={0.3}
        />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Need Help Finding the Right Products?
            </GradientText>
            <p className="mt-4 text-lg text-slate-400">
              Our team of experts is here to help you find the perfect chemical products and 
              supplies for your specific industry needs.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
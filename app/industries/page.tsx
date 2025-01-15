import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Industries We Serve | ChemLab Synthesis",
  description: "Discover how ChemLab Synthesis serves various industries with high-quality chemicals and laboratory supplies.",
}

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold">Industries We Serve</h1>
            <p className="mt-6 text-xl text-blue-100">
              Providing high-quality chemicals and laboratory supplies across diverse industries, 
              supporting research, education, and innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="mb-6 flex-1">
                    <h4 className="mb-2 text-sm font-semibold">Key Product Categories:</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {industry.categories.map((category) => (
                        <li key={category}>{category}</li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={industry.link} className="group">
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Need Help Finding the Right Products?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team of experts is here to help you find the perfect chemical products and 
              supplies for your specific industry needs.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 
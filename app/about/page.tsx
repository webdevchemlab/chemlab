import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BeakerIcon, Award, Users, ShieldCheck, Scale, Microscope } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | ChemLab Synthesis",
  description: "Learn about ChemLab Synthesis, your trusted partner for high-quality laboratory chemicals and research materials.",
}

const values = [
  {
    title: "Quality Assurance",
    description: "We maintain the highest standards in chemical quality and purity through rigorous testing and verification.",
    icon: Award,
  },
  {
    title: "Customer Focus",
    description: "Our dedicated team provides exceptional support and guidance for all your chemical supply needs.",
    icon: Users,
  },
  {
    title: "Safety First",
    description: "We prioritize safety in all aspects of our operations, from storage to handling and delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Reliability",
    description: "Consistent and timely supply of chemicals to keep your research and operations running smoothly.",
    icon: Scale,
  },
  {
    title: "Innovation",
    description: "Supporting scientific advancement through high-quality research materials and solutions.",
    icon: Microscope,
  },
]

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <BeakerIcon className="mx-auto h-16 w-16 text-blue-200" />
            <h1 className="mt-4 text-4xl font-bold">About ChemLab Synthesis</h1>
            <p className="mt-6 text-xl text-blue-100">
              Your trusted partner in providing high-quality chemicals and laboratory supplies for research, 
              education, and industrial applications.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="mt-6 space-y-6 text-lg text-muted-foreground">
              <p>
                ChemLab Synthesis was founded with a vision to provide researchers, educational institutions, 
                and industries with reliable access to high-quality chemical products. As authorized dealers 
                for leading manufacturers, we bridge the gap between premium chemical producers and the 
                scientific community.
              </p>
              <p>
                Over the years, we have built strong relationships with renowned manufacturers like Merck, 
                Sigma-Aldrich, SRL, Honeywell, Thermo Fisher, and Borosil. These partnerships enable us 
                to offer an extensive range of authentic chemicals and laboratory supplies to our customers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="bg-muted/50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              To empower scientific research and industrial progress by providing reliable access to 
              high-quality chemicals and laboratory supplies, backed by exceptional service and expertise.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-3xl font-bold">Our Values</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="bg-background">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Commitment */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Our Commitment to Quality</h2>
            <div className="mt-6 space-y-6 text-lg text-muted-foreground">
              <p>
                At ChemLab Synthesis, quality is not just a promise – it's our foundation. We maintain 
                strict quality control processes and work only with certified manufacturers to ensure 
                every product meets the highest standards of purity and reliability.
              </p>
              <p>
                Our commitment extends beyond products to encompass every aspect of our service, from 
                expert technical support to efficient delivery systems. We understand that your research 
                and operations depend on the quality and reliability of your chemical supplies.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 
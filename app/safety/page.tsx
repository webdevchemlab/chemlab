import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, HardHat, Eye, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Safety Guidelines | ChemLab Synthesis",
  description: "Essential safety guidelines and information for handling chemical products safely and responsibly.",
}

const safetyPictograms = [
  {
    id: "GHS01",
    name: "Explosive",
    description: "Chemicals that may cause explosions when exposed to heat, shock, friction, or other conditions.",
  },
  {
    id: "GHS02",
    name: "Flammable",
    description: "Chemicals that may catch fire when exposed to air, heat, sparks or flames.",
  },
  {
    id: "GHS03",
    name: "Oxidizing",
    description: "Chemicals that may cause or intensify fire and explosion.",
  },
  {
    id: "GHS04",
    name: "Compressed Gas",
    description: "Gases under pressure that may explode when heated or may cause cold burns.",
  },
  {
    id: "GHS05",
    name: "Corrosive",
    description: "Chemicals that may cause severe skin burns and eye damage.",
  },
  {
    id: "GHS06",
    name: "Toxic",
    description: "Chemicals that are fatal or toxic if swallowed, inhaled, or in contact with skin.",
  },
  {
    id: "GHS07",
    name: "Harmful",
    description: "Chemicals that may cause respiratory irritation, drowsiness, or allergic reactions.",
  },
  {
    id: "GHS08",
    name: "Health Hazard",
    description: "Chemicals that may cause serious health effects like cancer or organ damage.",
  },
  {
    id: "GHS09",
    name: "Environmental Hazard",
    description: "Chemicals that are toxic to aquatic life with long-lasting effects.",
  },
]

const guidelines = [
  {
    title: "Personal Protective Equipment",
    description: "Always wear appropriate PPE including safety goggles, gloves, and lab coats when handling chemicals.",
    icon: HardHat,
  },
  {
    title: "Safety Data Sheets",
    description: "Review the Safety Data Sheet (SDS) before handling any chemical product.",
    icon: FileText,
  },
  {
    title: "Emergency Procedures",
    description: "Be familiar with emergency procedures, locations of safety equipment, and spill response protocols.",
    icon: AlertTriangle,
  },
  {
    title: "Eye Protection",
    description: "Wear appropriate eye protection at all times in areas where chemicals are handled or stored.",
    icon: Eye,
  },
  {
    title: "Safe Storage",
    description: "Store chemicals according to compatibility and maintain proper segregation of incompatible materials.",
    icon: Shield,
  },
]

export default function SafetyPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <AlertTriangle className="mx-auto h-16 w-16 text-yellow-300" />
            <h1 className="mt-4 text-4xl font-bold">Safety Guidelines</h1>
            <p className="mt-6 text-xl text-blue-100">
              Essential information for the safe handling, storage, and disposal of chemical products.
            </p>
          </div>
        </Container>
      </section>

      {/* General Guidelines */}
      <section className="py-16">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold">General Safety Guidelines</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((guideline) => (
              <Card key={guideline.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <guideline.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{guideline.title}</CardTitle>
                  <CardDescription>{guideline.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* GHS Pictograms */}
      <section className="bg-muted/50 py-16">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold">GHS Hazard Pictograms</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {safetyPictograms.map((pictogram) => (
              <Card key={pictogram.id}>
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-16 w-16">
                      <Image
                        src={`/safety-pictograms/${pictogram.id}.svg`}
                        alt={pictogram.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle>{pictogram.name}</CardTitle>
                  <CardDescription>{pictogram.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* MSDS Section */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Safety Data Sheets (SDS)</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Access detailed safety information for all our chemical products through our 
              comprehensive MSDS database.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/msds">Access MSDS Database</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Emergency Contact */}
      <section className="bg-muted/50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Emergency Contact</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              In case of chemical emergencies, please contact our 24/7 emergency response team.
            </p>
            <p className="mt-4 text-2xl font-semibold text-blue-600">
              Emergency Hotline: 1-800-XXX-XXXX
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
} 
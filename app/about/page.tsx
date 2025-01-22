"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BeakerIcon, Award, Users, ShieldCheck, Scale, Microscope } from "lucide-react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { Particles } from "@/components/ui/particles"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"

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
            <BeakerIcon className="mx-auto h-16 w-16 text-cyan-400" />
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="mt-8 text-center text-4xl font-bold tracking-tight md:text-6xl mb-4 font-manrope px-6 py-3"
              showBorder
              animationSpeed={6}
            >
              About ChemLab Synthesis
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              Your trusted partner in providing high-quality chemicals and laboratory supplies for research, 
              education, and industrial applications.
            </p>
          </motion.div>
        </LampContainer>
      </section>

      {/* Company Overview */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />
        <Container className="relative z-10">
          <motion.div 
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-3xl font-bold mb-6"
              animationSpeed={8}
            >
              Our Story
            </GradientText>
            <div className="mt-6 space-y-6 text-lg text-slate-400">
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
          </motion.div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="relative py-16 bg-slate-900/50">
        <Particles
          className="absolute inset-0"
          quantity={30}
          ease={70}
          color="#F472B6"
          size={0.3}
        />
        <Container className="relative z-10">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-3xl font-bold mb-6"
              animationSpeed={8}
            >
              Our Mission
            </GradientText>
            <p className="mt-6 text-lg text-slate-400">
              To empower scientific research and industrial progress by providing reliable access to 
              high-quality chemicals and laboratory supplies, backed by exceptional service and expertise.
            </p>
          </motion.div>

          <div className="mt-16">
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-3xl font-bold mb-12 text-center"
              animationSpeed={8}
            >
              Our Values
            </GradientText>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardSpotlight className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-cyan-500">
                        <value.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-slate-100">{value.title}</CardTitle>
                      <CardDescription className="text-slate-400">{value.description}</CardDescription>
                    </CardHeader>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Commitment */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={40}
          ease={90}
          color="#60A5FA"
          size={0.4}
        />
        <Container className="relative z-10">
          <motion.div 
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-3xl font-bold mb-6"
              animationSpeed={8}
            >
              Our Commitment to Quality
            </GradientText>
            <div className="mt-6 space-y-6 text-lg text-slate-400">
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
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BeakerIcon, 
  Award, 
  Users, 
  ShieldCheck, 
  Scale, 
  Microscope,
  TrendingUp,
  Package,
  Globe,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Building2,
  Target,
  Zap,
  Leaf,
  Heart,
  Lightbulb,
  Briefcase,
  GraduationCap,
  FlaskConical,
  TestTubes,
  Factory,
  Pill,
  Dna,
  Lock
} from "lucide-react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { Particles } from "@/components/ui/particles"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import Link from "next/link"

const values = [
  {
    title: "Quality Assurance",
    description: "We maintain the highest standards in chemical quality and purity through rigorous testing and verification.",
    icon: Award,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30"
  },
  {
    title: "Customer Focus",
    description: "Our dedicated team provides exceptional support and guidance for all your chemical supply needs.",
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Safety First",
    description: "We prioritize safety in all aspects of our operations, from storage to handling and delivery.",
    icon: ShieldCheck,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30"
  },
  {
    title: "Reliability",
    description: "Consistent and timely supply of chemicals to keep your research and operations running smoothly.",
    icon: Scale,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Innovation",
    description: "Supporting scientific advancement through high-quality research materials and solutions.",
    icon: Microscope,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-500/30"
  },
  {
    title: "Sustainability",
    description: "Committed to environmentally responsible practices and sustainable chemical solutions.",
    icon: Leaf,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30"
  }
]

const stats = [
  {
    label: "Years of Experience",
    value: "15+",
    icon: Clock,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    label: "Products Available",
    value: "10,000+",
    icon: Package,
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  },
  {
    label: "Happy Customers",
    value: "5,000+",
    icon: Users,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20"
  },
  {
    label: "Countries Served",
    value: "25+",
    icon: Globe,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20"
  }
]

const timeline = [
  {
    year: "2008",
    title: "Company Founded",
    description: "ChemLab Synthesis was established with a vision to provide high-quality chemical supplies to the scientific community.",
    icon: Building2
  },
  {
    year: "2012",
    title: "First Major Partnership",
    description: "Secured authorized dealership with Merck, marking the beginning of our premium manufacturer partnerships.",
    icon: Users
  },
  {
    year: "2015",
    title: "Quality Certification",
    description: "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management systems.",
    icon: Award
  },
  {
    year: "2018",
    title: "Digital Transformation",
    description: "Launched our comprehensive e-commerce platform to better serve our growing customer base.",
    icon: Zap
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded operations to serve customers across 25+ countries with localized support.",
    icon: Globe
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Established our research and development center to support cutting-edge scientific applications.",
    icon: Lightbulb
  }
]

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: CheckCircle,
    color: "text-green-400"
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management",
    icon: Leaf,
    color: "text-emerald-400"
  },
  {
    name: "OHSAS 18001:2007",
    description: "Occupational Health & Safety",
    icon: ShieldCheck,
    color: "text-blue-400"
  },
  {
    name: "GDPR Compliant",
    description: "Data Protection Standards",
    icon: Lock,
    color: "text-purple-400"
  }
]

const industries = [
  { name: "Research Institutions", icon: Microscope, count: "500+" },
  { name: "Academic Institutions", icon: GraduationCap, count: "300+" },
  { name: "Pharmaceutical Companies", icon: Pill, count: "200+" },
  { name: "Biotechnology Labs", icon: Dna, count: "150+" },
  { name: "Chemical Industries", icon: Factory, count: "100+" },
  { name: "Testing Laboratories", icon: TestTubes, count: "250+" }
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Hero Section */}
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
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <BeakerIcon className="mx-auto h-20 w-20 text-cyan-400 drop-shadow-lg" />
            </motion.div>
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
              education, and industrial applications worldwide.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </LampContainer>
      </section>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />

        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: "About", href: "/about" }
            ]} 
          />
        </div>

        {/* Company Statistics */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Our Impact in Numbers
            </GradientText>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Delivering excellence across the scientific community with proven track record and continuous growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </motion.div>
                      <div>
                        <p className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">{stat.value}</p>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{stat.label}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Overview */}
        <section className="mb-16">
          <motion.div 
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-3xl font-bold mb-6 text-center"
              animationSpeed={8}
            >
              Our Story
            </GradientText>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-lg text-slate-400">
                <p>
                  ChemLab Synthesis was founded in 2008 with a vision to provide researchers, educational institutions, 
                  and industries with reliable access to high-quality chemical products. As authorized dealers 
                  for leading manufacturers, we bridge the gap between premium chemical producers and the 
                  scientific community.
                </p>
                <p>
                  Over the years, we have built strong relationships with renowned manufacturers like Merck, 
                  Sigma-Aldrich, SRL, Honeywell, Thermo Fisher, and Borosil. These partnerships enable us 
                  to offer an extensive range of authentic chemicals and laboratory supplies to our customers.
                </p>
                <p>
                  Today, we serve over 5,000 customers across 25+ countries, maintaining the highest standards 
                  of quality, safety, and customer service that have made us a trusted name in the industry.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">Why Choose ChemLab Synthesis?</h3>
                  <ul className="space-y-3">
                    {[
                      "Authorized dealer for premium manufacturers",
                      "15+ years of industry experience",
                      "ISO certified quality management",
                      "Global shipping and support",
                      "Expert technical assistance",
                      "Comprehensive product range"
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Our Mission</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                To empower scientific research and industrial progress by providing reliable access to 
                high-quality chemicals and laboratory supplies, backed by exceptional service and expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Our Vision</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the leading global supplier of high-quality chemical products, driving innovation 
                and supporting breakthrough discoveries across all scientific disciplines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Our Core Values
            </GradientText>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with customers, partners, and the scientific community.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <CardSpotlight className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 group">
                  <CardHeader>
                    <motion.div 
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${value.bgColor} ${value.color} group-hover:scale-110 transition-all duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <value.icon className="h-7 w-7" />
                    </motion.div>
                    <CardTitle className="text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">{value.title}</CardTitle>
                    <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{value.description}</CardDescription>
                  </CardHeader>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Our Journey
            </GradientText>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted global supplier of high-quality chemical products.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-6 border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
                    </div>
                    <p className="text-slate-400">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Certifications & Standards
            </GradientText>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our commitment to quality is validated through internationally recognized certifications and standards.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800/50 mx-auto mb-4 ${cert.color}`}
                    >
                      <cert.icon className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors duration-300">{cert.name}</h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GradientText
              colors={["#F472B6", "#9333EA", "#F472B6"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Industries We Serve
            </GradientText>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Supporting diverse industries with high-quality chemical products and laboratory supplies.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                          <industry.icon className="h-5 w-5" />
                        </div>
                        <span className="text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">{industry.name}</span>
                      </div>
                      <Badge variant="outline" className="bg-cyan-500/20 border-cyan-500/30 text-cyan-400">
                        {industry.count}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-800/50"
          >
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-3xl font-bold mb-4"
              animationSpeed={8}
            >
              Ready to Get Started?
            </GradientText>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers, educators, and industry professionals who trust ChemLab Synthesis 
              for their chemical supply needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20">
                  <Link href="/products">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" className="text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
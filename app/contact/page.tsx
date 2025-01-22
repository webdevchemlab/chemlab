"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { Particles } from "@/components/ui/particles"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from "lucide-react"

const contactInfo = [
  {
    title: "Phone",
    details: "+91 (123) 456-7890",
    icon: Phone,
    description: "Mon-Sat 9am to 6pm"
  },
  {
    title: "Email",
    details: "info@chemlabsynthesis.com",
    icon: Mail,
    description: "We'll respond within 24 hours"
  },
  {
    title: "Address",
    details: "123 Chemical Avenue, Science Park",
    icon: MapPin,
    description: "Mumbai, Maharashtra 400001"
  },
  {
    title: "Business Hours",
    details: "Monday - Saturday",
    icon: Clock,
    description: "9:00 AM - 6:00 PM"
  }
]

export default function ContactPage() {
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
              Contact Us
            </GradientText>
            <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto px-4 font-manrope">
              Have questions about our products or services? We're here to help you find the perfect solution for your needs.
            </p>
          </motion.div>
        </LampContainer>
      </section>

      {/* Contact Grid */}
      <section className="relative py-16 bg-slate-950">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={100}
          color="#60A5FA"
          size={0.5}
        />
        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <CardSpotlight className="p-8 bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-200">First Name</label>
                        <Input 
                          placeholder="John" 
                          className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-200">Last Name</label>
                        <Input 
                          placeholder="Doe" 
                          className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-200">Email</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-200">Phone</label>
                      <Input 
                        type="tel" 
                        placeholder="+91 (123) 456-7890" 
                        className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-200">Message</label>
                      <Textarea 
                        placeholder="Tell us about your requirements..." 
                        className="min-h-[150px] bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardSpotlight>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CardSpotlight className="h-full p-6 bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-800 text-cyan-500">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-200">{item.title}</h3>
                          <p className="mt-1 text-slate-400">{item.details}</p>
                          <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    </CardSpotlight>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <CardSpotlight className="p-1 bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803960914342!2d72.8547!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTEnMTYuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </CardSpotlight>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

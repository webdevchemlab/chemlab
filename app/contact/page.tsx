"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { Particles } from "@/components/ui/particles"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  Globe,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  FileText,
  Download,
  Calendar,
  Users,
  Target,
  Shield,
  Award
} from "lucide-react"
import Link from "next/link"

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  industry: string
  subject: string
  message: string
  newsletter: boolean
  terms: boolean
}

const contactInfo = [
  {
    title: "Phone Support",
    details: "+91 (123) 456-7890",
    icon: Phone,
    description: "Mon-Sat 9am to 6pm IST",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Email Support",
    details: "info@chemlabsynthesis.com",
    icon: Mail,
    description: "We'll respond within 24 hours",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30"
  },
  {
    title: "Technical Support",
    details: "tech@chemlabsynthesis.com",
    icon: MessageSquare,
    description: "For technical queries and product support",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Business Hours",
    details: "Monday - Saturday",
    icon: Clock,
    description: "9:00 AM - 6:00 PM IST",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30"
  }
]

const departments = [
  {
    name: "Sales Department",
    email: "sales@chemlabsynthesis.com",
    phone: "+91 (123) 456-7891",
    description: "Product inquiries, pricing, and orders",
    icon: Target
  },
  {
    name: "Technical Support",
    email: "tech@chemlabsynthesis.com",
    phone: "+91 (123) 456-7892",
    description: "Technical specifications and applications",
    icon: Zap
  },
  {
    name: "Quality Assurance",
    email: "qa@chemlabsynthesis.com",
    phone: "+91 (123) 456-7893",
    description: "Quality standards and certifications",
    icon: Award
  },
  {
    name: "Customer Service",
    email: "support@chemlabsynthesis.com",
    phone: "+91 (123) 456-7894",
    description: "General inquiries and support",
    icon: Users
  }
]

const faqs = [
  {
    question: "What are your delivery times?",
    answer: "Standard delivery takes 3-5 business days within India. Express delivery (1-2 days) is available for urgent orders. International shipping typically takes 7-14 business days depending on the destination."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes, we offer competitive bulk pricing for large orders. Contact our sales team for custom quotes and volume discounts based on your specific requirements."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and digital payment methods including UPI, Net Banking, and digital wallets. Corporate accounts can be set up for regular customers."
  },
  {
    question: "Do you provide technical support?",
    answer: "Yes, our technical team provides comprehensive support including product specifications, application guidance, safety information, and troubleshooting assistance."
  },
  {
    question: "What quality certifications do you have?",
    answer: "We maintain ISO 9001:2015 certification and work with certified manufacturers. All products come with proper documentation including certificates of analysis and safety data sheets."
  },
  {
    question: "Can you provide custom formulations?",
    answer: "Yes, we can work with you to develop custom formulations and specifications. Our technical team will collaborate with you to meet your specific requirements."
  }
]

const industries = [
  "Research Institutions",
  "Academic Institutions", 
  "Pharmaceutical Companies",
  "Biotechnology Labs",
  "Chemical Industries",
  "Testing Laboratories",
  "Environmental Labs",
  "Food & Beverage",
  "Electronics Manufacturing",
  "Other"
]

const subjects = [
  "Product Inquiry",
  "Technical Support",
  "Pricing & Quote",
  "Order Status",
  "Quality Assurance",
  "Custom Formulation",
  "Partnership Opportunity",
  "General Inquiry"
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    subject: "",
    message: "",
    newsletter: false,
    terms: false
  })

  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Partial<ContactForm> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.company.trim()) newErrors.company = "Company name is required"
    if (!formData.industry) newErrors.industry = "Please select your industry"
    if (!formData.subject) newErrors.subject = "Please select a subject"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    if (!formData.terms) newErrors.terms = "You must accept the terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        subject: "",
        message: "",
        newsletter: false,
        terms: false
      })
      setSubmitSuccess(false)
    }, 3000)
  }

  const handleInputChange = (field: keyof ContactForm, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

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
              { label: "Contact", href: "/contact" }
            ]} 
          />
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-400">Message Sent Successfully!</h3>
                      <p className="text-green-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <CardSpotlight className="p-8 bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-100 mb-2">Send us a Message</h2>
                <p className="text-slate-400">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-200">First Name *</label>
                      <Input 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 ${
                          errors.firstName ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-200">Last Name *</label>
                      <Input 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 ${
                          errors.lastName ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Phone *</label>
                    <Input 
                      type="tel" 
                      placeholder="+91 (123) 456-7890" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Company *</label>
                    <Input 
                      placeholder="Your Company Name" 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 ${
                        errors.company ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.company}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Industry *</label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className={`bg-slate-800/50 border-slate-700 text-slate-200 ${
                        errors.industry ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                      }`}>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry} className="text-slate-200">
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.industry && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.industry}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Subject *</label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className={`bg-slate-800/50 border-slate-700 text-slate-200 ${
                        errors.subject ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                      }`}>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject} className="text-slate-200">
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..." 
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`min-h-[150px] bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                    />
                    <label htmlFor="newsletter" className="text-sm text-slate-300 cursor-pointer">
                      Subscribe to our newsletter for updates and offers
                    </label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                    />
                    <label htmlFor="terms" className="text-sm text-slate-300 cursor-pointer">
                      I agree to the{" "}
                      <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline">
                        Privacy Policy
                      </Link>
                      *
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.terms}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
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
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <CardSpotlight className="h-full p-6 bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 group">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`mt-1 h-12 w-12 flex items-center justify-center rounded-xl ${item.bgColor} ${item.color} group-hover:scale-110 transition-all duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                        <p className="mt-1 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{item.details}</p>
                        <p className="mt-1 text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">{item.description}</p>
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardSpotlight className="p-1 bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-200 mb-3">Our Location</h3>
                  <p className="text-slate-400 mb-4">123 Chemical Avenue, Science Park, Mumbai, Maharashtra 400001</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803960914342!2d72.8547!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTEnMTYuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </CardSpotlight>
            </motion.div>
          </motion.div>
        </div>

        {/* Departments Section */}
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
              Contact by Department
            </GradientText>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Get in touch with the right department for your specific needs and inquiries.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        <dept.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">{dept.name}</h3>
                    </div>
                    <p className="text-slate-400 mb-4 text-sm">{dept.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-slate-500" />
                        <a href={`mailto:${dept.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-slate-500" />
                        <a href={`tel:${dept.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
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
              Frequently Asked Questions
            </GradientText>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.01,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 group">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {faq.answer}
                    </p>
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
              Don't see what you're looking for? Our team is here to help you find the perfect solution.
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
                  <Link href="/quote-request">Request Quote</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

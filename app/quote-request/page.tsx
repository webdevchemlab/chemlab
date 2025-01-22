"use client"

import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Particles } from "@/components/ui/particles"
import { featuredProducts } from "@/data/products"
import { useState } from "react"

export default function QuoteRequestPage() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('product')
  const product = productId ? featuredProducts.find(p => p.id === productId) : null

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    quantity: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { ...formData, productId })
    // For now, we'll just show an alert
    alert('Thank you for your quote request. Our team will contact you shortly.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="relative min-h-screen bg-slate-950 py-12 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={100}
        color="#60A5FA"
        size={0.5}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-100">Request a Quote</h1>
            {product && (
              <p className="mt-2 text-slate-400">
                for {product.name}
              </p>
            )}
          </div>

          <div className="bg-slate-900/50 rounded-lg p-6 backdrop-blur-sm border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500"
                    placeholder="Company name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Quantity Required</label>
                <Input
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500"
                  placeholder="Enter quantity"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Additional Information</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px] bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="border-slate-800 text-slate-300 hover:bg-slate-900"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  Submit Quote Request
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { BeakerIcon, FileText, ShieldAlert, FileSpreadsheet, Download } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useToast } from "@/components/ui/use-toast"
import type { Product } from "@/types/product"

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  quantity: z.string().min(1, "Please specify the quantity"),
  message: z.string().optional()
})

const supportFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type QuoteFormValues = z.infer<typeof quoteFormSchema>
type SupportFormValues = z.infer<typeof supportFormSchema>

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const { toast } = useToast()

  const quoteForm = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema)
  })

  const supportForm = useForm<SupportFormValues>({
    resolver: zodResolver(supportFormSchema)
  })

  async function onQuoteSubmit(data: QuoteFormValues) {
    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, productId: product.id })
      })

      if (!response.ok) throw new Error("Failed to submit quote request")

      toast({
        title: "Quote Request Submitted",
        description: "We'll get back to you shortly with pricing details."
      })
      setQuoteOpen(false)
      quoteForm.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive"
      })
    }
  }

  async function onSupportSubmit(data: SupportFormValues) {
    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, productId: product.id })
      })

      if (!response.ok) throw new Error("Failed to submit support request")

      toast({
        title: "Support Request Submitted",
        description: "Our technical team will contact you soon."
      })
      setSupportOpen(false)
      supportForm.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit support request. Please try again.",
        variant: "destructive"
      })
    }
  }

  async function handleDocumentDownload(doc: { name: string; url: string; type: string }) {
    try {
      const response = await fetch(doc.url)
      if (!response.ok) throw new Error("Failed to download document")

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = doc.name
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      toast({
        title: "Download Started",
        description: `${doc.name} is being downloaded.`
      })
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download document. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>
                CAS Number: {product.casNumber} | Grade: {product.grade} | Purity: {product.purity}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="specifications">
                <TabsList>
                  <TabsTrigger value="specifications">
                    <BeakerIcon className="w-4 h-4 mr-2" />
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="safety">
                    <ShieldAlert className="w-4 h-4 mr-2" />
                    Safety & Applications
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="specifications">
                  <div className="grid grid-cols-2 gap-4">
                    {product.specifications?.map((spec, index) => (
                      <div key={index}>
                        <p>{spec}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="safety">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Applications</h4>
                      <ul className="list-disc pl-5">
                        {product.applications?.map((application, index) => (
                          <li key={index}>{application}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">MSDS</h4>
                      <Button
                        variant="outline"
                        className="justify-start"
                        onClick={() => window.open(product.msdsUrl, '_blank')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download MSDS
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Request Information</CardTitle>
              <CardDescription>Get a quote or technical support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">Request Quote</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request a Quote</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to receive pricing information for {product.name}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input {...quoteForm.register("name")} />
                      {quoteForm.formState.errors.name && (
                        <p className="text-sm text-red-500">{quoteForm.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input {...quoteForm.register("email")} type="email" />
                      {quoteForm.formState.errors.email && (
                        <p className="text-sm text-red-500">{quoteForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input {...quoteForm.register("company")} />
                      {quoteForm.formState.errors.company && (
                        <p className="text-sm text-red-500">{quoteForm.formState.errors.company.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity Required</Label>
                      <Input {...quoteForm.register("quantity")} />
                      {quoteForm.formState.errors.quantity && (
                        <p className="text-sm text-red-500">{quoteForm.formState.errors.quantity.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="message">Additional Requirements (Optional)</Label>
                      <Textarea {...quoteForm.register("message")} />
                    </div>
                    <Button type="submit">Submit Quote Request</Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog open={supportOpen} onOpenChange={setSupportOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Technical Support</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Technical Support</DialogTitle>
                    <DialogDescription>
                      Need help with {product.name}? Our technical team is here to assist you.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={supportForm.handleSubmit(onSupportSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input {...supportForm.register("name")} />
                      {supportForm.formState.errors.name && (
                        <p className="text-sm text-red-500">{supportForm.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input {...supportForm.register("email")} type="email" />
                      {supportForm.formState.errors.email && (
                        <p className="text-sm text-red-500">{supportForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input {...supportForm.register("subject")} />
                      {supportForm.formState.errors.subject && (
                        <p className="text-sm text-red-500">{supportForm.formState.errors.subject.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea {...supportForm.register("message")} />
                      {supportForm.formState.errors.message && (
                        <p className="text-sm text-red-500">{supportForm.formState.errors.message.message}</p>
                      )}
                    </div>
                    <Button type="submit">Submit Support Request</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 
"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BeakerIcon, FileText, ShieldAlert, FileSpreadsheet, Download } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

// Form validation schemas
const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  quantity: z.string().min(1, "Please enter the required quantity"),
  message: z.string().optional(),
})

const supportFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

interface ProductDetailsProps {
  product: {
    id: string
    name: string
    casNumber: string
    manufacturer: string
    purity: string
    grade: string
    category: string
    price: string
    packSize: string
    molecularFormula: string
    molecularWeight: string
    description: string
    specifications: Record<string, string>
    safetyInfo: {
      hazardStatements: string[]
      precautionaryStatements: string[]
      storage: string
      disposal: string
    }
    packagingOptions: Array<{
      size: string
      price: string
    }>
    documents: {
      sds: string
      coa: string
      specification: string
    }
  }
}

interface FormFieldProps {
  field: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
    name: string;
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedPackSize, setSelectedPackSize] = useState(product.packagingOptions[0])
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)
  const [isSupportDialogOpen, setIsSupportDialogOpen] = useState(false)

  const quoteForm = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      quantity: "",
      message: "",
    },
  })

  const supportForm = useForm<z.infer<typeof supportFormSchema>>({
    resolver: zodResolver(supportFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onQuoteSubmit = (data: z.infer<typeof quoteFormSchema>) => {
    console.log("Quote Request:", data)
    setIsQuoteDialogOpen(false)
    quoteForm.reset()
  }

  const onSupportSubmit = (data: z.infer<typeof supportFormSchema>) => {
    console.log("Support Request:", data)
    setIsSupportDialogOpen(false)
    supportForm.reset()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Overview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BeakerIcon className="h-6 w-6 text-blue-500" />
                <div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>CAS: {product.casNumber}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Chemical Properties</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Molecular Formula:</span>
                      <span>{product.molecularFormula}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Molecular Weight:</span>
                      <span>{product.molecularWeight}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Product Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Grade:</span>
                      <span>{product.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Purity:</span>
                      <span>{product.purity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Tabs defaultValue="specifications" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">
                <FileText className="h-4 w-4 mr-2" />
                Specifications
              </TabsTrigger>
              <TabsTrigger value="safety">
                <ShieldAlert className="h-4 w-4 mr-2" />
                Safety Data
              </TabsTrigger>
              <TabsTrigger value="documents">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Documents
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Hazard Statements</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {product.safetyInfo.hazardStatements.map((statement, index) => (
                          <li key={index} className="text-muted-foreground">{statement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Precautionary Statements</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {product.safetyInfo.precautionaryStatements.map((statement, index) => (
                          <li key={index} className="text-muted-foreground">{statement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Storage</h4>
                      <p className="text-muted-foreground">{product.safetyInfo.storage}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Disposal</h4>
                      <p className="text-muted-foreground">{product.safetyInfo.disposal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle>Product Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-between">
                      Safety Data Sheet (SDS)
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between">
                      Certificate of Analysis (CoA)
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between">
                      Product Specification Sheet
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Select Package Size</h4>
                  <div className="space-y-2">
                    {product.packagingOptions.map((option) => (
                      <div
                        key={option.size}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedPackSize.size === option.size
                            ? "border-blue-500 bg-blue-50"
                            : "hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedPackSize(option)}
                      >
                        <div className="flex justify-between items-center">
                          <span>{option.size}</span>
                          <span className="font-medium">{option.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Request Dialog */}
                <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full">Request Quote</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Request a Quote</DialogTitle>
                      <DialogDescription>
                        Fill out the form below to request a quote for {product.name}
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...quoteForm}>
                      <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-4">
                        <FormField
                          control={quoteForm.control}
                          name="name"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="email"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="company"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="quantity"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Quantity Required</FormLabel>
                              <FormControl>
                                <Input placeholder={`Enter quantity (${selectedPackSize.size})`} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="message"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Additional Requirements (Optional)</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Any specific requirements or questions?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Submit Quote Request</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>

                {/* Technical Support Dialog */}
                <Dialog open={isSupportDialogOpen} onOpenChange={setIsSupportDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Technical Support</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Technical Support</DialogTitle>
                      <DialogDescription>
                        Need technical assistance? Fill out the form below and our experts will get back to you.
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...supportForm}>
                      <form onSubmit={supportForm.handleSubmit(onSupportSubmit)} className="space-y-4">
                        <FormField
                          control={supportForm.control}
                          name="name"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={supportForm.control}
                          name="email"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={supportForm.control}
                          name="subject"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Brief description of your inquiry" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={supportForm.control}
                          name="message"
                          render={({ field }: { field: FormFieldProps['field'] }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your technical question or issue in detail" 
                                  className="min-h-[100px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Submit Support Request</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 
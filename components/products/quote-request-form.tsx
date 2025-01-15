"use client"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Product, PackagingSize } from "@/types/product"

interface QuoteRequestFormProps {
  product: Product
  onSuccess?: () => void
  onCancel?: () => void
}

export default function QuoteRequestForm({ 
  product, 
  onSuccess,
  onCancel 
}: QuoteRequestFormProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPackaging, setSelectedPackaging] = useState<string>("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      productId: product.id,
      productName: product.name,
      packagingSize: selectedPackaging,
      quantity: formData.get("quantity"),
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      notes: formData.get("notes"),
    }

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit quote request")
      }

      toast({
        title: "Quote Request Submitted",
        description: "We'll get back to you with a quote soon.",
      })

      onSuccess?.()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="packaging">Packaging Size</Label>
          <Select
            value={selectedPackaging}
            onValueChange={setSelectedPackaging}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select packaging size" />
            </SelectTrigger>
            <SelectContent>
              {product.packagingSizes.map((size: PackagingSize) => (
                <SelectItem key={size.id} value={size.id}>
                  {size.size} {size.unit} ({size.sku})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            required
          />
        </div>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
          />
        </div>

        <div>
          <Label htmlFor="company">Company/Institution</Label>
          <Input
            id="company"
            name="company"
            type="text"
            required
          />
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Any specific requirements or questions?"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          className="flex-1"
          disabled={isLoading || !selectedPackaging}
        >
          {isLoading ? "Submitting..." : "Request Quote"}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
} 
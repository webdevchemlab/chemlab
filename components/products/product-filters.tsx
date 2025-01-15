"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Search } from "lucide-react"
import type { ProductCategory } from "@/types/product"

interface ProductFiltersProps {
  categories: {
    id: ProductCategory
    name: string
  }[]
}

export default function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const currentCategory = searchParams.get("category")
  const currentSearch = searchParams.get("search")

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const search = formData.get("search") as string
    const category = formData.get("category") as ProductCategory | undefined

    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (category) params.set("category", category)

    router.push(`/products?${params.toString()}`)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Search */}
      <div className="space-y-4">
        <h3 className="font-medium">Search</h3>
        <div className="flex gap-2">
          <Input
            name="search"
            placeholder="Search products..."
            defaultValue={currentSearch ?? ""}
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-medium">Categories</h3>
        <RadioGroup
          name="category"
          defaultValue={currentCategory ?? ""}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="" id="category-all" />
            <Label htmlFor="category-all">All Categories</Label>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <RadioGroupItem value={category.id} id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Manufacturers */}
      <div className="space-y-4">
        <h3 className="font-medium">Manufacturers</h3>
        <RadioGroup
          name="manufacturer"
          defaultValue={searchParams.get("manufacturer") ?? ""}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="" id="manufacturer-all" />
            <Label htmlFor="manufacturer-all">All Manufacturers</Label>
          </div>
          {["Merck", "Sigma-Aldrich", "Honeywell", "SRL", "Thermo Fisher"].map((manufacturer) => (
            <div key={manufacturer} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={manufacturer.toLowerCase()} 
                id={`manufacturer-${manufacturer.toLowerCase()}`} 
              />
              <Label htmlFor={`manufacturer-${manufacturer.toLowerCase()}`}>
                {manufacturer}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </form>
  )
} 
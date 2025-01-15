"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BeakerIcon, FilterIcon, SearchIcon } from "lucide-react"

// Mock data - replace with actual data from your backend
const products = [
  {
    id: 1,
    name: "Sodium Chloride",
    casNumber: "7647-14-5",
    manufacturer: "Merck",
    purity: "99.5%",
    grade: "ACS",
    category: "Inorganic Chemicals",
    packagingSizes: ["500g", "1kg", "5kg"],
  },
  // Add more mock products here
]

const manufacturers = ["All", "Merck", "Sigma Aldrich", "SRL", "Honeywell", "Thermo Fisher", "Borosil"]
const categories = ["All", "Organic Chemicals", "Inorganic Chemicals", "Solvents", "Reagents", "Lab Equipment", "Glassware"]
const grades = ["All", "ACS", "USP", "BP", "EP", "LR", "AR"]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedManufacturer, setSelectedManufacturer] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedGrade, setSelectedGrade] = useState("All")

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Products</h1>
          <p className="mt-2 text-muted-foreground">
            Browse our extensive range of high-quality chemicals and laboratory supplies
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, CAS number, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Button variant="outline" className="sm:w-auto w-full">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
              <SelectTrigger>
                <SelectValue placeholder="Manufacturer" />
              </SelectTrigger>
              <SelectContent>
                {manufacturers.map((manufacturer) => (
                  <SelectItem key={manufacturer} value={manufacturer}>
                    {manufacturer}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BeakerIcon className="h-5 w-5 text-blue-500" />
                  <span>{product.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CAS Number:</span>
                    <span className="font-medium">{product.casNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Manufacturer:</span>
                    <span className="font-medium">{product.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Purity:</span>
                    <span className="font-medium">{product.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grade:</span>
                    <span className="font-medium">{product.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 
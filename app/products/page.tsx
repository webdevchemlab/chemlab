"use client"

import { useState } from "react"
import type { NextPage } from "next"
import Link from "next/link"
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
import { BeakerIcon } from "lucide-react"

// Mock data - replace with actual data from your backend
const products = [
  {
    id: "1",
    name: "Sodium Chloride",
    casNumber: "7647-14-5",
    manufacturer: "Sigma Aldrich",
    purity: "99.5%",
    grade: "ACS",
    category: "Inorganic Chemicals",
    price: "$45.00",
    packSize: "500g"
  },
  {
    id: "2",
    name: "Ethanol",
    casNumber: "64-17-5",
    manufacturer: "Merck",
    purity: "99.9%",
    grade: "HPLC",
    category: "Solvents",
    price: "$52.00",
    packSize: "1L"
  },
  {
    id: "3",
    name: "Sulfuric Acid",
    casNumber: "7664-93-9",
    manufacturer: "SRL",
    purity: "98%",
    grade: "AR",
    category: "Acids",
    price: "$38.00",
    packSize: "2.5L"
  }
]

const ProductsPage: NextPage = () => {
  const [search, setSearch] = useState("")
  const [manufacturer, setManufacturer] = useState("all")
  const [category, setCategory] = useState("all")
  const [grade, setGrade] = useState("all")

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.casNumber.includes(search)
    const matchesManufacturer = manufacturer === "all" || product.manufacturer === manufacturer
    const matchesCategory = category === "all" || product.category === category
    const matchesGrade = grade === "all" || product.grade === grade

    return matchesSearch && matchesManufacturer && matchesCategory && matchesGrade
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Input
                placeholder="Search by name or CAS number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-4"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Select value={manufacturer} onValueChange={setManufacturer}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Manufacturer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Manufacturers</SelectItem>
                <SelectItem value="Sigma Aldrich">Sigma Aldrich</SelectItem>
                <SelectItem value="Merck">Merck</SelectItem>
                <SelectItem value="SRL">SRL</SelectItem>
              </SelectContent>
            </Select>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Inorganic Chemicals">Inorganic Chemicals</SelectItem>
                <SelectItem value="Solvents">Solvents</SelectItem>
                <SelectItem value="Acids">Acids</SelectItem>
              </SelectContent>
            </Select>
            <Select value={grade} onValueChange={setGrade}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="ACS">ACS</SelectItem>
                <SelectItem value="HPLC">HPLC</SelectItem>
                <SelectItem value="AR">AR</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BeakerIcon className="h-5 w-5 text-blue-500" />
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CAS Number:</span>
                    <span>{product.casNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Manufacturer:</span>
                    <span>{product.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Purity:</span>
                    <span>{product.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grade:</span>
                    <span>{product.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pack Size:</span>
                    <span>{product.packSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/products/${product.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage 
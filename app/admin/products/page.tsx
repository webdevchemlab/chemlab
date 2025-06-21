"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { 
  Plus,
  Upload,
  Download,
  Edit,
  Trash2,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  FileText,
  Package,
  FlaskConical,
  Atom,
  Beaker,
  TestTube,
  Microscope,
  Thermometer,
  Settings,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  EyeOff
} from "lucide-react"
import { products as existingProducts } from "@/data/products"
import { categories } from "@/data/categories"
import { Product, ProductCategory } from "@/types/product"

interface ProductForm {
  id: string
  name: string
  casNumber: string
  manufacturer: string
  description: string
  category: ProductCategory
  subCategory?: string
  purity?: string
  grade?: string
  packagingSizes: Array<{
    id: string
    size: string
    unit: string
    sku: string
    price?: number
  }>
  specifications: string[]
  applications: string[]
  msdsUrl: string
  imageUrl?: string
  inStock: boolean
  featured: boolean
}

const manufacturers = [
  "Sigma-Aldrich",
  "Merck",
  "Thermo Fisher",
  "SRL",
  "Honeywell",
  "VWR",
  "Borosil",
  "Other"
]

const grades = [
  "ACS Reagent",
  "HPLC",
  "Analytical Reagent",
  "Laboratory Reagent",
  "Certified Reference Material",
  "Technical Grade",
  "Other"
]

const units = ["g", "kg", "mL", "L", "mg", "μg"]

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(existingProducts)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(existingProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState<ProductForm>({
    id: "",
    name: "",
    casNumber: "",
    manufacturer: "",
    description: "",
    category: "organic-chemicals",
    subCategory: "",
    purity: "",
    grade: "",
    packagingSizes: [{ id: "", size: "", unit: "g", sku: "" }],
    specifications: [""],
    applications: [""],
    msdsUrl: "",
    imageUrl: "",
    inStock: true,
    featured: false
  })

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.casNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory])

  const handleAddPackagingSize = () => {
    setFormData(prev => ({
      ...prev,
      packagingSizes: [...prev.packagingSizes, { id: "", size: "", unit: "g", sku: "" }]
    }))
  }

  const handleRemovePackagingSize = (index: number) => {
    setFormData(prev => ({
      ...prev,
      packagingSizes: prev.packagingSizes.filter((_, i) => i !== index)
    }))
  }

  const handleUpdatePackagingSize = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      packagingSizes: prev.packagingSizes.map((size, i) =>
        i === index ? { ...size, [field]: value } : size
      )
    }))
  }

  const handleAddSpecification = () => {
    setFormData(prev => ({
      ...prev,
      specifications: [...prev.specifications, ""]
    }))
  }

  const handleRemoveSpecification = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index)
    }))
  }

  const handleUpdateSpecification = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.map((spec, i) =>
        i === index ? value : spec
      )
    }))
  }

  const handleAddApplication = () => {
    setFormData(prev => ({
      ...prev,
      applications: [...prev.applications, ""]
    }))
  }

  const handleRemoveApplication = (index: number) => {
    setFormData(prev => ({
      ...prev,
      applications: prev.applications.filter((_, i) => i !== index)
    }))
  }

  const handleUpdateApplication = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      applications: prev.applications.map((app, i) =>
        i === index ? value : app
      )
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newProduct: Product = {
      ...formData,
      packagingSizes: formData.packagingSizes.filter(size => size.size && size.sku),
      specifications: formData.specifications.filter(spec => spec.trim()),
      applications: formData.applications.filter(app => app.trim())
    }

    if (editingProduct) {
      // Update existing product
      const updatedProducts = products.map(p => p.id === editingProduct.id ? newProduct : p)
      setProducts(updatedProducts)
      setEditingProduct(null)
    } else {
      // Add new product
      setProducts([...products, newProduct])
    }

    setShowForm(false)
    resetForm()
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      id: product.id,
      name: product.name,
      casNumber: product.casNumber,
      manufacturer: product.manufacturer,
      description: product.description,
      category: product.category,
      subCategory: product.subCategory || "",
      purity: product.purity || "",
      grade: product.grade || "",
      packagingSizes: product.packagingSizes.length > 0 ? product.packagingSizes : [{ id: "", size: "", unit: "g", sku: "" }],
      specifications: product.specifications && product.specifications.length > 0 ? product.specifications : [""],
      applications: product.applications && product.applications.length > 0 ? product.applications : [""],
      msdsUrl: product.msdsUrl,
      imageUrl: product.imageUrl || "",
      inStock: product.inStock,
      featured: product.featured || false
    })
    setShowForm(true)
  }

  const handleDelete = (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== productId))
    }
  }

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      casNumber: "",
      manufacturer: "",
      description: "",
      category: "organic-chemicals",
      subCategory: "",
      purity: "",
      grade: "",
      packagingSizes: [{ id: "", size: "", unit: "g", sku: "" }],
      specifications: [""],
      applications: [""],
      msdsUrl: "",
      imageUrl: "",
      inStock: true,
      featured: false
    })
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(products, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'products.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedProducts = JSON.parse(e.target?.result as string)
          setProducts(importedProducts)
        } catch (error) {
          alert('Error importing products. Please check the file format.')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Container className="py-8">
        {/* Header */}
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: "Admin", href: "/admin" },
              { label: "Products", href: "/admin/products" }
            ]} 
          />
          
          <div className="flex items-center justify-between mt-4">
            <div>
              <GradientText
                colors={["#60A5FA", "#34D399", "#60A5FA"]}
                className="text-3xl font-bold mb-2"
                animationSpeed={8}
              >
                Product Management
              </GradientText>
              <p className="text-slate-400">Manage your chemical products inventory</p>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={() => setShowForm(true)}
                className="bg-cyan-500 hover:bg-cyan-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6 bg-slate-900/50 border-slate-800/50">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-slate-800/50 border-slate-700 text-slate-200">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all" className="text-slate-200">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id} className="text-slate-200">
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="bg-slate-800/50 border-slate-700 text-slate-200"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="bg-slate-800/50 border-slate-700 text-slate-200"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Import/Export */}
        <Card className="mb-6 bg-slate-900/50 border-slate-800/50">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-200 mb-2">Import Products</label>
                <div className="flex gap-2">
                  <Input
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    className="bg-slate-800/50 border-slate-700 text-slate-200"
                  />
                  <Button variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-200">
                    <Download className="h-4 w-4 mr-2" />
                    Import
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-200 mb-2">Export Products</label>
                <Button
                  onClick={handleExport}
                  variant="outline"
                  className="w-full bg-slate-800/50 border-slate-700 text-slate-200"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Export JSON
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 rounded-lg border border-slate-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-100">
                      {editingProduct ? "Edit Product" : "Add New Product"}
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setShowForm(false)
                        setEditingProduct(null)
                        resetForm()
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">Product Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Sodium Chloride"
                          className="bg-slate-800/50 border-slate-700 text-slate-200"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">CAS Number *</label>
                        <Input
                          value={formData.casNumber}
                          onChange={(e) => setFormData({ ...formData, casNumber: e.target.value })}
                          placeholder="e.g., 7647-14-5"
                          className="bg-slate-800/50 border-slate-700 text-slate-200"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">Manufacturer *</label>
                        <Select value={formData.manufacturer} onValueChange={(value) => setFormData({ ...formData, manufacturer: value })}>
                          <SelectTrigger className="bg-slate-800/50 border-slate-700 text-slate-200">
                            <SelectValue placeholder="Select manufacturer" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            {manufacturers.map((manufacturer) => (
                              <SelectItem key={manufacturer} value={manufacturer} className="text-slate-200">
                                {manufacturer}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">Category *</label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value as ProductCategory })}>
                          <SelectTrigger className="bg-slate-800/50 border-slate-700 text-slate-200">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id} className="text-slate-200">
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">Purity</label>
                        <Input
                          value={formData.purity}
                          onChange={(e) => setFormData({ ...formData, purity: e.target.value })}
                          placeholder="e.g., ≥99.5%"
                          className="bg-slate-800/50 border-slate-700 text-slate-200"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">Grade</label>
                        <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
                          <SelectTrigger className="bg-slate-800/50 border-slate-700 text-slate-200">
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            {grades.map((grade) => (
                              <SelectItem key={grade} value={grade} className="text-slate-200">
                                {grade}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="inStock"
                          checked={formData.inStock}
                          onCheckedChange={(checked) => setFormData({ ...formData, inStock: checked as boolean })}
                        />
                        <label htmlFor="inStock" className="text-sm text-slate-300">In Stock</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="featured"
                          checked={formData.featured}
                          onCheckedChange={(checked) => setFormData({ ...formData, featured: checked as boolean })}
                        />
                        <label htmlFor="featured" className="text-sm text-slate-300">Featured Product</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Description *</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Product description..."
                      className="bg-slate-800/50 border-slate-700 text-slate-200 min-h-[100px]"
                      required
                    />
                  </div>
                  
                  {/* Packaging Sizes */}
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Packaging Sizes</label>
                    <div className="space-y-3">
                      {formData.packagingSizes.map((size, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="Size"
                            value={size.size}
                            onChange={(e) => handleUpdatePackagingSize(index, "size", e.target.value)}
                            className="bg-slate-800/50 border-slate-700 text-slate-200"
                          />
                          <Select value={size.unit} onValueChange={(value) => handleUpdatePackagingSize(index, "unit", value)}>
                            <SelectTrigger className="w-20 bg-slate-800/50 border-slate-700 text-slate-200">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-slate-700">
                              {units.map((unit) => (
                                <SelectItem key={unit} value={unit} className="text-slate-200">
                                  {unit}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input
                            placeholder="SKU"
                            value={size.sku}
                            onChange={(e) => handleUpdatePackagingSize(index, "sku", e.target.value)}
                            className="bg-slate-800/50 border-slate-700 text-slate-200"
                          />
                          {formData.packagingSizes.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemovePackagingSize(index)}
                              className="bg-slate-800/50 border-slate-700 text-slate-200"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddPackagingSize}
                        className="bg-slate-800/50 border-slate-700 text-slate-200"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Size
                      </Button>
                    </div>
                  </div>
                  
                  {/* Specifications */}
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Specifications</label>
                    <div className="space-y-3">
                      {formData.specifications.map((spec, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="Specification"
                            value={spec}
                            onChange={(e) => handleUpdateSpecification(index, e.target.value)}
                            className="bg-slate-800/50 border-slate-700 text-slate-200"
                          />
                          {formData.specifications.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemoveSpecification(index)}
                              className="bg-slate-800/50 border-slate-700 text-slate-200"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddSpecification}
                        className="bg-slate-800/50 border-slate-700 text-slate-200"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Specification
                      </Button>
                    </div>
                  </div>
                  
                  {/* Applications */}
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Applications</label>
                    <div className="space-y-3">
                      {formData.applications.map((app, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="Application"
                            value={app}
                            onChange={(e) => handleUpdateApplication(index, e.target.value)}
                            className="bg-slate-800/50 border-slate-700 text-slate-200"
                          />
                          {formData.applications.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemoveApplication(index)}
                              className="bg-slate-800/50 border-slate-700 text-slate-200"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddApplication}
                        className="bg-slate-800/50 border-slate-700 text-slate-200"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Application
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">MSDS URL</label>
                      <Input
                        value={formData.msdsUrl}
                        onChange={(e) => setFormData({ ...formData, msdsUrl: e.target.value })}
                        placeholder="/msds/product-name.pdf"
                        className="bg-slate-800/50 border-slate-700 text-slate-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Image URL</label>
                      <Input
                        value={formData.imageUrl}
                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                        placeholder="/images/products/product.svg"
                        className="bg-slate-800/50 border-slate-700 text-slate-200"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-slate-800">
                    <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600">
                      <Save className="h-4 w-4 mr-2" />
                      {editingProduct ? "Update Product" : "Add Product"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowForm(false)
                        setEditingProduct(null)
                        resetForm()
                      }}
                      className="bg-slate-800/50 border-slate-700 text-slate-200"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-slate-400">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          {viewMode === "grid" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-sm text-slate-400">{product.casNumber}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(product)}
                            className="text-slate-400 hover:text-cyan-400"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(product.id)}
                            className="text-slate-400 hover:text-red-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {product.manufacturer}
                        </Badge>
                        <Badge variant={product.inStock ? "default" : "secondary"} className="text-xs">
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                        {product.featured && (
                          <Badge variant="default" className="text-xs bg-cyan-500">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <div className="text-sm text-slate-400">
                        <p><strong>Category:</strong> {categories.find(c => c.id === product.category)?.name}</p>
                        {product.purity && <p><strong>Purity:</strong> {product.purity}</p>}
                        {product.grade && <p><strong>Grade:</strong> {product.grade}</p>}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold text-slate-100">{product.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {product.casNumber}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-400 mt-1">{product.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {product.manufacturer}
                            </Badge>
                            <Badge variant={product.inStock ? "default" : "secondary"} className="text-xs">
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                            {product.featured && (
                              <Badge variant="default" className="text-xs bg-cyan-500">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(product)}
                            className="bg-slate-800/50 border-slate-700 text-slate-200"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(product.id)}
                            className="bg-slate-800/50 border-slate-700 text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
} 
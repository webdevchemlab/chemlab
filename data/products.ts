export interface Product {
  id: string
  name: string
  brand: string
  category: string
  subcategory: string
  catalogNumber: string
  description: string
  image: string
  fallbackImage: string
  specifications: {
    grade?: string
    purity?: string
    packaging?: string
    casNumber?: string
    molecularWeight?: string
    meltingPoint?: string
    boilingPoint?: string
    density?: string
    form?: string
    concentration?: string
    solubility?: string
    storage?: string
    hazards?: string[]
    applications?: string[]
  }
  price?: {
    value: number
    currency: string
    unit: string
  }
  stock?: {
    status: 'in-stock' | 'low-stock' | 'out-of-stock'
    quantity?: number
    unit?: string
  }
}

export const featuredProducts: Product[] = [
  {
    id: "sodium-chloride-ar",
    name: "Sodium Chloride AR Grade",
    brand: "SRL",
    category: "fine-chemicals",
    subcategory: "Inorganic Chemicals",
    catalogNumber: "192800",
    description: "High purity sodium chloride suitable for analytical research. This AR grade product ensures reliable results in your analytical procedures.",
    image: "/images/products/chemicals/sodium-chloride.jpg",
    fallbackImage: "/images/products/placeholder-chemical.jpg",
    specifications: {
      grade: "AR Grade",
      purity: "≥99.5%",
      packaging: "500g",
      casNumber: "7647-14-5",
      molecularWeight: "58.44 g/mol",
      meltingPoint: "801°C",
      form: "Crystalline Powder",
      solubility: "Soluble in water",
      storage: "Store in a cool, dry place",
      hazards: ["Irritant"],
      applications: ["Analytical Chemistry", "Food Analysis", "General Laboratory Use"]
    },
    price: {
      value: 250,
      currency: "INR",
      unit: "500g"
    },
    stock: {
      status: "in-stock",
      quantity: 100,
      unit: "bottles"
    }
  },
  {
    id: "methanol-hplc",
    name: "Methanol HPLC Grade",
    brand: "SRL",
    category: "analytical-reagents",
    subcategory: "HPLC Solvents",
    catalogNumber: "138650",
    description: "Ultra pure methanol specially purified and tested for HPLC applications. Ensures reliable chromatographic separations.",
    image: "/images/products/chemicals/methanol-hplc.jpg",
    fallbackImage: "/images/products/placeholder-chemical.jpg",
    specifications: {
      grade: "HPLC Grade",
      purity: "≥99.9%",
      packaging: "2.5L",
      casNumber: "67-56-1",
      molecularWeight: "32.04 g/mol",
      boilingPoint: "64.7°C",
      density: "0.791-0.793 g/mL at 20°C",
      form: "Liquid",
      storage: "Store in a cool place",
      hazards: ["Highly Flammable", "Toxic"],
      applications: ["HPLC Analysis", "Spectroscopy", "General Laboratory Use"]
    },
    price: {
      value: 1200,
      currency: "INR",
      unit: "2.5L"
    },
    stock: {
      status: "in-stock",
      quantity: 50,
      unit: "bottles"
    }
  },
  {
    id: "peptone-bacteriological",
    name: "Peptone Bacteriological",
    brand: "SRL",
    category: "life-science",
    subcategory: "Culture Media",
    catalogNumber: "164321",
    description: "High-quality peptone for microbiological culture media. Ensures optimal growth of microorganisms.",
    image: "/images/products/life-science/peptone.jpg",
    fallbackImage: "/images/products/placeholder-chemical.jpg",
    specifications: {
      grade: "Bacteriological Grade",
      form: "Powder",
      packaging: "500g",
      solubility: "Soluble in water",
      storage: "Store at 2-8°C",
      applications: ["Microbiology", "Cell Culture", "Fermentation"]
    },
    price: {
      value: 1800,
      currency: "INR",
      unit: "500g"
    },
    stock: {
      status: "low-stock",
      quantity: 10,
      unit: "bottles"
    }
  }
]

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return featuredProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.subcategory.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.catalogNumber.toLowerCase().includes(searchTerm) ||
      product.specifications.casNumber?.toLowerCase().includes(searchTerm)
    )
  })
}
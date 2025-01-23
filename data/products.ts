import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "sodium-chloride",
    name: "Sodium Chloride",
    casNumber: "7647-14-5",
    manufacturer: "Sigma-Aldrich",
    description: "High purity sodium chloride suitable for analytical and laboratory use.",
    category: "inorganic-chemicals",
    purity: "≥99.5%",
    grade: "ACS Reagent",
    packagingSizes: [
      { id: "nacl-500g", size: "500", unit: "g", sku: "S7653-500G" },
      { id: "nacl-1kg", size: "1", unit: "kg", sku: "S7653-1KG" }
    ],
    specifications: [
      "Assay: ≥99.5%",
      "Heavy Metals: ≤5 ppm",
      "Loss on Drying: ≤0.5%"
    ],
    applications: [
      "Buffer preparation",
      "General laboratory use",
      "Food analysis"
    ],
    msdsUrl: "/msds/sodium-chloride.pdf",
    imageUrl: "/images/products/sodium-chloride.svg",
    inStock: true,
    featured: true
  },
  {
    id: "methanol",
    name: "Methanol",
    casNumber: "67-56-1",
    manufacturer: "Merck",
    description: "HPLC grade methanol for analytical and chromatography applications.",
    category: "solvents",
    purity: "≥99.9%",
    grade: "HPLC",
    packagingSizes: [
      { id: "meoh-1l", size: "1", unit: "L", sku: "M1234-1L" },
      { id: "meoh-2.5l", size: "2.5", unit: "L", sku: "M1234-2.5L" }
    ],
    specifications: [
      "Purity (GC): ≥99.9%",
      "Water Content: ≤0.03%",
      "Residue after Evaporation: ≤0.0005%"
    ],
    applications: [
      "HPLC mobile phase",
      "Analytical chemistry",
      "Organic synthesis"
    ],
    msdsUrl: "/msds/methanol.pdf",
    imageUrl: "/images/products/methanol.svg",
    inStock: true
  }
]

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.casNumber.toLowerCase().includes(searchTerm)
  )
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductCategories = () => [
  { id: "organic-chemicals", name: "Organic Chemicals" },
  { id: "inorganic-chemicals", name: "Inorganic Chemicals" },
  { id: "solvents", name: "Solvents" },
  { id: "reagents", name: "Reagents" },
  { id: "analytical-standards", name: "Analytical Standards" },
  { id: "laboratory-glassware", name: "Laboratory Glassware" }
]
import { ProductDetails } from "@/components/products/product-details"

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
    packSize: "500g",
    molecularFormula: "NaCl",
    molecularWeight: "58.44 g/mol",
    description: "High purity sodium chloride suitable for analytical and laboratory use. Meets American Chemical Society (ACS) specifications.",
    specifications: {
      appearance: "White crystalline powder",
      solubility: "Soluble in water",
      ph: "5.0-8.0 (5% solution)",
      density: "2.17 g/cm³",
      meltingPoint: "801°C",
      boilingPoint: "1413°C"
    },
    safetyInfo: {
      hazardStatements: [
        "H319 - Causes serious eye irritation"
      ],
      precautionaryStatements: [
        "P264 - Wash hands thoroughly after handling",
        "P280 - Wear protective gloves/protective clothing/eye protection/face protection",
        "P305+P351+P338 - IF IN EYES: Rinse cautiously with water for several minutes"
      ],
      storage: "Store in a dry place. Keep container tightly closed.",
      disposal: "Dispose of contents/container in accordance with local/regional/national regulations."
    },
    packagingOptions: [
      { size: "500g", price: "$45.00" },
      { size: "1kg", price: "$80.00" },
      { size: "2.5kg", price: "$175.00" }
    ],
    documents: {
      sds: "/documents/sodium-chloride-sds.pdf",
      coa: "/documents/sodium-chloride-coa.pdf",
      specification: "/documents/sodium-chloride-spec.pdf"
    }
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
    packSize: "1L",
    molecularFormula: "C2H5OH",
    molecularWeight: "46.07 g/mol",
    description: "High purity ethanol suitable for HPLC applications. Low water content and residue.",
    specifications: {
      appearance: "Clear colorless liquid",
      solubility: "Miscible with water",
      density: "0.789 g/cm³",
      boilingPoint: "78.3°C",
      purity: "≥99.9%"
    },
    safetyInfo: {
      hazardStatements: [
        "H225 - Highly flammable liquid and vapor"
      ],
      precautionaryStatements: [
        "P210 - Keep away from heat/sparks/open flames/hot surfaces",
        "P233 - Keep container tightly closed",
        "P403 - Store in a well-ventilated place"
      ],
      storage: "Store in a cool, well-ventilated place.",
      disposal: "Dispose of contents/container in accordance with local regulations."
    },
    packagingOptions: [
      { size: "1L", price: "$52.00" },
      { size: "2.5L", price: "$115.00" },
      { size: "4L", price: "$180.00" }
    ],
    documents: {
      sds: "/documents/ethanol-sds.pdf",
      coa: "/documents/ethanol-coa.pdf",
      specification: "/documents/ethanol-spec.pdf"
    }
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
    packSize: "2.5L",
    molecularFormula: "H2SO4",
    molecularWeight: "98.08 g/mol",
    description: "Analytical grade sulfuric acid suitable for general laboratory use and analytical applications.",
    specifications: {
      appearance: "Clear colorless liquid",
      concentration: "98%",
      density: "1.84 g/cm³",
      boilingPoint: "337°C",
      meltingPoint: "10°C"
    },
    safetyInfo: {
      hazardStatements: [
        "H314 - Causes severe skin burns and eye damage"
      ],
      precautionaryStatements: [
        "P280 - Wear protective gloves/protective clothing/eye protection/face protection",
        "P301+P330+P331 - IF SWALLOWED: Rinse mouth. Do NOT induce vomiting",
        "P305+P351+P338 - IF IN EYES: Rinse cautiously with water for several minutes"
      ],
      storage: "Store locked up in a well-ventilated place.",
      disposal: "Dispose of contents/container at a licensed waste disposal facility."
    },
    packagingOptions: [
      { size: "2.5L", price: "$38.00" },
      { size: "5L", price: "$70.00" },
      { size: "10L", price: "$130.00" }
    ],
    documents: {
      sds: "/documents/sulfuric-acid-sds.pdf",
      coa: "/documents/sulfuric-acid-coa.pdf",
      specification: "/documents/sulfuric-acid-spec.pdf"
    }
  }
]

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id) || products[0]
  return <ProductDetails product={product} />
} 
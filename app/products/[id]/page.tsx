import type { Metadata } from "next"
import { ProductDetails } from "@/components/products/product-details"

export interface Product {
  id: string;
  name: string;
  casNumber: string;
  manufacturer: string;
  purity: string;
  grade: string;
  category: string;
  price: string;
  packSize: string;
  molecularFormula: string;
  molecularWeight: string;
  specifications: {
    appearance: string;
    solubility: string;
    ph: string;
    density: string;
    meltingPoint: string;
    boilingPoint: string;
  };
  safetyInfo: {
    hazards: string[];
    precautions: string[];
    storage: string[];
  };
  packagingOptions: {
    size: string;
    price: string;
  }[];
  documents: {
    name: string;
    url: string;
    type: "SDS" | "COA" | "Specification" | "Technical Data" | "Other";
    fileSize?: string;
  }[];
}

const products: Product[] = [
  {
    id: "1",
    name: "Sodium Chloride",
    casNumber: "7647-14-5",
    manufacturer: "Sigma-Aldrich",
    purity: "99.5%",
    grade: "ACS Reagent",
    category: "Inorganic Salts",
    price: "45.00",
    packSize: "500g",
    molecularFormula: "NaCl",
    molecularWeight: "58.44 g/mol",
    specifications: {
      appearance: "White crystalline solid",
      solubility: "360 g/L in water at 20°C",
      ph: "5.0-8.0 (5% solution)",
      density: "2.17 g/cm³",
      meltingPoint: "801°C",
      boilingPoint: "1413°C"
    },
    safetyInfo: {
      hazards: ["May cause eye irritation", "May cause respiratory irritation"],
      precautions: ["Wear protective gloves", "Use in well-ventilated area"],
      storage: ["Store in a dry place", "Keep container tightly closed"]
    },
    packagingOptions: [
      { size: "100g", price: "12.00" },
      { size: "500g", price: "45.00" },
      { size: "1kg", price: "80.00" }
    ],
    documents: [
      { name: "Safety Data Sheet", url: "/docs/sds-nacl.pdf", type: "SDS", fileSize: "2.1 MB" },
      { name: "Certificate of Analysis", url: "/docs/coa-nacl.pdf", type: "COA", fileSize: "1.5 MB" }
    ]
  },
  {
    id: "2",
    name: "Potassium Chloride",
    casNumber: "7647-14-5",
    manufacturer: "Sigma-Aldrich",
    purity: "99.5%",
    grade: "ACS Reagent",
    category: "Inorganic Salts",
    price: "45.00",
    packSize: "500g",
    molecularFormula: "NaCl",
    molecularWeight: "58.44 g/mol",
    specifications: {
      appearance: "White crystalline solid",
      solubility: "360 g/L in water at 20°C",
      ph: "5.0-8.0 (5% solution)",
      density: "2.17 g/cm³",
      meltingPoint: "801°C",
      boilingPoint: "1413°C"
    },
    safetyInfo: {
      hazards: ["May cause eye irritation", "May cause respiratory irritation"],
      precautions: ["Wear protective gloves", "Use in well-ventilated area"],
      storage: ["Store in a dry place", "Keep container tightly closed"]
    },
    packagingOptions: [
      { size: "100g", price: "12.00" },
      { size: "500g", price: "45.00" },
      { size: "1kg", price: "80.00" }
    ],
    documents: [
      { name: "Safety Data Sheet", url: "/docs/sds-kcl.pdf", type: "SDS", fileSize: "2.1 MB" },
      { name: "Certificate of Analysis", url: "/docs/coa-kcl.pdf", type: "COA", fileSize: "1.5 MB" }
    ]
  }
]

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find(p => p.id === params.id) || products[0]
  
  return {
    title: `${product.name} | ChemLab Synthesis`,
    description: `Buy ${product.name} (${product.casNumber}) - ${product.grade} grade, ${product.purity} purity. Available in various pack sizes from ${product.manufacturer}.`,
    keywords: `${product.name}, ${product.casNumber}, ${product.category}, ${product.manufacturer}, chemical supplier`,
    openGraph: {
      title: `${product.name} | ChemLab Synthesis`,
      description: `Buy ${product.name} (${product.casNumber}) - ${product.grade} grade, ${product.purity} purity.`,
      type: "website",
    },
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id) || products[0]
  return <ProductDetails product={product} />
} 
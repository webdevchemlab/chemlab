import ProductList from "@/components/products/product-list"

// This will be replaced with actual data from PayloadCMS
const products = [
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
  },
  {
    id: "2",
    name: "Methanol",
    casNumber: "67-56-1",
    manufacturer: "Merck",
    purity: "99.9%",
    grade: "HPLC",
    category: "Solvents",
    price: "35.00",
    packSize: "1L",
  },
  {
    id: "3",
    name: "Sulfuric Acid",
    casNumber: "7664-93-9",
    manufacturer: "SRL",
    purity: "98%",
    grade: "AR",
    category: "Acids & Bases",
    price: "55.00",
    packSize: "2.5L",
  },
]

export default function ProductsPage() {
  return <ProductList products={products} />
} 
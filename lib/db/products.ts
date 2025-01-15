import { Product, ProductCategory } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Methanol",
    casNumber: "67-56-1",
    manufacturer: "Merck",
    description: "High purity methanol suitable for HPLC and general laboratory use. Meets ACS specifications.",
    category: "solvents",
    purity: "≥99.9%",
    grade: "HPLC Grade",
    packagingSizes: [
      { id: "1-1", size: "500", unit: "mL", sku: "M1234-500ML" },
      { id: "1-2", size: "1", unit: "L", sku: "M1234-1L" },
      { id: "1-3", size: "2.5", unit: "L", sku: "M1234-2.5L" }
    ],
    specifications: [
      "Purity (GC) ≥99.9%",
      "Water ≤0.02%",
      "Acidity ≤0.0003 meq/g",
      "Residue after evaporation ≤0.0005%"
    ],
    applications: [
      "HPLC mobile phase",
      "General laboratory solvent",
      "Organic synthesis",
      "Extraction procedures"
    ],
    msdsUrl: "/msds/methanol.pdf",
    imageUrl: "/images/products/methanol.png",
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Sodium Chloride",
    casNumber: "7647-14-5",
    manufacturer: "Sigma-Aldrich",
    description: "High purity sodium chloride suitable for molecular biology and biochemical applications.",
    category: "inorganic-chemicals",
    purity: "≥99.5%",
    grade: "ACS Reagent",
    packagingSizes: [
      { id: "2-1", size: "500", unit: "g", sku: "S9625-500G" },
      { id: "2-2", size: "1", unit: "kg", sku: "S9625-1KG" },
      { id: "2-3", size: "5", unit: "kg", sku: "S9625-5KG" }
    ],
    specifications: [
      "Purity ≥99.5%",
      "Heavy metals ≤5 ppm",
      "Insoluble matter ≤0.005%"
    ],
    applications: [
      "Buffer preparation",
      "Cell culture media",
      "General laboratory use"
    ],
    msdsUrl: "/msds/sodium-chloride.pdf",
    imageUrl: "/images/products/sodium-chloride.png",
    inStock: true
  },
  {
    id: "3",
    name: "Acetonitrile",
    casNumber: "75-05-8",
    manufacturer: "Honeywell",
    description: "Ultra-pure acetonitrile for HPLC and UHPLC applications.",
    category: "solvents",
    purity: "≥99.9%",
    grade: "HPLC Grade",
    packagingSizes: [
      { id: "3-1", size: "1", unit: "L", sku: "A1234-1L" },
      { id: "3-2", size: "2.5", unit: "L", sku: "A1234-2.5L" },
      { id: "3-3", size: "4", unit: "L", sku: "A1234-4L" }
    ],
    specifications: [
      "Purity (GC) ≥99.9%",
      "Water ≤0.02%",
      "UV cutoff 190 nm"
    ],
    applications: [
      "HPLC mobile phase",
      "UHPLC applications",
      "Organic synthesis"
    ],
    msdsUrl: "/msds/acetonitrile.pdf",
    imageUrl: "/images/products/acetonitrile.png",
    inStock: true,
    featured: true
  }
];

export const getProducts = (filters?: {
  category?: ProductCategory;
  manufacturer?: string;
  search?: string;
}): Product[] => {
  let filteredProducts = [...products];

  if (filters) {
    if (filters.category) {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }
    if (filters.manufacturer) {
      filteredProducts = filteredProducts.filter(p => p.manufacturer === filters.manufacturer);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.casNumber.includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }
  }

  return filteredProducts;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductCategories = (): { id: ProductCategory; name: string; }[] => [
  { id: "organic-chemicals", name: "Organic Chemicals" },
  { id: "inorganic-chemicals", name: "Inorganic Chemicals" },
  { id: "solvents", name: "Solvents" },
  { id: "reagents", name: "Reagents" },
  { id: "analytical-standards", name: "Analytical Standards" },
  { id: "laboratory-glassware", name: "Laboratory Glassware" }
]; 
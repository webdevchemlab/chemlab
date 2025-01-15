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
    imageUrl: "/images/products/methanol.svg",
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
    imageUrl: "/images/products/sodium-chloride.svg",
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
    imageUrl: "/images/products/acetonitrile.svg",
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Sulfuric Acid",
    casNumber: "7664-93-9",
    manufacturer: "Merck",
    description: "High-quality sulfuric acid for analytical and laboratory applications.",
    category: "reagents",
    purity: "95-97%",
    grade: "ACS Reagent",
    packagingSizes: [
      { id: "4-1", size: "500", unit: "mL", sku: "S1234-500ML" },
      { id: "4-2", size: "2.5", unit: "L", sku: "S1234-2.5L" }
    ],
    specifications: [
      "Assay 95-97%",
      "Chloride (Cl) ≤0.2 ppm",
      "Heavy metals (as Pb) ≤0.5 ppm"
    ],
    applications: [
      "Analytical chemistry",
      "pH adjustment",
      "Industrial processes"
    ],
    msdsUrl: "/msds/sulfuric-acid.pdf",
    imageUrl: "/images/products/sulfuric-acid.svg",
    inStock: true
  },
  {
    id: "5",
    name: "Toluene",
    casNumber: "108-88-3",
    manufacturer: "Sigma-Aldrich",
    description: "High-purity toluene suitable for HPLC and spectroscopy applications.",
    category: "solvents",
    purity: "≥99.9%",
    grade: "HPLC",
    packagingSizes: [
      { id: "5-1", size: "1", unit: "L", sku: "T1234-1L" },
      { id: "5-2", size: "2.5", unit: "L", sku: "T1234-2.5L" }
    ],
    specifications: [
      "Purity (GC) ≥99.9%",
      "Water ≤0.03%",
      "Acidity/alkalinity ≤0.0002 meq/g"
    ],
    applications: [
      "HPLC applications",
      "Spectroscopy",
      "Organic synthesis"
    ],
    msdsUrl: "/msds/toluene.pdf",
    imageUrl: "/images/products/toluene.svg",
    inStock: true
  },
  {
    id: "6",
    name: "Volumetric Flask",
    casNumber: "N/A",
    manufacturer: "Borosil",
    description: "Class A borosilicate glass volumetric flask with excellent accuracy.",
    category: "laboratory-glassware",
    grade: "Class A",
    packagingSizes: [
      { id: "6-1", size: "100", unit: "mL", sku: "VF100-B" },
      { id: "6-2", size: "250", unit: "mL", sku: "VF250-B" },
      { id: "6-3", size: "500", unit: "mL", sku: "VF500-B" },
      { id: "6-4", size: "1000", unit: "mL", sku: "VF1000-B" }
    ],
    specifications: [
      "Borosilicate glass",
      "Class A accuracy",
      "Calibrated at 20°C",
      "Includes stopper"
    ],
    applications: [
      "Precise volume measurements",
      "Solution preparation",
      "Analytical procedures"
    ],
    msdsUrl: "/msds/borosilicate-glass.pdf",
    imageUrl: "/images/products/volumetric-flask.svg",
    inStock: true
  },
  {
    id: "7",
    name: "Potassium Permanganate",
    casNumber: "7722-64-7",
    manufacturer: "SRL",
    description: "High-purity potassium permanganate for analytical and oxidation reactions.",
    category: "inorganic-chemicals",
    purity: "≥99%",
    grade: "AR Grade",
    packagingSizes: [
      { id: "7-1", size: "100", unit: "g", sku: "PP100-S" },
      { id: "7-2", size: "500", unit: "g", sku: "PP500-S" }
    ],
    specifications: [
      "Assay ≥99%",
      "Chloride (Cl) ≤0.001%",
      "Sulfate (SO4) ≤0.02%"
    ],
    applications: [
      "Oxidation reactions",
      "Water treatment",
      "Analytical chemistry"
    ],
    msdsUrl: "/msds/potassium-permanganate.pdf",
    imageUrl: "/images/products/potassium-permanganate.svg",
    inStock: true
  },
  {
    id: "8",
    name: "pH Buffer Solution Set",
    casNumber: "N/A",
    manufacturer: "Thermo Fisher",
    description: "Certified pH buffer solutions for precise pH meter calibration.",
    category: "analytical-standards",
    grade: "Certified Reference",
    packagingSizes: [
      { id: "8-1", size: "500", unit: "mL", sku: "PBS-SET" }
    ],
    specifications: [
      "pH 4.01 ±0.02",
      "pH 7.00 ±0.02",
      "pH 10.01 ±0.02",
      "NIST traceable"
    ],
    applications: [
      "pH meter calibration",
      "Quality control",
      "Research applications"
    ],
    msdsUrl: "/msds/ph-buffers.pdf",
    imageUrl: "/images/products/ph-buffer.svg",
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
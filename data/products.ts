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
    inStock: true,
    featured: true
  },
  {
    id: "acetonitrile",
    name: "Acetonitrile",
    casNumber: "75-05-8",
    manufacturer: "Sigma-Aldrich",
    description: "HPLC grade acetonitrile for chromatography and analytical applications.",
    category: "solvents",
    purity: "≥99.9%",
    grade: "HPLC",
    packagingSizes: [
      { id: "acn-1l", size: "1", unit: "L", sku: "A998-1L" },
      { id: "acn-2.5l", size: "2.5", unit: "L", sku: "A998-2.5L" }
    ],
    specifications: [
      "Purity (GC): ≥99.9%",
      "Water Content: ≤0.02%",
      "Residue after Evaporation: ≤0.0005%"
    ],
    applications: [
      "HPLC mobile phase",
      "UV spectroscopy",
      "Organic synthesis"
    ],
    msdsUrl: "/msds/acetonitrile.pdf",
    imageUrl: "/images/products/acetonitrile.svg",
    inStock: true,
    featured: true
  },
  {
    id: "sulfuric-acid",
    name: "Sulfuric Acid",
    casNumber: "7664-93-9",
    manufacturer: "SRL",
    description: "Concentrated sulfuric acid for laboratory and industrial applications.",
    category: "inorganic-chemicals",
    purity: "95-98%",
    grade: "Laboratory Reagent",
    packagingSizes: [
      { id: "h2so4-500ml", size: "500", unit: "mL", sku: "SRL-500ML" },
      { id: "h2so4-1l", size: "1", unit: "L", sku: "SRL-1L" }
    ],
    specifications: [
      "Assay: 95-98%",
      "Heavy Metals: ≤5 ppm",
      "Iron: ≤0.5 ppm"
    ],
    applications: [
      "Acid-base reactions",
      "Dehydration reactions",
      "Industrial processes"
    ],
    msdsUrl: "/msds/sulfuric-acid.pdf",
    imageUrl: "/images/products/sulfuric-acid.svg",
    inStock: false,
    featured: false
  },
  {
    id: "toluene",
    name: "Toluene",
    casNumber: "108-88-3",
    manufacturer: "Merck",
    description: "Analytical grade toluene for laboratory and research applications.",
    category: "solvents",
    purity: "≥99.8%",
    grade: "Analytical Reagent",
    packagingSizes: [
      { id: "toluene-1l", size: "1", unit: "L", sku: "TOL-1L" },
      { id: "toluene-2.5l", size: "2.5", unit: "L", sku: "TOL-2.5L" }
    ],
    specifications: [
      "Purity (GC): ≥99.8%",
      "Water Content: ≤0.05%",
      "Non-volatile Matter: ≤0.001%"
    ],
    applications: [
      "Organic synthesis",
      "Solvent extraction",
      "Chromatography"
    ],
    msdsUrl: "/msds/toluene.pdf",
    imageUrl: "/images/products/toluene.svg",
    inStock: true,
    featured: false
  },
  {
    id: "potassium-permanganate",
    name: "Potassium Permanganate",
    casNumber: "7722-64-7",
    manufacturer: "SRL",
    description: "High purity potassium permanganate for analytical and laboratory use.",
    category: "inorganic-chemicals",
    purity: "≥99.0%",
    grade: "Analytical Reagent",
    packagingSizes: [
      { id: "kmno4-100g", size: "100", unit: "g", sku: "KMN-100G" },
      { id: "kmno4-500g", size: "500", unit: "g", sku: "KMN-500G" }
    ],
    specifications: [
      "Assay: ≥99.0%",
      "Insoluble Matter: ≤0.1%",
      "Chloride: ≤0.01%"
    ],
    applications: [
      "Oxidation reactions",
      "Water treatment",
      "Analytical chemistry"
    ],
    msdsUrl: "/msds/potassium-permanganate.pdf",
    imageUrl: "/images/products/potassium-permanganate.svg",
    inStock: true,
    featured: false
  },
  {
    id: "ph-buffer",
    name: "pH Buffer Solution",
    casNumber: "N/A",
    manufacturer: "Thermo Fisher",
    description: "Certified pH buffer solutions for calibration and quality control.",
    category: "reagents",
    purity: "Certified",
    grade: "Certified Reference Material",
    packagingSizes: [
      { id: "ph4-500ml", size: "500", unit: "mL", sku: "PH4-500ML" },
      { id: "ph7-500ml", size: "500", unit: "mL", sku: "PH7-500ML" },
      { id: "ph10-500ml", size: "500", unit: "mL", sku: "PH10-500ML" }
    ],
    specifications: [
      "pH 4.00 ± 0.01 at 25°C",
      "pH 7.00 ± 0.01 at 25°C",
      "pH 10.00 ± 0.01 at 25°C"
    ],
    applications: [
      "pH meter calibration",
      "Quality control",
      "Analytical chemistry"
    ],
    msdsUrl: "/msds/ph-buffer.pdf",
    imageUrl: "/images/products/ph-buffer.svg",
    inStock: true,
    featured: true
  },
  // Honeywell Products
  {
    id: "honeywell-acetone",
    name: "Acetone",
    casNumber: "67-64-1",
    manufacturer: "Honeywell",
    description: "High purity acetone for analytical and laboratory applications.",
    category: "solvents",
    purity: "≥99.8%",
    grade: "HPLC",
    packagingSizes: [
      { id: "acetone-1l", size: "1", unit: "L", sku: "HON-ACET-1L" },
      { id: "acetone-2.5l", size: "2.5", unit: "L", sku: "HON-ACET-2.5L" }
    ],
    specifications: [
      "Purity (GC): ≥99.8%",
      "Water Content: ≤0.05%",
      "Residue after Evaporation: ≤0.001%"
    ],
    applications: [
      "Solvent extraction",
      "Cleaning applications",
      "Organic synthesis"
    ],
    msdsUrl: "/msds/acetone.pdf",
    imageUrl: "/images/products/placeholder/placeholder-chemical.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "honeywell-ethanol",
    name: "Ethanol",
    casNumber: "64-17-5",
    manufacturer: "Honeywell",
    description: "Absolute ethanol for analytical and research applications.",
    category: "solvents",
    purity: "≥99.9%",
    grade: "Analytical Reagent",
    packagingSizes: [
      { id: "ethanol-1l", size: "1", unit: "L", sku: "HON-ETH-1L" },
      { id: "ethanol-2.5l", size: "2.5", unit: "L", sku: "HON-ETH-2.5L" }
    ],
    specifications: [
      "Purity (GC): ≥99.9%",
      "Water Content: ≤0.1%",
      "Non-volatile Matter: ≤0.001%"
    ],
    applications: [
      "Analytical chemistry",
      "Biological research",
      "Pharmaceutical applications"
    ],
    msdsUrl: "/msds/ethanol.pdf",
    imageUrl: "/images/products/placeholder/placeholder-chemical.jpg",
    inStock: true,
    featured: false
  },
  // Borosil Products
  {
    id: "borosil-beaker",
    name: "Borosilicate Beaker Set",
    casNumber: "N/A",
    manufacturer: "Borosil",
    description: "High-quality borosilicate glass beakers for laboratory use.",
    category: "lab-equipment",
    purity: "N/A",
    grade: "Laboratory Grade",
    packagingSizes: [
      { id: "beaker-set", size: "Set", unit: "5 pieces", sku: "BOR-BEAKER-SET" }
    ],
    specifications: [
      "Borosilicate 3.3 glass",
      "Temperature resistant up to 500°C",
      "Graduated markings"
    ],
    applications: [
      "General laboratory use",
      "Heating applications",
      "Chemical reactions"
    ],
    msdsUrl: "/msds/glassware.pdf",
    imageUrl: "/images/products/placeholder/placeholder-equipment.jpg",
    inStock: true,
    featured: true
  },
  {
    id: "borosil-flask",
    name: "Volumetric Flask",
    casNumber: "N/A",
    manufacturer: "Borosil",
    description: "Precision volumetric flasks for accurate measurements.",
    category: "lab-equipment",
    purity: "N/A",
    grade: "Class A",
    packagingSizes: [
      { id: "flask-100ml", size: "100", unit: "mL", sku: "BOR-FLASK-100" },
      { id: "flask-250ml", size: "250", unit: "mL", sku: "BOR-FLASK-250" }
    ],
    specifications: [
      "Class A accuracy",
      "Borosilicate 3.3 glass",
      "Calibrated to contain"
    ],
    applications: [
      "Precise volume measurements",
      "Standard solution preparation",
      "Analytical chemistry"
    ],
    msdsUrl: "/msds/glassware.pdf",
    imageUrl: "/images/products/volumetric-flask.svg",
    inStock: true,
    featured: false
  },
  // Fisher Scientific Products
  {
    id: "fisher-pipette",
    name: "Digital Pipette",
    casNumber: "N/A",
    manufacturer: "Fisher Scientific",
    description: "Precision digital pipette for accurate liquid handling.",
    category: "lab-equipment",
    purity: "N/A",
    grade: "Laboratory Grade",
    packagingSizes: [
      { id: "pipette-1000ul", size: "1000", unit: "μL", sku: "FISH-PIP-1000" },
      { id: "pipette-200ul", size: "200", unit: "μL", sku: "FISH-PIP-200" }
    ],
    specifications: [
      "Digital display",
      "Adjustable volume",
      "Ergonomic design"
    ],
    applications: [
      "Precise liquid transfer",
      "Sample preparation",
      "Analytical procedures"
    ],
    msdsUrl: "/msds/pipette.pdf",
    imageUrl: "/images/products/placeholder/placeholder-equipment.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "fisher-centrifuge",
    name: "Laboratory Centrifuge",
    casNumber: "N/A",
    manufacturer: "Fisher Scientific",
    description: "High-speed centrifuge for sample separation and analysis.",
    category: "lab-equipment",
    purity: "N/A",
    grade: "Laboratory Grade",
    packagingSizes: [
      { id: "centrifuge", size: "1", unit: "unit", sku: "FISH-CENT-001" }
    ],
    specifications: [
      "Max speed: 15,000 RPM",
      "Digital controls",
      "Safety features"
    ],
    applications: [
      "Sample separation",
      "Cell culture",
      "Protein purification"
    ],
    msdsUrl: "/msds/centrifuge.pdf",
    imageUrl: "/images/products/placeholder/placeholder-equipment.jpg",
    inStock: false,
    featured: false
  },
  // VWR Products
  {
    id: "vwr-gloves",
    name: "Nitrile Gloves",
    casNumber: "N/A",
    manufacturer: "VWR",
    description: "Disposable nitrile gloves for laboratory safety.",
    category: "consumables",
    purity: "N/A",
    grade: "Laboratory Grade",
    packagingSizes: [
      { id: "gloves-100", size: "100", unit: "pairs", sku: "VWR-GLOVE-100" },
      { id: "gloves-500", size: "500", unit: "pairs", sku: "VWR-GLOVE-500" }
    ],
    specifications: [
      "Nitrile material",
      "Powder-free",
      "Chemical resistant"
    ],
    applications: [
      "Laboratory safety",
      "Chemical handling",
      "General protection"
    ],
    msdsUrl: "/msds/gloves.pdf",
    imageUrl: "/images/products/placeholder/placeholder-equipment.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "vwr-tubes",
    name: "Centrifuge Tubes",
    casNumber: "N/A",
    manufacturer: "VWR",
    description: "High-quality centrifuge tubes for sample processing.",
    category: "consumables",
    purity: "N/A",
    grade: "Laboratory Grade",
    packagingSizes: [
      { id: "tubes-15ml", size: "15", unit: "mL", sku: "VWR-TUBE-15" },
      { id: "tubes-50ml", size: "50", unit: "mL", sku: "VWR-TUBE-50" }
    ],
    specifications: [
      "Polypropylene material",
      "Sterile",
      "Graduated markings"
    ],
    applications: [
      "Sample storage",
      "Centrifugation",
      "Cell culture"
    ],
    msdsUrl: "/msds/tubes.pdf",
    imageUrl: "/images/products/placeholder/placeholder-equipment.jpg",
    inStock: true,
    featured: false
  }
]

export const featuredProducts = products.filter(product => product.featured)

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.casNumber.toLowerCase().includes(searchTerm) ||
    product.manufacturer.toLowerCase().includes(searchTerm)
  )
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId)
}

export const getProductCategories = () => [
  { id: "organic-chemicals", name: "Organic Chemicals" },
  { id: "inorganic-chemicals", name: "Inorganic Chemicals" },
  { id: "solvents", name: "Solvents" },
  { id: "reagents", name: "Reagents" },
  { id: "analytical-standards", name: "Analytical Standards" },
  { id: "laboratory-glassware", name: "Laboratory Glassware" }
]
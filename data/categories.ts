import { FlaskConical, Microscope, Atom, HeartPulse, Pill, TestTube, Thermometer } from "lucide-react"

export interface Category {
  id: string
  name: string
  description: string
  icon: any // Lucide icon component
  subcategories: {
    id: string
    name: string
    description?: string
  }[]
}

export const categories = [
  {
    id: "fine-chemicals",
    name: "Fine Chemicals",
    description: "High-purity chemicals for research, analysis, and synthesis",
    icon: FlaskConical,
    subcategories: [
      {
        id: "amino-acids",
        name: "Amino Acids & Derivatives",
        description: "Natural and synthetic amino acids, protected amino acids, and derivatives"
      },
      {
        id: "organic-compounds",
        name: "Organic Compounds",
        description: "High purity organic chemicals for synthesis and research"
      },
      {
        id: "inorganic-compounds",
        name: "Inorganic Compounds",
        description: "Pure inorganic chemicals and compounds"
      },
      {
        id: "solvents",
        name: "Solvents",
        description: "High purity solvents for various applications"
      }
    ]
  },
  {
    id: "analytical-reagents",
    name: "Analytical Reagents",
    description: "Premium grade reagents for precise analytical applications",
    icon: Atom,
    subcategories: [
      {
        id: "ar-grade",
        name: "AR Grade Chemicals",
        description: "Analytical reagent grade chemicals for accurate analysis"
      },
      {
        id: "hplc-solvents",
        name: "HPLC Solvents",
        description: "Ultra pure solvents for HPLC applications"
      },
      {
        id: "volumetric-solutions",
        name: "Volumetric Solutions",
        description: "Standardized solutions for volumetric analysis"
      },
      {
        id: "indicators",
        name: "Indicators & Stains",
        description: "Chemical indicators and staining solutions"
      }
    ]
  },
  {
    id: "life-science",
    name: "Life Science Products",
    description: "Specialized products for biological research and analysis",
    icon: HeartPulse,
    subcategories: [
      {
        id: "biochemicals",
        name: "Biochemicals",
        description: "Pure biochemicals for life science research"
      },
      {
        id: "culture-media",
        name: "Culture Media",
        description: "Media and supplements for cell culture"
      },
      {
        id: "molecular-biology",
        name: "Molecular Biology",
        description: "Reagents for molecular biology applications"
      },
      {
        id: "antibiotics",
        name: "Antibiotics",
        description: "Antibiotics for research and media preparation"
      }
    ]
  },
  {
    id: "lab-chemicals",
    name: "Laboratory Chemicals",
    description: "Essential chemicals for routine laboratory use",
    icon: TestTube,
    subcategories: [
      {
        id: "lr-grade",
        name: "LR Grade Chemicals",
        description: "Laboratory reagent grade chemicals"
      },
      {
        id: "karl-fischer",
        name: "Karl Fischer Reagents",
        description: "Reagents for moisture determination"
      },
      {
        id: "buffer-solutions",
        name: "Buffer Solutions",
        description: "Ready-to-use and concentrated buffer solutions"
      },
      {
        id: "cleaning-solutions",
        name: "Cleaning Solutions",
        description: "Laboratory cleaning and maintenance solutions"
      }
    ]
  },
  {
    id: "chromatography",
    name: "Chromatography",
    description: "Complete range of chromatography products and supplies",
    icon: Thermometer,
    subcategories: [
      {
        id: "hplc-columns",
        name: "HPLC Columns",
        description: "Analytical and preparative HPLC columns"
      },
      {
        id: "tlc",
        name: "TLC Products",
        description: "TLC plates and development systems"
      },
      {
        id: "gc-columns",
        name: "GC Columns",
        description: "Gas chromatography columns and accessories"
      },
      {
        id: "standards",
        name: "Standards & References",
        description: "Chromatography standards and reference materials"
      }
    ]
  },
  {
    id: "instruments",
    name: "Laboratory Instruments",
    description: "Precision instruments for accurate analysis and research",
    icon: Microscope,
    subcategories: [
      {
        id: "analytical-instruments",
        name: "Analytical Instruments",
        description: "Instruments for chemical analysis"
      },
      {
        id: "measuring-instruments",
        name: "Measuring Instruments",
        description: "Precision measurement devices"
      },
      {
        id: "lab-equipment",
        name: "Lab Equipment",
        description: "General laboratory equipment"
      },
      {
        id: "testing-equipment",
        name: "Testing Equipment",
        description: "Equipment for material testing"
      }
    ]
  }
]

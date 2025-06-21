import { FlaskConical, Microscope, Atom, HeartPulse, Pill, TestTube, Thermometer, Beaker, Settings, Package } from "lucide-react"

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
    id: "organic-chemicals",
    name: "Organic Chemicals",
    description: "High-purity organic chemicals for research, analysis, and synthesis",
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
        id: "reagents",
        name: "Organic Reagents",
        description: "Reagents for organic synthesis and analysis"
      }
    ]
  },
  {
    id: "inorganic-chemicals",
    name: "Inorganic Chemicals",
    description: "Pure inorganic chemicals and compounds for laboratory use",
    icon: Atom,
    subcategories: [
      {
        id: "salts",
        name: "Inorganic Salts",
        description: "High purity inorganic salts and compounds"
      },
      {
        id: "acids",
        name: "Inorganic Acids",
        description: "Concentrated inorganic acids"
      },
      {
        id: "bases",
        name: "Inorganic Bases",
        description: "Inorganic bases and hydroxides"
      },
      {
        id: "oxides",
        name: "Metal Oxides",
        description: "Metal oxides and related compounds"
      }
    ]
  },
  {
    id: "solvents",
    name: "Solvents",
    description: "High purity solvents for chromatography, analysis, and synthesis",
    icon: Beaker,
    subcategories: [
      {
        id: "hplc-solvents",
        name: "HPLC Solvents",
        description: "Ultra pure solvents for HPLC applications"
      },
      {
        id: "analytical-solvents",
        name: "Analytical Solvents",
        description: "High purity solvents for analytical chemistry"
      },
      {
        id: "organic-solvents",
        name: "Organic Solvents",
        description: "Common organic solvents for synthesis"
      },
      {
        id: "aqueous-solvents",
        name: "Aqueous Solvents",
        description: "Water-based solvents and solutions"
      }
    ]
  },
  {
    id: "reagents",
    name: "Reagents",
    description: "Analytical and laboratory reagents for precise applications",
    icon: TestTube,
    subcategories: [
      {
        id: "ar-grade",
        name: "AR Grade Reagents",
        description: "Analytical reagent grade chemicals"
      },
      {
        id: "buffer-solutions",
        name: "Buffer Solutions",
        description: "Ready-to-use and concentrated buffer solutions"
      },
      {
        id: "indicators",
        name: "Indicators & Stains",
        description: "Chemical indicators and staining solutions"
      },
      {
        id: "standards",
        name: "Reference Standards",
        description: "Certified reference materials and standards"
      }
    ]
  },
  {
    id: "analytical-standards",
    name: "Analytical Standards",
    description: "Certified reference materials and analytical standards",
    icon: Microscope,
    subcategories: [
      {
        id: "certified-standards",
        name: "Certified Standards",
        description: "Certified reference materials for analysis"
      },
      {
        id: "calibration-standards",
        name: "Calibration Standards",
        description: "Standards for instrument calibration"
      },
      {
        id: "quality-control",
        name: "Quality Control",
        description: "Materials for quality control procedures"
      }
    ]
  },
  {
    id: "laboratory-glassware",
    name: "Laboratory Glassware",
    description: "High-quality laboratory glassware and equipment",
    icon: Thermometer,
    subcategories: [
      {
        id: "volumetric",
        name: "Volumetric Glassware",
        description: "Precision volumetric flasks, pipettes, and burettes"
      },
      {
        id: "general-glassware",
        name: "General Glassware",
        description: "Beakers, flasks, and general laboratory glassware"
      },
      {
        id: "chromatography",
        name: "Chromatography Glassware",
        description: "Specialized glassware for chromatography"
      },
      {
        id: "accessories",
        name: "Glassware Accessories",
        description: "Stoppers, adapters, and other accessories"
      }
    ]
  },
  {
    id: "lab-equipment",
    name: "Laboratory Equipment",
    description: "Professional laboratory equipment and instruments",
    icon: Settings,
    subcategories: [
      {
        id: "analytical-instruments",
        name: "Analytical Instruments",
        description: "Spectrophotometers, chromatographs, and analytical equipment"
      },
      {
        id: "measurement-devices",
        name: "Measurement Devices",
        description: "Pipettes, balances, and precision measurement tools"
      },
      {
        id: "heating-equipment",
        name: "Heating Equipment",
        description: "Hot plates, ovens, and heating devices"
      },
      {
        id: "safety-equipment",
        name: "Safety Equipment",
        description: "Fume hoods, safety cabinets, and protective equipment"
      }
    ]
  },
  {
    id: "consumables",
    name: "Lab Consumables",
    description: "Essential laboratory consumables and supplies",
    icon: Package,
    subcategories: [
      {
        id: "disposables",
        name: "Disposable Items",
        description: "Gloves, pipette tips, and disposable labware"
      },
      {
        id: "storage-containers",
        name: "Storage Containers",
        description: "Tubes, bottles, and storage solutions"
      },
      {
        id: "filters",
        name: "Filters & Membranes",
        description: "Filter papers, membranes, and filtration supplies"
      },
      {
        id: "cleaning-supplies",
        name: "Cleaning Supplies",
        description: "Cleaning solutions and laboratory maintenance supplies"
      }
    ]
  }
]

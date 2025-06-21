import { 
  FlaskConical, 
  GraduationCap, 
  Pill, 
  Dna, 
  Factory, 
  TestTubes,
  Microscope,
  Beaker,
  Atom,
  Shield,
  Zap,
  Leaf
} from "lucide-react"

export interface Industry {
  id: string
  name: string
  description: string
  icon: any
  categories: {
    id: string
    name: string
    description: string
    productCount: number
  }[]
  featured: boolean
  applications: string[]
  certifications?: string[]
  specialties?: string[]
  marketSize?: string
  growthRate?: string
}

export const industries: Industry[] = [
  {
    id: "research-institutions",
    name: "Research Institutions",
    description: "Supporting groundbreaking research with high-purity chemicals and reliable supplies for cutting-edge scientific discoveries.",
    icon: FlaskConical,
    categories: [
      {
        id: "analytical-standards",
        name: "Analytical Standards",
        description: "Certified reference materials for precise analysis",
        productCount: 150
      },
      {
        id: "research-chemicals",
        name: "Research Chemicals",
        description: "High-purity chemicals for research applications",
        productCount: 300
      },
      {
        id: "lab-equipment",
        name: "Laboratory Equipment",
        description: "Professional lab equipment and instruments",
        productCount: 200
      }
    ],
    featured: true,
    applications: [
      "Basic research",
      "Applied research",
      "Method development",
      "Quality assurance"
    ],
    certifications: [
      "ISO 17025",
      "GLP Compliance"
    ],
    specialties: [
      "Custom synthesis",
      "Analytical method development",
      "Research collaboration"
    ],
    marketSize: "$45B",
    growthRate: "8.2%"
  },
  {
    id: "academic-institutions",
    name: "Academic Institutions",
    description: "Providing educational institutions with quality chemicals and supplies for teaching and research laboratories.",
    icon: GraduationCap,
    categories: [
      {
        id: "laboratory-chemicals",
        name: "Laboratory Chemicals",
        description: "Educational grade chemicals for teaching",
        productCount: 250
      },
      {
        id: "glassware",
        name: "Laboratory Glassware",
        description: "High-quality glassware for educational use",
        productCount: 180
      },
      {
        id: "safety-equipment",
        name: "Safety Equipment",
        description: "Safety supplies and protective equipment",
        productCount: 120
      }
    ],
    featured: true,
    applications: [
      "Student laboratories",
      "Research projects",
      "Demonstrations",
      "Practical training"
    ],
    certifications: [
      "Educational standards",
      "Safety compliance"
    ],
    specialties: [
      "Educational packages",
      "Curriculum support",
      "Student safety training"
    ],
    marketSize: "$12B",
    growthRate: "5.8%"
  },
  {
    id: "pharmaceutical-companies",
    name: "Pharmaceutical Companies",
    description: "Supplying pharmaceutical research and development with precise analytical standards and high-quality reagents.",
    icon: Pill,
    categories: [
      {
        id: "api-standards",
        name: "API Standards",
        description: "Active pharmaceutical ingredient standards",
        productCount: 200
      },
      {
        id: "hplc-solvents",
        name: "HPLC Solvents",
        description: "Ultra-pure solvents for chromatography",
        productCount: 150
      },
      {
        id: "reference-materials",
        name: "Reference Materials",
        description: "Certified reference materials for pharma",
        productCount: 100
      }
    ],
    featured: true,
    applications: [
      "Drug development",
      "Quality control",
      "Regulatory compliance",
      "Clinical trials"
    ],
    certifications: [
      "USP/EP/JP standards",
      "FDA compliance",
      "GMP guidelines"
    ],
    specialties: [
      "Pharmaceutical analysis",
      "Method validation",
      "Regulatory support"
    ],
    marketSize: "$1.4T",
    growthRate: "12.5%"
  },
  {
    id: "biotechnology-labs",
    name: "Biotechnology Labs",
    description: "Supporting biotech innovation with specialized biochemicals and molecular biology reagents for cutting-edge research.",
    icon: Dna,
    categories: [
      {
        id: "biochemicals",
        name: "Biochemicals",
        description: "High-purity biochemical reagents",
        productCount: 180
      },
      {
        id: "molecular-biology",
        name: "Molecular Biology Reagents",
        description: "Reagents for genetic research",
        productCount: 220
      },
      {
        id: "cell-culture",
        name: "Cell Culture Media",
        description: "Media and supplements for cell culture",
        productCount: 90
      }
    ],
    featured: true,
    applications: [
      "Genetic engineering",
      "Protein expression",
      "Cell culture",
      "Bioinformatics"
    ],
    certifications: [
      "Molecular biology grade",
      "Cell culture tested",
      "Endotoxin free"
    ],
    specialties: [
      "Custom oligonucleotides",
      "Protein expression systems",
      "Cell line development"
    ],
    marketSize: "$95B",
    growthRate: "15.3%"
  },
  {
    id: "chemical-industries",
    name: "Chemical Industries",
    description: "Providing industrial-grade chemicals and raw materials for manufacturing processes and industrial applications.",
    icon: Factory,
    categories: [
      {
        id: "industrial-chemicals",
        name: "Industrial Chemicals",
        description: "Bulk industrial chemicals",
        productCount: 300
      },
      {
        id: "process-chemicals",
        name: "Process Chemicals",
        description: "Chemicals for manufacturing processes",
        productCount: 250
      },
      {
        id: "bulk-supplies",
        name: "Bulk Supplies",
        description: "Large volume chemical supplies",
        productCount: 180
      }
    ],
    featured: false,
    applications: [
      "Manufacturing",
      "Process optimization",
      "Quality control",
      "R&D"
    ],
    certifications: [
      "Industrial grade",
      "ISO 9001",
      "Safety standards"
    ],
    specialties: [
      "Bulk supply",
      "Custom formulations",
      "Technical support"
    ],
    marketSize: "$4.7T",
    growthRate: "6.8%"
  },
  {
    id: "testing-laboratories",
    name: "Testing Laboratories",
    description: "Equipping testing labs with certified reference materials and analytical reagents for accurate testing and analysis.",
    icon: TestTubes,
    categories: [
      {
        id: "analytical-standards",
        name: "Analytical Standards",
        description: "Certified reference materials",
        productCount: 200
      },
      {
        id: "quality-control",
        name: "Quality Control Materials",
        description: "Materials for QC procedures",
        productCount: 150
      },
      {
        id: "testing-reagents",
        name: "Testing Reagents",
        description: "Reagents for analytical testing",
        productCount: 180
      }
    ],
    featured: false,
    applications: [
      "Environmental testing",
      "Food safety",
      "Clinical diagnostics",
      "Material testing"
    ],
    certifications: [
      "ISO 17025",
      "Accreditation standards",
      "Method validation"
    ],
    specialties: [
      "Method development",
      "Quality assurance",
      "Accreditation support"
    ],
    marketSize: "$35B",
    growthRate: "9.1%"
  },
  {
    id: "environmental-labs",
    name: "Environmental Laboratories",
    description: "Supporting environmental analysis with specialized reagents and standards for environmental monitoring and compliance.",
    icon: Leaf,
    categories: [
      {
        id: "environmental-standards",
        name: "Environmental Standards",
        description: "Standards for environmental analysis",
        productCount: 120
      },
      {
        id: "water-analysis",
        name: "Water Analysis Reagents",
        description: "Reagents for water quality testing",
        productCount: 90
      },
      {
        id: "air-monitoring",
        name: "Air Monitoring Supplies",
        description: "Supplies for air quality analysis",
        productCount: 60
      }
    ],
    featured: false,
    applications: [
      "Water quality testing",
      "Air quality monitoring",
      "Soil analysis",
      "Waste management"
    ],
    certifications: [
      "EPA methods",
      "Environmental standards",
      "Quality assurance"
    ],
    specialties: [
      "Environmental compliance",
      "Method validation",
      "Regulatory support"
    ],
    marketSize: "$8.5B",
    growthRate: "7.2%"
  },
  {
    id: "food-beverage",
    name: "Food & Beverage Industry",
    description: "Providing food safety testing reagents and quality control materials for the food and beverage industry.",
    icon: Beaker,
    categories: [
      {
        id: "food-safety",
        name: "Food Safety Testing",
        description: "Reagents for food safety analysis",
        productCount: 100
      },
      {
        id: "quality-control",
        name: "Quality Control Materials",
        description: "Materials for food QC",
        productCount: 80
      },
      {
        id: "nutritional-analysis",
        name: "Nutritional Analysis",
        description: "Reagents for nutritional testing",
        productCount: 70
      }
    ],
    featured: false,
    applications: [
      "Food safety testing",
      "Quality control",
      "Nutritional analysis",
      "Shelf life testing"
    ],
    certifications: [
      "Food grade",
      "HACCP compliance",
      "ISO 22000"
    ],
    specialties: [
      "Food safety compliance",
      "Method validation",
      "Regulatory support"
    ],
    marketSize: "$2.1T",
    growthRate: "4.5%"
  },
  {
    id: "electronics-manufacturing",
    name: "Electronics Manufacturing",
    description: "Supplying high-purity chemicals and materials for semiconductor manufacturing and electronics production.",
    icon: Zap,
    categories: [
      {
        id: "semiconductor-chemicals",
        name: "Semiconductor Chemicals",
        description: "Ultra-pure chemicals for chip manufacturing",
        productCount: 120
      },
      {
        id: "cleaning-solutions",
        name: "Cleaning Solutions",
        description: "Specialized cleaning solutions",
        productCount: 80
      },
      {
        id: "analytical-reagents",
        name: "Analytical Reagents",
        description: "Reagents for electronics testing",
        productCount: 90
      }
    ],
    featured: false,
    applications: [
      "Semiconductor manufacturing",
      "PCB production",
      "Quality control",
      "Failure analysis"
    ],
    certifications: [
      "Electronics grade",
      "Ultra-pure standards",
      "ISO 9001"
    ],
    specialties: [
      "Ultra-pure chemicals",
      "Technical support",
      "Custom formulations"
    ],
    marketSize: "$3.2T",
    growthRate: "11.8%"
  }
] 
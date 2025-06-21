export interface Brand {
  id: string
  name: string
  logo: string
  description: string
  categories: {
    id: string
    name: string
    productCount: number
  }[]
  featured: boolean
  certifications?: string[]
  specialties?: string[]
}

export const brands: Brand[] = [
  {
    id: "srl",
    name: "SRL",
    logo: "/brands/srl.svg",
    description: "SRL Chemicals is one of India's leading manufacturers of laboratory chemicals, diagnostic kits and reagents, with a legacy of over 50 years in producing high-quality research and analytical grade chemicals.",
    categories: [
      {
        id: "fine-chemicals",
        name: "Fine Chemicals",
        productCount: 1500
      },
      {
        id: "analytical-reagents",
        name: "Analytical Reagents",
        productCount: 800
      },
      {
        id: "life-science",
        name: "Life Science Products",
        productCount: 600
      },
      {
        id: "lab-chemicals",
        name: "Laboratory Chemicals",
        productCount: 1200
      }
    ],
    featured: true,
    certifications: [
      "ISO 9001:2015",
      "WHO-GMP",
      "ISO 14001:2015"
    ],
    specialties: [
      "Analytical Grade Chemicals",
      "HPLC Solvents",
      "Culture Media",
      "Biochemicals"
    ]
  },
  {
    id: "merck",
    name: "Merck",
    logo: "/brands/merck.svg",
    description: "Merck, a leading science and technology company, operates across healthcare, life science and electronics. Known for exceptional quality and innovation in chemical and pharmaceutical products.",
    categories: [
      {
        id: "fine-chemicals",
        name: "Fine Chemicals",
        productCount: 2000
      },
      {
        id: "analytical-reagents",
        name: "Analytical Reagents",
        productCount: 1000
      },
      {
        id: "life-science",
        name: "Life Science Products",
        productCount: 800
      }
    ],
    featured: true,
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "ISO 13485"
    ],
    specialties: [
      "Life Science Reagents",
      "Chromatography Standards",
      "Cell Culture Media",
      "Antibodies"
    ]
  },
  {
    id: "sigma-aldrich",
    name: "Sigma-Aldrich",
    logo: "/brands/sigma-aldrich.svg",
    description: "Sigma-Aldrich, now part of Merck, is a leading life science and high technology company, providing superior research chemicals, biochemicals and laboratory materials.",
    categories: [
      {
        id: "fine-chemicals",
        name: "Fine Chemicals",
        productCount: 2500
      },
      {
        id: "analytical-reagents",
        name: "Analytical Reagents",
        productCount: 1200
      },
      {
        id: "life-science",
        name: "Life Science Products",
        productCount: 1500
      }
    ],
    featured: true,
    certifications: [
      "ISO 9001",
      "ISO 14001"
    ],
    specialties: [
      "Research Chemicals",
      "Analytical Standards",
      "Biochemicals",
      "Lab Equipment"
    ]
  },
  {
    id: "honeywell",
    name: "Honeywell",
    logo: "/brands/honeywell.svg",
    description: "Honeywell is a global provider of high-purity research chemicals, solvents, and analytical standards. Known for exceptional quality and consistency in laboratory supplies.",
    categories: [
      {
        id: "solvents",
        name: "Solvents",
        productCount: 800
      },
      {
        id: "analytical-reagents",
        name: "Analytical Reagents",
        productCount: 600
      },
      {
        id: "lab-chemicals",
        name: "Laboratory Chemicals",
        productCount: 900
      }
    ],
    featured: false,
    certifications: [
      "ISO 9001",
      "ISO 14001"
    ],
    specialties: [
      "High-Purity Solvents",
      "Analytical Standards",
      "HPLC Grade Chemicals",
      "Research Chemicals"
    ]
  },
  {
    id: "thermo-fisher",
    name: "Thermo Fisher",
    logo: "/brands/thermo-fisher.svg",
    description: "Thermo Fisher Scientific is a world leader in serving science with innovative solutions for research, analysis, discovery, and diagnostics.",
    categories: [
      {
        id: "lab-equipment",
        name: "Laboratory Equipment",
        productCount: 1200
      },
      {
        id: "life-science",
        name: "Life Science Products",
        productCount: 1000
      },
      {
        id: "analytical-reagents",
        name: "Analytical Reagents",
        productCount: 800
      }
    ],
    featured: true,
    certifications: [
      "ISO 9001",
      "ISO 13485",
      "FDA Registered"
    ],
    specialties: [
      "Analytical Instruments",
      "Life Science Reagents",
      "Lab Equipment",
      "Diagnostic Products"
    ]
  },
  {
    id: "borosil",
    name: "Borosil",
    logo: "/brands/borosil.svg",
    description: "Borosil is a leading manufacturer of laboratory glassware, equipment, and scientific instruments. Known for high-quality borosilicate glass products.",
    categories: [
      {
        id: "lab-equipment",
        name: "Laboratory Equipment",
        productCount: 700
      },
      {
        id: "glassware",
        name: "Laboratory Glassware",
        productCount: 500
      },
      {
        id: "instruments",
        name: "Scientific Instruments",
        productCount: 300
      }
    ],
    featured: false,
    certifications: [
      "ISO 9001",
      "ISO 14001"
    ],
    specialties: [
      "Borosilicate Glassware",
      "Lab Equipment",
      "Scientific Instruments",
      "Measuring Devices"
    ]
  },
  {
    id: "fisher-scientific",
    name: "Fisher Scientific",
    logo: "/brands/fisher-scientific.svg",
    description: "Fisher Scientific is a leading supplier of laboratory equipment, chemicals, and supplies. Part of Thermo Fisher Scientific, offering comprehensive lab solutions.",
    categories: [
      {
        id: "lab-equipment",
        name: "Laboratory Equipment",
        productCount: 1500
      },
      {
        id: "lab-chemicals",
        name: "Laboratory Chemicals",
        productCount: 1000
      },
      {
        id: "consumables",
        name: "Lab Consumables",
        productCount: 800
      }
    ],
    featured: false,
    certifications: [
      "ISO 9001",
      "ISO 14001"
    ],
    specialties: [
      "Lab Equipment",
      "Laboratory Supplies",
      "Safety Equipment",
      "Consumables"
    ]
  },
  {
    id: "vwr",
    name: "VWR",
    logo: "/brands/vwr.svg",
    description: "VWR International is a global laboratory supply and distribution company, providing chemicals, equipment, and consumables for research and clinical laboratories.",
    categories: [
      {
        id: "lab-chemicals",
        name: "Laboratory Chemicals",
        productCount: 1800
      },
      {
        id: "lab-equipment",
        name: "Laboratory Equipment",
        productCount: 1200
      },
      {
        id: "consumables",
        name: "Lab Consumables",
        productCount: 1000
      }
    ],
    featured: false,
    certifications: [
      "ISO 9001",
      "ISO 14001"
    ],
    specialties: [
      "Laboratory Supplies",
      "Research Chemicals",
      "Lab Equipment",
      "Safety Products"
    ]
  }
]

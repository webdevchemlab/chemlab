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
    logo: "https://www.srlchem.com/SRL/images/logo1.png",
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
    logo: "https://www.sigmaaldrich.com/static/logos/purple/merck.svg",
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
    ]
  }
]

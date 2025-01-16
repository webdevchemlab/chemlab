import { Metadata } from "next"
import { BrandDetails } from "@/components/brands/brand-details"

export interface Brand {
  id: string
  slug: string
  name: string
  description: string
  logo: string
  productCount: number
  founded: string
  headquarters: string
  website: string
  categories: string[]
}

// Mock data - replace with actual data from your backend
const brands: Brand[] = [
  {
    id: "1",
    slug: "sigma-aldrich",
    name: "Sigma Aldrich",
    description: "Global leader in chemical manufacturing and distribution",
    logo: "/brands/sigma-aldrich.svg",
    productCount: 150,
    founded: "1975",
    headquarters: "St. Louis, Missouri, USA",
    website: "https://www.sigmaaldrich.com",
    categories: ["Analytical Standards", "Solvents", "Reagents"]
  },
  {
    id: "2",
    slug: "merck",
    name: "Merck",
    description: "Leading science and technology company in healthcare, life science and electronics",
    logo: "/brands/merck.svg",
    productCount: 120,
    founded: "1668",
    headquarters: "Darmstadt, Germany",
    website: "https://www.merckgroup.com",
    categories: ["Pharmaceuticals", "Lab Chemicals", "Chromatography"]
  },
  {
    id: "3",
    slug: "srl",
    name: "SRL",
    description: "Premier manufacturer of laboratory chemicals and reagents",
    logo: "/brands/srl.svg",
    productCount: 80,
    founded: "1955",
    headquarters: "Mumbai, India",
    website: "https://www.srlchem.com",
    categories: ["Lab Chemicals", "Biochemicals", "Standards"]
  },
  {
    id: "4",
    slug: "honeywell",
    name: "Honeywell",
    description: "Global provider of high-purity research chemicals",
    logo: "/brands/honeywell.svg",
    productCount: 90,
    founded: "1906",
    headquarters: "Charlotte, North Carolina, USA",
    website: "https://lab.honeywell.com",
    categories: ["Research Chemicals", "Solvents", "Standards"]
  },
  {
    id: "5",
    slug: "thermo-fisher",
    name: "Thermo Fisher",
    description: "World leader in serving science with innovative solutions",
    logo: "/brands/thermo-fisher.svg",
    productCount: 200,
    founded: "1956",
    headquarters: "Waltham, Massachusetts, USA",
    website: "https://www.thermofisher.com",
    categories: ["Lab Equipment", "Chemicals", "Life Sciences"]
  },
  {
    id: "6",
    slug: "borosil",
    name: "Borosil",
    description: "Leading manufacturer of laboratory glassware and equipment",
    logo: "/brands/borosil.svg",
    productCount: 60,
    founded: "1962",
    headquarters: "Mumbai, India",
    website: "https://www.borosil.com",
    categories: ["Glassware", "Lab Equipment", "Instruments"]
  }
]

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brand = brands.find(b => b.slug === params.slug)

  if (!brand) {
    return {
      title: "Brand Not Found - ChemLab Synthesis",
      description: "The requested brand could not be found on ChemLab Synthesis."
    }
  }

  return {
    title: `${brand.name} - ChemLab Synthesis`,
    description: brand.description
  }
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find(b => b.slug === params.slug)
  if (!brand) return null
  return <BrandDetails brand={brand} />
} 
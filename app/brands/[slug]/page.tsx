import { Metadata } from "next"
import BrandDetails from "@/components/brands/brand-details"

// Mock data - replace with actual data from your backend
const brands = [
  {
    id: "merck",
    name: "Merck",
    description: "Global leader in life science, offering high-quality chemicals and laboratory products.",
    logo: "/brands/merck.svg",
    productCount: 1200,
    founded: "1668",
    headquarters: "Darmstadt, Germany",
    website: "https://www.merckgroup.com",
    categories: ["Chemicals", "Life Science", "Laboratory", "Research"],
    featuredProducts: [
      {
        id: "1",
        name: "Sodium Chloride",
        casNumber: "7647-14-5",
        purity: "99.5%",
        grade: "ACS",
      },
    ],
  },
  {
    id: "sigma-aldrich",
    name: "Sigma Aldrich",
    description: "Premier supplier of research chemicals, biochemicals, and lab equipment.",
    logo: "/brands/sigma-aldrich.svg",
    productCount: 1500,
    founded: "1935",
    headquarters: "St. Louis, Missouri, USA",
    website: "https://www.sigmaaldrich.com",
    categories: ["Chemicals", "Biochemicals", "Laboratory", "Research"],
    featuredProducts: [
      {
        id: "1",
        name: "Ethanol",
        casNumber: "64-17-5",
        purity: "99.9%",
        grade: "ACS",
      },
    ],
  },
  {
    id: "srl",
    name: "SRL",
    description: "Leading manufacturer of laboratory chemicals and analytical reagents.",
    logo: "/brands/srl.svg",
    productCount: 800,
    founded: "1955",
    headquarters: "Mumbai, India",
    website: "https://www.srlchem.com",
    categories: ["Chemicals", "Reagents", "Laboratory"],
    featuredProducts: [
      {
        id: "1",
        name: "Sulfuric Acid",
        casNumber: "7664-93-9",
        purity: "98%",
        grade: "AR",
      },
    ],
  },
  {
    id: "honeywell",
    name: "Honeywell",
    description: "Trusted provider of research chemicals and high-purity solvents.",
    logo: "/brands/honeywell.svg",
    productCount: 600,
    founded: "1906",
    headquarters: "Charlotte, North Carolina, USA",
    website: "https://www.honeywell.com",
    categories: ["Chemicals", "Solvents", "Research"],
    featuredProducts: [
      {
        id: "1",
        name: "Acetone",
        casNumber: "67-64-1",
        purity: "99.9%",
        grade: "HPLC",
      },
    ],
  },
  {
    id: "thermo-fisher",
    name: "Thermo Fisher",
    description: "Global provider of analytical instruments and laboratory supplies.",
    logo: "/brands/thermo-fisher.svg",
    productCount: 1000,
    founded: "1956",
    headquarters: "Waltham, Massachusetts, USA",
    website: "https://www.thermofisher.com",
    categories: ["Equipment", "Instruments", "Laboratory", "Research"],
    featuredProducts: [
      {
        id: "1",
        name: "pH Meter",
        casNumber: "N/A",
        purity: "N/A",
        grade: "Research",
      },
    ],
  },
  {
    id: "borosil",
    name: "Borosil",
    description: "Leading manufacturer of laboratory glassware and equipment.",
    logo: "/brands/borosil.svg",
    productCount: 400,
    founded: "1962",
    headquarters: "Mumbai, India",
    website: "https://www.borosil.com",
    categories: ["Glassware", "Equipment", "Laboratory"],
    featuredProducts: [
      {
        id: "1",
        name: "Volumetric Flask",
        casNumber: "N/A",
        purity: "N/A",
        grade: "A",
      },
    ],
  },
]

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brand = brands.find((b) => b.id === params.slug)
  
  if (!brand) {
    return {
      title: "Brand Not Found - ChemLab Synthesis",
      description: "The requested brand could not be found.",
    }
  }

  return {
    title: `${brand.name} - ChemLab Synthesis`,
    description: brand.description,
  }
}

export default async function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find((b) => b.id === params.slug)

  if (!brand) {
    return <div>Brand not found</div>
  }

  return <BrandDetails brand={brand} />
} 
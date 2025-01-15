import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products Catalog | ChemLab Synthesis",
  description: "Browse our comprehensive catalog of laboratory chemicals, reagents, and supplies. Filter by category, manufacturer, or search for specific products.",
  keywords: "chemical catalog, lab supplies, research chemicals, analytical standards, laboratory reagents",
  openGraph: {
    title: "Products Catalog | ChemLab Synthesis",
    description: "Browse our comprehensive catalog of laboratory chemicals, reagents, and supplies.",
    type: "website",
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
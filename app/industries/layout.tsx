import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Industries We Serve | ChemLab Synthesis",
  description: "Discover how ChemLab Synthesis serves various industries with high-quality chemicals and laboratory supplies.",
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

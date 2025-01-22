import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | ChemLab Synthesis",
  description: "Learn about ChemLab Synthesis, your trusted partner in chemical supplies and laboratory solutions.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | ChemLab Synthesis",
  description: "Get in touch with ChemLab Synthesis for all your chemical supply needs. Our team is here to help.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

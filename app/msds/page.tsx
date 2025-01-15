import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileText, Download, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "MSDS Database | ChemLab Synthesis",
  description: "Access and download Safety Data Sheets (SDS) for our chemical products.",
}

// Mock data - replace with actual database data
const msdsDocuments = [
  {
    id: "1",
    name: "Sodium Chloride",
    casNumber: "7647-14-5",
    manufacturer: "Sigma-Aldrich",
    revisionDate: "2023-01-15",
    documentUrl: "/msds/sodium-chloride.pdf"
  },
  {
    id: "2",
    name: "Methanol",
    casNumber: "67-56-1",
    manufacturer: "Merck",
    revisionDate: "2023-02-20",
    documentUrl: "/msds/methanol.pdf"
  },
  {
    id: "3",
    name: "Sulfuric Acid",
    casNumber: "7664-93-9",
    manufacturer: "SRL",
    revisionDate: "2023-03-10",
    documentUrl: "/msds/sulfuric-acid.pdf"
  },
  {
    id: "4",
    name: "Hydrochloric Acid",
    casNumber: "7647-01-0",
    manufacturer: "Honeywell",
    revisionDate: "2023-04-05",
    documentUrl: "/msds/hydrochloric-acid.pdf"
  },
  {
    id: "5",
    name: "Ethanol",
    casNumber: "64-17-5",
    manufacturer: "Thermo Fisher",
    revisionDate: "2023-05-12",
    documentUrl: "/msds/ethanol.pdf"
  }
]

export default function MSDSPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto h-16 w-16 text-blue-200" />
            <h1 className="mt-4 text-4xl font-bold">Safety Data Sheets (SDS)</h1>
            <p className="mt-6 text-xl text-blue-100">
              Access and download Safety Data Sheets for all our chemical products.
            </p>
          </div>
        </Container>
      </section>

      {/* Search Section */}
      <section className="border-b py-8">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input 
                  type="search" 
                  placeholder="Search by chemical name or CAS number..." 
                  className="w-full"
                />
              </div>
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* MSDS Table */}
      <section className="py-8">
        <Container>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Chemical Name</TableHead>
                  <TableHead>CAS Number</TableHead>
                  <TableHead>Manufacturer</TableHead>
                  <TableHead>Revision Date</TableHead>
                  <TableHead className="text-right">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {msdsDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.name}</TableCell>
                    <TableCell>{doc.casNumber}</TableCell>
                    <TableCell>{doc.manufacturer}</TableCell>
                    <TableCell>{doc.revisionDate}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={doc.documentUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Container>
      </section>

      {/* Information Section */}
      <section className="bg-muted/50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Need Help?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If you cannot find the SDS you are looking for or need assistance, please contact our 
              technical support team.
            </p>
            <div className="mt-8">
              <Button asChild>
                <a href="/contact">Contact Support</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 
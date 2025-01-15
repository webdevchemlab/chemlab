import { useParams } from "next/navigation"
import { BeakerIcon } from "lucide-react"

// Mock data - replace with actual data from PayloadCMS
const categories = [
  "organic-chemicals",
  "inorganic-salts",
  "solvents",
  "acids-bases",
  "analytical-standards",
  "laboratory-glassware",
]

export async function generateStaticParams() {
  return categories.map((slug) => ({
    slug,
  }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container py-16">
      <div className="mb-8 flex items-center space-x-4">
        <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/50">
          <BeakerIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{categoryName}</h1>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Product cards will be rendered here */}
        <div className="rounded-lg border p-4">
          <div className="mb-4 aspect-square rounded-lg bg-muted"></div>
          <div className="space-y-2">
            <div className="h-4 w-2/3 rounded bg-muted"></div>
            <div className="h-4 w-1/2 rounded bg-muted"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 
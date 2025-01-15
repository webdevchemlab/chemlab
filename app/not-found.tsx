import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
      <div className="mb-4 rounded-full bg-blue-100 p-3">
        <FileQuestion className="h-6 w-6 text-blue-600" />
      </div>
      <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-6 max-w-md text-muted-foreground">
        Sorry, we couldn't find the page you're looking for. Please check the URL or try one of these links:
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  )
} 
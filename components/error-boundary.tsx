"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="mb-4 rounded-full bg-red-100 p-3">
        <AlertTriangle className="h-6 w-6 text-red-600" />
      </div>
      <h2 className="mb-2 text-2xl font-semibold">Something went wrong!</h2>
      <p className="mb-6 max-w-md text-muted-foreground">
        We apologize for the inconvenience. Please try again or contact our support team if the problem persists.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>Try again</Button>
        <Button variant="outline" asChild>
          <a href="/">Go to Homepage</a>
        </Button>
      </div>
    </div>
  )
} 
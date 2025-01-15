import { Loader2 } from "lucide-react"

interface LoadingProps {
  message?: string
}

export function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <Loader2 className="mb-4 h-8 w-8 animate-spin text-blue-500" />
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  )
} 
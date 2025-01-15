"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { FlaskConical } from "lucide-react"

interface ProductImageProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string | null
  name: string
}

export function ProductImage({ image, name, className, ...props }: ProductImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div
      className={cn(
        "relative aspect-square rounded-lg border bg-background",
        className
      )}
      {...props}
    >
      {image && !error ? (
        <Image
          src={image}
          alt={name}
          fill
          className={cn(
            "object-contain p-4 duration-700 ease-in-out",
            isLoading ? "scale-95 blur-sm" : "scale-100 blur-0"
          )}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-muted-foreground">
          <FlaskConical className="h-16 w-16" />
          <p className="text-center text-sm">{name}</p>
        </div>
      )}
    </div>
  )
} 
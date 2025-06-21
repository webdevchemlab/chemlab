"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center space-x-1 text-sm text-slate-400", className)}>
      <Link
        href="/"
        className="flex items-center hover:text-slate-300 transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4 text-slate-500" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-slate-300 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-300">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

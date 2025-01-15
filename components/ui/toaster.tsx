'use client';

import { useEffect, useState } from "react"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

interface ToastData {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function Toaster() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  useEffect(() => {
    const handleToast = (event: Event) => {
      const toastEvent = event as CustomEvent<ToastData>
      setToasts((current) => [...current, toastEvent.detail])
    }

    document.addEventListener("toast", handleToast)
    return () => document.removeEventListener("toast", handleToast)
  }, [])

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, variant }) => (
        <Toast key={id} variant={variant}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          <ToastClose onClick={() => setToasts((current) => current.filter((t) => t.id !== id))} />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}

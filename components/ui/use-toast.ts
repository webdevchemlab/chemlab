import { Toast } from "@/components/ui/toast"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

let count = 0
const genId = () => {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

export function useToast() {
  const toast = ({ title, description, variant = "default" }: ToastProps) => {
    const id = genId()
    // Dispatch a custom event that will be handled by the Toaster component
    const event = new CustomEvent("toast", {
      detail: {
        id,
        title,
        description,
        variant,
      },
    })
    document.dispatchEvent(event)
  }

  return { toast }
} 
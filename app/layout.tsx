import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { metadata } from "./metadata"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        manrope.variable,
        'min-h-screen bg-background font-sans antialiased'
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
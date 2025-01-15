"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BeakerIcon, ShoppingCartIcon, UserCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <span className="font-bold">ChemLab Synthesis</span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${pathname === "/products" ? "text-foreground" : "text-foreground/60"}`}
            >
              Products
            </Link>
            <Link
              href="/categories"
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${pathname === "/categories" ? "text-foreground" : "text-foreground/60"}`}
            >
              Categories
            </Link>
            <Link
              href="/brands"
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${pathname === "/brands" ? "text-foreground" : "text-foreground/60"}`}
            >
              Brands
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button variant="ghost" size="icon">
              <UserCircleIcon className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
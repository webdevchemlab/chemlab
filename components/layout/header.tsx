"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BeakerIcon, ShoppingCartIcon, UserCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <span className="hidden font-bold sm:inline-block">
              ChemLab Synthesis
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/products"
              className={pathname === "/products" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              Products
            </Link>
            <Link
              href="/brands"
              className={pathname === "/brands" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              Brands
            </Link>
            <Link
              href="/industries"
              className={pathname === "/industries" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <ShoppingCartIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircleIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
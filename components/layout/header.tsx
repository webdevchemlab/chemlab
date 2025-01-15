"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BeakerIcon, ShoppingCartIcon, UserCircleIcon, Home, Package, Building2, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Products', url: '/products', icon: Package },
    { name: 'Brands', url: '/brands', icon: Building2 },
    { name: 'Industries', url: '/industries', icon: Building2 },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BeakerIcon className="h-6 w-6 text-blue-500" />
          <span className="hidden font-bold sm:inline-block">
            ChemLab Synthesis
          </span>
        </Link>
        
        <nav className="absolute left-1/2 -translate-x-1/2">
          <NavBar items={navItems} />
        </nav>

        <div className="flex items-center space-x-2">
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
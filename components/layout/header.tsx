"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BeakerIcon, ShoppingCartIcon, UserCircleIcon, Home, Package, Building2, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Products', url: '/products', icon: Package },
    { name: 'Brands', url: '/brands', icon: Building2 },
    { name: 'Industries', url: '/industries', icon: Building2 },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      "bg-transparent",
      scrolled && "bg-slate-950/50 backdrop-blur-md border-b border-slate-800/20"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 relative z-50">
          <BeakerIcon className="h-6 w-6 text-cyan-500" />
        </Link>
        
        <nav className="absolute left-1/2 -translate-x-1/2">
          <NavBar items={navItems} />
        </nav>

        <div className="flex items-center space-x-2 relative z-50">
          <Button variant="ghost" size="icon" className="text-slate-300 hover:text-cyan-400">
            <ShoppingCartIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-300 hover:text-cyan-400">
            <UserCircleIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
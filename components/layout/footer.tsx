import Link from "next/link";
import { BeakerIcon } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <Container className="py-12">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BeakerIcon className="h-6 w-6 text-blue-500" />
              <span className="font-bold">ChemLab Synthesis</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for high-quality chemical synthesis, supplies, and laboratory equipment.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/new-products" className="text-muted-foreground hover:text-foreground">
                  New Products
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-muted-foreground hover:text-foreground">
                  Featured
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Safety & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-foreground">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/msds" className="text-muted-foreground hover:text-foreground">
                  MSDS Database
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ChemLab Synthesis. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
import Link from "next/link";
import { BeakerIcon, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BeakerIcon className="h-6 w-6 text-blue-500" />
              <span className="font-bold">ChemLab Synthesis</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for premium laboratory chemicals and supplies. We provide high-quality chemicals and laboratory equipment to research institutions, universities, and industries.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Products & Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                  Product Categories
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-muted-foreground hover:text-foreground">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-foreground">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-muted-foreground hover:text-foreground">
                  Featured Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety & Support */}
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
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ChemLab Synthesis. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms & Conditions
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
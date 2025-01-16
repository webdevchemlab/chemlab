"use client";

import Link from "next/link";
import { BeakerIcon, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/container";
import BackgroundBoxes from "@/components/ui/background-boxes";

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BackgroundBoxes />

      <Container className="relative z-30 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BeakerIcon className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-slate-100">ChemLab Synthesis</span>
            </Link>
            <p className="text-sm text-slate-300">
              Your trusted partner for premium laboratory chemicals and supplies. We provide high-quality chemicals and laboratory equipment to research institutions, universities, and industries.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-100">Products & Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-slate-100 transition-colors">
                  Product Categories
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-slate-400 hover:text-slate-100 transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-slate-100 transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-slate-400 hover:text-slate-100 transition-colors">
                  Featured Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety & Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-100">Safety & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/safety" className="text-slate-400 hover:text-slate-100 transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/msds" className="text-slate-400 hover:text-slate-100 transition-colors">
                  MSDS Database
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-400 hover:text-slate-100 transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-slate-100 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} ChemLab Synthesis. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/about" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
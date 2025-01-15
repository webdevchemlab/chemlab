"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Merck",
    logo: "/brands/merck.svg",
    href: "/brands/merck"
  },
  {
    name: "Sigma Aldrich",
    logo: "/brands/sigma-aldrich.svg",
    href: "/brands/sigma-aldrich"
  },
  {
    name: "SRL",
    logo: "/brands/srl.svg",
    href: "/brands/srl"
  },
  {
    name: "Honeywell",
    logo: "/brands/honeywell.svg",
    href: "/brands/honeywell"
  },
  {
    name: "Thermo Fisher",
    logo: "/brands/thermo-fisher.svg",
    href: "/brands/thermo-fisher"
  },
  {
    name: "Borosil",
    logo: "/brands/borosil.svg",
    href: "/brands/borosil"
  }
];

export function FeaturedBrands() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Partner Brands</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with leading manufacturers to ensure the highest quality products
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
            >
              <Link href={brand.href} className="group relative flex flex-col items-center">
                <div className="relative h-12 w-24 mb-3">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain transition-opacity group-hover:opacity-80"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {brand.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 